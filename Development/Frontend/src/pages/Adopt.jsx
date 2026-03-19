import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

function Adopt() {
  const [pets, setPets] = useState([
    { id: 1, name: "Buddy", type: "Dog", description: "Friendly dog", img: "" },
    { id: 2, name: "Whiskers", type: "Cat", description: "Playful cat", img: "" },
  ]);

  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    description: "",
    img: ""
  });

  const [openChat, setOpenChat] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet({ ...newPet, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewPet({ ...newPet, img: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleAddPet = () => {
    if (!newPet.name || !newPet.type) {
      alert("Name and Type are required!");
      return;
    }
    setPets([...pets, { ...newPet, id: Date.now() }]);
    setNewPet({ name: "", type: "", description: "", img: "" });
  };

  const handleAdoptPet = (id) => {
    setPets(pets.filter(pet => pet.id !== id));
    alert("Congratulations! You've adopted a pet 🐾");
  };

  return (
    <>
      <style>{`
                html, body, #root{
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
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
        left: 65%;
        transform: translateX(-50%);
        }

        .navbar a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        }

        .profile-icon {
  margin-left: auto;
  font-size: 22px;
  color: white;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.profile-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

        /* Adopt container */
        .adopt-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 40px;
          background: #f9f9f9;
          min-height: 100vh;
        }

        .adopt-container h1 {
          text-align: center;
          font-size: 48px;
          margin-bottom: 50px;
          color: #ff914d;
        }

        /* Pet Form */
        .pet-form {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          margin-bottom: 60px;
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .pet-form input[type="text"],
        .pet-form select,
        .pet-form textarea {
          padding: 5px 15px;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 16px;
          width: 250px;
          transition: all 0.3s ease;
        }

        .pet-form textarea {
          height: 80px;
          resize: none;
        }

        .pet-form button {
          background: #ff914d;
          border: none;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .pet-form button:hover {
          background: #e6762f;
          transform: translateY(-2px);
        }

        /* Pet List */
        .pet-list {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
        }

        .pet-card {
          background: #fff;
          width: 260px;
          border-radius: 14px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          padding: 18px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .pet-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
        }

        .pet-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .pet-card h3 {
          font-size: 20px;
          margin: 10px 0 6px;
          color: #333;
        }

        .pet-card p {
          font-size: 15px;
          margin: 4px 0;
          color: #666;
        }

        .pet-card button {
          margin-top: 12px;
          background: #ff914d;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .pet-card button:hover {
          background: #e6762f;
          transform: translateY(-2px);
        }

        /* Footer */
         /* Floating Chat Button */
.chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ff914d;
  color: white;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 1000;
}

/* Chat Box */
.chat-box {
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 300px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  overflow: hidden;
  z-index: 1000;
}

/* Header */
.chat-header {
  background: #ff914d;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Body */
.chat-body {
  padding: 15px;
  height: 150px;
  overflow-y: auto;
  font-size: 14px;
}

/* Footer */
.chat-footer {
  display: flex;
  border-top: 1px solid #eee;
}

.chat-footer input {
  flex: 1;
  border: none;
  padding: 10px;
  outline: none;
}

.chat-footer button {
  background: #ff914d;
  border: none;
  color: white;
  padding: 0 15px;
  cursor: pointer;
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
                 <Link to="/">Home</Link>
                 <Link to="/adopt">Adopt</Link>
                <a href="#">Rescue</a>
                <a href="#">Support</a>
                <a href="#">Blog</a>
                <a href="#">About&Contact</a>
                <input className="search-bar" type="text" placeholder="Search animals..." />
              </div>
              
              <div className="profile-icon">
                <FiUser />
              </div>
            </nav>

      {/* Adopt Page */}
      <div className="adopt-container">
        <h1>Adopt a Pet 🐾</h1>

        {/* Pet Form */}
        <div className="pet-form">
          <input
            type="text"
            placeholder="Pet Name"
            name="name"
            value={newPet.name}
            onChange={handleInputChange}
          />
          <select name="type" value={newPet.type} onChange={handleInputChange}>
            <option value="">Select Type</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            placeholder="Description"
            name="description"
            value={newPet.description}
            onChange={handleInputChange}
          />
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleAddPet}>Add Pet</button>
        </div>

        {/* Pet List */}
        <div className="pet-list">
          {pets.length === 0 && <p>No pets available currently.</p>}
          {pets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.img || "https://via.placeholder.com/260x180"} alt={pet.name} />
              <h3>{pet.name}</h3>
              <p>{pet.type}</p>
              <p>{pet.description}</p>
              <button onClick={() => handleAdoptPet(pet.id)}>Adopt 🐾</button>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Button */}
      <div className="chat-button" onClick={() => setOpenChat(!openChat)}>💬</div>

      {/* Chat Box */}
      {openChat && (
        <div className="chat-box">
          <div className="chat-header">
            <span>StrayHaven Support</span>
            <button onClick={() => setOpenChat(false)}>✖</button>
          </div>
          <div className="chat-body">
            <p>Hello 👋 How can we help you?</p>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 StrayHaven | Together we protect stray animals 🐾</p>
      </footer>
    </>
  );
}

export default Adopt;