/* Reusable primitives */

function Button({variant='primary', size='md', children, onClick, ...props}) {
  const base = {
    fontFamily: 'inherit', fontWeight: 500, borderRadius: 6, border: '1px solid transparent',
    cursor: 'pointer', transition: 'background 200ms, border-color 200ms, color 200ms',
    display: 'inline-flex', alignItems: 'center', gap: 8, lineHeight: 1.1,
  };
  const sizes = {
    sm: {padding: '8px 14px', fontSize: 13},
    md: {padding: '12px 22px', fontSize: 15},
    lg: {padding: '16px 28px', fontSize: 16},
  };
  const variants = {
    primary: {background: 'var(--green-800)', color: 'var(--room-50)'},
    accent:  {background: 'var(--oker-600)', color: 'var(--ink-900)'},
    ghost:   {background: 'transparent', color: 'var(--ink-900)', borderColor: 'var(--border)'},
  };
  const hover = {
    primary: 'var(--green-900)',
    accent:  'var(--oker-700)',
    ghost:   'transparent',
  };
  const [h, setH] = React.useState(false);
  const style = {...base, ...sizes[size], ...variants[variant]};
  if (h) {
    if (variant === 'primary' || variant === 'accent') style.background = hover[variant];
    if (variant === 'ghost') style.borderColor = 'var(--ink-900)';
  }
  return (
    <button style={style} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} {...props}>
      {children}
    </button>
  );
}

function Eyebrow({children, color='var(--ink-500)'}) {
  return <div style={{
    fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
    color, marginBottom: 16,
  }}>{children}</div>;
}

function Section({bg='room', children, py=96}) {
  const bgs = {
    room:   '#FBF8F2',          /* lichtste basis — bijna wit met een ademhaling warmte */
    raised: 'var(--room-50)',   /* #F8F4EB — iets meer warmte, voor subtiele secties */
    warm:   'var(--room-100)',  /* #F2ECE0 — oorspronkelijke zandkleur, nu ACCENT */
    sunken: 'var(--room-200)',
    green:  'var(--green-800)',
  };
  return (
    <section className="ok-sec" style={{background: bgs[bg], padding: `${py}px 32px`, color: bg === 'green' ? 'var(--room-50)' : 'inherit'}}>
      <div className="ok-sec-inner" style={{maxWidth: 1320, margin: '0 auto'}}>{children}</div>
    </section>
  );
}

function Card({children, padding=28, hover=false, ...rest}) {
  const [h, setH] = React.useState(false);
  return (
    <div
      onMouseEnter={() => hover && setH(true)}
      onMouseLeave={() => hover && setH(false)}
      style={{
        background: 'var(--room-50)',
        border: `1px solid ${h ? 'var(--ink-300)' : 'var(--border)'}`,
        borderRadius: 10,
        padding,
        transition: 'border-color 200ms, box-shadow 200ms',
        boxShadow: h
          ? '0 2px 4px rgba(31,28,24,0.06), 0 4px 12px rgba(31,28,24,0.06)'
          : '0 1px 2px rgba(31,28,24,0.04)',
      }}
      {...rest}
    >{children}</div>
  );
}

function Icon({name, size=20, stroke='currentColor'}) {
  const icons = {
    container: <g><rect x="3" y="7" width="18" height="12" rx="1"/><path d="M7 7v12M11 7v12M15 7v12M19 7v12"/></g>,
    mapPin: <g><path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/></g>,
    euro: <g><path d="M4 10h12M4 14h9M19 6a7.7 7.7 0 00-5.2-2A7.9 7.9 0 006 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/></g>,
    key: <g><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l3 3"/></g>,
    clock: <g><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>,
    doc: <g><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M14 3v6h6"/></g>,
    shield: <g><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/></g>,
    arrow: <g><path d="M5 12h14M13 6l6 6-6 6"/></g>,
    check: <g><path d="M4 12l5 5L20 6"/></g>,
    phone: <g><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></g>,
    mail: <g><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></g>,
  };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}
      fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{flexShrink: 0}}>
      {icons[name] || null}
    </svg>
  );
}

window.Button = Button;
window.Eyebrow = Eyebrow;
window.Section = Section;
window.Card = Card;
window.Icon = Icon;
