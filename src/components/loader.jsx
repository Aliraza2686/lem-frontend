import React from "react";

export default function Loader({ show = false, message = "Please wait…" }) {
  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto"
    >
      {/* Backdrop: blurred + translucent */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Centered card with spinner */}
      <div className="relative z-10 flex flex-col items-center gap-4 p-6 rounded-lg">
        <div
          className="flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md shadow-lg"
          aria-hidden="true"
        >
          {/* Spinner */}
          <svg
            className="w-12 h-12 text-white animate-spin"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M45 25a20 20 0 01-20 20 1 1 0 010-40 1 1 0 010 0 20 20 0 0020 20z"
            />
          </svg>
        </div>

        {/* Optional message */}
        <div className="text-center">
          <p className="text-sm font-medium text-white/95">{message}</p>
        </div>
      </div>
    </div>
  );
}
