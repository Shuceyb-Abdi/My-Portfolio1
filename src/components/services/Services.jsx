import React from "react";
import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Services
        </h1>
        <p className="text-slate-500 text-center md:w-[50%] mx-auto">
        Waxaan bixinaa adeegyo kala duwan oo ku habboon baahiyahaaga teknolojiyadda. 
        Adeegyadayada waxaa ka mid ah horumarinta webka, horumarinta mobilka, hagaajinta UX/UI, 
        iyo adeegyada latalinta teknolojiyadda. Waxaan diiradda saareynaa inaan macaamiisheena 
        siino xalal wanaagsan oo casri ah oo dabooli kara baahidooda gaarka ah.

        </p>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;
