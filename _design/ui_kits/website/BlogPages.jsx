/* Blog list + detail */

const POSTS = [
  {
    slug:'verhuizen-tijdelijk-opslag',
    cat:'Tips',
    date:'14 maart 2026',
    read:'4 min',
    title:'Verhuizen en even geen ruimte? Zo overbrug je de tussentijd.',
    excerpt:'Je nieuwe huis is nog niet klaar, je oude al leeg. Een container voor een paar maanden is vaak de rustigste oplossing.',
  },
  {
    slug:'zzp-gereedschap-opbergen',
    cat:'Ondernemen',
    date:'02 maart 2026',
    read:'3 min',
    title:'Gereedschap van de zaak thuis opbergen wordt krap. Wat nu?',
    excerpt:'Busje vol, schuur vol, garage vol. Voor ondernemers in Volendam en omgeving is 24 m² meestal ruim genoeg.',
  },
  {
    slug:'bezoekadres-langedijk',
    cat:'Locatie',
    date:'18 februari 2026',
    read:'2 min',
    title:'Zo vind je ons — Langedijk 9, naast Hotel Katwoude.',
    excerpt:'We liggen niet op een industrieterrein, maar tussen de weilanden. Dit is hoe je komt.',
  },
];

function BlogListPage({onNavigate}) {
  return (
    <>
      <Section bg="room" py={80}>
        <div style={{maxWidth: 720}}>
          <Eyebrow>Blog</Eyebrow>
          <h1 style={{fontSize: 56, marginBottom: 16, lineHeight: 1.05}}>Nieuws uit Katwoude.</h1>
          <p className="lead">Over opslag, verhuizen, ondernemen in de regio, en wat er op ons terrein gebeurt.</p>
        </div>
      </Section>
      <Section bg="raised" py={80}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24}}>
          {POSTS.map(p => (
            <a key={p.slug} href="#"
               onClick={(e) => { e.preventDefault(); onNavigate('blog-detail', p.slug); }}
               style={{textDecoration:'none', color:'inherit', display:'block'}}>
              <Card hover padding={0}>
                <div style={{
                  height: 180,
                  background: 'var(--green-800)',
                  borderTopLeftRadius: 10, borderTopRightRadius: 10,
                  backgroundImage: 'url(../../assets/hero-polder-placeholder.svg)',
                  backgroundSize: 'cover', backgroundPosition: 'center',
                }}/>
                <div style={{padding: 28}}>
                  <div style={{display:'flex', gap: 12, fontSize: 12, color:'var(--ink-500)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom: 14, fontWeight: 600}}>
                    <span>{p.cat}</span><span>·</span><span>{p.read}</span>
                  </div>
                  <h3 style={{margin:'0 0 10px', fontSize: 22, lineHeight: 1.2}}>{p.title}</h3>
                  <p style={{margin: '0 0 16px', fontSize: 14, color:'var(--fg-muted)', lineHeight: 1.55}}>{p.excerpt}</p>
                  <div style={{fontSize: 13, color:'var(--ink-500)'}}>{p.date}</div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}

function BlogDetailPage({slug, onNavigate}) {
  const p = POSTS.find(x => x.slug === slug) || POSTS[0];
  return (
    <>
      <Section bg="room" py={64}>
        <div style={{maxWidth: 720, margin:'0 auto'}}>
          <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('blog');}}
             style={{fontSize: 14, color:'var(--fg-muted)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap: 6, marginBottom: 32}}>
             ← Terug naar blog
          </a>
          <div style={{display:'flex', gap: 12, fontSize: 12, color:'var(--ink-500)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom: 20, fontWeight: 600}}>
            <span>{p.cat}</span><span>·</span><span>{p.date}</span><span>·</span><span>{p.read}</span>
          </div>
          <h1 style={{fontSize: 52, marginBottom: 24, lineHeight: 1.1}}>{p.title}</h1>
          <p className="lead" style={{marginBottom: 40}}>{p.excerpt}</p>
          <div style={{borderRadius: 16, overflow:'hidden', border: '1px solid var(--border)', marginBottom: 48}}>
            <img src="../../assets/hero-polder-placeholder.svg" alt="" style={{width:'100%', display:'block'}}/>
          </div>
          <div style={{fontSize: 17, lineHeight: 1.7, color:'var(--ink-900)'}}>
            <p>Soms past het leven niet op één adres. Een nieuwe woning die nog niet klaar is. Een schuur die opeens krap wordt. Een erfenis die ergens heen moet. In zulke momenten hoef je geen groot verhaal te zoeken — gewoon een plek waar je spullen veilig staan.</p>
            <p>Wij hebben 400 containers van 24 m². Eén formaat, één prijs. €175 per maand, maand voor maand opzegbaar. Geen borg, geen opzegtermijn, geen verkoopgesprek. Je boekt online, tekent digitaal, betaalt via iDEAL. Binnen een kwartier heb je een plek.</p>
            <h2>Waarom Katwoude?</h2>
            <p>Omdat je hier niet op een industrieterrein staat. Langedijk 9 ligt tussen de weilanden, aan het Markermeer, naast Hotel Katwoude. Je ruikt het water. Je ziet de koeien. De ruimte is letterlijk zichtbaar.</p>
            <p>Voor mensen uit Volendam, Edam, Monnickendam en Purmerend is het dichtbij. Voor mensen uit Amsterdam-Noord ook. En voor de rest van Waterland helemaal.</p>
          </div>
        </div>
      </Section>
    </>
  );
}

window.BlogListPage = BlogListPage;
window.BlogDetailPage = BlogDetailPage;
