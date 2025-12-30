export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark fixed-top"
      style={{
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(10px)"
      }}
    >
      <div className="container">
        <button
          className="navbar-brand btn btn-link p-0 text-decoration-none"
          onClick={() => scrollTo("home")}
        >
          <span className="text-white fw-bold">Mohammad</span>
          <span className="text-danger fw-bold">.dev</span>
        </button>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-2 text-center">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollTo("home")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollTo("about")}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollTo("skills")}>
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollTo("projects")}>
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollTo("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
