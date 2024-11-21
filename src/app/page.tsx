import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-16">
      <section className="flex flex-col lg:flex-row justify-between items-center bg-zinc-800 border-b-4 border-pink-200">
        <Image
          src="/best.png"
          width={500}
          height={700}
          alt="Picture of the developer, Adrienn Pozsgai"
          className="hidden lg:block grayscale hover:grayscale-0 transition duration-300"
        />
        <div className="lg:px-44 text-neutral-50 text-center lg:text-left p-12 lg:py-0 text-justify">
          <h1 className="font-extrabold text-6xl lg:text-8xl mb-6 hover:text-pink-200 lg:w-96">
            My <span>Portfolio</span>
          </h1>
          <div className="hover:text-pink-200">
            <p className="leading-8 lg:leading-10 mb-4">
              My name is <span className="font-bold">Adrienn Pozsgai.</span>
            </p>
            <p className="leading-8 lg:leading-10 mb-4">
              I am a{" "}
              <span className="font-bold">full-stack JavaScript developer</span>{" "}
              dedicated to building accessible and user-friendly web
              applications.
            </p>
            <p className="leading-8 lg:leading-10 mb-4">
              My passion lies in creating inclusive digital experiences that
              everyone can enjoy.
            </p>
          </div>
          <div className="flex lg:justify-end mt-5">
            <button className="btn btn-primary rounded-none hover:bg-pink-200 hover:text-zinc-800">
              Connect with me!
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-zinc-800 border-b-4 border-pink-200 text-neutral-50 pb-12">
        <h2 className="text-4xl font-bold p-12">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-zinc-800 text-neutral-50">
          {[
            {
              name: "React",
              description: "Building dynamic UIs with components.",
            },
            {
              name: "Next.js",
              description: "Server-side rendering and static site generation.",
            },
            {
              name: "Tailwind CSS",
              description: "Utility-first styling for responsive design.",
            },
            {
              name: "Accessibility",
              description: "Creating inclusive and user-friendly web apps.",
            },
            {
              name: "JavaScript",
              description: "Bringing interactivity and logic to the web.",
            },
            {
              name: "TypeScript",
              description: "Type-safe development for scalable applications.",
            },
          ].map((skill) => (
            <article
              key={skill.name}
              className="relative group p-6 bg-zinc-800 border border-neutral-700 shadow-lg hover:bg-pink-200 hover:text-zinc-800 transition duration-75"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="opacity-0 group-hover:opacity-100 transition duration-75">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
