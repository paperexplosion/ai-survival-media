"use client";

import { useMemo } from 'react';

interface RadarChartProps {
    stats: {
        tech: number;
        human: number;
        autonomy: number;
    };
}

export function RadarChart({ stats }: RadarChartProps) {
    const points = useMemo(() => {
        const centerX = 150;
        const centerY = 150;
        const maxRadius = 120;

        const angleStep = (Math.PI * 2) / 3;
        const startAngle = -Math.PI / 2;

        const coords = [
            {
                x: centerX + Math.cos(startAngle) * (stats.tech / 100) * maxRadius,
                y: centerY + Math.sin(startAngle) * (stats.tech / 100) * maxRadius,
            },
            {
                x: centerX + Math.cos(startAngle + angleStep) * (stats.human / 100) * maxRadius,
                y: centerY + Math.sin(startAngle + angleStep) * (stats.human / 100) * maxRadius,
            },
            {
                x: centerX + Math.cos(startAngle + angleStep * 2) * (stats.autonomy / 100) * maxRadius,
                y: centerY + Math.sin(startAngle + angleStep * 2) * (stats.autonomy / 100) * maxRadius,
            },
        ];

        return coords.map(c => `${c.x},${c.y}`).join(' ');
    }, [stats]);

    const gridLevels = [0.25, 0.5, 0.75, 1];

    return (
        <div className="w-full aspect-square max-w-[300px] mx-auto">
            <svg viewBox="0 0 300 300" className="w-full h-full">
                <defs>
                    <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0, 255, 255, 0.4)" />
                        <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
                        <stop offset="100%" stopColor="rgba(0, 200, 255, 0.4)" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {gridLevels.map((level, i) => (
                    <polygon
                        key={i}
                        points={`
                            ${150 + Math.cos(-Math.PI / 2) * 120 * level},${150 + Math.sin(-Math.PI / 2) * 120 * level}
                            ${150 + Math.cos(-Math.PI / 2 + (Math.PI * 2) / 3) * 120 * level},${150 + Math.sin(-Math.PI / 2 + (Math.PI * 2) / 3) * 120 * level}
                            ${150 + Math.cos(-Math.PI / 2 + (Math.PI * 4) / 3) * 120 * level},${150 + Math.sin(-Math.PI / 2 + (Math.PI * 4) / 3) * 120 * level}
                        `}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                    />
                ))}

                <line x1="150" y1="150" x2="150" y2="30" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                <line x1="150" y1="150" x2={150 + Math.cos(-Math.PI / 2 + (Math.PI * 2) / 3) * 120} y2={150 + Math.sin(-Math.PI / 2 + (Math.PI * 2) / 3) * 120} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                <line x1="150" y1="150" x2={150 + Math.cos(-Math.PI / 2 + (Math.PI * 4) / 3) * 120} y2={150 + Math.sin(-Math.PI / 2 + (Math.PI * 4) / 3) * 120} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />

                <polygon
                    points={points}
                    fill="url(#radarGradient)"
                    stroke="rgba(0, 255, 255, 0.8)"
                    strokeWidth="2"
                    filter="url(#glow)"
                />

                {[
                    { label: 'Tech', angle: -Math.PI / 2, value: stats.tech },
                    { label: 'Human', angle: -Math.PI / 2 + (Math.PI * 2) / 3, value: stats.human },
                    { label: 'Autonomy', angle: -Math.PI / 2 + (Math.PI * 4) / 3, value: stats.autonomy },
                ].map((item, i) => {
                    const labelRadius = 140;
                    const x = 150 + Math.cos(item.angle) * labelRadius;
                    const y = 150 + Math.sin(item.angle) * labelRadius;

                    return (
                        <g key={i}>
                            <text
                                x={x}
                                y={y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="text-xs fill-slate-300 font-semibold"
                            >
                                {item.label}
                            </text>
                            <text
                                x={x}
                                y={y + 15}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="text-xs fill-cyan-400 font-bold"
                            >
                                {item.value}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
