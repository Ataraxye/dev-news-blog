import "../App.css";

const Header = () => {
  return (
    <div
      className="d-flex container-fluid sticky-top align-items-center"
      style={{ backgroundColor: "blueviolet", height: "5em" }}
    >
      <div className="container-xxl text-center">
        <h1
          style={{
            color: "white",
            fontFamily: "DreamOrphans",
            fontSize: "4em",
          }}
        >
          Le Procrastinateur
        </h1>
      </div>
    </div>
  );
};

export default Header;
