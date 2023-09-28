const secs = document.querySelectorAll(".section-list");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    //   if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.7,
  }
);

secs.forEach((sec) => {
  observer.observe(sec);
});
