import Link from "next/link";

export default function Page() {
    return (
      <div className="p-4">
        <Link href={"/show-billy"} className={"btn btn-primary"}>Go Back</Link>
  
        <h1 className="text-2xl font-bold mt-4">Mauvaise circulation</h1>
  
        <article className="bg-blue-500 text-white p-4 rounded mt-4 shadow">
        La circulation océanique, vitale pour la régulation du climat terrestre, est en danger à cause des apports excessifs d’eau douce provenant de la fonte des calottes glaciaires et des précipitations accrues. Ces phénomènes réduisent la densité des eaux de surface, ralentissant le processus de downwelling (enfoncement des eaux denses) aux pôles.     Moins de stockage de chaleur et de carbone par l’océan, ce qui amplifie le réchauffement climatique.
        </article>

        <article className="bg-blue-500 text-white p-4 rounded mt-4 shadow">
        Pour réduire l'impact de la perturbation de la circulation océanique, il est essentiel de limiter les émissions de gaz à effet de serre afin de ralentir la fonte des calottes glaciaires et les changements dans les précipitations. En réduisant la température de la planète, on prévient l'excès d'eau douce qui dilue les océans. De plus, des efforts pour protéger les écosystèmes marins, comme la réduction de la pollution, peuvent aider à maintenir la santé des océans
        </article>
  
        <Link href ="/blood/miniGame" className="btn bg-green-500 text-white hover:bg-green-600 mt-4">Play</Link>
      </div>
    );
  }