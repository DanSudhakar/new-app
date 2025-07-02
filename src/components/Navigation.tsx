export function Navigation() {
  return (
    <nav className="inline-flex absolute z-10 gap-10 items-center px-10 py-6 border border-solid border-neutral-100 h-[81px] left-[690px] rounded-[40px] top-[293px] w-[503px] max-md:left-2/4 max-md:gap-6 max-md:px-6 max-md:py-4 max-md:w-auto max-md:-translate-x-2/4 max-md:top-[120px] max-sm:hidden">
      <button className="text-2xl text-white cursor-pointer duration-[0.3s] ease-[ease] transition-[color] max-md:text-lg max-sm:text-base">
        Home
      </button>
      <button className="text-2xl text-white cursor-pointer duration-[0.3s] ease-[ease] transition-[color] max-md:text-lg max-sm:text-base">
        Our Story
      </button>
      <button className="text-2xl text-white cursor-pointer duration-[0.3s] ease-[ease] transition-[color] max-md:text-lg max-sm:text-base">
        S&amp;S
      </button>
      <button className="text-2xl text-white cursor-pointer duration-[0.3s] ease-[ease] transition-[color] max-md:text-lg max-sm:text-base">
        Section
      </button>
    </nav>
  );
}
