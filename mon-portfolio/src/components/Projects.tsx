import {useTranslation} from "react-i18next";


const projects = [
    {
        name: 'CryptoDashboard',
        desc: {
            fr: 'Plateforme full-stack de suivi crypto avec revue de presse RSS, auth OAuth2 et gestion multi-rôles',
            en: 'Full-stack crypto tracking platform with RSS press review, OAuth2 auth and multi-role management'
        },
        tags: ['React', 'Node.js', 'RSS', 'OAuth2'],
        image: '/ressources/cryptodashboard.png',
        link: ''
    },
    {
        name: 'Epic Road Trip',
        desc: {
            fr: 'Planificateur de voyage full-stack avec suggestions d\'activités, hébergements, restaurants et itinéraires sur carte',
            en: 'Full-stack trip planner with activity suggestions, accommodations, restaurants and map itineraries'
        },
        tags: ['React', 'Node.js', 'Maps', 'Swagger'],
        link: 'https://github.com/ayoubait-abdellah/Roadtrip',
        image: "/ressources/roadtrip.png",
    },
    {
        name: 'Portfolio',
        desc: {fr: 'Portfolio de presentation', en: 'Presentation portfolio'},
        tags: ['React', 'Typescript'],
        link: 'https://github.com/ayoubait-abdellah/vitrine',
        image: "/ressources/portfolio.png",
    },
    {
        name: 'Taxi Driver',
        desc: {
            fr: 'Agent de reinforcement learning sur Frozen Lake — Q-learning, SARSA et Deep Q-Learning avec comparaison de performances',
            en: 'Reinforcement learning agent on Frozen Lake — Q-learning, SARSA and Deep Q-Learning with performance benchmarking'
        },
        tags: ['Python', 'RL', 'Q-Learning', 'Deep Learning'],
        link: 'https://github.com/ayoubait-abdellah/TaxiDriver',
        image: "/ressources/taxidriver.png",
    },
]
export default function Projects() {
    const { t, i18n } = useTranslation();
    return (
        <section id="projets"
                 style={{padding: '48px 0', backgroundColor: '#242426', borderBottom: '1px solid #2a2a2a'}}>
            <div style={{maxWidth: '896px', margin: '0 auto', padding: '0 24px'}}>
                <p style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#555555',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '24px'
                }}>{t('projects.title')}</p>
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    overflowX: 'auto',
                    paddingBottom: '12px',
                    scrollSnapType: 'x mandatory',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none'
                }}>
                    {projects.map(p => (
                        <a key={p.name} href={p.link || undefined} target="_blank" rel="noopener noreferrer" style={{
                            width: '280px',
                            scrollSnapAlign: 'start',
                            backgroundColor: '#2a2a2c',
                            border: '1px solid #3a3a3a',
                            borderRadius: '12px',
                            padding: '18px',
                            flexShrink: 0,
                            textDecoration: 'none',
                            display: 'block',
                            cursor: p.link ? 'pointer' : 'default',
                            opacity: p.link ? 1 : 0.7,
                            transition: 'border-color 0.2s'
                        }}
                           onMouseEnter={e => {
                               if (p.link) (e.currentTarget as HTMLAnchorElement).style.setProperty('border-color', '#555555')
                           }}
                           onMouseLeave={e => {
                               (e.currentTarget as HTMLAnchorElement).style.setProperty('border-color', '#3a3a3a')
                           }}>
                            <div style={{
                                width: '100%',
                                height: '80px',
                                backgroundColor: '#333335',
                                borderRadius: '8px',
                                marginBottom: '12px',
                                border: '1px solid #3a3a3a',
                                overflow: 'hidden'
                            }}>
                                {p.image
                                    ? <img src={p.image} alt={p.name}
                                           style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                                    : <div style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <div style={{
                                            width: '40%',
                                            height: '2px',
                                            backgroundColor: '#4a4a4a',
                                            borderRadius: '2px'
                                        }}></div>
                                    </div>
                                }
                            </div>
                            <p style={{
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#f0f0f0',
                                marginBottom: '4px'
                            }}>{p.name}</p>
                            <p style={{
                                fontSize: '12px',
                                color: '#888888',
                                lineHeight: '1.5',
                                marginBottom: '10px'
                            }}>{i18n.language === 'fr' ? p.desc.fr : p.desc.en}</p>
                            <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                                {p.tags.map(t => (
                                    <span key={t} style={{
                                        fontSize: '11px',
                                        color: '#85B7EB',
                                        backgroundColor: '#0d1f35',
                                        borderRadius: '10px',
                                        padding: '2px 8px'
                                    }}>{t}</span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}