import { Icons } from "@/types/types";

export const icon = {
  "c-sharp": "/src/img/icon programming/c-sharp.png",
  idea: "/src/img/icon programming/idea.png",
  java: "/src/img/icon programming/java.png",
  nodejs: "/src/img/icon programming/nodejs.png",
  nuclear: "/src/img/icon programming/nuclear.png",
  php: "/src/img/icon programming/php.png",
  postgre: "/src/img/icon programming/postgre.png",
  programming: "/src/img/icon programming/programming.png",
  python: "/src/img/icon programming/python.png",
  typescript: "/src/img/icon programming/typescript.png",
  "visual-basic": "/src/img/icon programming/visual-basic.png",
};

export const PropsDataExpwork = [
  {
    name: "Bandung Computer Education ",
    desc: "Saya pernah bekerja diperusahaan edukasi daerah katapang bandung, disana saya bekerja sebagai pengajar dan juga memiliki beberapa pengalaman seperti mengajar anak-anak tentang komputer, serta membuat pemberkasan yang berhubungan dengan pembelajaran",
    minute: "5 minute",
    date: "Maret/2022 · Agustus/2022",
  },
  {
    name: "PT Wahanan Express",
    desc: "Saya pernah bekerja diperusahaan bidang jasa pengiriman barang daerah arjasari bandung, disana saya bekerja dibagian administrasi dan juga memiliki beberapa pengalaman dibidang administrasi seperti membuat pemberkasan keuangan, pemasukan dan juga melayani administrasi barang konsumen",
    minute: "5 minute",
    date: "Januari/2021 · Maret/2021",
  },
  {
    name: "Abadi Jaya Bersama",
    desc: "Saya pernah bekerja diperusahaan bidang keuangan daerah kopo bandung, disana saya bekerja dibagian sales dan juga memiliki beberapa pengalaman dibidang marketing seperti menawarkan dan memperomosikan layanan perusahaan",
    minute: "5 minute",
    date: "September/2020 · November/2020",
  },
  {
    name: "PT Best Profit",
    desc: "Saya pernah bekerja di perusahaan bidang trading daerah kota bandung, disana saya bekerja dibagian marketing dan juga memiliki beberapa pengalaman dibindag marketing seperti mempromosikan, menawarkan layanan dan keunggulan perusahaan",
    minute: "5 minute",
    date: "Juni/2020 · Agustus/2020",
  },
];

export const PropsDataExpSchool = [
  {
    name: "Universitas Bale bandung ",
    desc: "Perkuliahan saya di Universitas Bale bandung yaitu daerah baleendah kec. baleendah kab bandung provinsi jawa barat",

    minute: "5 minute",
    date: "September/2021 · Now",
  },
  {
    name: "SMA Handayani Banjaran 02",
    desc: "Sekolah Menengah Atas saya di SMA Handayani Banjaran 02 yaitu daerah desa nambo kec. banjaran kab bandung provinsi jawa barat",
    minute: "5 minute",
    date: "Juli/2017 · Juni/2020",
  },
  {
    name: "SMP Pemuda Banjaran",
    desc: "Sekolah Menengah Pertama saya di SMP Pemuda Banjaran yaitu daerah desa kamasan kec. banjaran kab bandung provinsi jawa barat",
    minute: "5 minute",
    date: "Juli/2014 · Juni/2017",
  },
  {
    name: "SD Kamasan 02",
    desc: "Sekolah Dasar saya di SD Kamasan 02 yaitu daerah desa neglasari kec. banjaran kab bandung provinsi jawa barat",
    minute: "5 minute",
    date: "Juli/2009 · Juni/2014",
  },
];

export type Tech = {
  name: string;
  url: string;
  icon: string;
};
export type Items = {
  name: string;
  icons: Icons[];
};
export type Skill = {
  name: string;
  items: Items[];
};

export type IconProject = {
  name: string;
  icon: string;
};
export type ProjectItem = {
  name: string;
  desc: string;
  img: string;
  link: string;
  icon: IconProject[];
};
export type Project = {
  name: string;
  createdAt: string;
  items: ProjectItem[];
};
