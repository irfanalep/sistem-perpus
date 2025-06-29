document.querySelectorAll(".book-swiper").forEach((el) => {
  new Swiper(el, {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true, // ubah ke false dulu agar tidak error saat item kurang
    navigation: {
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev"),
    },
    pagination: {
      el: el.querySelector(".swiper-pagination"),
      clickable: true,
      dynamicBulets: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});

function updateDateTime() {
  const now = new Date();

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = `${dayName}, ${day} ${month} ${year}`;

  document.getElementById(
    "datetime-display"
  ).innerHTML = `${timeString}<br>${dateString}`;
}

// Update setiap 1 detik
setInterval(updateDateTime, 1000);
updateDateTime(); // panggil sekali saat halaman pertama dibuka

function navigateTo(page) {
  window.location.href = page;
}

const quotes = document.querySelectorAll(".quote");
let currentIndex = 0;

setInterval(() => {
  quotes[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % quotes.length;
  quotes[currentIndex].classList.add("active");
}, 5000); // Ganti setiap 5 detik
