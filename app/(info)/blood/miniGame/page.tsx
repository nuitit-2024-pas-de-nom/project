import Link from "next/link";

export default function Page() {
    return (
      <div className="p-4">

        <p>GAME</p>
        <Link href={"/blood"} className={"btn btn-primary"}>Mauvaise circulation</Link>
      </div>    
    );
  }