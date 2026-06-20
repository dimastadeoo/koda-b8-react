import { createContext, useContext, useEffect, useState } from "react";
import { makeAuth } from "./AuthContext";

const ProfileContext = createContext(null);
const PROFILE_DATA_KEY = "belimudah_profile_data";

const defaultProfileData = {
  profiles: [],
  addresses: [],
  wishlist: [],
  orders: [],
};

function getLocalStorageData(key, defaultValue) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function formatDateTime() {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());
}

export function ProfileProvider({ children }) {
  const { isLoggedIn, currentUser } = makeAuth();

  const [profileData, setProfileData] = useState(() =>
    getLocalStorageData(PROFILE_DATA_KEY, defaultProfileData)
  );

  useEffect(() => {
    localStorage.setItem(PROFILE_DATA_KEY, JSON.stringify(profileData));
  }, [profileData]);

  const userEmail = currentUser?.email?.trim().toLowerCase() || null;

  const profile =
    profileData.profiles.find((item) => item.userEmail === userEmail) ||
    (currentUser
      ? {
          userEmail,
          name: currentUser.name || "",
          email: currentUser.email || "",
          noTelp: "",
          birth: "",
          gender: "",
        }
      : null);

  const addresses = profileData.addresses.filter(
    (item) => item.userEmail === userEmail
  );

  const wishlistItems = profileData.wishlist.filter(
    (item) => item.userEmail === userEmail
  );

  const orders = profileData.orders.filter(
    (item) => item.userEmail === userEmail
  );

  const saveProfile = (data) => {
    if (!isLoggedIn || !userEmail) {
      return {
        success: false,
        message: "Kamu harus login terlebih dahulu.",
      };
    }

    const updatedProfile = {
      userEmail,
      email: userEmail,
      name: data.name?.trim() || currentUser.name,
      noTelp: data.noTelp?.trim() || "",
      birth: data.birth || "",
      gender: data.gender?.trim() || "",
      updatedAt: new Date().toISOString(),
      updatedAtText: formatDateTime(),
    };

    setProfileData((prev) => {
      const exists = prev.profiles.some(
        (item) => item.userEmail === userEmail
      );

      return {
        ...prev,
        profiles: exists
          ? prev.profiles.map((item) =>
              item.userEmail === userEmail ? updatedProfile : item
            )
          : [...prev.profiles, updatedProfile],
      };
    });

    return {
      success: true,
      message: "Profil berhasil diperbarui.",
    };
  };

  const isWishlisted = (productId) => {
    return wishlistItems.some(
      (item) => item.productId === Number(productId)
    );
  };

  const toggleWishlist = (product) => {
    if (!isLoggedIn || !userEmail) {
      return {
        success: false,
        requireLogin: true,
        message: "Silakan login terlebih dahulu.",
      };
    }

    setProfileData((prev) => {
      const exists = prev.wishlist.some(
        (item) =>
          item.userEmail === userEmail &&
          item.productId === Number(product.id)
      );

      if (exists) {
        return {
          ...prev,
          wishlist: prev.wishlist.filter(
            (item) =>
              !(
                item.userEmail === userEmail &&
                item.productId === Number(product.id)
              )
          ),
        };
      }

      const newWishlistItem = {
        id: crypto.randomUUID(),
        userEmail,
        productId: product.id,
        cartNameContent: product.cartNameContent,
        cartJenisContent: product.cartJenisContent,
        rateContent: product.rateContent,
        reviewContent: product.reviewContent,
        price: product.price,
        badgeContent: product.badgeContent,
        image: product.image,
        addedAt: new Date().toISOString(),
        addedAtText: formatDateTime(),
      };

      return {
        ...prev,
        wishlist: [newWishlistItem, ...prev.wishlist],
      };
    });

    return {
      success: true,
      message: "Wishlist berhasil diperbarui.",
    };
  };

  const addAddress = (data) => {
    if (!isLoggedIn || !userEmail) return;

    const isFirstAddress = addresses.length === 0;

    const newAddress = {
      id: crypto.randomUUID(),
      userEmail,
      label: data.label?.trim() || "Rumah",
      receiverName: data.receiverName?.trim() || "",
      phone: data.phone?.trim() || "",
      detail: data.detail?.trim() || "",
      city: data.city?.trim() || "",
      postalCode: data.postalCode?.trim() || "",
      isPrimary: isFirstAddress,
      createdAt: new Date().toISOString(),
    };

    setProfileData((prev) => ({
      ...prev,
      addresses: [newAddress, ...prev.addresses],
    }));
  };

  const removeAddress = (addressId) => {
    setProfileData((prev) => ({
      ...prev,
      addresses: prev.addresses.filter((item) => item.id !== addressId),
    }));
  };

  const setPrimaryAddress = (addressId) => {
    setProfileData((prev) => ({
      ...prev,
      addresses: prev.addresses.map((item) =>
        item.userEmail === userEmail
          ? {
              ...item,
              isPrimary: item.id === addressId,
            }
          : item
      ),
    }));
  };

  const addOrder = ({ items, total }) => {
    if (!isLoggedIn || !userEmail) return;

    const newOrder = {
      id: `BM${Date.now()}`,
      userEmail,
      items,
      total,
      status: "Dikirim",
      createdAt: new Date().toISOString(),
      createdAtText: formatDateTime(),
    };

    setProfileData((prev) => ({
      ...prev,
      orders: [newOrder, ...prev.orders],
    }));

    return newOrder;
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        addresses,
        wishlistItems,
        orders,
        saveProfile,
        toggleWishlist,
        isWishlisted,
        addAddress,
        removeAddress,
        setPrimaryAddress,
        addOrder,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function makeProfile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useContext(ProfileContext);
}