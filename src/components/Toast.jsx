import { useEffect } from "react";
import "../App.css";

export default function Toast({ message, type = "info", onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button onClick={onClose} aria-label="Close notification">
        ×
      </button>
    </div>
  );
}
