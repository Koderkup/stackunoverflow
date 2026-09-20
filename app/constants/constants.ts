export type LinesType = {
  text: string;
  delay: number;
};

export const LINES: Array<LinesType> = [
  { text: 'root@stackUnoverflow:~# ./start_portfolio.sh', delay: 10 },
  { text: '[✓] Authentication successful', delay: 10 },
  { text: '[✓] Loading Backend Engineer 2025 environment', delay: 10 },
  { text: "[✓] Opening Petr Kuzin's portfolio...", delay: 10 },
  { text: '', delay: 200 },
  { text: 'System ready. Access granted.', delay: 10 },
];
