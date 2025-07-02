"use client";

import { BackgroundPatterns } from "./BackgroundPatterns";
import { StatisticsBlock } from "./StatisticsBlock";

export const SalesServiceOverview = () => {
  return (
    <>
      <section style={{marginTop:'260px'}} className="relative shrink-0 mx-auto my-0 bg-neutral-950 bg-opacity-0 h-[413px] w-[1360px] max-md:p-5 max-md:w-full max-md:max-w-screen-lg max-md:h-auto max-sm:p-4">
        <header style={{top:'-100px'}} className="absolute -left-6 text-6xl font-semibold text-lime-300 h-[87px] top-[15px] w-[811px] max-md:left-0 max-md:top-5 max-md:w-full max-md:text-5xl max-md:text-center max-sm:top-4 max-sm:text-3xl">
          <span className="text-6xl font-bold text-white max-md:text-5xl max-sm:text-3xl">
            Sales & Service 
          </span>
          <span className="text-6xl font-bold text-lime-300 max-md:text-5xl max-sm:text-3xl">
            &nbsp;Overview
          </span>
        </header>
        <BackgroundPatterns />

        <div className="inline-flex absolute gap-40 items-start px-4 py-0 h-[94px] left-[405px] top-[222px] w-[550px] max-md:left-0 max-md:flex-col max-md:gap-10 max-md:items-center max-md:px-5 max-md:py-0 max-md:w-full max-md:top-[180px] max-sm:gap-8 max-sm:top-[140px]">
          <StatisticsBlock value="2327" label="Number of Practitioners" />
          <StatisticsBlock value="2190" label="Unique Certifications" />
          <StatisticsBlock value="247K" label="Client Service Hours" />
        </div>

      </section>

      {/* below */}
      <section className="relative shrink-0 mx-auto my-0 bg-neutral-950 bg-opacity-0 h-[413px] w-[1360px] max-md:p-5 max-md:w-full max-md:max-w-screen-lg max-md:h-auto max-sm:p-4">
        <BackgroundPatterns />

        <div className="justify-center inline-flex absolute gap-40 items-start px-4 py-0 h-[94px] left-[405px] top-[222px] w-[550px] max-md:left-0 max-md:flex-col max-md:gap-10 max-md:items-center max-md:px-5 max-md:py-0 max-md:w-full max-md:top-[180px] max-sm:gap-8 max-sm:top-[140px]">
          <StatisticsBlock value="15+" label="Number of Practitioners" />
          <StatisticsBlock value="50+" label="Client Service Hours" />
        </div>
      </section>
    </>
  );
};

export default SalesServiceOverview;
