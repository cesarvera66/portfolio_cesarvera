(function () {
    const canvas = document.getElementById('heroParticles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, particles, time = 0;
    const mouse = { x: -1000, y: -1000, active: false };

    function resize() {
        const section = canvas.parentElement;
        width = canvas.width = section.offsetWidth;
        height = canvas.height = section.offsetHeight;
    }

    function createParticles() {
        const count = Math.min(200, Math.floor((width * height) / 4000));
        particles = [];
        for (let i = 0; i < count; i++) {
            const layer = Math.random();
            particles.push({
                baseX: Math.random() * width,
                baseY: Math.random() * height,
                x: 0, y: 0,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: layer * 2.5 + 0.5,
                layer: layer,
                hue: 190 + Math.random() * 40,
                sat: 70 + Math.random() * 30,
                light: 50 + Math.random() * 30,
                alpha: 0.3 + layer * 0.7,
                phase: Math.random() * Math.PI * 2,
                waveAmpX: 20 + Math.random() * 60,
                waveAmpY: 15 + Math.random() * 40,
                waveSpeedX: 0.003 + Math.random() * 0.008,
                waveSpeedY: 0.002 + Math.random() * 0.006,
            });
        }
    }

    function drawGradientBlobs() {
        const blobs = [
            { x: width * 0.2, y: height * 0.3, r: 300, hue: 200, speed: 0.001 },
            { x: width * 0.8, y: height * 0.6, r: 250, hue: 220, speed: 0.0015 },
            { x: width * 0.5, y: height * 0.8, r: 200, hue: 180, speed: 0.002 },
        ];
        blobs.forEach(bl => {
            const bx = bl.x + Math.sin(time * bl.speed) * 100;
            const by = bl.y + Math.cos(time * bl.speed * 0.7) * 80;
            const grad = ctx.createRadialGradient(bx, by, 0, bx, by, bl.r);
            grad.addColorStop(0, `hsla(${bl.hue}, 80%, 50%, 0.08)`);
            grad.addColorStop(0.5, `hsla(${bl.hue + 20}, 70%, 40%, 0.03)`);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.fillRect(bx - bl.r, by - bl.r, bl.r * 2, bl.r * 2);
        });
    }

    function drawConnections() {
        const maxDist = 120;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distSq = dx * dx + dy * dy;
                if (distSq < maxDist * maxDist) {
                    const dist = Math.sqrt(distSq);
                    const opacity = (1 - dist / maxDist) * 0.35 * Math.min(particles[i].layer, particles[j].layer);
                    const avgHue = (particles[i].hue + particles[j].hue) / 2;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `hsla(${avgHue}, 80%, 60%, ${opacity})`;
                    ctx.lineWidth = opacity * 2.5;
                    ctx.stroke();
                }
            }
        }
    }

    function drawMouseGlow() {
        if (!mouse.active) return;
        const grad1 = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
        grad1.addColorStop(0, 'hsla(200, 90%, 60%, 0.18)');
        grad1.addColorStop(0.3, 'hsla(210, 80%, 50%, 0.08)');
        grad1.addColorStop(1, 'transparent');
        ctx.fillStyle = grad1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 250, 0, Math.PI * 2);
        ctx.fill();
    }

    function animate() {
        time++;
        ctx.clearRect(0, 0, width, height);
        drawGradientBlobs();
        drawMouseGlow();
        drawConnections();

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            // Organic wave motion
            p.x = p.baseX + Math.sin(time * p.waveSpeedX + p.phase) * p.waveAmpX;
            p.y = p.baseY + Math.cos(time * p.waveSpeedY + p.phase) * p.waveAmpY;
            // Slow drift
            p.baseX += p.vx;
            p.baseY += p.vy;

            // Mouse attraction
            if (mouse.active) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200 && dist > 0) {
                    const force = (200 - dist) / 200 * 0.8 * p.layer;
                    p.baseX += (dx / dist) * force;
                    p.baseY += (dy / dist) * force;
                }
            }

            // Wrap edges
            if (p.baseX < -80) p.baseX = width + 80;
            if (p.baseX > width + 80) p.baseX = -80;
            if (p.baseY < -80) p.baseY = height + 80;
            if (p.baseY > height + 80) p.baseY = -80;

            // Dynamic color
            const hueShift = Math.sin(time * 0.005 + p.phase) * 15;
            const currentHue = p.hue + hueShift;
            const pulseAlpha = p.alpha + Math.sin(time * 0.02 + p.phase) * 0.15;
            const r = p.radius + Math.sin(time * 0.015 + p.phase) * 0.8;

            // Draw with bloom glow
            ctx.save();
            ctx.shadowBlur = 15 + p.layer * 25;
            ctx.shadowColor = `hsla(${currentHue}, ${p.sat}%, ${p.light}%, ${pulseAlpha * 0.8})`;

            // Outer glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${currentHue}, ${p.sat}%, ${p.light}%, ${pulseAlpha * 0.08})`;
            ctx.fill();

            // Core
            ctx.beginPath();
            ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${currentHue}, ${p.sat}%, ${p.light + 20}%, ${pulseAlpha})`;
            ctx.fill();

            // Bright center
            ctx.beginPath();
            ctx.arc(p.x, p.y, r * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${currentHue}, 100%, 90%, ${pulseAlpha})`;
            ctx.fill();

            ctx.restore();
        }

        requestAnimationFrame(animate);
    }

    // Mouse events
    const hero = canvas.parentElement;
    hero.addEventListener('mousemove', function (e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.active = true;
    });
    hero.addEventListener('mouseleave', function () { mouse.active = false; });
    // Touch support
    hero.addEventListener('touchmove', function (e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.active = true;
    }, { passive: true });
    hero.addEventListener('touchend', function () { mouse.active = false; });

    // Init
    window.addEventListener('resize', function () { resize(); createParticles(); });
    resize();
    createParticles();
    animate();
})();
