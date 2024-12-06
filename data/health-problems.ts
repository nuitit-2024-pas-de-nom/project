export type HealthProblem = {
  title: string;
  symptoms: string;
  diagnosis: string;
  solutions: string;
  icon: string;
  position: string;
  endpoint: string;
  margin: string,
  height: number
  image: any
}

import Heart from "@/assets/img/heart.png"
import Stomach from "@/assets/img/stomac.png"
import Head from "@/assets/img/head.png"
import Blood from "@/assets/img/blood.png"
import Virus from "@/assets/img/virus.png"

export const healthProblems: HealthProblem[] =
[
  {
    title:"Désoxygénation",
    symptoms:"Billy est en hypoxie: son sang est peu oxygéné, il s'essoufle rapidement et ses cellules commencent à mourir.",
    diagnosis:"Ce phénomène est en partie dû à l’'eutrophisation des zones côtières, causée par un excès de nutriments provenant des engrais utilisés sur les terres agricoles. Ces nutriments se retrouvent dans les rivières et arrivent dans les estuaires et les côtes, où ils favorisent la prolifération du phytoplancton. En se décomposant, ce phytoplancton consomme beaucoup d'oxygène, ce qui en réduit la quantité dans les eaux profondes. Quand cette consommation est trop élevée, on parle de zones mortes où l'oxygène est trop faible pour que la vie marine puisse y prospérer.",
    solutions:"Pour réduire la désoxygénation des océans, il est crucial de limiter le réchauffement climatique en réduisant les émissions de gaz à effet de serre. Il faut également limiter les excès de nutriments issus de l'agriculture et des eaux usées. Restaurer les écosystèmes côtiers comme les mangroves et les herbiers marins peut également aider à maintenir un équilibre écologique. Enfin, une gestion durable des océans, soutenue par des politiques internationales, est essentielle pour protéger la vie marine.",
    icon:"heart.png",
    position: "heart",
    endpoint: "heart",
    margin: "0 0 136px 24px",
    height: 64,
    image: Heart
  },
  {
    title:"Acidification",
    symptoms:"Billy a des reflux acides. Une acidité accrue entraîne des douleurs d'estomac",
    diagnosis:"L'acidification des océans est principalement causée par l'absorption massive de CO2 atmosphérique, issue de l'activité humaine. Ce gaz, dissout dans l'eau, forme de l'acide carbonique, réduisant ainsi le pH de l'eau. Ces déséquilibres chimiques limitent les océans dans leur capacité à capturer du carbone, ce qui aggrave le réchauffement climatique. Ils fragilisent également les récifs coralliens, abris pour de nombreuses espèces, réduisant ainsi la reproduction et la survie des poissons.",
    solutions:"Pour réduire l'acidification des océans, il est essentiel de limiter les émissions de dioxyde de carbone (CO2), principal responsable de ce phénomène.. Réduire les gaz à effet de serre grâce à des énergies renouvelables et des pratiques agricoles durables permettrait de ralentir cette acidification. De plus, protéger et restaurer les écosystèmes marins, comme les coraux et les herbiers, peut aider à absorber le CO2 et maintenir l'équilibre du pH.",
    icon:"stomach.png",
    position: "stomach",
    endpoint: "stomach",
    margin: "0",
    height: 64,
    image: Stomach
  },
  {
    title:"Stratification",
    symptoms:"La peau de Billy est brûlante, il a une fièvre difficile à contrôler.",
    diagnosis:"Le réchauffement de la surface des océans accentue la stratification, car l'eau chaude, moins dense, reste en surface tandis que l'eau froide et dense demeure en profondeur. Ce phénomène bloque les échanges entre ces couches, limitant la circulation des gaz et des nutriments essentiels. Les effets sont directs et multiples:  appauvrissement en oxygène, réduction de la production biologique. Les espèces marines, comme les poissons et les mammifères, souffrent de la raréfaction des ressources et de l’habitat.",
    solutions:"Pour réduire la stratification des océans, il est essentiel de limiter le réchauffement des eaux de surface, principalement causé par le changement climatique. Cela passe par la réduction des émissions de gaz à effet de serre, notamment le dioxyde de carbone, afin d'éviter l'augmentation des températures marines.",
    icon:"headache.png",
    position: "head",
    endpoint: "head",
    margin: "0 25px 585px 0",
    height: 48,
    image: Head
  },
  {
    title:"Mauvaise circulation",
    symptoms:"Billy souffre de blocages dans son système circulatoire, limitant la distribution de nutriments, de chaleur et d’oxygène.",
    diagnosis:"La circulation océanique, vitale pour la régulation du climat terrestre, est en danger à cause des apports excessifs d’eau douce provenant de la fonte des calottes glaciaires et des précipitations accrues. Ces phénomènes réduisent la densité des eaux de surface, ralentissant le processus de downwelling (enfoncement des eaux denses) aux pôles.     Moins de stockage de chaleur et de carbone par l’océan, ce qui amplifie le réchauffement climatique.",
    solutions:"Pour réduire l'impact de la perturbation de la circulation océanique, il est essentiel de limiter les émissions de gaz à effet de serre afin de ralentir la fonte des calottes glaciaires et les changements dans les précipitations. En réduisant la température de la planète, on prévient l'excès d'eau douce qui dilue les océans. De plus, des efforts pour protéger les écosystèmes marins, comme la réduction de la pollution, peuvent aider à maintenir la santé des océans",
    icon:"blood.png",
    position: "left_arm",
    endpoint: "blood",
    margin: "24px 225px 0 0",
    height: 48,
    image: Blood,
  },
  {
    title:"Pollution des eaux",
    symptoms:"Le système immunitaire de Billy est affaibli, incapacité à défendre son corps contre les infections, car il est envahi par des toxines et des éléments étrangers",
    diagnosis:"La pollution plastique et les déchets déversés dans les océans représentent un fléau grandissant pour la santé des océans, affectant la faune et la flore marines. Les plastiques, en particulier, sont une menace persistante et de longue durée en raison de leur lente dégradation. Ces déchets nuisent aux écosystèmes marins, altèrent les chaînes alimentaires et ont des effets toxiques sur la biodiversité. On estime que près de 700 espèces marines ont été affectées par le plastique, en ingérant des microplastiques ou en s’emmêlant dans des objets plastiques. ",
    solutions:"Organiser des campagnes de nettoyage des plages et des fonds marins pour réduire la pollution. Interdire les plastiques à usage unique. Développer des infrastructures de recyclage plus efficaces pour éviter que les plastiques ne finissent dans les océans. Encourager l’utilisation de matériaux biodégradables ou réutilisables",
    icon:"virus.png",
    position: "right_arm",
    endpoint: "virus",
    margin: "0 0 75px 160px",
    height: 64,
    image: Virus
  }
]