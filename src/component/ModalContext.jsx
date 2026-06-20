import React from "react";

const ModalContext = React.createContext(null);

export function ModalProvider({ children }) {
  const [modal, setModal] = React.useState({
    open: false,
    type: "alert",
    title: "",
    message: "",
    confirmText: "Ya",
    cancelText: "Batal",
    onConfirm: null,
    onCancel: null,
  });

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const showAlert = ({ title = "Informasi", message = "" }) => {
    return new Promise((resolve) => {
      setModal({
        open: true,
        type: "alert",
        title,
        message,
        confirmText: "OK",
        cancelText: "Batal",
        onConfirm: () => {
          closeModal();
          resolve(true);
        },
        onCancel: null,
      });
    });
  };

  const showConfirm = ({
    title = "Konfirmasi",
    message = "",
    confirmText = "Ya",
    cancelText = "Batal",
  }) => {
    return new Promise((resolve) => {
      setModal({
        open: true,
        type: "confirm",
        title,
        message,
        confirmText,
        cancelText,
        onConfirm: () => {
          closeModal();
          resolve(true);
        },
        onCancel: () => {
          closeModal();
          resolve(false);
        },
      });
    });
  };

  return (
    <ModalContext.Provider value={{ showAlert, showConfirm }}>
      {children}

      {modal.open && (
        <div className="fixed inset-0 z-9999 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 text-center">
              <div
                className={`mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                  modal.type === "confirm"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {modal.type === "confirm" ? "?" : "i"}
              </div>

              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {modal.title}
              </h2>

              <p className="text-sm text-gray-500 leading-relaxed">
                {modal.message}
              </p>
            </div>

            <div className="flex border-t border-gray-100">
              {modal.type === "confirm" && (
                <button
                  type="button"
                  onClick={modal.onCancel}
                  className="flex-1 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  {modal.cancelText}
                </button>
              )}

              <button
                type="button"
                onClick={modal.onConfirm}
                className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                  modal.type === "confirm"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {modal.confirmText}
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function makeModal() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return React.useContext(ModalContext);
}