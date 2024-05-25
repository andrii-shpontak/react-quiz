function getRandomDelay(minDelay: number, maxDelay: number): number {
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
}

export const requestDelay = getRandomDelay(500, 2000);
