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
export const skill: Skill[] = [
  {
    name: "Web Developement",
    items: [
      {
        name: "Front End",
        tech: [
          {
            name: "HTML",
            url: "https://www.w3schools.com/html",
            icon: "/src/img/icon/skill/frontend/html.png",
          },
          {
            name: "CSS",
            url: "https://www.w3schools.com/css",
            icon: "/src/img/icon/skill/frontend/css.png",
          },
          {
            name: "React",
            url: "https://react.dev",
            icon: "/src/img/icon/skill/frontend/react.png",
          },
          {
            name: "Tailwind",
            url: "https://tailwindcss.com",
            icon: "/src/img/icon/skill/frontend/tailwind.png",
          },
          {
            name: "Boostrap",
            url: "https://getbootstrap.com",
            icon: "/src/img/icon/skill/frontend/boostrap.png",
          },
        ],
      },
      {
        name: "Back End",
        tech: [
          {
            name: "Nodejs",
            url: "https://nodejs.org/en",
            icon: "/src/img/icon/skill/backend/nodejs.png",
          },
          {
            name: "Python",
            url: "https://www.python.org",
            icon: "/src/img/icon/skill/backend/python.png",
          },
          {
            name: "PHP",
            url: "https://www.php.net",
            icon: "/src/img/icon/skill/backend/php.png",
          },
          {
            name: "Golang",
            url: "https://go.dev/",
            icon: "/src/img/icon/skill/backend/golang.png",
          },
          {
            name: "Nest JS",
            url: "https://nestjs.com/",
            icon: "/src/img/icon/skill/backend/nestjs.png",
          },
          {
            name: "Hapi",
            url: "https://hapi.dev/",
            icon: "/src/img/icon/skill/backend/hapi.png",
          },
        ],
      },
      {
        name: "Full Stack",
        tech: [
          {
            name: "Javascript",
            url: "https://www.javascript.com/",
            icon: "/src/img/icon/skill/fullstack/js.png",
          },
          {
            name: "Typescript",
            url: "https://www.typescriptlang.org",
            icon: "/src/img/icon/skill/fullstack/ts.png",
          },
          {
            name: "Next JS",
            url: "https://nextjs.org/",
            icon: "/src/img/icon/skill/fullstack/nextjs.png",
          },
          {
            name: "Remix Js",
            url: "https://remix.run",
            icon: "/src/img/icon/skill/fullstack/remixjs.png",
          },
          {
            name: "Flask",
            url: "https://flask.palletsprojects.com/en/3.0.x",
            icon: "/src/img/icon/skill/fullstack/flask.png",
          },
          {
            name: "Laravel 10+",
            url: "https://laravel.com",
            icon: "/src/img/icon/skill/fullstack/laravel.png",
          },
          {
            name: "Codeigniter 4+",
            url: "https://codeigniter.com",
            icon: "/src/img/icon/skill/fullstack/codeigniter.png",
          },
        ],
      },
      {
        name: "Databases",
        tech: [
          {
            name: "PostgreSQL",
            url: "https://www.postgresql.org/",
            icon: "/src/img/icon/skill/databases/postgres.png",
          },
          {
            name: "MySQL",
            url: "https://www.mysql.com/",
            icon: "/src/img/icon/skill/databases/mysql.png",
          },
          {
            name: "MongoDB",
            url: "https://www.mongodb.com/",
            icon: "/src/img/icon/skill/databases/mongodb.png",
          },
          {
            name: "Redis",
            url: "https://redis.io",
            icon: "/src/img/icon/skill/databases/redis.png",
          },
        ],
      },
      {
        name: "DevsOp",
        tech: [
          {
            name: "Docker",
            url: "https://www.postgresql.org/",
            icon: "/src/img/icon/skill/devops/docker.png",
          },
          {
            name: "Os Linux",
            url: "https://www.postgresql.org/",
            icon: "/src/img/icon/skill/devops/linux.png",
          },
          {
            name: "Github Action",
            url: "https://www.postgresql.org/",
            icon: "/src/img/icon/skill/devops/githubaction.png",
          },
          {
            name: "Nginx",
            url: "https://www.postgresql.org/",
            icon: "/src/img/icon/skill/devops/nginx.png",
          },
        ],
      },
    ],
  },
];

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
export const projectItem: Project[] = [
  {
    name: "apps",
    createdAt: "",
    items: [
      {
        name: "IFSTORE",
        desc: "Website Layanan Jasa pembuatan website digital, desain video, desain gambar",
        img: "/src/img/projek/ifstore.png",
        link: "https://ifstore.vercel.app",
        icon: [
          {
            name: "Typescript",

            icon: "/src/img/icon/skill/fullstack/ts.png",
          },
          {
            name: "Next JS",

            icon: "/src/img/icon/skill/fullstack/nextjs.png",
          },
        ],
      },
      {
        name: "Charity Comunity",
        desc: "Website Layanan Donasi bagi yang membutuhkan",
        img: "/src/img/projek/charity.png",
        link: "https://caritycommunity.glitch.me",
        icon: [
          {
            name: "Flask",

            icon: "/src/img/icon/skill/fullstack/flask.png",
          },
          {
            name: "HTML",

            icon: "/src/img/icon/skill/frontend/html.png",
          },
          {
            name: "CSS",
            icon: "/src/img/icon/skill/frontend/css.png",
          },
          {
            name: "Boostrap",
            icon: "/src/img/icon/skill/frontend/boostrap.png",
          },
        ],
      },
      {
        name: "Movie List",
        desc: "Website untuk mengelola movie",
        img: "/src/img/projek/movie-flask.png",
        link: "https://movie-nge-list.glitch.me",

        icon: [
          {
            name: "Flask",

            icon: "/src/img/icon/skill/fullstack/flask.png",
          },
          {
            name: "HTML",

            icon: "/src/img/icon/skill/frontend/html.png",
          },
          {
            name: "CSS",
            icon: "/src/img/icon/skill/frontend/css.png",
          },
          {
            name: "Boostrap",
            icon: "/src/img/icon/skill/frontend/boostrap.png",
          },
        ],
      },
      {
        name: "Matrix Java",
        desc: "Aplikasi penghitung matriks obe",
        img: "/src/img/projek/java-matrix.jpg",
        link: "https://github.com/madamroger007/Aljabar_matrix-v-2.0.git",

        icon: [
          {
            name: "Java",
            icon: "/src/img/icon programming/java.png",
          },
        ],
      },
    ],
  },
];
