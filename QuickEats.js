document.addEventListener("DOMContentLoaded", function() {
    let loginBtn = document.getElementById("loginBtn");
    let modal = document.getElementById("loginModal");

    if (loginBtn) {
        loginBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevents unwanted navigation
            openModal();
        });
    }

    function openModal() {
        if (modal) {
            modal.style.display = "flex"; // Use flex to center
        }
    }

    function closeModal() {
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Attach close button functionality
    let closeButton = document.querySelector(".close-btn");
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }
});
