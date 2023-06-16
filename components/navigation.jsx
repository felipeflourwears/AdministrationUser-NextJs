import Link from 'next/link';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-white bg-white">
      <div className="container">
        <Link className="navbar-brand" href="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

