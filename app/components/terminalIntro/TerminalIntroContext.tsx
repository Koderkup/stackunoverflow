import { createContext, useContext } from 'react';
import { LinesType } from '@/app/constants/constants';

type TerminalIntroContextType = {
  text: string;
  done: boolean;
  LINES: Array<LinesType>;
  displayed: Array<string>;
  currentLine: number;
} | null;

export const TerminalIntroContext =
  createContext<TerminalIntroContextType>(null);

export function useTerminalIntro() {
  const ctx = useContext(TerminalIntroContext);
  if (!ctx) throw Error('Use with TerminalIntro');
  return ctx;
}
