const address = "32ixEdVJWo3kmvJGMTZq5jAQVZZeuwnqzo";
const balanceElement = document.getElementById("balance-number");

const getBalance = async () => {
    const result = await fetch(`https://mempool.space/api/address/${address}`);
    const response = await result.json();
    const balance = response.chain_stats.funded_txo_sum / 100000000;
    return balance;
}

const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;

    // Función de easing personalizada con potencia mayor para un ease-out más fuerte
    const easeOutPower = (t) => 1 - Math.pow(1 - t, 5);

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = (timestamp - startTimestamp) / duration;
        const progress = Math.min(easeOutPower(elapsed), 1);
        const currentValue = (progress * (end - start) + start).toFixed(2); // Keep two decimal places

        element.innerHTML = currentValue;

        if (elapsed < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.innerHTML = end.toFixed(2); // Ensure final value has two decimal places
        }
    };

    window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", async (e) => {
    const balance = await getBalance();

    animateValue(balanceElement, 0, balance, 1500);
});

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon svg');
        const iconContainer = item.querySelector('.faq-icon');

        if (content.style.maxHeight) {
            // Close the current item
            content.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
            icon.style.color = '#1e3a8a'; // Reset color to original
            iconContainer.style.backgroundColor = '#ffffff'; // Reset background to original
        } else {
            // Close all other items
            document.querySelectorAll('.faq-content').forEach(el => el.style.maxHeight = null);
            document.querySelectorAll('.faq-icon svg').forEach(el => {
                el.style.transform = 'rotate(0deg)';
                el.style.color = '#1e3a8a'; // Reset color to original
            });
            document.querySelectorAll('.faq-icon').forEach(el => el.style.backgroundColor = '#ffffff'); // Reset background to original

            // Open the clicked item
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.style.transform = 'rotate(90deg)';
            icon.style.color = '#ffffff'; // Change color to white
            iconContainer.style.backgroundColor = '#1e3a8a'; // Change background to blue
        }
    });
});


//Reviews slider

const slider = document.getElementById('slider');
        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');
      
        let currentIndex = 0;
        
        function getCardWidth() {
          return slider.children[0].offsetWidth + 16; 
        }
      
        function getVisibleCards() { //Responsive
          if (window.innerWidth < 768) {
            return 1; // 1 card on mobile
          } else if (window.innerWidth < 1024) {
            return 2; // 2 cards on mediun screen
          } else {
            return 3; // 3 card on normal screen
          }
        }
      
        function updateSlider() {
          const cardWidth = getCardWidth();
          slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
      
        nextButton.addEventListener('click', () => {
          if (currentIndex < slider.children.length - getVisibleCards()) {
            currentIndex++;
            updateSlider();
          }
        });
      
        prevButton.addEventListener('click', () => {
          if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
          }
        });
      
        window.addEventListener('resize', updateSlider);