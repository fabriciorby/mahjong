import { Chapter } from '../types';
import { chapter1to4 } from './chapter1to4';
import { chapter5to9 } from './chapter5to9';
import { chapter10to14 } from './chapter10to14';

export const courseData: Chapter[] = [
  ...chapter1to4,
  ...chapter5to9,
  ...chapter10to14
];
