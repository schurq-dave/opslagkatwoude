/* Boeken / reservation flow — simplified */
function BoekenPage({onNavigate}) {
  const [step, setStep] = React.useState(1);
  const [timer, setTimer] = React.useState(30 * 60);

  React.useEffect(() => {
    if (step < 2 || step > 3) return;
    const id = setInterval(() => setTimer(t => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [step]);

  const mm = String(Math.floor(timer / 60)).padStart(2,'0');
  const ss = String(timer % 60).padStart(2,'0');

  return (
    <Section bg="raised" py={64}>
      <div style={{maxWidth: 720, margin:'0 auto'}}>
        {/* progress */}
        <div style={{display:'flex', gap: 8, marginBottom: 32}}>
          {[1,2,3,4].map(n => (
            <div key={n} style={{
              flex: 1, height: 4, borderRadius: 2,
              background: n <= step ? 'var(--green-800)' : 'var(--room-300)',
            }}/>
          ))}
        </div>

        {step >= 2 && step <= 3 && (
          <div style={{
            display:'inline-flex', alignItems:'center', gap: 8,
            padding:'6px 14px', borderRadius: 999,
            background:'var(--oker-100)', border:'1px solid var(--oker-200)',
            fontSize: 13, color:'var(--ink-700)', marginBottom: 24,
          }}>
            <Icon name="clock" size={14}/>
            Container voor jou gereserveerd · {mm}:{ss}
          </div>
        )}

        <Card padding={40}>
          {step === 1 && <Step1 onNext={() => setStep(2)}/>}
          {step === 2 && <Step2 onNext={() => setStep(3)} onBack={() => setStep(1)}/>}
          {step === 3 && <Step3 onNext={() => setStep(4)} onBack={() => setStep(2)}/>}
          {step === 4 && <Step4 onHome={() => onNavigate('home')}/>}
        </Card>
      </div>
    </Section>
  );
}

function Step1({onNext}) {
  return (
    <>
      <Eyebrow>Stap 1 van 4</Eyebrow>
      <h2 style={{fontSize: 32, marginBottom: 8}}>Kies een container</h2>
      <p style={{color:'var(--fg-muted)', marginBottom: 28}}>We hebben één formaat. Kies wanneer je wil beginnen.</p>
      <div style={{
        background:'var(--room-50)', border:'1px solid var(--border)', borderRadius: 8,
        padding: 24, marginBottom: 24,
        display:'grid', gridTemplateColumns:'1fr auto', alignItems:'center', gap: 24,
      }}>
        <div>
          <div style={{fontFamily:'var(--font-serif)', fontSize: 22, fontWeight: 500, marginBottom: 4}}>24 m² container</div>
          <div style={{fontSize: 14, color:'var(--fg-muted)'}}>10 × 2,4 m · eigen slot · 24/7 toegang</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontFamily:'var(--font-serif)', fontSize: 36, fontWeight: 500, lineHeight: 1}}>€175</div>
          <div style={{fontSize: 13, color:'var(--fg-subtle)'}}>/ maand</div>
        </div>
      </div>
      <Field label="Ingangsdatum" type="date" defaultValue="2026-06-01"/>
      <div style={{marginTop: 28, display:'flex', justifyContent:'flex-end'}}>
        <Button variant="primary" size="lg" onClick={onNext}>Reserveer · start 30 min timer <Icon name="arrow" size={18}/></Button>
      </div>
    </>
  );
}

function Step2({onNext, onBack}) {
  return (
    <>
      <Eyebrow>Stap 2 van 4</Eyebrow>
      <h2 style={{fontSize: 32, marginBottom: 8}}>Je gegevens</h2>
      <p style={{color:'var(--fg-muted)', marginBottom: 28}}>Deze staan straks ook op het contract. We vragen niks anders.</p>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 16}}>
        <Field label="Voornaam" defaultValue=""/>
        <Field label="Achternaam" defaultValue=""/>
      </div>
      <Field label="E-mailadres" type="email" placeholder="naam@voorbeeld.nl"/>
      <Field label="Telefoon" type="tel"/>
      <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap: 16}}>
        <Field label="Postcode" defaultValue=""/>
        <Field label="Huisnummer" defaultValue=""/>
      </div>
      <div style={{marginTop: 28, display:'flex', justifyContent:'space-between'}}>
        <Button variant="ghost" onClick={onBack}>Terug</Button>
        <Button variant="primary" size="lg" onClick={onNext}>Volgende · contract <Icon name="arrow" size={18}/></Button>
      </div>
    </>
  );
}

function Step3({onNext, onBack}) {
  return (
    <>
      <Eyebrow>Stap 3 van 4</Eyebrow>
      <h2 style={{fontSize: 32, marginBottom: 8}}>Teken het contract</h2>
      <p style={{color:'var(--fg-muted)', marginBottom: 28}}>Zet je digitale handtekening. Je krijgt een kopie per mail.</p>
      <div style={{
        background:'var(--room-50)', border:'1px dashed var(--border-strong)', borderRadius: 8,
        padding: 40, textAlign:'center', marginBottom: 24,
      }}>
        <div style={{color:'var(--green-800)', marginBottom: 16}}><Icon name="doc" size={40}/></div>
        <div style={{fontFamily:'var(--font-serif)', fontSize: 20, fontWeight: 500, marginBottom: 8}}>Huurcontract — Opslag Katwoude</div>
        <div style={{fontSize: 13, color:'var(--fg-subtle)'}}>DocuSeal · 3 bladzijden · 2 ondertekenaars</div>
      </div>
      <div style={{display:'flex', gap: 12, fontSize: 14, color:'var(--ink-700)', marginBottom: 28}}>
        <input type="checkbox" style={{marginTop: 2}}/>
        <span>Ik ga akkoord met de <a href="#">algemene voorwaarden</a> en de <a href="#">privacyverklaring</a>.</span>
      </div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <Button variant="ghost" onClick={onBack}>Terug</Button>
        <Button variant="accent" size="lg" onClick={onNext}>Teken & betaal <Icon name="arrow" size={18}/></Button>
      </div>
    </>
  );
}

function Step4({onHome}) {
  return (
    <div style={{textAlign:'center', padding:'24px 0'}}>
      <div style={{color:'var(--green-800)', marginBottom: 16, display:'inline-flex'}}><Icon name="check" size={48}/></div>
      <h2 style={{fontSize: 32, marginBottom: 12}}>Je container staat klaar.</h2>
      <p style={{color:'var(--fg-muted)', maxWidth: 440, margin:'0 auto 32px'}}>
        We hebben je een bevestiging, contract en toegangscode gemaild. Welkom in Katwoude.
      </p>
      <Button variant="primary" size="lg" onClick={onHome}>Terug naar home</Button>
    </div>
  );
}

window.BoekenPage = BoekenPage;
