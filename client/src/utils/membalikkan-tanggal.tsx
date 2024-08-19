export const MembalikkanTanggal = (tanggal: string): string => {
  const format = new Date(tanggal);
  const hari = String(format.getUTCDate()).padStart(2, "0");
  const bulan = String(format.getUTCMonth()).padStart(2, "0");
  const tahun = format.getUTCFullYear();
  
  return `${hari}-${bulan}-${tahun}`;
};