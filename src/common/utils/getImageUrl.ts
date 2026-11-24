// src/common/utils/getImageUrl.ts
type ImageSize = 'w200' | 'w500' | 'original';

const BASE_URL = 'https://image.tmdb.org/t/p/';

export const getImageUrl = (path: string | null, size: ImageSize = 'w500'): string | null => {
  if (path === null) return null;
  return `${BASE_URL}${size}${path}`;
};
