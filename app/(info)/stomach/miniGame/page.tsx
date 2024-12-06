import Link from "next/link";

export default function Page() {
    return (
      <div className="p-4">

        <p>GAME</p>
        <Link href={"/stomach"} className={"btn btn-primary"}>Acidification</Link>
      </div>    
    );
  }