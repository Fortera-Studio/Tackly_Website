import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/fredoka/latin-500.css'
import '@fontsource/fredoka/latin-600.css'
import '@fontsource/dm-sans/latin-500.css'
import '@fontsource/dm-sans/latin-600.css'
import '@fontsource/dm-sans/latin-700.css'
import '@fontsource/manrope/latin-500.css'
import '@fontsource/manrope/latin-600.css'
import '@fontsource/manrope/latin-700.css'
import '@fontsource/manrope/latin-800.css'
import './style.css'
import brandIcon from './assets/app-icon.png'
import browseScreen from './assets/screens/browse.jpg'
import stepPhotos from './assets/screens/step-photos.jpg'
import stepListings from './assets/screens/step-listings.jpg'
import stepOffers from './assets/screens/step-offers.jpg'
import chatThumb from './assets/screens/chat-thumb.jpg'
import { siteConfig } from './config.js'
import { siteHeader } from './site-header.js'

const { name, tagline, description, links, contact, colors } = siteConfig

Object.entries(colors).forEach(([key, value]) => {
  const cssName = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
  document.documentElement.style.setProperty(`--${cssName}`, value)
})

const icon = (name, className = '') => {
  const icons = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5a5.5 5.5 0 0 0 1.1-8.9Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    chat: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5.3 19 2 19 2c1 6-1 15-8 18Z"/><path d="M2 21c0-3 1.9-5.5 5-7"/>',
    camera: '<path d="M14.5 4 16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1.5-3Z"/><circle cx="12" cy="13" r="3"/>',
    tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/>',
    sparkle: '<path d="m12 3 1.3 4.2L17.5 9l-4.2 1.7L12 15l-1.3-4.3L6.5 9l4.2-1.8Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    instagram: '<rect width="18" height="18" x="3" y="3" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>',
  }

  return `<svg class="icon ${className}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`
}

const appleLogo = `
  <svg aria-hidden="true" viewBox="0 0 24 24" class="store-logo" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.1ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z"/>
  </svg>`

const playLogo = `
  <svg aria-hidden="true" viewBox="0 0 24 24" class="store-logo">
    <path fill="#34A853" d="M3.6 2.2a2 2 0 0 0-.5 1.4v16.8c0 .5.2 1 .5 1.4l9.2-9.8Z"/>
    <path fill="#FBBC04" d="m15.9 8.7-3.1 3.3 3.1 3.3 4-2.3c1-.6 1-1.4 0-2Z"/>
    <path fill="#4285F4" d="M3.6 2.2 12.8 12l3.1-3.3L6 2.9c-.9-.5-1.7-.7-2.4-.7Z"/>
    <path fill="#EA4335" d="m3.6 21.8 12.3-6.5-3.1-3.3Z"/>
  </svg>`

// Only networks with a real URL in config.js are shown.
const socialLinks = () =>
  [
    ['instagram', 'Instagram', links.instagram],
    ['facebook', 'Facebook', links.facebook],
  ]
    .filter(([, , href]) => href && !href.startsWith('#'))
    .map(
      ([key, label, href]) =>
        `<a class="social-link ${key}" href="${href}" target="_blank" rel="noopener" aria-label="Tackly på ${label}">${icon(key)}</a>`,
    )
    .join('')

const storeButton = (store) => {
  const isApple = store === 'apple'
  const storeName = isApple ? 'App Store' : 'Google Play'
  const href = isApple ? links.appStore : links.googlePlay

  // Until a real store URL is set in config.js, show the button as "coming soon".
  if (href.startsWith('#')) {
    const label = isApple ? 'Kommer senere til' : 'Kommer snart til'
    return `
    <span class="store-button is-soon" aria-label="Tackly ${label.toLowerCase()} ${storeName}">
      ${isApple ? appleLogo : playLogo}
      <span><small>${label}</small><strong>${storeName}</strong></span>
    </span>`
  }

  return `
    <a class="store-button" href="${href}" target="_blank" rel="noopener" aria-label="Hent Tackly på ${storeName}">
      ${isApple ? appleLogo : playLogo}
      <span><small>${isApple ? 'Hent i' : 'Hent den på'}</small><strong>${storeName}</strong></span>
    </a>`
}

document.querySelector('#app').innerHTML = `
  ${siteHeader({
    brandHref: '#top',
    brandLabel: `${name} – gå til toppen`,
    right: `
      <nav class="desktop-nav" aria-label="Primær navigation">
        <a href="#saadan-virker-det">Sådan virker det</a>
        <a href="#fordele">Fordele</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a class="button button-small desktop-download" href="#download">Hent appen ${icon('arrow')}</a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Åbn menu">${icon('menu')}</button>`,
    below: `
      <nav class="mobile-nav" id="mobile-menu" aria-label="Mobil navigation">
        <a href="#saadan-virker-det">Sådan virker det</a>
        <a href="#fordele">Fordele</a>
        <a href="#faq">FAQ</a>
        <a class="button" href="#download">Hent appen</a>
      </nav>`,
  })}

  <main id="top">
    <section class="hero-section">
      <div class="hero-blob hero-blob-one"></div>
      <div class="hero-blob hero-blob-two"></div>
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <h1>Giv dit rideudstyr <em>nye eventyr.</em></h1>
          <p>${description}</p>
          <div class="hero-actions">
            <a class="button" href="#download">Hent appen ${icon('arrow')}</a>
            <a class="text-link" href="#saadan-virker-det">Se hvordan det virker <span>↓</span></a>
          </div>
          <div class="hero-proof">
            <div class="avatar-stack" aria-hidden="true">
              <span>${icon('heart')}</span><span>${icon('user')}</span><span>${icon('leaf')}</span>
            </div>
            <div><strong>Lavet til ryttere</strong><small>Nemt, overskueligt og helt nede på jorden</small></div>
          </div>
        </div>

        <div class="phone-stage reveal reveal-delay">
          <div class="orbit orbit-one"><span>${icon('heart')}</span></div>
          <div class="orbit orbit-two"><span>${icon('leaf')}</span></div>
          <div class="phone">
            <img src="${browseScreen}" alt="Tackly appen: find brugt rideudstyr fra ryttere i hele Danmark" />
          </div>
          <div class="floating-card floating-sale"><span>${icon('sparkle')}</span><div><strong>Solgt!</strong><small>Dit dækken har fundet et nyt hjem</small></div></div>
          <div class="floating-card floating-rating"><span>★</span><div><strong>En god handel</strong><small>5,0 fra en glad rytter</small></div></div>
        </div>
      </div>
      <div class="hero-wave"></div>
    </section>

    <section class="intro-section" id="saadan-virker-det">
      <div class="container">
        <div class="section-heading centered reveal">
          <span class="kicker">Nemt fra start til stald</span>
          <h2>En god handel på <em>tre skridt</em></h2>
          <p>Tackly samler hele processen, så du kan bruge mindre tid på besvær og mere tid i sadlen.</p>
        </div>
        <div class="steps-grid">
          <article class="step-card reveal">
            <span class="step-number">1</span>
            <div class="step-icon peach">${icon('camera')}</div>
            <h3>Opret din annonce</h3>
            <p>Tag et par billeder, beskriv dit udstyr og vælg en pris. Så er du live.</p>
            <img class="step-shot" src="${stepPhotos}" alt="Tilføj op til 5 billeder af varen" loading="lazy" />
          </article>
          <article class="step-card reveal reveal-delay-short">
            <span class="step-number">2</span>
            <div class="step-icon green">${icon('chat')}</div>
            <h3>Find det rette match</h3>
            <p>Gå på opdagelse, gem favoritter og skriv direkte med andre ryttere.</p>
            <img class="step-shot" src="${stepListings}" alt="Annoncer med pris, titel og placering" loading="lazy" />
          </article>
          <article class="step-card reveal reveal-delay">
            <span class="step-number">3</span>
            <div class="step-icon gold">${icon('sparkle')}</div>
            <h3>Gør en god handel</h3>
            <p>Vælg fast pris eller åbn for bud. Aftal detaljerne, og glæd dig til at udstyret får endnu en tur.</p>
            <img class="step-shot" src="${stepOffers}" alt="Vælg mellem fast pris og åben for bud" loading="lazy" />
          </article>
        </div>
      </div>
    </section>

    <section class="features-section" id="fordele">
      <div class="container">
        <div class="section-heading reveal">
          <span class="kicker">Alt samlet ét sted</span>
          <h2>Skabt af hestefolk.<br /><em>Til hestefolk.</em></h2>
        </div>
        <div class="bento-grid">
          <article class="feature-card feature-large reveal">
            <div class="feature-copy">
              <div class="feature-icon">${icon('search')}</div>
              <h3>Find præcis det, du mangler</h3>
              <p>Filtrér efter kategori, størrelse, mærke og pris. Fra den første pony til den næste stævnesæson.</p>
            </div>
            <div class="filter-demo" aria-hidden="true">
              <div class="filter-search">${icon('search')} Dressursadel</div>
              <div class="filter-chips"><span>17 tommer</span><span>Sort</span><span>2.000–5.000 kr.</span></div>
              <div class="result-row"><i>♞</i><div><small>12 resultater</small><strong>Det rette udstyr er tæt på</strong></div><b>→</b></div>
            </div>
          </article>
          <article class="feature-card safe-card reveal reveal-delay-short">
            <div class="feature-icon">${icon('user')}</div>
            <h3>Se hvem du handler med</h3>
            <p>Profiler, beskeder og anmeldelser giver dig et bedre billede af, hvem der er på den anden side af handlen.</p>
            <div class="safe-seal"><span>★ 5,0</span><strong>Anmeldelser</strong><small>Fra andre ryttere</small></div>
          </article>
          <article class="feature-card community-card reveal">
            <div class="feature-icon">${icon('heart')}</div>
            <h3>Et fællesskab med samme passion</h3>
            <p>Udstyr skifter hænder. Erfaringer og hesteglæde følger med.</p>
            <div class="community-faces" aria-hidden="true"><span>${icon('user')}</span><span>${icon('heart')}</span><span>${icon('chat')}</span><span>${icon('sparkle')}</span><i>+</i></div>
          </article>
          <article class="feature-card message-card reveal reveal-delay-short">
            <div class="feature-icon">${icon('chat')}</div>
            <h3>Snak sammen i appen</h3>
            <p>Stil spørgsmål, få detaljerne på plads, og send bud og modbud direkte i chatten.</p>
            <div class="chat-demo" aria-hidden="true">
              <div class="chat-head">
                <img class="chat-thumb" src="${chatThumb}" alt="" />
                <div><strong>Mette</strong><small>Flex Hoof boots</small></div>
              </div>
              <div class="chat-body">
                <span class="in">Hej! Er de stadig til salg?</span>
                <span class="out">Ja! De er kun brugt få gange.</span>
                <span class="in bid">${icon('tag')}<span><small>Bud</small><strong>800 kr.</strong></span></span>
              </div>
              <div class="chat-input"><span>Skriv en besked...</span><i>${icon('arrow')}</i></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="planet-section">
      <div class="container planet-grid">
        <div class="planet-visual reveal">
          <div class="leaf-circle">${icon('leaf')}</div>
          <div class="planet-ring ring-one"></div>
          <div class="planet-ring ring-two"></div>
          <span class="planet-tag tag-one">Mindre spild</span>
          <span class="planet-tag tag-two">Mere ridetid</span>
          <span class="planet-horse">♞</span>
        </div>
        <div class="planet-copy reveal reveal-delay-short">
          <span class="kicker light">God stil – på flere måder</span>
          <h2>Bedre for budgettet.<br /><em>Bedre for planeten.</em></h2>
          <p>Når rideudstyr får et længere liv, sparer vi både ressourcer og penge. Det giver mening for dig, din hest og den verden, I rider ud i.</p>
          <div class="planet-points">
            <span>${icon('leaf')} Forlæng udstyrets levetid</span>
            <span>${icon('heart')} Gør kvalitet tilgængelig for flere</span>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section" id="faq">
      <div class="container faq-grid">
        <div class="section-heading reveal">
          <span class="kicker">Godt at vide</span>
          <h2>Spørgsmål fra <em>stalden</em></h2>
          <p>Kan du ikke finde svaret? Skriv til os på <a href="mailto:${contact.email}">${contact.email}</a>.</p>
        </div>
        <div class="faq-list reveal reveal-delay-short">
          <details open>
            <summary>Hvornår kan jeg hente Tackly?<span></span></summary>
            <p>Tackly er ude nu til Android på Google Play. iPhone-versionen er på vej til App Store – hold øje her på siden, vi opdaterer, så snart den er klar.</p>
          </details>
          <details>
            <summary>Hvad kan jeg sælge på Tackly?<span></span></summary>
            <p>Alt det udstyr, der hører hestelivet til: udstyr til hest og rytter, beklædning, staldudstyr og meget mere. Det skal selvfølgelig være lovligt, ægte og beskrevet ærligt.</p>
          </details>
          <details>
            <summary>Koster det noget at oprette en annonce?<span></span></summary>
            <p>Du kan altid se de aktuelle vilkår direkte i appen, inden du opretter din annonce. Ingen overraskelser – bare en enkel og gennemskuelig proces.</p>
          </details>
          <details>
            <summary>Hvordan kontakter jeg en sælger?<span></span></summary>
            <p>Du skriver direkte til sælgeren gennem Tacklys beskedfunktion. Her kan I dele detaljer og aftale, hvordan handlen skal foregå.</p>
          </details>
          <details>
            <summary>Er Tackly kun for erfarne ryttere?<span></span></summary>
            <p>Slet ikke. Tackly er for alle med interesse for heste – fra den helt nye ponyfamilie til den rutinerede konkurrencerytter.</p>
          </details>
        </div>
      </div>
    </section>

    <section class="download-section" id="download">
      <div class="container">
        <div class="download-card reveal">
          <div class="download-decor decor-left">♞</div>
          <div class="download-decor decor-right">♡</div>
          <img src="${brandIcon}" alt="Tackly app-ikon" />
          <span class="kicker light">Ude nu</span>
          <h2>${tagline}</h2>
          <p>Hent Tackly gratis på Google Play og bliv en del af Danmarks nye markedsplads for ryttere. iPhone-versionen følger snart i App Store.</p>
          <div class="store-buttons">${storeButton('play')}${storeButton('apple')}</div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-top">
      <div class="footer-brand">
        <a class="brand" href="#top"><span class="brand-mark"><img src="${brandIcon}" alt="" /></span><span>${name}</span></a>
        <p>${tagline}.<br />Lavet med kærlighed til hestelivet.</p>
      </div>
      <div class="footer-links"><strong>Tackly</strong><a href="#saadan-virker-det">Sådan virker det</a><a href="#fordele">Fordele</a><a href="#download">Appen</a></div>
      <div class="footer-links"><strong>Hjælp</strong><a href="#faq">FAQ</a><a href="mailto:${contact.email}">Kontakt os</a><a href="${links.privacy}">Privatlivspolitik</a><a href="${links.terms}">Vilkår</a><a href="${links.deleteAccount}">Slet konto</a><a href="mailto:${contact.dsaEmail}?subject=Anmeldelse%20af%20ulovligt%20indhold%20p%C3%A5%20Tackly">Anmeld ulovligt indhold</a></div>
      <div class="footer-social"><strong>Følg med</strong><div>${socialLinks()}</div></div>
    </div>
    <div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${contact.companyName}. Alle rettigheder forbeholdes.${contact.cvr ? ` CVR: ${contact.cvr}` : ''}</span><span>Skabt til livet med heste <b>♡</b></span></div>
  </footer>
`

const menuButton = document.querySelector('.menu-button')
const mobileMenu = document.querySelector('.mobile-nav')

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  menuButton.setAttribute('aria-label', isOpen ? 'Åbn menu' : 'Luk menu')
  menuButton.innerHTML = icon(isOpen ? 'menu' : 'close')
  mobileMenu.classList.toggle('open', !isOpen)
})

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Åbn menu')
    menuButton.innerHTML = icon('menu')
    mobileMenu.classList.remove('open')
  })
})

document.querySelectorAll('.faq-list details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return
    document.querySelectorAll('.faq-list details').forEach((other) => {
      if (other !== detail) other.open = false
    })
  })
})

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
  { threshold: 0.12 },
)

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

// The page content is rendered by JavaScript, so handle direct links to a
// section after the markup exists (for example tackly.dk/#download).
if (window.location.hash) {
  requestAnimationFrame(() => {
    document.querySelector(window.location.hash)?.scrollIntoView()
  })
}
