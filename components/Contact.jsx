'use client';

import { useState } from 'react';

const inputStyle = {
  width: '100%', fontFamily: 'inherit', fontSize: 13, fontWeight: 400,
  background: 'rgba(245,239,230,0.06)', color: '#F5EFE6',
  border: 'none', borderBottom: '1px solid rgba(201,168,130,0.25)',
  padding: '14px 0', outline: 'none', transition: 'border-color 300ms ease-out',
};

const CONTACTS = [
  { label: 'Atelier & Showroom', val: "Abidjan, Côte d'Ivoire" },
  { label: 'Téléphone',          val: '+225 00 00 00 00' },
  { label: 'Email',              val: 'contact@tuttolegno.ci' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{ background: '#1C1916', padding: '120px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'start' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#A67C52', marginBottom: 20 }}>Contactez-nous</div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F5EFE6', marginBottom: 28 }}>
            Un projet ? Parlons-en.
          </h2>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: '#7A7470', marginBottom: 48 }}>
            Nos experts sont disponibles pour étudier votre projet, établir un devis sur mesure et vous accompagner de la conception à la pose.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {CONTACTS.map(c => (
              <div key={c.label}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A67C52', marginBottom: 5 }}>{c.label}</div>
                <div style={{ fontSize: 13, fontWeight: 400, color: '#B8B2AA' }}>{c.val}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {sent ? (
            <div style={{ padding: '60px 40px', background: 'rgba(166,124,82,0.08)', border: '1px solid rgba(166,124,82,0.2)', textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A882', marginBottom: 12 }}>Message envoyé</div>
              <div style={{ fontSize: 13, color: '#7A7470', lineHeight: 1.7 }}>Nous vous répondrons dans les plus brefs délais.</div>
              <button onClick={() => setSent(false)} style={{ marginTop: 24, background: 'none', border: '1px solid rgba(201,168,130,0.3)', color: '#C9A882', fontFamily: 'inherit', fontSize: 9, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '10px 20px', cursor: 'pointer' }}>
                Nouveau message
              </button>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div>
                <label style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7A7470', display: 'block', marginBottom: 8 }}>Nom complet</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Jean Assouman" required style={inputStyle}
                  onFocus={e => e.target.style.borderBottomColor = '#A67C52'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(201,168,130,0.25)'} />
              </div>
              <div>
                <label style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7A7470', display: 'block', marginBottom: 8 }}>Adresse email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="jean@exemple.com" required style={inputStyle}
                  onFocus={e => e.target.style.borderBottomColor = '#A67C52'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(201,168,130,0.25)'} />
              </div>
              <div>
                <label style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7A7470', display: 'block', marginBottom: 8 }}>Votre projet</label>
                <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Décrivez votre projet — surface, essence de bois souhaitée, délais…" rows={4} required style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                  onFocus={e => e.target.style.borderBottomColor = '#A67C52'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(201,168,130,0.25)'} />
              </div>
              <button type="submit" style={{
                background: '#A67C52', color: '#F5EFE6', border: 'none', borderRadius: 2,
                fontFamily: 'inherit', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                textTransform: 'uppercase', padding: '16px 36px', cursor: 'pointer', alignSelf: 'flex-start',
                transition: 'background 400ms ease-out',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#7A5230'}
              onMouseLeave={e => e.currentTarget.style.background = '#A67C52'}
              >
                Envoyer la demande
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
