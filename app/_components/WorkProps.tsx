import { Badge } from "@/components/ui/badge";
import Link from "next/link";



export type WorkProps = { 
    image: string; 
    title: string; 
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
};

export const Work = (props: WorkProps) => { 
return (
    <Link href={props.url} className="flex grid grid-cols-[auto_1fr_auto] items-center gap-4 p-2 rounded transition-colors hover:bg-accent/50" target="_blank">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
            <img src={props.image} 
                alt={props.title} 
                className="w-8 h-8 object-contain" 
            />
        </div>
        <div className="flex-1 ">
            <div className="min-w-0 flex items-center gap-2">
            <p className="text-md font-semibold truncate">{props.title}</p>
            {props.freelance && <Badge variant="outline">En cours</Badge>}
            </div>
            <p className="text-xs text-muted-foreground flex truncate">{props.role}</p>
        </div>
        <div className="flex-shrink-0 ">
            <p className="text-xs text-end text-muted-foreground whitespace-nowrap break-words">{props.date}</p>
        </div>
    </Link>
)
}