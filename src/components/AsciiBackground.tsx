import React, { useEffect, useRef, useState, useCallback } from 'react';

const ASCII_CHARS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '[',
  ']',
  '{',
  '}',
  '|',
  '\\',
  ':',
  ';',
  '"',
  "'",
  '<',
  '>',
  ',',
  '.',
  '/',
  '?',
  '`',
  '~',
];

interface AsciiBackgroundProps {
  children: React.ReactNode;
}

const AsciiBackground: React.FC<AsciiBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Função para obter um caractere ASCII aleatório
  const getRandomChar = useCallback(() => {
    return ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const updateDimensions = () => {
      if (!canvasRef.current) return;
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const rows = Math.floor(canvas.height / fontSize);

    const drops: number[] = Array(columns)
      .fill(0)
      .map(() => {
        if (Math.random() < 0.9) {
          return Math.floor(Math.random() * (rows / 2));
        }
        return 0;
      });
    const matrix: string[][] = Array(rows)
      .fill(0)
      .map(() => Array(columns).fill(' '));

    // Preencher a matriz inicialmente com alguns caracteres
    for (let col = 0; col < columns; col++) {
      const initialMaxRow = drops[col];
      for (let row = 0; row < initialMaxRow; row++) {
        if (Math.random() < 0.9) {
          matrix[row][col] = getRandomChar();
        }
      }
    }
    const updateMatrix = () => {
      for (let col = 0; col < columns; col++) {
        if (Math.random() > 0.96) {
          const row = Math.floor(drops[col]);

          if (row < rows) {
            matrix[row][col] = getRandomChar();
          }

          drops[col] += Math.random() * 2;

          if (drops[col] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[col] = 0;
          }
        }
      }

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          if (matrix[row][col] !== ' ') {
            const x = col * fontSize;
            const y = row * fontSize;

            const alpha = (1 - row / rows) * 0.8 + 0.2;
            ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;

            ctx.fillText(matrix[row][col], x, y);

            if (Math.random() > 0.99) {
              matrix[row][col] = getRandomChar();
            }

            if (Math.random() > 0.996) {
              matrix[row][col] = ' ';
            }
          }
        }
      }
    };

    const animationId = setInterval(updateMatrix, 50);
    return () => {
      clearInterval(animationId);
    };
  }, [dimensions, getRandomChar]);

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black'>
      <canvas ref={canvasRef} className='absolute top-0 left-0 w-full h-full z-0' />
      <div className='relative z-10 h-full'>{children}</div>
    </div>
  );
};

export default AsciiBackground;
