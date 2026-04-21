window.quizQuestions = [
  {
    source: "Korábbi kérdések",
    title: "Mintavételi függetlenség",
    question: "A mintaelemek nem lesznek függetlenek egymástól, ha végtelen sokaságból akár visszatevéssel, akár visszatevés nélkül; illetve véges sokaságból visszatevéssel vesszük a mintát.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "A felsorolt esetekben a mintaelemek függetlenek vagy gyakorlatilag függetlennek tekinthetők.",
      "Nem függetlenek: véges sokaságból visszatevés nélkül, mert a kivett elem megváltoztatja a következő húzás valószínűségeit."
    ]
  },
  {
    source: "Korábbi kérdések",
    title: "Azonos eloszlású minta",
    question: "A független, azonos eloszlású minta esetén a minta elemeinek eloszlása megegyezik a sokaság eloszlásával.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "Az i.i.d. minta azt jelenti, hogy a mintaelemek függetlenek, és mind ugyanabból az eloszlásból származnak.",
      "Nem minden levezetett mutató eloszlása ugyanaz, hanem az egyes mintaelemeké."
    ]
  },
  {
    source: "Korábbi kérdések",
    title: "Rétegzett mintavétel",
    question: "A vizsgált ismérv szerinti homogén sokaságból veszünk rétegzett mintát.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "A rétegzett mintavétel lényege, hogy a teljes sokaság több, egymástól eltérő csoportra bontható.",
      "A rétegek belül legyenek homogének, egymástól pedig különbözők."
    ]
  },
  {
    source: "Korábbi kérdések",
    title: "Ismert szórás",
    question: "A sokaság várható értékének becslésénél, normális eloszlású sokaság esetén, ha a sokaság szórása ismert, a Student-féle t-eloszlás táblázatos értékével dolgozunk.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Ismert sokasági szórás esetén z-eloszlást használunk.",
      "A t-eloszlás akkor kell, amikor a sokasági szórás nem ismert, és mintaszórással helyettesítjük."
    ]
  },
  {
    source: "Korábbi kérdések",
    title: "Szórás becslése",
    question: "A sokasági szórás becslésénél a t- és/vagy a z-táblázatos értékeket alkalmazzuk.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Variancia és szórás becslésénél normális sokaság esetén khi-négyzet eloszlást használunk.",
      "A z és t jellemzően a várható érték becslésénél jelenik meg."
    ]
  },
  {
    source: "Korábbi kérdések",
    title: "Ismeretlen szórás",
    question: "A sokaság várható értékének becslésénél, normális eloszlású sokaság esetén, ha a sokaság szórása nem ismert és a minta kicsi, a Student-féle t-eloszlás táblázatos értékével dolgozunk.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "Ez a klasszikus t-eloszlásos eset.",
      "A mintaszórás használata plusz bizonytalanságot visz be, ezt kezeli a t-eloszlás."
    ]
  },
  {
    source: "Korábbi kérdések",
    title: "Rétegzés és standard hiba",
    question: "A rétegzés alkalmazása növeli a standard hiba nagyságát.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "A rétegzés célja tipikusan a standard hiba csökkentése.",
      "Ha a rétegek belül homogénebbek, kisebb lehet a rétegen belüli szórás, így pontosabb becslést kaphatunk."
    ]
  },
  {
    source: "Korábbi kérdések",
    title: "Nem arányos rétegzés",
    question: "Nem arányos rétegzés esetén a standard hiba számításához a teljes szórás szükséges.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Nem arányos rétegzésnél nem egyetlen teljes szórásból számolunk.",
      "A rétegenkénti szórások, rétegsúlyok és rétegenkénti mintanagyságok számítanak."
    ]
  },
  {
    source: "Korábbi kérdések",
    title: "Rétegzett mintavétel pontossága",
    question: "Rétegzett mintavételnél a becslés pontossága csak a rétegeken belüli szóródástól függ.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "A „csak” miatt hamis.",
      "A pontosság függ a rétegek nagyságától, súlyától, a rétegenkénti mintanagyságtól és a rétegzés módjától is."
    ]
  },
  {
    source: "3. óra / igazhamis.docx",
    title: "Egymintás t-próba",
    question: "Egy 25 elemű mintából teszteljük, hogy a teljes kiőrlésű kenyér átlagos súlya megfelel-e az 1 kg-os előírásnak. H0: μ = 1000 g, H1: μ ≠ 1000 g. A mintaátlag 995 g, a mintából becsült szórás 5 g, normális eloszlás feltételezhető, α = 0,05. Melyik eredmény és döntés helyes?",
    options: [
      "Próbafüggvény: z = 5; kritikus érték: 1,65; döntés: megfelel",
      "Próbafüggvény: t = -5; kritikus érték: ±2,06; döntés: nem felel meg",
      "Próbafüggvény: z = -5; kritikus érték: ±1,96; döntés: nem felel meg",
      "Próbafüggvény: t = -5; kritikus érték: 1,75; döntés: nem felel meg"
    ],
    answer: "Próbafüggvény: t = -5; kritikus érték: ±2,06; döntés: nem felel meg",
    explanation: [
      "A sokasági szórás nem ismert, a minta kicsi, és normális eloszlást feltételezünk, ezért egymintás t-próbát használunk.",
      "t = (995 - 1000) / (5 / √25) = -5.",
      "Kétoldali próba van, ezért a kritikus érték ±2,06 körüli, és H0-t elutasítjuk."
    ]
  },
  {
    source: "3. óra / igazhamis.docx",
    title: "Másodfajú hiba",
    question: "A másodfajú hiba elkövetése során a hamis alternatív hipotézist fogadjuk el.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Másodfajú hiba esetén a nullhipotézis valójában hamis, de mi nem utasítjuk el.",
      "Nem hamis alternatív hipotézist fogadunk el, hanem hamis H0-t hagyunk bent."
    ]
  },
  {
    source: "3. óra / igazhamis.docx",
    title: "Nullhipotézis alakja",
    question: "A nullhipotézis mindig csak egyenlőség formájában fogalmazható meg.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "A nullhipotézis tartalmaz egyenlőséget, de nem mindig kizárólag „=” alakú.",
      "Lehet például H0: μ = μ0, H0: μ ≥ μ0 vagy H0: μ ≤ μ0."
    ]
  },
  {
    source: "3. óra / igazhamis.docx",
    title: "Kétmintás t-próba",
    question: "Várható érték tesztelésére a kétmintás t-próba csak abban az esetben alkalmazható, ha a sokasági szórások azonossága feltételezhető.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "A klasszikus független kétmintás t-próba alapfeltevése, hogy a két sokaság varianciája azonos.",
      "Ilyenkor közös becslést használunk a közös szórásra."
    ]
  },
  {
    source: "3. óra / igazhamis.docx",
    title: "F-próba szórásokra",
    question: "Két 13-13 elemű normális minta esetén x1 = 38, Σd1² = 1330, x2 = 39,5, Σd2² = 588. Vizsgáljuk, hogy az első típus szórása nagyobb-e. Melyik válasz helyes?",
    options: [
      "Próbafüggvény: 2,26; elfogadási tartomány: 0,36-2,75; H0-t elfogadjuk (nagyobb)",
      "Próbafüggvény: 2,26; elfogadási tartomány: 0-2,75; H0-t elfogadjuk (nem nagyobb)",
      "Próbafüggvény: 2,26; elfogadási tartomány: 0-3,25; H0-t elfogadjuk (nagyobb)",
      "Próbafüggvény: 1,50; elfogadási tartomány: 0,31-3,25; H0-t elfogadjuk (nem nagyobb)"
    ],
    answer: "Próbafüggvény: 2,26; elfogadási tartomány: 0-2,75; H0-t elfogadjuk (nem nagyobb)",
    explanation: [
      "Két normális sokaság szórásának összehasonlítására F-próbát használunk.",
      "s1² = 1330 / 12 = 110,83 és s2² = 588 / 12 = 49, így F = 110,83 / 49 ≈ 2,26.",
      "A H0 elfogadása itt azt jelenti, hogy nem igazolható, hogy az első szórás nagyobb."
    ]
  },
  {
    source: "3. óra / igazhamis.docx",
    title: "Két szórás tesztelése",
    question: "Két sokasági szórás tesztelésénél a próbafüggvényünk a χ².",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Egyetlen sokasági variancia vizsgálatára χ²-próbát használunk.",
      "Két sokasági variancia összehasonlítására F-próba kell."
    ]
  },
  {
    source: "3. óra / igazhamis.docx",
    title: "ANOVA",
    question: "Három gép termelési kibocsátását hasonlítjuk össze, gépenként 5-5 megfigyeléssel. SSB = 936, SSK = 260. 5%-os szinten melyik válasz helyes a H0: μ1 = μ2 = μ3 hipotézisre?",
    options: [
      "Próbafüggvény: 1,67; kritikus érték: 3,89; H0-t elfogadjuk",
      "Próbafüggvény: 1,39; kritikus érték: 2,9; H0-t elvetjük",
      "Próbafüggvény: 1,67; kritikus érték: 0,025 és 5,1; H0-t elfogadjuk",
      "Próbafüggvény: 0,27; kritikus érték: 3,89; H0-t elfogadjuk"
    ],
    answer: "Próbafüggvény: 1,67; kritikus érték: 3,89; H0-t elfogadjuk",
    explanation: [
      "Ez egytényezős varianciaanalízis. k = 3, n = 15, szabadságfokok: 2 és 12.",
      "MSK = 260 / 2 = 130, MSB = 936 / 12 = 78, így F = 130 / 78 ≈ 1,67.",
      "Mivel 1,67 < 3,89, H0-t nem utasítjuk el."
    ]
  },
  {
    source: "3. óra / igazhamis.docx",
    title: "Függetlenségvizsgálat célja",
    question: "A függetlenségvizsgálat a minőségi és/vagy területi ismérvek közötti sztochasztikus kapcsolat meglétének vagy hiányának tesztelésére alkalmazható módszertan.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "A függetlenségvizsgálat tipikusan két kvalitatív ismérv kapcsolatát vizsgálja.",
      "Kontingenciatáblával és χ²-próbával azt teszteljük, hogy van-e kapcsolat a két ismérv között."
    ]
  },
  {
    source: "3. óra / igazhamis.docx",
    title: "Illeszkedésvizsgálat",
    question: "Egy pulóverszállítmányban az ötféle színnek azonos arányúnak kell lennie. A 150 elemű mintában: fehér 22, zöld 28, kék 27, fekete 32, piros 41. 5%-os szinten melyik válasz helyes?",
    options: [
      "Próbafüggvény: 3,53; elfogadási tartomány: 0-11,1; H0-t elfogadjuk",
      "Próbafüggvény: 16,9; elfogadási tartomány: 0-9,49; H0-t elvetjük",
      "Próbafüggvény: 6,72; elfogadási tartomány: 0-9,49; H0-t elfogadjuk",
      "Próbafüggvény: 6,72; elfogadási tartomány: -9,49-9,49; H0-t elfogadjuk"
    ],
    answer: "Próbafüggvény: 6,72; elfogadási tartomány: 0-9,49; H0-t elfogadjuk",
    explanation: [
      "Ez illeszkedésvizsgálat χ²-próbával. Az elvárt darabszám minden színnél 150 / 5 = 30.",
      "χ² = [(22-30)² + (28-30)² + (27-30)² + (32-30)² + (41-30)²] / 30 ≈ 6,72.",
      "A szabadságfok 4, a kritikus érték kb. 9,49, ezért H0-t nem utasítjuk el."
    ]
  },
  {
    source: "3. óra / igazhamis.docx",
    title: "Függetlenségvizsgálat hipotézisei",
    question: "A függetlenségvizsgálat azon nullhipotézis ellenőrzésére szolgál, hogy két ismérv nem független egymástól. Az alternatív hipotézisben pedig azt fogalmazzuk meg, hogy független a két ismérv egymástól.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Az állítás felcseréli a null- és alternatív hipotézist.",
      "H0: a két ismérv független. H1: a két ismérv nem független, vagyis kapcsolat van közöttük."
    ]
  },
  {
    source: "4. óra / igazhamis_4.docx",
    title: "Cramer-féle asszociációs együttható",
    question: "Egy 100 elemű mintában a nemhez tartozás és a jövedelemmel való elégedettség kapcsolata esetén χ² = 9. A nem két kategóriás, az elégedettség három kategóriás. Milyen erősségű kapcsolat adódik a Cramer-féle asszociációs együttható szerint?",
    options: ["Nincs kapcsolat", "Közepesnél gyengébb kapcsolat van", "Függvényszerű kapcsolat van", "Erős kapcsolat van"],
    answer: "Közepesnél gyengébb kapcsolat van",
    explanation: [
      "C = √(χ² / (n · min(r-1, c-1))).",
      "χ² = 9, n = 100, r = 2, c = 3, ezért min(r-1, c-1) = 1.",
      "C = √(9 / 100) = 0,30, ami gyenge-közepes, vizsgás szóhasználattal közepesnél gyengébb kapcsolat."
    ]
  },
  {
    source: "4. óra / igazhamis_4.docx",
    title: "Független kapcsolat",
    question: "Független kapcsolat akkor áll fenn, amikor az egyik ismérv szerinti hovatartozás ismeretében levonható bizonyos, de nem teljesen egyértelmű következtetés a másik ismérv szerinti hovatartozásról.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Ez nem függetlenség, hanem sztochasztikus kapcsolat.",
      "Függetlenség esetén az egyik ismérv ismerete nem ad információt a másikról."
    ]
  },
  {
    source: "4. óra / igazhamis_4.docx",
    title: "Korrelációs hányados nulla értéke",
    question: "Ha a korrelációs hányados értéke nulla, akkor a két mennyiségi ismérv független egymástól.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Egy mérőszám nulla értéke önmagában nem jelent automatikus függetlenséget.",
      "Csak azt jelzi, hogy az adott típusú kapcsolat nem mutatható ki."
    ]
  },
  {
    source: "4. óra / igazhamis_4.docx",
    title: "Eltérés-négyzetösszegek",
    question: "A teljes eltérés-négyzetösszeget megkapjuk, ha a külső eltérés-négyzetösszegből kivonjuk a belső eltérés-négyzetösszeget.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Varianciaanalízisben: teljes eltérés-négyzetösszeg = külső eltérés-négyzetösszeg + belső eltérés-négyzetösszeg.",
      "A külső rész a csoportátlagok közötti, a belső rész a csoportokon belüli szóródást méri."
    ]
  },
  {
    source: "4. óra / igazhamis_4.docx",
    title: "H-mutató",
    question: "A H-mutató, vagyis szóráshányados, két minőségi ismérv kapcsolatának szorosságát méri.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "A H-mutató vegyes kapcsolat szorosságát méri.",
      "Vegyes kapcsolatnál az egyik ismérv minőségi, a másik mennyiségi."
    ]
  },
  {
    source: "4. óra / igazhamis_4.docx",
    title: "Rangkorreláció ordinális skálán",
    question: "A rangkorrelációs együttható az ordinális skálán mért mennyiségi ismérvek közötti kapcsolatot méri.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "A rangkorreláció sorrendiségen, rangsoron alapul.",
      "A monoton kapcsolat irányát és erősségét méri, nem a nyers mértékegységekre érzékeny."
    ]
  },
  {
    source: "4. óra / igazhamis_4.docx",
    title: "Lineáris korreláció",
    question: "A lineáris korrelációs együttható a két mennyiségi ismérv közötti kapcsolat irányát és intenzitását mutatja.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "A Pearson-féle lineáris korrelációs együttható jele r.",
      "Az előjel az irányt, az abszolút érték a lineáris kapcsolat szorosságát mutatja."
    ]
  },
  {
    source: "4. óra / igazhamis_4.docx",
    title: "Rangkorreláció arányskálán",
    question: "A rangkorrelációs együttható az arányskálán mért mennyiségi ismérvek közötti kapcsolatot mutatja.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Arányskálán mért két mennyiségi ismérv klasszikus alapmérőszáma általában a lineáris korrelációs együttható.",
      "A rangkorreláció alkalmazható rangokká alakított adatokra, de nem ez az alapértelmezett arányskálás mérőszám."
    ]
  },
  {
    source: "4. óra / igazhamis_4.docx",
    title: "Korrelációs együttható értékkészlete",
    question: "A lineáris korrelációs együttható -1 és +1 közé eső mérőszám.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "A Pearson-féle korrelációs együttható értékkészlete -1 és +1 közé esik.",
      "r = +1 tökéletes pozitív, r = -1 tökéletes negatív lineáris kapcsolatot jelent."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Standard hiba számítása",
    question: "Egy 400 elemű egyszerű véletlen minta alapján a tömegek átlaga 98,5 g, szórása 4 g. Add meg az átlag standard hibáját grammban.",
    answer: "0,2 gramm",
    explanation: [
      "A standard hiba képlete: SE = s / √n.",
      "SE = 4 / √400 = 4 / 20 = 0,2 gramm.",
      "A 4 gramm a minta szórása, nem a standard hiba."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Egymintás átlagvizsgálat próbaértéke",
    question: "Egy 100 elemű mintában az átlag 98,5 g, a szórás 2 g. Normális eloszlás feltételezhető. 5%-os szinten a H0: μ = 100 hipotézis vizsgálatánál mennyi a próbafüggvény értéke?",
    answer: "-7,5",
    explanation: [
      "A standard hiba: s / √n = 2 / 10 = 0,2.",
      "t = (98,5 - 100) / 0,2 = -1,5 / 0,2 = -7,5.",
      "Ez nagyon távol van 0-tól, ezért H0 elutasítható."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Nem i.i.d. minta",
    question: "Melyik esetben nem független, azonos eloszlású mintát kapunk a mintavételezés során?",
    answer: "Véges sokaságból visszatevés nélkül.",
    explanation: [
      "Véges sokaságból visszatevés nélkül az egyik elem kiválasztása hat a következő kiválasztás esélyére.",
      "Ez megszünteti a függetlenséget."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Hipotézisvizsgálat döntése",
    question: "A hipotézisvizsgálat során miről döntünk közvetlenül?",
    answer: "Közvetlenül a nullhipotézisről döntünk.",
    explanation: [
      "A döntés formálisan mindig H0-ra vonatkozik.",
      "Vagy elutasítjuk H0-t, vagy nem utasítjuk el H0-t."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Csoportos mintavétel hatásossága",
    question: "Milyen esetben lesz a csoportos mintavétel sokkal kevésbé hatásos, mint az ugyanolyan elemszámú egyszerű véletlen minta?",
    answer: "Ha a vizsgált ismérv szerint a csoportok homogének.",
    explanation: [
      "Csoportos mintavételnél az a jó, ha a kiválasztott csoportok belül heterogének, vagyis jól reprezentálják a teljes sokaságot.",
      "Ha a csoportok homogének, nagyobb lehet a mintavételi hiba."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Csoportos mintavétel oka",
    question: "Mikor kényszerülünk csoportos mintavételre?",
    answer: "Ha nincs, lehetetlen vagy drága a sokasági lista összeállítása.",
    explanation: [
      "Egyszerű véletlen mintához teljes mintavételi keret kell.",
      "Ha ez nem áll rendelkezésre vagy túl drága, gyakran csoportos mintavételt használunk."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Mintavételi hiba állításai",
    question: "Egyszerű mintavétel esetén mely állítások igazak? 1. A mintavételi hiba a sokasági szórás növekedésével nő. 2. A mintavételi hiba a mintanagyság növekedésével nő. 3. A mintavételi hiba a sokasági elemszám növekedésével nő. 4. A mintavételi hiba független a minta elemszámától.",
    answer: "Igaz, hamis, hamis, hamis.",
    explanation: [
      "A standard hiba alapesetben SE = σ / √n.",
      "Nő a sokasági szórással, és csökken a mintanagyság növekedésével.",
      "Nem független a minta elemszámától."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Véletlen mintavétel",
    question: "Mit jelent a véletlen mintavétel? A mintaelemeket milyen módon választjuk ki?",
    answer: "Előre ismert valószínűséggel.",
    explanation: [
      "A valószínűségi mintavételnél a kiválasztási valószínűségek ismertek.",
      "A „véletlen” itt nem összevisszaságot, hanem szabályozott valószínűségi mechanizmust jelent."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Másodfajú hiba értelmezése",
    question: "Egy konzervgyár akkor veszi át az őszibarackot, ha a sérült barackok részaránya legfeljebb 6%. Milyen esetben követi el a konzervgyár a másodfajú hibát?",
    answer: "Valójában rossz a szállítmány, de a gyár elfogadja.",
    explanation: [
      "Itt H0: p ≤ 0,06, vagyis a szállítmány megfelelő.",
      "H1: p > 0,06, vagyis túl sok a sérült barack.",
      "Másodfajú hiba: H0 hamis, de nem utasítjuk el. Itt ez azt jelenti, hogy p > 0,06, de a gyár mégis átveszi a szállítmányt."
    ]
  }
];
