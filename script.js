document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("wa-button").addEventListener("click", function() {
        var phoneNumber = "6281329024710";
        var message = "Halo, saya ingin membuat janji temu.";
        var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
        window.open(whatsappUrl, '_blank');
    });

  
});
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});

