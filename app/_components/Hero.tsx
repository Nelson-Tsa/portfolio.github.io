import { ComponentPropsWithoutRef } from "react";
import {Section} from "./Section";
import { Spacing } from "./Spacing";
import { cn } from "@/lib/utils";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Code } from "./Code";

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-stretch gap-4 justify-between">
            <div className="flex-[3] w-full flex flex-col gap-2 ">
                <h2 className="text-4xl font-caption text-primary">Nelson Tsamen</h2>
                <h3 className="text-3xl font-bold">Developer Full-Stack</h3>
                <p className="text-base">

                Je me tiens informé des dernières technologies grâce à la chaîne
                <Link href="https://www.youtube.com/@Underscore_" target="_blank">
                <Code className="inline-flex items-center gap-1">
                <YoutubeIcon size={15} className="inline"/>  
                YouTube Underscore
                    </Code>
                </Link>, 
                dont j'apprécie particulière le contenu. Je partage régulièrement mes contributions 
                sur mon profil sur
                <Link href="https://github.com/nelson-Tsa" target="_blank">
                <Code className="inline-flex items-center gap-1">
                <GithubIcon size={15} className="inline"/>
                    Github
                    </Code>
                </Link> 
                 et j'ai pris plaisir à créer des logos au format SVG.
                Résidant en 
                <Link href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-450px-Flag_of_France.svg.png" target="_blank">
                    <Code><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-450px-Flag_of_France.svg.png" style={{width: 18 , height: "auto"}} alt="Drapeau de France" className="inline"/> France</Code>
                </Link>, 
                je suis actuellement en formation chez <Link href="https://adatechschool.fr/" target="_blank"><Code><img src="https://cdn.welcometothejungle.co/uploads/website/logo/4277/155112/ada-tech-school.png" style={{width: 18 , height: 10}} alt="Logo Ada Tech School" className="inline"/> Ada Tech School</Code></Link> pour devenir 
                développeur full-stack. Je suis à la recherche d'une alternance afin de mettre en 
                pratique mes connaissances et de contribuer activement à des projets innovants.
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto flex items-center justify-center h-full">
                <img src="https://avatars.githubusercontent.com/u/55012641?v=4" 
                alt="Photo de profil" className="w-full h-auto max-w-xs rounded-lg"/>
            </div>
        </Section>
    )
}