import React, { useEffect, useState, useRef } from "react";
import "./style.css"; // your main CSS file

export const HomePage = () => {
  const [selectedChip, setSelectedChip] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const pageRef = useRef(null);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 60 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const enterFullscreen = () => {
    const elem = pageRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    setShowModal(false); // hide the modal after entering fullscreen
  };

  return (
    <>
      <div
        ref={pageRef}
        style={{ height: "100vh", backgroundColor: "#f5f5f5" }}
      >
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <h2>Enter Fullscreen?</h2>
              <button
                onClick={enterFullscreen}
                style={{ padding: "10px 20px", fontSize: "16px" }}
              >
                Go Fullscreen
              </button>
            </div>
          </div>
        )}
        <div className="portrait-warning text-center">
          Please rotate your device to landscape mode.{" "}
          <i className="fa-solid fa-rotate"></i>
        </div>

        <div className="main-content">
          {/* Header */}
          <header className="header">
            <div className="logo-container">
              <img
                src="/image/logo.png"
                alt="Token Twister Logo"
                className="logo"
              />
              <span>Token Twister</span>
            </div>

            <div className="game-stats">
              {["classic.png", "userss.png", "bolt.png", "coinn.png"].map(
                (img, i) => (
                  <div className="stat-item" key={i}>
                    <img src={`/image/${img}`} alt={`stat-${i}`} />
                    <span>{["Classic", "1,887", "453", "312,332"][i]}</span>
                  </div>
                )
              )}
            </div>

            <div className="timer">
              {/* <img src="/image/clock-three.png" alt="clock" width={20} />  */}
              {formatTime()}
            </div>

            <div className="header-buttons">
              <button className="btn btn-green">
                Room <i className="fa-solid fa-circle-plus"></i>
              </button>
              {["target-solid.png", "help.png", "awardd.png"].map((img, i) => (
                <button key={i} className="btn2 btn-transparent">
                  <img src={`/image/${img}`} width="25" alt="" />
                </button>
              ))}
              <button className="btn btn-outline">12,898,00</button>
              <button className="btn btn-green">
                <i className="fa-solid fa-wallet"></i> Deposit
              </button>
              <button className="btn btn-outline">
                <i className="fa-solid fa-moon"></i>
              </button>
              <button className="btn btn-outline">
                <i className="fas fa-paper-plane"></i>
              </button>
              <button className="btn btn-outline">
                <i className="fas fa-cog"></i>
              </button>
              <div className="user-avatar">
                <img src="/image/userr.png" width="30" alt="user" />
              </div>
            </div>
          </header>

          {/* Main Game Container */}
          <div className="game-container">
            {/* <div className="main-game-area">
            <div className="nav-buttons">
              <button className="nav-btn">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="nav-btn">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div> */}

            <div className="sidebar">
              <div className="team-section">
                <div className="section-title">Invite Team?</div>
                <div className="team-avatars">
                  {["avatar-1", "avatar-2", "avatar-3", "avatar-4"].map(
                    (cls, i) => (
                      <div key={i} className={`team-avatar ${cls}`}>
                        {i + 1}
                      </div>
                    )
                  )}
                  <div className="team-avatar add-more">+3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="game-visuals">
            <img
              className="background-img"
              src="image/Background.png"
              alt="Background"
            />
            <img
              className="table-img"
              src="image/Table_With_Chips_and_wheel-removebg-preview.png"
              alt="Game Table"
            />
            <img className="table-left" src="image/Left No. Grid.png" />
            <img className="table-below" src="image/Main No. Grid.png" />
          </div>

          {/* Game Controls */}
          <div className="game-controls">
            <div className="left-controls">
              <button className="chat-btn">
                <i className="fas fa-comment"></i>
              </button>
              <div className="bet-amount">
                <button className="bet-btn">+</button>
                <span className="bet-amount-value">$28,355.00</span>
                <button className="bet-btn">-</button>
              </div>
              <button className="bet-btn">
                <img src="/image/bet.png" width="18" alt="bet" /> BET
              </button>
            </div>

            <div className="chips-container">
              <button className="nav-btn">
                <i className="fas fa-chevron-left"></i>
              </button>
              {[1, 2, 5, 10, 25].map((value) => (
                <div
                  key={value}
                  className={`chip chip-${value} ${
                    selectedChip === value ? "active-chip" : ""
                  }`}
                  onClick={() => setSelectedChip(value)}
                >
                  {value}
                </div>
              ))}
              <button className="nav-btn">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="right-controls">
              <div className="action-buttons">
                {["backk.png", "crosss.png"].map((img, i) => (
                  <button key={i} className="action-btn">
                    <img src={`/image/${img}`} width="22" alt="" />
                  </button>
                ))}
                <button className="action-btn">
                  <i className="fas fa-times-circle"></i>
                </button>
                <button className="action-btn spin-btn">
                  <i className="fas fa-sync-alt"></i>
                </button>
              </div>
              <button className="volume-btn">
                <i className="fas fa-volume-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
