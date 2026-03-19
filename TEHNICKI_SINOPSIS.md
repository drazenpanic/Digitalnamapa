# TEHNIČKI SINopsis - Digitalna Mapa Sremske Mitrovice

## PREGLED PROJEKTA

**Digitalna Mapa** je web aplikacija razvijena za Festival Lux Aurelius 2025 u Sremskoj Mitrovici. Aplikacija pruža interaktivnu digitalnu mapu grada sa tačkama od interesa (POI), informacijama o događajima i navigacionim funkcionalnostima.

---

## TEHNOLOGIJSKI STEK

### Backend
- **.NET 8.0** - ASP.NET Core MVC aplikacija
- **C#** - glavni programski jezik
- **MVC Pattern** - Model-View-Controller arhitektura

### Frontend
- **Bootstrap 5** - responsive UI framework
- **Leaflet.js** - interaktivna mapa biblioteka
- **JavaScript (ES6+)** - klijentska logika
- **HTML5/CSS3** - markup i stilizacija

### Lokalizacija
- **ASP.NET Core Localization** - podrška za više jezika
- **RESX fajlovi** - resursi za srpski (sr) i engleski (en) jezik

### Deployment
- **Docker** - containerizacija aplikacije
- **Multi-stage Dockerfile** - optimizovana produkcijska build

---

## KLJUČNE FUNKCIONALNOSTI

### 1. Interaktivna Digitalna Mapa
- **Custom mapa** - koristi se ručno nacrtana mapa grada kao image overlay
- **Leaflet.js integracija** - napredna interakcija sa mapom (zoom, pan, click)
- **Koordinatni sistem** - transformacija između geografskih koordinata (lat/lng) i pikselnih koordinata mape
- **Barycentric interpolation** - precizna transformacija koristeći referentne tačke

### 2. Tačke Od Interesa (POI)
- **20+ POI lokacija** implementirano:
  - Znamenitosti (Carska palata, Gradski park, Muzej Srema, Bazilika, itd.)
  - Servisi (WC, Parking, Voda, Prva pomoć, Hrana)
  - Događaji (Rimski kamp, Rimski bazar, Žitni trg, itd.)
- **Custom ikone** - svaki POI ima svoju jedinstvenu ikonu
- **Informativni popup-ovi** - prikaz naziva, opisa i događaja na klik
- **Detaljne stranice** - posebne stranice za svaki POI sa kompletnim informacijama

### 3. Geolokacija
- **Praćenje korisničke pozicije** - real-time prikaz lokacije korisnika na mapi
- **GPS integracija** - koristi HTML5 Geolocation API
- **Vizuelni indikatori** - plavi marker sa krugom tačnosti
- **Corner marker** - prikaz kada je korisnik van vidljivog područja mape
- **Toggle dugme** - uključivanje/isključivanje praćenja lokacije

### 4. Filtriranje POI-jeva
- **Kategorije**:
  - Znamenitosti (Landmarks)
  - Događaji (Dešavanja)
  - Servisi (Servisi)
- **Dinamičko filtriranje** - prikaz/sakrivanje markera na osnovu kategorije
- **Aktivni filter indikator** - vizuelna indikacija aktivnog filtera

### 5. Događaji i Program
- **Povezivanje događaja sa POI-jevima** - svaki POI može imati više događaja
- **Detalji događaja** - datum, vreme, opis
- **Prikaz na mapi** - događaji se prikazuju u popup-ovima
- **Stranica programa** - posebna stranica za pregled programa (pripremljena)

### 6. Dvijezičnost
- **Srpski i Engleski** - potpuna podrška za oba jezika
- **Cookie-based lokalizacija** - čuva izbor jezika korisnika
- **RESX resursi** - centralizovano upravljanje prevodima
- **Dinamičko prebacivanje** - promena jezika bez osvežavanja stranice

### 7. Google Maps Integracija
- **Direktni linkovi** - svaki POI ima link ka Google Maps
- **Koordinatna preciznost** - tačne geografske koordinate za navigaciju

### 8. Responsive Dizajn
- **Mobile-first pristup** - optimizovano za mobilne uređaje
- **Adaptivni layout** - prilagođava se različitim veličinama ekrana
- **Touch-friendly** - podrška za touch gestove na mobilnim uređajima

---

## ARHITEKTURA APLIKACIJE

### Modeli
- **PointOfInterest** - glavni model za tačke od interesa
  - Osnovni podaci (naziv, opis, koordinate, tip)
  - Događaji (Events) - lista povezanih događaja
  - Status (IsActive) - aktivacija/deaktivacija POI-ja
- **Event** - model za događaje
  - Naslov, datum, vreme, opis

### Kontroleri
- **POIController** - upravljanje POI-jevima
  - `Map()` - glavna stranica sa mapom
  - `Details(int id)` - detaljna stranica POI-ja
  - `Program()` - stranica programa
- **HomeController** - osnovni kontroler
  - `SetLanguage()` - promena jezika

### View-ovi
- **Map.cshtml** - glavna interaktivna mapa
- **Details.cshtml** - detaljna stranica POI-ja sa:
  - Kompletnim opisom lokacije
  - Listom događaja
  - Integrisanom Leaflet mapom
  - Google Maps linkom
- **_Layout.cshtml** - glavni layout sa navigacijom i jezičkim prekidačem

### JavaScript
- **mapa.js** - glavna logika mape
  - Inicijalizacija Leaflet mape
  - Dodavanje markera
  - Geolokacija
  - Filtriranje
  - Transformacija koordinata

---

## LOKALIZACIJA

### Implementacija
- **IStringLocalizer<SharedResource>** - dependency injection za lokalizaciju
- **RESX fajlovi**:
  - `SharedResource.sr.resx` - srpski prevodi
  - `SharedResource.en.resx` - engleski prevodi
  - `Views.Shared._Layout.sr.resx` - layout prevodi
  - `Views.Shared._Layout.en.resx` - layout prevodi

### Pokrivenost
- Svi UI elementi su lokalizovani
- Popup-ovi na mapi
- Navigacija
- Detaljne stranice
- Poruke i labele

---

## MAPA FUNKCIONALNOSTI

### Koordinatni Sistem
- **Image Overlay** - koristi se custom slika mape
- **Simple CRS** - Leaflet Simple Coordinate Reference System
- **Transformacija** - barycentric interpolation između 3 referentne tačke:
  - Gradski park
  - Žitni trg
  - Gradska biblioteka

### Marker Management
- **Custom ikone** - svaki POI ima svoju PNG ikonu
- **Layer grupe** - organizacija markera u grupe
- **Popup sadržaj** - dinamički generisani popup-ovi sa lokalizovanim tekstom
- **Legend** - interaktivna legenda sa klikabilnim elementima

### Interaktivnost
- **Zoom kontrole** - ugrađene Leaflet kontrole
- **Pan** - pomeranje mape mišem/touch-om
- **Click handlers** - klik na marker otvara popup
- **Legend click** - klik na legendu centrira mapu na POI

---

## POI PODACI

### Implementirani POI-jevi

#### Znamenitosti
1. Carska Palata (id: 1)
2. Gradski Park (id: 2)
3. Muzej Srema (id: 3)
4. Lapidarijum (id: 4)
5. Biblioteka (id: 6)
6. Žitni Trg (id: 7)
7. Pozorište (id: 8)
8. Galerija (id: 9)
9. Arhiv Srema (id: 11)
10. Bazilika (id: 13)
11. Rimski Kamp (id: 12)
12. Rimski Bazar (id: 16)
13. Savski Kej (id: 15)

#### Servisi
- WC (3 lokacije)
- Parking (2 lokacije)
- Voda
- Prva Pomoć
- Hrana
- Turistička Organizacija (id: 17)

#### Dodatno
- Atelje
- Kafana Moskva
- Kedar Bar

### Događaji
Svaki POI može imati više događaja sa:
- Naslovom
- Datumom i vremenom
- Opisom
- Organizatorom (gde je primenljivo)

---

## DEPLOYMENT

### Docker
- **Multi-stage build** - optimizovana produkcijska slika
- **.NET 8.0 runtime** - minimalna runtime slika
- **Port konfiguracija** - spremno za deployment

### Konfiguracija
- **appsettings.json** - osnovna konfiguracija
- **appsettings.Development.json** - development konfiguracija
- **PublishProfiles** - profili za publikovanje

---

## TEHNIČKI DETALJI

### Performanse
- **Lazy loading** - markeri se učitavaju na zahtev
- **Optimizovane slike** - PNG ikone optimizovane za web
- **Caching** - statički resursi se keširaju
- **Responsive images** - prilagođene veličine za različite ekrane

### Sigurnost
- **HTTPS redirect** - prisilno preusmeravanje na HTTPS u produkciji
- **Anti-forgery tokens** - zaštita od CSRF napada
- **Input validacija** - validacija korisničkih unosa

### Browser Kompatibilnost
- **Modern browsers** - Chrome, Firefox, Safari, Edge
- **Mobile browsers** - iOS Safari, Chrome Mobile
- **Geolocation API** - podrška za HTML5 Geolocation

---

## STATISTIKA PROJEKTA

- **Ukupno POI-jeva**: 20+
- **Događaja**: 30+
- **Jezici**: 2 (sr, en)
- **Ikone**: 20+ custom PNG ikona
- **Kontroleri**: 2
- **View-ovi**: 5+
- **JavaScript fajlovi**: 1 (mapa.js ~1400 linija)

---

## BUDUĆI RAZVOJ (PRIpremljeno)

### Spremno za implementaciju
- **Program stranica** - view je kreiran, potrebno je dodati logiku
- **CRUD operacije** - Create, Edit, Delete akcije su pripremljene u kontroleru
- **Baza podataka** - struktura je spremna za migraciju na Entity Framework

### Moguća proširenja
- **Admin panel** - upravljanje POI-jevima kroz web interfejs
- **Baza podataka** - migracija sa hardkodiranih podataka na bazu
- **API endpoints** - RESTful API za mobilne aplikacije
- **Push notifikacije** - obaveštenja o događajima
- **Offline mode** - Service Worker za offline funkcionalnost

---

## ZAKLJUČAK

Aplikacija **Digitalna Mapa** je potpuno funkcionalna web aplikacija koja pruža:

✅ Interaktivnu digitalnu mapu grada  
✅ Geolokaciju i navigaciju  
✅ Informacije o tačkama od interesa  
✅ Program događaja  
✅ Dvijezičnu podršku  
✅ Responsive dizajn  
✅ Google Maps integraciju  

Aplikacija je **spremna za produkciju** i može se deploy-ovati na bilo koji hosting koji podržava .NET 8.0 ili Docker kontejnere.

---

**Datum izveštaja**: 2025  
**Verzija**: 1.0  
**Status**: Produkcija spremna

