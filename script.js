// Minimal interactivity: tab toggle & sample Book button
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.querySelectorAll(".book").forEach((b) => {
  b.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Book action — replace with your booking flow.");
  });
});
