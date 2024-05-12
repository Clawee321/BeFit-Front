import Layout from "@/app/layout";
import Image from "next/image";
import woda from "@/assets/zdrowie/Woda artykul.jpg";



export default function Zdrowie() {
    return (
      <div style={{background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)'}}>
          <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya"></h1>
          <div className="mx-12 mt-12 pb-16">
              
                  <div className="bg-white h-300 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                      <div className="pt-12"> </div>
  
                        <div className=" text-black  font-abhaya  ml-12 mr-12">
                       <h2 className=" text-3xl font-semibold">
                       Nawadnianie – dlaczego pić dużo wody?
                       </h2>
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Woda jest życiodajnym źródłem, które odgrywa kluczową rolę w utrzymaniu zdrowia i dobrego samopoczucia. Spożywanie odpowiedniej ilości wody ma wiele korzyści dla organizmu, zarówno pod względem fizycznym, jak i psychicznym. W tym artykule omówimy główne powody, dla których warto pić dużo wody i jakie korzyści niesie to dla naszego zdrowia.
                       </p>
                       <div className="pb-12"></div>
                          </div>
                  </div>
                  <div className="pt-32"></div>
                  <div className="bg-white h-300 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="pt-12"> </div>
                    <div className=" text-black  font-abhaya  ml-12 mr-12">
                    <h2 className="text-3xl font-semibold">
                       Morfologia
                       </h2>
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Woda stanowi strukturalną część wszystkich komórek i tkanek w naszym organizmie. Oczyszcza z toksyn, zwiększa produkcję czerwonych krwinek, poprawia funkcjonowanie narządów. Jej picie poprawia pamięć, zmniejsza bóle pleców i gorączkę. Nawodnienie organizmu ma również wpływ na wygląd skóry. Nawilżona skóra jest gładsza, bardziej jędrna i po prostu zdrowo wygląda. Zwiększenie ilości wypijanej wody to pierwszy krok do zmniejszenia zmarszczek. Ciało noworodka w 75% składa się z wody, a jej zawartość wraz z wiekiem zmniejsza się – w organizmie dorosłego człowieka stanowi 65% masy ciała.
                       </p>
                        <p className="text-2xl font-semibold pt-8">Woda również:</p>
                        <ul className="mt-4 text-xl font-light leading-8  text-justify">
  <li>• dostarcza cennych składników mineralnych, takich jak potas, magnez, sód,</li>
  <li>• pełni również funkcję uniwersalnego rozpuszczalnika, tworząc wewnątrz organizmu środowisko, w którym mogą zachodzić niezbędne do życia reakcje chemiczne,</li>
  <li>• uczestniczy w transporcie składników odżywczych oraz pomaga w usuwaniu toksyn i innych szkodliwych substancji z organizmu,</li>
  <li>• pobudza również metabolizm i wpływa pozytywnie na pracę wątroby oraz jelit.</li>
                        </ul>
	



                        
                        <div className="pb-12"></div>
                          </div>
                  </div>
                  <div className="pt-32"></div>
                  <div className="bg-white h-300 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="pt-12"> </div>
  
                        <div className=" text-black  font-abhaya  ml-12 mr-12">
                       <h2 className=" text-3xl font-semibold">
                       Ile pić wody dziennie?
                       </h2>
                       <p className="mt-4 text-xl font-light leading-8  text-justify">
                       Niektórzy naukowcy twierdzą, że minimum to 1,5 litra, inni, że powinniśmy pić nawet 5 litrów. Wszystko jest zależne od wagi (im większa, tym powinniśmy pić jej więcej), naszego sposobu życia, klimatu itd.
                       </p>
                        <p className="font-semibold  text-xl  leading-8  text-justify">Najbezpieczniej jest więc pić między 2 - 3 litry dziennie. </p>                      
                       <div className="pb-12"></div>
                          </div>
                  </div>
                  <div className="pt-32"></div>
                  <div className="bg-white h-300 flex shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  
  
                        <div className=" text-black  font-abhaya  ml-12 mr-12 w-1/2 flex flex-col justify-center pt-12 pb-12">
                       <h2 className=" text-3xl font-semibold">
                       20 powodów, dla których warto pić wodę:
                       </h2>
                       
                       <ol className="list-decimal list-inside mt-4 text-xl font-light leading-8  text-justify">
  <li>Woda powstrzymuje apetyt - dzięki niej chudniemy.</li>
  <li>Picie wody poprawia trawienie lepiej niż każdy specjalistyczny jogurt.</li>
  <li>Woda redukuje szkodliwy cholesterol w organizmie.</li>
  <li>Woda sprawia, że skóra się ujędrnia, lepiej wygląda i później się starzeje.</li>
  <li>Woda poprawia funkcjonowanie wątroby i innych narządów.</li>
  <li>Picie wody pomaga w walce z pomarańczową skórką.</li>
  <li>Woda pomaga dotlenić nasz organizm.</li>
  <li>Kilka szklanek wody to remedium na bóle głowy.</li>
  <li>Picie wody pozwala pokonać zmęczenie, dodaje ona energii.</li>
  <li>Picie wody zmniejsza bóle pleców.</li>
  <li>Woda pomaga w koncentracji, dzięki czemu pracujemy wydajniej.</li>
  <li>Picie poprawia pamięć.</li>
  <li>Woda jest najlepsza na skurcze.</li>
  <li>Woda potrafi zwalczyć gorączkę.</li>
  <li>Woda poprawia wydolność organizmu w czasie uprawiania sportu.</li>
  <li>Woda zwiększa produkcję czerwonych krwinek.</li>
  <li>Picie wody poprawia nastrój.</li>
  <li>Picie wody poprawia wzrok, zmniejsza dolegliwości pracy przy komputerze.</li>
  <li>Woda poprawia funkcjonowanie nerek, zmniejsza kamicę nerkową.</li>
  <li>Woda niweluje problem z nieświeżym zapachem z ust.</li>
  
                        </ol>
                      
                       
                
                       
                          </div>
            <div className="relative w-1/2 mr-16 py-16 ">
              <Image src={woda} alt="woda"  />
            </div>
                  </div>
                  <div className="pt-32"></div>
                  <div className="bg-white h-300 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="pt-12"> </div>
  
                        <div className=" text-black  font-abhaya  ml-12 mr-12">
                       <h2 className=" text-3xl font-semibold">
                       Przy długotrwałym niedoborze wody pojawiają się objawy takie jak:
                       </h2>
                       
                        <ul className="mt-4 text-xl font-light leading-8  text-justify">
                         <li>•	obniżone ciśnienie krwi,</li>   
                         <li>•	przyspieszony oddech,</li>  
                         <li>•	obrzęk języka i problemy z mówieniem,</li>  
                         <li>•	drgawki,</li>  
                         <li>•	omamy słuchowe i wzrokowe,</li>  
                         <li>•	zaburzenia czucia,</li>  
                         <li>•	skrajne pragnienie,</li>  
                         <li>•	utrata świadomości.</li>  
                        </ul>
                        
                       <p className="pt-8 font-semibold mt-4 text-xl  leading-8  text-justify">Ubytek wody na poziomie około 15% masy ciała jest śmiertelny! Powyższe czynniki ryzyka wskazują, dlaczego trzeba pić wodę w odpowiedniej ilości.
                       

                       </p>
                       <div className="pb-12"></div>
                          </div>
                  </div>
              </div>
          </div>
      
    );
  }