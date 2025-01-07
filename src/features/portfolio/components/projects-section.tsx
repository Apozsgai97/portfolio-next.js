import Image from "next/image";
export function ProjectsSection() {
  return (
    <section
      className="border-b-4 border-pink-200 text-neutral-50 pb-12"
      id="projects"
    >
      <h2 className="text-4xl font-bold p-12 text-center">My Projects</h2>
      <div className="flex flex-col items-center gap-10">
        <article className="card card-compact md:card-side bg-base-100 w-96 md:w-8/12 shadow-xl md:border-2 md:border-pink-200 rounded-none md:px-4">
          <figure>
            <Image
              src="/includio.png"
              width={500}
              height={300}
              alt="Picture of the developer, Adrienn Pozsgai"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Talent App</h2>
            <p className="max-w-lg text-base leading-7">
              A platform showcasing developers for clients and sales. Developers
              can add projects, skills, and education to their profiles. Admins
              can manage developer scores, and a powerful search function allows
              filtering by name, skill, or education.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary rounded-none hover:bg-pink-200 hover:text-zinc-800 mt-4">
                Check out on GitHub
              </button>
            </div>
          </div>
        </article>
        <article className="card card-compact md:card-side bg-base-100 w-96 md:w-8/12 shadow-xl md:border-2 md:border-pink-200 rounded-none md:px-4">
          <figure>
            <Image
              src="/includio.png"
              width={500}
              height={300}
              alt="Picture of the developer, Adrienn Pozsgai"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Includio</h2>
            <p className="max-w-lg text-base leading-7">
              A platform for businesses to assess and improve their
              accessibility through detailed metrics and feedback. It enables
              businesses to manage accessibility scores, view improvement
              suggestions, and track progress, fostering inclusivity and
              customer satisfaction.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary rounded-none hover:bg-pink-200 hover:text-zinc-800 mt-4">
                Check out on GitHub
              </button>
            </div>
          </div>
        </article>
        <article className="card card-compact md:card-side bg-base-100 w-96 md:w-8/12 shadow-xl  md:border-2 md:border-pink-200 rounded-none md:px-4">
          <figure>
            <Image
              src="/slow-chat.png"
              width={500}
              height={300}
              alt="Picture of the developer, Adrienn Pozsgai"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Slow Chat Application</h2>
            <p className="max-w-lg text-base leading-7">
              A messaging platform that encourages meaningful conversations by
              limiting message interactions. With controlled fetching options
              (daily and weekly), the app promotes slower, more thoughtful
              communication, focusing on quality over speed in digital
              conversations.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary rounded-none hover:bg-pink-200 hover:text-zinc-800 mt-4">
                Check out on GitHub
              </button>
            </div>
          </div>
        </article>
        <article className="card card-compact md:card-side bg-base-100 w-96 md:w-8/12 shadow-xl  md:border-2 md:border-pink-200 rounded-none md:px-4">
          <figure>
            <Image
              src="/voting-app.png"
              width={500}
              height={300}
              alt="Picture of the developer, Adrienn Pozsgai"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Voting app</h2>
            <p className="max-w-lg text-base leading-7">
              An interactive application for organizing and managing elections,
              displaying results, and ensuring transparency with a robust
              database for tracking votes and representatives.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary rounded-none hover:bg-pink-200 hover:text-zinc-800 mt-4">
                Check out on GitHub
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
