import React, { useState } from 'react';
import { courseData } from './data/courseData';
import { QuestionView } from './components/QuestionView';
import { Glossary } from './components/Glossary';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { BookOpen, ChevronRight, Menu, X, BookText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState(courseData[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeChapter = courseData.find(c => c.id === activeChapterId);

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:block
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="font-bold text-lg tracking-tight">Mahjong Master</h1>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <button
              onClick={() => {
                setActiveChapterId('glossary');
                setIsSidebarOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors mb-4
                ${activeChapterId === 'glossary' 
                  ? 'bg-indigo-50 text-indigo-700 font-medium' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
              `}
            >
              <BookText className="w-5 h-5" />
              <span>Glossary</span>
            </button>

            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-4">Chapters</div>
            {courseData.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => {
                  setActiveChapterId(chapter.id);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-colors
                  ${activeChapterId === chapter.id 
                    ? 'bg-indigo-50 text-indigo-700 font-medium' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                <span className="truncate">{chapter.title}</span>
                {activeChapterId === chapter.id && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 h-screen overflow-y-auto">
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-4 lg:hidden flex items-center gap-4">
          <button onClick={() => setIsSidebarOpen(true)} className="text-slate-600 hover:text-slate-900">
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="font-semibold truncate">
            {activeChapterId === 'glossary' ? 'Glossary' : activeChapter?.title}
          </h2>
        </div>

        {activeChapterId === 'glossary' ? (
          <Glossary />
        ) : activeChapter ? (
          <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
            <motion.div
              key={activeChapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-12">
                {activeChapter.title}
              </h1>

              <div className="space-y-12">
                {activeChapter.sections.map((section) => (
                  <div key={section.id}>
                    {section.type === 'text' && section.content && (
                      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-a:text-indigo-600">
                        <Markdown 
                          remarkPlugins={[remarkGfm]} 
                          rehypePlugins={[rehypeRaw]}
                        >
                          {section.content.replace(/([\uD83C][\uDC00-\uDC2B]\uFE0E?)+/g, '<span class="mahjong-tile">$&</span>')}
                        </Markdown>
                      </div>
                    )}
                    {section.type === 'question' && section.question && (
                      <QuestionView question={section.question} />
                    )}
                  </div>
                ))}
              </div>
              
              {/* Next Chapter Navigation */}
              {courseData.findIndex(c => c.id === activeChapter.id) < courseData.length - 1 && (
                <div className="mt-16 pt-8 border-t border-slate-200">
                  <button
                    onClick={() => {
                      const nextIdx = courseData.findIndex(c => c.id === activeChapter.id) + 1;
                      setActiveChapterId(courseData[nextIdx].id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group flex items-center gap-4 px-6 py-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all w-full text-left"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-500 mb-1">Next Chapter</p>
                      <p className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {courseData[courseData.findIndex(c => c.id === activeChapter.id) + 1].title}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
                    </div>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
