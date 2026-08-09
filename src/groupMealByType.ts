type RigaPiano = {
  tipo_pasto: string;
  [key: string]: unknown;
};

export function groupMealsByType<T extends RigaPiano>(
  righe: T[],
): Map<string, T[]> {
  const gruppi = new Map<string, T[]>();
  for (const riga of righe) {
    const lista = gruppi.get(riga.tipo_pasto) ?? [];
    lista.push(riga);
    gruppi.set(riga.tipo_pasto, lista);
  }
  return gruppi;
}
