import Layout from "@/app/layout";
import Image from "next/image";
import stetoskop from "@/assets/zdrowie/Badania artykul.jpg";



export default function Zdrowie() {
    return (
      <div style={{background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)'}}>
          <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya"></h1>
          <div className="mx-12 mt-12 pb-16">
              
          <div className="bg-white h-300 flex shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  
  
                  <div className=" text-black  font-abhaya  ml-12 mr-12 w-1/2 flex flex-col justify-center pt-12 pb-12">
                 <h2 className=" text-3xl font-semibold">
                 Regularne badania
                 </h2>
                 <p className="mt-4 text-xl font-light leading-8  text-justify">
                 Dobra dieta, dużo ruchu, zrównoważony tryb życia i profilaktyka – to recepta na zdrowe, długie życie. W zależności od wieku, płci, stylu życia oraz zachorowań w rodzinie, jesteśmy mniej lub bardziej podatni na rozmaite zachorowania. Regularne wykonywanie badań profilaktycznych pomaga zarówno sprawdzić stan zdrowia, a także  na wczesnym etapie wykryć stany chorobowe, które mogą w efekcie doprowadzić do poważniejszych schorzeń. Badania profilaktyczne można wykonywać zarówno w ramach Narodowego Funduszu Zdrowia, jak i prywatnej opieki medycznej – w tym drugim przypadku okres oczekiwania na poszczególne wizyty może być o wiele krótszy.
                
                 </p>
          
                 
                    </div>
      <div className="relative w-1/2 mr-16 py-16 ">
        <Image src={stetoskop} alt="stetoskop"  />
      </div>
            </div>
                  <div className="pt-32"></div>
                  <div className="bg-white h-300 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  
                    <div className=" text-black  font-abhaya  ml-12 mr-12 py-12">
                       <h2 className="text-3xl font-semibold">
                       Morfologia
                       </h2>
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Na jej podstawie możliwe jest określenie ogólnej kondycji organizmu. Badanie to sprawdza poziom poszczególnych elementów morfotycznych we krwi, ważna jest nie tylko ich ilość, ale także objętość, kształt czy w przypadku krwinek czerwonych ocena zawartości w nich hemoglobiny transportującej tlen.                       </p>
                        
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Na podstawie morfologii lekarz może ocenić np. czy w organizmie toczy się stan zapalny, czy pacjent boryka się z niedokrwistością, a także czy pacjent nie cierpi na inne choroby lub nie istnieją wskazania do szerszej diagnostyki. Interpretacja wyników przebiega w oparciu o wartości referencyjne przyjęte przez laboratorium wykonujące badanie, ale same wartości dostarczają tylko konkretnej informacji dotyczącej analizowanego parametru natomiast wyniki morfologii krwi powinny być analizowane w kontekście całego stanu zdrowia pacjenta i jego objawów klinicznych, co sprawia, że interpretację wyników powinno zostawiać się lekarzowi.                       </p>
	

                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Do przeprowadzenia badania wystarczy niewielka ilość krwi, ale należy pamiętać, że mimo iż do morfologii nie trzeba przygotowywać się w sposób szczególny, to do laboratorium należy zgłosić się na czczo (do 12 godzin od ostatniego posiłku, wliczając okres nocny) i pamiętać o kilku drobnych zaleceniach, które są zawarte w przygotowaniu do badania Aktualnie wykonywanie morfologii celem wczesnego wykrycia nowotworów krwi, w tym białaczek, nie jest zalecane, choć zdania ekspertów są podzielone i niektórzy zalecają co roczne wykonywanie tego badania, aby sprawdzić, czy nie pojawiły się nieprawidłowości, niemniej trzeba pamiętać, że wtedy należy wykonać je odpłatnie. Ta grupa nowotworów jest najczęściej wykrywana przy ocenie morfologii krwi wykonywanej z powodu innych wskazań.                       </p>

                        
                        
                          </div>
                  </div>
                  <div className="pt-32"></div>
                  <div className="bg-white h-300 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  
  
                        <div className=" text-black  font-abhaya  ml-12 mr-12 py-12">
                       <h2 className=" text-3xl font-semibold">
                       Badanie moczu
                       </h2>
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Warto zrobić ogólne badanie moczu, które  może dostarczyć wielu cennych informacji na temat naszego zdrowia – nie tylko układu moczowego, ale i innych organów. W zależności od barwy, przejrzystości, ciężaru oraz pH można wnioskować o poziomie nawodnienia 
                       organizmu, ewentualnych stanach zapalnych i infekcjach, niewydolności nerek, nowotworach pęcherza, błędach dietetycznych, dnie moczanowej itp. Proste i tanie, a informacyjnie bezcenne.
                        </p>
                       
                          </div>
                  </div>
                  <div className="pt-32"></div>
                  <div className="bg-white h-300 flex shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  
  
                        <div className=" text-black  font-abhaya  ml-12 mr-12  justify pt-12 pb-12">
                       <h2 className=" text-3xl font-semibold">
                       Badanie tarczycy
                       </h2>
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Równie istotne z punktu widzenia profilaktyki są badania tarczycy, szczególnie u kobiet. Dlaczego właśnie u kobiet? Otóż coraz częściej okazuje się, że problemy zdrowotne kobiet obserwowane na poziomie różnych układów, mogą mieć związek z nieprawidłowo funkcjonującą tarczycą, która reguluje wiele procesów w organizmie, np. problem z kontrolą swojej masy ciała.
                      
                       </p>
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Podstawowym badaniem diagnostycznym jest badanie stężenia hormonu tyreotropowego (TSH). Polega on na  oznaczeniu stężenia jednego z wydzielanych przez przysadkę mózgową hormonów, który stymuluje tarczycę do produkcji innych ważnych hormonów – trójjodotyroniny (T3) i tyroksyny (T4).
                      
                       </p>
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       
                       Test TSH wykonywany jest na podstawie próbki krwi. Jest to badanie bardzo czułe i pozwala wykryć problemy z tarczycą nawet wtedy, gdy nie są obserwowane jeszcze charakterystyczne objawy, tym bardziej, że często choroby tarczycy mogą przebiegać bezobjawowo. Obok TSH oznaczane są także tzw. wolne hormony, w badaniach FT3 i FT4, których wartości powinny zawsze być oceniane przez lekarza łącznie z wynikiem stężenia TSH.
                       </p>
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Badania TSH, FT3 oraz FT4 są najczęściej zlecanymi badaniami w diagnostyce chorób tarczycy, jednakże należy pamiętać, że przy niektórych schorzeniach ich wartości mogą nie odbiegać od normy, jak np. przy chorobie Hashimoto (przewlekłym autoimmunologicznym zapaleniu tarczycy). Wówczas przy podejrzeniu tej choroby konieczne jest wykonanie badań dodatkowych, takich jak: antyTPO lub anty-TG. Dodatkowo mogą być wykonane badania obrazowe tj. USG tarczycy oraz tzw. badanie BAC (biopsja aspiracyjna cienkoigłowa) i morfologiczne, które pozwalają na ocenę zmian w  obrazie cytologicznym – od włóknień po rozległe nacieki zapalne.
                      
                       </p>
                
                       
                          </div>
            
                  </div>
                  <div className="pt-32"></div>
                  <div className="bg-white h-300 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  
  
                        <div className=" text-black  font-abhaya  ml-12 mr-12 py-12">
                       <h2 className=" text-3xl font-semibold">
                       Badanie poziomu cukru
                       </h2>
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Badanie poziomu cukru jest także bardzo istotne, bo ze względu na wysokie spożycie węglowodanów we współczesnej diecie, bardzo często dopadają nas zaburzenia metaboliczne. I nie chodzi tylko o cukrzycę – stale podwyższony poziom cukru we krwi może prowadzić do poważnych chorób układu krążenia – miażdżycy, chorób wieńcowych, a także nowotworów.
                        </p>
                       
                       
                          </div>
                  </div>
                  <div className="pt-32"></div>
                  <div className="bg-white h-300 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  
  
                        <div className=" text-black  font-abhaya  ml-12 mr-12 py-12">
                       <h2 className=" text-3xl font-semibold">
                       Lista badań profilaktycznych
                       </h2>
                       
                       <p className=" font-light mt-4 text-xl  leading-8  text-justify">
                       To tylko część badań profilaktycznych, które należy wykonywać systematycznie. Dla ułatwienia sporządziliśmy kalendarz badań profilaktycznych ze względu na wiek, który ułatwi Ci ich zaplanowanie.   
                         </p>
                         <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                         Wiek 20-30 lat WSZYSCY: 
                         </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>Podstawowe badania profilaktyczne: morfologia, OB, stężenie glukozy we krwi oraz badanie ogólne moczu – raz do roku  </li>
                                <li>Pomiar ciśnienia tętniczego, kontrola wagi oraz ogólne badanie u lekarza internisty – raz do roku.  </li>
                                <li> Pomiar poziomu elektrolitów we krwi (potas, sód, magnez, fosfor, wapń) – raz na 3 lata (ewentualne niedobory w organizmie powodujące np. przemęczenie, drżenie mięśniowe, nadciśnienie)</li>
                                <li> Lipidogram, czyli pomiar stężenia cholesterolu we krwi oraz jego frakcji HDL i LDL, a także trójglicerydów – raz na pięć lat. </li>
                                <li> USG jamy brzusznej – co 3 do 5 lat </li>
                                <li>RTG klatki piersiowej – raz na pięć lat (w szczególności osoby palące)  </li>
                                <li>Jeśli masz wiele znamion, zgłoś się do dermatologa w celu ich kontroli </li>
                                <li>Kontrola stomatologiczna – raz na pół roku.  </li>
                            </ul>

                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            KOBIETY: 
                         </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>Badanie ginekologiczne i cytologia – raz do roku, najlepiej u tego samego i zaufanego lekarza, który zna Twój organizm. Co 2 lata warto rozważyć USG przezpochwowe.   </li>
                                <li>Samobadanie piersi – raz w miesiącu, między 6 a 9 dniem cyklu. W przypadku obciążenia rodzinnego chorobami nowotworowymi – od dwudziestego roku życia, co pół roku USG sutków, a co rok mammografia. Raz do roku poproś lekarza o zbadanie palpacyjne Twoich piersi.   </li>
                                
                            </ul>
                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            MĘŻCZYŹNI:                          </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>Samobadanie jąder (raz w miesiącu).   </li>
                                <li>Badanie jąder przez lekarza (pod kątem raka jądra) – co 3 lata.  </li>
                                <li>Badanie proktologiczne (w przypadku mężczyzn będących w grupie ryzyka chorób prostaty).     </li>
                            </ul>
                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            Wiek 30-40 lat WSZYSCY:                        </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>
                                Podstawowe badania profilaktyczne: morfologia, OB, stężenie glukozy we krwi oraz badanie ogólne moczu – raz do roku                                      </li>
                                <li>
                                Pomiar poziomu elektrolitów we krwi (potas, sód, magnez, fosfor, wapń) – raz na 3 lata (ewentualne niedobory w organizmie powodujące np. przemęczenie, drżenie mięśniowe, nadciśnienie)                                      </li>
                                <li>
                                Lipidogram, czyli pomiar stężenia cholesterolu we krwi oraz jego frakcji HDL i LDL, a także trójglicerydów – raz na pięć lat. W przypadku chorób krążenia w rodzinie – co roku.                                        </li>
                                <li>
                                Pomiar ciśnienia tętniczego, kontrola wagi oraz ogólne badanie u lekarza internisty – raz do roku.                                      </li>
                                <li>
                                Badanie USG jamy brzusznej – co 3 do 5 lat                                      </li>
                                <li>
                                RTG klatki piersiowej – raz na pięć lat (w szczególności osoby palące)                                         </li>
                                <li>
                                Jeśli masz wiele znamion, zgłoś się do dermatologa w celu ich kontroli                                       </li>
                                <li>
                                Kontrola dentystyczna, którą wykona doświadczony stomatolog Suchy Las – raz na pół roku                                       </li>
                                <li>
                                Kontrola wzroku u okulisty i badanie dna oka – raz na pięć lat. W przypadku wady wzroku zgodnie z zaleceniami lekarza.                                       </li>
                            </ul>
                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            KOBIETY:                       </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>
                                Po 30-tce kobiety nadal muszą pamiętać o comiesięcznym samobadaniu piersi, regularnym wykonywaniu badań ginekologicznych oraz cytologii (raz w roku). Do swojego kalendarza warto dodać USG piersi i poddawać się mu raz do roku                                
                                </li> 
                                <li>
                                USG przezpochwowe narządów rodnych – jednorazowo.
                                </li> 
                            </ul>
                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            MĘŻCZYŹNI:                      </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>
                                Panowie po ukończeniu 30. roku życia powinni nadal regularnie, minimum co sześć miesięcy, wykonywać samobadanie jąder.                                </li> 
                                <li>
                                Badanie jąder przez lekarza (pod kątem raka jądra) – co 3 lata.                                 </li> 
                                <li>
                                Badanie proktologiczne (w przypadku mężczyzn będących w grupie ryzyka chorób prostaty).                                  </li> 
                            </ul>
                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            Wiek 40-50 lat WSZYSCY:                      </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>
                                Podstawowe badania profilaktyczne (morfologia, OB, poziom glukozy we krwi i ogólne badanie moczu)                                </li> 
                                <li>
                                Pomiar ciśnienia tętniczego, kontrola wagi oraz ogólne badanie u lekarza internisty – raz do roku.                                </li> 
                                <li>
                                Lipidogram (cholesterol, frakcje, trójglicerydy) – raz na dwa lata (jeśli osoba jest obarczona rodzinnie ryzykiem miażdżycy i chorób krążenia, ma nadwagę lub pali papierosy, to lipidogram trzeba robić co roku).                                </li> 
                                <li>
                                Kontrola wzroku u okulisty i badanie dna oka oraz ciśnienia śródgałkowego – raz na dwa lata.      </li> 
                                <li>
                                EKG czyli elektrokardiogram – raz na trzy lata.     </li> 
                                <li>
                                RTG klatki piersiowej raz na pięć lat (osoby palące papierosy RTG klatki piersiowej co roku).    </li> 
                                <li>
                                USG jamy brzusznej – co 3 do 5 lat  </li> 
                                <li>
                                Gastroskopia – raz na 5 lat </li> 
                                <li>
                                W ramach profilaktyki nowotworów jelita grubego warto również raz do roku wykonywać test na obecność krwi utajonej w kale  </li> 
                                <li>
                                Badanie densytometryczne (gęstości kości) – raz w ciągu dziesięciolecia  </li> 
                                <li>
                                Badanie stomatologiczne i czyszczenie zębów z osadu – raz na pół roku.  </li> 
                                <li>
                                Kontrolowanie stanu znamion i pieprzyków.  </li> 
                            </ul>
                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            KOBIETY:   </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>
                                Badanie ginekologiczne i cytologia – raz do roku, najlepiej u tego samego i zaufanego lekarza, który zna Twój organizm         </li> 
                                <li>
                                USG przezpochwowe narządów rodnych – raz na dwa lata                             </li> 
                                <li>
                                Samobadanie piersi – raz w miesiącu.                            </li> 
                                <li>
                                USG piersi i mammografia – raz na dwa lata.     </li> 
                                <li>
                                Badanie poziomu hormonów tarczycy – jednokrotnie.    </li> 
                                
                            </ul>
                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            MĘŻCZYŹNI:   </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>
                                Kontrola prostaty za pomocą badania per rectum – raz do roku.    </li> 
                                <li>
                                Prześwietlenie płuc – co 2 lata (palacze według wskazań lekarza).                            </li> 
                                <li>
                                Samobadanie jąder – raz w miesiącu.                           </li> 
                                
                            </ul>
                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            Wiek 50 plus WSZYSCY:   </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>
                                Podstawowe badania profilaktyczne (morfologia, OB, stężenie glukozy we krwi oraz ogólne badanie moczu), a także lipidogram – raz w roku.   </li> 
                                <li>
                                Pomiar ciśnienia tętniczego, kontrola wagi oraz ogólne badanie u lekarza internisty – raz do roku                 </li> 
                                <li>
                                USG jamy brzusznej – raz do roku       </li> 
                                <li>
                                RTG klatki piersiowej raz na pięć lat (osoby palące papierosy RTG klatki piersiowej co roku – diagnostyka raka płuca).    </li> 
                                
                                <li>
                                Badanie densytometryczne (gęstości kości) – raz w ciągu dziesięciolecia.  </li> 
                                <li>
                                Po ukończeniu 50. roku życia należy przynajmniej raz na 5 lat poddawać się kolonoskopii.  </li> 
                                <li>
                                W ramach profilaktyki nowotworów jelita grubego warto również raz do roku wykonywać test na obecność krwi utajonej w kale  </li>
                                <li>
                                Elektrokardiogram – raz do roku. </li> 
                                <li>
                                Badanie okulistyczne (badanie dna oka, pomiar ciśnienia śródgałkowego) – raz w roku.  </li> 
                                <li>
                                Badanie stomatologiczne i czyszczenie zębów z osadu – raz na pół roku.  </li>
                                <li>
                                Kontrolowanie stanu znamion i pieprzyków   </li>  
                            </ul>
                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            KOBIETY:   </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>
                                Badanie ginekologiczne i cytologia oraz USG narządów rodnych – raz do roku.   </li> 
                                <li>
                                Mammografia – raz na dwa lata    </li> 
                                <li>
                                Samobadanie piersi – co miesiąc    </li> 
                                <li>
                                Oznaczenie poziomu hormonów płciowych we krwi – raz na kilka lat.    </li> 
                                
                                <li>
                                Badanie poziomu hormonów tarczycy – co roku.  </li> 
                                  
                            </ul>
                            <h3 className="font-light mt-4 text-2xl  leading-8  text-justify">
                            MĘŻCZYŹNI: </h3>
                            <ul className=" font-light mt-4 text-xl  leading-8  text-justify list-disc list-inside"> 
                                <li>
                                Po 50-tce wzrasta ryzyko zmian w gruczole krokowym, dlatego każdy mężczyzna w tym wieku powinien odwiedzić urologa, poddać się badaniu prostaty per rectum i powtarzać je od tego momentu raz na dwa lata   </li> 
                                <li>
                                Oznaczenie antygenu PSA – raz w roku.  </li> 
                                <li>
                                Badanie jąder przez lekarza – raz na 3 lata.  </li> 
                                <li>
                                Samobadanie jąder – raz w miesiącu  </li> 
                                
        
                                  
                            </ul>
                          </div>
                  </div>
              </div>
          </div>
      
    );
  }