import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-row border m-10">
      <div className="flex flex-1 flex-col justify-center text-center items-center border gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold opacity-70">Hello, I am</h1>
          <h1 className="text-2xl font-bold">Mario Leonardo</h1>
          <h1 className="text-2xl font-bold">Software Developer Student</h1>
        </div>
        <span className="flex flex-col text-2xl p-10 gap-4">
        <p>Software Development Student passionate about web development, automation, and problem-solving. Skilled in .NET, C#, Java, JavaScript, and TypeScript,</p>
<p>with hands-on experience in building web apps, optimizing workflows, and automating processes. Familiar with cloud technologies (AWS, Azure)</p>
<p>and DevOps tools (Docker, GitHub Actions). Excited to contribute to fast-paced, collaborative teams while growing as a developer.</p>
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 border">
        <Image src='/DSC00093.jpg' alt='Mario Leonardo' className="h-1/2 w-1/2 rounded-full object-cover" width={1000} height={1000}  />        
      </div>  
    </div>
  )
}
