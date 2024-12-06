import Link from "next/link";

export default function Page() {
    return (
      <div className="p-4">
        <Link href={"/show-billy"} className={"btn btn-primary"}>Go Back</Link>
  
        <h1 className="text-2xl font-bold mt-4">Accidification</h1>
  
        <article className="bg-blue-500 text-white p-4 rounded mt-4 shadow">
        L'acidification des océans est principalement causée par l'absorption massive de CO2 atmosphérique, issue de l'activité humaine. Ce gaz, dissout dans l'eau, forme de l'acide carbonique, réduisant ainsi le pH de l'eau. Ces déséquilibres chimiques limitent les océans dans leur capacité à capturer du carbone, ce qui aggrave le réchauffement climatique. Ils fragilisent également les récifs coralliens, abris pour de nombreuses espèces, réduisant ainsi la reproduction et la survie des poissons.
        </article>

        <article className="bg-blue-500 text-white p-4 rounded mt-4 shadow">
        Pour réduire l'acidification des océans, il est essentiel de limiter les émissions de dioxyde de carbone (CO2), principal responsable de ce phénomène.. Réduire les gaz à effet de serre grâce à des énergies renouvelables et des pratiques agricoles durables permettrait de ralentir cette acidification. De plus, protéger et restaurer les écosystèmes marins, comme les coraux et les herbiers, peut aider à absorber le CO2 et maintenir l'équilibre du pH.
        </article>
  
        <Link href ="/stomach/miniGame" className="btn bg-green-500 text-white hover:bg-green-600 mt-4">Play</Link>
      </div>
    );
  }