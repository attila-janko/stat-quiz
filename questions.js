const TOPICS = {
  sampling: "Mintavétel és standard hiba",
  tests: "Hipotézisvizsgálat és próbák",
  relationship: "Kapcsolatvizsgálat és korreláció",
  regression: "Regresszió",
  trend: "Trend és idősor",
  sampleExam: "minta ZH"
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
      "A másodfajú hiba azt jelenti, hogy a valóságban a nullhipotézis hamis, de mi ezt nem utasítjuk el (elfogadjuk).",
      "Itt a gyár érdeke alapján: H0: a sérült barackok aránya nem haladja meg a 6%-ot; H1: a sérült barackok aránya meghaladja a 6%-ot.",
      "Másodfajú hiba akkor van, ha a valóságban rossz a szállítmány, vagyis 6% felett van a sérültek aránya, de a gyár mégis úgy dönt, hogy rendben van, és átveszi.",
      "Ez a 4. válasz: a szállítmány valójában rossz, de a gyár a mintavételi döntés alapján mégis átveszi."
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
    answer: "közvetlenül a nullhipotézisről döntünk.",
    explanation: [
      "Hipotézisvizsgálatban formálisan mindig a nullhipotézisre (H0) vonatkozóan döntünk: vagy elutasítjuk, vagy nem utasítjuk el."
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
      "3. Hamis: a feladat logikája szerint a sokasági elemszám önmagában nem közvetlen növelő tényező.",
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
      "A standard hiba képlete ebben a feladatban: s / √n.",
      "Behelyettesítve: 4 / √400 = 4 / 20 = 0,2.",
      "A standard hiba azt mutatja meg, hogy a mintaátlag milyen mértékben ingadozna mintáról mintára.",
      "Itt a szórás 4, a mintanagyság 400, ezért a standard hiba 0,2 gramm."
    ]
  },
  {
    source: "Új gyakorló kérdés",
    title: "Intervallumbecslés z-eloszlással",
    question: "Egy normális eloszlású sokaság várható értékére szeretnénk konfidenciaintervallumot adni. A sokasági szórás ismert. Melyik eloszlás táblázatos értékét használjuk?",
    options: [
      "Student-féle t-eloszlás",
      "Normális eloszlás, z-érték",
      "Khi-négyzet eloszlás",
      "F-eloszlás"
    ],
    answer: "Normális eloszlás, z-érték",
    explanation: [
      "Ha a sokasági szórás ismert, akkor a várható érték intervallumbecslésénél z-eloszlást használunk.",
      "A t-eloszlás akkor kerül elő, ha a sokasági szórás ismeretlen, és mintaszórással becsüljük."
    ]
  },
  {
    source: "Új gyakorló kérdés",
    title: "Konfidenciaintervallum értelmezése",
    question: "Mit jelent helyesen a 95%-os konfidenciaintervallum értelmezése?",
    options: [
      "95% annak a valószínűsége, hogy a konkrét kiszámított intervallumban benne van a sokasági átlag.",
      "Ha nagyon sok mintából számolnánk intervallumot ugyanígy, ezek kb. 95%-a tartalmazná a valódi sokasági paramétert.",
      "A mintaelemek 95%-a biztosan az intervallumba esik.",
      "A sokaság 95%-a biztosan az intervallumba esik."
    ],
    answer: "Ha nagyon sok mintából számolnánk intervallumot ugyanígy, ezek kb. 95%-a tartalmazná a valódi sokasági paramétert.",
    explanation: [
      "A konfidenciaszint az eljárás hosszú távú megbízhatóságára vonatkozik.",
      "A konkrét intervallum már rögzített: vagy tartalmazza a paramétert, vagy nem.",
      "Nem azt jelenti, hogy a mintaelemek vagy a sokaság 95%-a esik bele."
    ]
  },
  {
    source: "Új gyakorló kérdés",
    title: "Mintanagyság és intervallumszélesség",
    question: "Mi történik a várható értékre adott konfidenciaintervallum szélességével, ha minden más változatlan, de a mintanagyság nő?",
    options: [
      "Szélesebb lesz.",
      "Keskenyebb lesz.",
      "Nem változik.",
      "Mindig pontosan kétszeresére nő."
    ],
    answer: "Keskenyebb lesz.",
    explanation: [
      "A standard hiba képlete s / √n vagy σ / √n.",
      "Ha nő a mintanagyság, a nevező nő, ezért a standard hiba csökken.",
      "Emiatt az intervallum is keskenyebb lesz."
    ]
  },
  {
    source: "Új gyakorló kérdés",
    title: "Szórás intervallumbecslése",
    question: "Normális eloszlású sokaság szórására vagy varianciájára szeretnénk konfidenciaintervallumot adni. Melyik eloszlást használjuk?",
    options: [
      "Normális eloszlás",
      "Student-féle t-eloszlás",
      "Khi-négyzet eloszlás",
      "Binomiális eloszlás"
    ],
    answer: "Khi-négyzet eloszlás",
    explanation: [
      "Normális sokaság esetén a variancia intervallumbecslése khi-négyzet eloszláson alapul.",
      "A z- és t-eloszlás inkább várható érték becslésénél jelenik meg."
    ]
  },
  {
    source: "Új gyakorló kérdés",
    title: "Konfidenciaszint és intervallumszélesség",
    question: "Melyik változás növeli a konfidenciaintervallum szélességét, ha minden más változatlan?",
    options: [
      "A mintanagyság növelése",
      "A szórás csökkenése",
      "A konfidenciaszint növelése",
      "A standard hiba csökkenése"
    ],
    answer: "A konfidenciaszint növelése",
    explanation: [
      "Magasabb konfidenciaszinthez nagyobb kritikus érték tartozik.",
      "Emiatt az intervallum szélesebb lesz: nagyobb biztonságot kérünk, ezért nagyobb tartományt kell megadnunk."
    ]
  },
  {
    source: "Új gyakorló kérdés",
    title: "Nullhipotézis elutasítása",
    question: "Mikor utasítjuk el a nullhipotézist egy hipotézisvizsgálat során?",
    options: [
      "Ha a próbafüggvény értéke az elfogadási tartományba esik.",
      "Ha a próbafüggvény értéke a kritikus tartományba esik.",
      "Ha a minta elemszáma nagyobb, mint 30.",
      "Ha a nullhipotézis szövegében egyenlőségjel szerepel."
    ],
    answer: "Ha a próbafüggvény értéke a kritikus tartományba esik.",
    explanation: [
      "A kritikus tartomány azokból az értékekből áll, amelyek H0 fennállása mellett túl szélsőségesnek számítanak.",
      "Ha a próbafüggvény ide esik, akkor H0-t elutasítjuk."
    ]
  },
  {
    source: "Új gyakorló kérdés",
    title: "Elsőfajú hiba",
    question: "Mit jelent az elsőfajú hiba hipotézisvizsgálatban?",
    options: [
      "Igaz nullhipotézist utasítunk el.",
      "Hamis nullhipotézist nem utasítunk el.",
      "Igaz alternatív hipotézist utasítunk el.",
      "Hamis alternatív hipotézist fogadunk el."
    ],
    answer: "Igaz nullhipotézist utasítunk el.",
    explanation: [
      "Elsőfajú hiba akkor történik, ha H0 valójában igaz, de a minta alapján mégis elutasítjuk.",
      "Ennek valószínűsége a szignifikanciaszint, vagyis α."
    ]
  },
  {
    source: "Új gyakorló kérdés",
    title: "Próbafüggvény előjele",
    question: "Egy egymintás várhatóérték-vizsgálatnál a próbafüggvény értéke negatív lett. Mit jelent ez?",
    options: [
      "A mintaátlag kisebb, mint a nullhipotézisben szereplő érték.",
      "A mintaátlag nagyobb, mint a nullhipotézisben szereplő érték.",
      "A nullhipotézist biztosan el kell fogadni.",
      "A próba biztosan hibás."
    ],
    answer: "A mintaátlag kisebb, mint a nullhipotézisben szereplő érték.",
    explanation: [
      "Egymintás átlagvizsgálatnál a próbafüggvény tipikusan t = (x̄ - μ0) / (s / √n).",
      "A nevező pozitív, ezért az előjelet az x̄ - μ0 különbség adja.",
      "Negatív próbaérték azt jelenti, hogy a mintaátlag kisebb, mint a nullhipotézisben feltételezett érték."
    ]
  },
  {
    source: "Új gyakorló kérdés",
    title: "Kétoldali próba felismerése",
    question: "Milyen próbát kell alkalmazni, ha az alternatív hipotézis így szól: H1: μ ≠ 100?",
    options: [
      "Bal oldali próbát",
      "Jobb oldali próbát",
      "Kétoldali próbát",
      "F-próbát"
    ],
    answer: "Kétoldali próbát",
    explanation: [
      "A „≠” jel azt jelenti, hogy mindkét irányú eltérés érdekel.",
      "Az átlag lehet kisebb vagy nagyobb is 100-nál, ezért kétoldali próbát használunk."
    ]
  },
  {
    source: "Új gyakorló kérdés",
    title: "Szignifikanciaszint csökkentése",
    question: "Mi történik általában, ha a szignifikanciaszintet 5%-ról 1%-ra csökkentjük?",
    options: [
      "Könnyebb lesz elutasítani H0-t.",
      "Nehezebb lesz elutasítani H0-t.",
      "Biztosan nő a próbaérték.",
      "A mintaátlag megváltozik."
    ],
    answer: "Nehezebb lesz elutasítani H0-t.",
    explanation: [
      "Kisebb α szigorúbb döntési szabályt jelent.",
      "A kritikus tartomány kisebb lesz, ezért csak szélsőségesebb próbaérték esetén utasítjuk el H0-t."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Szóráshányados értelmezése",
    question: "Egy cégnél vizsgálták, hogy van-e kapcsolat az értékesítők neme és az általuk eladott termékek éves száma között. A szóráshányados értéke 0,12. Adja meg, hogy a nem hány százalékban magyarázza az eladott termékszám szóródását, és adja meg a kapcsolat szorosságát.",
    answer: "kb. 1,5-1,6%, gyenge kapcsolat",
    explanation: [
      "A magyarázóerőt a szóráshányados négyzete adja százalékban: H² × 100.",
      "0,12² × 100 = 1,44%, ami nagyon alacsony magyarázóerő.",
      "Ezért a kapcsolat szorossága: 1, gyenge."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Lineáris regresszió lakásáraknál",
    question: "Egy nagyvárosban a lakásméret nagysága, mint független változó X, és a vételára, mint függő változó Y között vizsgálták a kapcsolatot. A lineáris kapcsolat szorosságának mérőszáma 0,897. A regressziófüggvény: Ŷ = 0,217 + 0,993x. a) Milyen szoros a kapcsolat? b) Egy m²-rel nagyobb lakás ára átlagosan mennyivel változik? c) Adjon becslést egy 117 m²-es lakás árára!",
    answer: "a) szoros; b) 0,993 M Ft; c) 116,398 M Ft",
    explanation: [
      "A 0,897-es korreláció erős, pozitív lineáris kapcsolatot jelez.",
      "A meredekség 0,993, tehát egy plusz m² átlagosan 0,993 millió Ft-tal növeli az árat.",
      "A becslés: 0,217 + 0,993 × 117 = 116,398."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Lineáris trend tengelymetszete",
    question: "2010 januárja és 2022 decembere között egy vállalat havi eladásait vizsgálva az alábbi lineáris trendet azonosították: Yt = 1000 + 50t, ahol t = 1 a hónapok száma, Yt az eladott termékmennyiség. Mit mutat az 1000?",
    options: [
      "2009 decemberében 1000 darab terméket értékesítettek",
      "2010 januárjában 1000 darab terméket értékesítettek",
      "0 termék értékesítése mellett 1000 dollár az árbevétel",
      "havonta átlagosan 1000 darabbal nőtt az értékesítés"
    ],
    answer: "2009 decemberében 1000 darab terméket értékesítettek",
    explanation: [
      "Mivel t = 1 2010 januárja, ezért t = 0 az azt megelőző időpont, vagyis 2009 decembere.",
      "Az 1000 a trendfüggvény tengelymetszete."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Lineáris trend meredeksége",
    question: "2010 januárja és 2022 decembere között egy vállalat havi eladásait vizsgálva az alábbi lineáris trendet azonosították: Yt = 1000 + 50t. Mit mutat az 50?",
    options: [
      "szoros a kapcsolat az eltelt időszak és az eladások között",
      "gyenge a kapcsolat az eltelt időszak és az eladások között",
      "az eltelt időszakban havonta átlagosan 50 darabbal nőtt az eladás",
      "az eltelt időszakban havonta átlagosan 50 darabbal csökkent az eladás"
    ],
    answer: "az eltelt időszakban havonta átlagosan 50 darabbal nőtt az eladás",
    explanation: [
      "Az 50 a trend meredeksége.",
      "Pozitív előjelű, ezért havi átlagos növekedést jelent."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Cramer-mutató és elméleti gyakoriság",
    question: "Egy holland cégnél vizsgálták, hogy van-e kapcsolat a dolgozók neme és a munkába járás módja között. A közlekedési eszközök sorösszegei: személygépkocsi 80, tömegközlekedés 130, kerékpár 140; a nemek oszlopösszegei: férfi 205, nő 145; összesen 350. A Cramer-mutató értéke 0,15. Adja meg n22* értékét, a kapcsolat szorosságát, és a Cramer-mutató értékét két független ismérv esetén.",
    answer: "n22* = 53,86; gyenge kapcsolat; függetlenség esetén 0",
    explanation: [
      "Az elméleti gyakoriság képlete: sorösszeg × oszlopösszeg / főösszeg.",
      "n22* = 130 × 145 / 350 = 53,86.",
      "A 0,15-ös Cramer-mutató gyenge kapcsolatot jelez, független ismérvek esetén pedig a Cramer-mutató értéke 0."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Két mennyiségi ismérv kapcsolata",
    question: "Nevezze meg két mennyiségi ismérv kapcsolatát!",
    options: ["asszociáció", "vegyes kapcsolat", "korreláció", "függetlenség"],
    answer: "korreláció",
    explanation: [
      "Két mennyiségi ismérv kapcsolatát korrelációval vizsgáljuk.",
      "Asszociáció két minőségi ismérv kapcsolatánál, vegyes kapcsolat pedig egy minőségi és egy mennyiségi ismérvnél van."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Determinációs együttható és korreláció",
    question: "A hallgató tanulmányi átlaga 81%-ban magyarázza a tanulmányi ösztöndíj nagyságának szóródását. Ekkor az r értéke ...",
    options: ["0,9", "-0,9", "0", "1"],
    answer: "0,9",
    explanation: [
      "A 81% az R² = 0,81 értéket jelenti.",
      "Ennek négyzetgyöke r = 0,9, és itt pozitív kapcsolatot feltételezünk."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Mozgóátlagolás célja",
    question: "Egészítse ki az alábbi mondatot: A mozgóátlagolás célja ...",
    options: [
      "az előrejelzés",
      "a periodikus és véletlen hatás kiküszöbölése, tompítása",
      "a fejlődés átlagos ütemének a meghatározása",
      "az analitikus trendszámítás"
    ],
    answer: "a periodikus és véletlen hatás kiküszöbölése, tompítása",
    explanation: [
      "A mozgóátlag simítja az idősor ingadozásait.",
      "Így jobban láthatóvá válik az alapirányzat, vagyis a trend."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Szóráshányados jelentése",
    question: "A H szóráshányados mérőszámra vonatkozóan melyik megállapítás igaz?",
    options: [
      "Az asszociációs kapcsolat szorosságának mérőszáma.",
      "A vegyes kapcsolat szorosságát és irányát mutatja.",
      "A vegyes kapcsolat szorosságát méri.",
      "A minőségi ismérvnek a mennyiségi ismérvre gyakorolt hatását fejezi ki, és százalékosan értelmezhető."
    ],
    answer: "A vegyes kapcsolat szorosságát méri.",
    explanation: [
      "A szóráshányados egy minőségi és egy mennyiségi ismérv, vagyis vegyes kapcsolat szorosságát méri.",
      "Irányt nem mutat, és a százalékos magyarázóerőt nem maga H, hanem H² × 100 adja."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Két mennyiségi ismérv ábrája",
    question: "Két mennyiségi ismérv ábrája:",
    options: ["a vonaldiagram.", "a pontdiagram.", "a hisztogram.", "a gyakorisági poligon."],
    answer: "a pontdiagram.",
    explanation: [
      "Két mennyiségi ismérv kapcsolatát pontdiagrammal, vagyis szórásdiagrammal ábrázoljuk.",
      "Az egyik változó az X tengelyre, a másik az Y tengelyre kerül."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "A lineáris regresszió b₁ paramétere",
    question: "A lineáris regresszió-függvény b₁ paramétere azt mutatja meg:",
    options: [
      "ha a magyarázóváltozó egy egységgel nő, átlagosan hogyan változik az eredményváltozó értéke.",
      "ha a magyarázóváltozó egy egységgel nő, átlagosan hányszorosára változik az eredményváltozó értéke.",
      "ha a magyarázóváltozó egy százalékkal nő, átlagosan hogyan változik az eredményváltozó értéke.",
      "ha a magyarázóváltozó változatlan, átlagosan hogyan változik az eredményváltozó értéke."
    ],
    answer: "ha a magyarázóváltozó egy egységgel nő, átlagosan hogyan változik az eredményváltozó értéke.",
    explanation: [
      "Lineáris regresszióban a b₁ a meredekség.",
      "Azt mutatja, hogy X egy egységnyi növekedése átlagosan mekkora változást okoz Y-ban."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Rugalmassági együttható",
    question: "A rugalmassági együtthatóra vonatkozóan mely állítás nem igaz?",
    options: [
      "Csak pozitív szám lehet.",
      "A kiszámított eredmény százalék.",
      "Azt mutatja meg, hogy a magyarázó változó 1%-os növekedésére átlagosan hány százalékkal változik az eredményváltozó.",
      "Ha abszolút értéke 1-nél nagyobb, ez azt jelenti, hogy a magyarázó változó változására az eredményváltozó rugalmasan reagál."
    ],
    answer: "Csak pozitív szám lehet.",
    explanation: [
      "A rugalmassági együttható lehet negatív is, ha a két változó ellentétes irányban mozog.",
      "Például áremelkedés hatására a kereslet csökkenhet."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Hibás állítás a lineáris regresszió b₁ paraméteréről",
    question: "Jelölje a hibás választ! A lineáris regresszió-függvény b₁ paramétere:",
    options: [
      "az egyenes meredekségét határozza meg.",
      "iránytangens.",
      "regressziós együttható.",
      "az x = 0 helyen mutatja a függvény értékét."
    ],
    answer: "az x = 0 helyen mutatja a függvény értékét.",
    explanation: [
      "Az x = 0 helyen felvett értéket a b₀ paraméter mutatja.",
      "A b₁ a meredekség, vagyis az iránytangens."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "SSE szabadságfoka",
    question: "A hibatényező / SSE szabadságfoka kétváltozós esetben:",
    options: ["n", "n - 1", "n - 2", "1"],
    answer: "n - 2",
    explanation: [
      "Egyszerű lineáris regresszióban két paramétert becslünk: b₀-t és b₁-et.",
      "Emiatt a hibatag szabadságfoka n - 2."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Hatványkitevős függvény b₁ paramétere",
    question: "Jelölje a helyes állítást! Melyik típusú függvény b₁ paramétere értelmezhető elaszticitási mutatóként?",
    options: ["az exponenciális.", "a lineáris.", "a hatványkitevős.", "a parabolikus."],
    answer: "a hatványkitevős.",
    explanation: [
      "A hatványkitevős függvény alakja például y = a · x^b.",
      "Ebben a b paraméter közvetlenül rugalmassági együtthatóként értelmezhető."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Exponenciális trend b₁ paramétere",
    question: "Egy termék termelésének alakulását 2001-2013 között az alábbi trendfüggvény írja le: ŷ = 540 · 1,065^t, ahol t = 1, 2, ..., n. Értelmezze a trendfüggvény b₁ paraméterét!",
    options: [
      "A termelés évente átlagosan 1,065%-kal emelkedett.",
      "A termelés évente átlagosan 106,5%-kal emelkedett.",
      "A termelés évente átlagosan 6,5%-kal emelkedett.",
      "A termelés évente átlagosan 0,65%-kal emelkedett."
    ],
    answer: "A termelés évente átlagosan 6,5%-kal emelkedett.",
    explanation: [
      "Az 1,065 azt jelenti, hogy az éves átlagos szorzótényező 1,065.",
      "Ez százalékban 1,065 - 1 = 0,065, vagyis 6,5%-os növekedés."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Négytagú mozgóátlag",
    question: "Egy hosszabb idősor utolsó néhány eleme: 100, 110, 112, 118, 120, 121, 124, 125. Állapítsa meg a két utolsó négytagú mozgóátlag értékét, és válassza ki a helyes eredményt!",
    options: ["121,7 és 123,0.", "120,8 és 122,5.", "119,3 és 121,6.", "119,3 és 116,8."],
    answer: "119,3 és 121,6.",
    explanation: [
      "Páros tagszámú, vagyis négytagú mozgóátlagnál centrírozni kell.",
      "A két utolsó centrírozott mozgóátlag ezért nem egyszerűen az utolsó két négyes átlaga, hanem azok középértékeiből jön ki."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Nyers szezonális eltérés",
    question: "Az okostelefonok értékesítését figyelték meg egy boltban 4 éven keresztül, negyedévenként. A 4 tagú mozgóátlagolással kapott trendértékek levonása után az I. negyedévre vonatkozó eltérések összege -12 000 db. Mennyi az I. negyedévre vonatkozó nyers szezonális eltérés?",
    options: ["3 000 db", "4 000 db", "4 500 db", "3 600 db"],
    answer: "4 000 db",
    explanation: [
      "A centrírozott négytagú mozgóátlag miatt az I. negyedévre itt 3 eltérés használható.",
      "-12 000 / 3 = -4 000, tehát az eltérés nagysága 4 000 db."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Multiplikatív modell",
    question: "Idősor-elemzés esetén akkor van szó multiplikatív modellről, ha:",
    options: [
      "az alapvető tendencia csak exponenciális trenddel közelíthető és szezonindex számítható.",
      "az alapvető tendencia csak mozgóátlagolású trenddel közelíthető és szezonindex számítható.",
      "az idősor komponensei szorzatszerűen kapcsolódnak egymáshoz.",
      "az idősor komponensei összegszerűen kapcsolódnak egymáshoz."
    ],
    answer: "az idősor komponensei szorzatszerűen kapcsolódnak egymáshoz.",
    explanation: [
      "Multiplikatív modellnél az idősor komponensei szorzással kapcsolódnak össze.",
      "Például: trend × szezonhatás × véletlen hatás."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Szezonindex jelentése",
    question: "Válassza ki a helyes választ! A szezonindex azt fejezi ki, hogy:",
    options: [
      "a szezonális kilengések mértéke az egyes időszakokban mekkora.",
      "a j-edik szezonban a megfigyelt idősor átlagosan mennyivel tér el a trendértéktől.",
      "a j-edik szezonban a szezonhatás értéke átlagosan hányszorosa a trendértéknek.",
      "a j-edik szezonban a megfigyelt idősor átlagosan hányszorosa a trendértéknek."
    ],
    answer: "a j-edik szezonban a megfigyelt idősor átlagosan hányszorosa a trendértéknek.",
    explanation: [
      "A szezonindex multiplikatív mutató.",
      "Azt mutatja, hogy az adott szezonban a tényleges érték átlagosan hányszorosa a trend szerinti értéknek."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Korrigált szezonális eltérés",
    question: "A Budapesti Nagycirkusz jegybevételének 2008 és 2013 közötti alakulása alapján becsülték a szezonalitás alábbi mutatószámait. Nyers szezonális eltérések: sI = -12, sII = 2,3, sIII = 18,3, sIV = -10. Válassza ki a korrigált szezonális eltérést a IV. negyedévre!",
    options: ["1,4", "-1,4", "-9,65", "-10,35"],
    answer: "-9,65",
    explanation: [
      "Additív modellben a korrigált szezonális eltérések összege 0 kell legyen.",
      "A nyers eltérések összege -1,4, ennek negyedrésze -0,35.",
      "A IV. negyedévre: -10 - (-0,35) = -9,65."
    ]
  },
  {
    source: "minta ZH / mintazh megoldott.docx",
    title: "Szezonindex értelmezése",
    question: "Egy termék forgalmának alakulását negyedévenként 2007 és 2013 között vizsgálva az I. negyedévi szezonindex 0,8. Válassza ki a helyes értelmezést!",
    options: [
      "A termék forgalma a szezonális és a véletlen hatás következtében az első negyedévben átlagosan 80 százaléka a trend szerinti értéknek.",
      "A termék forgalma az első negyedévben az átlagosnak 80 százaléka.",
      "Az első negyedévben a termék forgalma átlagosan 80%-kal tér el a trend szerinti értéktől.",
      "Az első negyedévben a termék forgalma átlagosan 20%-kal kisebb, mint a trend szerinti érték."
    ],
    answer: "Az első negyedévben a termék forgalma átlagosan 20%-kal kisebb, mint a trend szerinti érték.",
    explanation: [
      "A 0,8-as szezonindex azt jelenti, hogy az adott negyedév értéke a trendérték 80%-a.",
      "Ez 20%-kal alacsonyabb értéket jelent a trendhez képest."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Szisztematikus mintavétel",
    question: "A szisztematikus mintavétel mindig véletlen mintavételnek számít.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "A szisztematikus mintavétel csak akkor tekinthető véletlen jellegűnek, ha a kezdőpontot véletlenszerűen választjuk ki.",
      "Önmagában az, hogy minden k-adik elemet választjuk, még nem feltétlenül véletlen mintavétel."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "F-próba szórásokra",
    question: "Egy enyvgyártó cég két termék kötőszilárdságát kívánta összehasonlítani. Mindkét típusból 13-13 elemű véletlen mintát készítettek. Adatok: x̄1 = 38, Σd1² = 1330, x̄2 = 39,5, Σd2² = 588, α = 5%. Vizsgálja meg azt az állítást, hogy az első típus szilárdságának szórása nagyobb!",
    options: [
      "Próbafüggvény értéke: 2,26; elfogadási tartomány: 0,36-2,75; döntés: H0-t elfogadjuk, nagyobb.",
      "Próbafüggvény értéke: 2,26; elfogadási tartomány: 0-2,75; döntés: H0-t elfogadjuk, nem nagyobb.",
      "Próbafüggvény értéke: 2,26; elfogadási tartomány: 0-3,25; döntés: H0-t elfogadjuk, nagyobb.",
      "Próbafüggvény értéke: 1,50; elfogadási tartomány: 0,31-3,25; döntés: H0-t elfogadjuk, nem nagyobb."
    ],
    answer: "Próbafüggvény értéke: 2,26; elfogadási tartomány: 0-2,75; döntés: H0-t elfogadjuk, nem nagyobb.",
    explanation: [
      "A két szórás összehasonlítására F-próbát használunk.",
      "A próbafüggvény: F = 1330 / 588 = 2,26.",
      "Mivel ez kisebb, mint a kritikus érték 2,75, nincs elég bizonyíték arra, hogy az első szórás nagyobb lenne."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Relatív hiba jele és értelmezése",
    question: "A relatív hiba jele Ve, és az a jó, ha értéke jóval 10% alatt van.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "A relatív hiba jele gyakran Ve.",
      "Minél kisebb az értéke, annál pontosabb a regressziós becslés; a 10% alatti érték jónak tekinthető."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Regressziós függvény tesztelése",
    question: "A regressziós függvény tesztelése során a próbafüggvény a t₀.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "A regressziós függvény egészének tesztelésénél általában F-próbát használunk.",
      "A t-próba inkább egy-egy regressziós paraméter vizsgálatánál jelenik meg."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "F-eloszlás szabadságfokai kétváltozós esetben",
    question: "Az F-eloszlás táblázatos értékének keresésénél kétváltozós esetben:",
    options: [
      "a számláló szabadságfoka 1, a nevezőjé pedig n - 2.",
      "a számláló szabadságfoka n - 1, a nevezőjé pedig n - 2.",
      "a számláló szabadságfoka 1, a nevezőjé pedig n - 1.",
      "a számláló szabadságfoka n - 2, a nevezőjé pedig n - 1."
    ],
    answer: "a számláló szabadságfoka 1, a nevezőjé pedig n - 2.",
    explanation: [
      "Egyszerű kétváltozós regressziónál az F-próbában a számláló szabadságfoka 1.",
      "A hibatag szabadságfoka n - 2."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Relatív hiba jelentése",
    question: "A relatív hiba kifejezi, hogy a regressziós becslések átlagosan hány százalékkal térnek el az eredményváltozó megfigyelt értékeitől.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "A relatív hiba a becslési hiba nagyságát százalékos formában mutatja.",
      "Ez alapján megítélhető a regressziós becslés pontossága."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Regressziós paraméterek konfidencia-intervalluma",
    question: "A regresszió-függvény paramétereinek konfidencia-intervallumát a Student-féle t-eloszlás táblázatos értékének segítségével határozzuk meg, amit n - 1-es szabadságfoknál keresünk.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Egyszerű lineáris regressziónál két paramétert becslünk, ezért a szabadságfok n - 2.",
      "Nem n - 1-nél kell keresni a t-értéket."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Lineáris trend b₀ paramétere Σt = 0 esetén",
    question: "Lineáris trend esetében a b₀ paramétert, ha a Σt = 0 eljárással határoztuk meg, és páros az időpontok/időszakok száma, akkor a vizsgált idősor adatainak számtani átlagaként értelmezzük.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "Ha Σt = 0, akkor a lineáris trend b₀ paramétere az idősor átlagos szintjét adja.",
      "Ez páros számú időszak esetén is a megfigyelt értékek számtani átlaga."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Exponenciális trend b₁² értelmezése",
    question: "Exponenciális esetben, ha a Σt = 0 eljárást alkalmaztuk, és páros az időszakok/időpontok száma, akkor b₁² az időegységenkénti átlagos változás mértéke.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "Páros számú időszak esetén a kódolt t értékek általában kettesével változnak.",
      "Ezért az egy időegységre jutó átlagos változást b₁² fejezi ki."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Σt = 0 eljárás alkalmazhatósága",
    question: "A Σt = 0 eljárás a paraméterek meghatározására csak abban az esetben alkalmazható, ha az idősor egymást követő azonos hosszúságú időszakokra, vagy egymástól egyenlő távolságra lévő időpontokra vonatkozik.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "A Σt = 0 módszer szabályos időbeli elrendezést feltételez.",
      "Akkor használható jól, ha az időszakok azonos hosszúak vagy az időpontok egyenlő távolságra vannak egymástól."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Exponenciális trend 2b₁ értelmezése",
    question: "Exponenciális esetben, ha a Σt = 0 eljárást alkalmaztuk, és páros az időszakok/időpontok száma, akkor 2b₁ az időegységenkénti átlagos változás mértéke.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Páros számú időszak esetén nem 2b₁, hanem b₁² fejezi ki az időegységenkénti átlagos változás mértékét.",
      "A 2b₁ nem megfelelő értelmezés."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Lineáris trend b₁ paramétere",
    question: "Lineáris esetben a b₁ paraméter az időegységenkénti átlagos abszolút változás mértéke, előjelétől függően növekedést vagy csökkenést jelez a vizsgálatba bevont időtartam alatt.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "Lineáris trendnél a b₁ a meredekség.",
      "Ez mutatja, hogy egy időegység alatt átlagosan mennyivel nő vagy csökken az idősor értéke."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Additív vs. multiplikatív szezonhatás",
    question: "Additív összefüggés esetén a szezonhatás a trendtől való relatív eltérés, multiplikatív kapcsolat esetén pedig abszolút eltérés formájában jelentkezik.",
    options: ["Igaz", "Hamis"],
    answer: "Hamis",
    explanation: [
      "Pont fordítva van: additív modellnél a szezonhatás abszolút eltérés, multiplikatív modellnél pedig relatív eltérés vagy szezonindex.",
      "Additívnál: Y = T + S + V, multiplikatívnál: Y = T · S · V."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "2014. IV. negyedévi várható érték",
    question: "Egy bizonyos autómárka értékesítését figyelték meg 2008-2013 között, negyedévenként. A hosszútávú trendet a ŷ = 21 + 37t függvény írja le, míg a negyedéves szezonális eltérések rendre: -260, 420, 380, -540. Mekkora a 2014. IV. negyedévre várható értékesítés nagysága?",
    options: ["1597 db", "1057 db", "517 db", "797 db"],
    answer: "517 db",
    explanation: [
      "2008-2013 között 6 év × 4 negyedév = 24 időszak, ezért 2014 IV. negyedéve a t = 28.",
      "A trendérték: 21 + 37 · 28 = 1057.",
      "Ehhez az IV. negyedéves szezonális eltérés -540, tehát 1057 - 540 = 517."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Additív kapcsolat idősorban",
    question: "Ha az idősor adatai a komponensek összegeként adódnak, additív kapcsolatról beszélünk, és ebben az esetben szezonális eltérésekkel mutatjuk ki a szezonhatást.",
    options: ["Igaz", "Hamis"],
    answer: "Igaz",
    explanation: [
      "Additív modellnél az idősor komponensei összeadódnak.",
      "Ilyenkor a szezonhatást szezonális eltérésként, vagyis abszolút különbségként értelmezzük."
    ]
  },
  {
    source: "Összes gyakorló / összes gyakorló megoldva.docx",
    title: "Balaton-parti étterem III. negyedévi szezonindexe",
    question: "Egy Balaton-parti étterem forgalmának negyedéves tisztított szezonindexei: sI = 0,5, sII = 0,8, sIII = ..., sIV = 0,7. Válassza ki a helyes értelmezést! A III. negyedévi szezonindex azt jelenti, hogy:",
    options: [
      "a III. negyedévben az étterem forgalma megegyezik az átlagossal.",
      "a III. negyedévi szezonindexet nem ismerjük, így a kérdés nem válaszolható meg.",
      "a III. negyedévben a szezonhatás miatt az étterem forgalma átlagosan 3,57-szerese a trend szerinti értéknek.",
      "a III. negyedévben a szezonhatás miatt az étterem forgalma átlagosan kétszerese a trend szerinti értéknek."
    ],
    answer: "a III. negyedévben a szezonhatás miatt az étterem forgalma átlagosan kétszerese a trend szerinti értéknek.",
    explanation: [
      "Negyedéves szezonindexek összege 4, ezért sIII = 4 - 0,5 - 0,8 - 0,7 = 2.",
      "A 2 azt jelenti, hogy a III. negyedévben a forgalom átlagosan a trendérték kétszerese."
    ]
  }
];

const TOPICS_BY_TITLE = {
  "Mintavételi függetlenség": [TOPICS.sampling],
  "Azonos eloszlású minta": [TOPICS.sampling],
  "Rétegzett mintavétel": [TOPICS.sampling],
  "Ismert szórás": [TOPICS.tests],
  "Szórás becslése": [TOPICS.tests],
  "Ismeretlen szórás": [TOPICS.tests],
  "Rétegzés és standard hiba": [TOPICS.sampling],
  "Nem arányos rétegzés": [TOPICS.sampling],
  "Rétegzett mintavétel pontossága": [TOPICS.sampling],
  "Egymintás t-próba": [TOPICS.tests],
  "Másodfajú hiba": [TOPICS.tests],
  "Nullhipotézis alakja": [TOPICS.tests],
  "Kétmintás t-próba": [TOPICS.tests],
  "F-próba szórásokra": [TOPICS.tests],
  "Két szórás tesztelése": [TOPICS.tests],
  "ANOVA": [TOPICS.relationship],
  "Függetlenségvizsgálat célja": [TOPICS.relationship],
  "Illeszkedésvizsgálat": [TOPICS.relationship],
  "Függetlenségvizsgálat hipotézisei": [TOPICS.relationship],
  "Cramer-féle asszociációs együttható": [TOPICS.relationship, TOPICS.sampleExam],
  "Független kapcsolat": [TOPICS.relationship],
  "Korrelációs hányados nulla értéke": [TOPICS.relationship],
  "Eltérés-négyzetösszegek": [TOPICS.relationship],
  "H-mutató": [TOPICS.relationship],
  "Rangkorreláció ordinális skálán": [TOPICS.relationship],
  "Lineáris korreláció": [TOPICS.relationship],
  "Rangkorreláció arányskálán": [TOPICS.relationship],
  "Korrelációs együttható értékkészlete": [TOPICS.relationship],
  "Standard hiba számítása": [TOPICS.sampling, TOPICS.sampleExam],
  "Egymintás átlagvizsgálat próbaértéke": [TOPICS.tests, TOPICS.sampleExam],
  "Nem i.i.d. minta": [TOPICS.sampling, TOPICS.sampleExam],
  "Hipotézisvizsgálat döntése": [TOPICS.tests, TOPICS.sampleExam],
  "Csoportos mintavétel hatásossága": [TOPICS.sampling, TOPICS.sampleExam],
  "Csoportos mintavétel oka": [TOPICS.sampling, TOPICS.sampleExam],
  "Mintavételi hiba állításai": [TOPICS.sampling, TOPICS.sampleExam],
  "Véletlen mintavétel": [TOPICS.sampling, TOPICS.sampleExam],
  "Másodfajú hiba értelmezése": [TOPICS.tests, TOPICS.sampleExam],
  "Intervallumbecslés z-eloszlással": [TOPICS.sampling],
  "Konfidenciaintervallum értelmezése": [TOPICS.sampling],
  "Mintanagyság és intervallumszélesség": [TOPICS.sampling],
  "Szórás intervallumbecslése": [TOPICS.sampling],
  "Konfidenciaszint és intervallumszélesség": [TOPICS.sampling],
  "Nullhipotézis elutasítása": [TOPICS.tests],
  "Elsőfajú hiba": [TOPICS.tests],
  "Próbafüggvény előjele": [TOPICS.tests],
  "Kétoldali próba felismerése": [TOPICS.tests],
  "Szignifikanciaszint csökkentése": [TOPICS.tests],
  "Szóráshányados értelmezése": [TOPICS.relationship, TOPICS.sampleExam],
  "Lineáris regresszió lakásáraknál": [TOPICS.regression, TOPICS.sampleExam],
  "Lineáris trend tengelymetszete": [TOPICS.trend, TOPICS.sampleExam],
  "Lineáris trend meredeksége": [TOPICS.trend, TOPICS.sampleExam],
  "Cramer-mutató és elméleti gyakoriság": [TOPICS.relationship, TOPICS.sampleExam],
  "Két mennyiségi ismérv kapcsolata": [TOPICS.relationship, TOPICS.sampleExam],
  "Determinációs együttható és korreláció": [TOPICS.relationship, TOPICS.sampleExam],
  "Mozgóátlagolás célja": [TOPICS.trend, TOPICS.sampleExam],
  "Szóráshányados jelentése": [TOPICS.relationship, TOPICS.sampleExam],
  "Két mennyiségi ismérv ábrája": [TOPICS.relationship, TOPICS.sampleExam],
  "A lineáris regresszió b₁ paramétere": [TOPICS.regression, TOPICS.sampleExam],
  "Rugalmassági együttható": [TOPICS.regression, TOPICS.sampleExam],
  "Hibás állítás a lineáris regresszió b₁ paraméteréről": [TOPICS.regression, TOPICS.sampleExam],
  "SSE szabadságfoka": [TOPICS.regression, TOPICS.sampleExam],
  "Hatványkitevős függvény b₁ paramétere": [TOPICS.regression, TOPICS.sampleExam],
  "Exponenciális trend b₁ paramétere": [TOPICS.trend, TOPICS.sampleExam],
  "Négytagú mozgóátlag": [TOPICS.trend, TOPICS.sampleExam],
  "Nyers szezonális eltérés": [TOPICS.trend, TOPICS.sampleExam],
  "Multiplikatív modell": [TOPICS.trend, TOPICS.sampleExam],
  "Szezonindex jelentése": [TOPICS.trend, TOPICS.sampleExam],
  "Korrigált szezonális eltérés": [TOPICS.trend, TOPICS.sampleExam],
  "Szezonindex értelmezése": [TOPICS.trend, TOPICS.sampleExam],
  "Szisztematikus mintavétel": [TOPICS.sampling],
  "Relatív hiba jele és értelmezése": [TOPICS.regression],
  "Regressziós függvény tesztelése": [TOPICS.regression],
  "F-eloszlás szabadságfokai kétváltozós esetben": [TOPICS.regression],
  "Relatív hiba jelentése": [TOPICS.regression],
  "Regressziós paraméterek konfidencia-intervalluma": [TOPICS.regression],
  "Lineáris trend b₀ paramétere Σt = 0 esetén": [TOPICS.trend],
  "Exponenciális trend b₁² értelmezése": [TOPICS.trend],
  "Σt = 0 eljárás alkalmazhatósága": [TOPICS.trend],
  "Exponenciális trend 2b₁ értelmezése": [TOPICS.trend],
  "Lineáris trend b₁ paramétere": [TOPICS.trend],
  "Additív vs. multiplikatív szezonhatás": [TOPICS.trend],
  "2014. IV. negyedévi várható érték": [TOPICS.trend],
  "Additív kapcsolat idősorban": [TOPICS.trend],
  "Balaton-parti étterem III. negyedévi szezonindexe": [TOPICS.trend]
};

window.quizTopics = Object.values(TOPICS);
window.quizQuestions = window.quizQuestions.map(question => ({
  ...question,
  topics: TOPICS_BY_TITLE[question.title] || ["Egyéb"],
  topic: (TOPICS_BY_TITLE[question.title] || ["Egyéb"])[0]
}));
