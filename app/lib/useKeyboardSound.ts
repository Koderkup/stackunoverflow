'use client';
import { useCallback, useRef, useEffect } from 'react';

export function useKeyboardSound() {
  const ctxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const loadingRef = useRef<Promise<AudioBuffer | null> | null>(null);

  const stop = () => {
    if (sourceRef.current) {
      sourceRef.current.stop();
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (gainRef.current) {
      gainRef.current.disconnect();
      gainRef.current = null;
    }
  };

  const loadBuffer = useCallback(async () => {
    if (typeof window === 'undefined') return null;
    if (bufferRef.current) return bufferRef.current;
    if (loadingRef.current) return loadingRef.current;

    if (!ctxRef.current) {
      ctxRef.current = new (
        window.AudioContext || (window as typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      )();
    }

    loadingRef.current = fetch('/sounds/keyboard-click.mp3')
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => ctxRef.current!.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        bufferRef.current = audioBuffer;
        return audioBuffer;
      })
      .catch((err) => {
        console.warn('Failed to load keyboard sound:', err);
        return null;
      });

    return loadingRef.current;
  }, []);

  useEffect(() => {
    loadBuffer();
    return () => {
      stop();
      if (ctxRef.current) {
        ctxRef.current.close();
        ctxRef.current = null;
      }
    };
  }, [loadBuffer]);

  const ensureContext = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new (
        window.AudioContext || (window as typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      )();
    }
    return ctxRef.current;
  }, []);

  const start = useCallback(async () => {
    const ctx = ensureContext();
    if (ctx.state === 'suspended') await ctx.resume();
    if (!bufferRef.current) await loadBuffer();
    if (!bufferRef.current) return;

    // Always create fresh gain node for current context (avoids cross-context error)
    const gain = ctx.createGain();
    gain.gain.value = 0.3;
    gain.connect(ctx.destination);

    // Create and start looping source
    const source = ctx.createBufferSource();
    source.buffer = bufferRef.current;
    source.loop = true;
    source.connect(gain);
    source.start(0);
    sourceRef.current = source;
    gainRef.current = gain;
  }, [ensureContext, loadBuffer]);

  return { start, stop };
}
