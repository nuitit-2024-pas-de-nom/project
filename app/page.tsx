import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Link className={"btn btn-primary"} href={"/show-billy"}>Show Billy</Link>
    </div>
  );
}