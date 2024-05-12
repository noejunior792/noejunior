import { SectionTitle } from "@/app/componets/section-title"
import { KnownTech } from "./know-tech"
import { TbBrandNextjs } from "react-icons/tb"

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />
  <div>
    <KnownTech  tech = {{
        icon:<TbBrandNextjs />,
        name: 'Next.js',
        startDate: '2024-05-12'
    }}/>
    </div>  
                    </section>            
    )
}