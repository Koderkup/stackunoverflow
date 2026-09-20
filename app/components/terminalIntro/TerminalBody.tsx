import { LinesType } from '@/app/constants/constants';
import { ChevronRight } from 'lucide-react';
import router from 'next/router';
import React from 'react';

type terminalBodyProps = {
  children?: React.ReactNode;
  done: boolean;
  lines: Array<LinesType>;
  displayed: string[];
  currentLine: number;
};

const TerminalBody = ({
  children,
  done,
  lines,
  displayed,
  currentLine,
}: terminalBodyProps) => {
  return (
    <div className='bg-black border-x border-b border-green-500/30 rounded-b-lg p-6 min-h-100 font-mono'>
      {lines.map((_, i) => (
        <div key={i} className='mb-2'>
          <span className='text-green-400'>{displayed[i] || ''}</span>
          {i === currentLine && !done && (
            <span className='terminal-cursor text-green-400'>_</span>
          )}
        </div>
      ))}

      {done && (
        <>
          <span>root@stackUnoverflow:</span>
          <span className='terminal-cursor'>_</span>
          <div className='mt-8'>
            <button
              onClick={() => router.push('/dashboard')}
              className='inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium h-10 bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105 hover:neon-glow font-mono text-lg px-8 py-3'
            >
              Access Dashboard
              <ChevronRight className='ml-2 w-5 h-5' />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TerminalBody;
