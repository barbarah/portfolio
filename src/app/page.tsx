import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen max-w-md flex flex-col gap-4">
      <h1 className="text-4xl font-bold mb-4">Welkom!</h1>
      <p  className="text-lg">
        Ik ben Barbara Honhoff, een freelance front-end developer uit Delft met een passie voor het ontwikkelen van innovatieve, gebruiksvriendelijke webervaringen. 
        Gespecialiseerd in JavaScript, React, Next.js, en Tailwind, breng ik meer dan tien jaar ervaring in het tot leven brengen van ideeën door middel van geavanceerde technologie en verfijnd design.
      </p>
      <p  className="text-lg">Voor meer details over mijn professionele achtergrond en projecten, nodig ik u uit om mijn profielen te bezoeken op:</p>
      <div>
        <a href="https://www.linkedin.com/in/barbara-honhoff-325aa241/" target="_blank" rel="noopener noreferrer" className="mr-4">LinkedIn</a>
        <a href="https://github.com/barbarah" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  )
}