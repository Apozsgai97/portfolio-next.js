import { Facebook, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="pt-28 text-neutral-50 flex flex-col justify-center items-center h-full">
      <h1 className="font-extrabold text-4xl mb-8 text-center">Contact Me</h1>
      <div className="w-full md:w-8/12 md:flex md:pt-8">
        <article className="w-full flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl mb-8 text-center">
            Send a message
          </h2>
          <form action="" className="w-full px-4 flex flex-col gap-12">
            <label className="input input-bordered flex items-center gap-2 rounded-none">
              Name
              <input
                type="text"
                className="grow"
                placeholder="Adrienn Pozsgai"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 rounded-none">
              Email
              <input
                type="text"
                className="grow"
                placeholder="adrienn.pozsgai@gmail.com"
              />
            </label>
            <textarea
              className="textarea textarea-bordered rounded-none"
              placeholder="Message"
            ></textarea>
            <div className="flex justify-center items-center">
              <button className="btn btn-primary rounded-none bg-pink-200 text-zinc-800 hover:bg-pink-100 w-40">
                Send
              </button>
            </div>
          </form>
        </article>
        <article className="w-full flex flex-col items-center leading-10">
          <h2 className="font-bold text-2xl mb-8 mt-12 md:mt-0 text-center">
            Contact Details
          </h2>
          <h3 className="text-xl font-semibold">Email</h3>
          <p>apozsgai97@gmail.com</p>
          <h3 className="text-xl font-semibold py-3">Socials</h3>
          <div className="flex gap-6 pb-8">
            <a
              href="https://github.com/Apozsgai97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/adrienn-pozsgai-4594232a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.facebook.com/adrienn.pozsgai.7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
