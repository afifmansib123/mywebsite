import React, { useState, useEffect } from "react";

const Toast = () => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        borderRadius: "4px",
        display: showToast ? "block" : "none",
      }}
    >
      Hello, world! This is a toast message.
    </div>
  );
};

export default Toast;
