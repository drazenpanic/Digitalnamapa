using Microsoft.AspNetCore.Mvc;
using Digitalnamapa.Models;

namespace Digitalnamapa.Controllers
{
    public class POIController : Controller
    {
        private readonly ILogger<POIController> _logger;

        public POIController(ILogger<POIController> logger)
        {
            _logger = logger;
        }

        // GET: POI
        public IActionResult Index()
        {
            return View();
        }

        // GET: POI/Details/5
        public IActionResult Details(int id)
        {
            // Za sada vraćamo hardkodirane podatke za Carsku palatu (id=1)
            if (id == 1)
            {
                var palata = new PointOfInterest
                {
                    Id = 1,
                    Name = "Carska palata",
                    Description = "Carska palata u Sremskoj Mitrovici, poznata kao Imperijalna palata Sirmijuma, jedno je od najznačajnijih arheoloških nalazišta u Srbiji, simbol moci nekadasnjeg Rimskog carstva.",
                    FullDescription = "Carska palata u Sremskoj Mitrovici, poznata kao Imperijalna palata Sirmijuma, jedno je od najznačajnijih arheoloških nalazišta u Srbiji, simbol moci nekadasnjeg Rimskog carstva. Nalazi se na teritoriji nekadašnjeg rimskog grada Sirmijuma, koji je u kasnoj antici bio jedna od četiri prestonice Rimskog carstva. Sirmijum je bio sedište više careva, uključujući Galerija, Maksimijana i Konstantina I. Palata je izgrađena krajem III ili početkom IV veka, u jugoistočnom delu grada uz reku Savu. Arheološka istraživanja otkrila su luksuzne mozaike, freske i hipokaust – sistem podnog grejanja. Materijali korišćeni u gradnji potiču iz Egipta, Male Azije, Grčke i Italije, što govori o raskoši imperijalnog dvora. Lokalitet danas obuhvata Vizitorski centar sa panelima, maketama i konzerviranim ostacima palate. Palata se nalazi na adresi Pivarska 2, Sremska Mitrovica, a informacije se mogu dobiti na brojeve +381 22 618 817 i +381 22 621 568. Zvanični sajt je carskapalata.rs. Carska palata Sirmijuma nezaobilazno je mesto za sve ljubitelje rimske istorije i kulture.",
                    Latitude = 44.966733731689764,
                    Longitude = 19.610175926337753,
                    Type = PointType.Dešavanja,
                    Icon = "/images/palata.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Defile učesnika festivala",
                            Date = new DateTime(2025, 8, 1), // Prvi dan, ali opis i vreme pokrivaju oba datuma
                            Time = "01.08. i 02.08. 2025. u 20:00h",
                            Description = "Defile učesnika festivala kreće od Carske palate do Žitnog trga."
                        }
                    }
                };
                return View(palata);
            }
            else if (id == 2)
            {
                var gradskiPark = new PointOfInterest
                {
                    Id = 2,
                    Name = "Gradski Park - Kameni cvet",
                    Description = "Fontana \"Kameni cvet\" u Gradskom parku Sremske Mitrovice jedno je od najprepoznatljivijih obeležja grada, koje spaja umetnost, istoriju i duboku emotivnu simboliku.",
                    FullDescription = "Fontana \"Kameni cvet\" u Gradskom parku Sremske Mitrovice jedno je od najprepoznatljivijih obeležja grada, koje spaja umetnost, istoriju i duboku emotivnu simboliku. Izgrađena je 1948. godine prema projektu Irine Nepokojčicke, ruske emigrantkinje i prve žene arhitekte u Sremskoj Mitrovici. Fontana je smeštena na mestu nekadašnje \"carske lipe\", zasađene 1879. godine u čast cara Franje Josifa i carice Jelisavete. Ima oblik stilizovanog cveta sa povijenim laticama iz kojih neprekidno teče voda, simbolizujući večnu tugu. Prema legendi, Irina je sanjala cvet iz kojeg je izletela bela golubica koja joj je otkrila priču o princezi iz Sirmijuma – simbolu tuge i čežnje. Inspirisana tim snom, Irina je stvorila fontanu kao spoj lične i kolektivne tuge za domovinom i izgubljenim vremenima. Irina Nepokojčicka rođena je 1909. u Rusiji, studirala je arhitekturu u Zagrebu, a od 1937. živela i stvarala u Sremskoj Mitrovici. Pored fontane, radila je na izgradnji škola, puteva i rekonstrukciji crkve arhiđakona Stefana. Preminula je samo pet meseci nakon završetka fontane, a sahranjena je na Pravoslavnom groblju u Mitrovici. Fontana \"Kameni cvet\" danas je mesto okupljanja, odmora i sećanja – umetnički i duhovni simbol grada.",
                    Latitude = 44.96772509437982,
                    Longitude = 19.608036819991597,
                    Type = PointType.Dešavanja,
                    Icon = "/images/park.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Radionice za decu",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10:00-14:00",
                            Description = "Radionice za decu u Gradskom parku"
                        },
                        new Event
                        {
                            Id = 2,
                            Title = "Eksperimentalna arheologija",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10:00-19:00",
                            Description = "Eksperimentalna arheologija u Gradskom parku"
                        },
                        new Event
                        {
                            Id = 3,
                            Title = "Rimski bazar",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10:00-19:00",
                            Description = "Rimski bazar u Gradskom parku"
                        },
                        new Event
                        {
                            Id = 4,
                            Title = "Foto kutak",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10:00-19:00",
                            Description = "Foto kutak u Gradskom parku"
                        }
                    }
                };
                return View(gradskiPark);
            }
            else if (id == 13)
            {
                var bazilika = new PointOfInterest
                {
                    Id = 13,
                    Name = "Bazilika Svetog Dimitrija",
                    Description = "Bazilika Svetog Dimitrija u Sremskoj Mitrovici jedno je od najznačajnijih ranohrišćanskih arheoloških nalazišta na prostoru antičkog Sirmijuma.",
                    FullDescription = "Bazilika Svetog Dimitrija u Sremskoj Mitrovici jedno je od najznačajnijih ranohrišćanskih arheoloških nalazišta na prostoru antičkog Sirmijuma. Izgrađena između 426. i 441. godine, za vreme prefekta Leontija, bazilika je predstavljala trobrodnu građevinu grčkog tipa, sa centralnim brodom i bočnim lađama koje se završavaju transeptom. Njena arhitektura svedoči o visokom stepenu organizacije hrišćanske zajednice u Sirmijumu tokom 5. veka. Tokom iskopavanja pronađeno je 25 grobova unutar i oko bazilike, što potvrđuje njenu ulogu kao mesta bogosluženja i sahranjivanja. Otkiveni su i delovi podnih mozaika sa geometrijskim i floralnim motivima, karakterističnim za umetnost tog doba. Bazilika je podignuta u vreme kada je Sirmijum bio jedno od četiri glavna grada Rimskog carstva i važno biskupsko sedište. Prvi poznati biskup Sirmijuma, sveti Irenej, stradao je mučeničkom smrću 304. godine, što dodatno ističe značaj ovog lokaliteta. Ostaci bazilike konzervirani su i prikazani u podzemnom arheološkom prostoru, smeštenom u centru grada, u blizini današnje katoličke katedrale. Lokalitet je dostupan za posetioce, a više informacija moguće je dobiti u Muzeju Srema. Bazilika Svetog Dimitrija ostaje trajan spomen na ranu hrišćansku veru i duhovni život carskog Sirmijuma.",
                    Latitude = 44.969564113652375,
                    Longitude = 19.60932520307554,
                    Type = PointType.Dešavanja,
                    Icon = "/images/bazilika.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Otvorena za posetioce",
                            Date = new DateTime(2025, 8, 1),
                            Time = "tokom festivala",
                            Description = "Ustanova je otvorena u toku festivala za sve posetioce"
                        }
                    }
                };
                return View(bazilika);
            }
            else if (id == 4)
            {
                var lapidarijum = new PointOfInterest
                {
                    Id = 4,
                    Name = "Muzej Srema Lapidarijum",
                    Description = "Lapidarijum Muzeja Srema u Sremskoj Mitrovici predstavlja jednu od najvrednijih arheoloških postavki u Srbiji, smešten u dvorištu muzeja na Trgu Svetog Stefana 15.",
                    FullDescription = "Lapidarijum Muzeja Srema u Sremskoj Mitrovici predstavlja jednu od najvrednijih arheoloških postavki u Srbiji, smešten u dvorištu muzeja na Trgu Svetog Stefana 15. Zgrada muzeja, poklon porodice Bajić, od 1946. godine čuva i izlaže arheološke nalaze sa teritorije antičkog Sirmijuma i šireg prostora Srema. U Lapidarijumu su izloženi rimski kameni spomenici poput sarkofaga, žrtvenika, nadgrobnih stela i skulptura sa mitološkim motivima. Posebnu pažnju privlači žrtvenik Titu Kominiju Severu, jedan od najstarijih dokaza rimskog prisustva u ovom kraju. Jedinstveni sunčani sat iz oko 100. godine nove ere i mermerne skulpture boginje Dijane i Herkula dodatno obogaćuju stalnu postavku. Mozaici iz velelepnih prijemnih prostorija datiraju s početka IV veka i svedoče o luksuzu carske rezidencije. Arhitektura Lapidarijuma osmišljena je u neoklasicističkom stilu sa dorskim stubovima, čime se postiže sklad sa istorijskim identitetom grada. Otvoren je za posetioce svakog radnog dana od 08:00 do 15:00 i vikendom od 09:00 do 17:00 časova. Postavka nudi dragocen uvid u svakodnevicu, umetnost i verovanja rimskog Sirmijuma. Lapidarijum Muzeja Srema poziva sve ljubitelje istorije i arheologije da kroz autentične eksponate osete duh drevnog grada.",
                    Latitude = 44.96747443960462,
                    Longitude = 19.60618380441317,
                    Type = PointType.Dešavanja,
                    Icon = "/images/lapidarijum.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Eksperimentalna arheologija",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-19h",
                            Description = "Eksperimentalna arheologija"
                        }
                    }
                };
                return View(lapidarijum);
            }
            else if (id == 9)
            {
                var galerija = new PointOfInterest
                {
                    Id = 9,
                    Name = "Galerija \"Lazar Vozarević\"",
                    Description = "Galerija \"Lazar Vozarević\" osnovana je 1973. godine u čast jednog od najznačajnijih posleratnih srpskih slikara, rođenog u Sremskoj Mitrovici.",
                    FullDescription = "Galerija \"Lazar Vozarević\" osnovana je 1973. godine u čast jednog od najznačajnijih posleratnih srpskih slikara, rođenog u Sremskoj Mitrovici. Smeštena je u renoviranoj zgradi iz 19. veka u Gradskom parku broj 4, koja je zaštićeno kulturno dobro. Galerija ima dva dela: memorijalni, koji sadrži preko 60 originalnih dela Lazara Vozarevića, i savremeni, koji predstavlja izložbe aktuelne umetnosti. Organizovala je više od 160 izložbi u gradu i preko 20 u zemlji i inostranstvu. Lazar Vozarević je bio član umetničkih grupa \"Jedanaestorica\" i \"Decembarska grupa\", a njegova dela se čuvaju u brojnim svetskim kolekcijama, uključujući i Rokfelerovu. Galerija je važan nosilac kulturnog života grada i domaćin manifestacija poput \"Sremskomitrovačkog salona\". Adresa je Gradski park 4, a radno vreme uključuje popodnevne termine tokom nedelje i rad subotom pre podne. Posetioci mogu dobiti informacije ili stupiti u kontakt putem mejla: galerijalazarvozarevic@gmail.com. Za više detalja dostupan je i sajt: lazarvozarevic.com. Galerija poziva ljubitelje umetnosti da otkriju vredno nasleđe Lazara Vozarevića i savremenu scenu Srema.",
                    Latitude = 44.9675542153864,
                    Longitude = 19.607229753180945,
                    Type = PointType.Dešavanja,
                    Icon = "/images/galerija.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Otvorena za posetioce",
                            Date = new DateTime(2025, 8, 1),
                            Time = "tokom festivala",
                            Description = "Ustanova je otvorena za sve posetioce tokom festivala."
                        }
                    }
                };
                return View(galerija);
            }
            else if (id == 8)
            {
                var pozoriste = new PointOfInterest
                {
                    Id = 8,
                    Name = "Pozorište \"Dobrica Milutinović\"",
                    Description = "Pozorište \"Dobrica Milutinović\" u Sremskoj Mitrovici jedina je profesionalna pozorišna ustanova u Sremu, sa tradicijom koja seže u 19. vek.",
                    FullDescription = "Pozorište \"Dobrica Milutinović\" u Sremskoj Mitrovici jedina je profesionalna pozorišna ustanova u Sremu, sa tradicijom koja seže u 19. vek. Smešteno je u zgradi Srpskog doma iz 1895. godine, koja je zaštićeno kulturno dobro sa elementima neorenesanse i neobaroka. Prvi pozorišni život u gradu zabeležen je još 1842. godine, dok profesionalno pozorište nastaje 1944, a današnji naziv nosi od 1974. godine, u čast glumca Dobrice Milutinovića. U poslednjim godinama pozorište je kompletno rekonstruisano i modernizovano, zadržavajući autentičan izgled, ali dobijajući savremenu tehničku opremu. Repertoar obuhvata predstave za decu i odrasle, a u okviru ustanove deluju Dramski i Omladinski studio. Povodom 80 godina rada 2025. godine, izvedene su brojne svečane predstave. Pozorište dodeljuje Plaketu \"Dobrica Milutinović\" za izuzetne umetničke doprinose. Nalazi se na adresi Trg Ćire Milekića 2, a kontakt podaci uključuju telefon +381 (0)22 615 115 i mejl adresu pozoristedm@gmail.com. Aktivno je prisutno i na društvenim mrežama, posebno preko Fejsbuk stranice. Kao nosilac kulturnog života, pozorište ostaje centar dramskog stvaralaštva i umetničke inspiracije u Sremu.",
                    Latitude = 44.967912043904136,
                    Longitude = 19.607416066846497,
                    Type = PointType.Dešavanja,
                    Icon = "/images/pozoriste.png",
                    IsActive = true,
                    Events = new List<Event>()
                };
                return View(pozoriste);
            }
            else if (id == 6)
            {
                var biblioteka = new PointOfInterest
                {
                    Id = 6,
                    Name = "Biblioteka \"Gligorije Vozarević\"",
                    Description = "Biblioteka \"Gligorije Vozarević\" u Sremskoj Mitrovici jedna je od najstarijih i najznačajnijih kulturnih ustanova u Sremu, osnovana 4. februara 1866. godine kao Srpska građanska čitaonica.",
                    FullDescription = "Biblioteka \"Gligorije Vozarević\" u Sremskoj Mitrovici jedna je od najstarijih i najznačajnijih kulturnih ustanova u Sremu, osnovana 4. februara 1866. godine kao Srpska građanska čitaonica. Danas nosi ime Gligorija Vozarevića, prvog srpskog knjižara i izdavača, rođenog u selu Ležimir. Biblioteka se od 1895. godine nalazi u zgradi Srpskog doma, a tokom istorije je pretrpela i požar 1914. godine koji je uništio veliki deo fonda. Nakon Drugog svetskog rata, obnovljena je 1946. kao Narodna knjižnica i čitaonica \"Prosveta\". Danas obavlja matičnu funkciju za čitav Sremski okrug i pokriva više od 50 školskih i narodnih biblioteka. Ukupni fond biblioteke prelazi 140.000 knjiga, raspoređenih u odeljenja za odrasle, decu, mlade, stručnu literaturu i zavičajnu zbirku. Organizuje brojne kulturne programe, književne večeri, radionice i izložbe. Svake godine, 4. februara, obeležava se Dan biblioteke uz dodelu priznanja najaktivnijim korisnicima. Nalazi se na adresi Trg Ćire Milekića 3, a kontakt je +381 (0)22 621 130 i mejl direktor@bgvsm.org.rs. Biblioteka ostaje temelj kulturnog života grada, promovišući čitanje, znanje i zajednički identitet.",
                    Latitude = 44.96812210658803,
                    Longitude = 19.607509922876687,
                    Type = PointType.Dešavanja,
                    Icon = "/images/biblioteka.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Digitalna interakcija - Razgovor sa rimskim carevima Sirmiuma",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-19h",
                            Description = "Digitalna interakcija - Razgovor sa rimskim carevima Sirmiuma"
                        },
                        new Event
                        {
                            Id = 2,
                            Title = "Decije radionice",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-14h",
                            Description = "Decije radionice"
                        }
                    }
                };
                return View(biblioteka);
            }
            else if (id == 11)
            {
                var arhivSrema = new PointOfInterest
                {
                    Id = 11,
                    Name = "Istorijski arhiv Srema",
                    Description = "Istorijski arhiv Srem u Sremskoj Mitrovici predstavlja centralnu arhivsku ustanovu za Sremski okrug, osnovanu 1946. godine.",
                    FullDescription = "Istorijski arhiv Srem u Sremskoj Mitrovici predstavlja centralnu arhivsku ustanovu za Sremski okrug, osnovanu 1946. godine. Smešten je u zgradi Glavne straže izgrađenoj krajem XVIII veka za potrebe Vojne granice, koja je danas zaštićena kao kulturno dobro. Arhiv čuva oko 1.340 arhivskih fondova i zbirki, što obuhvata približno 7.000 dužnih metara građe iz perioda od XVII veka do danas. Posebno su značajne crkvene matične knjige (rimokatoličke, pravoslavne, grkokatoličke i jevrejske) iz perioda 1732–1900, koje su čest predmet istraživanja genealoga. Arhiv ima nadležnost nad gradom Sremska Mitrovica i opštinama Stara Pazova, Inđija, Irig, Šid, Ruma i Pećinci. Vrši stručni nadzor nad 920 aktivnih registratura uključujući državne organe, lokalnu samoupravu, ustanove, zadruge i preduzeća. Organizovan je u odeljenja za opšte poslove, zaštitu građe, sređivanje, korišćenje i istraživanje. Radno vreme je od ponedeljka do petka od 07:00 do 15:00, dok se rad sa istraživačima odvija utorkom, sredom i četvrtkom od 08:00 do 11:00 uz prethodnu najavu. Arhiv se nalazi na adresi Vuka Karadžića 4, a kontaktirati ih možete putem mejla info@arhivsrem.org.rs. Više informacija dostupno je na sajtu www.arhivsrem.org.rs.",
                    Latitude = 44.96715616157948,
                    Longitude = 19.607888312961947,
                    Type = PointType.Dešavanja,
                    Icon = "/images/arhivsrema.png",
                    IsActive = true,
                    Events = new List<Event>()
                };
                return View(arhivSrema);
            }
            else if (id == 3)
            {
                var muzejSrema = new PointOfInterest
                {
                    Id = 3,
                    Name = "Muzej Srema",
                    Description = "Muzej Srema u Sremskoj Mitrovici, smešten na adresi Trg Svetog Stefana 15, predstavlja jednu od najznačajnijih kulturnih institucija u regionu.",
                    FullDescription = "Muzej Srema u Sremskoj Mitrovici, smešten na adresi Trg Svetog Stefana 15, predstavlja jednu od najznačajnijih kulturnih institucija u regionu. Osnovan 1946. godine, muzej je nastao iz potrebe da se sačuvaju bogati arheološki nalazi antičkog Sirmijuma, rimskog grada koji je bio jedna od prestonica carstva. Muzej je smešten u dve zgrade iz 18. veka: nekadašnju zgradu vojne uprave i kuću porodice Bajić. Stalne postavke obuhvataju arheološku zbirku sa rimskim mozaicima, sarkofazima, žrtvenicima i skulpturama, uključujući i torzo boginje Minerve pronađen tokom iskopavanja carske palate. U lapidarijumu, dvorišnom prostoru muzeja, izloženi su kameni spomenici i ostaci rimskih građevina. Istorijska postavka \"Srem kroz vekove\" prikazuje razvoj regiona od srednjeg veka do 20. veka. Muzej takođe organizuje tematske izložbe, naučne skupove i izdaje godišnjak \"Zbornik Muzeja Srema\". Radno vreme muzeja je od ponedeljka do petka od 08:00 do 15:00, a vikendom od 09:00 do 17:00. Za više informacija posetite zvaničnu veb-stranicu muzeja: muzejsrema.com.",
                    Latitude = 44.9760,
                    Longitude = 19.6120,
                    Type = PointType.Dešavanja,
                    Icon = "/images/muzejsrema.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Eksperimentalna arheologija",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-19h",
                            Description = "Eksperimentalna arheologija"
                        }
                    }
                };
                return View(muzejSrema);
            }
            else if (id == 15)
            {
                var lampioni = new PointOfInterest
                {
                    Id = 15,
                    Name = "Savski kej",
                    Description = "Nasip u Sremskoj Mitrovici, poznat i kao Savski kej, predstavlja ključnu odbrambenu strukturu uz reku Savu koja štiti grad od poplava.",
                    FullDescription = "Nasip u Sremskoj Mitrovici, poznat i kao Savski kej, predstavlja ključnu odbrambenu strukturu uz reku Savu koja štiti grad od poplava. Izgrađen je duž obale Save i obezbeđuje siguran pojas između reke i centralnih gradskih zona. Pored svoje funkcije zaštite od poplava, nasip je i popularna šetališna zona koja privlači brojne građane i posetioce. Savski kej je uređen sa klupama, zelenilom i biciklističkim stazama, te često služi kao mesto okupljanja i rekreacije. U toku letnjih meseci, ovaj prostor postaje živahan zahvaljujući brojnim kulturnim i sportskim manifestacijama. Nasip je takođe deo sistema Dunav–Sava vodnog sliva i ima strateški značaj u očuvanju prirodne ravnoteže i bezbednosti u regiji. Ovaj deo grada pruža i izuzetan pogled na reku Savu, mostove i gradsku panoramu. Uz Savski kej često se organizuju i festivali, puštanje lampiona i umetnički performansi. Nasip je omiljeno mesto za šetače, trkače i porodice sa decom. Kao spoj funkcionalnosti i lepote, nasip u Sremskoj Mitrovici predstavlja simbol povezanosti grada sa rekom.",
                    Latitude = 44.96847785895552,
                    Longitude = 19.60156776496794,
                    Type = PointType.Dešavanja,
                    Icon = "/images/lampioni.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Program zatvaranja Festivala Lux Aurelius",
                            Date = new DateTime(2025, 8, 2),
                            Time = "21:30",
                            Description = "Na završnici festivala, simbolično puštamo lampione niz reku Savu, šaljući svetlost ljubavi i poruke dobrih želja u noć."
                        }
                    }
                };
                return View(lampioni);
            }
            else if (id == 7)
            {
                var zitniTrg = new PointOfInterest
                {
                    Id = 7,
                    Name = "Žitni Trg",
                    Description = "Žitni trg je bio deo zanatsko-trgovačke zone Sirmijuma.",
                    FullDescription = "Žitni trg je bio deo zanatsko-trgovačke zone Sirmijuma. Iskopavanja su otkrila radionice, uključujući staklarske peći, što potvrđuje lokalnu proizvodnju stakla tokom kasne antike. Nađeni su i ostaci prodavnica i skladišta, kao i delovi ulica sa natkrivenim pešačkim stazama (porticima) i kanalizacionim sistemom.",
                    Latitude = 44.96793486346734,
                    Longitude = 19.603518546856105,
                    Type = PointType.Dešavanja,
                    Icon = "/images/zitnitrg.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Defile učesnika Festivala Lux Aurelius",
                            Date = new DateTime(2025, 8, 1),
                            Time = "20:00h",
                            Description = "Defile učesnika Festivala Lux Aurelius od Carske palate do Žitnog trga"
                        },
                        new Event
                        {
                            Id = 2,
                            Title = "Sirmium Lux Verbi - revija besednistva",
                            Date = new DateTime(2025, 8, 1),
                            Time = "20:30h",
                            Description = "Sirmium Lux Verbi - revija besednistva"
                        },
                        new Event
                        {
                            Id = 3,
                            Title = "Program otvaranja festivala Lux Aurelius",
                            Date = new DateTime(2025, 8, 1),
                            Time = "21:00h",
                            Description = "Program otvaranja festivala Lux Aurelius"
                        },
                        new Event
                        {
                            Id = 4,
                            Title = "Program zatvaranja Festivala Lux Aurelius",
                            Date = new DateTime(2025, 8, 2),
                            Time = "21:30h",
                            Description = "Program zatvaranja Festivala Lux Aurelius"
                        }
                    }
                };
                return View(zitniTrg);
            }
            else if (id == 12)
            {
                var rimskiKamp = new PointOfInterest
                {
                    Id = 12,
                    Name = "Rimski Legionarski Kamp",
                    Description = "Rimski vojni kamp u doba Sirmijuma bio je organizovan po strogoj hijerarhiji i disciplinovanoj strukturi, sa vojnicima raspoređenim u redove šatora (tentorija) koji su formirali ulice i trgove unutar utvrđenog logora.",
                    FullDescription = "Rimski vojni kamp u doba Sirmijuma bio je organizovan po strogoj hijerarhiji i disciplinovanoj strukturi, sa vojnicima raspoređenim u redove šatora (tentorija) koji su formirali ulice i trgove unutar utvrđenog logora. Svaka jedinica imala je svoje mesto, a centurioni i višerangirani oficiri boravili su u većim i uređenijim šatorima bliže komandnom centru (principia). Vojnici su dan provodili u vežbama, održavanju opreme, kuvanju, pisanju pisama i zanatskim poslovima poput izrade strela, popravke oružja i izgradnje utvrđenja. Ostatak vremena koristili su za odmor, društvene igre poput tabulae ili igara sa kockicama, kao i za molitve bogovima ratnicima. Iako stalno spremni za bojeve, njihov svakodnevni život bio je mešavina stroge discipline, praktičnih dužnosti i trenutaka drušvene bliskosti u okviru legije.",
                    Latitude = 44.96635770210009,
                    Longitude = 19.608090675161904,
                    Type = PointType.Dešavanja,
                    Icon = "/images/kamp.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Rimske igre",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-14h",
                            Description = "Rimske igre i rekonstrukcija svakodnevnog života legionara"
                        }
                    }
                };
                return View(rimskiKamp);
            }
            else if (id == 16)
            {
                var rimskiBazar = new PointOfInterest
                {
                    Id = 16,
                    Name = "Rimski bazar",
                    Description = "Rimski bazar oživljava duh carskog Sirmijuma kroz autentične prikaze starih zanata, kostima i mirisa antičkog doba.",
                    FullDescription = "Rimski bazar oživljava duh carskog Sirmijuma kroz autentične prikaze starih zanata, kostima i mirisa antičkog doba. Zanatlije i umetnici predstavljaju veštine rimskih kovača, grnčara, tkača i staklara, vraćajući nas u vreme kada je Sirmijum bio prestonica carstva. Bazar je mesto susreta prošlosti i sadašnjosti, edukacije i zabave za sve generacije. Posetioci mogu doživeti istoriju na dohvat ruke, probati rimsku hranu i poneti uspomene izrađene tradicionalnim tehnikama. Pozivamo vas da posetite Rimski bazar i postanete deo ove jedinstvene priče koja povezuje kulturu, tradiciju i nasleđe.",
                    Latitude = 44.96775968818096,
                    Longitude = 19.608081420476406,
                    Type = PointType.Dešavanja,
                    Icon = "/images/rimskibazar.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Prodaja unikatnih ručno rađenih proizvoda",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-19h",
                            Description = "Prodaja unikatnih ručno rađenih proizvoda na Rimskom bazaru."
                        }
                    }
                };
                return View(rimskiBazar);
            }
            else if (id == 17)
            {
                var turistickiCentar = new PointOfInterest
                {
                    Id = 17,
                    Name = "Turistički informativni centar",
                    Description = "Turistički informativni centar Sremske Mitrovice nalazi se u Gradskom parku, na adresi Masarikova 2A, i predstavlja centralno mesto za sve posetioce koji žele da otkriju bogatu istoriju, kulturu i prirodne lepote ovog grada i okoline.",
                    FullDescription = "Turistički informativni centar Sremske Mitrovice nalazi se u Gradskom parku, na adresi Masarikova 2A, i predstavlja centralno mesto za sve posetioce koji žele da otkriju bogatu istoriju, kulturu i prirodne lepote ovog grada i okoline. Otvoren je krajem 2021. godine kao zajednički projekat Grada Sremska Mitrovica i Ministarstva trgovine, turizma i telekomunikacija, sa ciljem da objedini turističku ponudu Sremske Mitrovice, Srema i Severne Mačve na jednom mestu.\n\nU Info centru posetioci mogu dobiti detaljne informacije o lokalnim atrakcijama, uključujući arheološke lokalitete antičkog Sirmijuma, Specijalni rezervat prirode Zasavica i prirodne lepote Fruške gore. Centar nudi promotivne materijale poput turističkih mapa, flajera i brošura, kao i kontakte licenciranih turističkih vodiča. Posebna atrakcija su VR naočare koje omogućavaju virtuelnu šetnju kroz istorijske lokalitete grada.\n\nRadno vreme Info centra je od ponedeljka do petka od 07:00 do 17:00 časova, a subotom od 09:00 do 15:00 časova. U sklopu objekta nalazi se i prodavnica suvenira sa lokalnim proizvodima, kao i obnovljeni javni toalet prilagođen osobama sa invaliditetom i roditeljima sa malom decom.\n\nZa dodatne informacije, možete posetiti zvaničnu stranicu Turističke organizacije Grada Sremska Mitrovica: tosmomi.rs",
                    Latitude = 44.96811551930968,
                    Longitude = 19.60832829252163,
                    Type = PointType.Servisi,
                    Icon = "/images/turistickaorganizacija.png",
                    IsActive = true,
                    Events = new List<Event>
                    {
                        new Event
                        {
                            Id = 1,
                            Title = "Terasa Turističke organizacije - izložba Fotografija 'Mitrovica kroz objektiv'",
                            Date = new DateTime(2025, 8, 2),
                            Time = "10-19h",
                            Description = "Izložba fotografija na terasi Turističke organizacije."
                        }
                    }
                };
                return View(turistickiCentar);
            }
            
            return NotFound();
        }

        // GET: POI/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: POI/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(PointOfInterest poi)
        {
            if (ModelState.IsValid)
            {
                // TODO: Add creation logic
                return RedirectToAction(nameof(Index));
            }
            return View(poi);
        }

        // GET: POI/Edit/5
        public IActionResult Edit(int id)
        {
            return View();
        }

        // POST: POI/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, PointOfInterest poi)
        {
            if (id != poi.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                // TODO: Add update logic
                return RedirectToAction(nameof(Index));
            }
            return View(poi);
        }

        // GET: POI/Delete/5
        public IActionResult Delete(int id)
        {
            return View();
        }

        // POST: POI/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            // TODO: Add deletion logic
            return RedirectToAction(nameof(Index));
        }

        // GET: POI/Map
        public IActionResult Map()
        {
            return View();
        }

        public IActionResult Program()
        {
            return View();
        }
    }
} 