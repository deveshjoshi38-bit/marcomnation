"use client"

import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@/lib/gsap';
import { gsap } from '@/lib/gsap';

interface DotGridProps {
    className?: string;
}

export default function DotGrid({ className }: DotGridProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        const dots: { x: number; y: number; baseOpacity: number }[] = [];
        const spacing = 40;

        const resize = () => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (!rect) return;
            width = rect.width;
            height = rect.height;
            canvas.width = width;
            canvas.height = height;

            dots.length = 0;
            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    dots.push({
                        x,
                        y,
                        baseOpacity: 0.05 + Math.random() * 0.1
                    });
                }
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            dots.forEach(dot => {
                const dx = mouse.current.x - dot.x;
                const dy = mouse.current.y - dot.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200;

                let opacity = dot.baseOpacity;
                let size = 1;

                if (dist < maxDist) {
                    const factor = 1 - (dist / maxDist);
                    opacity = dot.baseOpacity + factor * 0.4;
                    size = 1 + factor * 2;
                }

                ctx.fillStyle = `rgba(229, 9, 20, ${opacity})`; // Using Netflix Red for dots
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
}
