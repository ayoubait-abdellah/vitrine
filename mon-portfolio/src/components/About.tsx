import {useTranslation} from "react-i18next";

export default function About() {
    const stack = ['React', 'Vue', 'Node.js', 'REST API', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Git', 'OWASP']
    const { t, i18n } = useTranslation()
    return (
        <section id="apropos"
                 style={{padding: '48px 0', backgroundColor: '#1c1c1e', borderBottom: '1px solid #2a2a2a'}}>
            <div style={{maxWidth: '896px', margin: '0 auto', padding: '0 24px'}}>
                <p style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#555555',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '24px'
                }}>{t('about.title')}</p>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px'}}>
                    <div>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: '500',
                            color: '#f0f0f0',
                            lineHeight: '1.3',
                            marginBottom: '16px'
                        }}>{t('about.heading')}</h2>
                        <p style={{
                            fontSize: '14px',
                            color: '#999999',
                            lineHeight: '1.8',
                            marginBottom: '16px'
                        }}>{t('about.p1')}</p>
                        <p style={{fontSize: '14px', color: '#999999', lineHeight: '1.8'}}>{t('about.p2')}</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
                        <div>
                            <p style={{
                                fontSize: '12px',
                                fontWeight: '500',
                                color: '#555555',
                                marginBottom: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em'
                            }}>{t('about.hardskills')}</p>
                            <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                                {stack.map(s => (
                                    <span key={s} style={{
                                        fontSize: '12px',
                                        color: '#999999',
                                        backgroundColor: '#2a2a2c',
                                        border: '1px solid #3a3a3a',
                                        borderRadius: '20px',
                                        padding: '4px 12px'
                                    }}>{s}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p style={{
                                fontSize: '12px',
                                fontWeight: '500',
                                color: '#555555',
                                marginBottom: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em'
                            }}>{t('about.languages')}</p>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                                {[
                                    {lang: 'Français', level: 'Maternelle'},
                                    {lang: 'Anglais', level: 'C1'},
                                    {lang: 'Espagnol', level: 'B2'},
                                ].map(l => (
                                    <div key={l.lang} style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span style={{fontSize: '13px', color: '#f0f0f0'}}>{l.lang}</span>
                                        <span style={{fontSize: '12px', color: '#555555'}}>{l.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p style={{
                                fontSize: '12px',
                                fontWeight: '500',
                                color: '#555555',
                                marginBottom: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em'
                            }}>{t('about.education')}</p>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                                <div>
                                    <p style={{fontSize: '13px', color: '#f0f0f0'}}>Architecte Logiciel</p>
                                    <p style={{fontSize: '12px', color: '#555555'}}>Epitech Paris — 2019 à 2025</p>
                                </div>
                                <div>
                                    <p style={{fontSize: '13px', color: '#f0f0f0'}}>Baccalauréat Scientifique</p>
                                    <p style={{fontSize: '12px', color: '#555555'}}>Lycée du Parc des Loges — 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}