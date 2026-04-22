/* Contact page */
function ContactPage() {
  const [sent, setSent] = React.useState(false);
  return (
    <Section bg="room" py={96}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 80}}>
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 style={{fontSize: 56, marginBottom: 24, lineHeight: 1.05}}>
            Vragen? Stuur een bericht.
          </h1>
          <p className="lead" style={{maxWidth: 440, marginBottom: 48}}>
            We lezen alles en reageren meestal binnen een dag. Voor acute zaken kun je bellen tijdens kantooruren.
          </p>
          <div style={{display:'grid', gap: 24}}>
            <ContactLine icon="mapPin" label="Bezoekadres" value="Langedijk 9, 1145 PW Katwoude"/>
            <ContactLine icon="phone"  label="Telefoon" value="0299 — 00 00 00"/>
            <ContactLine icon="mail"   label="Mail" value="hallo@opslagkatwoude.nl"/>
            <ContactLine icon="clock"  label="Kantoor" value="Ma–vr · 09:00–17:00"/>
          </div>
        </div>

        <Card padding={40}>
          {sent ? (
            <div style={{textAlign:'center', padding:'40px 0'}}>
              <div style={{color:'var(--green-800)', marginBottom: 16}}><Icon name="check" size={40}/></div>
              <h3 style={{marginBottom: 8}}>Bedankt voor je bericht.</h3>
              <p style={{margin: 0, color:'var(--fg-muted)'}}>We nemen binnen een dag contact met je op.</p>
            </div>
          ) : (
            <>
              <h3 style={{margin:'0 0 24px', fontSize: 22}}>Schrijf een bericht</h3>
              <Field label="Naam" defaultValue=""/>
              <Field label="E-mailadres" type="email" placeholder="naam@voorbeeld.nl"/>
              <Field label="Telefoon (optioneel)" type="tel"/>
              <Field label="Bericht" textarea rows={5}/>
              <Button variant="primary" size="lg" onClick={() => setSent(true)}>
                Verstuur bericht <Icon name="arrow" size={18}/>
              </Button>
            </>
          )}
        </Card>
      </div>
    </Section>
  );
}

function ContactLine({icon, label, value}) {
  return (
    <div style={{display:'grid', gridTemplateColumns:'32px 1fr', gap: 16, alignItems:'flex-start'}}>
      <div style={{color:'var(--green-800)', marginTop: 4}}><Icon name={icon} size={20}/></div>
      <div>
        <div style={{fontSize: 12, fontWeight: 600, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--ink-500)', marginBottom: 4}}>{label}</div>
        <div style={{fontSize: 16, color:'var(--ink-900)'}}>{value}</div>
      </div>
    </div>
  );
}

function Field({label, type='text', textarea, rows=3, ...rest}) {
  const common = {
    width: '100%', fontFamily: 'inherit', fontSize: 15, padding: '11px 14px',
    background: 'var(--room-50)', border: '1px solid var(--border)', borderRadius: 6,
    color: 'var(--ink-900)', boxSizing: 'border-box', outline: 'none',
    transition: 'border-color 200ms, box-shadow 200ms', fontWeight: 400,
  };
  const [f, setF] = React.useState(false);
  const style = f ? {...common, borderColor:'var(--green-800)', boxShadow:'0 0 0 3px rgba(201,169,97,0.3)'} : common;
  return (
    <div style={{marginBottom: 16}}>
      <label style={{display:'block', fontSize: 13, fontWeight: 500, color:'var(--ink-900)', marginBottom: 6}}>{label}</label>
      {textarea
        ? <textarea rows={rows} style={{...style, resize:'vertical'}} onFocus={()=>setF(true)} onBlur={()=>setF(false)} {...rest}/>
        : <input type={type} style={style} onFocus={()=>setF(true)} onBlur={()=>setF(false)} {...rest}/>}
    </div>
  );
}

window.ContactPage = ContactPage;
window.Field = Field;
