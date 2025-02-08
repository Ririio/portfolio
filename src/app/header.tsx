import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 px-8 shadow-sm border">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold ml-2">
                    <Link href="/">Home</Link> 
                </h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="#">Skills</Link>
                    </li>
                    <li>
                        <Link href="#">Projects</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                    <li>
                        <Link href="#">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}