import React from 'react';

interface TileProps {
  tile: string;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

const tileMap: Record<string, string> = {
  '1m': '🀇\uFE0E', '2m': '🀈\uFE0E', '3m': '🀉\uFE0E', '4m': '🀊\uFE0E', '5m': '🀋\uFE0E', '6m': '🀌\uFE0E', '7m': '🀍\uFE0E', '8m': '🀎\uFE0E', '9m': '🀏\uFE0E',
  '1p': '🀙\uFE0E', '2p': '🀚\uFE0E', '3p': '🀛\uFE0E', '4p': '🀜\uFE0E', '5p': '🀝\uFE0E', '6p': '🀞\uFE0E', '7p': '🀟\uFE0E', '8p': '🀠\uFE0E', '9p': '🀡\uFE0E',
  '1s': '🀐\uFE0E', '2s': '🀑\uFE0E', '3s': '🀒\uFE0E', '4s': '🀓\uFE0E', '5s': '🀔\uFE0E', '6s': '🀕\uFE0E', '7s': '🀖\uFE0E', '8s': '🀗\uFE0E', '9s': '🀘\uFE0E',
  '1z': '🀀\uFE0E', '2z': '🀁\uFE0E', '3z': '🀂\uFE0E', '4z': '🀃\uFE0E', '5z': '🀆\uFE0E', '6z': '🀅\uFE0E', '7z': '🀄\uFE0E',
  '5mr': '🀋\uFE0E', '5pr': '🀝\uFE0E', '5sr': '🀔\uFE0E'
};

export const Tile: React.FC<TileProps> = ({ tile, onClick, selected, disabled }) => {
  const isRed = tile.endsWith('r');
  const char = tileMap[tile] || '🀫';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        mahjong-tile-btn
        relative flex items-center justify-center
        text-5xl leading-none select-none transition-all
        ${isRed ? 'text-red-600' : 'text-slate-800'}
        ${selected ? '-translate-y-4 drop-shadow-lg' : 'hover:-translate-y-2 hover:drop-shadow-md'}
        ${disabled ? 'opacity-50 cursor-not-allowed hover:translate-y-0 hover:drop-shadow-none' : 'cursor-pointer'}
      `}
      style={{
        fontFamily: '"Noto Sans Symbols 2", "PingFang SC", "Hiragino Sans", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif',
        fontVariantEmoji: 'text'
      }}
    >
      <span className="bg-white rounded-sm shadow-sm absolute inset-1 -z-10"></span>
      {char}
    </button>
  );
};
