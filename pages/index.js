import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Hello World</h1>
            <Link href={"/"}>Home</Link>
            <Link href={"/project"}>Projects</Link>
        </div>
    );
}
