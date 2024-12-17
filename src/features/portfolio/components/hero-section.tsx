import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center bg-zinc-800 border-b-4 border-pink-200">
      <Image
        src="/profile.png"
        width={500}
        height={700}
        alt="Picture of the developer, Adrienn Pozsgai"
        className="hidden lg:block grayscale"
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
            dedicated to building accessible and user-friendly web applications.
          </p>
          <p className="leading-8 lg:leading-10 mb-4">
            My passion lies in creating inclusive digital experiences that
            everyone can enjoy.
          </p>
        </div>
        <div className="flex lg:justify-end mt-5">
          <Link
            href="/contact"
            className="btn btn-primary rounded-none hover:bg-pink-200 hover:text-zinc-800"
          >
            Connect with me!
          </Link>
        </div>
      </div>
    </section>
  );
}
