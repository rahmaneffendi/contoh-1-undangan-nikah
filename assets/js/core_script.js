document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // COUNTDOWN (FIXED)
  // =========================
  const targetDate = new Date("2026-06-03T00:00:00").getTime() / 1000;

  let flipdown = new FlipDown(targetDate);
  flipdown.start();

  flipdown.ifEnded(() => {
    document.querySelector(".flipdown").innerHTML = `
      <h2>💍 Hari Pernikahan Kami 💍</h2>
      <p>Terima kasih atas doa dan kehadiran Anda</p>
    `;
  });

  // =========================
  // DATA RSVP AWAL (DUMMY)
  // =========================
  const data = [
    { name: "Helmi", status: "Hadir", message: "Selamat Yus, Happy Wedding" },
    { name: "Rizkillah", status: "Hadir", message: "Congrats Yus, Semoga Sakinah mAwaddah Warahmah" },
    { name: "Acul", status: "Hadir", message: "Semoga bahagia selalu" },
  ];

  const submittedDataDiv = document.getElementById("submittedData");

  data.forEach((item) => {
    const newItem = document.createElement("div");
    newItem.classList.add("submitted-item");

    newItem.innerHTML = `
      <h3>${item.name} (${item.status})</h3>
      <p>${item.message}</p>
    `;

    submittedDataDiv.appendChild(newItem);
  });

  // =========================
  // FORM RSVP
  // =========================
  document
    .getElementById("rsvpForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const attendance = document.querySelector(
        'input[name="attendance"]:checked'
      ).value;
      const message = document.getElementById("message").value;

      const newItem = document.createElement("div");
      newItem.classList.add("submitted-item");

      newItem.innerHTML = `
        <h3>${name} (${attendance})</h3>
        <p>${message}</p>
      `;

      submittedDataDiv.appendChild(newItem);

      this.reset();
      scrollToTop();
    });

  // =========================
  // AUDIO CONTROL
  // =========================
  const audio = document.getElementById("myAudio");
  const playButton = document.getElementById("playButton");

  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playButton.classList.add("playing");
      playButton.classList.remove("paused");
    } else {
      audio.pause();
      playButton.classList.add("paused");
      playButton.classList.remove("playing");
    }
  });

  // =========================
  // SLIDER
  // =========================
  let slideIndex = 1;

  function showSlide(n) {
    let slides = document.querySelectorAll(".mySlide");

    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) => (slide.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";
  }

  function plusSlide(n) {
    showSlide((slideIndex += n));
  }

  // expose ke global biar bisa dipakai di HTML onclick
  window.plusSlide = plusSlide;

  showSlide(slideIndex);
});

// =========================
// SCROLL FUNCTION
// =========================
function scrollToTop() {
  const container = document.getElementById("submittedData");
  container.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function copyRekening(nomor, button) {
  navigator.clipboard.writeText(nomor).then(() => {
    const originalText = button.innerText;

    button.innerText = "Tersalin";
    button.classList.add("copied");

    setTimeout(() => {
      button.innerText = originalText;
      button.classList.remove("copied");
    }, 2000);
  });
}