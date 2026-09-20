'use client';
import { useEffect, useState } from 'react';
import { useKeyboardSound } from '../../lib/useKeyboardSound';
import { LINES } from '../../constants/constants';
import TerminalHead from './TerminalHead';
import TerminalBody from './TerminalBody';
import { TerminalIntroContext } from './TerminalIntroContext';
import { useGlobalStorage } from '@/app/store/GlobalStorageContext';

type TerminalIntroProps = { value?: 0 };
type TerminalIntroComponent = React.FC<TerminalIntroProps> & {
  TerminalHead: typeof TerminalHead;
  TerminalBody: typeof TerminalBody;
};

const TerminalIntro: TerminalIntroComponent = () => {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const { state, dispatch } = useGlobalStorage();
  const { done } = state;
  const { start, stop } = useKeyboardSound();
  const text = 'stackunoverflow-terminal';

  useEffect(() => {
    if (!done && currentLine === 0 && currentChar === 0) {
      start();
    }
    if (done) {
      stop();
    }
  }, [done, currentLine, currentChar, start, stop]);

  useEffect(() => {
    if (currentLine >= LINES.length) {
      return;
    }

    const line = LINES[currentLine];

    if (currentChar < line.text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => {
          const copy = [...prev];
          copy[currentLine] =
            (copy[currentLine] || '') + line.text[currentChar];
          return copy;
        });
        setCurrentChar((c) => c + 1);
      }, line.delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (currentLine === LINES.length - 1) {
          dispatch({ type: 'SET_DONE', payload: true });
        } else {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [dispatch, currentLine, currentChar]);

  return (
    <TerminalIntroContext.Provider
      value={{ text, done, LINES, currentLine, displayed }}
    >
      <div className='w-full bg-black flex flex-col items-center justify-center p-4 scan-lines'>
        <div className='w-full max-w-4xl'>
          <TerminalIntro.TerminalHead />
          <TerminalIntro.TerminalBody />
        </div>
      </div>
    </TerminalIntroContext.Provider>
  );
};

TerminalIntro.TerminalHead = TerminalHead;
TerminalIntro.TerminalBody = TerminalBody;
export default TerminalIntro;
