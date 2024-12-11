export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.83L2.2 22l4.17-1.69c1.64 1.19 3.66 1.89 5.83 1.89 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.85 0-3.58-.59-5-1.59l-3.12 1.27 1.27-3.12C4.15 15.58 3.56 13.85 3.56 12c0-4.67 3.77-8.44 8.44-8.44S20.44 7.33 20.44 12 16.67 20.44 12 20.44z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}
