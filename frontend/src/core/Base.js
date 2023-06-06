import React from "react";
import Menu from "./Menu.js";


function Base({
  title = "My title",
  description = "My description",
  className = "bg-dark text-light p-4",
  children,
}) {
  return (
    <div>
      <Menu/>
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-light text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>

      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-light text-center">
          <h4>If you got any feel free to reach out</h4>
          <button className="btn btn-warning btn-lg" type="submit">
            Contact Us
          </button>
        </div>
        <div className="container">
          <span className="text-primary">An Amazing 
          <span className="text-light"> Mern </span>Bootcamp
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Base;
