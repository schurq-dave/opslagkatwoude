/* Home page */
function HomePage({onNavigate}) {
  return (
    <>
      {/* HERO */}
      <Section bg="raised" py={72}>
        <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center'}}>
          <div>
            <Eyebrow><span style={{color:'var(--oker-700)'}}>Katwoude · Langedijk 9</span></Eyebrow>
            <h1 className="display" style={{marginBottom: 24, fontSize: 72, lineHeight: 1.05}}>
              Gewoon een container.<br/>
              <span style={{color: 'var(--green-800)'}}>Gewoon opslag.</span>
            </h1>
            <p className="lead" style={{maxWidth: 480, marginBottom: 32}}>
              24 m². €175 per maand. Vandaag geregeld. Naast Hotel Katwoude, tussen de weilanden.
            </p>
            <div style={{display:'flex', gap: 12}}>
              <Button variant="accent" size="lg" onClick={() => onNavigate('boeken')}>
                Reserveer container <Icon name="arrow" size={18}/>
              </Button>
              <Button variant="ghost" size="lg" onClick={() => onNavigate('werkwijze')}>
                Bekijk werkwijze
              </Button>
            </div>
          </div>
          <div>
            <img src="../../assets/hero-polder-placeholder.svg" alt=""
              style={{width:'100%', borderRadius: 16, display:'block'}}/>
          </div>
        </div>
      </Section>

      {/* PROPOSITIE */}
      <Section bg="room" py={96}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 32}}>
          {[
            {icon:'mapPin',  k:'Dichtbij',  v:'Naast Hotel Katwoude. Binnen 7 km van Volendam, Edam, Monnickendam, Purmerend.'},
            {icon:'euro',    k:'Voordelig', v:'€175 per maand, alles inbegrepen. Scherpste prijs in de regio.'},
            {icon:'clock',   k:'Direct',    v:'24/7 online te regelen. Geen wachttijd, geen verkoopgesprek.'},
            {icon:'shield',  k:'Degelijk',  v:'400+ zeecontainers, afgesloten terrein, duidelijke voorwaarden.'},
          ].map(p => (
            <div key={p.k}>
              <div style={{color:'var(--green-800)', marginBottom: 16}}>
                <Icon name={p.icon} size={28}/>
              </div>
              <h3 style={{margin: '0 0 8px'}}>{p.k}</h3>
              <p style={{margin: 0, fontSize: 15, color:'var(--fg-muted)'}}>{p.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTAINER CARD */}
      <Section bg="raised" py={96}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 64, alignItems:'center'}}>
          <div>
            <Eyebrow>Eén formaat. Eén prijs.</Eyebrow>
            <h2 style={{fontSize: 44, marginBottom: 20}}>24 m². Dat is genoeg voor een woning, voorraad, of een busje spullen.</h2>
            <p style={{fontSize: 17, color:'var(--fg-muted)', marginBottom: 28, maxWidth: 480}}>
              Eén maat zeecontainer: 10 meter bij 2,4 meter. Schoon, droog, afgesloten. Je krijgt je eigen slot. Je komt wanneer je wil.
            </p>
            <ul style={{listStyle:'none', padding:0, margin:'0 0 32px', display:'grid', gap: 10, maxWidth: 440}}>
              {['10 × 2,4 meter (24 m²)', 'Eigen slot, eigen sleutel', '24/7 toegang tot het terrein', 'Afgesloten, verlicht, cameratoezicht', 'Geen opzegtermijn. Zeg op wanneer je klaar bent.'].map(i => (
                <li key={i} style={{display:'flex', gap: 12, fontSize: 16, color:'var(--ink-900)'}}>
                  <span style={{color:'var(--green-800)', marginTop:2}}><Icon name="check" size={18}/></span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <Card padding={40} hover>
            <Eyebrow>Prijs per maand</Eyebrow>
            <div style={{display:'flex', alignItems:'baseline', gap: 8, marginBottom: 8}}>
              <span style={{fontFamily:'var(--font-display)', fontSize: 88, fontWeight: 700, lineHeight: 1, color:'var(--ink-900)', letterSpacing: '-0.03em'}}>€175</span>
              <span style={{fontSize: 17, color:'var(--fg-subtle)'}}>/ maand</span>
            </div>
            <p style={{margin: '0 0 24px', fontSize: 14, color:'var(--fg-subtle)'}}>Incl. BTW. Maandelijkse SEPA incasso.</p>
            <hr style={{border:0, borderTop:'1px solid var(--border)', margin:'0 0 24px'}}/>
            <div style={{display:'grid', gap: 10, marginBottom: 28, fontSize: 15}}>
              <Row l="Oppervlakte" r="24 m²"/>
              <Row l="Afmetingen" r="10 × 2,4 m"/>
              <Row l="Opzegtermijn" r="Geen"/>
              <Row l="Borg" r="€0"/>
              <Row l="Aansluiting" r="Geen stroom"/>
            </div>
            <Button variant="accent" size="lg" onClick={() => onNavigate('boeken')}>
              Reserveer deze container <Icon name="arrow" size={18}/>
            </Button>
          </Card>
        </div>
      </Section>

      {/* STEPS PREVIEW */}
      <Section bg="green" py={96}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 64, alignItems:'flex-start'}}>
          <div>
            <div style={{fontSize:13, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--oker-500)', marginBottom: 16}}>
              Werkwijze
            </div>
            <h2 style={{color:'var(--room-50)', fontSize: 44, marginBottom: 20}}>Van "ik zoek opslag" naar "ik heb een container" in vier stappen.</h2>
            <p style={{fontSize: 17, color:'var(--room-200)', margin:'0 0 32px', maxWidth: 440}}>
              Alles digitaal. Geen papier, geen balie, geen wachttijd. Je kunt vandaag nog terecht.
            </p>
            <Button variant="accent" size="lg" onClick={() => onNavigate('werkwijze')}>
              Bekijk de volledige werkwijze <Icon name="arrow" size={18}/>
            </Button>
          </div>
          <div style={{display:'grid', gap: 16}}>
            {[
              ['01','Reserveer online','Kies een container. 30 minuten bedenktijd.'],
              ['02','Teken digitaal','Contract via DocuSeal. Niks te printen.'],
              ['03','Betaal via iDEAL','Eerste maand. Daarna automatische incasso.'],
              ['04','Haal je sleutel op','Kom langs. Of haal de code uit je mail.'],
            ].map(([n,t,d]) => (
              <div key={n} style={{
                display:'grid', gridTemplateColumns:'56px 1fr', gap: 20,
                padding:'20px 24px',
                background: 'var(--green-700)',
                borderRadius: 8,
                border: '1px solid var(--green-600)',
              }}>
                <div style={{fontFamily:'var(--font-display)', fontSize: 28, color:'var(--oker-500)', fontWeight: 700}}>{n}</div>
                <div>
                  <div style={{fontFamily:'var(--font-display)', fontSize: 20, fontWeight: 600, color:'var(--room-50)', marginBottom: 4}}>{t}</div>
                  <div style={{fontSize: 14, color:'var(--room-200)'}}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* LOCATIE */}
      <Section bg="warm" py={96}>
        <div style={{height: 4, width: 48, background:'var(--oker-600)', margin:'0 auto 32px'}}/>
        <div style={{textAlign:'center', marginBottom: 48}}>
          <Eyebrow>Locatie</Eyebrow>
          <h2 style={{fontSize: 44, marginBottom: 12}}>Tussen de weilanden, aan het Markermeer.</h2>
          <p className="lead" style={{maxWidth: 560, margin:'0 auto'}}>Langedijk 9, 1145 PW Katwoude. Naast Hotel Katwoude, tussen Volendam en Monnickendam.</p>
        </div>
        <div style={{borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)'}}>
          <img src="../../assets/hero-polder-placeholder.svg" alt="" style={{width:'100%', display:'block', height: 320, objectFit:'cover'}}/>
        </div>
      </Section>
    </>
  );
}

function Row({l, r}) {
  return (
    <div style={{display:'flex', justifyContent:'space-between', color:'var(--fg-muted)'}}>
      <span>{l}</span><span style={{color:'var(--ink-900)', fontWeight: 500}}>{r}</span>
    </div>
  );
}

window.HomePage = HomePage;
