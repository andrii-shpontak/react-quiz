export function getElapsedTime(startTime: Date, endTime: Date): string {
  const elapsedTimeInSeconds = startTime && endTime ? (endTime.getTime() - startTime.getTime()) / 1000 : 0;
  const elapsedMinutes = Math.floor(elapsedTimeInSeconds / 60);
  const elapsedSeconds = Math.floor(elapsedTimeInSeconds % 60);
  return `${elapsedMinutes}:${elapsedSeconds < 10 ? '0' + elapsedSeconds : elapsedSeconds}`;
}
