'use client';
import TerminalIntro from './components/terminalIntro/TerminalIntro';
import Whoami from './components/whoami/Whoami';
import { useGlobalStorage } from './store/GlobalStorageContext';

export default function Home() {
  const { state } = useGlobalStorage();
  const { done } = state;
  return (
    <main className='flex flex-1 flex-col items-center justify-center gap-2 px-8'>
      <h1 className='neon-text text-4xl font-bold tracking-widest uppercase'>
        System Ready
      </h1>
      <p className='text-lg tracking-wide opacity-80'>
        Welcome to the terminal. Awaiting Loading ...
      </p>
      <TerminalIntro />
      <Whoami visible={done} />
    </main>
  );
}
