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
        <div className="p-24 text-neutral-50">
          <h1 className="font-extrabold text-8xl w-48 mb-10">
            My <span>Portfolio</span>
          </h1>
          <p>
            My name is Adrienn Pozsgai and I am a full-stack JavaScript developer dedicated to building
            accessible and user-friendly web applications. My passion lies in
            creating inclusive digital experiences that everyone can enjoy.
          </p>
        </div>
      </section>
    </main>
  );
}
