const weddingDate = new Date("2026-12-26T10:30:00+05:30").getTime();

function updateCountdown() {
  const distance = weddingDate - Date.now();
  const values = distance <= 0
    ? [0, 0, 0, 0]
    : [
        Math.floor(distance / 86400000),
        Math.floor((distance / 3600000) % 24),
        Math.floor((distance / 60000) % 60),
        Math.floor((distance / 1000) % 60),
      ];

  ["days", "hours", "minutes", "seconds"].forEach((id, index) => {
    const element = document.getElementById(id);
    if (element) element.textContent = String(values[index]).padStart(2, "0");
  });
}

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal:not(.visible)").forEach((element) => observer.observe(element));
updateCountdown();
setInterval(updateCountdown, 1000);
