type FasciaOraria = {
  tipoPasto: string;
  inizioMinuti: number;
  fineMinuti: number;
};

const FASCE_ORARIE: FasciaOraria[] = [
  { tipoPasto: "COLAZIONE", inizioMinuti: 6 * 60, fineMinuti: 10 * 60 + 30 },
  { tipoPasto: "SPUNTINO", inizioMinuti: 10 * 60 + 30, fineMinuti: 11 * 60 },
  { tipoPasto: "PRANZO", inizioMinuti: 11 * 60, fineMinuti: 15 * 60 },
  {
    tipoPasto: "SPUNTINO POMERIDIANO",
    inizioMinuti: 15 * 60,
    fineMinuti: 18 * 60,
  },
  { tipoPasto: "CENA", inizioMinuti: 18 * 60, fineMinuti: 22 * 60 },
  {
    tipoPasto: "SPUNTINO POST CENA",
    inizioMinuti: 22 * 60,
    fineMinuti: 24 * 60,
  },
];

export function getMealTypeCorrente(): string {
  const ora = new Date();
  const minutiDaMezzanotte = ora.getHours() * 60 + ora.getMinutes();

  const fascia = FASCE_ORARIE.find(
    (f) =>
      minutiDaMezzanotte >= f.inizioMinuti && minutiDaMezzanotte < f.fineMinuti,
  );

  return fascia?.tipoPasto ?? "COLAZIONE";
}
