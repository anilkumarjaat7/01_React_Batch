function Navbar() {
  return (
      <nav className="navbar">
      <div className="logo">
        MyWebsite
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Courses</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
