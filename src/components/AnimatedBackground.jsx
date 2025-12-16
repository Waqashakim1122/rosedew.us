// src/components/AnimatedBackground.jsx - PERFECT CELESTIAL LUXURY
import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Elegant luxury color palette
    const colors = {
      starGold: { r: 255, g: 215, b: 0 },
      starWhite: { r: 255, g: 255, b: 255 },
      pearl: { r: 248, g: 250, b: 252 },
      roseGlow: { r: 251, g: 113, b: 133 },
      purpleNebula: { r: 192, g: 132, b: 252 },
      deepRose: { r: 244, g: 63, b: 94 },
      champagne: { r: 255, g: 223, b: 186 },
      lavender: { r: 216, g: 191, b: 216 }
    };

    // Delicate Twinkling Star
    class DelicateStar {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.8;
        this.color = [colors.starGold, colors.starWhite, colors.pearl, colors.champagne][Math.floor(Math.random() * 4)];
        
        this.twinkleSpeed = Math.random() * 0.04 + 0.02;
        this.twinklePhase = Math.random() * Math.PI * 2;
        
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.twinklePhase += this.twinkleSpeed;
        this.pulsePhase += this.pulseSpeed;
      }

      draw() {
        const twinkle = (Math.sin(this.twinklePhase) + 1) / 2;
        const pulse = (Math.sin(this.pulsePhase) + 1) / 2;
        const brightness = 0.3 + twinkle * 0.7;
        
        ctx.save();
        ctx.globalAlpha = brightness;
        ctx.translate(this.x, this.y);
        
        // 4-point star
        const outerRadius = this.size * (1 + pulse * 0.3);
        const innerRadius = outerRadius * 0.4;
        
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (Math.PI / 4) * i;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, outerRadius * 2.5);
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.5)`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Sparkle cross
        if (twinkle > 0.7) {
          ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${brightness})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(-outerRadius * 1.8, 0);
          ctx.lineTo(outerRadius * 1.8, 0);
          ctx.moveTo(0, -outerRadius * 1.8);
          ctx.lineTo(0, outerRadius * 1.8);
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    // Elegant Rose Petal with Cosmic Glow
    class CosmicRosePetal {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.size = Math.random() * 7 + 4;
        this.speedY = Math.random() * 0.7 + 0.4;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.color = [colors.roseGlow, colors.deepRose, colors.purpleNebula, colors.lavender][Math.floor(Math.random() * 4)];
        
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.04;
        
        this.swayOffset = Math.random() * Math.PI * 2;
        this.swaySpeed = Math.random() * 0.03 + 0.015;
        this.swayAmount = Math.random() * 2.5 + 1.5;
        
        this.glowPhase = Math.random() * Math.PI * 2;
        this.glowSpeed = Math.random() * 0.04 + 0.02;
        
        this.depth = Math.random() * 0.6 + 0.4;
      }

      update() {
        this.y += this.speedY * this.depth;
        this.swayOffset += this.swaySpeed;
        this.x += Math.sin(this.swayOffset) * this.swayAmount * 0.12;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        this.glowPhase += this.glowSpeed;
        
        if (this.y > canvas.height + 50) this.reset();
        if (this.x < -50 || this.x > canvas.width + 50) this.reset();
      }

      draw() {
        const glow = (Math.sin(this.glowPhase) + 1) / 2;
        const alpha = (0.4 + glow * 0.4) * this.depth;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.depth, this.depth);
        
        // Cosmic glow aura
        const auraGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 3.5);
        auraGradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${0.6 * glow})`);
        auraGradient.addColorStop(0.4, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${0.3 * glow})`);
        auraGradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
        
        ctx.fillStyle = auraGradient;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 3.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Rose petal shape
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.bezierCurveTo(this.size * 0.9, -this.size * 0.7, this.size * 1.1, 0, this.size * 0.4, this.size * 0.9);
        ctx.bezierCurveTo(this.size * 0.1, this.size * 1.1, -this.size * 0.1, this.size * 1.1, -this.size * 0.4, this.size * 0.9);
        ctx.bezierCurveTo(-this.size * 1.1, 0, -this.size * 0.9, -this.size * 0.7, 0, -this.size);
        
        const petalGradient = ctx.createRadialGradient(0, -this.size * 0.3, 0, 0, 0, this.size * 1.3);
        petalGradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.95)`);
        petalGradient.addColorStop(0.6, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.7)`);
        petalGradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.1)`);
        
        ctx.fillStyle = petalGradient;
        ctx.fill();
        
        // Soft edge glow
        ctx.strokeStyle = `rgba(${this.color.r + 30}, ${this.color.g + 30}, ${this.color.b + 30}, 0.4)`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Magical Shooting Star
    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.6;
        this.length = Math.random() * 80 + 50;
        this.speed = Math.random() * 8 + 5;
        this.angle = Math.random() * Math.PI / 6 + Math.PI / 4;
        this.opacity = 1;
        this.fadeSpeed = 0.018;
        this.active = false;
      }

      update() {
        if (!this.active && Math.random() < 0.0008) {
          this.active = true;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height * 0.6;
        }
        
        if (this.active) {
          this.x += Math.cos(this.angle) * this.speed;
          this.y += Math.sin(this.angle) * this.speed;
          this.opacity -= this.fadeSpeed;
          
          if (this.opacity <= 0) {
            this.reset();
          }
        }
      }

      draw() {
        if (!this.active || this.opacity <= 0) return;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 215, 0, 0.8)');
        gradient.addColorStop(0.6, 'rgba(251, 113, 133, 0.4)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        ctx.stroke();
        
        // Sparkle at head
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Tiny Diamond Sparkle
    class DiamondSparkle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.color = [colors.starGold, colors.champagne, colors.pearl][Math.floor(Math.random() * 3)];
        
        this.twinkleSpeed = Math.random() * 0.1 + 0.05;
        this.twinklePhase = Math.random() * Math.PI * 2;
        
        this.lifespan = Math.random() * 200 + 150;
        this.age = 0;
        
        this.floatX = (Math.random() - 0.5) * 0.2;
        this.floatY = (Math.random() - 0.5) * 0.2;
      }

      update() {
        this.age++;
        this.twinklePhase += this.twinkleSpeed;
        this.x += this.floatX;
        this.y += this.floatY;
        
        if (this.age > this.lifespan) this.reset();
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        const twinkle = Math.abs(Math.sin(this.twinklePhase));
        const life = 1 - (this.age / this.lifespan);
        const alpha = twinkle * life;
        
        if (alpha < 0.1) return;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(this.x, this.y);
        
        // Diamond shape
        const size = this.size * (0.7 + twinkle * 0.6);
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(size * 0.6, 0);
        ctx.lineTo(0, size);
        ctx.lineTo(-size * 0.6, 0);
        ctx.closePath();
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2);
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.6)`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create all particles
    const starCount = window.innerWidth < 768 ? 50 : 100;
    const petalCount = window.innerWidth < 768 ? 20 : 40;
    const shootingStarCount = window.innerWidth < 768 ? 4 : 6;
    const sparkleCount = window.innerWidth < 768 ? 25 : 50;
    
    for (let i = 0; i < starCount; i++) particles.push(new DelicateStar());
    for (let i = 0; i < petalCount; i++) particles.push(new CosmicRosePetal());
    for (let i = 0; i < shootingStarCount; i++) particles.push(new ShootingStar());
    for (let i = 0; i < sparkleCount; i++) particles.push(new DiamondSparkle());

    let nebulaOffset = 0;

    const animate = () => {
      // Elegant fade
      ctx.fillStyle = 'rgba(30, 27, 75, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Subtle cosmic nebula waves
      nebulaOffset += 0.006;
      ctx.save();
      for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 25) {
          const y = canvas.height / 2.5 + 
                    Math.sin((x * 0.008) + nebulaOffset + i * 0.6) * 35 +
                    Math.cos((x * 0.004) + nebulaOffset * 0.5) * 25;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(192, 132, 252, ${0.04 - i * 0.015})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      ctx.restore();
      
      // Draw all particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block'
      }}
    />
  );
}