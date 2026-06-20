import React from "react";

const AuthContext = React.createContext(null);

const USERS_KEY = "belimudah_users";
const SESSION_KEY = "belimudah_login_session";

function getNowDateTime() {
  const date = new Date();

  return {
    iso: date.toISOString(),
    local: new Intl.DateTimeFormat("id-ID", {
      dateStyle: "full",
      timeStyle: "medium",
    }).format(date),
  };
}

function getLocalStorageData(key, defaultValue) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function getSessionStorageData(key, defaultValue) {
  try {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function AuthProvider({ children }) {
  const [users, setUsers] = React.useState(() => {
    return getLocalStorageData(USERS_KEY, []);
  });

  const [currentUser, setCurrentUser] = React.useState(() => {
    const session = getSessionStorageData(SESSION_KEY, null);
    return session?.user || null;
  });

  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
    const session = getSessionStorageData(SESSION_KEY, null);
    return Boolean(session?.isLoggedIn);
  });

  const encodeBase64 = (value) => {
    return btoa(unescape(encodeURIComponent(value)));
  };

  const decodeBase64 = (value) => {
    return decodeURIComponent(escape(atob(value)));
  };

  React.useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  const registerUser = ({ name, email, password }) => {
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    const existingUser = users.find((user) => user.email === cleanEmail);

    if (existingUser) {
      return {
        success: false,
        message: "Email sudah terdaftar. Silakan gunakan email lain.",
      };
    }
    const now = getNowDateTime();
    const newUser = {
      id: crypto.randomUUID(),
      name: cleanName,
      email: cleanEmail,
      // password disimpan dalam Base64
      password: encodeBase64(password),
      role: "user",
      status: "active",
      registeredAt: now.iso,
      registeredAtText: now.local,
      lastLoginAt: null,
      lastLoginAtText: null,
    };

    setUsers((prev) => [...prev, newUser]);

    return {
      success: true,
      message: "Registrasi berhasil. Silakan login.",
      user: newUser,
    };
  };

  const loginUser = (auth) => {
    const {email, password} = auth
    const cleanEmail = email.trim().toLowerCase();
    // password input login juga diubah ke Base64
    const encodedPassword = encodeBase64(password);

    const user = users.find(
      (item) => item.email === cleanEmail && item.password === encodedPassword
    );

    if (!user) {
      return {
        success: false,
        message: "Email atau kata sandi salah.",
      };
    }

    const now = getNowDateTime();

    const updatedUser = {
      ...user,
      lastLoginAt: now.iso,
      lastLoginAtText: now.local,
    };

    const updatedUsers = users.map((item) =>
      item.id === user.id ? updatedUser : item
    );

    setUsers(updatedUsers);

    const sessionUser = {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      status: updatedUser.status,
      registeredAt: updatedUser.registeredAt,
      registeredAtText: updatedUser.registeredAtText,
      lastLoginAt: updatedUser.lastLoginAt,
      lastLoginAtText: updatedUser.lastLoginAtText,
    };

    const sessionData = {
      isLoggedIn: true,
      user: sessionUser,
      loginAt: now.iso,
      loginAtText: now.local,
    };

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));

    setCurrentUser(sessionUser);
    setIsLoggedIn(true);

    return {
      success: true,
      message: "Login berhasil.",
      user: sessionUser,
    };
  };

  const logoutUser = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
    setIsLoggedIn(false);

    return {
      success: true,
      message: "Logout berhasil.",
    };
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        isLoggedIn,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function makeAuth() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return React.useContext(AuthContext);
}