import { PHONE_NUMBER } from "../../lib/utills";

const WHATSAPP_NUMBER = PHONE_NUMBER.replace(/[^\d]/g, "");
const DEFAULT_MESSAGE = "Hi, I'm interested in your mineral export products. Could you share more details?";

export const WhatsAppButton = () => {
  return (
    <>
      <style>{`
        .wa-fab {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 500;
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(0,0,0,0.25), 0 0 0 rgba(37,211,102,0.5);
          text-decoration: none;
          animation: wa-pulse 2.5s ease-in-out infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .wa-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 26px rgba(0,0,0,0.3), 0 0 0 rgba(37,211,102,0.5);
        }
        @keyframes wa-pulse {
          0%   { box-shadow: 0 6px 20px rgba(0,0,0,0.25), 0 0 0 0 rgba(37,211,102,0.45); }
          70%  { box-shadow: 0 6px 20px rgba(0,0,0,0.25), 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 6px 20px rgba(0,0,0,0.25), 0 0 0 0 rgba(37,211,102,0); }
        }
        @media (max-width: 640px) {
          .wa-fab { right: 16px; bottom: 16px; width: 50px; height: 50px; }
        }
      `}</style>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        className="wa-fab animate-ping"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
          <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.394.7 4.62 1.912 6.494L4 29l7.69-1.878A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.356l-.355-.21-4.566 1.115 1.22-4.449-.232-.365A9.71 9.71 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.758 9.07 26.758 15 21.934 24.75 16.004 24.75Zm5.6-7.36c-.307-.154-1.815-.896-2.096-.998-.281-.102-.486-.154-.69.154-.204.307-.792.998-.972 1.203-.179.204-.358.23-.665.077-.307-.154-1.297-.478-2.47-1.523-.913-.814-1.53-1.82-1.709-2.127-.179-.307-.019-.473.135-.626.139-.138.307-.358.46-.537.154-.18.205-.307.307-.512.102-.204.051-.384-.026-.537-.077-.154-.69-1.663-.945-2.278-.249-.598-.502-.517-.69-.527l-.588-.01c-.204 0-.537.077-.818.384-.281.307-1.074 1.05-1.074 2.56s1.1 2.968 1.253 3.173c.154.204 2.166 3.31 5.249 4.64.734.317 1.307.507 1.754.649.737.234 1.409.201 1.94.122.592-.088 1.815-.742 2.071-1.459.256-.717.256-1.331.179-1.459-.077-.128-.281-.205-.588-.359Z"/>
        </svg>
      </a>
    </>
  );
};
