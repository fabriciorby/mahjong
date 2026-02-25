export type TileStr = string;

export interface Question {
  id: string;
  hand: TileStr[];
  questionText: string;
  correctAnswers: TileStr[];
  explanation: string;
}

export interface Section {
  id: string;
  type: 'text' | 'question';
  title?: string;
  content?: string;
  question?: Question;
}

export interface Chapter {
  id: string;
  title: string;
  sections: Section[];
}
