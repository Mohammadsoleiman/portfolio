import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(10px)" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-white">Mohammad</span><span className="text-danger">.dev</span>
        </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-2">
            <li><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li><NavLink className="nav-link" to="/skills">Skills</NavLink></li>
            <li><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
            <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
