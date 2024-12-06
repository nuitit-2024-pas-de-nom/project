
import Interceptors from "undici-types/interceptors";
import redirect = Interceptors.redirect;
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <div>
            <Link href={"/show-billy"} className={"btn"}>Show Billy</Link>
            {/*<Image src={"/images/bg-base.png"} alt={"bg"} width={1920} height={1080} />*/}
            {children}
        </div>
    );
}