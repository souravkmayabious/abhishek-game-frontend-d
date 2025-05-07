import React, { useState, useRef } from "react";
import "./dragonstyles2.css";

export const Dragon = () => {
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

        <div className="game-container_2">
          {/* <!-- Header Section --> */}
          <header className="game-header_2">
            <div className="header-left_2">
              <button className="menu-btn_2">
                <i className="fas fa-th"></i>
              </button>
              <div className="game-logo_2">
                <img src="image/logo.png" alt="Token Twister Logo" />
              </div>
              <div className="game-mode_2">
                <button className="mode-btn_2">
                  <img src="image/classic.png" alt="Crown" />
                  Classic <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>

            <div className="header-center_2">
              <div className="player-stats_2">
                <div className="stat-item_2">
                  <img src="image/userss.png" alt="Users" />
                  <span>1,587</span>
                </div>
                <div className="stat-item_2">
                  <img src="image/bolt.png" alt="Speed" />
                  <span>453</span>
                </div>
                <div className="stat-item_2">
                  <img src="image/coinn.png" alt="Coins" />
                  <span>$12,332</span>
                </div>
              </div>

              <div className="timer_2">
                <i className="far fa-clock"></i>
                <span>00:60</span>
              </div>

              <div className="action-buttons_2">
                <button className="room-btn">
                  Room <i className="fas fa-chevron-down"></i>
                </button>
                <button className="circle-btn_2">
                  <i className="fas fa-circle"></i>
                </button>
                <div className="coins_2">
                  <img src="image/coinn.png" alt="Coins" />
                  <span>12,332.09</span>
                </div>
                <button className="deposit-btn_2">
                  <i className="fa-solid fa-wallet"></i>
                  Deposit
                </button>
              </div>
            </div>

            <div className="header-right_2">
              <button className="theme-btn">
                <i className="fas fa-moon"></i>
              </button>
              <button className="message-btn_2">
                <i className="far fa-paper-plane"></i>
              </button>
              <button className="settings-btn_2">
                <i className="fas fa-cog"></i>
              </button>
              <div className="user-avatar_2">
                <img src="image/userr.png" alt="User Avatar" />
              </div>
            </div>
          </header>

          {/* <!-- Main Game Area --> */}
          <main className="game-main_2">
            {/* <!-- Players Section Left --> */}
            <div className="players-left_2">
              <div className="player-card_2">
                <div className="player-avatar_2">
                  <img src="PlayerProfile/Group 190.png" alt="Player Avatar" />
                </div>
                <div className="player-info_2">
                  <div className="player-name_2">Player@7585</div>
                  <div className="player-balance_2">75,53380</div>
                </div>
              </div>

              <div className="player-card_2">
                <div className="player-avatar_2">
                  <img src="PlayerProfile/Group 188.png" alt="Player Avatar" />
                </div>
                <div className="player-info_2">
                  <div className="player-name_2">Player@7585</div>
                  <div className="player-balance_2">359.85</div>
                </div>
              </div>

              <div className="player-card_2">
                <div className="player-avatar_2">
                  <img src="PlayerProfile/Group 189.png" alt="Player Avatar" />
                </div>
                <div className="player-info_2">
                  <div className="player-name_2">Player@7585</div>
                  <div className="player-balance_2">35,0085</div>
                </div>
              </div>
            </div>

            {/* <!-- Center Game Board --> */}
            <div className="game-board_2">
              {/* <!-- Top Cards Section --> */}
              <div className="cards-section_2">
                <div className="dragon-side_2">
                  {/* <!-- <img src="MainFrame/dragon.png" alt="Dragon" className="creature-img"> --> */}
                </div>

                <div className="cards-display_2">
                  <div className=" card-left_2">
                    <div className="card-inner_2">
                      {/* <!-- <img src="MainFrame/5h-min.png" alt="Tiger" className="creature-img"> --> */}
                    </div>
                  </div>

                  <div className="vs-badge_2">
                    <img src="MainFrame/VS.png" alt="VS" />
                  </div>

                  <div className=" card-right_2">
                    <div className="card-inner_2">
                      {/* <!-- <img src="MainFrame/5s-min.png" alt="Tiger" className="creature-img"> --> */}
                    </div>
                  </div>
                </div>

                <div className="tiger-side_2">
                  {/* <!-- <img src="MainFrame/Tiger .png" alt="Tiger" className="creature-img"> --> */}
                </div>
              </div>

              {/* <!-- Prize Banner --> */}
              <div className="prize-banner_2">
                <span>PRIZEING...8</span>
              </div>

              {/* <!-- Betting Chips Row --> */}
              <div className="betting-chips-row_2">
                <div className="chips-container_2">
                  {/* <!-- Betting chips icons would go here --> */}
                  <div className="chip_2 blue_2">
                    <img src="WinSequenceBar/Dragon copy 2.png" alt="Chip" />
                  </div>
                  <div className="chip_2 orange_2">
                    <img src="WinSequenceBar/Tiger.png" alt="Chip" />
                  </div>
                  {/* <!-- More chips... --> */}
                </div>
              </div>

              {/* <!-- Betting Grid --> */}
              <div className="betting-grid_2">
                <div style={{ width: '11.6%' }}>
                  <div className="bet-cell_2">
                    <img src="BetCards/Even.png" alt="" className="" />
                  </div>
                  <div className="bet-cell_2">
                    <img src="BetCards/Odd.png" alt="" className="" />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "19.5%",
                  }}
                >
                  <div  style={{ display: "flex"}}>
                    <div className="bet-cell_2">
                      <img src="BetCards/Diamond.png" alt="" className="" />
                    </div>

                    <div className="bet-cell_2">
                      <img src="BetCards/Heart.png" alt="" className="" />
                    </div>
                  </div>
                  <div className="bet-cell_2" style={{ marginTop: '-10%' }}>
                    <img src="BetCards/Dragon Box.png" alt="" className="" />
                    <div className="bet-amount_2">0</div>
                    <div className="bet-amount_2 bet-amount-large_2" style={{ top: '8%' }}>
                      33,370
                    </div>
                  </div>
                </div>

                <div style={{ width: '19.5%', marginTop: '-2%' }}                >
                  <div className="bet-cell_2 center-amount_2">
                    <div className="bet-amount-large_2 bet-amount_2" style={{ top: '6%' }}>
                      1,020
                    </div>
                    <img src="BetCards/Tie Box.png" alt="" className="" />
                    <div className="bet-amount_2">0</div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "19.5%",
                  }}
                >
                  <div style={{ display: "flex"}}>
                    <div className="bet-cell_2">
                      <img src="BetCards/Spade.png" alt="" className="" />
                    </div>

                    <div className="bet-cell_2">
                      <img src="BetCards/Club.png" alt="" className="" />
                    </div>
                  </div>
                  <div className="bet-cell_2"style={{ marginTop: '-10%' }}                  >
                    <img src="BetCards/Tiger Box.png" alt="" className="" />
                    <div className="bet-amount_2">0</div>
                    <div className="bet-amount_2 bet-amount-large_2" style={{ top: '8%' }}>
                      30,280
                    </div>
                  </div>
                </div>

                <div style={{ width: '11.6%' }}                >
                  <div className="bet-cell_2">
                    <img src="BetCards/Small 1.png" alt="" className="" />
                  </div>

                  <div className="bet-cell_2">
                    <img src="BetCards/Small 2.png" alt="" className="" />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Players Section Right --> */}
            <div className="players-right_2">
              <div className="player-card_2">
                <div className="player-avatar_2">
                  <img
                    src="PlayerProfile/Player Profile.png"
                    alt="Player Avatar"
                  />
                </div>
                <div className="player-info_2">
                  <div className="player-name_2">Player@7585</div>
                  <div className="player-balance_2">75,53380</div>
                </div>
              </div>

              <div className="player-card_2">
                <div className="player-avatar_2">
                  <img src="PlayerProfile/Group 186.png" alt="Player Avatar" />
                </div>
                <div className="player-info_2">
                  <div className="player-name_2">Player@7585</div>
                  <div className="player-balance_2">359.85</div>
                </div>
              </div>

              <div className="player-card_2">
                <div className="player-avatar_2">
                  <img src="PlayerProfile/Group 187.png" alt="Player Avatar" />
                </div>
                <div className="player-info_2">
                  <div className="player-name_2">Player@7585</div>
                  <div className="player-balance_2">35,0085</div>
                </div>
              </div>
            </div>
          </main>

          {/* <!-- Footer Section --> */}
          <footer className="game-footer_2">
            <div className="footer-left_2">
              <button className="chat-btn_2">
                <i className="far fa-comment-dots_2"></i>
                Chat
              </button>
              <button className="bet-amount-btn_2">
                <span>Bet</span>
                <span className="amount_2">$23,332.09</span>
              </button>
            </div>

            <div className="footer-center_2">
              <button className="chip-btn_2">1</button>
              <button className="chip-btn_2">2</button>
              <button className="chip-btn_2">5</button>
              <button className="chip-btn_2">10</button>
              <button className="chip-btn_2">25</button>
            </div>

            <div className="footer-right_2">
              <button className="action-btn_2 back_2">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="action-btn_2 cancel_2">
                <i className="fas fa-times"></i>
              </button>
              <button className="action-btn multiply_2">
                <span>×2</span>
              </button>
              <button className="action-btn_2 refresh_2">
                <i className="fas fa-sync-alt"></i>
              </button>
              <button className="action-btn_2 sound_2">
                <i className="fas fa-volume-up"></i>
              </button>
            </div>
          </footer>

          {/* <!-- Room Info Overlay --> */}
          <div className="room-info_2">
            <div className="room-header_2">
              <span>Xotic_Team12</span>
              <span className="players-joined_2">8 players joined</span>
            </div>
            <div className="player-avatars_2">
              <div className="avatar_2">
                <img src="PlayerProfile/Group 186.png" alt="Player" />
              </div>
              <div className="avatar_2">
                <img src="PlayerProfile/Group 187.png" alt="Player" />
              </div>
              <div className="avatar_2">
                <img src="PlayerProfile/Group 188.png" alt="Player" />
              </div>
              <div className="avatar_2">
                <img src="PlayerProfile/Group 189.png" alt="Player" />
              </div>
              <div className="avatar_2">
                <img src="PlayerProfile/Group 190.png" alt="Player" />
              </div>
              <div className="avatar_2 plus_2">+3</div>
            </div>
          </div>
        </div>

        <div className="portrait-warning text-center">
          Please rotate your device to landscape mode.{" "}
          <i className="fa-solid fa-rotate"></i>
        </div>
      </div>
    </>
  );
};
