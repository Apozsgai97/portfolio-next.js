import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <Image
          src="/best.png"
          width={500}
          height={700}
          alt="Picture of the slow chat application"
          className="grayscale hover:grayscale-0 transition duration-300"
        />
        <h1>My Portfolio</h1>
      </section>
    </main>
  );
}
