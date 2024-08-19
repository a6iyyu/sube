export interface InitPropsDaftarFAQ {
  id: string;
  pertanyaan: string;
  jawaban: string;
  tipe?: TipeMenu;
}

export const PropsDaftarFAQ: InitPropsDaftarFAQ[] = [
  {
    id: "1",
    pertanyaan: "Apa itu Sube?",
    jawaban: "Sube adalah platform e-learning yang fokus pada pengembangan keterampilan dan pengetahuan dalam bidang manajemen organisasi, inovasi, dan pemikiran kritis.",
  },
  {
    id: "2",
    pertanyaan: "Bagaimana cara Sube membantu dalam pengembangan keterampilan?",
    jawaban: "Sube menyediakan berbagai kursus online dan materi pembelajaran yang dirancang untuk membantu Anda mengembangkan keterampilan dalam manajemen organisasi, inovasi, dan pemikiran kritis. Kami fokus pada metode pembelajaran praktis yang bisa langsung diterapkan di dunia nyata."
  },
  {
    id: "3",
    pertanyaan: "Apa saja keunggulan belajar di Sube?",
    jawaban: "Belajar di Sube memberikan Anda akses ke materi berkualitas tinggi yang disusun oleh para ahli di bidangnya. Selain itu, platform ini gratis dan mudah diakses, memungkinkan Anda untuk belajar kapan saja dan di mana saja. Sube juga memiliki komunitas yang mendukung untuk berdiskusi dan berbagi pengetahuan.",
  },  
  {
    id: "4",
    pertanyaan: "Kenapa saya tidak bisa mengakses materi kursus meskipun sudah mendaftar?",
    jawaban: "Pastikan Anda telah menyelesaikan proses pendaftaran dan masuk ke akun Anda. Jika masih mengalami masalah, coba segarkan kembali halaman atau keluar dan masuk kembali. Jika masalah berlanjut, kirimkan pengajuan melalui halaman \"Kritik dan Saran\".",
    tipe: "Umum",
  },
  {
    id: "5",
    pertanyaan: "Apakah Sube menyediakan sertifikat setelah menyelesaikan kursus?",
    jawaban: "Saat ini, Sube masih belum menyediakan sertifikat digital setelah Anda menyelesaikan kursus. Namun, hal ini akan menjadi pertimbangan kedepannya apabila sudah mulai banyak peminatnya.",
    tipe: "Umum",
  },
  {
    id: "6",
    pertanyaan: "Apakah ada biaya untuk mengikuti kursus di Sube?",
    jawaban: "Saat ini, semua kursus di Sube tersedia secara gratis. Anda dapat mengikuti dan menyelesaikan kursus tanpa biaya.",
    tipe: "Umum",
  },
  {
    id: "7",
    pertanyaan: "Bagaimana cara mendaftar di Sube?",
    jawaban: "Anda dapat mendaftar dengan menekan tombol \"Registrasi!\" di halaman beranda dan mengisi formulir registrasi yang tersedia.",
    tipe: "Akun",
  },
  {
    id: "8",
    pertanyaan: "Saya lupa kata sandi akun saya, bagaimana cara meresetnya?",
    jawaban: "Anda dapat mereset kata sandi Anda dengan mengklik tautan \"Lupa Kata Sandi\" di halaman masuk dan mengikuti instruksi yang diberikan.",
    tipe: "Akun",
  },
  {
    id: "9",
    pertanyaan: "Bagaimana cara mengubah informasi profil saya?",
    jawaban: "Anda dapat mengubah informasi profil Anda melalui halaman \"Profil Saya\" setelah login ke akun Anda.",
    tipe: "Akun",
  },
  {
    id: "10",
    pertanyaan: "Bagaimana cara mengakses materi kursus di Sube?",
    jawaban: "Setelah mendaftar dan masuk ke akun Anda, Anda dapat mengakses materi kursus di halaman \"Kursus\" secara gratis.",
    tipe: "Memulai",
  },
  {
    id: "11",
    pertanyaan: "Apakah materi kursus di Sube dapat diunduh?",
    jawaban: "Untuk menjaga kualitas dan hak cipta, materi kursus di Sube tidak dapat diunduh. Namun, Anda dapat mengaksesnya secara daring kapan saja.",
    tipe: "Memulai",
  },
  {
    id: "12",
    pertanyaan: "Bagaimana cara memberikan umpan balik atau kritik dan saran untuk Sube?",
    jawaban: "Anda dapat memberikan umpan balik melalui formulir yang tersedia di halaman \"Kritik dan Saran\". Pendapat Anda sangat berarti bagi kami.",
    tipe: "Memulai",
  },
  {
    id: "13",
    pertanyaan: "Bagaimana cara mengakses kursus di Sube?",
    jawaban: "Anda dapat mengakses kursus dengan memilih kursus yang diminati dari katalog kursus dan mengklik tombol \"Mulai Belajar\" di halaman kursus tersebut.",
    tipe: "Kursus",
  },
  {
    id: "14",
    pertanyaan: "Apakah ada batasan waktu untuk menyelesaikan kursus?",
    jawaban: "Tidak ada batasan waktu dalam menyelesaikan kursus, tetapi kami sarankan agar Anda tetap konsisten dalam belajar agar ilmunya terserap dengan baik.",
    tipe: "Kursus",
  },
  {
    id: "15",
    pertanyaan: "Apakah Sube menyediakan program pelatihan untuk perusahaan?",
    jawaban: "Tidak, saat ini Sube hanya berfokus pada pemberian modul pembelajaran yang nantinya akan bermanfaat jika Anda sudah terjun di masyarakat. Keputusan mengenai apakah Sube menyediakan program pelatihan untuk perusahaan akan menjadi pertimbangan kedepannya.",
    tipe: "Kursus",
  },
  {
    id: "16",
    pertanyaan: "Bagaimana cara mengikuti tantangan yang tersedia di Sube?",
    jawaban: "Anda dapat mengikuti tantangan dengan mendaftar di halaman tantangan yang tersedia. Ikuti petunjuk yang diberikan untuk menyelesaikan tantangan tersebut.",
    tipe: "Tantangan",
  },
  {
    id: "17",
    pertanyaan: "Apakah ada hadiah atau sertifikat untuk menyelesaikan tantangan?",
    jawaban: "Saat ini, kami belum menyediakan hadiah maupun sertifikat setelah menyelesaikan tantangan. Hal ini akan menjadi pertimbangan kedepannya.",
    tipe: "Tantangan",
  },
];

export type TipeMenu = "Semua" | "Memulai" | "Umum" | "Akun" | "Kursus" | "Tantangan";