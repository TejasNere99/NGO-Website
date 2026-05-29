import { useEffect, useRef } from 'react';

export default function FloatingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    // Scale count dynamically with screen surface area (capped at 40)
    const particleCount = Math.min(40, Math.floor((width * height) / 40000));

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5; // Size between 0.5px and 2.5px
        this.speedX = Math.random() * 0.3 - 0.15; // Slow horizontal drift
        this.speedY = Math.random() * -0.4 - 0.1; // Slow upward float
        // Mix: 40% brand orange particles, 60% faint white particles
        this.color =
          Math.random() > 0.6
            ? `rgba(255, 102, 0, ${Math.random() * 0.15 + 0.05})`
            : `rgba(255, 255, 255, ${Math.random() * 0.08 + 0.02})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reset if drifted off-screen top
        if (this.y < -10) {
          this.reset();
          this.y = height + 10;
        }
        // bounce on horizontal bounds
        if (this.x < -10 || this.x > width + 10) {
          this.speedX = -this.speedX;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Seed particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
