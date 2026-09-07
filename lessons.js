// Original exercises aligned with GWO class 6 topics 1.1–1.3.
// Source inventory and coverage: MATERIALY.md.
const task = (q,a,correct,hint,explain) => ({q,a,correct,hint,explain});
window.lessons = [
  {id:'natural',icon:'⚒️',title:'Kuźnia Liczb',topic:'Rachunki pamięciowe',intro:'Pomóż Iskierce przygotować kryształy do wyprawy. Rozbijaj duże liczby na wygodne części. W wyrażeniach zacznij od nawiasów, potem wykonaj mnożenie i dzielenie, a na końcu dodawanie i odejmowanie.',example:'Przykład: 198 + 45 = 200 + 43 = 243. A w 7 + 3 · 4 najpierw liczysz 3 · 4, więc wynik to 19.',questions:[
    task('W kuźni jest 296 kryształów. Iskierka dokłada 104. Ile jest razem?',['390','400','410'],1,'Przenieś 4 ze 104 do 296, żeby otrzymać pełną setkę.','296 + 104 = 300 + 100 = 400.'),
    task('Oblicz w pamięci: 803 − 98.',['705','715','701'],0,'Odejmij 100, a potem oddaj 2.','803 − 100 + 2 = 705.'),
    task('W 7 skrzynkach mieści się po 202 kamienie. Ile kamieni jest razem?',['1414','1404','1424'],0,'Pomnóż osobno 200 i 2 przez 7.','7 · 200 + 7 · 2 = 1400 + 14 = 1414.'),
    task('Oblicz: 54 − 6 · 7.',['336','12','48'],1,'Mnożenie wykonaj przed odejmowaniem.','6 · 7 = 42, następnie 54 − 42 = 12.'),
    task('Oblicz: (18 + 14) : 4.',['8','21,5','7'],0,'Najpierw oblicz sumę w nawiasie.','18 + 14 = 32, a 32 : 4 = 8.'),
    task('Oblicz: 72 : 9 · 3.',['24','8','72'],0,'Dzielenie i mnożenie mają ten sam priorytet. Licz od lewej.','72 : 9 = 8, a 8 · 3 = 24.'),
    task('Rozdziel 47 kamieni do woreczków po 6. Ile kamieni zostanie poza pełnymi woreczkami?',['7','6','5'],2,'Znajdź największą wielokrotność 6, która nie przekracza 47.','7 · 6 = 42. Zostaje 47 − 42 = 5 kamieni.'),
    task('Która liczba jest dzielnikiem zarówno 24, jak i 36?',['8','6','9'],1,'Sprawdź, czy obie liczby dzielą się bez reszty przez wybraną liczbę.','24 : 6 = 4 i 36 : 6 = 6. Ósemka nie dzieli 36, a dziewiątka nie dzieli 24.')
  ]},
  {id:'market',icon:'🧺',title:'Smoczy Targ',topic:'Ułamki dziesiętne w pamięci',intro:'Zbieramy zapasy na wyprawę! Przy dodawaniu łącz części tego samego rodzaju: jedności z jednościami, dziesiąte z dziesiątymi. Pamiętaj, że 0,5 to połowa.',example:'Przykład: 2,5 + 1,3 = 3,8. Połowa 6 zł to 0,5 · 6 zł = 3 zł.',questions:[
    task('Wybierz większą liczbę.',['0,8','0,75','Są równe'],0,'Zapisz obie liczby w setnych.','0,8 = 0,80. Osiemdziesiąt setnych to więcej niż siedemdziesiąt pięć.'),
    task('Jabłka kosztują 2,40 zł, a gruszki 3,50 zł. Ile zapłacisz razem?',['5,09 zł','5,90 zł','6,90 zł'],1,'Dodaj złote do złotych, a grosze do groszy.','2,40 + 3,50 = 5,90 zł.'),
    task('Masz 10 zł. Zapasy kosztują 6,80 zł. Ile zostanie?',['4,20 zł','3,80 zł','3,20 zł'],2,'Policz, ile brakuje od 6,80 do 7, a potem do 10.','0,20 + 3 = 3,20 zł reszty.'),
    task('Oblicz: 0,47 · 10.',['4,7','0,047','47'],0,'Po pomnożeniu przez 10 liczba jest dziesięć razy większa.','47 setnych · 10 = 47 dziesiątych = 4,7.'),
    task('Oblicz: 6,3 : 100.',['0,63','0,063','630'],1,'Wynik ma być sto razy mniejszy od 6,3.','6,3 : 10 = 0,63, a kolejne dzielenie przez 10 daje 0,063.'),
    task('Kilogram smoczych jagód kosztuje 9 zł. Ile kosztuje 0,5 kg?',['4,50 zł','18 zł','0,45 zł'],0,'Pół kilograma kosztuje połowę ceny kilograma.','9 : 2 = 4,50 zł.'),
    task('Podziel 4,8 litra soku po równo między 6 smoków. Ile dostanie każdy?',['8 l','0,08 l','0,8 l'],2,'Pomyśl o 48 dziesiątych podzielonych na 6 części.','48 : 6 = 8, więc 48 dziesiątych : 6 = 8 dziesiątych, czyli 0,8 l.'),
    task('Oblicz: 1,2 + 0,4 · 2.',['3,2','2','1,6'],1,'Najpierw wykonaj mnożenie.','0,4 · 2 = 0,8. Następnie 1,2 + 0,8 = 2.')
  ]},
  {id:'workshop',icon:'🛠️',title:'Warsztat Przecinków',topic:'Działania pisemne',intro:'Przygotuj kartkę i ołówek. W dodawaniu i odejmowaniu zapisz przecinki jeden pod drugim. Możesz dopisać zera na końcu części dziesiętnej. Przy mnożeniu policz łącznie miejsca po przecinku w obu czynnikach.',example:'Przykład: 4,6 + 0,27 zapisujemy jako 4,60 + 0,27 = 4,87. W 1,2 · 0,3 liczymy 12 · 3 = 36, a potem wstawiamy dwa miejsca po przecinku: 0,36.',questions:[
    task('Dodajesz pisemnie 7,4 i 0,86. Jaki zapis pomoże wyrównać części dziesiętne?',['7,04 + 0,86','7,40 + 0,86','74 + 0,86'],1,'Dopisanie zera na końcu części dziesiętnej nie zmienia wartości.','7,4 = 7,40. Teraz łatwo ustawić przecinki w jednej kolumnie.'),
    task('Oblicz na kartce: 12,7 + 3,85.',['16,55','15,92','16,05'],0,'Zapisz 12,7 jako 12,70. Dodawaj od prawej.','12,70 + 3,85 = 16,55. Siedem dziesiątych i osiem dziesiątych daje 1,5.'),
    task('Oblicz: 8,2 − 3,476.',['5,276','4,824','4,724'],2,'Zapisz 8,2 jako 8,200. Pamiętaj o pożyczaniu między kolumnami.','8,200 − 3,476 = 4,724. Sprawdzenie: 4,724 + 3,476 = 8,200.'),
    task('W działaniu 2,4 · 1,3 otrzymujesz najpierw 24 · 13 = 312. Gdzie wstawisz przecinek?',['31,2','3,12','0,312'],1,'Oba czynniki mają po jednym miejscu po przecinku.','Łącznie są dwa miejsca po przecinku, więc wynik to 3,12.'),
    task('Oblicz: 3,25 · 4.',['13','1,3','12,1'],0,'Pomnóż 325 przez 4, a potem zaznacz dwa miejsca po przecinku.','325 · 4 = 1300. Dwa miejsca po przecinku dają 13,00 = 13.'),
    task('Które działanie ma taki sam wynik jak 5,46 : 0,6?',['54,6 : 0,6','5,46 : 6','54,6 : 6'],2,'Pomnóż dzielną i dzielnik przez tę samą liczbę, żeby dzielnik był całkowity.','Mnożymy obie liczby przez 10: 5,46 : 0,6 = 54,6 : 6.'),
    task('Oblicz: 54,6 : 6.',['9,1','91','0,91'],0,'Podziel osobno 54 i pozostałe 0,6 przez 6.','54 : 6 = 9, a 0,6 : 6 = 0,1. Razem 9,1.'),
    task('Do naprawy skrzydła potrzeba 1,5 m tkaniny po 8,40 zł za metr. Ile kosztuje tkanina?',['9,90 zł','12,60 zł','126 zł'],1,'Policz cenę metra i połowy metra, a następnie je dodaj.','8,40 + 4,20 = 12,60 zł. To również wynik 1,5 · 8,40.')
  ]},
  {id:'fractions',icon:'🌉',title:'Most Ułamków',topic:'Powtórka ułamków zwykłych',intro:'Przypomnij sobie części całości, skracanie i działania na ułamkach. Przy dodawaniu i odejmowaniu najpierw sprowadź ułamki do wspólnego mianownika.',example:'Przykład: 1/2 + 1/4 = 2/4 + 1/4 = 3/4.',questions:window.fractionQuestions}
];
