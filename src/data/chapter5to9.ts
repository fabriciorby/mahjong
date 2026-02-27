import { Chapter } from '../types';

export const chapter5to9: Chapter[] = [
  {
    id: 'chapter-5',
    title: '5. Avoiding Tanki Waits',
    sections: [
      {
        id: 'c5-s1',
        type: 'text',
        content: `
### Avoiding Tanki Waits

Have you ever had tenpai like this:

**🀇🀈🀉🀋🀌🀍🀗🀗🀗🀙🀚🀛🀞**

Tanki is the weakest basic wait. Since one of the winning tiles is already used, there are only three outs.

On the other hand, tanki waits can easily improve:

**🀇🀈🀉🀋🀌🀍🀗🀗🀗🀙🀚🀛🀂**

West wind is much better as a tanki wait than 🀞 because your opponents are more likely to get rid of West than 🀞.

There are ways to avoid such scenarios altogether.
        `
      },
      {
        id: 'c5-q1',
        type: 'question',
        question: {
          id: 'q5-1',
          hand: ['1m', '2m', '5m', '6m', '7m', '8p', '8p', '8p', '1s', '2s', '3s', '4s', '5s', '6s'],
          questionText: 'What would you discard?',
          correctAnswers: ['1m', '2m'],
          explanation: '🀔🀗 seem redundant, especially to beginners. You should not follow this "instinct" which in fact is a lack of knowledge!\n\n🀔🀕🀖🀗 is a very strong block - yonrenkei. You can make two ryanmen out of it or it may become a pair + set.\n\nIn this case it is much better to discard the weakest block – 🀇🀈.\n\nEven if all your other sets complete before your draw souzu, your wait is going to be pretty good. Your wait is nobetan - a double sided tanki wait – 🀔🀗. Almost as good as ryanmen.'
        }
      },
      {
        id: 'c5-q2',
        type: 'question',
        question: {
          id: 'q5-2',
          hand: ['2m', '3m', '4m', '1p', '2p', '3p', '4p', '5p', '6p', '1s', '1s', '2s', '2s', '7z', '7z'],
          questionText: 'What would you discard?',
          correctAnswers: ['1s', '2s'],
          explanation: 'It is obvious that you want to call Chun. What to discard afterwards? 🀐 or 🀑? You guessed that right!\n\n**WAIT, WAIT, WAIT!**\n\nJust like in the previous example – don’t break up yonrenkei in souzu! The weakest block is 🀠🀡! Aiming for nobetan tenpai is the way to go!\n\n**KEY POINTS:**\n- Learn and memorize four-tile shapes: 2246 (combined ryankan), 3456 (yonrenkei), 5677 (aryanmen)\n- Remember that combined ryankan is the weakest one. You can often keep yonrenkei and aryanmen all the way to iishanten or even tenpai. They both make for good waits.'
        }
      }
    ]
  },
  {
    id: 'chapter-6',
    title: '6. 6-Block Method – Comparing Blocks',
    sections: [
      {
        id: 'c6-s1',
        type: 'text',
        content: `
### 6-Block Method – Comparing Blocks

Hierarchy of blocks:

| Block Type | Example |
| :--- | :--- |
| **Green Zone - Best Blocks** | |
| Combined ryanmen | **🀉🀊🀋🀌** |
| Ryanmen | **🀜🀝** |
| **Yellow Zone - Moderate Blocks** | |
| Combined penchan/kanchan | **🀇🀇🀈**, **🀇🀉🀉** |
| Ryankan | **🀚🀜🀞** |
| Yakuhai pair | **🀄︎🀄︎** |
| **Red Zone - Weak Blocks** | |
| 3-7 pair | **🀊🀊** |
| Penchan/kanchan | **🀇🀈**, **🀇🀉** |
| Terminal/non-Yakuhai pair | **🀇🀇**, **🀃🀃** |

Tips:
- Consider Chiitoitsu/Toitoi when you have at least 4 pairs
- Terminals and non-Yakuhai pairs are excellent pon material
        `
      },
      {
        id: 'c6-q1',
        type: 'question',
        question: {
          id: 'q6-1',
          hand: ['2m', '3m', '4m', '7m', '8m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['9s'],
          explanation: 'This hand has six blocks. We need to discard the weakest block. It’s 🀘!'
        }
      },
      {
        id: 'c6-q2',
        type: 'question',
        question: {
          id: 'q6-2',
          hand: ['2m', '3m', '4m', '6m', '8m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['9s'],
          explanation: 'Again, 🀘 is the weakest link. It’s ok to discard it.\n\n**HOWEVER!**\nNotice that 🀞 can turn into ryanmen with 🀝 or 🀟. Considering this kind of shape evolution is important. In some situations you may want to discard 🀎 (the second weakest block).'
        }
      },
      {
        id: 'c6-q3',
        type: 'question',
        question: {
          id: 'q6-3',
          hand: ['2m', '2m', '4m', '7m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['9m'],
          explanation: 'Hmmm… the weakest block seems to be 🀐, right?\n\n**Watch out!**\nIf you discard 🀐, you will have a pairless hand after drawing 🀉. You should keep the block that is most likely to become the pair. In this case it’s 🀐 because it’s an isolated pair.\n\nDiscard 🀏!'
        }
      },
      {
        id: 'c6-q4',
        type: 'question',
        question: {
          id: 'q6-4',
          hand: ['1m', '1m', '2m', '2m', '3m', '3m', '4s', '4s', '5s', '5s', '6z', '6z', '7z', '7z'],
          questionText: 'What would you discard?',
          correctAnswers: ['4s', '5s'],
          explanation: 'What’s the weakest block?\n\nNormally, terminals and non-Yakuhai honors make the weakest blocks. There are five pairs, though. That means that this hand is 1-away from ready to Chiitoitsu. Regular hand is 3-away from ready. You may not want to discard any of the pairs. That leaves 🀓🀔 as the weakest block.\n\n**DON’T BE AFRAID TO DISCARD RYANMEN!**\n\nIf you manage to call Chun, you can aim for Toitoi as well, because all your pairs should be easy to pon.\n\n**KEY POINTS:**\n- When you’re going for a regular hand (4 groups, one pair) you can keep 6 strong blocks. Just remember to secure the pair!\n- When you’re going for a pair based hand (Chiitoitsu, Toitoi), keep the pairs which are easy to pon and don’t hesitate to drop ryanmen blocks if you have to!'
        }
      }
    ]
  },
  {
    id: 'chapter-7',
    title: '7. Tenpai Speed',
    sections: [
      {
        id: 'c7-s1',
        type: 'text',
        content: `
### Tenpai Speed

Let's start with an example:
**🀉🀊🀍🀎🀚🀛🀜🀝🀞🀟🀐🀐🀑🀑**

Fixing ryanmen in pinzu seems like a good idea, doesn't it? Let's do it!

**🀉🀊🀍🀎🀚🀛🀜🀝🀞🀐🀐🀑🀑🀒**

You have to drop 🀍🀎 now because it doesn't guarantee Tanyao...

Can we do better?

Try discarding 🀍🀎 first!

**🀉🀊🀚🀛🀜🀝🀞🀟🀐🀐🀑🀑🀒**

That's more like it! You have a perfect iishanten. Moreover, Tanyao is guaranteed so you can call if need be.

Let's do some math!

Breaking shanpon gives more ukeire at 2-shanten -> 1-shanten stage.
**🀉🀊🀍🀎🀚🀛🀜🀝🀞🀐🀐🀑🀑**
Ukeire: 🀈🀋🀌🀏, 🀛🀞, 🀔🀗 – 8 kinds; **32 tiles**

Compare that to dropping 🀍🀎:
**🀉🀊🀚🀛🀜🀝🀞🀟🀐🀐🀑🀑**
Ukeire: 🀈🀋 🀛🀜🀞🀠 🀔🀗 – 8 kinds; **28 tiles**

However, when you consider iishanten -> tenpai stage, the situation is reversed!

**🀉🀊🀍🀎🀚🀛🀜🀝🀞🀐🀐🀑🀑🀒**
**🀉🀊🀚🀛🀜🀝🀞🀟🀐🀐🀑🀑🀒**

The first hand – you have to drop one ryanmen so your tenpai ukeire includes two ryanmen – **16 tiles**.
The second hand – your ukeire includes two ryanmen and shanpon – **20 tiles**!

To sum up:

**🀉🀊 🀍🀎 🀚🀛🀜 🀝🀞🀟 🀐🀐 🀑🀑**

As you may have realized, this hand has 6 blocks. Since a standard Mahjong hand consists of 5 blocks (4 sets + a pair), you don't actually need 6 blocks. The weakest block should normally be discarded to aim for the fastest tenpai.

In some situations you may decide to keep 6 blocks in the above hand, for example:
- if 🀜 or 🀠 is dead
- if 6-🀏 is dora
- if you desperately need Pinfu
- if manzu are too dangerous to discard

Having said that, you should always be aware of the ukeire trade-off you're making.
        `
      },
      {
        id: 'c7-q1',
        type: 'question',
        question: {
          id: 'q7-1',
          hand: ['2m', '2m', '4m', '7m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['9m'],
          explanation: 'Again, there are six blocks so you should remove the weakest one. In situations like this, you should normally discard a regular kanchan. 224 and 246 are stronger.\n\nDiscard 🀏!\n\n**KEY POINTS:**\n- There are advantages and disadvantages to both 5-block and 6-block methods. Modern Mahjong strategy favors locking in 5 blocks.\n- From 3-shanten on, you should keep track of the blocks in your hand. It’s crucial to plan in advance whether you will keep 6 blocks or lock in 5 blocks!'
        }
      }
    ]
  },
  {
    id: 'chapter-8',
    title: '8. 5-Block Method vs 6-Block Method',
    sections: [
      {
        id: 'c8-q1',
        type: 'question',
        question: {
          id: 'q8-1',
          hand: ['1m', '1m', '2m', '2m', '3m', '3m', '4s', '4s', '5s', '5s', '6z', '6z', '7z', '7z'],
          questionText: 'What would you discard?',
          correctAnswers: ['2s', '9p'],
          explanation: 'There are four strong ryanmen blocks. It goes without saying that you should keep all of them. Since you are not going to call with this hand, it’s ok to discard either 🀑 or 🀡.'
        }
      },
      {
        id: 'c8-q2',
        type: 'question',
        question: {
          id: 'q8-2',
          hand: ['1m', '1m', '2m', '2m', '3m', '3m', '4s', '4s', '5s', '5s', '6z', '6z', '7z', '7z'],
          questionText: 'What would you discard?',
          correctAnswers: ['9p'],
          explanation: 'Remember this one? I hope you do!\n\nLast time I recommended using the 5-block method and discarding 🀓🀔 for the fastest tenpai. However, you can also use the 6-block method. Discard 🀡 to balance a regular hand and Chiitoitsu! That way you may get to ryanmen tenpai.'
        }
      },
      {
        id: 'c8-q3',
        type: 'question',
        question: {
          id: 'q8-3',
          hand: ['1m', '2m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s', '1z', '1z', '2z', '2z'],
          questionText: 'What would you discard?',
          correctAnswers: ['2s'],
          explanation: 'This hand can aim for Sanshoku/Ittsu. If you use the 5-block method and simply discard the weakest block, you are going to lose one of the potential Yaku.\n\nDiscarding 🀙🀚 loses Sanshoku. Discarding 🀠🀡 loses Ittsu.\n\nThanks to the 6-block method, there is a better discard to balance your potential Yaku.\n\nDiscard 🀑 to keep both Sanshoku and Ittsu!'
        }
      },
      {
        id: 'c8-q4',
        type: 'question',
        question: {
          id: 'q8-4',
          hand: ['1m', '2m', '4m', '5m', '7m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '7z', '7z'],
          questionText: 'What would you discard?',
          correctAnswers: ['1m', '2m', '4p'],
          explanation: 'The answer is… it depends!\n\nIf you’re aiming for Honitsu, you can use the 6-block method and discard 🀜.\n\nIf you need a quick hand, you should maximize efficiency (5-block method) and discard the weakest block – 🀇🀈.\n\n**KEY POINT:**\nIf you are aiming for the fastest tenpai, use the 5-block method and simply get rid of the weakest block. If you want your hand to be more flexible, use the 6-block method!'
        }
      }
    ]
  },
  {
    id: 'chapter-9',
    title: '9. Overlapping Ukeire',
    sections: [
      {
        id: 'c9-s1',
        type: 'text',
        content: `
### Overlapping Ukeire

You may already know to beware of overlapping ukeire, right?
Examples:
- **🀕🀖🀗🀘** – 🀖 overlaps
- **🀜🀝🀞🀟** – 🀞 overlaps
- **🀉🀊🀋🀌** – 🀉🀌 overlap

HOWEVER!
        `
      },
      {
        id: 'c9-q1',
        type: 'question',
        question: {
          id: 'q9-1',
          hand: ['8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s', '1z', '1z', '2z', '2z'],
          questionText: 'What would you discard?',
          correctAnswers: ['7m', '9m'],
          explanation: 'You should avoid the risk of Yaku-less tenpai. Despite the overlapping ukeire in Pinzu, you should discard 🀍🀏. 🀜🀟 will give you Ittsu tenpai!'
        }
      },
      {
        id: 'c9-q2',
        type: 'question',
        question: {
          id: 'q9-2',
          hand: ['6m', '7m', '8m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s', '6z', '6z'],
          questionText: 'What would you discard?',
          correctAnswers: ['2p', '3p'],
          explanation: 'Ask yourself the following question: Am I playing for speed or value?\n\nIf you’re aiming for value, 🀕🀖 has to stay because there’s a chance for 678 Sanshoku. Despite 🀚🀛 being more efficient to keep, you should discard it. That is because if you keep 🀚🀛 and draw 🀔, you’ll get yaku-less tenpai.\n\nAfter discarding 🀚🀛, drawing 🀔 won’t be bad at all. You have a three-sided wait with 🀗 giving you Sanshoku!\n\nIf you’re going for speed, you should keep 🀚🀛 and discard 🀒🀓 to eliminate the overlapping ukeire.\n\nIt’s important to always ask yourself the above question and make appropriate judgment.'
        }
      },
      {
        id: 'c9-q3',
        type: 'question',
        question: {
          id: 'q9-3',
          hand: ['8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s', '1z', '1z', '2z', '2z'],
          questionText: 'As you know, Pinfu is worth 1 Han and Ittsu is worth 2 Han. With that in mind, compare these examples. What would you discard?',
          correctAnswers: ['8m', '9m'],
          explanation: 'In the first hand you should discard 🀎🀏 to keep the chance for Ittsu.\n\nIt’s ok to give up Ittsu in the second example because you confirm Pinfu.\n\n**KEY POINT:**\nIf your hand can only score one Yaku, you should aim for that Yaku. If there are more options, you should settle for whichever is easier to get, keeping balance between speed and value. Securing ryanmen should be the priority.'
        }
      },
      {
        id: 'c9-q4',
        type: 'question',
        question: {
          id: 'q9-4',
          hand: ['4m', '5m', '6m', '7m', '8m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['7m', '8m'],
          explanation: 'If you discard 🀔🀕, there’s a big difference between your winning tiles:\n- 🀉 gives Tanyao, Pinfu and Sanshoku\n- 🀌 gives Tanyao and Pinfu\n- 🀏 gives only Pinfu\n\nIf you discard 🀍🀎, your winning options are more balanced. Even if you miss out on Sanshoku, you always get Tanyao and Pinfu!'
        }
      },
      {
        id: 'c9-q5',
        type: 'question',
        question: {
          id: 'q9-5',
          hand: ['1m', '2m', '3m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s', '7z', '7z'],
          questionText: 'What would you discard?',
          correctAnswers: ['4p', '5p'],
          explanation: 'Even though keeping 🀜🀝 is slightly more efficient (🀞 ukeire), in most situations you should aim for a higher score. Keeping 🀙🀚 confirms Chanta. Discard 🀜🀝!'
        }
      }
    ]
  }
];
