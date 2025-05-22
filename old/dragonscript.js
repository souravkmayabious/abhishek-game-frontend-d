document.addEventListener('DOMContentLoaded', function() {
    // Timer functionality
    let seconds = 60;
    const timerElement = document.querySelector('.timer span');
    
    function updateTimer() {
        seconds--;
        if (seconds < 0) {
            seconds = 60;
        }
        
        const formattedTime = `00:${seconds.toString().padStart(2, '0')}`;
        timerElement.textContent = formattedTime;
    }
    
    // Update timer every second
    setInterval(updateTimer, 1000);
    
    // Add click event for betting cells
    const betCells = document.querySelectorAll('.bet-cell');
    betCells.forEach(cell => {
        cell.addEventListener('click', function() {
            // Highlight selected bet
            betCells.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            
            // Update bet amount display
            const betLabel = this.querySelector('.bet-label').textContent;
            console.log(`Selected bet: ${betLabel}`);
        });
    });
    
    // Chip selection functionality
    const chipButtons = document.querySelectorAll('.chip-btn');
    let selectedChipValue = 1; // Default value
    
    chipButtons.forEach(button => {
        button.addEventListener('click', function() {
            chipButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            
            // Extract chip value from image name or data attribute
            // This is a simplified example
            const chipImg = this.querySelector('img');
            const chipSrc = chipImg.getAttribute('alt');
            selectedChipValue = parseInt(chipSrc.replace('Chip ', ''));
            
            console.log(`Selected chip value: ${selectedChipValue}`);
        });
    });
    
    // Action buttons functionality
    document.querySelector('.action-btn.refresh').addEventListener('click', function() {
        console.log('Refreshing game state');
        // Reset game state logic would go here
    });
    
    document.querySelector('.action-btn.cancel').addEventListener('click', function() {
        console.log('Cancelling current bet');
        // Cancel bet logic would go here
        betCells.forEach(c => c.classList.remove('selected'));
    });
    
    document.querySelector('.action-btn.multiply').addEventListener('click', function() {
        console.log('Doubling current bet');
        // Double bet logic would go here
    });
    
    // Room button toggle
    const roomBtn = document.querySelector('.room-btn');
    const roomInfo = document.querySelector('.room-info');
    
    roomBtn.addEventListener('click', function() {
        roomInfo.classList.toggle('visible');
    });
    
    // Sound toggle
    const soundBtn = document.querySelector('.action-btn.sound');
    let soundOn = true;
    
    soundBtn.addEventListener('click', function() {
        soundOn = !soundOn;
        if (soundOn) {
            this.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
        console.log(`Sound ${soundOn ? 'on' : 'off'}`);
    });
});


  function goFullscreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }

    // Hide the popup after entering fullscreen
    document.getElementById('popup').style.display = 'none';
  }
