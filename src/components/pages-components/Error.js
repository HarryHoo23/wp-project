import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error-page d-flex justify-content-center align-items-center vh-100">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn mt-5 login-btn btn-primary">
            back home
        </Link>
      </div>
    </section>
  );
}
