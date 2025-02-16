import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ClaudeIcon } from "./icons/ClaudeIcon";
import { OpenAIIcon } from "./icons/OpenAIIcon";
import { MistralIcon } from "./icons/MistralIcon";


export const Skills = () => {
    return (
        <Section className="flex flex-col gap-4 items-start">
            <Badge variant="outline">Skills</Badge>
            <h2 className="pb-2 text-3xl text-primary font-semibold tracking-tight first:mt-0">
                J'aime travailler avec</h2>
                <div className="flex max-md:flex-col gap-4">
              <div className="flex flex-col gap-2 flex-1">
                  <ReactIcon 
                  size={42} 
                  className="animate-spin" 
                  style={{animationDuration: "10s"}} 
                  />  
              <h3 className="text-2xl font-semibold tracking-tight text-sm text-muted-foreground">React</h3>
              <p className="text-gray-500 dark:text-gray-400">Mon portfolio est le seul projet que j'ai mis en place avec <Code>React</Code>, <Code>Next.js</Code>, <Code>TypeScript</Code> et <Code>TailwindCSS</Code>.</p>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                  <TailwindIcon 
                  size={42} 
                  className="animate-spin" 
                  style={{animationDuration: "10s"}} 
                  />  
              <h3 className="text-2xl font-semibold tracking-tight text-sm text-muted-foreground">Tailwind</h3>
              <p className="text-gray-500 dark:text-gray-400"> J'apprend à <u>créer</u> de belles <i>applications</i> avec <Code>TailwindCSS</Code>.</p>
              </div><div className="flex flex-col gap-2 flex-1">
                  <ClaudeIcon
                  size={42} 
                  className="animate-spin" 
                  style={{animationDuration: "10s"}} 
                  />
                  
              <h3 className="text-2xl font-semibold tracking-tight text-sm text-muted-foreground">Claude</h3>
              <p className="text-gray-500 dark:text-gray-400"><Code>Claude 3.5</Code> est un assistant d'apprentissage et de développement, offrant des ressources pédagogiques et des outils pratiques pour progresser rapidement.</p>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                  <div className="flex gap-4 ">
                    <OpenAIIcon
                    size={42} 
                    className="animate-spin" 
                    style={{animationDuration: "10s"}} 
                    />
                    <MistralIcon
                    size={42} 
                    className="animate-spin" 
                    style={{animationDuration: "10s"}} 
                    />
                  </div>
              <h3 className="text-2xl font-semibold tracking-tight text-sm text-muted-foreground">IA Générative</h3>
              <p className="text-gray-500 dark:text-gray-400">J'utilise <Code>OpenAI</Code> et <Code>Mistral</Code> pour expliquer des concepts complexes, synthétiser des cours en ligne de manière claire et concise, et clarifier les étapes ambiguës afin d'améliorer ma compréhension et mon apprentissage.</p>
              </div>
            </div>
        </Section>
    )
}