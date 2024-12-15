import { Accessibility, Component, NotebookPen, SendToBack } from "lucide-react";

export function AboutMeSection(){
 return (
   <section className="border-b-4 border-pink-200 text-neutral-50 pb-12 flex flex-col justify-center items-center gap-8">
     <h2 className="text-4xl font-bold pt-12 pb-6 text-center">About me</h2>
     <h3 className="text-2xl font-bold p-36 border-2">Placeholder for video</h3>
     <div className="flex justify-evenly w-full">
       <article className="flex flex-col items-center p-4 gap-6 w-64">
         <Accessibility color="#fbcfe8" size={100} />
         <h3 className="text-2xl font-bold">Accessibility</h3>
         <p className="text-center leading-8">
           Former special education teacher driven to make the web more
           accessible and inclusive for all.
         </p>
       </article>
       <article className="flex flex-col items-center p-4 gap-6 w-64">
         <SendToBack color="#fbcfe8" size={100} />
         <h3 className="text-2xl font-bold">Full-stack</h3>
         <p className="text-center leading-8">
           Full-stack developer skilled in Next.js, Express, PostgreSQL, and
           Drizzle ORM.
         </p>
       </article>
       <article className="flex flex-col items-center p-4 gap-6 w-64">
         <Component color="#fbcfe8" size={100} />
         <h3 className="text-2xl font-bold">UI</h3>
         <p className="text-center leading-8">
           Passionate about designing user interfaces that are intuitive,
           engaging, and visually impactful.
         </p>
       </article>
       <article className="flex flex-col items-center p-4 gap-6 w-64">
         <NotebookPen color="#fbcfe8" size={100} />
         <h3 className="text-2xl font-bold">Planing</h3>
         <p className="text-center leading-8">
           Planning and organizing are as essential in web development as in
           teaching, driving success in every project.
         </p>
       </article>
     </div>
   </section>
 );
}