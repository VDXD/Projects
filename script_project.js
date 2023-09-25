// const sections = document.querySelectorAll("section");

// const handleIntersection = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("animate-section");
//     }
//   });
// };

// const observer = new IntersectionObserver(handleIntersection, {
//   threshold: 0.5,
// });

// sections.forEach((section) => {
//   observer.observe(section);
// });

const secs = document.querySelectorAll(".sec");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    if(entry.isIntersecting) observer.unobserve(entry.target)
  });
}, 
    {
        threshold: 0.5,
    }
);

secs.forEach((sec) => {
  observer.observe(sec);
});
