"use client";

import { useEffect } from "react";

export default function SecurityGuardian() {
  useEffect(() => {
    // Only run these protections in production environments
    if (process.env.NODE_ENV === "development") {
      return;
    }

    // 1. Prevent Right-Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Prevent F12 and standard DevTools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
      }
      
      // Ctrl+Shift+I (Inspect)
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.keyCode === 73)) {
        e.preventDefault();
      }
      
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && (e.key === "J" || e.key === "j" || e.keyCode === 74)) {
        e.preventDefault();
      }
      
      // Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === "U" || e.key === "u" || e.keyCode === 85)) {
        e.preventDefault();
      }
    };

    // 3. Clear and override console
    // By overriding console functions, we ensure no data leaks into the console in production
    const noop = () => {};
    if (typeof window !== "undefined" && typeof console !== "undefined") {
      console.log = noop;
      console.info = noop;
      console.warn = noop;
      console.error = noop;
      console.table = noop;
    }

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // This component doesn't render anything
}
