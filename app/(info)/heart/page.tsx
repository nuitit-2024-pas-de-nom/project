import Link from "next/link";

export default function Page() {
    return (
      <div className="p-4">
        <Link href={"/show-billy"} className={"btn btn-primary"}>Go Back</Link>
  
        <h1 className="text-2xl font-bold mt-4">Désoxygénation</h1>
  
        <article className="bg-blue-500 text-white p-4 rounded mt-4 shadow">
          Ce phénomène est en partie dû à l’eutrophisation des zones côtières, causée par un excès de nutriments
          provenant des engrais utilisés sur les terres agricoles. Ces nutriments se retrouvent dans les rivières et
          arrivent dans les estuaires et les côtes, où ils favorisent la prolifération du phytoplancton. En se
          décomposant, ce phytoplancton consomme beaucoup d’oxygène, ce qui en réduit la quantité dans les eaux
          profondes. Quand cette consommation est trop élevée, on parle de zones mortes où l’oxygène est trop faible
          pour que la vie marine puisse y prospérer.
        </article>
  
        <Link href ="/heart/miniGame" className="btn bg-green-500 text-white hover:bg-green-600 mt-4">Play</Link>
      </div>
    );
  }