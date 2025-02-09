import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between border px-8 py-4 shadow-sm">
      <div className="flex items-center">
        <h1 className="ml-2 text-2xl font-bold">
          <Link href="/">Mario Leonardo</Link>
        </h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">About</Link>
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
