import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { ReactNode } from 'react'

type KnownTechProps = {
    tech: {
        icon: ReactNode
        name: string
        startDate: string
    }
}

export const KnownTech = ({ tech}: KnownTechProps) => {
    const relativeTime = getRelativeTimeString(new Date(tech.startDate), 'pt-BR')
    return (
        <div>
<div>
    <p>{tech.name}</p>
    {tech.icon}
</div>
<span>
    {relativeTime}
</span>
        </div>
    )
}