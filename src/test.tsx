import React from 'react';
import { renderToString } from 'react-dom/server';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const html = renderToString(
  <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
    {'<span class="mahjong-tile">🀄︎</span>'}
  </Markdown>
);
console.log(html);
