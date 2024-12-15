import Image from "next/image";
export function ProjectsSection() {
  return (
    <section className="border-b-4 border-pink-200 text-neutral-50 pb-12">
      <h2 className="text-4xl font-bold p-12 text-center">My Projects</h2>
      <div>
        <article className="border-2 border-pink-200 m-12 mx-36 flex justify-evenly items-center">
          <Image
            src="/slow-chat.png"
            width={500}
            height={300}
            alt="Picture of the developer, Adrienn Pozsgai"
            className="m-4"
          />
          <div className="p-10">
            <h3 className="text-2xl font-bold pb-2">Slow Chat Application</h3>
            <p className="leading-8 pr-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              maiores quas culpa voluptatem vel ut aliquid praesentium explicabo
              iure impedit ullam eaque assumenda nulla vero dolores rem commodi,
              necessitatibus labore?
            </p>
            <button className="btn btn-primary rounded-none hover:bg-pink-200 hover:text-zinc-800 mt-4">
              Read more
            </button>
          </div>
        </article>
        <article className="border-2 border-pink-200 m-12 mx-36 flex justify-evenly items-center">
          <Image
            src="/includio.png"
            width={500}
            height={300}
            alt="Picture of the developer, Adrienn Pozsgai"
            className="m-4"
          />
          <div className="p-10">
            <h3 className="text-2xl font-bold pb-2">Includio</h3>
            <p className="leading-8 pr-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              maiores quas culpa voluptatem vel ut aliquid praesentium explicabo
              iure impedit ullam eaque assumenda nulla vero dolores rem commodi,
              necessitatibus labore?
            </p>
            <button className="btn btn-primary rounded-none hover:bg-pink-100 hover:text-zinc-800 mt-4">
              Read more
            </button>
          </div>
        </article>
        <article className="border-2 border-pink-200 m-12 mx-36 flex justify-evenly items-center">
          <Image
            src="/voting-app.png"
            width={500}
            height={300}
            alt="Picture of the developer, Adrienn Pozsgai"
            className="m-4"
          />
          <div className="p-10">
            <h3 className="text-2xl font-bold pb-2">Voting app</h3>
            <p className="leading-8 pr-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              maiores quas culpa voluptatem vel ut aliquid praesentium explicabo
              iure impedit ullam eaque assumenda nulla vero dolores rem commodi,
              necessitatibus labore?
            </p>
            <button className="btn btn-primary rounded-none hover:bg-pink-200 hover:text-zinc-800 mt-4">
              Read more
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
