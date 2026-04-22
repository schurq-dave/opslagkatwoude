/* Header */
function Header({ currentPath, onNavigate }) {
  const link = (path, label) => (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onNavigate(path); }}
      style={{
        padding: '8px 2px',
        fontSize: 15,
        color: currentPath === path ? 'var(--ink-900)' : 'var(--ink-700)',
        fontWeight: currentPath === path ? 600 : 500,
        textDecoration: 'none',
        borderBottom: currentPath === path ? '2px solid var(--green-800)' : '2px solid transparent',
      }}
    >{label}</a>
  );

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#FBF8F2',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: '18px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{display:'block'}}>
          <img src="../../assets/logo.svg" alt="Opslag Katwoude" style={{height: 52, display:'block'}}/>
        </a>
        <nav style={{display: 'flex', gap: 28}}>
          {link('home', 'Home')}
          {link('werkwijze', 'Werkwijze')}
          {link('contact', 'Contact')}
          {link('blog', 'Blog')}
        </nav>
        <button
          onClick={() => onNavigate('boeken')}
          style={{
            fontFamily: 'inherit', fontSize: 15, fontWeight: 500,
            padding: '12px 22px', borderRadius: 6, border: 0, cursor: 'pointer',
            background: 'var(--oker-600)', color: 'var(--ink-900)',
            transition: 'background 200ms',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--oker-700)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--oker-600)'}
        >Reserveer container</button>
      </div>
    </header>
  );
}

/* Footer */
function Footer() {
  return (
    <footer style={{
      background: 'var(--green-800)', color: 'var(--room-50)',
      padding: '64px 32px 28px',
      marginTop: 96,
    }}>
      <div style={{maxWidth: 1320, margin: '0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64}}>
          <div>
            <img src="../../assets/logo-inverse.svg" alt="" style={{height: 52, marginBottom: 20}}/>
            <p style={{fontSize: 15, lineHeight: 1.65, color: 'var(--room-200)', maxWidth: 320, margin: 0}}>
              Opslag naast Hotel Katwoude. Tussen de weilanden. 24 m². €175 per maand.
            </p>
          </div>
          <FooterCol title="Bezoek" links={['Home', 'Werkwijze', 'Contact', 'Blog']}/>
          <FooterCol title="Juridisch" links={['Voorwaarden', 'Privacy', 'Cookies']}/>
          <FooterCol title="Locatie" links={['Langedijk 9', '1145 PW Katwoude', 'Route']} />
        </div>
        <div style={{
          borderTop: '1px solid var(--green-700)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between',
          fontSize: 13, color: 'var(--room-300)',
        }}>
          <span>© 2026 Opslag Katwoude</span>
          <span>KvK 12345678 · BTW NL001234567B01</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({title, links}) {
  return (
    <div>
      <div style={{
        fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
        color: 'var(--oker-500)', marginBottom: 14,
      }}>{title}</div>
      <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gap: 8}}>
        {links.map(l => <li key={l}><a href="#" style={{color:'var(--room-200)', fontSize:14, textDecoration:'none'}}>{l}</a></li>)}
      </ul>
    </div>
  );
}

window.Header = Header;
window.Footer = Footer;
