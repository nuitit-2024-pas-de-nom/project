import Link from "next/link";
import {healthProblems} from "@/data/health-problems";

export default function show() {
    return (
        <div>
            <h1>show</h1>
            {healthProblems.map((problem) => (
                <div key={problem.position}>
                    <Link href={`/${problem.endpoint}`} className="btn btn-primary">
                        {problem.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}