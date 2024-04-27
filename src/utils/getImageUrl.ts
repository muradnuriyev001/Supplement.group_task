export const getImageURL = (name: string) => {
  return new URL(`../assets/GameCovers/${name}`, import.meta.url).href;
};
