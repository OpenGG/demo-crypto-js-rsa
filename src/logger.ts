const logger = document.getElementById('logger')!;

const logFactory =
  (level: string) =>
  (...args: any[]) => {
    const p = document.createElement('p');
    p.textContent = `[${level}] ${args.join(' ')}`;
    logger.appendChild(p);
  };

export const log = logFactory('log');

export const error = logFactory('error');
