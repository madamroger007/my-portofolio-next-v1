export const icon = {
    "c-sharp": "/src/img/icon programming/c-sharp.png",
    "idea": "/src/img/icon programming/idea.png",
    "java": "/src/img/icon programming/java.png",
    "nodejs": "/src/img/icon programming/nodejs.png",
    "nuclear": "/src/img/icon programming/nuclear.png",
    "php": "/src/img/icon programming/php.png",
    "postgre": "/src/img/icon programming/postgre.png",
    "programming": "/src/img/icon programming/programming.png",
    "python": "/src/img/icon programming/python.png",
    "typescript": "/src/img/icon programming/typescript.png",
    "visual-basic": "/src/img/icon programming/visual-basic.png"
}

export const PropsDataExp = [
    {
        title: "Desenvolvedor Front-end na Ensinio",
        desc: "Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.",
        minute: "3 minute",
        date: "Janeiro/2021 · Abril/2021"
    },
    {
        title: "Desenvolvedor Front-end na Ensinio",
        desc: "Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.",
        minute: "3 minute",
        date: "Janeiro/2021 · Abril/2021"
    },
    {
        title: "Desenvolvedor Front-end na Ensinio",
        desc: "Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.",
        minute: "3 minute",
        date: "Janeiro/2021 · Abril/2021"
    },
    {
        title: "Desenvolvedor Front-end na Ensinio",
        desc: "Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.",
        minute: "3 minute",
        date: "Janeiro/2021 · Abril/2021"
    },
    {
        title: "Desenvolvedor Front-end na Ensinio",
        desc: "Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.",
        minute: "3 minute",
        date: "Janeiro/2021 · Abril/2021"
    },
]
export type Tech = {
    name: string,
    url: string,
    icon: string
}
export type Items = {
    name: string;
    tech: Tech[];
}
export type Skill = {
    title: string;
    items: Items[]
}
export const skill: Skill[] = [
    {
        title: "Web Developement",
        items: [
            {
                name: "Front End",
                tech: [
                    {
                        name: "HTML",
                        url: "https://www.w3schools.com/html",
                        icon: "/src/img/icon/skill/frontend/html.png"
                    },
                    {
                        name: "CSS",
                        url: "https://www.w3schools.com/css",
                        icon: "/src/img/icon/skill/frontend/css.png"
                    },
                    {
                        name: "React",
                        url: "https://react.dev",
                        icon: "/src/img/icon/skill/frontend/react.png"
                    },
                    {
                        name: "Tailwind",
                        url: "https://tailwindcss.com",
                        icon: "/src/img/icon/skill/frontend/tailwind.png"
                    },
                    {
                        name: "Boostrap",
                        url: "https://getbootstrap.com",
                        icon: "/src/img/icon/skill/frontend/boostrap.png"
                    }
                ]
            },
            {
                name: "Back End",
                tech: [
                    {
                        name: "Nodejs",
                        url: "https://nodejs.org/en",
                        icon: "/src/img/icon/skill/backend/nodejs.png"
                    },
                    {
                        name: "Python",
                        url: "https://www.python.org",
                        icon: "/src/img/icon/skill/backend/python.png"
                    },
                    {
                        name: "PHP",
                        url: "https://www.php.net",
                        icon: "/src/img/icon/skill/backend/php.png"
                    },
                    {
                        name: "Golang",
                        url: "https://go.dev/",
                        icon: "/src/img/icon/skill/backend/golang.png"
                    },
                    {
                        name: "Nest JS",
                        url: "https://nestjs.com/",
                        icon: "/src/img/icon/skill/backend/nestjs.png"
                    },
                    {
                        name: "Hapi",
                        url: "https://hapi.dev/",
                        icon: "/src/img/icon/skill/backend/hapi.png"
                    }
                ]
            },
            {
                name: "Full Stack",
                tech: [
                    {
                        name: "Javascript",
                        url: "https://www.javascript.com/",
                        icon: "/src/img/icon/skill/fullstack/js.png"
                    },
                    {
                        name: "Typescript",
                        url: "https://www.typescriptlang.org",
                        icon: "/src/img/icon/skill/fullstack/ts.png"
                    },
                    {
                        name: "Next JS",
                        url: "https://nextjs.org/",
                        icon: "/src/img/icon/skill/fullstack/nextjs.png"
                    },
                    {
                        name: "Remix Js",
                        url: "https://remix.run",
                        icon: "/src/img/icon/skill/fullstack/remixjs.png"
                    },
                    {
                        name: "Flask",
                        url: "https://flask.palletsprojects.com/en/3.0.x",
                        icon: "/src/img/icon/skill/fullstack/flask.png"
                    },
                    {
                        name: "Laravel",
                        url: "https://laravel.com",
                        icon: "/src/img/icon/skill/fullstack/laravel.png"
                    },

                ]
            },
            {
                name: "Databases",
                tech: [
                    {
                        name: "PostgreSQL",
                        url: "https://www.postgresql.org/",
                        icon: "/src/img/icon/skill/databases/postgres.png"
                    },
                    {
                        name: "MySQL",
                        url: "https://www.mysql.com/",
                        icon: "/src/img/icon/skill/databases/mysql.png"
                    },
                    {
                        name: "MongoDB",
                        url: "https://www.mongodb.com/",
                        icon: "/src/img/icon/skill/databases/mongodb.png"
                    },
                    {
                        name: "Redis",
                        url: "https://redis.io",
                        icon: "/src/img/icon/skill/databases/redis.png"
                    }
                ]
            }
            ,
            {
                name: "DevsOp",
                tech: [
                    {
                        name: "Docker",
                        url: "https://www.postgresql.org/",
                        icon: "/src/img/icon/skill/devops/docker.png"
                    },
                    {
                        name: "Os Linux",
                        url: "https://www.postgresql.org/",
                        icon: "/src/img/icon/skill/devops/linux.png"
                    },
                    {
                        name: "Github Action",
                        url: "https://www.postgresql.org/",
                        icon: "/src/img/icon/skill/devops/githubaction.png"
                    },
                    {
                        name: "Nginx",
                        url: "https://www.postgresql.org/",
                        icon: "/src/img/icon/skill/devops/nginx.png"
                    }
                ]
            }]
    }
]