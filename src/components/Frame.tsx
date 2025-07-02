"use client";

import * as React from "react";
import { StatisticsItem } from "./StatisticsItem";

export default function Frame() {
  return (
    <section className="overflow-hidden relative w-full bg-neutral-950 h-[496px] max-md:h-[400px] max-sm:h-[300px]">
      <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "500px", zIndex: 1, pointerEvents: "none" }}>
        <svg
          id="56:2194"
          width="1362"
          height="502"
          viewBox="0 0 1362 502"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="background-lines"
          style={{ width: "100%", height: "500px", position: "absolute", left: 0, top: 0, zIndex: 1 }}
        >
          <path
            d="M0.714844 2.1271C127.242 140.489 267.198 201.865 448.153 201.865C629.107 201.865 689.897 201.865 913.966 201.865C1138.04 201.865 1273.41 101.819 1360.7 0.708008M0.714844 139.889C131.401 200.094 238.004 226.656 446.96 226.656C655.916 226.656 694.166 226.656 914.455 226.656C1134.74 226.656 1237.1 195.845 1360.7 139.889M0.714844 250.738H1360.7M0.714844 361.233C131.401 301.027 238.004 274.466 446.96 274.466C655.916 274.466 694.166 274.466 914.455 274.466C1134.74 274.466 1237.1 305.277 1360.7 361.233M0.714844 499.348C127.242 360.987 267.198 299.611 448.153 299.611C629.107 299.611 689.897 299.611 913.966 299.611C1138.04 299.611 1273.41 399.657 1360.7 500.768"
            stroke="url(#paint0_linear_56_2194)"
            strokeOpacity="0.68"
          />
          <defs>
            <linearGradient id="paint0_linear_56_2194" x1="1361" y1="251" x2="1.00005" y2="251" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8FE55D" />
              <stop offset="1" stopColor="#D7FF75" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;56:2195&quot; width=&quot;1362&quot; height=&quot;205&quot; viewBox=&quot;0 0 1362 205&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;gradient-mask-1&quot; style=&quot;width: 100%; height: 201px; position: absolute; left: 0; top: 300px; z-index: 2&quot;> <mask id=&quot;mask0_56_2195&quot; style=&quot;mask-type:alpha&quot; maskUnits=&quot;userSpaceOnUse&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;1364&quot; height=&quot;205&quot;> <path d=&quot;M2 201.738C128.527 63.3763 268.483 2 449.438 2C630.393 2 691.182 2 915.252 2C1139.32 2 1274.69 102.047 1361.99 203.157&quot; stroke=&quot;url(#paint0_linear_56_2195)&quot; stroke-width=&quot;3&quot;></path> </mask> <g mask=&quot;url(#mask0_56_2195)&quot;> <path d=&quot;M-49 -2.90234H1L9.78415 29.0658C24.279 81.8168 23.0606 137.652 6.27854 189.72L1 206.098H-49V-2.90234Z&quot; fill=&quot;url(#paint1_linear_56_2195)&quot;></path> </g> <defs> <linearGradient id=&quot;paint0_linear_56_2195&quot; x1=&quot;1362.29&quot; y1=&quot;-46.6105&quot; x2=&quot;2.28517&quot; y2=&quot;-46.6104&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;#992BDC&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;#4056C0&quot;></stop> </linearGradient> <linearGradient id=&quot;paint1_linear_56_2195&quot; x1=&quot;1.00001&quot; y1=&quot;105.367&quot; x2=&quot;-49.0062&quot; y2=&quot;105.504&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;white&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0&quot;></stop> </linearGradient> </defs> </svg>",
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;56:2197&quot; width=&quot;1361&quot; height=&quot;89&quot; viewBox=&quot;0 0 1361 89&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;gradient-mask-2&quot; style=&quot;width: 100%; height: 87px; position: absolute; left: 0; top: 140px; z-index: 2&quot;> <mask id=&quot;mask0_56_2197&quot; style=&quot;mask-type:alpha&quot; maskUnits=&quot;userSpaceOnUse&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;1362&quot; height=&quot;89&quot;> <path d=&quot;M1 1C131.686 61.2055 238.289 87.7668 447.245 87.7668C656.201 87.7668 694.451 87.7668 914.74 87.7668C1135.03 87.7668 1237.38 56.9557 1360.99 1&quot; stroke=&quot;url(#paint0_linear_56_2197)&quot; stroke-width=&quot;2&quot;></path> </mask> <g mask=&quot;url(#mask0_56_2197)&quot;> <path d=&quot;M-57 -12.1807H-7L-3.32644 -4.44061C13.8211 31.6886 12.4527 73.8772 -7 108.819H-57V-12.1807Z&quot; fill=&quot;url(#paint1_linear_56_2197)&quot;></path> </g> <defs> <linearGradient id=&quot;paint0_linear_56_2197&quot; x1=&quot;1361.29&quot; y1=&quot;112.111&quot; x2=&quot;1.28519&quot; y2=&quot;112.111&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;#992BDC&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;#4056C0&quot;></stop> </linearGradient> <linearGradient id=&quot;paint1_linear_56_2197&quot; x1=&quot;-6.99999&quot; y1=&quot;50.5013&quot; x2=&quot;-57.0055&quot; y2=&quot;50.7384&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;white&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0&quot;></stop> </linearGradient> </defs> </svg>",
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;56:2198&quot; width=&quot;1360&quot; viewBox=&quot;0 0 1360 0&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;gradient-mask-3&quot; style=&quot;width: 100%; height: 0px; position: absolute; left: 0; top: 250px; z-index: 2&quot;> <mask id=&quot;mask0_56_2198&quot; style=&quot;mask-type:alpha&quot; maskUnits=&quot;userSpaceOnUse&quot; x=&quot;0&quot; y=&quot;-1&quot; width=&quot;1360&quot; height=&quot;2&quot;> <path d=&quot;M0 0H1359.99&quot; stroke=&quot;url(#paint0_linear_56_2198)&quot;></path> </mask> <g mask=&quot;url(#mask0_56_2198)&quot;> <path d=&quot;M-66 -61.0303H-16L-12.3264 -53.2902C4.82108 -17.161 3.45269 25.0276 -16 59.9697H-66V-61.0303Z&quot; fill=&quot;url(#paint1_linear_56_2198)&quot;></path> </g> <defs> <linearGradient id=&quot;paint0_linear_56_2198&quot; x1=&quot;1360.29&quot; y1=&quot;0.261294&quot; x2=&quot;0.285177&quot; y2=&quot;0.261436&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;#992BDC&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;#4056C0&quot;></stop> </linearGradient> <linearGradient id=&quot;paint1_linear_56_2198&quot; x1=&quot;-16&quot; y1=&quot;1.6517&quot; x2=&quot;-66.0055&quot; y2=&quot;1.88882&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;white&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0&quot;></stop> </linearGradient> </defs> </svg>",
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;56:2199&quot; width=&quot;1362&quot; height=&quot;203&quot; viewBox=&quot;0 0 1362 203&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;gradient-mask-4&quot; style=&quot;width: 100%; height: 201px; position: absolute; left: 0; top: 1px; z-index: 2&quot;> <mask id=&quot;mask0_56_2199&quot; style=&quot;mask-type:alpha&quot; maskUnits=&quot;userSpaceOnUse&quot; x=&quot;0&quot; y=&quot;-1&quot; width=&quot;1364&quot; height=&quot;204&quot;> <path d=&quot;M2 1.41909C128.527 139.781 268.483 201.157 449.438 201.157C630.393 201.157 691.182 201.157 915.252 201.157C1139.32 201.157 1274.69 101.111 1361.99 0&quot; stroke=&quot;url(#paint0_linear_56_2199)&quot; stroke-width=&quot;3&quot;></path> </mask> <g mask=&quot;url(#mask0_56_2199)&quot;> <path d=&quot;M-50 0H0L8.78415 31.9682C23.279 84.7192 22.0606 140.554 5.27854 192.623L0 209H-50V0Z&quot; fill=&quot;url(#paint1_linear_56_2199)&quot;></path> </g> <defs> <linearGradient id=&quot;paint0_linear_56_2199&quot; x1=&quot;1362.29&quot; y1=&quot;250.292&quot; x2=&quot;2.2852&quot; y2=&quot;250.292&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;#992BDC&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;#4056C0&quot;></stop> </linearGradient> <linearGradient id=&quot;paint1_linear_56_2199&quot; x1=&quot;7.08548e-06&quot; y1=&quot;108.269&quot; x2=&quot;-50.0062&quot; y2=&quot;108.406&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;white&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0&quot;></stop> </linearGradient> </defs> </svg>",
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;56:2200&quot; width=&quot;944&quot; height=&quot;524&quot; viewBox=&quot;0 0 944 524&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;green-glow&quot; style=&quot;width: 554px; height: 133px; position: absolute; left: 403px; top: 182px; z-index: 3&quot;> <g filter=&quot;url(#filter0_f_56_2200)&quot;> <path d=&quot;M472 328.442C625.117 328.442 749.243 298.692 749.243 261.995C749.243 225.297 625.117 195.548 472 195.548C318.883 195.548 194.757 225.297 194.757 261.995C194.757 298.692 318.883 328.442 472 328.442Z&quot; fill=&quot;#58FF7E&quot;></path> </g> <defs> <filter id=&quot;filter0_f_56_2200&quot; x=&quot;-0.00273132&quot; y=&quot;0.788345&quot; width=&quot;944.005&quot; height=&quot;522.413&quot; filterUnits=&quot;userSpaceOnUse&quot; color-interpolation-filters=&quot;sRGB&quot;> <feFlood flood-opacity=&quot;0&quot; result=&quot;BackgroundImageFix&quot;></feFlood> <feBlend mode=&quot;normal&quot; in=&quot;SourceGraphic&quot; in2=&quot;BackgroundImageFix&quot; result=&quot;shape&quot;></feBlend> <feGaussianBlur stdDeviation=&quot;97.38&quot; result=&quot;effect1_foregroundBlur_56_2200&quot;></feGaussianBlur> </filter> </defs> </svg>",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 blur-[undefined] h-[511px] w-[345px] z-[4] max-md:w-[250px] max-sm:h-[300px] max-sm:w-[150px]" />
      <div className="absolute top-0 right-0 -scale-x-100 blur-[undefined] h-[511px] w-[345px] z-[4] max-md:w-[250px] max-sm:h-[300px] max-sm:w-[150px]" />

      <div className="flex absolute left-2/4 gap-40 items-start -translate-x-2/4 top-[222px] z-[5] max-md:gap-24 max-md:top-[180px] max-sm:flex-col max-sm:gap-10 max-sm:items-center max-sm:top-[120px]">
        <StatisticsItem value="15+" label="Global Clients" />
        <StatisticsItem value="50+" label="Client Visits" />
      </div>
    </section>
  );
}
