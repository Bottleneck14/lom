import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-atas">
          <img src="./logo.png" alt="logo" />
          <div className="footer-menu">
            <ul>
              <li>General</li>
              <li>
                <br />
              </li>
              <li>
                <Link to={"/lom/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/lom/portofolio"}>Portofolio</Link>
              </li>
              <li>
                <Link to={"/lom/pricing"}>Pricing</Link>
              </li>
              <li>
                <Link to={"/lom/about"}>About Us</Link>
              </li>
            </ul>
            <ul>
              <li>Social Media</li>
              <li>
                <br />
              </li>
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Youtube</a>
              </li>
              <li>
                <a href="https://web.telegram.org/">Telegram</a>
              </li>
            </ul>
            <ul>
              <li>
                We Listen <br />
                Your Prosper
              </li>
              <li>
                <br />
              </li>
              <li>
                <a className="abc" href="/lom/about">
                  Send us an email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bawah">
          <p>© 2024 Labor Omnia Fincit. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </div>
    </>
  );
}
