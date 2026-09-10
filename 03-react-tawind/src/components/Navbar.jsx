function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">MyWebsite</div>

        {/* Navigation */}
        <ul className="flex gap-8">
          <li>
            <a href="/" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="/" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="/" className="hover:text-cyan-400 transition">
              Courses
            </a>
          </li>

          <li>
            <a href="/" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
