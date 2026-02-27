import { Chapter } from '../types';

export const chapter1to4: Chapter[] = [
  {
    id: 'chapter-1',
    title: '1. Tile Usefulness',
    sections: [
      {
        id: 'c1-s1',
        type: 'text',
        content: `
### Tile Usefulness

Understanding which tiles are most useful is the foundation of building hands efficiently. The most flexible tiles tend to get increasingly dangerous to discard as your hand progresses.

**Legend:**
- ❌ – not possible
- △ – decent
- ○ – good
- ◎ - superb

| Tile Type | Creating Runs | Creating Ryanmen |
| :--- | :--- | :--- |
| Guest winds | ❌ | ❌ |
| Yakuhai | ❌ | ❌ |
| Terminals (1 & 9) | △ | ❌ |
| 2 & 8 | ○ | △ |
| 3~7 | ◎ | ○ |
        `
      },
      {
        id: 'c1-q1',
        type: 'question',
        question: {
          id: 'q1-1',
          hand: ['2m', '4m', '7m', '8m', '9m', '1p', '2p', '3p', '7p', '8p', '9p', '1s', '2s', '3s', '4s'],
          questionText: 'What would you discard?',
          correctAnswers: ['2m'],
          explanation: 'You should consider the possibility of improving to ryanmen:\n\n- **🀈🀊** can only improve to ryanmen with 🀋.\n- **🀐🀑🀒🀓** can improve to ryanmen with both 🀒 and 🀕.\n\nDiscard **🀈**! \n\nWhy not 🀊? You can draw 🀋 later and keep the block in Manzu (e.g., 🀊🀋🀍🀎🀏).'
        }
      },
      {
        id: 'c1-q2',
        type: 'question',
        question: {
          id: 'q1-2',
          hand: ['4m', '6m', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '1s', '3s', '1z'],
          questionText: 'Assume 🀝 is dora. What would you discard?',
          correctAnswers: ['1s'],
          explanation: 'You can consider this situation from two perspectives:\n\n1. **🀐🀒** is the weakest block and 🀐 is the least useful tile. You may want to discard 🀐 for maximum efficiency.\n2. **🀐🀒** waits on a 2 and **🀊🀌** waits on a 5. From your opponents’ standpoint, 2’s are more likely to be discarded than 5’s. That’s why 🀐🀒 may be more effective as the final wait. For example, it’s easier for a 2 to become a suji trap.\n\nOpinions on this matter vary among high level players. It is important that you internalize both methods and use either judgement each time you are in a similar situation.'
        }
      }
    ]
  },
  {
    id: 'chapter-2',
    title: '2. Shanpon Combinations',
    sections: [
      {
        id: 'c2-s1',
        type: 'text',
        content: `
### Shanpon Combinations

Let's review the basic waits:

| Wait Type | Outs | No of Outs |
| :--- | :--- | :--- |
| Ryanmen (🀍🀎) | 🀌🀏 | 2 kinds; 8 tiles |
| Kanchan (🀙🀛) | 🀚 | 1 kind; 4 tiles |
| Penchan (🀐🀑) | 🀒 | 1 kind; 4 tiles |
| Shanpon (🀁🀁🀄︎🀄︎) | 🀁🀄︎ | 2 kinds; 4 tiles |

Three types of waits can be completed with only 4 tiles.

Consider ukeire of the following shapes:

**🀙🀙🀌🀍🀎** &rarr; 🀋🀎 + 🀙🀍

**🀙🀙🀈🀊🀊** &rarr; 🀉 + 🀊

Shanpon increases ukeire. Combined with ryanmen, it gives 12 tiles in total; with kanchan – 8 tiles (the same applies to penchan).

Now let's look at some hand examples.
        `
      },
      {
        id: 'c2-q1',
        type: 'question',
        question: {
          id: 'q2-1',
          hand: ['2m', '2m', '4m', '4m', '1p', '2p', '3p', '7p', '8p', '9p', '5s', '6s', '7z', '7z'],
          questionText: 'What would you discard?',
          correctAnswers: ['5s', '6s'],
          explanation: 'Ryanmen is the strongest block so you should discard 🀔 or 🀕 for a perfect iishanten.\n\n**BEWARE OF A COMMON MISTAKE:**\nIf you focus on calling Chun (🀄︎) and prematurely discard 🀈 to fix your 🀊 pair, you will miss out on ryanmen tenpai after drawing 🀉!\n\n**KEY POINT:**\nWhen you have three pairs in your hand, you should break off the pair from the strongest block.'
        }
      },
      {
        id: 'c2-q2',
        type: 'question',
        question: {
          id: 'q2-2',
          hand: ['5m', '6m', '7m', '7m', '8m', '9m', '2p', '3p', '4s', '5s', '9s', '9s', '1z', '1z'],
          questionText: 'What would you discard?',
          correctAnswers: ['2p', '3p', '4s', '5s'],
          explanation: 'You should fix one of the ryanmen. Choose 🀚🀛 or 🀓🀔!\n\nWhich ryanmen will be better as the final wait? Consider completing shanpon first.\n\n- If you discard from 🀚🀛 and draw 🀘: Wait is 🀒🀕.\n- If you discard from 🀓🀔 and draw 🀘: Wait is 🀙🀜.\n\nIf you consider the likelihood of each tile getting discarded by your opponents, you’ll realize that **🀙🀜 wait should be easier to win on** because it includes a terminal tile (🀙) which isn’t very useful, generally speaking. Therefore, discard 🀓 or 🀔.'
        }
      },
      {
        id: 'c2-q3',
        type: 'question',
        question: {
          id: 'q2-3',
          hand: ['5m', '6m', '7m', '7m', '8m', '9m', '3p', '4p', '4s', '5s', '9s', '9s', '1z', '1z'],
          questionText: 'Assume 🀝 is a red dora. What would you discard?',
          correctAnswers: ['4s', '5s'],
          explanation: 'Again, it all boils down to picking the wait you want to end up with. Consider completing the shanpon first.\n\nIf you discard from 🀛🀜 and draw 🀘, you lose the chance to draw the red dora 🀝. You can’t allow that to happen!\n\nYou should fix the dora ryanmen by discarding 🀓 or 🀔. You keep the red dora wait in both cases.'
        }
      },
      {
        id: 'c2-q4',
        type: 'question',
        question: {
          id: 'q2-4',
          hand: ['4m', '5m', '6m', '6m', '7m', '8m', '3p', '4p', '7s', '8s', '2z', '2z', '3z', '3z'],
          questionText: 'What would you discard?',
          correctAnswers: ['7s', '8s'],
          explanation: 'You should look for a way to maximize the chance for **Tanyao** (All Simples). Consider completing the shanpon first.\n\n- If you discard from 🀛🀜 and draw a pair: Tanyao is not guaranteed because your final wait (🀕🀘) includes a terminal tile (🀘).\n- If you discard from 🀖🀗 and draw a pair: Tanyao is guaranteed because your final wait is 🀚🀝 (both simple tiles).\n\nDiscard 🀖 or 🀗 to maximize the chance for Tanyao!'
        }
      },
      {
        id: 'c2-q5',
        type: 'question',
        question: {
          id: 'q2-5',
          hand: ['2m', '2m', '3m', '6m', '6m', '7m', '1p', '2p', '3p', '1s', '2s', '3s', '8s', '8s'],
          questionText: 'What would you discard?',
          correctAnswers: ['2m'],
          explanation: 'You should look for a way to maximize the chance for 123 Sanshoku. Consider completing the shanpon first.\n\nIf you discard 🀌: No Sanshoku.\nIf you discard 🀈: You can get Sanshoku.\n\nDiscard 🀈 to get Sanshoku!'
        }
      }
    ]
  },
  {
    id: 'chapter-3',
    title: '3. Shanpon & Kanchan',
    sections: [
      {
        id: 'c3-s1',
        type: 'text',
        content: `
### Shanpon & Kanchan

Consider the following tenpai shape:
**🀇🀈🀉 🀌🀌 🀜🀝🀞 🀔🀔🀖 🀄︎🀄︎🀄︎ (pon)**

How can you improve it to ryanmen?

If you discard 🀔:
**🀇🀈🀉 🀌🀌 🀜🀝🀞 🀔🀖 🀄︎🀄︎🀄︎ (pon)**
🀓 and 🀗 give ryanmen.

If you discard 🀖:
**🀇🀈🀉 🀌🀌 🀜🀝🀞 🀔🀔 🀄︎🀄︎🀄︎ (pon)**
🀓 and 🀋🀍 give ryanmen.

In cases like this, it’s better to keep shanpon over kanchan.

**WATCH OUT FOR FURITEN!**
In the above example, after discarding 🀖, 🀕 is no longer an effective tile because it would create a furiten ryanmen wait.
        `
      },
      {
        id: 'c3-q1',
        type: 'question',
        question: {
          id: 'q3-1',
          hand: ['7m', '8m', '9m', '1p', '2p', '3p', '4s', '6s', '8s', '8s', '9s', '9s', '7z', '7z'],
          questionText: 'Assume you have ponned Chun (🀄︎). What would you discard?',
          correctAnswers: ['8s', '9s'],
          explanation: 'In this case, if you keep the shanpon (🀗🀗 🀘🀘), the only tile that improves the wait to ryanmen is 🀔.\n\nIf you keep the kanchan (🀓🀕), you can improve the wait with 🀔 and 🀖. 🀖 gives a chance for more value with Chanta (Outside Hand).\n\nException: you can keep the shanpon if you think that 🀘 is easy to win on.'
        }
      },
      {
        id: 'c3-q2',
        type: 'question',
        question: {
          id: 'q3-2',
          hand: ['7m', '8m', '9m', '1p', '2p', '3p', '4s', '6s', '5sr', '5s', '7z', '7z', '7z'],
          questionText: 'Assume you have ponned Chun (🀄︎). What would you discard?',
          correctAnswers: ['3s'],
          explanation: 'Discarding 🀒 gives 🀕 and 🀖 for ryanmen.\nDiscarding 🀔 gives 🀑 and 🀕 for ryanmen.\nThe number of improvements is the same. Which one should you choose?\n\nIf you discard 🀔, you lose the red dora when you get ryanmen with 🀑.\nIf you discard 🀒, you keep the dora in both cases.\n\n**KEY POINTS:**\n- Shanpon waits made of tiles 3-7 improve to ryanmen with 2 types of tiles (both sides)\n- Shanpon shapes of 2’s & 8’s improve to ryanmen with only 1 type of tile.\n- Terminal and honor shanpon can’t be improved but they usually make for good waits on their own.\n- When your shanpon includes a red dora, make sure you can use it.'
        }
      },
      {
        id: 'c3-q3',
        type: 'question',
        question: {
          id: 'q3-3',
          hand: ['3m', '4m', '5mr', '7m', '8m', '9m', '1p', '2p', '3p', '1s', '3s', '8s', '8s', '8s'],
          questionText: 'Assume 🀏 is dora. What would you discard?',
          correctAnswers: ['1s'],
          explanation: 'It is true that if you cut 🀐, you’ll be able to improve the shape to ryanmen with 🀓🀕🀗. However, since you already have a decent value (two dora), it’s better to simply riichi with 🀑 kanchan wait! Remember, 2’s aren’t very useful to your opponents and they easily become suji traps.'
        }
      }
    ]
  },
  {
    id: 'chapter-4',
    title: '4. Combined Ryankan',
    sections: [
      {
        id: 'c4-s1',
        type: 'text',
        content: `
### Combined Ryankan

Consider this shape: 
**🀇🀉🀋🀍**

One of the most important rules of the 5-block theory is that every block should have at most 3 tiles. That is why you usually have to discard one of the tiles from such shapes.

Which tile to cut? It depends…

- If you’re aiming for Pinfu, discard 🀍:
  **🀇🀉🀋**
  You’re more likely to make a set and ryankan can improve to ryanmen.
- If you’re planning to open your hand, discard 🀉:
  **🀇🀋🀍**
  Now it’s a combined kanchan. 🀇 is easy to pon, generally speaking.
        `
      },
      {
        id: 'c4-q1',
        type: 'question',
        question: {
          id: 'q4-1',
          hand: ['1m', '1m', '3m', '5m', '1p', '2p', '3p', '4p', '5p', '6p', '7s', '8s', '9s', '1z'],
          questionText: 'What would you discard?',
          correctAnswers: ['1m'],
          explanation: 'The block in manzu has four tiles (🀇🀇🀉🀋). You should reduce it into a three-tile block. You’re aiming for Pinfu so discard 🀇!'
        }
      },
      {
        id: 'c4-q2',
        type: 'question',
        question: {
          id: 'q4-2',
          hand: ['1m', '1m', '3m', '5m', '1p', '2p', '3p', '4p', '5p', '6p', '7s', '8s', '9s', '7z', '7z'],
          questionText: 'What would you discard?',
          correctAnswers: ['5m'],
          explanation: 'You want to open your hand with Chun. Again, you need to slim down the block in Manzu. Since you’re going to call, discard 🀋. 🀇 is a great pon candidate.'
        }
      },
      {
        id: 'c4-q3',
        type: 'question',
        question: {
          id: 'q4-3',
          hand: ['2m', '4m', '4m', '6m', '1p', '2p', '3p', '4p', '5p', '6p', '1s', '1s', '2s', '2s'],
          questionText: 'What would you discard?',
          correctAnswers: ['4m'],
          explanation: 'You should slim down the block in manzu because it has four tiles. No matter what you discard, ukeire will be similar.\n\nBut! If you are going to open the hand, you should keep three pairs. Now you can pon any of the pairs and there’s a chance to get ryanmen in manzu with 🀍.'
        }
      },
      {
        id: 'c4-q4',
        type: 'question',
        question: {
          id: 'q4-4',
          hand: ['4m', '6m', '6m', '8m', '1p', '2p', '3p', '4p', '5p', '6p', '1s', '1s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['9s'],
          explanation: 'Even though the block in manzu has too many tiles, you should aim for Tanyao and discard 🀘!\nRemember that you can draw more tiles in manzu and reconfigure them!\n\n**KEY POINTS:**\n- With shapes like 5799 or 4668, it’s usually best to reduce the number of tiles to three. When going for Pinfu, break off the pair; when planning to call, discard a single tile!\n- When choosing your discards, consider the chance of making ryanmen with the remaining shape!'
        }
      }
    ]
  }
];
