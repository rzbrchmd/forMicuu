function showDetails(title, detail) {
    const popup = document.getElementById("popup-content");

    // Menambahkan kelas 'show' untuk animasi
    popup.classList.add("show");

    // Menampilkan pop-up
    popup.style.display = "block";

    // Mengisi title dan deskripsi
    document.querySelector("#title").textContent = title;
    document.querySelector("#description").textContent = detail;
}

function closePopup() {
    const popup = document.getElementById("popup-content");

    // Menghapus kelas 'show' untuk animasi keluar
    popup.classList.remove("show");

    // Menyembunyikan pop-up setelah sedikit delay agar animasi keluar terlihat
    setTimeout(() => {
        popup.style.display = "none";
    }, 300); // Waktu delay sesuai dengan durasi transisi CSS
}
function handleLogin(event) {
    event.preventDefault(); // Mencegah refresh halaman

    // Ambil nilai dari input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Cek kredensial (ini hanya contoh sederhana)
    if (username === 'micull' && password === 'cakep') {
        // Jika login berhasil, sembunyikan form dan tampilkan galeri
        document.getElementById('login-form').style.display = 'none';
        
        const gallery = document.getElementById('gallery');
        gallery.style.display = 'block';

        // Tampilkan gambar satu per satu dengan animasi
        showImagesOneByOne();
    } else {
        alert('Username atau Password salah!');
    }
}

function showImagesOneByOne() {
    const images = document.querySelectorAll('.gallery-item');
    
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show'); // Tambahkan kelas show untuk animasi
        }, index * 1000); // Tampilkan setiap gambar dengan interval 1000ms (1 detik)
    });
}

// Fungsi untuk menampilkan detail gambar
function showDetails(title, detail) {
    const popup = document.getElementById("popup-content");

    // Menambahkan kelas 'show' untuk animasi
    popup.classList.add("show");

    // Menampilkan pop-up
    popup.style.display = "block";

    // Mengisi title dan deskripsi
    document.querySelector("#title").textContent = title;
    document.querySelector("#description").textContent = detail;
}

// Fungsi untuk menutup pop-up
function closePopup() {
    const popup = document.getElementById("popup-content");

    // Menghapus kelas 'show' untuk animasi keluar
    popup.classList.remove("show");

    // Menyembunyikan pop-up setelah sedikit delay agar animasi keluar terlihat
    setTimeout(() => {
        popup.style.display = "none";
    }, 300); // Waktu delay sesuai dengan durasi transisi CSS
}

function askQuestion() {
    const question = "apa hal yang paling aku sukai? pencet 1 atau 2 yah";
    const correctAnswer = "micuuu"; // Jawaban yang benar
    const wrongAnswer = "apa ya"; // Jawaban yang salah

    let answer;

    while (true) {
        // Tampilkan prompt dengan dua pilihan
        answer = prompt(`${question}\n1. ${correctAnswer}\n2. ${wrongAnswer}`);
        
        if (answer === null) { // Jika pengguna menekan Cancel
            break; // Keluar dari loop
        } else if (answer.trim() === "1") { // Jika memilih jawaban benar
            alert("bener banget HAHAHAH!");
            break; // Keluar dari loop
        } else if (answer.trim() === "2") { // Jika memilih jawaban salah
            alert("masa gatauu:(");
            continue; // Kembali ke pertanyaan
        } else {
            alert("hayoloh jawab "); // Pesan jika input tidak valid
        }
    }
}