// Hide preloader after site is fully loaded
window.addEventListener("load", function() {
    document.getElementById("preloader").style.display = "none";
});

// Formspree form submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = e.target;

    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    try {
        const res = await fetch('https://formspree.io/f/mwpqanwd', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            alert('Message sent!');
            form.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch (err) {
        alert('Network error. Please try again.');
    }
});
