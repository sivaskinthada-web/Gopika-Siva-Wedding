const weddingDate = new Date("2026-12-26T10:30:00+05:30").getTime();

function updateCountdown() {
  const distance = weddingDate - Date.now();
  const ids = ["days", "hours", "minutes", "seconds"];

  if (distance <= 0) {
    ids.forEach((id) => (document.getElementById(id).textContent = "00"));
    return;
  }

  const values = [
    Math.floor(distance / (1000 * 60 * 60 * 24)),
    Math.floor((distance / (1000 * 60 * 60)) % 24),
    Math.floor((distance / (1000 * 60)) % 60),
    Math.floor((distance / 1000) % 60),
  ];

  ids.forEach((id, index) => {
    document.getElementById(id).textContent = String(values[index]).padStart(2, "0");
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);
