import React from 'react';

interface TileProps {
  tile: string;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

const tileMap: Record<string, string> = {
  '1m': '🀇', '2m': '🀈', '3m': '🀉', '4m': '🀊', '5m': '🀋', '6m': '🀌', '7m': '🀍', '8m': '🀎', '9m': '🀏',
  '1p': '🀙', '2p': '🀚', '3p': '🀛', '4p': '🀜', '5p': '🀝', '6p': '🀞', '7p': '🀟', '8p': '🀠', '9p': '🀡',
  '1s': '🀐', '2s': '🀑', '3s': '🀒', '4s': '🀓', '5s': '🀔', '6s': '🀕', '7s': '🀖', '8s': '🀗', '9s': '🀘',
  '1z': '🀀', '2z': '🀁', '3z': '🀂', '4z': '🀃', '5z': '🀆', '6z': '🀅', '7z': '🀄',
  '5mr': '🀋', '5pr': '🀝', '5sr': '🀔'
};

export const Tile: React.FC<TileProps> = ({ tile, onClick, selected, disabled }) => {
  const isRed = tile.endsWith('r');
  const char = tileMap[tile] || '🀫';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative flex items-center justify-center
        text-5xl leading-none select-none transition-all
        ${isRed ? 'text-red-600' : 'text-slate-800'}
        ${selected ? '-translate-y-4 drop-shadow-lg' : 'hover:-translate-y-2 hover:drop-shadow-md'}
        ${disabled ? 'opacity-50 cursor-not-allowed hover:translate-y-0 hover:drop-shadow-none' : 'cursor-pointer'}
      `}
      style={{
        fontFamily: '"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif'
      }}
    >
      <span className="bg-white rounded-sm shadow-sm absolute inset-1 -z-10"></span>
      {char}
    </button>
  );
};
