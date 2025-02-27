import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <article className="flex flex-col lg:flex-row justify-between items-center bg-zinc-800 border-b-2 border-[#7A5C65]">
      <Image
        src="/profile.png"
        width={500}
        height={700}
        alt="Picture of the developer, Adrienn Pozsgai"
        className="h-96 object-cover md:h-auto"
      />
      <div className="lg:px-44 lg:text-left p-12 lg:py-0 text-neutral-50">
        <h1 className="font-extrabold text-6xl space-y-7 lg:text-8xl mb-12">
          Full-Stack <div className="pt-4">Developer</div>
        </h1>
        <div>
          <p className="leading-8 lg:leading-2 mb-4">
            I’m <span className="font-bold">Adrienn Pozsgai</span>, a Full-Stack
            JavaScript Developer based in Stockholm, Sweden. I specialize in
            building accessible, user-friendly applications that make a real
            difference.
          </p>
          <p className="leading-8 lg:leading-2 mb-4">
            Before transitioning into tech, I worked in
            <span className="font-bold"> special education</span>, where I
            developed strong problem-solving skills, adaptability, and a deep
            understanding of user needs.
          </p>
          <p className="leading-8 lg:leading-2 mb-4">
           I’m always eager to learn and improve—whether it’s
            exploring new technologies, refining user experiences, or enhancing
            accessibility in digital spaces.
          </p>
        </div>
        <div className="flex lg:justify-end mt-5">
          <Link
            href="/#contact"
            className="btn btn-primary rounded-none hover:bg-[#7A5C65]"
          >
            Connect with me!
          </Link>
        </div>
      </div>
    </article>
  );
}
