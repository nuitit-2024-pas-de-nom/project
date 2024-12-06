import Link from "next/link";

export default function Page() {
    return (
      <div className="p-4">

        <p>GAME</p>
        <Link href={"/heart"} className={"btn btn-primary"}>Désoxygénation</Link>
      </div>    
    );
  }