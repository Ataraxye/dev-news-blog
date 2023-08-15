import "../App.css";

const Header = () => {
  return (
    <div className="col container-fluid g-0 sticky-top align-items-center ">
      <div className="container-fluid g-0 text-center">
        <h1
          className="mb-0"
          style={{
            backgroundColor: "blueviolet",
            color: "white",
            fontFamily: "DreamOrphans",
            fontSize: "4em",
          }}
        >
          Le Procrastinateur
        </h1>
      </div>
      <nav
        className="navbar navbar-expand-lg shadow"
        style={{ backgroundColor: "white" }}
      >
        <div className="container g-0">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
