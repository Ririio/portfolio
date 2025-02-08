export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 px-8 shadow-sm border">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold ml-2">
                    <a href="/">Home</a> 
                </h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}