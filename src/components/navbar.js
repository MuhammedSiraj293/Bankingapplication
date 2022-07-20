import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <Link class="navbar-brand text-white" to="/">
          Banking App
        </Link>
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link text-white" to="/signin">
                SignIn
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white" to="/deposit">
                Deposit
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white" to="/withdraw">
                Withdraw
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white" to="/alldata">
                All Data
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
