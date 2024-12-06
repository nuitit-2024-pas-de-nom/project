import Link from "next/link";

export default function Page() {
    return (
      <div className="p-4">
        <Link href={"/show-billy"} className={"btn btn-primary"}>Go Back</Link>
  
        <h1 className="text-2xl font-bold mt-4">Stratification</h1>
  
        <article className="bg-blue-500 text-white p-4 rounded mt-4 shadow">
        Le réchauffement de la surface des océans accentue la stratification, car l'eau chaude, moins dense, reste en surface tandis que l'eau froide et dense demeure en profondeur. Ce phénomène bloque les échanges entre ces couches, limitant la circulation des gaz et des nutriments essentiels. Les effets sont directs et multiples:  appauvrissement en oxygène, réduction de la production biologique. Les espèces marines, comme les poissons et les mammifères, souffrent de la raréfaction des ressources et de l’habitat.
        </article>

        <article className="bg-blue-500 text-white p-4 rounded mt-4 shadow">
        Pour réduire la stratification des océans, il est essentiel de limiter le réchauffement des eaux de surface, principalement causé par le changement climatique. Cela passe par la réduction des émissions de gaz à effet de serre, notamment le dioxyde de carbone, afin d'éviter l'augmentation des températures marines.
        </article>
  
        <Link href ="/head/miniGame" className="btn bg-green-500 text-white hover:bg-green-600 mt-4">Play</Link>
      </div>
    );
  }