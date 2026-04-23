// =========================
// AMBIL NAMA DARI URL
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("to");

  const guestElement = document.getElementById("guest-name");

  if (guest && guestElement) {
    const formattedName = decodeURIComponent(guest)
      .replace(/\+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    guestElement.textContent = formattedName;
  }
});

// =========================
// ANIMASI BUKA UNDANGAN
// =========================
let bukaUndangan = document.getElementById("open");
let cover = document.getElementById("cover");
let section = document.getElementById("sectionKecil");

bukaUndangan.addEventListener("click", function () {
  cover.classList.add("fade-out");
  section.classList.add("slide-out");

  setTimeout(function () {
    // 👉 kirim parameter ke halaman berikutnya juga
    window.location.href = "core.html" + window.location.search;
  }, 900);
});