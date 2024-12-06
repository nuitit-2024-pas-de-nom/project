import Link from "next/link";

export default function Page() {
    return (
      <div className="p-4">

        <p>GAME</p>
        <Link href={"/virus"} className={"btn btn-primary"}>Pollution des eaux</Link>
      </div>    
    );
  }