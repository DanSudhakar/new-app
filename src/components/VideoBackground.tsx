import React from 'react';

interface VideoBackgroundProps {
    videoSrc: string;
    children?: React.ReactNode;
    className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
    videoSrc,
    children,
    className = '',
}) => (
    <div
        className={`video-background-container ${className}`}
        style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
        }}
    >
        <video
            autoPlay
            loop
            muted
            playsInline
            src={videoSrc}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                minWidth: '100%',
                minHeight: '100%',
                width: 'auto',
                height: 'auto',
                zIndex: 0,
                objectFit: 'cover',
            }}
        />
        <div
            style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                height: '100%',
            }}
        >
            {children}
        </div>
    </div>
);

export default VideoBackground;