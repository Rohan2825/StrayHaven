import React from "react";

function Home() {
  return (
    <>
      {/* CSS inside component */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .navbar {
            background: #ff914d;
            color: white;
            display: flex;
            align-items: center;
            padding: 30px 30px;
            position: relative; /* allows absolute positioning inside if needed */
        }

        .navbar h2 {
        margin: 0;
        font-size: 28px;
        }

        /* This will center the links horizontally in the navbar */
        .nav-links {
        display: flex;
        gap: 30px;
        position: absolute;
        left: 70%;
        transform: translateX(-50%);
        }

        .navbar a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        }

        .hero {
          text-align: center;
          padding: 80px 20px;
          background: #ffe6d5;
        }

        .hero h1 {
          font-size: 40px;
        }

        .btn {
          background: #ff914d;
          border: none;
          color: white;
          padding: 10px 18px;
          margin: 10px;
          border-radius: 6px;
          cursor: pointer;
        }

        .btn:hover {
          background: #e6762f;
        }

        .section {
          padding: 40px;
          text-align: center;
        }

        .card-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .card {
          width: 250px;
          background: white;
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        }

        .card img {
          width: 100%;
          border-radius: 8px;
        }

        .emergency {
          background: #fff3f3;
        }

        .footer {
          background: #333;
          color: white;
          text-align: center;
          padding: 15px;
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <h2>StrayHaven</h2>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Adopt</a>
          <a href="#">Rescue</a>
          <a href="#">Support</a>
          <a href="#">Blog</a>
          <a href="#">About&Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>A Safe Haven For Every Street Soul</h1>
        <p>Rescue, Heal and Rehome Stray Animals</p>

        <button className="btn">Dog</button>
        <button className="btn">Cat</button>
        <button className="btn">Other Animals</button>
      </section>

      {/* Featured Animals */}
      <section className="section">
        <h2>Animals Adoptations Articals</h2>

        <div className="card-container">
          <div className="card">
            <img src="" alt="dog" />
            <h3>Dog Adoptation Articals</h3>
            <button className="btn">Explore</button>
          </div>

          <div className="card">
            <img src="" alt="cat" />
            <h3>Cat Adoptation Articals</h3>
            <button className="btn">Explore</button>
          </div>

          <div className="card">
            <img src="" alt="animals" />
            <h3>Others Animals Adoptation Articals</h3>
            <button className="btn">Explore</button>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="section emergency">
        <h2>Animals Needing Urgent Help 🚨</h2>
        <p>Report injured animals and help us respond faster.</p>
        <button className="btn">Report Emergency</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>©️ 2026 StrayHaven | Together we protect stray animals 🐾</p>
      </footer>
    </>
  );
}

export default Home;