import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-800">
      <section className="flex justify-between items-center">
        <Image
          src="/best.png"
          width={500}
          height={700}
          alt="Picture of the developer, Adrienn Pozsgai"
          className="grayscale hover:grayscale-0 transition duration-300"
        />
        <div className="px-44 text-neutral-50">
          <h1 className="font-extrabold text-8xl w-48 mb-10">
            My <span>Portfolio</span>
          </h1>
          <p className="leading-10">
            My name is <span className="font-bold">Adrienn Pozsgai.</span>
          </p>
          <p className="leading-10">
            I am a{" "}
            <span className="font-bold">full-stack JavaScript developer </span>
            dedicated to building accessible and user-friendly web applications.
            <p>
              My passion lies in creating inclusive digital experiences that
              everyone can enjoy.
            </p>
          </p>
          <div className="flex justify-end mr-5">
          <button >Connect with me!</button>
          </div>
        </div>
      </section>
    </main>
  );
}
