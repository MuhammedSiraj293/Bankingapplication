import './App.css';
import UserContext from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Signin from "./pages/Signin.js";
import Deposit from "./pages/Deposit.js";
import Withdraw from "./pages/Withdraw.js";
import Alldata from "./pages/Alldata.js";
export default function App() {
  return (
    <Router>
      <Navbar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "siraj",
              email: "siraj@gmail.com",
              password: "tsrj123",
              balance: 0
            }
          ]
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/alldata" element={<Alldata />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </Router>
  );
}
