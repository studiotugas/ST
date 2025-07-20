// Menangani menu navigasi mobile (hamburger menu)
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); // Mengubah ikon bars menjadi X
    navbar.classList.toggle('active');
}

// Menutup menu saat link di-klik atau saat scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Menambahkan efek aktif pada pertanyaan FAQ (opsional)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        // Sembunyikan semua jawaban lain
        document.querySelectorAll('.faq-answer').forEach(ans => {
            if (ans !== answer) {
                ans.style.display = 'none';
            }
        });
        
        // Toggle jawaban yang diklik
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});