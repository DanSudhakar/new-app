export function HeroContent() {
  return (
    <section className="flex absolute z-10 flex-col gap-10 items-start left-[257px] top-[525px] w-[934px] max-md:gap-8 max-md:w-4/5 max-md:left-[10%] max-md:top-[250px] max-sm:gap-6 max-sm:left-[5%] max-sm:top-[150px] max-sm:w-[90%]">
      <h1 className="self-stretch text-6xl font-bold max-md:text-5xl max-sm:text-3xl">
        <span className="text-lime-300">Lead Boldly</span>
        <span className="text-white">, Innovate Fearlessly</span>
      </h1>
      <p className="self-stretch text-2xl text-white max-md:text-xl max-sm:text-base">
        Connecting the dots with us. Since the beginning, Deloitte has been
        about creating connections. With our clients, our talent and our
        communities. Connecting with leaders far and wide, we are changing the
        world—making an impact that matters.
      </p>
      <button className="gap-10 px-10 py-6 text-2xl border border-solid transition-transform cursor-pointer border-neutral-100 duration-[0.3s] ease-[ease] rounded-[40px] text-neutral-950 max-md:text-xl max-sm:px-6 max-sm:py-4 max-sm:w-full max-sm:text-lg">
        Discover our services
      </button>
    </section>
  );
}
