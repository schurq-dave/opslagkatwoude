/* Werkwijze page */
function WerkwijzePage({onNavigate}) {
  const steps = [
    {n:'01', t:'Reserveer je container online',
     d:'Je kiest een container op onze website. Je krijgt 30 minuten om de reservering af te ronden. Geen account, geen omweg.',
     detail:['Je vult je gegevens in', 'Je kiest een startdatum', 'De container is voor jou gereserveerd, 30 minuten lang']},
    {n:'02', t:'Teken digitaal het contract',
     d:'Het huurcontract komt direct in je mailbox. Via DocuSeal zet je je handtekening. Geen printer, geen scanner, geen envelop.',
     detail:['Contract per mail', 'Digitaal ondertekenen via DocuSeal', 'Kopie blijft bij jou']},
    {n:'03', t:'Betaal via iDEAL',
     d:'De eerste maand betaal je direct via iDEAL. Daarna gaat het automatisch per SEPA incasso. Opzeggen kan elke maand.',
     detail:['Eerste betaling: iDEAL', 'Vervolg: SEPA machtiging', 'Geen opzegtermijn, geen borg']},
    {n:'04', t:'Haal je sleutel op',
     d:'Zodra alles is afgerond krijg je de toegangscode per mail. Kom langs wanneer je wil — de poort is 24/7 open.',
     detail:['Toegangscode per mail', '24/7 toegang tot het terrein', 'Eigen slot, eigen sleutel']},
  ];

  return (
    <>
      <Section bg="room" py={96}>
        <div style={{maxWidth: 720}}>
          <Eyebrow>Werkwijze</Eyebrow>
          <h1 className="display" style={{fontSize: 64, marginBottom: 20}}>
            Van <em style={{color:'var(--green-800)'}}>ik zoek opslag</em> naar <em style={{color:'var(--green-800)'}}>ik heb een container.</em>
          </h1>
          <p className="lead">In vier stappen, volledig online, binnen enkele minuten.</p>
        </div>
      </Section>

      <Section bg="raised" py={96}>
        <div style={{display:'grid', gap: 32}}>
          {steps.map(s => (
            <div key={s.n} style={{
              display:'grid', gridTemplateColumns:'120px 1fr 1fr', gap: 48,
              paddingBottom: 32, borderBottom: '1px solid var(--border)',
            }}>
              <div style={{fontFamily:'var(--font-serif)', fontSize: 72, fontWeight: 500, color:'var(--oker-600)', lineHeight: 1}}>{s.n}</div>
              <div>
                <h2 style={{fontSize: 28, marginBottom: 12}}>{s.t}</h2>
                <p style={{margin: 0, color:'var(--fg-muted)'}}>{s.d}</p>
              </div>
              <ul style={{listStyle:'none', padding: 0, margin: 0, display:'grid', gap: 10}}>
                {s.detail.map(d => (
                  <li key={d} style={{display:'flex', gap: 12, fontSize: 15, color:'var(--ink-900)'}}>
                    <span style={{color:'var(--green-800)', marginTop:2}}><Icon name="check" size={16}/></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="green" py={80}>
        <div style={{textAlign:'center', maxWidth: 640, margin:'0 auto'}}>
          <h2 style={{color:'var(--room-50)', fontSize: 40, marginBottom: 16}}>Klaar om te boeken?</h2>
          <p style={{color:'var(--room-200)', fontSize: 17, margin:'0 0 32px'}}>€175 per maand. Geen borg. Geen opzegtermijn.</p>
          <Button variant="accent" size="lg" onClick={() => onNavigate('boeken')}>
            Reserveer een container <Icon name="arrow" size={18}/>
          </Button>
        </div>
      </Section>
    </>
  );
}

window.WerkwijzePage = WerkwijzePage;
