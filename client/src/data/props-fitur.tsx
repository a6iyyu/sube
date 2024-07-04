interface InitPropsFitur {
  id: string;
  gambar: string;
  judul: string;
  deskripsi: string;
}

export const PropsFitur: InitPropsFitur[] = [
  {
    id: "1",
    gambar: "/test.png?url",
    judul: "Tes Pemahaman",
    deskripsi: "Uji pemahaman konsep dengan latihan soal ganda.",
  },
  {
    id: "2",
    gambar: "/source.png?url",
    judul: "Materi Bacaan",
    deskripsi: "Penjelasan yang mendalam dan mudah dicerna.",
  },
  {
    id: "3",
    gambar: "/progress.png?url",
    judul: "Pantau Kemajuan Anda",
    deskripsi: "Lihat kemajuan dan progres pembelajaran Anda.",
  },
  {
    id: "4",
    gambar: "/clock.png?url",
    judul: "Fleksibel",
    deskripsi: "Nikmati kursus kapanpun dan dimanapun berada."
  }
];