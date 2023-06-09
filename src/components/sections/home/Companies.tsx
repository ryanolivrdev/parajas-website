import Image from "next/image";
import { Heading } from "~/components/elements/Heading";

const companies = [
  {
    name: "Cria",
    image: "/static/companies/cria-amazonia.png",
    link: "https://www.instagram.com/criaamazonia/",
  },
  {
    name: "Multiverse Edu",
    image: "/static/companies/multiverse.png",
    link: "https://multiverseedu.com",
  },
  {
    name: "Zenith Inova",
    image: "/static/companies/zenith.png",
    link: "https://zenithinova.com.br",
  },
  {
    name: "EcoRota",
    image: "/static/companies/eco-rota.svg",
    link: "https://ecorota.com",
  },
];

export function Companies() {
  return (
    <section
      className="flex w-full flex-col items-center bg-white p-8 max-md:gap-4 max-md:p-4"
      id="parceiros"
    >
      <Heading color="text-black-900" className="mb-6 max-sm:text-center">
        Parceiros que acreditam em nós
      </Heading>
      <div className="flex flex-wrap items-center justify-center gap-16">
        {companies.map((company) => (
          <a
            key={company.name}
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={company.image}
              width={150}
              height={112}
              alt={company.name}
              className="transition-transform hover:scale-105"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
