import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  // hs-menu____________
  const hsMenu = [
    {
      icon: "./hs1.png",
      judul: "Design UI/UX",
      desc: "Kami akan bekerja sama dengan Anda untuk memahami kebutuhan dan tujuan Anda, dan kemudian merancang website yang sempurna untuk Anda.",
    },
    {
      icon: "./hs2.png",
      judul: "Create Website",
      desc: "Website yang secara otomatis menyesuaikan tampilannya agar optimal di berbagai perangkat, seperti desktop, laptop, tablet, dan smartphone.",
    },
    {
      icon: "./hs3.png",
      judul: "Maintenance",
      desc: "Website Anda adalah aset penting bagi bisnis Anda. Pastikan website Anda selalu aman, lancar, dan terupdate dengan layanan maintenance website kami.",
    },
  ];
  return (
    <>
      <Navbar />

      {/* COVER___________________________- */}
      <div className="home-cover">
        <div className="cover-dark">
          <p>Butuh website profesional untuk bisnis Anda?</p>
          <h1>
            Kami Membuat Situs <br />
            Web Untuk Bisnis <br />
            <span style={{ color: "#6ac6ac" }}>Startup</span> Anda
          </h1>
          <br />
          <button
            onClick={() => (location.href = "/lom/pricing")}
            className="offer"
          >
            Get Offer
          </button>
        </div>
      </div>
      <div className="home-services">
        <h2>Our Services</h2>
        <div className="hs-menu">
          {hsMenu.map((e) => (
            <div className="hs-menu-in">
              <img src={`${e.icon}`} alt="icon" />
              <br />
              <h3>{e.judul}</h3>
              <br />
              <p>{e.desc}</p>
              <br />
              <button className="offer">View Detail</button>
            </div>
          ))}
        </div>
      </div>
      <div className="home-dream">
        <div className="hd-left">
          <img src="./dream.jpg" alt="dream" />
        </div>
        <div className="hd-right">
          <h2>Dream it,Build it</h2>
          <br />
          <h4>1. Pengembangan Web yang Inovatif</h4>
          <p>
            Kami berdedikasi untuk menciptakan website yang dinamis dan
            interaktif, disesuaikan dengan kebutuhan bisnis Anda.
          </p>
          <br />
          <h4>2. Teknologi Terkini</h4>
          <p>
            Kami menggunakan teknologi terkini dalam pengembangan website,
            termasuk HTML5, CSS3, JavaScript, PHP, dan MySQL.
          </p>
          <br />
          <h4>3. Kustomisasi</h4>
          <p>
            Kami menawarkan layanan kustomisasi yang luas untuk memastikan bahwa
            website Anda mencerminkan identitas merek Anda.
          </p>
        </div>
      </div>
      <div className="home-timeline">
        <h2>Timeline</h2>
        <div className="timeline-img"></div>
      </div>
      <div className="home-dream hd2">
        <div className="hd-right">
          <h2>Grow your business</h2>
          <br />
          <p style={{ textAlign: "justify" }}>
            Tim profesional kami berkomitmen untuk menyediakan platform digital
            yang tidak hanya meningkatkan kehadiran online Anda, tetapi juga
            berkontribusi pada pertumbuhan bisnis Anda. Kami memanfaatkan
            teknologi terkini dan praktek terbaik industri untuk memastikan
            bahwa website Anda tidak hanya estetis, tetapi juga fungsional dan
            mudah digunakan.
          </p>
        </div>
        <div className="hd-left">
          <img src="./dream2.jpg" alt="dream" />
        </div>
      </div>
      <div className="home-pricing">
        <h2 style={{ color: "#20493c" }}>Pricing</h2>
        <div className="hp-menu">
          <div className="hp-in">
            <h4 style={{ color: "#6ac6ac" }}>Paket Dasar</h4>
            <h3 style={{ color: "grey", textDecoration: "line-through" }}>
              Rp 6jt
            </h3>
            <h2
              style={{
                color: "#20493c",
                fontSize: "45px",
                borderBottom: "1px solid #20493c",
              }}
            >
              Rp 4,6jt
            </h2>
            <br />
            <br />
            <ul className="ul-white">
              <li>Desain website responsif</li>
              <li>Hingga 5 halaman</li>
              <li>konten Formulir kontak dasar Optimasi</li>
              <li>mesinpencari (SEO) dasar</li>
            </ul>
            <br />
            <br />
            <button className="offer">Get Started</button>
          </div>
          <div className="hp-in add">
            <h4 style={{ color: "#6ac6ac" }}>Paket Profesional</h4>
            <h3 style={{ color: "#dcdcdc", textDecoration: "line-through" }}>
              Rp 11jt
            </h3>
            <h2
              style={{
                color: "white",
                fontSize: "45px",
                borderBottom: "1px solid white",
              }}
            >
              Rp 9,4jt
            </h2>
            <br />
            <br />
            <ul className="ul-green">
              <li>Semua fitur dasar</li>
              <li>Hingga 10 halaman konten</li>
              <li>Galeri foto/video</li>
              <li>Integrasi media sosial</li>
              <li>SEO lanjutan</li>
            </ul>
            <br />
            <br />
            <button className="offer">Get Started</button>
          </div>
          <div className="hp-in">
            <h4 style={{ color: "#6ac6ac" }}>Paket Premium</h4>
            <h3 style={{ color: "grey", textDecoration: "line-through" }}>
              Rp 16jt
            </h3>
            <h2
              style={{
                color: "#20493c",
                fontSize: "45px",
                borderBottom: "1px solid #20493c",
              }}
            >
              Rp 14,2jt
            </h2>
            <br />
            <br />
            <ul className="ul-white">
              <li>Semua fitur Paket Profesional</li>
              <li>halaman tak terbatas</li>
              <li>Fungsi e-commerce</li>
              <li>Blog atau berita</li>
            </ul>
            <br />
            <br />
            <button className="offer">Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
