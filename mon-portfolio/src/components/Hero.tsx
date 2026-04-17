import {useTranslation} from "react-i18next";

export default function Hero () {
    const { t } = useTranslation()

    return (
        <section style={{padding: '120px 0 64px', borderBottom: '1px solid #2a2a2a'}}>
            <div style={{maxWidth: '896px', margin: '0 auto', padding: '0 24px'}}>
                <span style={{
                    display: 'inline-block',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#5DCAA5',
                    backgroundColor: '#0d2e25',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    marginBottom: '20px'
                }}>{t('hero.tag')}</span>
                <h1 style={{
                    fontSize: '36px',
                    fontWeight: '500',
                    color: '#f0f0f0',
                    lineHeight: '1.25',
                    marginBottom: '14px'
                }}>
                    {t('hero.title')}<br/><span style={{color: '#555555'}}>{t('hero.subtitle')}</span>
                </h1>
                <p style={{
                    fontSize: '15px',
                    color: '#999999',
                    lineHeight: '1.7',
                    maxWidth: '480px',
                    marginBottom: '32px'
                }}>{t('hero.desc')}</p>
                <div style={{display: 'flex', gap: '10px'}}>
                    <a href="#contact" style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#1c1c1e',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '8px',
                        padding: '10px 20px',
                        textDecoration: 'none'
                    }}>{t('hero.cta_contact')}</a>
                    <a href="#projets" style={{
                        fontSize: '14px',
                        color: '#999999',
                        border: '1px solid #3e3e3e',
                        borderRadius: '8px',
                        padding: '10px 20px',
                        textDecoration: 'none'
                    }}>{t('hero.cta_projects')}</a>
                </div>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '36px'}}>
                    {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'].map(s => (
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
        </section>
    )
}