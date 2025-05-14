import React, { useEffect, useState } from 'react';
import './styleSeperateToken.css'; 

export const ContactPage = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [activeChip, setActiveChip] = useState(null);

  const [showRoulette, setShowRoulette] = useState(false);
  const [showOverflowCount, setShowOverflowCount] = useState(false);
  const [showAttachCount, setShowAttachCount] = useState(true);
  const [showCountWrapper, setShowCountWrapper] = useState(true);
  const [showLeftTable, setShowLeftTable] = useState(true);
  const [showOverflowLeftTable, setShowOverflowLeftTable] = useState(false);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleChipClick = (index) => {
    setActiveChip(index);
  };

  const handleAttachClick = () => {
    setShowAttachCount(!showAttachCount);
    setShowOverflowCount(showAttachCount);
    setShowCountWrapper(showAttachCount);
    setShowRoulette(false);
  };

  const rotateDisk = (no) => {
    console.log("Spin disk for:", no);
    setShowOverflowCount(false);
    setShowAttachCount(true);
    setShowCountWrapper(false);
    setShowRoulette(true);

    setTimeout(() => {
      setShowRoulette(false);
    }, 5000);
  };

  const handleLeftTableClick = () => {
    setShowLeftTable(false);
    setShowOverflowLeftTable(true);
  };

  return (
    <div className="main-content">

      {/* Portrait Warning (you can enhance this with CSS media query for orientation) */}
      <div className="portrait-warning">Please rotate your device to landscape mode.</div>

      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="image/logo.png" alt="Token Twister Logo" className="logo" />
          <span>Token Twister</span>
        </div>

        <div className="game-stats">
          <div className="stat-item"><img src="image/classic.png" alt="" /><span>Classic</span></div>
          <div className="stat-item"><img src="image/userss.png" alt="" /><span>1,887</span></div>
          <div className="stat-item"><img src="image/bolt.png" alt="" /><span>453</span></div>
          <div className="stat-item"><img src="image/coinn.png" alt="" /><span>312,332</span></div>
        </div>

        <div className="timer">
          <img src="image/clock-three.png" alt="Timer" /> {formatTime()}
        </div>

        <div className="header-buttons">
          {/* Buttons are identical in structure */}
          <button className="btn btn-green">Room</button>
          <button className="btn2 btn-transparent"><img src="image/target-solid.png" width="25" alt="" /></button>
          <button className="btn2 btn-transparent"><img src="image/help.png" width="25" alt="" /></button>
          <button className="btn2 btn-transparent"><img src="image/awardd.png" width="25" alt="" /></button>
          <button className="btn btn-outline">12,898,00</button>
          <button className="btn btn-green"><i className="fa-solid fa-wallet"></i> Deposit</button>
          <button className="btn btn-outline"><i className="fa-solid fa-moon"></i></button>
          <button className="btn btn-outline"><i className="fas fa-paper-plane"></i></button>
          <button className="btn btn-outline"><i className="fas fa-cog"></i></button>
          <div className="user-avatar"><img src="image/userr.png" width="30" alt="" /></div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="team-section">
          <div className="section-title">Invite Team?</div>
          <div className="team-avatars">
            {[1, 2, 3, 4].map(n => <div key={n} className={`team-avatar avatar-${n}`}>{n}</div>)}
            <div className="team-avatar add-more">+3</div>
          </div>
        </div>
      </div>

      {/* Game Visuals */}
      <div className="game-visuals">
        <img className="background-img" src="image/Background.png" alt="Background" />
        <img className="table-img" src="newImage/Roulette_Game.png" alt="Game Table" />
        {showLeftTable && (
          <img className="table-left" src="image/Left No. Grid.png" alt="" onClick={handleLeftTableClick} />
        )}
        {showAttachCount && (
          <img className="table-below" src="image/Main No. Grid.png" alt="" onClick={handleAttachClick} />
        )}
        <img
          className="roulette"
          src="newImage/Roulette.png"
          alt=""
          style={{ display: showRoulette ? 'block' : 'none' }}
        />

        <div className="count-wrapper" style={{ display: showCountWrapper ? 'block' : 'none' }}>
          <img
            src="newImage/Only_box.png"
            alt=""
            className="newCountTable"
            style={{ display: showOverflowCount ? 'block' : 'none' }}
          />
          {['0', '3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '2to1'].map((num) => (
            <p key={num} className={`overflowButtons ofb${num}`} onClick={() => rotateDisk(num)}>
              {num === '2to1' ? '2 to 1' : num}
            </p>
          ))}
        </div>

        <div className="count-wrapper2">
          <img
            src="newImage/Asset_1@2x.png"
            alt=""
            className="overflowLeftTable"
            style={{ display: showOverflowLeftTable ? 'block' : 'none' }}
          />
        </div>
      </div>

      {/* Footer Game Controls */}
      <div className="game-controls">
        <div className="left-controls">
          <button className="chat-btn"><i className="fas fa-comment"></i></button>
          <div className="bet-amount">
            <button className="bet-btn"> + </button>
            <span className="bet-amount-value">$28,355.00</span>
            <button className="bet-btn"> - </button>
          </div>
          <button className="bet-btn">
            <img src="image/bet.png" width="18" alt="bet" /> BET
          </button>
        </div>

        <div className="chips-container">
          <button className="nav-btn"><i className="fas fa-chevron-left"></i></button>
          {[1, 2, 5, 10, 25].map((val, index) => (
            <div
              key={val}
              className={`chip chip-${val}`}
              onClick={() => handleChipClick(index)}
              style={{ transform: activeChip === index ? 'scale(1.1)' : 'scale(1)' }}
            >
              {val}
            </div>
          ))}
          <button className="nav-btn"><i className="fas fa-chevron-right"></i></button>
        </div>

        <div className="right-controls">
          <div className="action-buttons">
            <button className="action-btn"><img src="image/backk.png" width="22" alt="" /></button>
            <button className="action-btn"><img src="image/crosss.png" width="22" alt="" /></button>
            <button className="action-btn"><i className="fas fa-times-circle"></i></button>
            <button className="action-btn spin-btn"><i className="fas fa-sync-alt"></i></button>
          </div>
          <button className="volume-btn"><i className="fas fa-volume-up"></i></button>
        </div>
      </div>
    </div>
  );
};

// export default GameUI;
