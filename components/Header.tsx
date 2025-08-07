
import React from 'react';
import { CompanyLogo, RefreshCw, ShoppingCartIcon, MenuIcon } from './Icons';
import Button from './common/Button';

interface HeaderProps {
    onReset: () => void;
    onCartClick: () => void;
    cartItemCount: number;
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReset, onCartClick, cartItemCount, onMenuClick }) => {
  return (
    <header className="w-full mx-auto p-4 flex items-center justify-between lg:hidden sticky top-0 bg-white/90 backdrop-blur-md z-20 border-b border-slate-200">
      <div className="flex items-center gap-2">
        <button onClick={onMenuClick} className="p-2 -ml-2 rounded-full hover:bg-black/10 transition-colors" aria-label="Open menu">
          <MenuIcon className="w-6 h-6 text-brand-text-muted" />
        </button>
        <div className="flex items-center">
          {/* Use CompanyLogo SVG component as primary, with image fallback */}
          <CompanyLogo className="w-32 h-12" textColor="#1e293b" />
          {/* Hidden image as backup - will show if SVG fails */}
          <img
            src="/test-logo.svg"
            alt="Dermatics Logo"
            className="w-32 h-12 object-contain hidden"
            style={{ display: 'none' }}
            onLoad={() => console.log('Backup SVG logo loaded')}
            onError={() => console.log('Backup SVG logo failed')}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={onReset} variant="secondary" size="sm" className="gap-1.5 px-3">
            <RefreshCw className="w-4 h-4" />
            Reset
        </Button>
         <Button onClick={onCartClick} variant="secondary" size="sm" className="relative !rounded-full !p-2">
            <ShoppingCartIcon className="w-6 h-6" />
            {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-secondary text-xs font-bold text-white shadow-lg">
                    {cartItemCount}
                </span>
            )}
        </Button>
      </div>
    </header>
  );
};

export default Header;