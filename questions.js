const TOPICS = {
  sampling: "Mintavétel és standard hiba",
  tests: "Hipotézisvizsgálat és próbák",
  variance: "Varianciaanalízis és illeszkedés",
  relationship: "Kapcsolatvizsgálat és korreláció"
};

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
    title: "Véletlen mintavétel",
    question: "Mit jelent a véletlen mintavétel? A mintaelemeket …… választjuk ki. Válassza ki a helyes állítást!",
    options: [
      "előre nem ismert valószínűséggel",
      "előre ismert valószínűséggel",
      "találomra",
      "szubjektív módon"
    ],
    answer: "előre ismert valószínűséggel",
    explanation: [
      "A véletlen mintavétel lényege, hogy a sokaság elemei nem önkényesen, hanem ismert kiválasztási valószínűségek alapján kerülnek be a mintába. Ez biztosítja, hogy a mintavétel szabályozott és statisztikailag kezelhető legyen.",
      "Az „előre nem ismert valószínűséggel” azért hibás, mert akkor nem tudnánk korrekt valószínűségi modellt felállítani.",
      "A „találomra” hétköznapi értelemben hasonlónak tűnhet, de statisztikailag pontatlan.",
      "A „szubjektív módon” pedig épp az ellenkezője a véletlen mintavételnek."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Nem i.i.d. minta",
    question: "Melyik esetben nem független azonos eloszlású mintát kapunk a mintavételezés során?",
    options: [
      "Ha véges sokaságból visszatevés nélkül veszünk mintát.",
      "Ha véges sokaságból visszatevéssel veszünk mintát.",
      "Ha végtelen sokaságból visszatevés nélkül veszünk mintát.",
      "Ha végtelen sokaságból visszatevéssel veszünk mintát."
    ],
    answer: "Ha véges sokaságból visszatevés nélkül veszünk mintát.",
    explanation: [
      "A független, azonos eloszlású (iid) minta egyik feltétele, hogy az egyes húzások ne befolyásolják egymást.",
      "Véges sokaságból visszatevés nélkül mintát véve ez nem teljesül: ha egyszer egy elemet kivettünk, az már nem kerülhet újra kiválasztásra.",
      "Emiatt a következő húzások valószínűsége megváltozik, tehát ebben az esetben a mintaelemek nem függetlenek."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Másodfajú hiba értelmezése",
    question: "Egy konzervgyár azzal a feltétellel veszi át a termelőtől az őszibarackot, hogy a szállítmányban a „sérült” barackok részaránya a 6%-ot nem haladja meg. A hipotézist mintavétellel tesztelik. Milyen esetben követi el a konzervgyár a másodfajú hibát?",
    options: [
      "A mintában a „sérült” őszibarackok részaránya 6% alatt van, ezért a gyár a szállítmányt átveszi.",
      "A szállítmányban a „sérült” barackok részaránya 6% alatt van, de a gyár azt mégsem veszi át.",
      "A mintában a „sérült” őszibarackok részaránya 6% felett van, ezért a gyár a szállítmányt nem veszi át.",
      "A szállítmányban a „sérült” barackok részaránya 6% felett van, de a gyár azt mégis átveszi."
    ],
    answer: "A szállítmányban a „sérült” barackok részaránya 6% felett van, de a gyár azt mégis átveszi.",
    explanation: [
      "A másodfajú hiba azt jelenti, hogy a valóságban a nullhipotézis hamis, de mi ezt nem utasítjuk el.",
      "Itt a gyár érdeke alapján: H0: a sérült barackok aránya nem haladja meg a 6%-ot; H1: a sérült barackok aránya meghaladja a 6%-ot.",
      "Másodfajú hiba akkor van, ha a valóságban rossz a szállítmány, vagyis 6% felett van a sérültek aránya, de a gyár mégis úgy dönt, hogy rendben van, és átveszi.",
      "Az 1. és 3. opció csak mintabeli eredményt ír le, nem biztos, hogy hibáról van szó.",
      "A 2. opció inkább elsőfajú hiba: valójában jó a szállítmány, de mégsem veszik át."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Csoportos mintavétel oka",
    question: "Mikor kényszerülünk csoportos mintavételre? Válassza ki a helyes állítást!",
    options: [
      "Ha rendelkezésünkre áll a sokaság minden elemét tartalmazó lista",
      "Minden olyan esetben, ha a sokaság elemszáma (N) több, mint 10 000",
      "Ha nincs vagy lehetetlen, vagy drága egy sokasági lista összeállítása.",
      "Minden olyan esetben, ha a sokaság elemszáma (N) kevesebb, mint 10 000"
    ],
    answer: "Ha nincs vagy lehetetlen, vagy drága egy sokasági lista összeállítása.",
    explanation: [
      "A csoportos mintavétel akkor hasznos, amikor a teljes alapsokaság elemeiről nem áll rendelkezésre teljes lista, vagy annak elkészítése túl drága vagy nehéz lenne.",
      "Ilyenkor nem egyedi elemeket, hanem előbb csoportokat választunk ki.",
      "Például iskolákból választunk, és azon belül tanulókat; vagy településekből választunk, és azon belül háztartásokat.",
      "Ha van teljes lista, akkor gyakran egyszerű véletlen mintavétel is megoldható. A 10 000-es határ teljesen önkényes."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Csoportos mintavétel hatásossága",
    question: "Milyen esetben lesz a csoportos mintavétel sokkal kevésbé hatásos, mint az ugyanolyan elemszámú egyszerű véletlen (EV) minta? Válassza ki a helyes állítást!",
    options: [
      "Ha a vizsgált ismérv szerint a csoportok heterogének.",
      "Ha a vizsgált ismérv szerint a csoportok homogének.",
      "Minden esetben hatásosabb a csoportos mintavétel, mint az EV minta.",
      "Minden esetben az EV minta hatásosabb, mint a csoportos mintavétel."
    ],
    answer: "Ha a vizsgált ismérv szerint a csoportok homogének.",
    explanation: [
      "A csoportos mintavétel akkor működik rosszabbul, ha a csoportokon belül az elemek nagyon hasonlóak egymáshoz, vagyis a csoportok homogének.",
      "Ilyenkor ha kiválasztunk néhány csoportot, azokból kevés új információt nyerünk, mert egy csoport elemei egymásra nagyon hasonlítanak.",
      "Ezért a mintában kisebb lesz a valódi változatosság, és a becslés pontossága romlik az egyszerű véletlen mintához képest."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Hipotézisvizsgálat döntése",
    question: "A hipotézisvizsgálat során …",
    options: [
      "közvetlenül a nullhipotézisről döntünk.",
      "közvetlenül az alternatív hipotézisről döntünk.",
      "közvetve a nullhipotézisről döntünk.",
      "közvetve a megbízhatósági szintről döntünk."
    ],
    answer: "közvetve a nullhipotézisről döntünk.",
    explanation: [
      "Hipotézisvizsgálatban formálisan mindig a nullhipotézisre (H0) vonatkozóan döntünk: vagy elutasítjuk, vagy nem utasítjuk el.",
      "Ez a döntés azonban közvetett, mert nem magát a teljes sokaságot látjuk, hanem csak a mintából számolt próbaértéket vizsgáljuk.",
      "Vagyis a mintából következtetünk a nullhipotézis elfogadhatóságára.",
      "Azért nem „közvetlenül” döntünk, mert nincs teljes bizonyosságunk a sokaságról, csak valószínűségi alapon következtetünk."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Mintavételi hiba állításai",
    question: "Igazak-e vagy hamisak az alábbi állítások egyszerű mintavétel esetén? 1. A mintavételi hiba a sokasági szórás növekedésével nő. 2. A mintavételi hiba a mintanagyság növekedésével nő. 3. A mintavételi hiba a sokasági elemszám növekedésével nő. 4. A mintavételi hiba független a minta elemszámától.",
    answer: "1. Igaz. 2. Hamis. 3. Hamis. 4. Hamis.",
    explanation: [
      "1. Igaz: a standard hiba képletében a sokaság vagy annak becsült szórása szerepel. Minél nagyobb a szórás, annál nagyobb az adatok ingadozása, ezért annál nagyobb a mintavételi bizonytalanság is.",
      "2. Hamis: nagyobb minta esetén a becslés pontosabb lesz. A standard hiba tipikusan 1 / √n szerint csökken, tehát ha nő a mintanagyság, a mintavételi hiba csökken.",
      "3. Hamis: önmagában attól, hogy a sokaság nagyobb, nem lesz nagyobb a mintavételi hiba. Nagy sokaságoknál a standard hiba főként a szórástól és a mintanagyságtól függ.",
      "4. Hamis: a mintavételi hiba nem független a minta elemszámától, hanem erősen függ tőle. Nagyobb mintából általában kisebb hibával becslünk."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Egymintás átlagvizsgálat próbaértéke",
    question: "Egy 100 elemű minta alapján vizsgálták a táblás csokoládé átlagos nettó tömegét. A minta alapján a mért tömegek átlaga 98,5 g-nak, szórása 2 g-nak adódott. A sokaság normális eloszlása feltételezhető. Döntsön 5%-os szignifikancia szinten arról, hogy az átlagos nettó tömeg 100 g. Számítsa ki a megfelelő próbafüggvény értékét!",
    answer: "-7,5",
    explanation: [
      "Adatok: n = 100, x̄ = 98,5, s = 2, μ0 = 100.",
      "A standard hiba: s / √n = 2 / √100 = 2 / 10 = 0,2.",
      "A próbafüggvény: t = (x̄ - μ0) / (s / √n).",
      "Behelyettesítve: t = (98,5 - 100) / 0,2 = -1,5 / 0,2 = -7,5.",
      "Ez nagyon nagy abszolút érték, vagyis a mintaátlag messze van a 100 grammos feltételezéstől."
    ]
  },
  {
    source: "I. ZH / igazhamis.docx",
    title: "Standard hiba számítása",
    question: "Egy 400 elemű egyszerű véletlen minta alapján megbecsülték az adott napon előállított 3 000 db táblás csokoládé átlagos nettó tömegét. A minta alapján a tömegek átlaga 98,5 g-nak, szórása 4 grammnak adódott. Adja meg a standard hibát grammban!",
    answer: "0,2 gramm",
    explanation: [
      "Adatok: n = 400, s = 4.",
      "A standard hiba: SE = s / √n.",
      "Behelyettesítve: SE = 4 / √400 = 4 / 20 = 0,2.",
      "A standard hiba azt mutatja meg, hogy a mintaátlag milyen mértékben ingadozna mintáról mintára.",
      "Itt a szórás 4, a mintanagyság 400, ezért a standard hiba 4 / 20 = 0,2 gramm."
    ]
  }
];

const TOPIC_BY_TITLE = {
  "Mintavételi függetlenség": TOPICS.sampling,
  "Azonos eloszlású minta": TOPICS.sampling,
  "Rétegzett mintavétel": TOPICS.sampling,
  "Ismert szórás": TOPICS.tests,
  "Szórás becslése": TOPICS.tests,
  "Ismeretlen szórás": TOPICS.tests,
  "Rétegzés és standard hiba": TOPICS.sampling,
  "Nem arányos rétegzés": TOPICS.sampling,
  "Rétegzett mintavétel pontossága": TOPICS.sampling,
  "Egymintás t-próba": TOPICS.tests,
  "Másodfajú hiba": TOPICS.tests,
  "Nullhipotézis alakja": TOPICS.tests,
  "Kétmintás t-próba": TOPICS.tests,
  "F-próba szórásokra": TOPICS.tests,
  "Két szórás tesztelése": TOPICS.tests,
  "ANOVA": TOPICS.variance,
  "Függetlenségvizsgálat célja": TOPICS.relationship,
  "Illeszkedésvizsgálat": TOPICS.variance,
  "Függetlenségvizsgálat hipotézisei": TOPICS.relationship,
  "Cramer-féle asszociációs együttható": TOPICS.relationship,
  "Független kapcsolat": TOPICS.relationship,
  "Korrelációs hányados nulla értéke": TOPICS.relationship,
  "Eltérés-négyzetösszegek": TOPICS.variance,
  "H-mutató": TOPICS.relationship,
  "Rangkorreláció ordinális skálán": TOPICS.relationship,
  "Lineáris korreláció": TOPICS.relationship,
  "Rangkorreláció arányskálán": TOPICS.relationship,
  "Korrelációs együttható értékkészlete": TOPICS.relationship,
  "Standard hiba számítása": TOPICS.sampling,
  "Egymintás átlagvizsgálat próbaértéke": TOPICS.tests,
  "Nem i.i.d. minta": TOPICS.sampling,
  "Hipotézisvizsgálat döntése": TOPICS.tests,
  "Csoportos mintavétel hatásossága": TOPICS.sampling,
  "Csoportos mintavétel oka": TOPICS.sampling,
  "Mintavételi hiba állításai": TOPICS.sampling,
  "Véletlen mintavétel": TOPICS.sampling,
  "Másodfajú hiba értelmezése": TOPICS.tests
};

window.quizTopics = Object.values(TOPICS);
window.quizQuestions = window.quizQuestions.map(question => ({
  ...question,
  topic: TOPIC_BY_TITLE[question.title] || "Egyéb"
}));
