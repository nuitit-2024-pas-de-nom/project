import Link from "next/link";

export default function show() {
    return (
        <div>
            <h1>show</h1>
            <Link href={"/info/heart"} className={"btn btn-primary"}>Heart</Link>
            <Link href={"/info/stomach"} className={"btn btn-primary"}>Liver</Link>
            <Link href={"/info/head"} className={"btn btn-primary"}>Zeub</Link>
        </div>
    )
}