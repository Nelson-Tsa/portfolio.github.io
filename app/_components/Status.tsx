import { Card } from "@/components/ui/card";
import {Section} from "./Section";
import {Home, LucideIcon, Laptop, FolderGit, Brain, Gamepad2, Rocket, Briefcase, Calculator, Clock10, ListTodo, Code, ArrowUpRight, Contact} from "lucide-react"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SideProject, SideProjectProps } from "./SideProjectProps";
import { Work } from "./WorkProps";
import { ContactCard } from "./ContactCard";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-stretch gap-6">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 h-full">
                    <div className="flex items-center gap-2 mb-4">
                        <Rocket size={16} />
                        <p className="text-lg text-muted-foreground">Side, Fun Projects</p>
                    </div>
                    <div className="flex flex-col h-full gap-4">
                        {SIDE_PROJECTS.map((project,index) => 
                            <SideProject
                                key={index}
                                Logo={project.Logo} 
                                title={project.title} 
                                description={project.description} 
                                url={project.url} 
                                freelance={project.freelance}
                            />
                        )}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4 max-w-lg ml-auto">
                    <Card className="w-full p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Briefcase size={16} />
                            <p className="text-lg text-muted-foreground">Work</p>
                        </div>
                        <div className="flex flex-col">
                            {WORK.map((work,index) => 
                                <Work
                                    key={index}
                                    image={work.image} 
                                    title={work.title} 
                                    role={work.role} 
                                    date={work.date} 
                                    url={work.url} 
                                    freelance={work.freelance}
                                />
                            )}
                        </div>
                    </Card>
                    <Card className="w-full p-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Contact size={16}/>
                            <p className="text-lg text-muted-foreground">Contact me</p>
                        </div>
                        <ContactCard 
                        url="https://x.com/nelson_tsa"
                        name="nelson_tsa" 
                        description="1" 
                        image="https://github.com/nelson-Tsa.png" 
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg"
                        />
                         <ContactCard 
                        url="https://www.linkedin.com/in/nelson-tsa-4b1b4a1b9/"
                        name="Nelson Tsamen" 
                        description="11" 
                        image="https://github.com/nelson-Tsa.png" 
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
                        />
                    </Card>
                </div>
        </Section>
    )
}

const SIDE_PROJECTS=[
    {
    Logo: Brain,
    title: "Quizz",
    description: "Quizz créer en projet de groupe",
    url: "",
    freelance: true,
    },
    {
        Logo: Clock10,
        title: "Horloge",
        description: "Horloge avec JavaScript",
        url: "https://nelson-tsa.github.io/horloge.io/",
    },
    {
        Logo: Calculator,
        title: "Calculette",
        description: "Calculette avec JavaScript",
        url: "https://nelson-tsa.github.io/Calculatrice.io/",
    },
    {
        Logo: ListTodo,
        title: "Todo List",
        description: "Todo List avec JavaScript",
        url: "https://nelson-tsa.github.io/todo-list.io/",
    },
    {
        Logo: Gamepad2,
        title: "Guess Number",
        description: "Jeux avec JavaScript",
        url: "https://nelson-tsa.github.io/devineLeNombre.io/",
    },
];





const WORK=[
    {
    image: "https://adatechschool.fr/app/uploads/2022/05/icn_logo_ada@2x.png",
    title: "Ada Tech School",
    role: "Formation intensive en développement web et mobile",
    date: "2025",
    url: "https://adatechschool.fr/",
    freelance: true,
    },
    {
    image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
    title: "Portfolio",
    role: "Software Developer",
    date: "2024",
    url: "https://github.com/nelson-Tsa/Portfolio",
    },
];

