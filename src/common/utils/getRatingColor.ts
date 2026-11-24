export type Color = 'red' | 'yellow' | 'green';

export const getRatingColor = (rating: number): Color => {
  if (rating <= 4) return 'red';
  else if (rating <= 7) return 'yellow';
  else return 'green';
};
