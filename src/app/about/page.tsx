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
      <div className="flex flex-1 flex-col justify-center border text-center">
        <h2 className="mb-4 text-3xl font-bold">🎓 Education</h2>
        <div className="flex flex-col justify-center gap-4 border px-10">
          <div>
            <div className="rounded-l p-4 shadow">
              <h3 className="text-xl font-semibold">Honours Bachelor of Technology</h3>
              <p className="text-gray-700">Software Development (2024–2026)</p>
              <p className="text-gray-700">Seneca Polytechnic</p>
              <p>
                <strong>GPA:</strong> 4.0
              </p>
              <p>
                🏅<strong>Honours Award Recipient (2024)</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold">Honours Bachelor of Technology</h3>
              <p className="text-gray-700">Software Development (2024–2026)</p>
              <p className="text-gray-700">Seneca Polytechnic</p>
              <p>
                <strong>GPA:</strong> 4.0
              </p>
              <p>
                🏅<strong>Honours Award Recipient (2024)</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
