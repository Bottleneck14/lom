import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* COVER___________________________- */}
        <div className="home-cover">
          <div className="cover-dark"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
