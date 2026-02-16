"use client"

import React from 'react';

/**
 * Custom Glass-morphism 3D Icon components
 * Using layered SVGs with gradients and drop shadows to simulate depth/glass
 */

export function GlassTechIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="glass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4d4d" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#e50914" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#8a0c10" stopOpacity="0.4" />
                </linearGradient>
            </defs>
            {/* Outer Frame - Silicon Chip Feel */}
            <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
                fill="url(#glass-grad)" stroke="#e50914" strokeWidth="0.5" />
            {/* Inner "Logic" Lines */}
            <path d="M8 8H16V16H8V8Z" fill="#e50914" fillOpacity="0.2" />
            <path d="M12 4V6M12 18V20M4 12H6M18 12H20" stroke="#e50914" strokeWidth="1" strokeLinecap="round" />
            {/* 3D Glass Layer */}
            <path d="M6 6L18 18M18 6L6 18" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
        </svg>
    );
}

export function GlassCinemaIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="glass-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4d4d" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8a0c10" stopOpacity="0.4" />
                </linearGradient>
            </defs>
            {/* Film Reel Body */}
            <circle cx="12" cy="12" r="8" fill="url(#glass-grad-2)" stroke="#e50914" strokeWidth="0.5" />
            <circle cx="12" cy="12" r="3" fill="#000" fillOpacity="0.2" stroke="#e50914" strokeWidth="0.5" />
            {/* Sprockets */}
            <circle cx="12" cy="7" r="1" fill="white" fillOpacity="0.4" />
            <circle cx="12" cy="17" r="1" fill="white" fillOpacity="0.4" />
            <circle cx="7" cy="12" r="1" fill="white" fillOpacity="0.4" />
            <circle cx="17" cy="12" r="1" fill="white" fillOpacity="0.4" />
            {/* Glass Flare */}
            <path d="M7 7.5L12 11.5" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" />
        </svg>
    );
}

export function GlassBrandingIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="glass-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4d4d" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8a0c10" stopOpacity="0.4" />
                </linearGradient>
            </defs>
            {/* Abstract Prism/Diamond */}
            <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="url(#glass-grad-3)" stroke="#e50914" strokeWidth="0.5" />
            <path d="M12 2V22M4 7H20M4 17H20" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
            {/* Core Glow */}
            <circle cx="12" cy="12" r="4" fill="#e50914" fillOpacity="0.1" filter="blur(2px)" />
        </svg>
    );
}
