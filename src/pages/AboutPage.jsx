import React from 'react'
import "./dragonstyles.css";

export const AboutPage = () => {
  return (
   <>
    <div className="game-container">
        {/* <!-- Header Section --> */}
        <header className="game-header">
            <div className="header-left">
                <button className="menu-btn"><i className="fas fa-th"></i></button>
                <div className="game-logo">
                    <img src="image/logo.png" alt="Token Twister Logo" />
                </div>
                <div className="game-mode">
                    <button className="mode-btn">
                        <img src="image/classic.png" alt="Crown" />
                        Classic <i className="fas fa-chevron-down"></i>
                    </button>
                </div>
            </div>
            
            <div className="header-center">
                <div className="player-stats">
                    <div className="stat-item">
                        <img src="image/userss.png" alt="Users" />
                        <span>1,587</span>
                    </div>
                    <div className="stat-item">
                        <img src="image/bolt.png" alt="Speed" />
                        <span>453</span>
                    </div>
                    <div className="stat-item">
                        <img src="image/coinn.png" alt="Coins" />
                        <span>$12,332</span>
                    </div>
                </div>
                
                <div className="timer">
                    <i className="far fa-clock"></i>
                    <span>00:60</span>
                </div>
                
                <div className="action-buttons">
                    <button className="room-btn">Room <i className="fas fa-chevron-down"></i></button>
                    <button className="circle-btn"><i className="fas fa-circle"></i></button>
                    <div className="coins">
                        <img src="image/coinn.png" alt="Coins" />
                        <span>12,332.09</span>
                    </div>
                    <button className="deposit-btn">
                        <i className="fa-solid fa-wallet"></i>
                        Deposit
                    </button>
                </div>
            </div>
            
            <div className="header-right">
                <button className="theme-btn"><i className="fas fa-moon"></i></button>
                <button className="message-btn"><i className="far fa-paper-plane"></i></button>
                <button className="settings-btn"><i className="fas fa-cog"></i></button>
                <div className="user-avatar">
                    <img src="image/userr.png" alt="User Avatar" />
                </div>
            </div>
        </header>
        
        {/* <!-- Main Game Area --> */}
        <main className="game-main">
            {/* <!-- Players Section Left --> */}
            <div className="players-left">
                <div className="player-card">
                    <div className="player-avatar">
                        <img src="PlayerProfile/Group 190.png" alt="Player Avatar" />
                    </div>
                    <div className="player-info">
                        <div className="player-name">Player@7585</div>
                        <div className="player-balance">75,53380</div>
                    </div>
                </div>
                
                <div className="player-card">
                    <div className="player-avatar">
                        <img src="PlayerProfile/Group 188.png" alt="Player Avatar" />
                    </div>
                    <div className="player-info">
                        <div className="player-name">Player@7585</div>
                        <div className="player-balance">359.85</div>
                    </div>
                </div>
                
                <div className="player-card">
                    <div className="player-avatar">
                        <img src="PlayerProfile/Group 189.png" alt="Player Avatar" />
                    </div>
                    <div className="player-info">
                        <div className="player-name">Player@7585</div>
                        <div className="player-balance">35,0085</div>
                    </div>
                </div>
            </div>
            
            {/* <!-- Center Game Board --> */}
            <div className="game-board">
                {/* <!-- Top Cards Section --> */}
                <div className="cards-section">
                    <div className="dragon-side">
                        {/* <!-- <img src="MainFrame/dragon.png" alt="Dragon" className="creature-img"> --> */}
                    </div>
                    
                    <div className="cards-display">
                        <div className=" card-left">
                            <div className="card-inner">
                                <img src="MainFrame/5h-min.png" alt="Tiger" className="creature-img" />
                            </div>
                        </div>
                        
                        <div className="vs-badge">
                            <img src="MainFrame/VS.png" alt="VS" />
                        </div>
                        
                        <div className=" card-right">
                            <div className="card-inner">
                                <img src="MainFrame/5s-min.png" alt="Tiger" className="creature-img" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="tiger-side">
                        {/* <!-- <img src="MainFrame/Tiger .png" alt="Tiger" className="creature-img"> --> */}
                    </div>
                </div>
                
                {/* <!-- Prize Banner --> */}
                <div className="prize-banner">
                    <span>PRIZEING...8</span>
                </div>
                
                {/* <!-- Betting Chips Row --> */}
                <div className="betting-chips-row">
                    <div className="chips-container">
                        {/* <!-- Betting chips icons would go here --> */}
                        <div className="chip blue"><img src="WinSequenceBar/Dragon copy 2.png" alt="Chip" /></div>
                        <div className="chip orange"><img src="WinSequenceBar/Tiger.png" alt="Chip" /></div>
                        {/* <!-- More chips... --> */}
                    </div>
                </div>
                
                {/* <!-- Betting Grid --> */}
                <div className="betting-grid">
                    <div className="bet-cell">
                        <img src="BetCards/Even.png" alt="" className="" />
                    </div>
                    
                    <div className="bet-cell">
                        <img src="BetCards/Diamond.png" alt="" className="" />
                        <div className="bet-amount">33,370</div>
                    </div>
                    
                    <div className="bet-cell">
                        <img src="BetCards/Heart.png" alt="" className="" />
                    </div>
                    
                    <div className="bet-cell center-amount">
                        <div className="bet-amount-large">1,020</div>
                        <img src="BetCards/Tie Box.png" alt="" className="" />
                    </div>
                    
                    <div className="bet-cell">
                        <img src="BetCards/Spade.png" alt="" className="" />
                    </div>
                    
                    <div className="bet-cell">
                        <img src="BetCards/Club.png" alt="" className="" />
                        <div className="bet-amount">30,280</div>
                    </div>
                    
                    <div className="bet-cell">
                        <img src="BetCards/Diamond.png" alt="" className="" />
                    </div>
                    
                    <div className="bet-cell">
                        <img src="BetCards/Odd.png" alt="" className="" />
                    </div>
                    
                    <div className="bet-cell">
                        <img src="BetCards/Dragon Box.png" alt="" className="" />
                        <div className="bet-amount">0</div>
                    </div>
                    
                    <div className="bet-cell">
                        <div className="bet-label">Tie</div>
                        <div className="bet-ratio">1:8</div>
                        <div className="bet-amount">0</div>
                    </div>
                    
                    <div className="bet-cell">
                        <img src="BetCards/Tiger Box.png" alt="" className="" />
                        <div className="bet-amount">0</div>
                    </div>
                    
                    <div className="bet-cell">
                        <img src="BetCards/Small 2.png" alt="" className="" />
                    </div>
                </div>
            </div>
            
            {/* <!-- Players Section Right --> */}
            <div className="players-right">
                <div className="player-card">
                    <div className="player-avatar">
                        <img src="PlayerProfile/Player Profile.png" alt="Player Avatar" />
                    </div>
                    <div className="player-info">
                        <div className="player-name">Player@7585</div>
                        <div className="player-balance">75,53380</div>
                    </div>
                </div>
                
                <div className="player-card">
                    <div className="player-avatar">
                        <img src="PlayerProfile/Group 186.png" alt="Player Avatar" />
                    </div>
                    <div className="player-info">
                        <div className="player-name">Player@7585</div>
                        <div className="player-balance">359.85</div>
                    </div>
                </div>
                
                <div className="player-card">
                    <div className="player-avatar">
                        <img src="PlayerProfile/Group 187.png" alt="Player Avatar" />
                    </div>
                    <div className="player-info">
                        <div className="player-name">Player@7585</div>
                        <div className="player-balance">35,0085</div>
                    </div>
                </div>
            </div>
        </main>
        
        {/* <!-- Footer Section --> */}
        <footer className="game-footer">
            <div className="footer-left">
                <button className="chat-btn">
                    <i className="far fa-comment-dots"></i>
                    Chat
                </button>
                <button className="bet-amount-btn">
                    <span>Bet</span>
                    <span className="amount">$23,332.09</span>
                </button>
            </div>
            
            <div className="footer-center">
                <button className="chip-btn">1</button>
                <button className="chip-btn">2</button>
                <button className="chip-btn">5</button>
                <button className="chip-btn">10</button>
                <button className="chip-btn">25</button>
            </div>
            
            <div className="footer-right">
                <button className="action-btn back"><i className="fas fa-arrow-left"></i></button>
                <button className="action-btn cancel"><i className="fas fa-times"></i></button>
                <button className="action-btn multiply"><span>×2</span></button>
                <button className="action-btn refresh"><i className="fas fa-sync-alt"></i></button>
                <button className="action-btn sound"><i className="fas fa-volume-up"></i></button>
            </div>
        </footer>
        
        {/* <!-- Room Info Overlay --> */}
        <div className="room-info">
            <div className="room-header">
                <span>Xotic_Team12</span>
                <span className="players-joined">8 players joined</span>
            </div>
            <div className="player-avatars">
                <div className="avatar"><img src="PlayerProfile/Group 186.png" alt="Player" /></div>
                <div className="avatar"><img src="PlayerProfile/Group 187.png" alt="Player" /></div>
                <div className="avatar"><img src="PlayerProfile/Group 188.png" alt="Player" /></div>
                <div className="avatar"><img src="PlayerProfile/Group 189.png" alt="Player" /></div>
                <div className="avatar"><img src="PlayerProfile/Group 190.png" alt="Player" /></div>
                <div className="avatar plus">+3</div>
            </div>
        </div>
    </div>

   </>
  )
}
