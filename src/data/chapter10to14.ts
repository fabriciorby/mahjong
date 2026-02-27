import { Chapter } from '../types';

export const chapter10to14: Chapter[] = [
  {
    id: 'chapter-10',
    title: '10. Fixing the Pair',
    sections: [
      {
        id: 'c10-s1',
        type: 'text',
        content: `
### Fixing the Pair

First off, I’d like to introduce a new term: tenpai potential. Tenpai potential stands for all your possible tenpai waits and the number of winning tiles. For example:

**🀉🀊🀍🀎🀏🀙🀚🀛🀜🀝🀕🀖🀗**

Tenpai potential of this hand is:
- 🀈🀋🀐🀓 – those tiles give a bad tanki wait
- 🀉🀊🀑🀒 – these tiles fix a ryanmen wait
        `
      },
      {
        id: 'c10-q1',
        type: 'question',
        question: {
          id: 'q10-1',
          hand: ['3m', '4m', '7m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['9s'],
          explanation: 'The crux of this question is whether to keep both ryanmen or ryanmen + yonrenkei. In this case you should discard 🀘.\n\nAs I explained earlier, good tenpai is not guaranteed but it’s ok.\n\nYou should only keep yonrenkei when there is a bad shape in your hand (kanchan or penchan).'
        }
      },
      {
        id: 'c10-q2',
        type: 'question',
        question: {
          id: 'q10-2',
          hand: ['3m', '4m', '7m', '7m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['8m', '9m'],
          explanation: 'You can either fix the set 🀍🀎🀏 or fix the pair of 🀍. Which one is better?\n\nIf you discard 🀍, your tenpai ukeire is: 🀉🀐🀓. Only 🀉 gives good tenpai.\n\nIf you fix the pair (discard 🀎🀏), you have fewer effective tiles for tenpai but ryanmen wait is guaranteed! This is much better.\n\nWhen you have ryanmen-ryanmen iishanten, you should break a set to fix the pair!\n\nDiscarding 🀍 may not be horrible but fixing the pair has become a standard strategy in modern Mahjong.'
        }
      },
      {
        id: 'c10-q3',
        type: 'question',
        question: {
          id: 'q10-3',
          hand: ['3m', '4m', '7m', '7m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'Assume you have ankou (triplet) instead of a sequence. What would you discard?',
          correctAnswers: ['7m'],
          explanation: 'When you have iishanten with ankou, you should not fix the pair.\n\nTo illustrate, let’s discard 🀎🀏 to fix the pair in manzu. You get tenpai with 🀈🀋🀐🀓.\n\nNot bad, but let’s discard 🀍 to fix the set in Manzu. You get tenpai with 🀈🀉🀊🀋🀐🀑🀒🀓. Much better, isn’t it?\n\nThis is called headless ankou iishanten. It’s very flexible. The ankou can either serve as a set or as a pair. When any of the ryanmen completes, you discard one of the ankou tiles for ryanmen tenpai.'
        }
      },
      {
        id: 'c10-q4',
        type: 'question',
        question: {
          id: 'q10-4',
          hand: ['2m', '4m', '7m', '7m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['7m'],
          explanation: 'There is one bad shape – 🀈🀊. If you fix the pair in manzu, your tenpai ukeire is: 🀉🀐🀓. Only 🀉 gives good tenpai.\n\nWhat if you fix the set in manzu? Your tenpai ukeire is 🀈🀉🀊🀐🀑🀒🀓. 🀈🀊 give good tenpai. That’s better!\n\n**You should only fix the pair when you have ryanmen-ryanmen iishaten!**'
        }
      },
      {
        id: 'c10-q5',
        type: 'question',
        question: {
          id: 'q10-5',
          hand: ['2m', '3m', '3m', '4m', '7m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['3m'],
          explanation: 'There are two bad shapes so normally you wouldn’t fix the pair, but in this case you are aiming for Sanshoku 789 so you should fix the pair of 🀉!'
        }
      },
      {
        id: 'c10-q6',
        type: 'question',
        question: {
          id: 'q10-6',
          hand: ['7m', '7m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['7m'],
          explanation: 'Perhaps you are tempted to fix the pair in manzu since it seems like ryanmen-ryanmen iishanten… Think again!\n\nIt’s better to fix the pair in pinzu. Take a closer look at the complex pinzu shape. This is a 5-tile combination of aryanmen and nobetan. It can give you a set + a pair with 2356. It can also give you two sets with 47.\n\nMake sure to memorize this powerful shape!'
        }
      },
      {
        id: 'c10-q7',
        type: 'question',
        question: {
          id: 'q10-7',
          hand: ['7m', '7m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['7m'],
          explanation: 'Again, pay close attention to the shape in pinzu. It does contain ryanmen but it’s also a 5-tile nobetan combination.\n\nThere are numerous ways to create a pair: 🀙🀚🀜🀝. If you draw 🀑🀔 first, you’ll have nobetan tenpai which is pretty good.\n\nDiscard 🀍 and fix the set in manzu!'
        }
      },
      {
        id: 'c10-q8',
        type: 'question',
        question: {
          id: 'q10-8',
          hand: ['7m', '7m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['7m'],
          explanation: 'Let’s break down the shape in pinzu. It can make a pair + set with 🀚🀜🀝. If you draw 🀑🀔 first, you leave pinzu as aryanmen.\n\nDiscard 🀍 to fix the set in manzu!\n\nThere’s an exception: if you need more value with Iipeiko, it’s ok to fix the pair in manzu.\n\n**KEY POINT:**\nDeciding whether to fix a pair or a set in iishanten isn’t a particularly complex issue. Just remember that you should fix a set in three cases:\n- Ankou iishanten\n- Good shape + bad shape iishanten\n- Iishanten with a strong 5-tile combination.'
        }
      }
    ]
  },
  {
    id: 'chapter-11',
    title: '11. Building a Good Shape',
    sections: [
      {
        id: 'c11-s1',
        type: 'text',
        content: `
### Building a Good Shape

There are four-tile shapes which can serve as springboards towards strong five-tile combinations. You may be familiar with them if you’ve read Riichi Book 1. One of them is nakabukure. It consists of a set with a pair in the middle: 

**🀊🀋🀋🀌**

You should be aware of the ways these blocks evolve into strong 5-block combinations:
- **🀉🀊🀋🀋🀌**
- **🀊🀋🀋🀌🀍**
- **🀊🀊🀋🀋🀌**
- **🀊🀋🀋🀌🀌**

Nakabukure in different positions are valued differently:
- **🀇🀈🀈🀉**
- Drawing 🀊 creates penchan: **🀇🀈🀈🀉🀊**

Nakabukure hierarchy:
3-7 nakabukure > 28 nakabukure > 19 nakabukure

The other important 4-tile combination is yonrenkei. It consists of four consecutive tiles, for example: 

**🀒🀓🀔🀕**

Possible developments into 5-tile combinations:

- sanmenchan (3-sided wait)
  **🀑🀒🀓🀔🀕** or **🀒🀓🀔🀕🀖**

- aryanmen + nobetan (depends on the rest of the hand)
  **🀒🀓🀓🀔🀕** or **🀒🀓🀔🀔🀕**
        `
      },
      {
        id: 'c11-q1',
        type: 'question',
        question: {
          id: 'q11-1',
          hand: ['2m', '4m', '7m', '8m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['2p'],
          explanation: 'There are two four-block combinations. Nakabukure in souzu is stronger than the one in pinzu because it contains flexible middle tiles. It’s more likely that you’ll make two strong blocks in souzu. Discard 🀚!'
        }
      },
      {
        id: 'c11-q2',
        type: 'question',
        question: {
          id: 'q11-2',
          hand: ['4m', '5m', '6m', '7m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['9p'],
          explanation: 'There are three four-tile combinations to discard from. The weakest form is the terminal yonrenkei in pinzu. Discard 🀡!\n\n**KEY POINTS:**\n- Four-tile combinations are very useful for creating strong hand shapes.\n- Middle four-tile combinations are more flexible than those containing 2’s, 8’s and terminals.'
        }
      }
    ]
  },
  {
    id: 'chapter-12',
    title: '12. Iishanten Types',
    sections: [
      {
        id: 'c12-s1',
        type: 'text',
        content: `
### Iishanten Types

There are three main types of iishanten:

1. **Confirmed pair iishanten**
**🀉🀊🀋🀌🀍🀎🀙🀚🀛🀓🀔🀀🀀**
Tenpai ukeire is moderate.

2. **Pairless iishanten**
**🀈🀉🀊🀊🀙🀚🀛🀔🀕🀖🀀🀁**
This iishanten includes five-block combinations. Tenpai ukeire is wide.

3. **Kuttsuki iishanten**
**🀇🀈🀉🀋🀌🀍🀜🀟🀟🀐🀑🀒🀔**
This iishanten includes two floating tiles two form the final block with. Tenpai ukeire is super wide.

Kuttsuki iishanten is super wide!
There are other types of iishanten but they are going to be discussed in the next chapter.
        `
      },
      {
        id: 'c12-q1',
        type: 'question',
        question: {
          id: 'q12-1',
          hand: ['1m', '2m', '3m', '5m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['2p'],
          explanation: 'Comparing floating tiles isn’t difficult if you remember the general principles of tile usefulness. You have to decide between 5, 3 and 2. Tiles 3-7 are more versatile than 2. Discard 🀚!'
        }
      },
      {
        id: 'c12-q2',
        type: 'question',
        question: {
          id: 'q12-2',
          hand: ['4m', '5m', '5m', '6m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['3p'],
          explanation: 'If you recall the two previous chapters, you’ll quickly notice two strong four-tile blocks: nakabukure in manzu and yonrenkei in pinzu. These shapes are particularly strong when you have kuttsuki iishanten because they’re very likely to produce ryanmen tenpai (or better). Discard 🀛!'
        }
      },
      {
        id: 'c12-q3',
        type: 'question',
        question: {
          id: 'q12-3',
          hand: ['1m', '4m', '5m', '6m', '7m', '8m', '9m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['4p'],
          explanation: 'It’s not always about pure efficiency. 🀇 is by far the least versatile floating tile. You may be quick to discard it. Before you do so, notice that it allows you to get Ittsu. Drawing either 2 or 🀉 gives Ittsu iishanten!\n\nMake sure not to miss such opportunities, especially when you don’t have any doras.\n\nOk, so should it be 4 or 7? They are somewhat similar, right?\n\nConsider once more your potential Yaku(s). With this hand you may aim not just for Ittsu. You can also hope to get Sanshoku 789!\n\nThat’s why the final answer to this question is 🀜. If you only need speed, you should follow pure tile efficiency.\n\n**KEY POINTS:**\n- Kuttsuki iishanten is the best iishanten (widest ukeire).\n- Floating tiles 3-7 are the most flexible for kuttsuki iishanten.\n- Yonrenkei and nakabukure are stronger than floating tiles.\n- You may want to deviate from pure tile effieciency to aim for extra Yaku.'
        }
      }
    ]
  },
  {
    id: 'chapter-13',
    title: '13. More Iishanten Types',
    sections: [
      {
        id: 'c13-s1',
        type: 'text',
        content: `
### More Iishanten Types

Non-standard iishanten include:

**Kokushimusou iishanten**
**🀇🀏🀙🀡🀐🀘🀀🀁🀂🀃🀆🀅🀄︎**

**Chiitoitsu iishanten**
**🀈🀈🀋🀋🀍🀍🀎🀎🀜🀜🀝🀝🀠🀡**

Let's do more iishanten exercises!
        `
      },
      {
        id: 'c13-q1',
        type: 'question',
        question: {
          id: 'q13-1',
          hand: ['4m', '5m', '6m', '7m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['3s'],
          explanation: 'You may be tempted to keep the floating tile by fixing the pair in souzu.\n\nWith one floating tile, good tenpai isn’t guaranteed. 🀉🀋🀌🀎 and 🀑🀓 result in ryanmen. Let’s say you draw 🀐 instead…\n\nIs there a better solution then? Of course!\n\nTry discarding 🀒: Now your tenpai potential is better. 🀉🀊🀋🀌🀍🀎 and 🀖 give ryanmen tenpai.\n\nYonrenkei combined with a ryanmen + pair block ensure a strong tenpai.'
        }
      },
      {
        id: 'c13-q2',
        type: 'question',
        question: {
          id: 'q13-2',
          hand: ['3m', '3m', '4m', '5m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['4p'],
          explanation: 'You may want to fix the pair in pinzu by discarding 🀜. With the last example in mind, you’ll know it’s not optimal if you want to maximize your tenpai potential…\n\nDiscard the floating tile to keep the best chances for ryanmen tenpai.\n\nThere’s aryanmen in manzu and a combined ryanmen in pinzu. Tenpai potential is super high!'
        }
      },
      {
        id: 'c13-q3',
        type: 'question',
        question: {
          id: 'q13-3',
          hand: ['1m', '2m', '3m', '5m', '6m', '6m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['5m', '4p', '7p', '4s', '7s', '6m'],
          explanation: 'This example is a grey area. A trade-off between tenpai potential and value (Sanshoku). Compare all discard candidates:\n\n- **🀋**: Kuttsuki iishanten. It gives widest tenpai ukeire but Sanshoku is impossible.\n- **🀜🀟 or 🀓🀖**: Combined ryanmen + yonrenkei. Good tenpai potential and decent Sanshoku potential.\n- **🀌**: Headless iishanten. Weakest tenpai potential but the best chance for Sanshoku.\n\nDecisions may vary among high level players. The correct answer may depend on situational factors such as tile availability, scores etc.\n\n**KEY POINTS:**\n- If you want to maximize the chance for ryanmen tenpai, be on the lookout for iishanten consisting of combined shapes such as yonrenkei + combined ryanmen or aryanmen + combined ryanmen.\n- If you’re after a specific Yaku, you usually have to sacrifice some efficiency. Judge wisely and don’t overdo it!'
        }
      }
    ]
  },
  {
    id: 'chapter-14',
    title: '14. Ryanmen-Kanchan Crossovers',
    sections: [
      {
        id: 'c14-s1',
        type: 'text',
        content: `
### Ryanmen-Kanchan Crossovers

Have you ever heard of “hidden ryankan”?

**🀑🀓🀔🀕🀕🀖**

This is a ryanmen-kanchan crossover. It's a six-tile shape that can be seen as a combination of ryanmen and kanchan.
        `
      },
      {
        id: 'c14-q1',
        type: 'question',
        question: {
          id: 'q14-1',
          hand: ['6m', '7m', '8m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['8s'],
          explanation: 'It may seem like there’s no difference between discarding 🀐 and 🀗 because you get ryanmen-ryanmen iishanten after either. Think again!\n\n🀐 discard: Tenpai ukeire: 🀓🀖, 🀛🀞.\n🀗 discard: Tenpai ukeire: 🀑🀓🀖, 🀛🀞\n\nDiscarding 🀗 is more efficient!\n\nThe shape in souzu is sometimes refered to as “a hidden ryankan” because it’s easily overlooked. That’s a ryanmen-kanchan crossover.'
        }
      },
      {
        id: 'c14-s2',
        type: 'text',
        content: `
There are several ryanmen-kanchan variations:

| COMBINATION | WAIT |
| :--- | :--- |
| **🀇🀉🀊🀋🀋🀌** | **🀈🀊🀍** |
| **🀈🀊🀋🀌🀌🀍** | **🀉🀋🀎** |
| **🀉🀋🀌🀍🀍🀎** | **🀊🀌🀏** |
| **🀈🀉🀉🀊🀋🀍** | **🀇🀊🀌** |
| **🀉🀊🀊🀋🀌🀎** | **🀈🀋🀍** |
| **🀊🀋🀋🀌🀍🀏** | **🀉🀌🀎** |

All of them consist of six tiles. Let me give you a tip on how to memorize these combinations:

**Floating tile and ryanmen ukeire always follow suji sequences.**

Examples:

a) **🀑 🀜🀝🀞🀞🀟**
Floating tile: 2
Ryanmen ukeire: 58
2-58 (suji sequence)

b) **🀜🀝🀞🀞🀟 🀘**
Ryanmen ukeire: 36
Floating tile: 9
3-69 (suji sequence)

c) **🀙 🀜🀝🀞🀞🀟**
Floating tile: 1
Ryanmen ukeire: 47
1-47 (suji sequence)

Time to put this knowledge to practice!
        `
      },
      {
        id: 'c14-q2',
        type: 'question',
        question: {
          id: 'q14-2',
          hand: ['1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['1p'],
          explanation: 'To an untrained eye both 🀙 and 🀏 seem equally efficient. They’re just pairs, right?\n\nOf course not!\n\nNow you know that 🀙 is part of the ryanmen-kanchan crossover and allows you to use 🀚. You should fix the 🀏 pair.\n\nDiscard 🀙!'
        }
      },
      {
        id: 'c14-q3',
        type: 'question',
        question: {
          id: 'q14-3',
          hand: ['2m', '3m', '3m', '4m', '5m', '7m', '8m', '1p', '2p', '3p', '4s', '4s', '5s', '5s'],
          questionText: 'What would you discard?',
          correctAnswers: ['8m'],
          explanation: 'On the surface it looks like dropping either manzu ryanmen is equally efficient. We know it’s not!\n\n🀈 discard: Tenpai ukeire: 🀌🀏, 🀛🀞\n🀎 discard: Tenpai ukeire: 🀇🀊🀌, 🀛🀞\n\nDiscard 🀎 to keep the ryanmen-kanchan crossover.'
        }
      },
      {
        id: 'c14-q4',
        type: 'question',
        question: {
          id: 'q14-4',
          hand: ['1m', '2m', '3m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['3s'],
          explanation: 'Here’s where the fun begins! The options are:\n\n🀒: Perfect iishanten. Tenpai ukeire: 🀕🀗🀘, 🀜🀞🀡. There’s a catch, though! If you complete shanpon first, you’ll have Yaku-less tenpai. Best scenario is drawing 🀕: Pinfu-Iipeiko tenpai.\n\nLet’s consider 🀗 discard: Tenpai ukeire: 🀓🀕🀘, 🀜🀞🀡. Every tile except 🀜 gives you Pinfu tenpai.\n\nWhich option is better? Expert opinions on this matter vary.'
        }
      },
      {
        id: 'c14-q5',
        type: 'question',
        question: {
          id: 'q14-5',
          hand: ['3m', '4m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s', '7z', '7z'],
          questionText: 'What would you discard?',
          correctAnswers: ['9s'],
          explanation: 'You want to call chun. What should you discard with that in mind? The choice is between 🀓 and 🀘. 🀓 keeps the 6-tile the crossover, 🀘 gives perfect iishanten.\n\nDiscard 🀘!\n\nNow you can pon chun for tenpai. It’s not possible if you drop 🀓 because chun becomes the only pair candidate.'
        }
      },
      {
        id: 'c14-q6',
        type: 'question',
        question: {
          id: 'q14-6',
          hand: ['3m', '4m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['9s'],
          explanation: 'Another choice between a 6-tile crossover and perfect iishanten.\n\nDiscard 🀘 to keep the perfect iishanten!\n\nPinfu isn’t guaranteed but Tanyao is secured and you get Iipeiko with 🀕. On top of that, you can call if need be.\n\nKeeping the crossover is less flexible: Pinfu is guaranteed but there’s a risk of losing Tanyao and Iipeiko is dead.'
        }
      },
      {
        id: 'c14-q7',
        type: 'question',
        question: {
          id: 'q14-7',
          hand: ['1m', '2m', '3m', '1p', '2p', '3p', '4s', '4s', '5s', '5s', '8s', '8s', '9s', '9s'],
          questionText: 'What would you discard?',
          correctAnswers: ['6s'],
          explanation: 'This time choosing the crossover is better. Discard 🀕!\n\nWhy? You can aim for Sanshoku 123. Pinfu is guaranteed.\n\nCompare that to choosing perfect iishanten: You lose Sanshoku. Neither Pinfu nor Iipeiko is guaranteed.\n\n**KEY POINTS:**\n- Learn to recognize six-tile ryanmen-kanchan crossovers.\n- Learn to choose properly between crossover iishanten and perfect iishanten.'
        }
      }
    ]
  }
];
