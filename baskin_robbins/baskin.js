                // JavaScript to handle carousel functionality
                const slides = document.querySelectorAll('.first_section_img');
                const bullets = document.querySelectorAll('.slider_dot_svg');
                
                let currentIndex =0;
                
                function updateBulletColors() {
                  bullets.forEach((bullet, index) => {
                    if (index === currentIndex) {
                      bullet.style.fill = 'rgb(0,0,0)'; // Set active bullet color
                    } else {
                      bullet.style.fill = 'grey'; // Reset other bullets
                    }
                  });
                }
                
                updateBulletColors();
                
                // Add event listeners to change slide and update bullet colors
                bullets.forEach((bullet, index) => {
                  bullet.addEventListener('click', () => {
                    currentIndex = index;
                    updateBulletColors();
                    // You can also add code to change the slide based on the clicked bullet.
                  });
                });