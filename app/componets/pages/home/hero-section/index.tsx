import { Button } from "@/app/componets/button";
import { TechBadge } from "@/app/componets/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TbBrandGithub, TbBrandLinkedin, TbBrandFacebook, TbBrandWhatsapp } from 'react-icons/tb';

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/noejunior792',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://facebook.com/noe.dombaxe',
        icon: <TbBrandFacebook />
    },
    {
        url: 'https://www.linkedin.com/in/no%C3%A9-j%C3%BAnior-402569307/',
        icon: <TbBrandLinkedin />
    },
    {
        url: '947101042',
        icon: <TbBrandWhatsapp />
    }
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[750px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-16 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container mx-auto flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Noé Júnior</h2>
                    <p className="text-gray-400 my-6 text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsum nemo accusantium ex, possimus minus eaque cum sit cupiditate sint dolorem, nesciunt illo ea provident dolor tempora eveniet, quasi sed.</p>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <TechBadge key={index} nome="Next.js" />
                        ))}
                    </div>
                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button">
                            Entre em contacto
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={'contact-${index}'}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    width={420}
                    height={404}
                    src="/images/profile-pic.png"
                    alt="Foto de perfil do Noé Júnior"
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb=6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                />
            </div>
        </section>
    );
};
