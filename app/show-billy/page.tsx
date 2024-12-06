import Link from "next/link";

export default function show() {
    return (
        <div>
            <h1>show</h1>
            <Link href={"/heart"} className={"btn btn-primary"}>Heart</Link>
            <Link href={"/liver"} className={"btn btn-primary"}>Liver</Link>
            <Link href={"/zeub"} className={"btn btn-primary"}>Zeub</Link>
            <Link href={"/head"} className={"btn btn-primary"}>Head</Link>

        </div>
    )
}