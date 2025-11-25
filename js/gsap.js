gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".trans",
  { color: "0a0a0a", y: 120, opacity: 0},
  {
    color: "#fff",
    y: 0,
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".background",
      start: "top start",
      end: "center center",
      scrub: .5,
      immediateRender: false,
    },
  }
);



gsap.from(".word li", {
  x: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".word",
    start: "top 80%",
    toggleActions: "play none none", 
  },
});



gsap.to(".wcid-inner", {
  "--angle": "360deg",
  duration: 6,
  repeat: -1,
  ease: "none"
});