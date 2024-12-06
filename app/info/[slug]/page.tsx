import { promises as fs } from 'fs';
import Card from "@/app/info/[slug]/Card";
import {Metadata} from "next";

// Définition explicite de PageProps (ici on présume qu'il s'agit d'une promesse)
type PageProps = {
    slug: string;
};
// @ts-ignore
export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
    // Vérification du slug

    if (!params?.slug) {
        return {
            title: "Page not found",
            description: "Page not found",
        };
    }

    return {
        title: `Page for ${params.slug}`,
        description: `Description for ${params.slug}`,
    };
}


export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;



    const data = await fs.readFile(process.cwd() + "/app/data/health-problems.json", "utf-8");
    const json = JSON.parse(data);
    const problem = json.find((item: { position: string }) => item.position === slug);

    let isFlipped = false;
    let cardText = isFlipped ? problem.diagnosis : problem.solutions;

    const onClick = () => {
        isFlipped = !isFlipped;
    }

    if (!problem) {
        return <div>Problem not found</div>;
    }

    return (
        <div>
            <Card title={problem.title} diagnosis={problem.diagnosis} solutions={problem.solutions} position={problem.position}/>
        </div>
    );
}