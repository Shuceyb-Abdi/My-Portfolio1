import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const Services = [
  {
    name: "UX research",
    description:
      "    Waxaan sameynaa cilmi-baaris qoto dheer oo ku saabsan khibradda isticmaalaha si aan u fahanno baahiyahooda iyo dabeecadahooda.",
    image: "https://picsum.photos/200/300",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "App Development",
    description:
      " Waxaan ku takhasusay horumarinta codsiyada mobilka ee labada nidaam ee Android iyo iOS. Waxaan abuurnaa codsiyo waxqabad sare leh oo leh naqshad casri ah.",
    image: "https://picsum.photos/200/301",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Web App Development",
    description:
      " Waxaan bixinaa adeegyo horumarinta codsiyada webka oo dhameystiran. Laga bilaabo conceptualization ilaa hirgelinta, waxaan diiradda saareynaa inaan abuurno codsiyo webka oo leh waxqabad sare iyo naqshad cajiib ah.",
    image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Security",
    description:
      "    Amniga waa mudnaanta koowaad ee mashaariicda teknolojiyadda. Waxaan bixinaa adeegyo amni oo dhammeystiran oo ay ka mid yihiin qiimeynta amniga, tijaabinta baaxadda, iyo hirgelinta tallaabooyinka amniga ee looga hortago hanjabaadaha.",
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            style={{backgroundImage: `url(${image})`}}
            className={` ${bgColor} rounded-xl  text-white bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
