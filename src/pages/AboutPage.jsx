import React, { useState, useRef } from "react";
import "./dragonstyles.css";

export const AboutPage = () => {
  const pageRef = useRef(null);
  const [showModal, setShowModal] = useState(true);

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

        <div class="game-container  main-content2">
        {/* <!-- Header Section --> */}
        <header class="game-header">
            <div class="header-left">
                <button class="menu-btn"><i class="fas fa-th"></i></button>
                <div class="game-logo">
                    <img src="image/logo.png" alt="Token Twister Logo" />
                </div>
                <div class="game-mode">
                    <button class="mode-btn">
                        <img src="image/classic.png" alt="Crown" />
                        Classic <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
            </div>
            
            <div class="header-center">
                <div class="player-stats">
                    <div class="stat-item">
                        <img src="image/userss.png" alt="Users" />
                        <span>1,587</span>
                    </div>
                    <div class="stat-item">
                        <img src="image/bolt.png" alt="Speed" />
                        <span>453</span>
                    </div>
                    <div class="stat-item">
                        <img src="image/coinn.png" alt="Coins" />
                        <span>$12,332</span>
                    </div>
                </div>
                
                <div class="timer">
                    <i class="far fa-clock"></i>
                    <span>00:60</span>
                </div>
                
                <div class="action-buttons">
                    <button class="room-btn">Room <i class="fas fa-chevron-down"></i></button>
                    <button class="circle-btn"><i class="fas fa-circle"></i></button>
                    <div class="coins">
                        <img src="image/coinn.png" alt="Coins" />
                        <span>12,332.09</span>
                    </div>
                    <button class="deposit-btn">
                        <i class="fa-solid fa-wallet"></i>
                        Deposit
                    </button>
                </div>
            </div>
            
            <div class="header-right">
                <button class="theme-btn"><i class="fas fa-moon"></i></button>
                <button class="message-btn"><i class="far fa-paper-plane"></i></button>
                <button class="settings-btn"><i class="fas fa-cog"></i></button>
                <div class="user-avatar">
                    <img src="image/userr.png" alt="User Avatar" />
                </div>
            </div>
        </header>
        
        {/* <!-- Main Game Area --> */}
        <main class="game-main">
            {/* <!-- Players Section Left --> */}
            <div class="players-left">
                <div class="player-card">
                    <div class="player-avatar">
                        <img src="PlayerProfile/Group 190.png" alt="Player Avatar" />
                    </div>
                    <div class="player-info">
                        <div class="player-name">Player@7585</div>
                        <div class="player-balance">75,53380</div>
                    </div>
                </div>
                
                <div class="player-card">
                    <div class="player-avatar">
                        <img src="PlayerProfile/Group 188.png" alt="Player Avatar" />
                    </div>
                    <div class="player-info">
                        <div class="player-name">Player@7585</div>
                        <div class="player-balance">359.85</div>
                    </div>
                </div>
                
                <div class="player-card">
                    <div class="player-avatar">
                        <img src="PlayerProfile/Group 189.png" alt="Player Avatar" />
                    </div>
                    <div class="player-info">
                        <div class="player-name">Player@7585</div>
                        <div class="player-balance">35,0085</div>
                    </div>
                </div>
            </div>
            
            {/* <!-- Center Game Board --> */}
            <div class="game-board">
                {/* <!-- Top Cards Section --> */}
                <div class="cards-section">
                    <div class="dragon-side">
                        {/* <!-- <img src="MainFrame/dragon.png" alt="Dragon" class="creature-img" /> --> */}
                    </div>
                    
                    <div class="cards-display">
                        <div class=" card-left">
                            <div class="card-inner">
                                {/* <!-- <img src="MainFrame/5h-min.png" alt="Tiger" class="creature-img" /> --> */}
                            </div>
                        </div>
                        
                        <div class="vs-badge">
                            <img src="MainFrame/VS.png" alt="VS" />
                        </div>
                        
                        <div class=" card-right">
                            <div class="card-inner">
                                {/* <!-- <img src="MainFrame/5s-min.png" alt="Tiger" class="creature-img" /> --> */}
                            </div>
                        </div>
                    </div>
                    
                    <div class="tiger-side">
                        {/* <!-- <img src="MainFrame/Tiger .png" alt="Tiger" class="creature-img" /> --> */}
                    </div>
                </div>
                
                {/* <!-- Prize Banner --> */}
                <div class="prize-banner">
                    <span>PRIZEING...8</span>
                </div>
                
                {/* <!-- Betting Chips Row --> */}
                <div class="betting-chips-row">
                    <div class="chips-container">
                        {/* <!-- Betting chips icons would go here --> */}
                        <div class="chip blue"><img src="WinSequenceBar/Dragon copy 2.png" alt="Chip" /></div>
                        <div class="chip orange"><img src="WinSequenceBar/Tiger.png" alt="Chip" /></div>
                        {/* <!-- More chips... --> */}
                    </div>
                </div>
                
                {/* <!-- Betting Grid --> */}
                <div class="betting-grid">
                    <div style="width: 11.6%;">
                        <div class="bet-cell">
                            <img src="BetCards/Even.png" alt="" class="" />
                        </div>
                        <div class="bet-cell">
                            <img src="BetCards/Odd.png" alt="" class="" />
                        </div>
                    </div>

                    <div  style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '19.5%',
                      }}>
                    
                        <div style={{display: 'flex'}}>
                            <div class="bet-cell">
                                <img src="BetCards/Diamond.png" alt="" class="" />
                            </div>
                            
                            <div class="bet-cell">
                                <img src="BetCards/Heart.png" alt="" class="" />
                            </div>
                        </div>
                        <div class="bet-cell" style="margin-top: -10%;">
                            <img src="BetCards/Dragon Box.png" alt="" class="" />
                            <div class="bet-amount">0</div>
                            <div class="bet-amount bet-amount-large" style="top: 8%;">33,370</div>
                        </div>
                    </div>
                   
                   
                    <div style="width: 19.5%; margin-top: -2%;">
                        <div class="bet-cell center-amount">
                            <div class="bet-amount-large bet-amount" style="top: 6%;">1,020</div>
                            <img src="BetCards/Tie Box.png" alt="" class="" />
                            <div class="bet-amount">0</div>
                        </div>
                   </div>

                    <div style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '19.5%',
                            }}>
                        <div style="display: flex;">
                            <div class="bet-cell">
                                <img src="BetCards/Spade.png" alt="" class="" />
                            </div>
                            
                            <div class="bet-cell">
                                <img src="BetCards/Club.png" alt="" class="" />
                                
                            </div>
                        </div>
                        <div class="bet-cell" style="margin-top: -10%;">
                            <img src="BetCards/Tiger Box.png" alt="" class="" />
                            <div class="bet-amount">0</div>
                            <div class="bet-amount bet-amount-large" style="top: 8%;">30,280</div>
                        </div>
                   </div>
                    
                   
                    <div style="width: 11.6%;">
                        <div class="bet-cell">
                            <img src="BetCards/Small 1.png" alt="" class="" />
                        </div>                    
                        
                        <div class="bet-cell">
                            <img src="BetCards/Small 2.png" alt="" class="" />
                        </div>
                   </div>

                  
                </div>
            </div>
            
            {/* <!-- Players Section Right --> */}
            <div class="players-right">
                <div class="player-card">
                    <div class="player-avatar">
                        <img src="PlayerProfile/Player Profile.png" alt="Player Avatar" />
                    </div>
                    <div class="player-info">
                        <div class="player-name">Player@7585</div>
                        <div class="player-balance">75,53380</div>
                    </div>
                </div>
                
                <div class="player-card">
                    <div class="player-avatar">
                        <img src="PlayerProfile/Group 186.png" alt="Player Avatar" />
                    </div>
                    <div class="player-info">
                        <div class="player-name">Player@7585</div>
                        <div class="player-balance">359.85</div>
                    </div>
                </div>
                
                <div class="player-card">
                    <div class="player-avatar">
                        <img src="PlayerProfile/Group 187.png" alt="Player Avatar" />
                    </div>
                    <div class="player-info">
                        <div class="player-name">Player@7585</div>
                        <div class="player-balance">35,0085</div>
                    </div>
                </div>
            </div>
        </main>
        
        {/* <!-- Footer Section --> */}
        <footer class="game-footer">
            <div class="footer-left">
                <button class="chat-btn">
                    <i class="far fa-comment-dots"></i>
                    Chat
                </button>
                <button class="bet-amount-btn">
                    <span>Bet</span>
                    <span class="amount">$23,332.09</span>
                </button>
            </div>
            
            <div class="footer-center">
                <button class="chip-btn">1</button>
                <button class="chip-btn">2</button>
                <button class="chip-btn">5</button>
                <button class="chip-btn">10</button>
                <button class="chip-btn">25</button>
            </div>
            
            <div class="footer-right">
                <button class="action-btn back"><i class="fas fa-arrow-left"></i></button>
                <button class="action-btn cancel"><i class="fas fa-times"></i></button>
                <button class="action-btn multiply"><span>×2</span></button>
                <button class="action-btn refresh"><i class="fas fa-sync-alt"></i></button>
                <button class="action-btn sound"><i class="fas fa-volume-up"></i></button>
            </div>
        </footer>
        
        {/* <!-- Room Info Overlay --> */}
        <div class="room-info">
            <div class="room-header">
                <span>Xotic_Team12</span>
                <span class="players-joined">8 players joined</span>
            </div>
            <div class="player-avatars">
                <div class="avatar"><img src="PlayerProfile/Group 186.png" alt="Player" /></div>
                <div class="avatar"><img src="PlayerProfile/Group 187.png" alt="Player" /></div>
                <div class="avatar"><img src="PlayerProfile/Group 188.png" alt="Player" /></div>
                <div class="avatar"><img src="PlayerProfile/Group 189.png" alt="Player" /></div>
                <div class="avatar"><img src="PlayerProfile/Group 190.png" alt="Player" /></div>
                <div class="avatar plus">+3</div>
            </div>
        </div>
    </div>

      </div>
    </>
  );
};
