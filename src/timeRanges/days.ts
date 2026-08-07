export const GIORNI = [
  "Lunedi",
  "Martedi",
  "Mercoledi",
  "Giovedi",
  "Venerdi",
  "Sabato",
  "Domenica",
] as const;

export function getTodayIndex(): number {
  const oggi = new Date().getDay();
  return oggi === 0 ? 6 : oggi - 1;
}
