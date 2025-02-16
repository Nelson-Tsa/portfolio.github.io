import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url?: string;
}) => {
    return (
        <Link href={props.url || "#"} target="_blank" className="w-full"> 
<Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
<div className="relative">
    <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
    <img src={props.mediumImage} alt={props.name} 
    className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
</div>
    
    <div className="flex-1 ">
            <div className="min-w-0 flex items-center gap-2">
            <p className="text-md font-semibold truncate">{props.name}</p>
            
            </div>
            <p className="text-xs text-muted-foreground flex truncate">{props.description}</p>
        </div>
        <div className="flex-shrink-0 ">
            <ArrowUpRight size={16} className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform mr-4" />
        </div>
        
</Card>
</Link>
    )
}