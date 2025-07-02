import { StatisticProps } from "./types";

export const StatisticsBlock: React.FC<StatisticProps> = ({ value, label }) => {
  return (
    <article className="flex relative flex-col gap-6 justify-end items-center w-16 max-md:items-center max-md:w-full">
      <h3 className="absolute text-6xl font-medium tracking-tight text-center text-blue-50 h-[70px] leading-[64px] left-[-50px] top-[-3px] w-[164px] max-md:relative max-md:top-0 max-md:left-0 max-md:w-full max-sm:text-5xl max-sm:h-[50px]">
        {value}
      </h3>
      <p className="absolute h-5 text-base tracking-tight leading-6 text-center text-white left-[-37px] top-[91px] w-[138px] max-md:relative max-md:left-0 max-md:top-2.5 max-md:w-full max-sm:text-sm max-sm:leading-5">
        {label}
      </p>
    </article>
  );
};
