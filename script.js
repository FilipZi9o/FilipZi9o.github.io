// Target the blur circle
const blurCircle = document.querySelector('.blur-circle');

// Variables to store the current and target positions
let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;
const speed = 0.03; // The speed of the lag effect, smaller is slower

document.addEventListener('mousemove', function(e) {
    // Get the target mouse position
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Show the blur circle when the mouse moves
    blurCircle.style.opacity = 1;
});

// Animation loop to move the circle with easing
function animate() {
    // Calculate the difference between the current and target positions
    let dx = mouseX - circleX;
    let dy = mouseY - circleY;

    // Apply easing by moving a fraction of the difference
    circleX += dx * speed;
    circleY += dy * speed;

    // Set the new position of the blur circle
    blurCircle.style.left = `${circleX}px`;
    blurCircle.style.top = `${circleY}px`;

    // Request the next animation frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();

document.addEventListener('mouseleave', function() {
    // Fade out the blur circle when the mouse leaves the window
    blurCircle.style.opacity = 0;
});


// Detect if the device is mobile
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Modify the blur circle effect for mobile
if (isMobileDevice()) {
    const blurCircle = document.querySelector('.blur-circle');
    
    // Stop the mouse movement-based animation on mobile and let the shimmer effect play
    blurCircle.style.transition = 'none'; // Disable the mouse-follow effect

    // Ensure the shimmer effect moves around slowly
    blurCircle.style.animation = 'shimmerMove 10s infinite ease-in-out';

} else {
    // For non-mobile devices, retain the mouse-follow effect
    document.addEventListener('mousemove', function(e) {
        const blurCircle = document.querySelector('.blur-circle');
        let mouseX = e.clientX, mouseY = e.clientY;

        blurCircle.style.left = `${mouseX}px`;
        blurCircle.style.top = `${mouseY}px`;
        blurCircle.style.opacity = 1;
    });
}



// Select all tooltip elements
const tooltips = document.querySelectorAll('.tooltip');

// Function to toggle tooltip visibility on tap
function toggleTooltip(event) {
    // Prevent tooltip from closing immediately if tapped again
    event.stopPropagation();
    
    // Hide any open tooltips first
    tooltips.forEach((tooltip) => {
        tooltip.classList.remove('active');
    });

    // Toggle the tapped tooltip
    event.currentTarget.classList.add('active');
}

// Close tooltip if tapping elsewhere
document.addEventListener('click', () => {
    tooltips.forEach((tooltip) => {
        tooltip.classList.remove('active');
    });
});

// Add tap event to each tooltip
tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', toggleTooltip);
});