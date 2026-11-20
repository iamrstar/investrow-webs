'use client';

/**
 * BrandTagline Component
 * Replicates the official Investrow tagline: "Ek Kadam Kal Ki Aur."
 * Featuring the signature cursive typography, festive ray accents (orange & blue),
 * and dynamic curved orange swoosh underline arc.
 */
export default function BrandTagline({
  size = 'md',
  theme = 'light',
  className = '',
  style = {}
}) {
  const SIZES = {
    xs: {
      fontSize: '12px',
      arcHeight: '6px',
      arcMarginTop: '-2px',
      strokeWidth: '1.8',
      rayWidth: 11,
      rayHeight: 11,
      gap: '3px'
    },
    sm: {
      fontSize: '18px',
      arcHeight: '9px',
      arcMarginTop: '-3px',
      strokeWidth: '2.4',
      rayWidth: 18,
      rayHeight: 18,
      gap: '6px'
    },
    md: {
      fontSize: '25px',
      arcHeight: '12px',
      arcMarginTop: '-4px',
      strokeWidth: '2.8',
      rayWidth: 24,
      rayHeight: 24,
      gap: '8px'
    },
    lg: {
      fontSize: '32px',
      arcHeight: '15px',
      arcMarginTop: '-5px',
      strokeWidth: '3.2',
      rayWidth: 28,
      rayHeight: 28,
      gap: '10px'
    },
    xl: {
      fontSize: '40px',
      arcHeight: '18px',
      arcMarginTop: '-6px',
      strokeWidth: '3.8',
      rayWidth: 34,
      rayHeight: 34,
      gap: '12px'
    }
  };

  const current = SIZES[size] || SIZES.md;

  let textColor = '#0B2545'; // Default deep navy blue for light backgrounds
  if (theme === 'dark') {
    textColor = '#FFFFFF';
  } else if (theme === 'blue') {
    textColor = '#008AD8';
  } else if (theme === 'orange') {
    textColor = '#FF6A13';
  }

  return (
    <div 
      className={`brand-tagline ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        verticalAlign: 'middle',
        userSelect: 'none',
        ...style
      }}
    >
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: current.gap,
        position: 'relative'
      }}>
        {/* Left 3 Festive Rays (Top Orange, Middle & Bottom Blue) */}
        <svg 
          width={current.rayWidth} 
          height={current.rayHeight} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
          aria-hidden="true"
        >
          {/* Top ray - diagonal up-left */}
          <path d="M18 9L4 3" stroke="#FF6A13" strokeWidth="2.5" strokeLinecap="round" />
          {/* Middle ray - horizontal left */}
          <path d="M16 12L2 12" stroke="#008AD8" strokeWidth="2.5" strokeLinecap="round" />
          {/* Bottom ray - diagonal down-left */}
          <path d="M18 15L5 20" stroke="#008AD8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        {/* Cursive Tagline Text + Orange Swoosh Underline */}
        <div style={{
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <span style={{
            fontFamily: "'Caveat', 'Dancing Script', 'Playfair Display', cursive, sans-serif",
            fontSize: current.fontSize,
            fontWeight: 700,
            fontStyle: 'italic',
            color: textColor,
            letterSpacing: '0.3px',
            lineHeight: 1.15,
            whiteSpace: 'nowrap'
          }}>
            Ek Kadam Kal Ki Aur.
          </span>

          {/* Curved Orange Underline Arc */}
          <svg
            viewBox="0 0 200 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block',
              width: '100%',
              height: current.arcHeight,
              marginTop: current.arcMarginTop
            }}
            aria-hidden="true"
          >
            <path
              d="M 6 3 Q 100 15 194 3"
              stroke="#FF6A13"
              strokeWidth={current.strokeWidth}
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Right 3 Festive Rays (Top Orange, Middle & Bottom Blue) */}
        <svg 
          width={current.rayWidth} 
          height={current.rayHeight} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
          aria-hidden="true"
        >
          {/* Top ray - diagonal up-right */}
          <path d="M6 9L20 3" stroke="#FF6A13" strokeWidth="2.5" strokeLinecap="round" />
          {/* Middle ray - horizontal right */}
          <path d="M8 12L22 12" stroke="#008AD8" strokeWidth="2.5" strokeLinecap="round" />
          {/* Bottom ray - diagonal down-right */}
          <path d="M6 15L19 20" stroke="#008AD8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
