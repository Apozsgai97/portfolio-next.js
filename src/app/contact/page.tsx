export default function ContactPage() {
  return (
    <section className="pt-20 text-neutral-50 flex flex-col justify-center items-center h-full">
      <h1 className="font-extrabold text-4xl mb-8 text-center">Contact Me</h1>
      <div className="w-full">
        <article className="w-full flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl mb-8 text-center">
            Send a message
          </h2>
          <form
            action=""
            className="w-full md:w-4/12 px-4 flex flex-col gap-12"
          >
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
        <article className="w-full flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl mb-8 text-center">
            Contact Details
          </h2>
        </article>
      </div>
    </section>
  );
}
