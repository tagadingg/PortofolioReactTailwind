import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
// import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  // {
  //   id: 9,
  //   gambar: Tools9,
  //   nama: "Adobe Illustrator",
  //   ket: "Design App",
  //   dad: "900",
  // },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";
import Proyek7 from "/assets/proyek/proyek7.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Food Delivery - Belajar Mandiri",
    desk: "Website responsif berbasis HTML, CSS, dan JavaScript dengan fitur 'Add to Cart' sederhana.",
    tools: ["HTML", "CSS", "Javascript", "Swiper"],
    dad: "200",
    link: "https://tagadingg.github.io/RestoDashboardHTMLCSSJavaScript/",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Kedai Kopi - Belajar Mandiri",
    desk: "Website responsif berbasis HTML & CSS dengan tampilan modern dan layout rapi.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "300",
    link: "https://tagadingg.github.io/kedai-kopi-belajar/",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "CRUD Application - Belajar Mandiri",
    desk: "Aplikasi CRUD murni dengan JavaScript untuk membuat, membaca, mengubah, dan menghapus data.",
    tools: ["HTML", "Bootstrap", "Javascript"],
    dad: "400",
    link: "https://tagadingg.github.io/SimpleCRUDJavascript/",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "eBox",
    desk: "Aplikasi web untuk pengelolaan gudang, saya berkontribusi di pengembangan frontend menggunakan PHP dan Bootstrap.",
    tools: ["PHP", "HTML", "CSS", "Bootstrap", "AOS", "Figma", "MySQL"],
    dad: "500",
    link: "https://github.com/alamsyah08/ebox",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "NEUCAFE",
    desk: "Aplikasi web untuk memantau statistik penjualan kafe, dengan kontribusi saya pada desain UI di Figma.",
    tools: ["PHP", "Laravel", "MySQL", "Figma"],
    dad: "600",
    link: "https://www.figma.com/design/RGsDnNnv21VoXYH0Xah6ed/neucafe--orisinil-?node-id=0-1&t=6ryy2KfYXqY4NAHJ-1",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "medRemind",
    desk: "Aplikasi Android pengingat jadwal minum obat, saya berperan pada wireframe di Figma serta UI dan frontend dengan Kotlin.",
    tools: ["Kotlin", "Figma"],
    dad: "700",
    link: "https://github.com/tagadingg/MedRemindMatkulPAB",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Feed Instagram KKN",
    desk: "Design untuk akun instagram KKN menggunakan Canva",
    tools: ["Canva"],
    dad: "800",
    link: "https://www.canva.com/design/DAG0iYCwyPE/77JZ6Gv27lLIqyHKtTGt_w/edit?utm_content=DAG0iYCwyPE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

import Sertif1 from "/assets/sertif/sertif1.webp";
import Sertif2 from "/assets/sertif/sertif2.webp";
import Sertif3 from "/assets/sertif/sertif3.webp";
import Sertif4 from "/assets/sertif/sertif4.webp";
import Sertif5 from "/assets/sertif/sertif5.webp";
import Sertif6 from "/assets/sertif/sertif6.webp";

export const listSertif = [
  {
    id: 1,
    gambar: Sertif1,
    nama: "Sertifikat Organisasi HMIF – Staff PSDM",
    dad: "200",
  },
  {
    id: 2,
    gambar: Sertif2,
    nama: "Sertifikat Kepanitiaan – Humas, Transportasi, Konsumsi (INPUT 2022)",
    dad: "300",
  },
  {
    id: 3,
    gambar: Sertif3,
    nama: "Sertifikat Pelatihan – Apple Developer Academy (Challenge Based Learning)",
    dad: "400",
  },
  {
    id: 4,
    gambar: Sertif4,
    nama: "Sertifikat Webinar – Informatics for Improvement (WIFI 2021)",
    dad: "500",
  },
  {
    id: 5,
    gambar: Sertif5,
    nama: "Sertifikat Bootcamp – Business Pitch Deck (IT Centrum)",
    dad: "600",
  },
  {
    id: 6,
    gambar: Sertif6,
    nama: "Sertifikat Webinar Nasional – Kesalahan Perilaku Generasi Muda Muslim",
    dad: "700",
  },
];
