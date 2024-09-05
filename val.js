document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous messages
        messageDiv.textContent = '';

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const fatherName = document.getElementById('fatherName').value.trim();
        const motherName = document.getElementById('motherName').value.trim();
        const gender = document.getElementById('gender').value;
        const address = document.getElementById('address').value.trim();

        // Basic validation
        if (!name || !email || !phone || !fatherName || !motherName || !gender || !address) {
            messageDiv.textContent = 'All fields are required.';
            return;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            messageDiv.textContent = 'Please enter a valid email address.';
            return;
        }

        // Simple phone number validation
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            messageDiv.textContent = 'Please enter a valid 10-digit phone number.';
            return;
        }

        // If all checks pass
        messageDiv.textContent = 'Registration successful!';
        messageDiv.style.color = 'green';

        // Optionally, you could reset the form here
        // form.reset();
    });
});
