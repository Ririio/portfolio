import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-full flex-row border p-5">
      <div className="flex flex-1 flex-col items-center justify-center gap-4 border text-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold opacity-70">Hello, I am</h1>
          <h1 className="text-2xl font-bold">Mario Leonardo</h1>
          <h1 className="text-2xl font-bold">Software Developer Student</h1>
        </div>
        <span className="flex flex-col gap-4 p-10 text-2xl">
          <p>
            Software Development Student passionate about web development, automation, and
            problem-solving. Skilled in .NET, C#, Java, JavaScript, and TypeScript, with hands-on
            experience in building web apps, optimizing workflows, and automating processes.
          </p>
          <p>
            Familiar with cloud technologies (AWS, Azure) and DevOps tools (Docker, GitHub Actions).
            Excited to contribute to fast-paced, collaborative teams while growing as a developer.
          </p>
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 border">
        <h1 className="text-2xl font-bold">Table of Contents</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/pages">Academic Projects</Link>
          </li>
          <li>
            <Link href="/pages">Skills</Link>
          </li>
          <li>
            <Link href="/pages">Hobby</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
