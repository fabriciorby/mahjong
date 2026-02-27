import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tile } from './Tile';
import { Question } from '../types';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuestionViewProps {
  question: Question;
}

export const QuestionView: React.FC<QuestionViewProps> = ({ question }) => {
  const [selectedTile, setSelectedTile] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleTileClick = (tile: string) => {
    if (hasAnswered) return;
    setSelectedTile(tile);
    setHasAnswered(true);
  };

  const isCorrect = selectedTile && question.correctAnswers.includes(selectedTile);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 my-8">
      <h4 
        className="text-lg font-semibold text-slate-900 mb-6"
        dangerouslySetInnerHTML={{ __html: question.questionText.replace(/([\uD83C][\uDC00-\uDC2B]\uFE0E?)+/g, '<span class="mahjong-tile">$&</span>') }}
      />
      
      <div className="flex flex-wrap gap-1 mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100 justify-center">
        {question.hand.map((tile, idx) => (
          <Tile
            key={`${tile}-${idx}`}
            tile={tile}
            onClick={() => handleTileClick(tile)}
            selected={selectedTile === tile}
            disabled={hasAnswered && selectedTile !== tile}
          />
        ))}
      </div>

      <AnimatePresence>
        {hasAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-xl border ${
              isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600" />
              )}
              <h5 className={`font-semibold text-lg ${isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Not quite.'}
              </h5>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <Markdown 
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {question.explanation.replace(/([\uD83C][\uDC00-\uDC2B]\uFE0E?)+/g, '<span class="mahjong-tile">$&</span>')}
              </Markdown>
            </div>
            
            <button
              onClick={() => {
                setSelectedTile(null);
                setHasAnswered(false);
              }}
              className="mt-6 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
