import {useState} from 'react'
import {useTranslation} from 'react-i18next'

export default function Navbar() {
    const { t, i18n } = useTranslation()
    const [open, setOpen] = useState(false)

    const links = [
        {label: t('nav.projects'), href: '#projets'},
        {label: t('nav.skills'), href: '#competences'},
        {label: t('nav.about'), href: '#apropos'},
    ]

    const toggleLang = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')

    return (
        <header className="fixed top-0 left-0 right-0 z-50"
                style={{backgroundColor: '#242426', borderBottom: '1px solid #2e2e2e'}}>
            <div className=" mx-auto px-6 h-14 flex items-center justify-around">

                <span style={{color: '#f0f0f0', fontSize: '15px', fontWeight: '500'}}>Ayoub A.</span>

                <nav className="hidden md:flex items-center gap-8">
                    {links.map(l => (
                        <a key={l.href} href={l.href}
                           style={{color: '#999999', fontSize: '13px', textDecoration: 'none'}}>{l.label}</a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <button onClick={toggleLang} style={{
                        fontSize: '12px',
                        fontWeight: '500',
                        color: '#999999',
                        backgroundColor: '#2a2a2c',
                        border: '1px solid #3a3a3a',
                        borderRadius: '8px',
                        padding: '5px 10px',
                        cursor: 'pointer'
                    }}>
                        {i18n.language === 'fr' ? 'EN' : 'FR'}
                    </button>
                    <a href="#contact" style={{
                        color: '#f0f0f0',
                        fontSize: '13px',
                        fontWeight: '500',
                        padding: '6px 14px',
                        border: '1px solid #3e3e3e',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        backgroundColor: '#2e2e30'
                    }}>{t('nav.contact')}</a>
                </div>

                <button style={{background: 'none', border: 'none', cursor: 'pointer', color: '#888888'}}
                        className="md:hidden" onClick={() => setOpen(!open)}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        {open
                            ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
                            : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
                        }
                    </svg>
                </button>

            </div>

            {open && (
                <div style={{borderTop: '1px solid #2e2e2e', backgroundColor: '#242426', padding: '16px 24px'}}
                     className="md:hidden flex flex-col gap-4">
                    {links.map(l => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                           style={{color: '#999999', fontSize: '13px', textDecoration: 'none'}}>{l.label}</a>
                    ))}
                    <a href="#contact" onClick={() => setOpen(false)} style={{
                        color: '#f0f0f0',
                        fontSize: '13px',
                        fontWeight: '500',
                        textDecoration: 'none'
                    }}>{t('nav.contact')}</a>
                    <button onClick={toggleLang} style={{
                        fontSize: '12px',
                        color: '#999999',
                        backgroundColor: 'transparent',
                        border: '1px solid #3a3a3a',
                        borderRadius: '8px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                        width: 'fit-content'
                    }}>
                        {i18n.language === 'fr' ? 'EN' : 'FR'}
                    </button>
                </div>
            )}
        </header>
    )
}