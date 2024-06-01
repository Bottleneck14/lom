import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [tinggi, setTinggi] = useState(0);

  useEffect(() => {
    function tinggiLayar() {
      setTinggi(window.pageYOffset);
    }

    window.addEventListener("scroll", tinggiLayar);

    return () => {
      window.removeEventListener("scroll", tinggiLayar);
    };
  }, []);

  // _______________
  const [hm, setHm] = useState(false);

  function hamMenu() {
    setHm(!hm);
  }
  return (
    <>
      <div
        style={{
          backgroundColor: `${
            tinggi > 200 ? "hsla(0, 0%, 0%, 0.7)" : "transparent"
          }`,
        }}
        className="navbar"
      >
        <img src="./logo.png" alt="logo" width={"120px"} />
        <ul>
          <li>
            <NavLink end to={"/lom/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/lom/services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/lom/portofolio"}>Portofolio</NavLink>
          </li>
          <li>
            <NavLink to={"/lom/pricing"}>Pricing</NavLink>
          </li>
          <li>
            <NavLink to={"/lom/about"}>About</NavLink>
          </li>
        </ul>
        <button
          onClick={() => (location.href = "/lom/pricing")}
          className="join"
        >
          Get Offer
        </button>
        <img
          onClick={hamMenu}
          className="ham"
          src="./ham.png"
          alt=""
          width={"50px"}
        />
      </div>
      <div className={`ham-menu ${hm == true ? "hm-muncul" : ""}`}>
        <ul>
          <li>
            <NavLink end to={"/lom/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/lom/services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/lom/portofolio"}>Portofolio</NavLink>
          </li>
          <li>
            <NavLink to={"/lom/pricing"}>Pricing</NavLink>
          </li>
          <li>
            <NavLink to={"/lom/about"}>About</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
