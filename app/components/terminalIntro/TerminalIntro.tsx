'use client';
import { useEffect, useState } from 'react';
import { useKeyboardSound } from '../../lib/useKeyboardSound';
import { LINES } from '../../constants/constants';
import TerminalHead from './TerminalHead';
import TerminalBody from './TerminalBody';

export default function TerminalIntro() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);
  const { start, stop } = useKeyboardSound();

  // Start sound when typing begins, stop when done
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
          setDone(true);
        } else {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar]);

  return (
    <div className='w-full bg-black flex flex-col items-center justify-center p-4 scan-lines'>
      <div className='w-full max-w-4xl'>
        {/* Шапка терминала */}
        <TerminalHead text={'stackunoverflow-terminal'} />

        {/* Тело терминала */}
        <TerminalBody
          done={done}
          lines={LINES}
          currentLine={currentLine}
          displayed={displayed}
        ></TerminalBody>
      </div>
    </div>
  );
}
