export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-700 pt-10 pb-6 text-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} TimeStudio.ai — All rights reserved.</p>
      <div className="mt-4 flex justify-center gap-6">
        <a
          href="#"
          className="hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </a>
        <a
          href="#"
          className="hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </a>
        <a
          href="mailto:support@timestudio.ai"
          className="hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
