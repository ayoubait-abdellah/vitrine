import {useRef, useState} from 'react';
import emailjs from "@emailjs/browser";
import {EMAILJS_CONFIG} from "../config/emailjs.ts";
import {useTranslation} from "react-i18next";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null)
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    const {t} = useTranslation()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formRef.current) return
        setSending(true)
        try {
            await emailjs.sendForm(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                formRef.current,
                EMAILJS_CONFIG.publicKey
            )
            setSent(true)
        } catch {
            setError(true)
        } finally {
            setSending(false)
        }
    }

    return (
        <section id="contact"
                 style={{padding: '48px 0', backgroundColor: '#242426', borderBottom: '1px solid #2a2a2a'}}>
            <div style={{maxWidth: '896px', margin: '0 auto', padding: '0 24px'}}>
                <p style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#555555',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '24px'
                }}>{t('contact.title')}</p>
                <div style={{
                    backgroundColor: '#2a2a2c',
                    border: '1px solid #3a3a3a',
                    borderRadius: '12px',
                    padding: '32px',
                    maxWidth: '480px'
                }}>
                    <p style={{
                        fontSize: '20px',
                        fontWeight: '500',
                        color: '#f0f0f0',
                        marginBottom: '6px'
                    }}>{t('contact.heading')}</p>
                    <p style={{
                        fontSize: '14px',
                        color: '#999999',
                        lineHeight: '1.6',
                        marginBottom: '24px'
                    }}>{t('contact.desc')}</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div style={{marginBottom: '12px'}}>
                            <label style={{
                                display: 'block',
                                fontSize: '12px',
                                color: '#777777',
                                marginBottom: '5px'
                            }}>{t('contact.name')}</label>
                            <input name="from_name" type="text" required style={{
                                width: '100%',
                                fontSize: '14px',
                                padding: '9px 12px',
                                backgroundColor: '#222224',
                                border: '1px solid #3a3a3a',
                                borderRadius: '8px',
                                color: '#f0f0f0',
                                fontFamily: 'inherit',
                                outline: 'none'
                            }}/>
                        </div>
                        <div style={{marginBottom: '12px'}}>
                            <label style={{
                                display: 'block',
                                fontSize: '12px',
                                color: '#777777',
                                marginBottom: '5px'
                            }}>{t('contact.email')}</label>
                            <input name="from_email" type="email" required style={{
                                width: '100%',
                                fontSize: '14px',
                                padding: '9px 12px',
                                backgroundColor: '#222224',
                                border: '1px solid #3a3a3a',
                                borderRadius: '8px',
                                color: '#f0f0f0',
                                fontFamily: 'inherit',
                                outline: 'none'
                            }}/>
                        </div>
                        <div style={{marginBottom: '12px'}}>
                            <label style={{
                                display: 'block',
                                fontSize: '12px',
                                color: '#777777',
                                marginBottom: '5px'
                            }}>{t('contact.message')}</label>
                            <textarea name="message" required style={{
                                width: '100%',
                                height: '88px',
                                fontSize: '14px',
                                padding: '9px 12px',
                                backgroundColor: '#222224',
                                border: '1px solid #3a3a3a',
                                borderRadius: '8px',
                                color: '#f0f0f0',
                                fontFamily: 'inherit',
                                resize: 'none',
                                outline: 'none'
                            }}/>
                        </div>
                        {sent && <p style={{
                            fontSize: '13px',
                            color: '#5DCAA5',
                            marginBottom: '10px'
                        }}>{t('contact.success')}</p>}
                        {error && <p style={{
                            fontSize: '13px',
                            color: '#E24B4A',
                            marginBottom: '10px'
                        }}>{t('contact.error')}</p>}
                        <button type="submit" disabled={sending} style={{
                            width: '100%',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#1c1c1e',
                            backgroundColor: sending ? '#aaaaaa' : '#f0f0f0',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '11px',
                            cursor: sending ? 'not-allowed' : 'pointer'
                        }}>
                            {sending ? t('contact.sending') : t('contact.send')}
                        </button>
                    </form>
                    <div style={{display: 'flex', gap: '10px', marginTop: '18px'}}>
                        <a href={'https://github.com/ayoubait-abdellah'}>
                            <button style={{
                                fontSize: '12px',
                                color: '#888888',
                                backgroundColor: 'transparent',
                                border: '1px solid #3a3a3a',
                                borderRadius: '8px',
                                padding: '7px 14px',
                                cursor: 'pointer'
                            }}>GitHub
                            </button>
                        </a>
                        <a href={'https://www.linkedin.com/in/ayoub-ait-abdellah-3ba226179/'}>
                            <button style={{
                                fontSize: '12px',
                                color: '#888888',
                                backgroundColor: 'transparent',
                                border: '1px solid #3a3a3a',
                                borderRadius: '8px',
                                padding: '7px 14px',
                                cursor: 'pointer'
                            }}>LinkedIn
                            </button>
                        </a>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" style={{
                            fontSize: '12px',
                            color: '#888888',
                            backgroundColor: 'transparent',
                            border: '1px solid #3a3a3a',
                            borderRadius: '8px',
                            padding: '7px 14px',
                            textDecoration: 'none'
                        }}>CV PDF</a>
                    </div>
                </div>
            </div>
        </section>
    )
}