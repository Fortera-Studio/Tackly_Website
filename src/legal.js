import '@fontsource/fredoka/latin-500.css'
import '@fontsource/fredoka/latin-600.css'
import './legal.css'
import logoUrl from './assets/logo-mark.png'
import { siteConfig } from './config.js'

const documentVersion = '2026-08-07'
const updated = '7. august 2026'
const pageKey = document.body.dataset.legalPage
const { contact, links } = siteConfig

const mailLink = (email) => `<a href="mailto:${email}">${email}</a>`

const operatorDetails = `
  <dl class="details-list">
    <div><dt>Dataansvarlig og tjenesteudbyder</dt><dd>${contact.companyName}</dd></div>
    ${contact.address ? `<div><dt>Adresse</dt><dd>${contact.address}</dd></div>` : ''}
    ${contact.cvr ? `<div><dt>CVR</dt><dd>${contact.cvr}</dd></div>` : ''}
    ${contact.phone ? `<div><dt>Telefon</dt><dd>${contact.phone}</dd></div>` : ''}
    <div><dt>E-mail</dt><dd>${mailLink(contact.email)}</dd></div>
    <div><dt>Support og privatliv</dt><dd>${mailLink(contact.supportEmail)}</dd></div>
  </dl>`

const pages = {
  privacy: {
    // Dated on its own; the terms keep the shared version that the app
    // records when users accept them.
    updated: '25. september 2026',
    version: '2026-09-25',
    eyebrow: 'Jura og privatliv',
    title: 'Privatlivspolitik',
    intro: 'Her kan du se, hvilke personoplysninger Tackly behandler, hvorfor vi gør det, hvem oplysningerne deles med, og hvilke rettigheder du har.',
    sections: [
      {
        id: 'ansvarlig',
        title: '1. Hvem er ansvarlig?',
        body: `<p>Denne politik gælder for Tackly-appen, tackly.dk og support. ${contact.companyName}, som driver tjenesten under navnet Tackly, er dataansvarlig for behandlingen.</p>${operatorDetails}`,
      },
      {
        id: 'oplysninger',
        title: '2. Oplysninger vi behandler',
        body: `
          <p>Afhængigt af hvordan du bruger Tackly, behandler vi følgende kategorier:</p>
          <ul>
            <li><strong>Konto og login:</strong> e-mailadresse, bruger-id og loginoplysninger, som håndteres sikkert af Supabase. Tackly kan ikke se din adgangskode i klartekst. Hvis du vælger Google-login, modtager vi navn, e-mail, profilbillede og de identifikatorer Google stiller til rådighed.</li>
            <li><strong>Profil:</strong> vist navn, profilbillede, profiltekst og valgfrit postområde/by.</li>
            <li><strong>Annoncer:</strong> billeder, titel, beskrivelse, kategori, produktoplysninger, stand, pris, postområde/by og annoncestatus.</li>
            <li><strong>Brug af markedspladsen:</strong> favoritter, samtaler, beskeder, bud, købsanmodninger, reservationer, markering som solgt, anmeldelser og blokeringer.</li>
            <li><strong>Support og sikkerhed:</strong> supportsager, rapporter om indhold eller brugere, den relevante samtale- eller annoncekontekst, advarsler, moderationsafgørelser og interne noter.</li>
            <li><strong>Tekniske oplysninger:</strong> IP-adresse og nødvendige serverlogs hos vores leverandører, enhedsplatform, push-token, sessionsoplysninger samt dato og version for din accept af vilkårene.</li>
          </ul>
          <p>Vi modtager normalt oplysningerne fra dig. Loginoplysninger kan også komme fra Google, hvis du vælger Google-login. Oplysninger om rapporteret indhold kan komme fra en anden bruger.</p>
          <p>Appen bruger ikke din enheds præcise GPS-position. Afstandsfiltret bruger det postområde, du selv skriver eller vælger, og vi gemmer postområdets midtpunkt sammen med annoncen, så afstanden kan beregnes. Du vælger også selv, hvilke billeder appen får adgang til, uploader eller tager med kameraet.</p>
          <p>Tackly er ikke beregnet til følsomme personoplysninger. Del ikke helbredsoplysninger, CPR-numre, betalingskortoplysninger eller andre fortrolige oplysninger i profiler, annoncer, support eller beskeder.</p>`,
      },
      {
        id: 'offentligt',
        title: '3. Hvad andre kan se',
        body: `
          <p>Dit viste navn, profilbillede, profiltekst, postområde/by, anmeldelser og aktive annoncer kan ses af andre brugere. Annoncebilleder ligger teknisk på offentligt tilgængelige filadresser og kan derfor fortsat være tilgængelige for en person, der allerede har gemt det direkte link, indtil filen slettes.</p>
          <p>Beskeder, bud og købsanmodninger er kun tiltænkt deltagerne i samtalen. Autoriserede moderatorer kan få adgang, når det er nødvendigt for support, en rapport, sikkerhed eller håndhævelse af vilkårene. Interne moderationsnoter vises ikke til almindelige brugere.</p>`,
      },
      {
        id: 'formaal',
        title: '4. Formål og retsgrundlag',
        body: `
          <div class="table-wrap"><table>
            <thead><tr><th>Formål</th><th>Retsgrundlag</th></tr></thead>
            <tbody>
              <tr><td>Oprette konto, profil og annoncer samt levere søgning, favoritter, samtaler, bud, reservationer og anmeldelser.</td><td>Nødvendigt for at opfylde aftalen med dig, GDPR artikel 6, stk. 1, litra b.</td></tr>
              <tr><td>Levere support, beskytte tjenesten, forebygge svindel og misbrug, behandle rapporter, moderere indhold og dokumentere accept eller krav.</td><td>Vores legitime interesse i en sikker og velfungerende markedsplads og i at fastlægge, forsvare eller gøre retskrav gældende, artikel 6, stk. 1, litra f.</td></tr>
              <tr><td>Sende valgfrie pushnotifikationer.</td><td>Dit samtykke, artikel 6, stk. 1, litra a. Du kan trække det tilbage i enhedens indstillinger.</td></tr>
              <tr><td>Efterkomme gyldige myndighedskrav og andre pligter efter loven.</td><td>Retlig forpligtelse, artikel 6, stk. 1, litra c.</td></tr>
            </tbody>
          </table></div>
          <p>De oplysninger, der er markeret som nødvendige ved oprettelse eller brug af en funktion, skal bruges for at levere funktionen. Hvis du ikke giver dem, kan vi ikke oprette kontoen eller gennemføre den valgte handling.</p>
          <p>Vi træffer ikke afgørelser med retsvirkning eller tilsvarende væsentlig virkning om dig alene ved automatisk behandling. Annoncer vises som udgangspunkt med de nyeste først; du kan selv vælge prissortering og filtre. Tackly tilbyder aktuelt ikke betalt placering.</p>`,
      },
      {
        id: 'modtagere',
        title: '5. Hvem vi deler oplysninger med',
        body: `
          <p>Vi deler kun oplysninger, når det er nødvendigt for tjenesten eller krævet ved lov:</p>
          <ul>
            <li><strong>Andre brugere og offentligheden</strong> modtager det profil- og annonceindhold, du vælger at offentliggøre. En samtalepart modtager dine beskeder, bud og handelsoplysninger.</li>
            <li><strong>Supabase</strong> leverer login, database, fillagring og backendfunktioner.</li>
            <li><strong>Vercel</strong> hoster tackly.dk og kan behandle IP-adresse, tidspunkt, den besøgte adresse og nødvendige tekniske logs for at levere og beskytte hjemmesiden.</li>
            <li><strong>Expo og Google Firebase Cloud Messaging</strong> formidler pushnotifikationer til din enhed. En notifikation om en ny besked viser afsenderens navn, annoncens titel og begyndelsen af beskeden (højst 140 tegn). Du kan til enhver tid slå notifikationer fra i telefonens indstillinger.</li>
            <li><strong>Google</strong> behandler oplysninger, hvis du selv vælger Google-login.</li>
            <li><strong>Dataforsyningen (DAWA)</strong> modtager søgetekst og tekniske forbindelsesoplysninger, når appen slår danske postområder op. Vi sender ikke din konto-id med forespørgslen.</li>
            <li><strong>Rådgivere og myndigheder</strong> kan modtage oplysninger, når det er nødvendigt for et retskrav eller følger af loven.</li>
          </ul>
          <p>Autoriserede Tackly-administratorer og moderatorer har kun adgang i det omfang, deres opgaver kræver det. Vi sælger ikke dine personoplysninger og bruger dem ikke til tredjepartsannoncering.</p>`,
      },
      {
        id: 'overfoersler',
        title: '6. Overførsler uden for EU/EØS',
        body: `<p>Nogle af vores leverandører er internationale virksomheder. Hvis personoplysninger behandles uden for EU/EØS, sørger vi for et gyldigt overførselsgrundlag, eksempelvis EU-Kommissionens afgørelse om tilstrækkeligt beskyttelsesniveau eller standardkontraktbestemmelser suppleret med relevante sikkerhedsforanstaltninger. Du kan kontakte ${mailLink(contact.privacyEmail)} for information om det konkrete grundlag og en kopi af relevante garantier.</p>`,
      },
      {
        id: 'opbevaring',
        title: '7. Opbevaring og kontosletning',
        body: `
          <p>Vi opbevarer konto-, profil- og markedspladsoplysninger, mens kontoen er aktiv. Når du sletter kontoen, lukkes loginadgangen permanent, og identificerende loginoplysninger fjernes eller utilgængeliggøres hos loginløsningen. Push-tokens, profilbillede, aktive annoncebilleder, favoritter og blokeringer slettes. Annoncer arkiveres, og navn, profiltekst, placering og identificerende annoncetekst erstattes eller fjernes.</p>
          <p>Beskeder, accepterede bud/købsanmodninger, anmeldelser og tilknyttede hændelser kan bevares under betegnelsen “Slettet bruger”, så den anden parts samtale- og handelshistorik stadig giver mening. Rapporter, moderation og supportsager kan bevares, mens de er nødvendige for sikkerhed, dokumentation, tvister og retskrav. Indhold, du selv har skrevet, kan fortsat indeholde oplysninger om dig, selv om profilen er anonymiseret.</p>
          <p>Vi anvender følgende opbevaringsperioder:</p>
          <ul>
            <li><strong>Konto, profil og aktive annoncer:</strong> mens kontoen er aktiv og derefter som beskrevet ovenfor ved kontosletning.</li>
            <li><strong>Support, rapporter og moderation:</strong> normalt i tre år efter, at sagen er lukket eller afgjort. Oplysninger kan opbevares længere, hvis en konkret tvist, sikkerhedshændelse, myndighedssag eller et retskrav gør det nødvendigt.</li>
            <li><strong>Tekniske og sikkerhedsrelaterede logs:</strong> normalt højst 90 dage. Relevante uddrag kan opbevares længere som dokumentation for en konkret sikkerhedshændelse eller et retskrav.</li>
            <li><strong>Dokumentation for accepterede vilkår:</strong> mens kontoen er aktiv og i tre år efter kontosletning.</li>
            <li><strong>Beskeder og handelshistorik:</strong> så længe den anden deltager har behov for historikken, eller oplysningerne er nødvendige for sikkerhed, tvister eller retskrav. Derefter slettes eller anonymiseres de.</li>
          </ul>
          <p>Kopier i tekniske sikkerhedskopier udfases efter den relevante leverandørs normale backupcyklus. Sikkerhedskopier bruges kun til gendannelse efter drifts- eller sikkerhedshændelser; en sletning gennemføres igen, hvis ældre data gendannes.</p>
          <p>Du kan slette kontoen direkte i appen eller følge vejledningen på <a href="${links.deleteAccount}">siden om kontosletning</a>. Sletning begrænser ikke en anden brugers ret til at gemme sin egen kopi af en samtale eller dokumentation for en handel.</p>`,
      },
      {
        id: 'rettigheder',
        title: '8. Dine rettigheder',
        body: `
          <p>Du kan efter omstændighederne bede om indsigt, rettelse, sletning, begrænsning og dataportabilitet eller gøre indsigelse mod behandling baseret på legitime interesser. Når behandling er baseret på samtykke, kan du til enhver tid trække samtykket tilbage uden at påvirke lovligheden før tilbagetrækningen.</p>
          <p>Kontakt ${mailLink(contact.privacyEmail)}. Vi kan bede om de oplysninger, der er nødvendige for at bekræfte din identitet, og svarer normalt senest en måned efter en tilstrækkeligt identificeret anmodning.</p>
          <p>Du kan klage til <a href="https://www.datatilsynet.dk/borger/klage-til-datatilsynet" rel="noopener noreferrer">Datatilsynet</a>, Carl Jacobsens Vej 35, 2500 Valby.</p>`,
      },
      {
        id: 'sikkerhed',
        title: '9. Sikkerhed, hjemmeside og ændringer',
        body: `
          <p>Vi anvender adgangskontrol, krypteret transport, rollebaseret administratoradgang og andre tekniske og organisatoriske foranstaltninger. Ingen internetbaseret tjeneste kan garantere fuldstændig sikkerhed.</p>
          <p>tackly.dk anvender aktuelt ikke analyse-, reklame- eller trackingcookies. Tekniske driftslogs kan blive dannet af hostingudbyderen af hensyn til sikkerhed og stabilitet.</p>
          <p>Vi opdaterer politikken, når tjenesten eller behandlingen ændrer sig. Ved væsentlige ændringer giver vi besked i appen eller på anden passende måde og opdaterer datoen øverst.</p>`,
      },
    ],
  },
  terms: {
    eyebrow: 'Vilkår for markedspladsen',
    title: 'Brugsvilkår',
    intro: 'Vilkårene gælder, når du opretter en konto eller bruger Tackly. Tackly er en markedsplads for private handler med rideudstyr.',
    sections: [
      {
        id: 'operatoer',
        title: '1. Tackly og din aftale med os',
        body: `<p>Disse vilkår er aftalen mellem dig og ${contact.companyName}, som driver tjenesten under navnet Tackly, om adgang til Tackly-appen og de tilhørende tjenester.</p>${operatorDetails}<p>Du accepterer den version, der vises i appen. Privatlivspolitikken beskriver behandlingen af personoplysninger og er ikke en del af selve aftalevilkårene.</p>`,
      },
      {
        id: 'markedsplads',
        title: '2. Tacklys rolle',
        body: `
          <p>Tackly er en kontakt- og annonceplatform for private brugere. Tackly er ikke en webshop, sælger, køber, forhandler, handelsagent eller formidler af betaling og har ingen egne varer til salg. En vare tilbydes alene af den private bruger, der har oprettet annoncen. Tackly ejer, kontrollerer eller undersøger normalt ikke varen og håndterer ikke betaling, fragt, udlevering, forsikring eller ejerskifte.</p>
          <p>De strukturerede funktioner i appen—herunder bud, købsanmodninger, accept, afvisning, reservation og markering som solgt—er alene ikke-bindende værktøjer til at skabe kontakt og koordinere. De udløser ikke betaling eller en bindende handel gennem Tackly. En accept ændrer kun annoncens status til reserveret. Både køber og sælger kan springe fra og ophæve reservationen uden betaling eller krav fra Tackly.</p>
          <p>Hvis parterne ønsker at indgå en endelig handel, skal de selv træffe og dokumentere den endelige aftale og aftale betaling, levering, risiko og eventuelle vilkår. Tackly kan ikke afgøre, om brugernes egne frie beskeder eller handlinger efter almindelig aftaleret i en konkret situation alligevel har skabt en aftale mellem dem.</p>
          <p>Tjenesten er kun beregnet til personer, der handler privat. Du må ikke bruge Tackly som led i erhvervsmæssigt salg. Hvis en sælger reelt handler erhvervsmæssigt, gælder ufravigelige forbrugerregler uanset profilens fremstilling.</p>`,
      },
      {
        id: 'konto',
        title: '3. Alder, konto og adgang',
        body: `
          <p>Du skal være fyldt 18 år eller have din forælders eller værges udtrykkelige tilladelse til at bruge Tackly under dennes ansvar, i det omfang loven tillader det. Tackly foretager aktuelt ikke alderskontrol.</p>
          <p>Du skal give korrekte og aktuelle oplysninger, kun oprette den konto du har brug for, beskytte loginadgangen og straks kontakte os ved mistanke om misbrug. Du må ikke overdrage kontoen eller udgive dig for en anden. Du er ansvarlig for aktivitet, som du med rimelighed kunne have forhindret ved at beskytte kontoen.</p>`,
      },
      {
        id: 'annoncer',
        title: '4. Annoncer og handler',
        body: `
          <p>Du må kun annoncere en vare, du ejer eller har ret til at sælge. Beskrivelse, billeder, stand, pris og væsentlige fejl skal være korrekte. Du skal fortælle modparten, hvis varen ændrer sig eller ikke længere er til salg.</p>
          <p>Private handler er normalt ikke omfattet af forbrugerreglernes 14 dages fortrydelsesret eller den beskyttelse, der gælder ved køb fra en virksomhed. Almindelige aftale- og køberetlige regler kan stadig gælde mellem parterne. Parterne skal selv undersøge modparten og varen, vælge en sikker betalings- og leveringsform, gemme nødvendig dokumentation og løse uenigheder om varen, betaling eller levering.</p>
          <p>Brugt sikkerhedsudstyr som ridehjelme og sikkerhedsveste kan have skjulte skader. Sælger skal beskrive kendte slag, skader og alder loyalt, og køber bør kontrollere varen og producentens anbefalinger før brug.</p>`,
      },
      {
        id: 'forbudt',
        title: '5. Forbudt indhold og adfærd',
        body: `
          <p>Du må ikke bruge Tackly til:</p>
          <ul>
            <li>ulovlige, stjålne, forfalskede, tilbagekaldte eller på anden måde farlige varer,</li>
            <li>levende dyr, lægemidler, dopingmidler, våben eller varer, som kræver en tilladelse eller et kontrolleret salg, som Tackly ikke understøtter,</li>
            <li>vildledende annoncer, svindel, kunstig manipulation af anmeldelser, spam eller omgåelse af sikkerhedsfunktioner,</li>
            <li>chikane, trusler, had, seksuel udnyttelse, diskrimination eller krænkelse af privatliv, ophavsret, varemærker eller andre rettigheder,</li>
            <li>deling af CPR-numre, betalingskortdata, adgangskoder eller unødvendige følsomme oplysninger, eller</li>
            <li>automatiseret scraping, masseoprettelse, reverse engineering eller belastning af tjenesten ud over, hvad ufravigelig lov tillader.</li>
          </ul>
          <p>Du skal overholde gældende produkt-, foder-, markedsførings-, skatte- og øvrige regler for de varer og den aktivitet, du selv står for.</p>`,
      },
      {
        id: 'indhold',
        title: '6. Dit indhold og Tacklys rettigheder',
        body: `
          <p>Du beholder ejerskabet til dit indhold. Du giver Tackly en ikke-eksklusiv, verdensomspændende og vederlagsfri ret til at hoste, kopiere, formatere og vise indholdet i det omfang, det er nødvendigt for at levere, sikre og moderere den funktion, du har valgt. Retten ophører, når indholdet slettes fra aktive systemer, bortset fra nødvendige sikkerhedskopier, lovlig dokumentation og indhold, som fortsat indgår i en anden brugers samtale- eller handelshistorik.</p>
          <p>Du garanterer, at du har ret til at uploade indholdet. Tacklys navn, logo, design, software og redaktionelle indhold tilhører Tackly eller vores licensgivere og må ikke bruges uden tilladelse.</p>`,
      },
      {
        id: 'sortering',
        title: '7. Søgning og sortering',
        body: `<p>Aktive annoncer vises som udgangspunkt med de nyeste først. Brugeren kan søge og filtrere efter blandt andet tekst, kategori, produktoplysninger, pris og postområde/radius samt vælge laveste eller højeste pris. Radius beregnes ud fra centrum af valgte danske postområder og er derfor kun vejledende. Tackly tilbyder aktuelt ikke betalt placering eller skjult sponsoreret rangering.</p>`,
      },
      {
        id: 'moderation',
        title: '8. Rapportering og moderation',
        body: `
          <p>Du kan rapportere en annonce, et billede, en profil, en samtale eller en anmeldelse i appen. Alle kan anmelde formodet ulovligt indhold ved at skrive til ${mailLink(contact.dsaEmail)} med:</p>
          <ul>
            <li>en præcis forklaring på, hvorfor indholdet anses for ulovligt,</li>
            <li>annonce-id, profil-id, direkte link eller andre oplysninger, der gør indholdet let at finde,</li>
            <li>navn og e-mail, medmindre anmeldelsen vedrører materiale, hvor loven tillader anmeldelse uden disse oplysninger, og</li>
            <li>en erklæring om, at oplysningerne efter bedste overbevisning er korrekte og fuldstændige.</li>
          </ul>
          <p>Vi vurderer rapporter sagligt og proportionalt og kan skjule eller fjerne indhold, begrænse funktioner, advare, suspendere eller lukke konti. Vi ser blandt andet på indholdets karakter og lovlighed, risiko for andre, sammenhæng, gentagelser, tidligere afgørelser og brugerens forklaring. Afgørelser træffes ikke alene ved automatiserede værktøjer.</p>
          <p>Ved en moderationsafgørelse forsøger vi at oplyse den berørte bruger om begrundelsen og relevante klagemuligheder, medmindre loven eller hensynet til en undersøgelse forhindrer det. Du kan bede om en ny vurdering via support i appen eller ${mailLink(contact.dsaEmail)}.</p>
          <p>Efter en forudgående advarsel kan vi midlertidigt begrænse brugere, som gentagne gange uploader åbenbart ulovligt indhold, eller personer, der gentagne gange indgiver åbenbart grundløse anmeldelser. Vi ser på antal, andel, alvor, konsekvenser og—når det kan vurderes—hensigten bag adfærden.</p>`,
      },
      {
        id: 'drift',
        title: '9. Drift, ændringer og pris',
        body: `
          <p>Tackly stilles aktuelt til rådighed uden betaling til Tackly. Hvis vi senere tilbyder betalte funktioner, viser vi pris og særlige vilkår, før du bestiller.</p>
          <p>Vi kan vedligeholde, sikkerhedsopdatere, ændre eller afvikle funktioner. Vi bestræber os på rimeligt varsel ved væsentlige forringelser eller ophør, medmindre sikkerhed, lovkrav eller forhold uden for vores kontrol kræver hurtig handling.</p>`,
      },
      {
        id: 'ansvar',
        title: '10. Ansvar',
        body: `
          <p>Tackly er ansvarlig for driften af selve Tackly-tjenesten efter dansk rets almindelige regler. Tackly er ikke part i brugernes varehandel og påtager sig ikke ansvar for en brugers identitet eller handleevne, varens eksistens, lovlighed, sikkerhed, ægthed, stand eller beskrivelse, eller for betaling, levering, ejerskifte, aftalebrud, tab eller en brugers øvrige adfærd. Vi garanterer ikke, at en annonce er korrekt, at en bruger er den, vedkommende udgiver sig for at være, eller at en handel gennemføres.</p>
          <p>Intet i vilkårene begrænser ansvar ved forsæt eller grov uagtsomhed eller rettigheder og ansvar, som ikke lovligt kan fraviges. Brug af råd om sikkerhed, stand eller afstand i appen erstatter ikke din egen undersøgelse.</p>`,
      },
      {
        id: 'ophoer',
        title: '11. Sletning, suspension og ændrede vilkår',
        body: `
          <p>Du kan stoppe brugen og slette kontoen når som helst. Konsekvenserne fremgår af <a href="${links.deleteAccount}">siden om kontosletning</a> og privatlivspolitikken.</p>
          <p>Vi kan begrænse eller lukke en konto ved væsentlig eller gentagen overtrædelse, sikkerhedsrisiko, ulovlig brug eller krav fra en myndighed. Hvor det er muligt, giver vi varsel og mulighed for at forklare dig.</p>
          <p>Vi kan ændre vilkårene, når tjenesten, forretningsmodellen eller loven ændrer sig. Væsentlige ændringer meddeles tydeligt og gælder fremadrettet. Når det er nødvendigt, skal du acceptere den nye version for at fortsætte; ellers kan du slette kontoen.</p>`,
      },
      {
        id: 'lovvalg',
        title: '12. Lovvalg, tvister og kontakt',
        body: `<p>Vilkårene er underlagt dansk ret, uden at det fratager en forbruger den beskyttelse, som følger af ufravigelige regler i forbrugerens bopælsland. Tvister om Tackly-tjenesten søges først løst ved kontakt til ${mailLink(contact.supportEmail)} og kan derefter indbringes for de kompetente domstole. Dette begrænser ikke en forbrugers lovbestemte adgang til domstole eller et relevant klageorgan.</p><p>Tvister om selve varen, betalingen eller leveringen skal som udgangspunkt løses mellem køber og sælger.</p>`,
      },
    ],
  },
  deleteAccount: {
    eyebrow: 'Konto og data',
    title: 'Slet din Tackly-konto',
    intro: 'Du kan slette kontoen direkte i appen eller sende en anmodning, hvis du ikke længere har adgang.',
    sections: [
      {
        id: 'i-appen',
        title: 'Slet i appen',
        body: `<ol><li>Åbn Tackly og log ind.</li><li>Gå til <strong>Profil → Indstillinger → Slet konto</strong>.</li><li>Skriv <strong>SLET</strong>, læs konsekvenserne og bekræft.</li></ol><p>Sletningen logger dig ud og kan ikke fortrydes.</p>`,
      },
      {
        id: 'uden-app',
        title: 'Slet uden adgang til appen',
        body: `<p>Send en e-mail fra den adresse, der er knyttet til din Tackly-konto, og skriv tydeligt, at du ønsker kontoen slettet.</p><p><a class="button" href="mailto:${contact.supportEmail}?subject=Anmodning%20om%20sletning%20af%20Tackly-konto&body=Hej%20Tackly%2C%0A%0AJeg%20%C3%B8nsker%20at%20f%C3%A5%20slettet%20min%20Tackly-konto%20og%20tilknyttede%20data.%0A%0AKontoens%20e-mail%3A%20%0A%0AVenlig%20hilsen">Send sletteanmodning</a></p><p>Hvis du ikke kan skrive fra kontoens e-mailadresse, skal du oplyse den registrerede adresse og forklare situationen. Vi beder kun om det, der er nødvendigt for at bekræfte, at kontoen er din.</p>`,
      },
      {
        id: 'konsekvenser',
        title: 'Hvad bliver slettet eller anonymiseret?',
        body: `<p>Loginadgangen lukkes permanent, og identificerende loginoplysninger fjernes eller utilgængeliggøres hos loginløsningen. Push-token, profilbillede, favoritter, blokeringer og aktive annoncebilleder slettes. Dit viste navn, profiltekst og placering fjernes eller erstattes, og annoncer arkiveres med anonymiseret tekst.</p><p>Beskeder, bud, købsanmodninger, anmeldelser og hændelser i gennemførte eller igangværende samtaler kan bevares under navnet “Slettet bruger”, så den anden parts historik fortsat giver mening. Rapporter, moderation og supportsager kan bevares, når det er nødvendigt for sikkerhed, tvister, retskrav eller lovkrav. Se detaljerne i <a href="${links.privacy}">privatlivspolitikken</a>.</p>`,
      },
      {
        id: 'frist',
        title: 'Behandlingstid og hjælp',
        body: `<p>Sletning i appen starter med det samme. E-mailanmodninger behandles hurtigst muligt og normalt senest en måned efter, at vi har kunnet bekræfte din identitet. Ved en kompliceret anmodning kan GDPR-fristen i særlige tilfælde forlænges; i så fald giver vi besked inden for den første måned.</p><p>Spørgsmål kan sendes til ${mailLink(contact.privacyEmail)}.</p>`,
      },
    ],
  },
}

const page = pages[pageKey] ?? pages.privacy
const pageLinks = [
  ['privacy', 'Privatlivspolitik', links.privacy],
  ['terms', 'Brugsvilkår', links.terms],
  ['deleteAccount', 'Slet konto', links.deleteAccount],
]

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Til Tacklys forside">
      <img src="${logoUrl}" alt="" />
      <span>Tackly</span>
    </a>
    <a class="back-link" href="/">Til forsiden</a>
  </header>
  <main>
    <div class="hero">
      <p class="eyebrow">${page.eyebrow}</p>
      <h1>${page.title}</h1>
      <p class="intro">${page.intro}</p>
      <p class="updated">Senest opdateret ${page.updated ?? updated} · Version ${page.version ?? documentVersion}</p>
    </div>
    <div class="legal-layout">
      <nav aria-label="Juridiske sider">
        ${pageLinks.map(([key, label, href]) => `<a class="${pageKey === key ? 'active' : ''}" href="${href}">${label}</a>`).join('')}
      </nav>
      <article>${page.sections.map(({ id, title, body }) => `<section id="${id}"><h2>${title}</h2>${body}</section>`).join('')}</article>
    </div>
  </main>
  <footer>
    <span>© ${new Date().getFullYear()} ${contact.companyName}${contact.cvr ? ` · CVR ${contact.cvr}` : ''}</span>
    <span><a href="${links.privacy}">Privatliv</a> · <a href="${links.terms}">Vilkår</a> · <a href="mailto:${contact.email}">Kontakt</a></span>
  </footer>
`
