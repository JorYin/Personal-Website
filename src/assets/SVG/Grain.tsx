const GrainOverlay = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none" 
      style={{ 
        zIndex: 1,
        mixBlendMode: 'multiply'
      }}
    >
      <svg 
        className="w-full h-full"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <defs>
          <filter id="grainy" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              type="turbulence" 
              baseFrequency="1" 
              numOctaves="1"
              result="noise"
            />
            <feColorMatrix 
              in="noise" 
              type="saturate" 
              values="0"
              result="monoNoise"
            />
          </filter>
        </defs>
        <rect 
          width="100%" 
          height="100%" 
          filter="url(#grainy)" 
          opacity="0.25"
          fill="#000000"
        />
      </svg>
    </div>
  );
};

export default GrainOverlay;