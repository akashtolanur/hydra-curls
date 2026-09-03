interface SharedWaveProps {
    fillColor?: string;
    className?: string;
    inverted?: boolean;
}

export const SharedWave: React.FC<SharedWaveProps> = ({
    fillColor = '#00c3e3',
    className = '',
    inverted = false,
}) => (
    <div className={`w-full overflow-hidden leading-none ${inverted ? 'rotate-180' : ''} ${className}`}>
        <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-10 md:h-16"
        >
            <path
                d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
                fill={fillColor}
            />
        </svg>
    </div>
);