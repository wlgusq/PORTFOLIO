new FinisherHeader({
  count: 300,
  size: { min: 2, max: 8, pulse: 0 },
  speed: {
    x: { min: 0, max: 0.4 },
    y: { min: 0, max: 0.6 }
  },
  colors: {
    background: "#0a0a0a",
    particles: ["#fbfcca", "#d7f3fe", "#ffd0a7"]
  },
  blending: "overlay",
    opacity: { center: 1, edge: 0 },
  skew: -2,
  shapes: ["c"]
});

const header = document.querySelector('.finisher-header');

setTimeout(() => {
  const canvas = header?.querySelector('canvas');
  if (canvas) {
    canvas.style.height = '355dvh';
    canvas.height = window.innerHeight * 1.5;
  }
}, 100);
