"use client";

import { Facebook, Github, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useState } from "react";

export function ContactSection() {
   const [modalMessage, setModalMessage] = useState("");
   const [modalOpen, setModalOpen] = useState(false);
   const [loading, setloading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setloading(true);

const form = e.target as HTMLFormElement;
try {
    await emailjs.sendForm(
      "service_o0bta0i",
      "template_skswfcb",
      form,
      "1WByYneOlbtV_Wa9V"
    );
    setModalMessage("Email sent successfully!");
    form.reset();
} catch (error) {
    setModalMessage(`Failed to send email. Please try again. ${error}`);
}

setModalOpen(true);
setloading(false);
};
   return (
     <section
       className="py-16 text-neutral-50 flex flex-col justify-center items-center h-full"
       id="contact"
     >
       <h1 className="font-extrabold text-4xl mb-8 text-center">Contact Me</h1>
       <div className="w-full md:w-8/12 md:flex md:pt-8">
         <article className="w-full flex flex-col justify-center items-center">
           <h2 className="font-bold text-2xl mb-8 text-center">
             Send a message
           </h2>
           <form
             className="w-full px-4 flex flex-col gap-12"
             onSubmit={handleSubmit}
           >
             <label className="input input-bordered flex items-center gap-2 rounded-none">
               Name
               <input
                 type="text"
                 id="name"
                 name="from_name"
                 className="grow"
                 placeholder="Adrienn Pozsgai"
                 required
               />
             </label>

             <label className="input input-bordered flex items-center gap-2 rounded-none">
               Email
               <input
                 type="email"
                 id="email"
                 name="from_email"
                 className="grow"
                 placeholder="adrienn.pozsgai@gmail.com"
                 required
               />
             </label>

             <textarea
               className="textarea textarea-bordered rounded-none"
               id="message"
               name="message"
               placeholder="Message"
               required
             ></textarea>

             <div className="flex justify-center items-center">
               <button
                 className="btn btn-primary rounded-none bg-pink-200 text-zinc-800 hover:bg-pink-100 w-40 disabled:bg-white disabled:text-zinc-800"
                 type="submit"
                 disabled={loading}
               >
                 {loading ? "Sending..." : "Send"}
               </button>
             </div>
           </form>

           {modalOpen && (
             <dialog id="my_modal_1" className="modal" open>
               <div className="modal-box bg-zinc-900 rounded-none">
                 <h3 className="font-bold text-lg">{modalMessage}</h3>
                 <div className="modal-action">
                   <button
                     className="btn btn-primary rounded-none hover:bg-pink-200 hover:text-zinc-800"
                     onClick={() => setModalOpen(false)}
                   >
                     Close
                   </button>
                 </div>
               </div>
             </dialog>
           )}
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
