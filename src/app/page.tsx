import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-16">
      <section className="flex flex-col lg:flex-row justify-between items-center bg-zinc-800 border-b-4 border-pink-200">
        <Image
          src="/profile.png"
          width={500}
          height={700}
          alt="Picture of the developer, Adrienn Pozsgai"
          className="hidden lg:block"
        />
        <div className="lg:px-44 lg:text-left p-12 lg:py-0 text-justify text-neutral-50">
          <h1 className="font-extrabold text-6xl lg:text-8xl mb-6 lg:w-96">
            My <span>Portfolio</span>
          </h1>
          <div>
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
                maiores quas culpa voluptatem vel ut aliquid praesentium
                explicabo iure impedit ullam eaque assumenda nulla vero dolores
                rem commodi, necessitatibus labore?
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
                maiores quas culpa voluptatem vel ut aliquid praesentium
                explicabo iure impedit ullam eaque assumenda nulla vero dolores
                rem commodi, necessitatibus labore?
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
                maiores quas culpa voluptatem vel ut aliquid praesentium
                explicabo iure impedit ullam eaque assumenda nulla vero dolores
                rem commodi, necessitatibus labore?
              </p>
              <button className="btn btn-primary rounded-none hover:bg-pink-200 hover:text-zinc-800 mt-4">
                Read more
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
