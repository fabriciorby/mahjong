import React from 'react';
import { Tile } from './Tile';

export const Glossary: React.FC = () => {
  const suits = [
    { name: 'Manzu (Characters)', symbol: 'm', tiles: ['1m', '2m', '3m', '4m', '5m', '5mr', '6m', '7m', '8m', '9m'] },
    { name: 'Pinzu (Circles)', symbol: 'p', tiles: ['1p', '2p', '3p', '4p', '5p', '5pr', '6p', '7p', '8p', '9p'] },
    { name: 'Souzu (Bamboo)', symbol: 's', tiles: ['1s', '2s', '3s', '4s', '5s', '5sr', '6s', '7s', '8s', '9s'] },
    { name: 'Zihai (Honors)', symbol: 'z', tiles: ['1z', '2z', '3z', '4z', '5z', '6z', '7z'], descriptions: ['East', 'South', 'West', 'North', 'Haku (White)', 'Hatsu (Green)', 'Chun (Red)'] }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">Glossary</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Tile Reference</h2>
          <div className="space-y-8">
            {suits.map(suit => (
              <div key={suit.name} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-medium text-slate-700 mb-4">{suit.name}</h3>
                <div className="flex flex-wrap gap-4">
                  {suit.tiles.map((tile, idx) => (
                    <div key={tile} className="flex flex-col items-center gap-2">
                      <div className="text-4xl">
                        <Tile tile={tile} />
                      </div>
                      <span className="text-xs font-mono text-slate-500">
                        {tile}
                        {suit.descriptions ? ` (${suit.descriptions[idx]})` : ''}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Terminology</h2>
          <dl className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div>
              <dt className="font-semibold text-slate-900">Ryanmen</dt>
              <dd className="text-slate-600 mt-1">An open-ended wait for a sequence (e.g., waiting on 3 or 6 for a 4-5 shape).</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Kanchan</dt>
              <dd className="text-slate-600 mt-1">A closed wait / inside wait for a sequence (e.g., waiting on 4 for a 3-5 shape).</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Penchan</dt>
              <dd className="text-slate-600 mt-1">An edge wait for a sequence (e.g., waiting on 3 for a 1-2 shape).</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Shanpon</dt>
              <dd className="text-slate-600 mt-1">A dual pair wait, where drawing either tile completes a triplet.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Tanki</dt>
              <dd className="text-slate-600 mt-1">A single tile wait to complete a pair.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Nobetan</dt>
              <dd className="text-slate-600 mt-1">A 4-tile shape (e.g., 2345) waiting on the edges (2 or 5) to form a pair and a sequence.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Ukeire</dt>
              <dd className="text-slate-600 mt-1">Tile acceptance; the number of tiles that advance your hand.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Iishanten</dt>
              <dd className="text-slate-600 mt-1">One tile away from tenpai (ready hand).</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
};
