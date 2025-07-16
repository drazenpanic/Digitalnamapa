using Microsoft.AspNetCore.Mvc;
using Digitalnamapa.Models;
using Microsoft.Extensions.Localization;

namespace Digitalnamapa.Controllers
{
    public class POIController : Controller
    {
        private readonly ILogger<POIController> _logger;
        private readonly IStringLocalizer<SharedResource> _localizer;

        public POIController(ILogger<POIController> logger, IStringLocalizer<SharedResource> localizer)
        {
            _logger = logger;
            _localizer = localizer;
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
                    Name = _localizer["Popup_ImperialPalace_Title"],
                    Description = _localizer["Popup_ImperialPalace_Description"],
                    FullDescription = _localizer["Details_ImperialPalace_FullDescription"],
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
                            Title = _localizer["Event_Parade"],
                            Date = new DateTime(2025, 8, 1), // Prvi dan, ali opis i vreme pokrivaju oba datuma
                            Time = "01.08. i 02.08. 2025. u 20:00h",
                            Description = _localizer["Event_ParadeDesc"]
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
                    Name = _localizer["Popup_CityPark_Title"],
                    Description = _localizer["Popup_CityPark_Description"],
                    FullDescription = _localizer["Details_CityPark_FullDescription"],
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
                            Title = _localizer["Event_ChildrenWorkshops"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "10:00-14:00",
                            Description = _localizer["Event_ChildrenWorkshops"]
                        },
                        new Event
                        {
                            Id = 2,
                            Title = _localizer["Event_ExperimentalArchaeology"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "10:00-19:00",
                            Description = _localizer["Event_ExperimentalArchaeology"]
                        },
                        new Event
                        {
                            Id = 3,
                            Title = _localizer["Event_RomanBazaar"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "10:00-19:00",
                            Description = _localizer["Event_RomanBazaar"]
                        },
                        new Event
                        {
                            Id = 4,
                            Title = _localizer["Event_PhotoCorner"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "12h-19h",
                            Description = _localizer["Event_PhotoCorner"]
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
                    Name = _localizer["Popup_Basilica_Title"],
                    Description = _localizer["Popup_Basilica_Description"],
                    FullDescription = _localizer["Details_Basilica_FullDescription"],
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
                            Title = _localizer["Event_OpenForVisitorsDuring"],
                            Date = new DateTime(2025, 8, 1),
                            Time = "tokom festivala",
                            Description = _localizer["Event_OpenForVisitorsDuring"]
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
                    Name = _localizer["Popup_Lapidarium_Title"],
                    Description = _localizer["Popup_Lapidarium_Description"],
                    FullDescription = _localizer["Details_SremMuseum_FullDescription"],
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
                            Title = _localizer["Event_ExperimentalArchaeology"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-19h",
                            Description = _localizer["Event_ExperimentalArchaeology"]
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
                    Name = _localizer["Popup_Gallery_Title"],
                    Description = _localizer["Popup_Gallery_Description"],
                    FullDescription = _localizer["Details_Gallery_FullDescription"],
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
                            Title = _localizer["Event_OpenForVisitors"],
                            Date = new DateTime(2025, 8, 1),
                            Time = "tokom festivala",
                            Description = _localizer["Event_OpenForVisitors"]
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
                    Name = _localizer["Popup_Theatre_Title"],
                    Description = _localizer["Popup_Theatre_Description"],
                    FullDescription = _localizer["Details_Theatre_FullDescription"],
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
                    Name = _localizer["Popup_Library_Title"],
                    Description = _localizer["Popup_Library_Description"],
                    FullDescription = _localizer["Details_Library_FullDescription"],
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
                            Title = _localizer["Event_DigitalInteraction"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-19h",
                            Description = _localizer["Event_DigitalInteraction"]
                        },
                        new Event
                        {
                            Id = 2,
                            Title = _localizer["Event_ChildrenWorkshops"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-14h",
                            Description = _localizer["Event_ChildrenWorkshops"]
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
                    Name = _localizer["Popup_Archive_Title"],
                    Description = _localizer["Popup_Archive_Description"],
                    FullDescription = _localizer["Details_Archive_FullDescription"],
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
                    Name = _localizer["Popup_SremMuseum_Title"],
                    Description = _localizer["Popup_SremMuseum_Description"],
                    FullDescription = _localizer["Details_SremMuseum_FullDescription"],
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
                            Title = _localizer["Event_ExperimentalArchaeology"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-19h",
                            Description = _localizer["Event_ExperimentalArchaeology"]
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
                    Name = _localizer["Popup_SavaQuay_Title"],
                    Description = _localizer["Popup_SavaQuay_Description"],
                    FullDescription = _localizer["Details_SavaQuay_FullDescription"],
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
                            Title = _localizer["Event_FestivalClosing"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "21:30",
                            Description = _localizer["Event_FestivalClosingDesc"]
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
                    Name = _localizer["Popup_GrainSquare_Title"],
                    Description = _localizer["Popup_GrainSquare_Description"],
                    FullDescription = _localizer["Details_GrainSquare_FullDescription"],
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
                            Title = _localizer["Event_FestivalParade"],
                            Date = new DateTime(2025, 8, 1),
                            Time = "20:00h",
                            Description = _localizer["Event_FestivalParadeDesc"]
                        },
                        new Event
                        {
                            Id = 2,
                            Title = _localizer["Event_SirmiumLuxVerbi"],
                            Date = new DateTime(2025, 8, 1),
                            Time = "20:30h",
                            Description = _localizer["Event_SirmiumLuxVerbi"]
                        },
                        new Event
                        {
                            Id = 3,
                            Title = _localizer["Event_FestivalOpening"],
                            Date = new DateTime(2025, 8, 1),
                            Time = "21:00h",
                            Description = _localizer["Event_FestivalOpening"]
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
                    Name = _localizer["Popup_RomanCamp_Title"],
                    Description = _localizer["Popup_RomanCamp_Description"],
                    FullDescription = _localizer["Details_RomanCamp_FullDescription"],
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
                            Title = _localizer["Event_RomanGames"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-14h",
                            Description = _localizer["Event_RomanGamesDesc"]
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
                    Name = _localizer["Popup_RomanBazaar_Title"],
                    Description = _localizer["Popup_RomanBazaar_Description"],
                    FullDescription = _localizer["Details_RomanBazaar_FullDescription"],
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
                            Title = _localizer["Popup_RomanBazaar_Event"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "10h-19h",
                            Description = _localizer["Popup_RomanBazaar_Event"]
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
                    Name = _localizer["Popup_TouristCenter_Title"],
                    Description = _localizer["Popup_TouristCenter_Description"],
                    FullDescription = _localizer["Details_TouristCenter_FullDescription"],
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
                            Title = _localizer["Event_TouristCenterExhibition"],
                            Date = new DateTime(2025, 8, 2),
                            Time = "10-19h",
                            Description = _localizer["Event_TouristCenterExhibition"]
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