import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-16">
      <section className="flex justify-between items-center bg-zinc-800">
        <Image
          src="/best.png"
          width={500}
          height={700}
          alt="Picture of the developer, Adrienn Pozsgai"
          className="grayscale hover:grayscale-0 transition duration-300"
        />
        <div className="px-44 text-neutral-50 ">
          <h1 className="font-extrabold text-8xl w-48 mb-10 hover:text-pink-200">
            My <span>Portfolio</span>
          </h1>
          <div className=" hover:text-pink-200">
            <p className="leading-10">
              My name is <span className="font-bold">Adrienn Pozsgai.</span>
            </p>
            <p className="leading-10">
              I am a{" "}
              <span className="font-bold">
                full-stack JavaScript developer{" "}
              </span>
              dedicated to building accessible and user-friendly web
              applications.
            </p>
            <p className="leading-10">
              My passion lies in creating inclusive digital experiences that
              everyone can enjoy.
            </p>
          </div>
          <div className="flex justify-end mr-5 mt-5">
            <button className="btn btn-primary rounded-none hover:bg-pink-200">
              Connect with me!
            </button>
          </div>
        </div>
      </section>
      <section className="bg-pink-50 flex flex-col items-center text-zinc-900">
        <h2>Technical Skills</h2>
      </section>
    </main>
  );
}
