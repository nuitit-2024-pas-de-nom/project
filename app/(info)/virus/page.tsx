import Link from "next/link";

export default function Page() {
    return (
      <div className="p-4">
        <Link href={"/show-billy"} className={"btn btn-primary"}>Go Back</Link>
  
        <h1 className="text-2xl font-bold mt-4">Pollution des eaux</h1>
  
        <article className="bg-blue-500 text-white p-4 rounded mt-4 shadow">
        La pollution plastique et les déchets déversés dans les océans représentent un fléau grandissant pour la santé des océans, affectant la faune et la flore marines. Les plastiques, en particulier, sont une menace persistante et de longue durée en raison de leur lente dégradation. Ces déchets nuisent aux écosystèmes marins, altèrent les chaînes alimentaires et ont des effets toxiques sur la biodiversité. On estime que près de 700 espèces marines ont été affectées par le plastique, en ingérant des microplastiques ou en s’emmêlant dans des objets plastiques.
        </article>

        <article className="bg-blue-500 text-white p-4 rounded mt-4 shadow">
  
        Organiser des campagnes de nettoyage des plages et des fonds marins pour réduire la pollution. Interdire les plastiques à usage unique. Développer des infrastructures de recyclage plus efficaces pour éviter que les plastiques ne finissent dans les océans. Encourager l’utilisation de matériaux biodégradables ou réutilisables
        </article>
  
        <Link href ="/virus/miniGame" className="btn bg-green-500 text-white hover:bg-green-600 mt-4">Play</Link>
      </div>
    );
  }