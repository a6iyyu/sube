export const MemendekkanKalimat = (text: string, max_length: number): string => {
  if (text.length > max_length) return text.slice(0, max_length) + ". . .";
  return text;
};