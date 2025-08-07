
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
        <img
          src="/logo.png"
          alt="Dermatics Logo"
          className="w-24 h-10 object-contain"
          onLoad={() => console.log('Header logo loaded successfully')}
          onError={(e) => {
            console.log('Header logo failed to load, showing fallback');
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.innerHTML = '<span class="text-lg font-bold text-slate-800">Dermatics</span>';
            target.parentNode?.appendChild(fallback);
          }}
        />
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