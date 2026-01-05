'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Logo({ variant, className, alt = "Pranix logo", ...props }) {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by showing a placeholder or the default logo until mounted
    if (!mounted) {
        return <div className={className} style={{ visibility: 'hidden' }} />;
    }

    // Determine which logo to use
    // If variant is 'dark' or 'light', force that specific logo
    // Otherwise, use theme-based logic
    let logoSrc = '/pranix_logo.png'; // Default to dark theme logo (white text)

    if (variant === 'light') {
        logoSrc = '/pranix_light_logo.png';
    } else if (variant === 'dark') {
        logoSrc = '/pranix_logo.png';
    } else {
        // Theme-aware logic
        logoSrc = resolvedTheme === 'light' ? '/pranix_light_logo.png' : '/pranix_logo.png';
    }

    return (
        <img
            src={logoSrc}
            alt={alt}
            className={className}
            {...props}
        />
    );
}
