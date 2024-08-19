interface InitModulPembelajaran {
  id: string;
  judul: string;
  gambar: string;
  deskripsi: string;
}

export const ModulPembelajaran: InitModulPembelajaran[] = [
  {
    id: "1",
    judul: "Manajemen Organisasi",
    gambar: "/management-organization.jpg?url",
    deskripsi: "Pelajari dasar-dasar dan praktik terbaik dalam manajemen organisasi modern, termasuk struktur organisasi, budaya kerja, dan manajemen perubahan untuk memastikan operasi bisnis yang efisien dan efektif."
  },
  {
    id: "2",
    judul: "Inovasi",
    gambar: "/innovation.png?url",
    deskripsi: "Tingkatkan keterampilan untuk menciptakan solusi baru dan kreatif dalam dunia bisnis. Modul ini mencakup proses inovasi, kreatif dalam pemecahan masalah, dan manajemen inovasi untuk membantu Anda memimpin proyek inovatif."
  },
  {
    id: "3",
    judul: "Berpikir Kritis",
    gambar: "/critical-thinking.jpg?url",
    deskripsi: "Asah kemampuan berpikir kritis Anda untuk analisis yang mendalam dan pengambilan keputusan yang lebih baik. Pelajari teknik analisis, pemecahan masalah, dan logika berpikir yang kuat untuk menghadapi tantangan bisnis."
  },
  {
    id: "4",
    judul: "Kepemimpinan",
    gambar: "/leadership.jpg?url",
    deskripsi: "Tingkatkan keterampilan kepemimpinan Anda untuk mengelola tim dan proyek secara efektif. Modul ini mencakup teori kepemimpinan, gaya kepemimpinan, dan praktik kepemimpinan dalam organisasi modern."
  },
  {
    id: "5",
    judul: "Manajemen Proyek",
    gambar: "/project-management.jpg?url",
    deskripsi: "Pelajari teknik manajemen proyek yang penting untuk merencanakan, mengelola, dan menyelesaikan proyek tepat waktu. Topik mencakup siklus hidup proyek, metodologi Agile dan Scrum, serta alat manajemen proyek yang efektif."
  },
  {
    id: "6",
    judul: "Transformasi Digital",
    gambar: "/digital-transformation.jpg?url",
    deskripsi: "Adaptasi bisnis Anda dengan teknologi digital untuk meningkatkan efisiensi dan inovasi. Modul ini mencakup strategi digital, teknologi disruptif, dan penerapan AI dalam bisnis untuk membantu Anda bersaing di era digital."
  },
];