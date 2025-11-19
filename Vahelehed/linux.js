const linuxShortcuts = [
  // --- Linux Terminal ---
  { os: 'Linux', category: 'Terminal', description: 'Avab uue terminali vahelehe.', keys: ['Ctrl', 'Shift', 'T'] },
  { os: 'Linux', category: 'Terminal', description: 'Sulgeb aktiivse vahelehe.', keys: ['Ctrl', 'Shift', 'W'] },
  { os: 'Linux', category: 'Terminal', description: 'Liigub järgmisele vahelehele.', keys: ['Ctrl', 'Tab'] },
  { os: 'Linux', category: 'Terminal', description: 'Liigub eelmisele vahelehele.', keys: ['Ctrl', 'Shift', 'Tab'] },
  { os: 'Linux', category: 'Terminal', description: 'Liigub vahelehtede vahel.', keys: ['Ctrl', 'PgUp/PgDn'] },
  { os: 'Linux', category: 'Terminal', description: 'Jagab akna pooleks. Väga kasulik!', keys: ['Alt', 'Shift', 'D'] },
  { os: 'Linux', category: 'Terminal', description: 'Jaga aken (Horisontaalne)', keys: ['Alt', 'Shift', '+'] },
  { os: 'Linux', category: 'Terminal', description: 'Jaga aken (Vertikaalne)', keys: ['Alt', 'Shift', '-'] },
  { os: 'Linux', category: 'Terminal', description: 'Liigub aktiivse jaotuse (pane) fookusega.', keys: ['Alt', 'Nooleklahv'] },
  { os: 'Linux', category: 'Terminal', description: 'Muudab aktiivse jaotuse suurust.', keys: ['Alt', 'Shift', 'Nooleklahv'] },
  { os: 'Linux', category: 'Terminal', description: 'Kopeerib valitud teksti.', keys: ['Ctrl', 'Shift', 'C'] },
  { os: 'Linux', category: 'Terminal', description: 'Kleebib teksti.', keys: ['Ctrl', 'Shift', 'V'] },
  { os: 'Linux', category: 'Terminal', description: 'Otsib terminali kerimise ajaloost teksti.', keys: ['Ctrl', 'Shift', 'F'] },
  { os: 'Linux', category: 'Terminal', description: 'Avab terminali seadete JSON-faili.', keys: ['Ctrl', ','] },
  { os: 'Linux', category: 'Terminal', description: 'Muudab teksti suurust.', keys: ['Ctrl', 'Hiirekerimine'] },
  { os: 'Linux', category: 'Terminal', description: 'SIGINT. Sinu "paanikanupp".', keys: ['Ctrl', 'C'] },
  { os: 'Linux', category: 'Terminal', description: 'Otsib ajaloost tagurpidi. Trüki ssh ja see leiab su ssh kj@... käsu.', keys: ['Ctrl', 'R'] },
  { os: 'Linux', category: 'Terminal', description: 'SIGTSTP. Lükkab taustale. Saad tagasi tuua käsuga fg.', keys: ['Ctrl', 'Z'] },
  { os: 'Linux', category: 'Terminal', description: 'Sulgeb kesta (tühjal real) või kustutab tähe kursori all.', keys: ['Ctrl', 'D'] },
  { os: 'Linux', category: 'Terminal', description: 'Peatab kogu terminali väljundi (kui see kerib liiga kiiresti).', keys: ['Ctrl', 'S'] },
  { os: 'Linux', category: 'Terminal', description: 'Jätkab terminali tööd, kui see on peatatud.', keys: ['Ctrl', 'Q'] },
  { os: 'Linux', category: 'Terminal', description: 'Võtab ajaloost eelmise käsu.', keys: ['Nool Üles'] },
  { os: 'Linux', category: 'Terminal', description: 'Võtab ajaloost järgmise käsu.', keys: ['Nool Alla'] },
  { os: 'Linux', category: 'Terminal', description: 'Võtab ajaloost eelmise käsu.', keys: ['Ctrl', 'P'] },
  { os: 'Linux', category: 'Terminal', description: 'Võtab ajaloost järgmise käsu.', keys: ['Ctrl', 'N'] },
  { os: 'Linux', category: 'Terminal', description: 'Kordab viimast käsku (nt sudo !!).', keys: ['!!'] },
  { os: 'Linux', category: 'Terminal', description: 'Võtab eelmise käsu viimase argumendi (nt cd !$).', keys: ['!$'] },
  { os: 'Linux', category: 'Terminal', description: 'Võtab eelmise käsu kõik argumendid (nt rm !*).', keys: ['!*'] },
  { os: 'Linux', category: 'Terminal', description: 'Kordab käsku numbriga N (nt !101).', keys: ['!N'] },
  { os: 'Linux', category: 'Terminal', description: 'Kordab N-ndat käsku tagantpoolt (nt !-2).', keys: ['!-N'] },
  { os: 'Linux', category: 'Terminal', description: 'Kordab viimast käsku, mis algab stringiga (nt !ssh).', keys: ['!string'] },
  { os: 'Linux', category: 'Terminal', description: 'Asendab viimases käsus stringi ja käivitab uuesti.', keys: ['^vana^uus'] },
  { os: 'Linux', category: 'Terminal', description: 'Kõige olulisem! Täidab faili- ja käsunimed.', keys: ['Tab'] },
  { os: 'Linux', category: 'Terminal', description: 'Puhastab terminali ekraani.', keys: ['Ctrl', 'L'] },
  { os: 'Linux', category: 'Terminal', description: 'Liigub kursori rea algusesse.', keys: ['Ctrl', 'A'] },
  { os: 'Linux', category: 'Terminal', description: 'Liigub kursori rea lõppu.', keys: ['Ctrl', 'E'] },
  { os: 'Linux', category: 'Terminal', description: 'Liigub ühe tähe võrra edasi.', keys: ['Ctrl', 'F'] },
  { os: 'Linux', category: 'Terminal', description: 'Liigub ühe tähe võrra tagasi.', keys: ['Ctrl', 'B'] },
  { os: 'Linux', category: 'Terminal', description: 'Liigub ühe sõna võrra edasi.', keys: ['Alt', 'F'] },
  { os: 'Linux', category: 'Terminal', description: 'Liigub ühe sõna võrra tagasi.', keys: ['Alt', 'B'] },
  { os: 'Linux', category: 'Terminal', description: 'Hüppab rea alguse ja kursori praeguse asukoha vahel.', keys: ['Ctrl', 'X', 'Ctrl', 'X'] },
  { os: 'Linux', category: 'Terminal', description: 'Kustutab kõik kursori asukohast rea algusesse.', keys: ['Ctrl', 'U'] },
  { os: 'Linux', category: 'Terminal', description: 'Kustutab kõik kursori asukohast rea lõpuni.', keys: ['Ctrl', 'K'] },
  { os: 'Linux', category: 'Terminal', description: 'Kustutab eelmise sõna.', keys: ['Ctrl', 'W'] },
  { os: 'Linux', category: 'Terminal', description: 'Kustutab sõna alates kursorist.', keys: ['Alt', 'D'] },
  { os: 'Linux', category: 'Terminal', description: 'Kustutab eelmise sõna.', keys: ['Alt', 'Backspace'] },
  { os: 'Linux', category: 'Terminal', description: 'Kleebib tagasi hiljuti kustutatud teksti (yank).', keys: ['Ctrl', 'Y'] },
  { os: 'Linux', category: 'Terminal', description: 'Vahetab pärast kleepimist eelnevate kustutatud tekstide vahel.', keys: ['Alt', 'Y'] },
  { os: 'Linux', category: 'Terminal', description: 'Kustutab märgi kursorist vasakul.', keys: ['Ctrl', 'H'] },
  { os: 'Linux', category: 'Terminal', description: 'Vahetab kaks viimast tähte omavahel (nt pythno -> python).', keys: ['Ctrl', 'T'] },
  { os: 'Linux', category: 'Terminal', description: 'Vahetab kaks viimast sõna omavahel.', keys: ['Alt', 'T'] },
  { os: 'Linux', category: 'Terminal', description: 'Võtab eelmise käsu viimase argumendi. (Väga kasulik!)', keys: ['Alt', '.'] },
  { os: 'Linux', category: 'Terminal', description: '(Uppercase) Muudab sõna suurtähtedeks.', keys: ['Alt', 'U'] },
  { os: 'Linux', category: 'Terminal', description: '(Lowercase) Muudab sõna väiketähtedeks.', keys: ['Alt', 'L'] },
  { os: 'Linux', category: 'Terminal', description: '(Capitalize) Muudab sõna esitähe suureks.', keys: ['Alt', 'C'] },
  { os: 'Linux', category: 'Terminal', description: 'Lisab # rea algusesse ja vajutab Enter (salvestab käsu ajalukku).', keys: ['Alt', '#'] },
  { os: 'Linux', category: 'Terminal', description: 'Sisestab kõik Tab-i võimalikud vasted käsureale.', keys: ['Alt', '*'] },

  // --- Töölaud (Desktop) ---
  { os: 'Linux', category: 'Desktop', description: 'Kõige olulisem! Avab uue terminaliakna.', keys: ['Ctrl', 'Alt', 'T'] },
  { os: 'Linux', category: 'Desktop', description: 'Näitab kõiki avatud aknaid ja virtuaalseid töölaudu.', keys: ['Super'] },
  { os: 'Linux', category: 'Desktop', description: 'Liigub avatud rakenduste vahel.', keys: ['Alt', 'Tab'] },
  { os: 'Linux', category: 'Desktop', description: 'Liigub avatud rakenduste vahel tagurpidi.', keys: ['Super', 'Tab'] },
  { os: 'Linux', category: 'Desktop', description: 'Liigub kiirelt oma "koodi" ja "brauseri" töölaua vahel.', keys: ['Ctrl', 'Alt', 'Nooleklahv'] },
  { os: 'Linux', category: 'Desktop', description: 'Vii aken teisele töölauale', keys: ['Super', 'Shift', 'Nooleklahv'] },
  { os: 'Linux', category: 'Desktop', description: 'Salvestab pildi Pictures kausta.', keys: ['PrtScn'] },
  { os: 'Linux', category: 'Desktop', description: 'Kõige olulisem! Lubab sul hiirega valida, millisest alast pilti teha.', keys: ['Shift', 'PrtScn'] },
  { os: 'Linux', category: 'Desktop', description: 'Kopeerib aktiivse akna pildi lõikelauale.', keys: ['Alt', 'PrtScn'] },
  { os: 'Linux', category: 'Desktop', description: 'Avab "Run" dialoogi, kuhu saad trükkida käske (nt gedit vms).', keys: ['Alt', 'F2'] },
  { os: 'Linux', category: 'Desktop', description: 'Alati kasuta seda, kui laua tagant lahkud.', keys: ['Super', 'L'] },
  { os: 'Linux', category: 'Desktop', description: 'Paigutab akna täpselt poolele ekraanile.', keys: ['Super', '←/→'] },
  { os: 'Linux', category: 'Desktop', description: 'Maksimeeri / Taasta aken', keys: ['Super', '↑/↓'] },
  { os: 'Linux', category: 'Desktop', description: 'Sulgeb aktiivse akna.', keys: ['Alt', 'F4'] },
  { os: 'Linux', category: 'Desktop', description: 'Lubab akent klaviatuuriga liigutada.', keys: ['Alt', 'F7'] },
  { os: 'Linux', category: 'Desktop', description: 'Lubab akna suurust klaviatuuriga muuta.', keys: ['Alt', 'F8'] },
  { os: 'Linux', category: 'Desktop', description: 'Avab akna kontekstimenüü (Minimeeri, Maksimeeri jne).', keys: ['Alt', 'Space'] },

  // --- Browser (Brauser) ---
  { os: 'Linux', category: 'Browser', description: 'Ava uus vaheleht (Tab)', keys: ['Ctrl', 'T'] },
  { os: 'Linux', category: 'Browser', description: 'Sulge praegune vaheleht', keys: ['Ctrl', 'W'] },
  { os: 'Linux', category: 'Browser', description: 'Taasta suletud vaheleht', keys: ['Ctrl', 'Shift', 'T'] },
  { os: 'Linux', category: 'Browser', description: 'Liigu järgmisele vahelehele', keys: ['Ctrl', 'Tab'] },
  { os: 'Linux', category: 'Browser', description: 'Liigu eelmisele vahelehele', keys: ['Ctrl', 'Shift', 'Tab'] },
  { os: 'Linux', category: 'Browser', description: 'Ava uus aken (New)', keys: ['Ctrl', 'N'] },
  { os: 'Linux', category: 'Browser', description: 'Ava uus Incognito (era-) aken', keys: ['Ctrl', 'Shift', 'N'] },
  { os: 'Linux', category: 'Browser', description: 'Laadi leht uuesti (Refresh)', keys: ['Ctrl', 'R'] },
  { os: 'Linux', category: 'Browser', description: 'Laadi leht uuesti (ignoreerides vahemälu)', keys: ['Ctrl', 'Shift', 'R'] },
  { os: 'Linux', category: 'Browser', description: 'Ava Arendaja Tööriistad (DevTools)', keys: ['F12'] },
  { os: 'Linux', category: 'Browser', description: 'Mine aadressiribale', keys: ['Ctrl', 'L'] },
  { os: 'Linux', category: 'Browser', description: 'Otsi lehelt (Find)', keys: ['Ctrl', 'F'] },
  { os: 'Linux', category: 'Browser', description: 'Mine otsinguribale', keys: ['Ctrl', 'K'] },
  { os: 'Linux', category: 'Browser', description: 'Prindi (Print)', keys: ['Ctrl', 'P'] },
  { os: 'Linux', category: 'Browser', description: 'Salvesta leht (Save)', keys: ['Ctrl', 'S'] },
  { os: 'Linux', category: 'Browser', description: 'Lisa leht järjehoidjatesse (D bookmark)', keys: ['Ctrl', 'D'] },
  { os: 'Linux', category: 'Browser', description: 'Ava ajalugu (History)', keys: ['Ctrl', 'H'] },
  { os: 'Linux', category: 'Browser', description: 'Ava allalaadimised (Downloads)', keys: ['Ctrl', 'J'] },
  { os: 'Linux', category: 'Browser', description: 'Suurenda (Zoom in)', keys: ['Ctrl', '+'] },
  { os: 'Linux', category: 'Browser', description: 'Vähenda (Zoom out)', keys: ['Ctrl', '-'] },
  { os: 'Linux', category: 'Browser', description: 'Lähtesta suurus (Reset zoom)', keys: ['Ctrl', '0'] }
];

function renderShortcuts(arr, selector) {
    const container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = '';
    arr.forEach(s => {
        const li = document.createElement('li');
        const keysSpan = document.createElement('span');
        keysSpan.className = 'keys';
        keysSpan.innerHTML = s.keys.map(k => `<kbd>${k}</kbd>`).join(' + ');
        const descSpan = document.createElement('span');
        descSpan.className = 'desc';
        descSpan.textContent = ' — ' + s.description;
        li.appendChild(keysSpan);
        li.appendChild(descSpan);
        container.appendChild(li);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        renderShortcuts(linuxShortcuts, '#linuxShortcuts');
    });
} else {
    renderShortcuts(linuxShortcuts, '#linuxShortcuts');
}

function renderShortcuts(arr, selector) {
    const container = document.querySelector(selector);
    if (!container) return;
    
    container.innerHTML = ''; // Clean the plate before adding new food
    
    arr.forEach(s => {
        // 1. Create the Main Card (The Bread)
        const card = document.createElement('li');
        card.className = 'shortcut-card'; // We give it a class to style it later

        // 2. Create the Grey Wrapper for keys (The Left Side Filling)
        const keyWrapper = document.createElement('div');
        keyWrapper.className = 'key-wrapper';

        // 3. Add the keys into the Grey Wrapper
        s.keys.forEach(k => {
            const keyTag = document.createElement('kbd');
            keyTag.textContent = k;
            keyWrapper.appendChild(keyTag);
        });

        // 4. Create the Description (The Right Side Filling)
        const descSpan = document.createElement('span');
        descSpan.className = 'card-description';
        descSpan.textContent = s.description;

        // 5. Assemble the Sandwich
        // Put the grey wrapper and text inside the card
        card.appendChild(keyWrapper);
        card.appendChild(descSpan);

        // 6. Serve it (Put the card on the page)
        container.appendChild(card);
    });
}