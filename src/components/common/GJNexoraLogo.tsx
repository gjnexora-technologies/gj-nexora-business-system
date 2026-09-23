import React, { useState } from 'react';

interface GJNexoraLogoProps {
  variant?: 'light' | 'dark' | 'future' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const GJNexoraLogo: React.FC<GJNexoraLogoProps> = ({
  variant = 'auto',
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const [imgError, setImgError] = useState(false);

  // Determine logo source based on variant
  let imgSrc = '/logo_light.jpg';
  if (variant === 'dark') imgSrc = '/logo_dark.jpg';
  if (variant === 'future') imgSrc = '/logo_future.jpg';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {!imgError ? (
        <div className="relative flex items-center">
          <img
            src={imgSrc}
            alt="GJ Nexora Technologies"
            className={`${sizeClasses[size]} w-auto object-contain rounded transition-all duration-300 hover:opacity-95`}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* Crisp Vector Fallback if images are loading or missing */
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#111827] to-[#1E293B] p-0.5 shadow-md flex items-center justify-center border border-gray-200">
            <span className="font-extrabold text-white text-base tracking-tighter">G</span>
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-indigo-400 text-base tracking-tighter">J</span>
          </div>
          <div>
            <div className="font-extrabold text-sm tracking-tight text-[#111827] leading-none flex items-center gap-1">
              <span>GJ</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">NEXORA</span>
            </div>
            {showTagline && (
              <div className="text-[9px] font-semibold text-[#667085] tracking-wider uppercase mt-0.5">
                Building Digital Excellence
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
