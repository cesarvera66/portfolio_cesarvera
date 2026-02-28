(function () {
    const canvas = document.getElementById('heroParticles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, pts = [], t = 0;
    const mouse = { x: -999, y: -999, on: false };
    const dpr = window.devicePixelRatio || 1;

    function init() {
        const sec = canvas.parentElement;
        w = sec.offsetWidth;
        h = sec.offsetHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        mkPts();
    }

    function mkPts() {
        const n = Math.max(180, Math.floor(w * h / 5000));
        pts = [];
        for (let i = 0; i < n; i++) {
            const d = Math.random();
            pts.push({
                bx: Math.random() * w, by: Math.random() * h,
                x: 0, y: 0,
                dx: (Math.random() - 0.5) * 0.4,
                dy: (Math.random() - 0.5) * 0.4,
                r: d * 3 + 1.2,
                d: d,
                h: 185 + Math.random() * 50,
                s: 70 + Math.random() * 30,
                l: 55 + Math.random() * 25,
                a: 0.5 + d * 0.5,
                p: Math.random() * 6.28,
                ax: 25 + Math.random() * 50,
                ay: 20 + Math.random() * 35,
                sx: 0.004 + Math.random() * 0.008,
                sy: 0.003 + Math.random() * 0.006,
            });
        }
    }

    function frame() {
        t++;
        ctx.clearRect(0, 0, w, h);

        // Ambient blobs
        const bls = [
            [w * 0.25, h * 0.35, 350, 195], [w * 0.75, h * 0.55, 300, 215],
            [w * 0.5, h * 0.75, 280, 175], [w * 0.15, h * 0.7, 250, 205]
        ];
        for (const [bx, by, br, bh] of bls) {
            const x = bx + Math.sin(t * 0.0012) * 90;
            const y = by + Math.cos(t * 0.001) * 70;
            const g = ctx.createRadialGradient(x, y, 0, x, y, br);
            g.addColorStop(0, 'hsla(' + bh + ',85%,50%,0.12)');
            g.addColorStop(0.6, 'hsla(' + (bh + 15) + ',70%,40%,0.04)');
            g.addColorStop(1, 'transparent');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(x, y, br, 0, 6.28);
            ctx.fill();
        }

        // Mouse glow
        if (mouse.on) {
            const mg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
            mg.addColorStop(0, 'hsla(200,90%,65%,0.2)');
            mg.addColorStop(0.4, 'hsla(210,85%,55%,0.08)');
            mg.addColorStop(1, 'transparent');
            ctx.fillStyle = mg;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 220, 0, 6.28);
            ctx.fill();
        }

        // Update positions
        for (const p of pts) {
            p.x = p.bx + Math.sin(t * p.sx + p.p) * p.ax;
            p.y = p.by + Math.cos(t * p.sy + p.p) * p.ay;
            p.bx += p.dx;
            p.by += p.dy;
            if (mouse.on) {
                const dx = mouse.x - p.x, dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 180) {
                    const f = (180 - dist) / 180 * 0.6 * p.d;
                    p.bx += dx / dist * f;
                    p.by += dy / dist * f;
                }
            }
            if (p.bx < -50) p.bx = w + 50;
            if (p.bx > w + 50) p.bx = -50;
            if (p.by < -50) p.by = h + 50;
            if (p.by > h + 50) p.by = -50;
        }

        // Lines
        const md = 130;
        for (let i = 0; i < pts.length; i++) {
            for (let j = i + 1; j < pts.length; j++) {
                const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
                const dsq = dx * dx + dy * dy;
                if (dsq < md * md) {
                    const d = Math.sqrt(dsq);
                    const o = (1 - d / md) * 0.4 * Math.min(pts[i].d, pts[j].d);
                    const ah = (pts[i].h + pts[j].h) / 2;
                    ctx.strokeStyle = 'hsla(' + ah + ',80%,60%,' + o + ')';
                    ctx.lineWidth = o * 3;
                    ctx.beginPath();
                    ctx.moveTo(pts[i].x, pts[i].y);
                    ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.stroke();
                }
            }
        }

        // Particles
        for (const p of pts) {
            const hs = Math.sin(t * 0.005 + p.p) * 12;
            const ch = p.h + hs;
            const pa = p.a + Math.sin(t * 0.02 + p.p) * 0.12;
            const cr = p.r + Math.sin(t * 0.015 + p.p) * 0.8;

            ctx.save();
            ctx.shadowBlur = 25 + p.d * 40;
            ctx.shadowColor = 'hsla(' + ch + ',' + p.s + '%,' + p.l + '%,' + pa + ')';

            // Outer halo
            ctx.globalAlpha = pa * 0.15;
            ctx.beginPath();
            ctx.arc(p.x, p.y, cr * 4, 0, 6.28);
            ctx.fillStyle = 'hsla(' + ch + ',' + p.s + '%,' + (p.l + 10) + '%,1)';
            ctx.fill();

            // Main body
            ctx.globalAlpha = pa;
            ctx.beginPath();
            ctx.arc(p.x, p.y, cr, 0, 6.28);
            ctx.fillStyle = 'hsla(' + ch + ',' + p.s + '%,' + (p.l + 15) + '%,1)';
            ctx.fill();

            // Hot center
            ctx.globalAlpha = pa * 0.9;
            ctx.beginPath();
            ctx.arc(p.x, p.y, cr * 0.35, 0, 6.28);
            ctx.fillStyle = 'hsla(' + ch + ',100%,92%,1)';
            ctx.fill();

            ctx.restore();
        }

        requestAnimationFrame(frame);
    }

    const hero = canvas.parentElement;
    hero.addEventListener('mousemove', function (e) {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
        mouse.on = true;
    });
    hero.addEventListener('mouseleave', function () { mouse.on = false; });
    hero.addEventListener('touchmove', function (e) {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - r.left;
        mouse.y = e.touches[0].clientY - r.top;
        mouse.on = true;
    }, { passive: true });
    hero.addEventListener('touchend', function () { mouse.on = false; });

    window.addEventListener('resize', init);
    init();
    frame();
})();
