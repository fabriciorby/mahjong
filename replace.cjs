const fs = require('fs');
const path = require('path');

const tileMap = {
  '1m': '🀇', '2m': '🀈', '3m': '🀉', '4m': '🀊', '5m': '🀋', '6m': '🀌', '7m': '🀍', '8m': '🀎', '9m': '🀏',
  '1p': '🀙', '2p': '🀚', '3p': '🀛', '4p': '🀜', '5p': '🀝', '6p': '🀞', '7p': '🀟', '8p': '🀠', '9p': '🀡',
  '1s': '🀐', '2s': '🀑', '3s': '🀒', '4s': '🀓', '5s': '🀔', '6s': '🀕', '7s': '🀖', '8s': '🀗', '9s': '🀘',
  '1z': '🀀', '2z': '🀁', '3z': '🀂', '4z': '🀃', '5z': '🀆', '6z': '🀅', '7z': '🀄︎'
};

function replaceTiles(text) {
  // Replace sequences like 1234s -> 🀐🀑🀒🀓
  return text.replace(/\b([1-9]+)([mpsz])\b/g, (match, nums, suit) => {
    return nums.split('').map(n => tileMap[n + suit]).join('');
  });
}

const files = [
  'src/data/chapter1to4.ts',
  'src/data/chapter5to9.ts',
  'src/data/chapter10to14.ts'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // We only want to replace inside the explanation and content strings.
  // A simple regex might be too broad, but since the files are mostly text, it should be fine.
  // However, we MUST NOT replace the `hand: ['1m', '2m']` arrays!
  // Let's temporarily hide the hand arrays, do the replacement, and restore them.
  
  const hands = [];
  content = content.replace(/hand:\s*\[.*?\]/g, match => {
    hands.push(match);
    return `__HAND_${hands.length - 1}__`;
  });
  
  const correctAnswers = [];
  content = content.replace(/correctAnswers:\s*\[.*?\]/g, match => {
    correctAnswers.push(match);
    return `__CORRECT_${correctAnswers.length - 1}__`;
  });

  content = replaceTiles(content);

  // Restore
  hands.forEach((hand, i) => {
    content = content.replace(`__HAND_${i}__`, hand);
  });
  
  correctAnswers.forEach((ans, i) => {
    content = content.replace(`__CORRECT_${i}__`, ans);
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Processed ${file}`);
});
