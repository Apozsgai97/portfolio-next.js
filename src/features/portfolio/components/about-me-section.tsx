import {
  Accessibility,
  Component,
  NotebookPen,
  SendToBack,
} from "lucide-react";

export function AboutMeSection() {
  return (
    <article className="border-b-2 border-[#7A5C65] text-neutral-50 pb-12 flex flex-col justify-center items-center gap-8">
      <h2 className="text-4xl font-bold pt-12 pb-6 text-center">About me</h2>

      <div className="w-full aspect-video md:w-5/12">
        <iframe
          className="w-full h-full shadow-lg"
          src="https://www.youtube.com/embed/s9GTIUsIveU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col items-center gap-5 md:flex-row md:justify-evenly w-full">
        <article className="flex flex-col items-center p-4 gap-6 w-64">
          <Accessibility color="#B28A94" size={100} />
          <h3 className="text-2xl font-bold">Accessibility</h3>
          <p className="text-center">
            Former special education teacher driven to make the web more
            accessible and inclusive for all.
          </p>
        </article>
        <article className="flex flex-col items-center p-4 gap-6 w-64">
          <SendToBack color="#B28A94" size={100} />
          <h3 className="text-2xl font-bold">Full-stack</h3>
          <p className="text-center">
            Full-stack developer skilled in Next.js, Express, PostgreSQL, and
            Drizzle ORM.
          </p>
        </article>
        <article className="flex flex-col items-center p-4 gap-6 w-64">
          <Component color="#B28A94" size={100} />
          <h3 className="text-2xl font-bold">UI</h3>
          <p className="text-center">
            Passionate about designing user interfaces that are intuitive,
            engaging, and visually impactful.
          </p>
        </article>
        <article className="flex flex-col items-center p-4 gap-6 w-64">
          <NotebookPen color="#B28A94" size={100} />
          <h3 className="text-2xl font-bold">Planning</h3>
          <p className="text-center">
            Planning and organizing are as essential in web development as in
            teaching, driving success in every project.
          </p>
        </article>
      </div>
    </article>
  );
}
