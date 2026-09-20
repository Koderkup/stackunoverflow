import { Terminal } from 'lucide-react';
import { useTerminalIntro } from './TerminalIntroContext';



const TerminalHead = () => {

  const { text } = useTerminalIntro();
  return (
    <div className='bg-gray-900 border border-green-500/30 rounded-t-lg p-3 flex items-center gap-2'>
      <div className='flex gap-2'>
        <div className='w-3 h-3 rounded-full bg-red-500' />
        <div className='w-3 h-3 rounded-full bg-yellow-500' />
        <div className='w-3 h-3 rounded-full bg-green-500' />
      </div>
      <div className='flex items-center gap-2 ml-4'>
        <Terminal className={`w-4 h-4 text-green-400`} />
        <span className='text-green-400 text-sm font-mono'>{text}</span>
      </div>
    </div>
  );
};

export default TerminalHead;
