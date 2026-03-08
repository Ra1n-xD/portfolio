import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const PARTICLE_COUNT = 220;
const CONNECTION_DIST = 160;
const SPEED = 0.38;

function rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export default function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        let raf: number;
        let W = 0,
            H = 0;
        const mouse = { x: -9999, y: -9999 };

        const isDark = theme !== 'light';
        const particleColor = isDark ? 'rgba(56,182,255,' : 'rgba(0,120,212,';
        const lineColor = isDark ? 'rgba(56,182,255,' : 'rgba(0,120,212,';

        class Particle {
            x = 0;
            y = 0;
            vx = 0;
            vy = 0;
            r = 0;
            alpha = 0;
            pulse = 0;
            pulseSpeed = 0;

            constructor() {
                this.reset(true);
            }
            reset(init = false) {
                this.x = rand(0, W);
                this.y = init ? rand(0, H) : Math.random() < 0.5 ? -10 : H + 10;
                this.vx = rand(-SPEED, SPEED);
                this.vy = rand(-SPEED, SPEED);
                this.r = rand(1.0, 3.2);
                this.alpha = rand(0.1, 0.3);
                this.pulse = rand(0, Math.PI * 2);
                this.pulseSpeed = rand(0.008, 0.022);
            }
            update() {
                this.pulse += this.pulseSpeed;
                const mx = this.x - mouse.x,
                    my = this.y - mouse.y;
                const md = Math.sqrt(mx * mx + my * my);
                if (md < 100) {
                    this.x += (mx / md) * 0.6;
                    this.y += (my / md) * 0.6;
                }
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < -20 || this.x > W + 20 || this.y < -20 || this.y > H + 20) this.reset();
            }
            draw() {
                const a = this.alpha * (0.7 + 0.3 * Math.sin(this.pulse));
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = particleColor + a + ')';
                ctx.fill();
            }
        }

        let particles: Particle[] = [];

        function resize() {
            const prevW = W;
            const prevH = H;
            W = canvas.offsetWidth;
            H = canvas.offsetHeight;
            canvas.width = W * devicePixelRatio;
            canvas.height = H * devicePixelRatio;
            ctx.scale(devicePixelRatio, devicePixelRatio);
            if (prevW > 0 && prevH > 0 && particles.length) {
                const scaleX = W / prevW;
                const scaleY = H / prevH;
                particles.forEach((p) => {
                    p.x *= scaleX;
                    p.y *= scaleY;
                });
            }
        }

        resize();
        particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < CONNECTION_DIST) {
                        const a = (1 - d / CONNECTION_DIST) * 0.07;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = lineColor + a + ')';
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
        }

        let t = 0;
        function drawGradientOrbs() {
            t += 0.003;
            const orbs = [
                { x: W * 0.15 + Math.sin(t * 0.7) * W * 0.06, y: H * 0.2 + Math.cos(t * 0.5) * H * 0.08, r: Math.min(W, H) * 0.38, c: isDark ? 'rgba(56,182,255,0.015)' : 'rgba(0,120,212,0.01)' },
                { x: W * 0.82 + Math.cos(t * 0.6) * W * 0.05, y: H * 0.65 + Math.sin(t * 0.8) * H * 0.06, r: Math.min(W, H) * 0.32, c: isDark ? 'rgba(99,102,241,0.015)' : 'rgba(80,72,229,0.008)' },
                { x: W * 0.5 + Math.sin(t * 0.4) * W * 0.08, y: H * 0.85 + Math.cos(t * 0.6) * H * 0.04, r: Math.min(W, H) * 0.28, c: isDark ? 'rgba(56,182,255,0.01)' : 'rgba(0,120,212,0.005)' }
            ];
            orbs.forEach(({ x, y, r, c }) => {
                const g = ctx.createRadialGradient(x, y, 0, x, y, r);
                g.addColorStop(0, c);
                g.addColorStop(1, 'transparent');
                ctx.fillStyle = g;
                ctx.fillRect(0, 0, W, H);
            });
        }

        function loop() {
            ctx.clearRect(0, 0, W, H);
            drawGradientOrbs();
            drawConnections();
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            raf = requestAnimationFrame(loop);
        }

        loop();

        const onResize = () => {
            resize();
        };
        const onMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const onLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };

        window.addEventListener('resize', onResize);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseleave', onLeave);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0
            }}
        />
    );
}
