import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500">
            <p>
            Waxaan ahay khabiir xirfad leh oo leh waayo-aragnimo sanado badan ku saabsan 
            horumarinta software-ka iyo naqshadeynta webka.
            </p>
            <br />
            <p>
            Waxaan si joogto ah u raadiyaa fursado cusub oo aan ku kobciyo xirfadahayga 
            iyo inaan la kulmo caqabado cusub oo xiiso leh. Fadlan download-garee CV-gayga 
            ama ila soo xiriir si aad wax badan iga ogaato.

            </p>
            <div className="">
              <a href="#" className="primary-btn inline-block my-6 mr-6">
               {" "}
              
                Download Resume
              </a>
              <a
                href="tel:+252612998800" className="outline-btn inline-block">
                {" "}
                
              Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
