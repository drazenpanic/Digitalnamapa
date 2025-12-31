// Initialize map with simple CRS for image overlay
document.addEventListener('DOMContentLoaded', () => {
    // Set Leaflet's default icon path
    L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.9.4/dist/images/';

    // Remove existing map if it exists
    if (window.map) {
        window.map.remove();
    }

    // Initialize map with optimized settings
    window.map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 2,
        zoomControl: true,
        zoomControl: {
            position: 'bottomright'
        },
        attributionControl: false
    });

    // Define bounds for the map image
    const bounds = [[0, 0], [1200, 1800]];

    // Add image overlay with error handling
    const imageOverlay = L.imageOverlay('/images/mapa.jpg', bounds, {
        opacity: 1,
        interactive: true
    }).addTo(window.map);

    // Fit map to bounds
    window.map.fitBounds(bounds);

    // markers mora biti globalan
    window.markers = [];

    // Custom icons configuration
    const icons = {
        palata: L.icon({ iconUrl: '/images/palata.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        park: L.icon({ iconUrl: '/images/park.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        muzejsrema: L.icon({ iconUrl: '/images/muzejsrema.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        lapidarijum: L.icon({ iconUrl: '/images/lapidarijum.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        atelje: L.icon({ iconUrl: '/images/atelje.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        biblioteka: L.icon({ iconUrl: '/images/biblioteka.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        zitnitrg: L.icon({ iconUrl: '/images/zitnitrg.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        pozoriste: L.icon({ iconUrl: '/images/pozoriste.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        galerija: L.icon({ iconUrl: '/images/galerija.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        kafanamoskva: L.icon({ iconUrl: '/images/kafanamoskva.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        arhivsrema: L.icon({ iconUrl: '/images/arhivsrema.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        kamp: L.icon({ iconUrl: '/images/kamp.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        bazilika: L.icon({ iconUrl: '/images/bazilika.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] }),
        turistickaorganizacija: L.icon({ iconUrl: '/images/turistickaorganizacija.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] })
    };

    // Sample data - in real app, this would come from the server
    const points = [
        { id: 1, name: "Carska palata", description: "Rimski carski dvor iz 4. veka, centar moći Sirmiuma.", y: 682, x: 355, type: "Dešavanja", iconKey: "palata", isActive: true, latitude: 44.9780, longitude: 19.6105, details: "Jedan od najvažnijih arheoloških lokaliteta u Srbiji.", events: [] },
        { id: 2, name: "Gradski park", description: "Centralni park grada.", y: 400, x: 500, type: "Dešavanja", iconKey: "park", isActive: true, latitude: 44.9770, longitude: 19.6110, details: "Mesto okupljanja i rekreacije.", events: [] },
        { id: 3, name: "Muzej Srema", description: "Muzej sa bogatom istorijom regiona.", y: 300, x: 600, type: "Dešavanja", iconKey: "muzejsrema", isActive: true, latitude: 44.9760, longitude: 19.6120, details: "Izložbe i stalna postavka.", events: [] },
        { id: 4, name: "Lapidarijum", description: "Zbirka kamenih spomenika.", y: 350, x: 700, type: "Dešavanja", iconKey: "lapidarijum", isActive: true, latitude: 44.9750, longitude: 19.6130, details: "Antički kameni artefakti.", events: [] },
        { id: 5, name: "Atelje", description: "Umetničko-istraživačka izložba. Beata Kuhto i Ivan Efimov. Podrška Arcus Sirmium.", y: 679, x: 421, type: "Dešavanja", iconKey: "atelje", isActive: true, latitude: 44.96747443960462, longitude: 19.60618380441317, details: "U kojoj boji je bio Rimski Sirmium? Vreme radionice od 10h-11h i od 16h-17h.", events: [] },
        { id: 6, name: "Gradska Biblioteka", description: "Biblioteka sa bogatim fondom.", y: 500, x: 900, type: "Dešavanja", iconKey: "biblioteka", isActive: true, latitude: 44.9730, longitude: 19.6150, details: "Čitaonica i programi.", events: [] },
        { id: 7, name: "Žitni Trg", description: "Trg sa istorijskim značajem.", y: 550, x: 1000, type: "Dešavanja", iconKey: "zitnitrg", isActive: true, latitude: 44.9720, longitude: 19.6160, details: "Tradicija i kultura.", events: [] },
        { id: 8, name: "Gradsko Pozorište", description: "Pozorište sa raznovrsnim repertoarom.", y: 600, x: 1100, type: "Dešavanja", iconKey: "pozoriste", isActive: true, latitude: 44.9710, longitude: 19.6170, details: "Predstave i gostovanja.", events: [] },
        { id: 9, name: "Gradska Galerija", description: "Galerija likovne umetnosti.", y: 650, x: 1200, type: "Dešavanja", iconKey: "galerija", isActive: true, latitude: 44.9700, longitude: 19.6180, details: "Izložbe i radionice.", events: [] },
        { id: 10, name: "Kafana Moskva", description: "Tradicionalna kafana.", y: 700, x: 1300, type: "Dešavanja", iconKey: "kafanamoskva", isActive: true, latitude: 44.9690, longitude: 19.6190, details: "Specijaliteti i muzika.", events: [] },
        { id: 11, name: "Arhiv Srema", description: "Arhivska građa regiona.", y: 750, x: 1400, type: "Dešavanja", iconKey: "arhivsrema", isActive: true, latitude: 44.9680, longitude: 19.6200, details: "Dokumentacija i istorija.", events: [] },
        { id: 12, name: "Kamp", description: "Rimski legionarski kamp.", y: 800, x: 1500, type: "Dešavanja", iconKey: "kamp", isActive: true, latitude: 44.9670, longitude: 19.6210, details: "Rekonstrukcija i edukacija.", events: [] },
        { id: 13, name: "Bazilika", description: "Starohrišćanska bazilika.", y: 850, x: 1600, type: "Dešavanja", iconKey: "bazilika", isActive: true, latitude: 44.9660, longitude: 19.6220, details: "Rani hrišćanski spomenik.", events: [] },
        { id: 14, name: "Turistička Organizacija", description: "Info centar za posetioce.", y: 900, x: 1700, type: "Dešavanja", iconKey: "turistickaorganizacija", isActive: true, latitude: 44.9650, longitude: 19.6230, details: "Turističke informacije.", events: [] }
    ];

    // Add markers to map
    function addMarkers() {
        // Clear existing markers
        window.markers.forEach(marker => marker.remove());
        window.markers = [];

        points.forEach(point => {
            console.log('POI type:', point.type);
            const marker = L.marker([point.y, point.x], {
                icon: (point.iconKey && icons[point.iconKey]) ? icons[point.iconKey] : L.Icon.Default
            }).bindPopup(`
                <div class="p-2">
                    <h3 class="font-bold">${point.name}</h3>
                    <p>${point.description}</p>
                    ${point.details ? `<p class="mt-2">${point.details}</p>` : ''}
                    ${point.events ? `
                        <div class="mt-2">
                            <h4 class="font-bold">Događaji:</h4>
                            ${point.events.map(event => `
                                <div class="mt-1">
                                    <strong>${event.title}</strong><br>
                                    ${event.time}<br>
                                    ${event.desc}
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            `);
            marker.pointType = point.type;
            console.log('Marker pointType:', marker.pointType);
            window.markers.push(marker);
            marker.addTo(window.map);
        });
    }

    // Filter markers based on type
    function filterPoints(type) {
        console.log('Filtering by type:', type);
        
        // Lista iconKey-a za znamenitosti
        const landmarkIconKeys = ['palata', 'park', 'muzejsrema', 'lapidarijum', 'biblioteka', 'zitnitrg', 'pozoriste', 'galerija', 'arhivsrema', 'bazilika', 'turistickaorganizacija'];
        
        window.markers.forEach(marker => {
            console.log('Marker type:', marker.pointType);
            
            if (type === 'Landmarks') {
                // Proveri da li marker ima iconKey u listi znamenitosti
                const markerIcon = marker.options.icon;
                let isLandmark = false;
                
                // Proveri da li je iconKey u landmark listi
                if (markerIcon && markerIcon.options && markerIcon.options.iconUrl) {
                    const iconUrl = markerIcon.options.iconUrl;
                    landmarkIconKeys.forEach(key => {
                        if (iconUrl.includes(`/${key}.png`)) {
                            isLandmark = true;
                        }
                    });
                }
                
                if (isLandmark) {
                    marker.addTo(window.map);
                } else {
                    marker.remove();
                }
            } else if (type === 'All' || marker.pointType === type) {
                marker.addTo(window.map);
            } else {
                marker.remove();
            }
        });
    }

    // Initialize markers
    addMarkers();

    // Add filter event listeners
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            // Add active class to clicked button
            e.target.classList.add('active');
            filterPoints(e.target.dataset.type);
        });
    });

    // --- KORISNIČKA LOKACIJA ---
    let userLocationMarker = null;
    let userLocationCircle = null;

    // Funkcija za kreiranje korisničkog markera
    function createUserLocationMarker(latlng) {
        const userIcon = L.divIcon({
            className: 'user-location-marker',
            html: '<div style="background: #4285f4; border: 3px solid white; border-radius: 50%; width: 20px; height: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        return L.marker(latlng, { icon: userIcon });
    }

    // Funkcija za kreiranje kruga tačnosti
    function createAccuracyCircle(latlng, accuracy) {
        return L.circle(latlng, {
            radius: accuracy,
            color: '#4285f4',
            fillColor: '#4285f4',
            fillOpacity: 0.1,
            weight: 1
        });
    }

    // --- REFERENTNE TAČKE ZA PRECIZNIJU TRANSFORMACIJU ---
    // Gradski park (cvet): [y, x] = [662, 1274], [lat, lng] = [44.96772509437982, 19.608036819991597]
    // Žitni trg: [y, x] = [824, 142], [lat, lng] = [44.96793486346734, 19.603518546856105]
    // Gradska biblioteka: [y, x] = [810, 1060], [lat, lng] = [44.96812210658803, 19.607509922876687]
    const refA = { img: [662, 1274], geo: [44.96772509437982, 19.608036819991597] };
    const refB = { img: [824, 142], geo: [44.96793486346734, 19.603518546856105] };
    const refC = { img: [810, 1060], geo: [44.96812210658803, 19.607509922876687] };

    // Afina transformacija (barycentric interpolation)
    function geoToImage(lat, lng) {
        // Pretvori geo koordinate u "barycentric" koordinate u odnosu na trougao (refA, refB, refC)
        // https://en.wikipedia.org/wiki/Barycentric_coordinate_system
        const x1 = refA.geo[1], y1 = refA.geo[0];
        const x2 = refB.geo[1], y2 = refB.geo[0];
        const x3 = refC.geo[1], y3 = refC.geo[0];
        const X = lng, Y = lat;

        // Izračunaj determinante
        const detT = (y2 - y3)*(x1 - x3) + (x3 - x2)*(y1 - y3);
        const l1 = ((y2 - y3)*(X - x3) + (x3 - x2)*(Y - y3)) / detT;
        const l2 = ((y3 - y1)*(X - x3) + (x1 - x3)*(Y - y3)) / detT;
        const l3 = 1 - l1 - l2;

        // Interpolacija image koordinata
        const imgY = l1 * refA.img[0] + l2 * refB.img[0] + l3 * refC.img[0];
        const imgX = l1 * refA.img[1] + l2 * refB.img[1] + l3 * refC.img[1];
        return [imgY, imgX];
    }

    // Funkcija za ažuriranje pozicije korisnika
    function updateUserLocation(position) {
        const latlng = [position.coords.latitude, position.coords.longitude];
        const imgCoords = geoToImage(latlng[0], latlng[1]);
        
        // Ukloni postojeće markere
        if (userLocationMarker) {
            userLocationMarker.remove();
        }
        if (userLocationCircle) {
            userLocationCircle.remove();
        }

        // Kreiraj novi marker
        userLocationMarker = createUserLocationMarker(imgCoords);
        userLocationMarker.addTo(window.map);

        // Kreiraj krug tačnosti ako je dostupan
        if (position.coords.accuracy) {
            // Preračunaj accuracy iz metara u "piksele" slike (približno, samo za prikaz)
            // Udaljenost u metrima između ref tačaka
            const dLat = refC.geo[0] - refA.geo[0];
            const dY = refC.img[0] - refA.img[0];
            const metersPerY = Math.abs((dLat !== 0) ? (dY / dLat) : 1) * 111320; // 1 stepen lat ~ 111.32km
            const radiusPx = position.coords.accuracy / metersPerY;
            userLocationCircle = L.circle(imgCoords, {
                radius: radiusPx,
                color: '#4285f4',
                fillColor: '#4285f4',
                fillOpacity: 0.1,
                weight: 1
            });
            userLocationCircle.addTo(window.map);
        }

        // Proveri da li je korisnik van vidljivog područja mape
        const mapBounds = window.map.getBounds();
        if (!mapBounds.contains(imgCoords)) {
            // Korisnik je van mape - prikaži u uglu
            showUserLocationInCorner(imgCoords);
        } else {
            // Korisnik je na mapi - sakrij corner marker
            hideUserLocationInCorner();
        }

        console.log('Korisnička lokacija ažurirana:', imgCoords);
    }

    // Funkcija za prikazivanje korisnika u uglu mape
    function showUserLocationInCorner(latlng) {
        // Ukloni postojeći corner marker ako postoji
        const existingCorner = document.querySelector('.user-location-corner');
        if (existingCorner) {
            existingCorner.remove();
        }

        // Kreiraj corner marker
        const cornerMarker = document.createElement('div');
        cornerMarker.className = 'user-location-corner';
        cornerMarker.innerHTML = '<div style="background: #4285f4; border: 3px solid white; border-radius: 50%; width: 16px; height: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.3); cursor: pointer;"></div>';
        cornerMarker.style.cssText = `
            position: absolute;
            z-index: 1000;
            background: rgba(255,255,255,0.9);
            border-radius: 50%;
            padding: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;

        // Odredi poziciju u uglu na osnovu lokacije
        const mapBounds = window.map.getBounds();
        const mapSize = window.map.getSize();
        
        let cornerX, cornerY;
        if (latlng[0] > mapBounds.getNorth()) {
            cornerY = 10; // Gornji deo
        } else {
            cornerY = mapSize.y - 30; // Donji deo
        }
        
        if (latlng[1] > mapBounds.getEast()) {
            cornerX = mapSize.x - 30; // Desni deo
        } else {
            cornerX = 10; // Levi deo
        }

        cornerMarker.style.left = cornerX + 'px';
        cornerMarker.style.top = cornerY + 'px';

        // Dodaj click handler za centriranje mape na korisnika
        cornerMarker.addEventListener('click', () => {
            window.map.setView(latlng, window.map.getZoom(), { animate: true });
            hideUserLocationInCorner();
        });

        // Dodaj hover efekat
        cornerMarker.addEventListener('mouseenter', () => {
            cornerMarker.style.transform = 'scale(1.2)';
            cornerMarker.style.background = 'rgba(255,255,255,1)';
        });

        cornerMarker.addEventListener('mouseleave', () => {
            cornerMarker.style.transform = 'scale(1)';
            cornerMarker.style.background = 'rgba(255,255,255,0.9)';
        });

        // Dodaj u map container
        const mapContainer = document.getElementById('map');
        mapContainer.appendChild(cornerMarker);
    }

    // Funkcija za sakrivanje corner markera
    function hideUserLocationInCorner() {
        const cornerMarker = document.querySelector('.user-location-corner');
        if (cornerMarker) {
            cornerMarker.remove();
        }
    }

    // Funkcija za rukovanje greškama geolokacije
    function handleLocationError(error) {
        console.error('Greška geolokacije:', error);
        let message = 'Nije moguće dobiti vašu lokaciju.';
        
        switch(error.code) {
            case error.PERMISSION_DENIED:
                message = 'Pristup lokaciji je odbijen.';
                break;
            case error.POSITION_UNAVAILABLE:
                message = 'Informacije o lokaciji nisu dostupne.';
                break;
            case error.TIMEOUT:
                message = 'Zahtev za lokaciju je istekao.';
                break;
        }
        
        // Prikaži poruku korisniku (opciono)
        // alert(message);
    }

    // Funkcija za pokretanje praćenja lokacije
    function startLocationTracking() {
        if ('geolocation' in navigator) {
            // Prvo pokušaj da dobiješ trenutnu poziciju
            navigator.geolocation.getCurrentPosition(
                updateUserLocation,
                handleLocationError,
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 60000
                }
            );

            // Zatim pokreni kontinuirano praćenje
            const watchId = navigator.geolocation.watchPosition(
                updateUserLocation,
                handleLocationError,
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 30000
                }
            );

            // Sačuvaj watch ID za kasnije zaustavljanje
            window.locationWatchId = watchId;
            
            console.log('Praćenje lokacije pokrenuto');
        } else {
            console.log('Geolokacija nije podržana u ovom browseru');
        }
    }

    // Funkcija za zaustavljanje praćenja lokacije
    function stopLocationTracking() {
        if (window.locationWatchId) {
            navigator.geolocation.clearWatch(window.locationWatchId);
            window.locationWatchId = null;
        }
        
        if (userLocationMarker) {
            userLocationMarker.remove();
            userLocationMarker = null;
        }
        
        if (userLocationCircle) {
            userLocationCircle.remove();
            userLocationCircle = null;
        }
        
        hideUserLocationInCorner();
        console.log('Praćenje lokacije zaustavljeno');
    }

    // --- Dugme za uključivanje/isključivanje lokacije (lepši dizajn) ---
    function addLocationToggleButton() {
        const locationButton = document.createElement('button');
        locationButton.innerHTML = '<span class="loc-icon-off">📍</span>';
        locationButton.title = 'Prikaži moju lokaciju';
        locationButton.style.cssText = `
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: 1000;
            background: white;
            border: none;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.18);
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6em;
            cursor: pointer;
            transition: background 0.2s, box-shadow 0.2s;
            outline: none;
        `;

        // Stil za animirani plavi krug kad je ON
        const onCircle = `<span class="loc-icon-on" style="display:inline-block;width:22px;height:22px;border-radius:50%;background:#4285f4;border:3px solid white;box-shadow:0 0 0 4px #4285f455;animation:locPulse 1.2s infinite alternate;"></span>`;
        // Dodaj animaciju u head
        if (!document.getElementById('locPulseAnim')) {
            const style = document.createElement('style');
            style.id = 'locPulseAnim';
            style.innerHTML = `@keyframes locPulse {0%{box-shadow:0 0 0 4px #4285f455;}100%{box-shadow:0 0 0 10px #4285f422;}}`;
            document.head.appendChild(style);
        }

        let isTracking = false;

        locationButton.addEventListener('click', () => {
            if (!isTracking) {
                startLocationTracking();
                locationButton.innerHTML = onCircle;
                locationButton.title = 'Sakrij moju lokaciju';
                locationButton.style.background = '#e3f0fd';
                locationButton.style.boxShadow = '0 2px 12px #4285f455';
                isTracking = true;
            } else {
                stopLocationTracking();
                locationButton.innerHTML = '<span class="loc-icon-off">📍</span>';
                locationButton.title = 'Prikaži moju lokaciju';
                locationButton.style.background = 'white';
                locationButton.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
                isTracking = false;
            }
        });

        // Hover efekat
        locationButton.addEventListener('mouseenter', () => {
            locationButton.style.transform = 'scale(1.08)';
        });
        locationButton.addEventListener('mouseleave', () => {
            locationButton.style.transform = 'scale(1)';
        });

        // Dodaj u map container
        const mapContainer = document.getElementById('map');
        mapContainer.appendChild(locationButton);
    }

    // Dodaj dugme za lokaciju
    addLocationToggleButton();

    // --- SIMULACIJA KORISNIČKE LOKACIJE ZA TESTIRANJE ---
    // function addLocationSimulationButton() {
    //     const simButton = document.createElement('button');
    //     simButton.innerHTML = '🎯';
    //     simButton.title = 'Simuliraj lokaciju: Centar, levo, desno';
    //     simButton.style.cssText = `
    //         position: absolute;
    //         top: 50px;
    //         right: 10px;
    //         z-index: 1000;
    //         background: white;
    //         border: 2px solid #ff6b6b;
    //         border-radius: 4px;
    //         padding: 8px;
    //         cursor: pointer;
    //         font-size: 16px;
    //         transition: all 0.3s ease;
    //     `;

    //     // Centralna koordinata i pomeraji levo/desno
    //     const centerLat = 44.96772509437982;
    //     const centerLng = 19.608036819991597;
    //     const parkLocations = [
    //         { lat: centerLat, lng: centerLng, accuracy: 10, label: 'Centar' },
    //         { lat: centerLat, lng: centerLng - 0.0005, accuracy: 10, label: 'Levo' },
    //         { lat: centerLat, lng: centerLng + 0.0005, accuracy: 10, label: 'Desno' }
    //     ];
    //     let currentIdx = 0;

    //     simButton.addEventListener('click', () => {
    //         const pos = parkLocations[currentIdx];
    //         const simulatedPosition = {
    //             coords: {
    //                 latitude: pos.lat,
    //                 longitude: pos.lng,
    //                 accuracy: pos.accuracy
    //             }
    //         };
    //         updateUserLocation(simulatedPosition);
    //         simButton.style.background = '#ff6b6b';
    //         simButton.style.color = 'white';
    //         simButton.style.borderColor = '#ff6b6b';
    //         simButton.title = `Simulacija: ${pos.label} (${pos.lat}, ${pos.lng})`;
    //         currentIdx = (currentIdx + 1) % parkLocations.length;
    //     });

    //     // Dodaj hover efekat
    //     simButton.addEventListener('mouseenter', () => {
    //         simButton.style.transform = 'scale(1.1)';
    //     });
    //     simButton.addEventListener('mouseleave', () => {
    //         simButton.style.transform = 'scale(1)';
    //     });
    //     // Dodaj u map container
    //     const mapContainer = document.getElementById('map');
    //     mapContainer.appendChild(simButton);
    // }

    // Dodaj dugme za simulaciju
    // addLocationSimulationButton();

    // --- DODATNE SIMULACIJE ZA RAZLIČITE POZICIJE ---
    // (uklanjamo dugme 🎲 i njegovu funkciju)
    // function addMultipleLocationSimulation() { ... }
    // addMultipleLocationSimulation(); // uklonjeno

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    }

    // Adjust map on window resize for responsiveness
    window.addEventListener('resize', () => {
        // Invalidate size to ensure Leaflet recalculates dimensions
        window.map.invalidateSize();
        // Fit bounds again to adjust zoom level to new size
        window.map.fitBounds(bounds);
        console.log('Map adjusted on resize.');
    });

    // --- MARKER CLICK HANDLER ---
    window.markers.forEach((marker, idx) => {
        marker.on('click', function() {
            const poi = points[idx];
            let eventHtml = '';
            if (poi.events && poi.events.length > 0) {
                const ev = poi.events[0];
                eventHtml = `
                    <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                        <strong>Dešavanje:</strong><br>
                        <span style=\"font-weight:bold;\">${ev.title}</span> <span style=\"color:#D3B865;\">(${ev.time})</span><br>
                        <span>${ev.desc}</span>
                    </div>
                `;
            }
            marker.bindPopup(`
                <div style=\"font-family:'Open Sans',sans-serif;\">
                    <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${poi.name}</h3>
                    <p style=\"margin-bottom:0.3em;\">${poi.description}</p>
                    <p style=\"margin-bottom:0.3em;\">${poi.details}</p>
                    ${eventHtml}
                    <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                        <a href=\"https://www.google.com/maps/search/?api=1&query=${poi.latitude},${poi.longitude}\" target=\"_blank\" class=\"popup-gmaps-btn\">Otvori u Google mapama</a>
                        <a href=\"/POI/Details/${poi.id}\" class=\"popup-details-link\">Detalji</a>
                    </div>
                </div>
            `).openPopup();
        });
    });

    // --- LEGEND CLICK HANDLER ---
    document.querySelectorAll('.legend-item img[data-id]').forEach(img => {
        img.addEventListener('click', function() {
            const poiId = parseInt(this.getAttribute('data-id'));
            const poi = points.find(p => p.id === poiId);
            if (!poi) return;
            // Pronađi marker za ovaj POI
            const marker = window.markers.find(m => m.getLatLng().lat === poi.y && m.getLatLng().lng === poi.x);
            if (!marker) return;
            let eventHtml = '';
            if (poi.events && poi.events.length > 0) {
                const ev = poi.events[0];
                eventHtml = `
                    <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                        <strong>Dešavanje:</strong><br>
                        <span style=\"font-weight:bold;\">${ev.title}</span> <span style=\"color:#D3B865;\">(${ev.time})</span><br>
                        <span>${ev.desc}</span>
                    </div>
                `;
            }
            window.map.setView([poi.y, poi.x], window.map.getZoom(), { animate: true });
            marker.bindPopup(`
                <div style=\"font-family:'Open Sans',sans-serif;\">
                    <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${poi.name}</h3>
                    <p style=\"margin-bottom:0.3em;\">${poi.description}</p>
                    <p style=\"margin-bottom:0.3em;\">${poi.details}</p>
                    ${eventHtml}
                    <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                        <a href=\"https://www.google.com/maps/search/?api=1&query=${poi.latitude},${poi.longitude}\" target=\"_blank\" class=\"popup-gmaps-btn\">Otvori u Google mapama</a>
                        <a href=\"/POI/Details/${poi.id}\" class=\"popup-details-link\">Detalji</a>
                    </div>
                </div>
            `).openPopup();
        });
    });

    // --- CSS za Google Maps dugme i Detalji link u popupu ---
    const popupBtnStyle = document.createElement('style');
    popupBtnStyle.innerHTML = `
    .leaflet-popup-content .popup-gmaps-btn {
        display: inline-block;
        background: #111;
        color: #D3B865;
        border: 2px solid #D3B865;
        border-radius: 6px;
        padding: 6px 16px;
        font-family: 'Amatic SC', cursive;
        font-weight: 700;
        font-size: 1em;
        text-decoration: none;
        transition: background 0.2s, color 0.2s;
    }
    .leaflet-popup-content .popup-gmaps-btn:hover {
        background: #D3B865;
        color: #111;
        text-decoration: none;
    }
    .leaflet-popup-content .popup-details-link {
        display: inline-block;
        color: #D3B865;
        font-family: 'Open Sans', sans-serif;
        font-style: italic;
        font-size: 1em;
        text-decoration: underline;
        margin-left: 0.5em;
        transition: color 0.2s, background 0.2s;
        border: 2px solid #111;
        border-radius: 6px;
        padding: 6px 16px;
    }
    .leaflet-popup-content .popup-details-link:hover {
        color: #111;
        background: #D3B865;
        text-decoration: underline;
        border-radius: 4px;
        padding: 2px 8px;
    }
    .leaflet-popup-content .popup-gmaps-btn, .leaflet-popup-content .popup-details-link {
        vertical-align: middle;
    }
    `;
    document.head.appendChild(popupBtnStyle);

    // --- CUSTOM MAP STYLE ---
    const mapStyle = {
        "version": 8,
        "sources": {
            "raster-tiles": {
                "type": "raster",
                "tiles": ["/images/mapa.jpg"],
                "tileSize": 256
            }
        },
        "layers": [
            {
                "id": "simple-tiles",
                "type": "raster",
                "source": "raster-tiles",
                "minzoom": 0,
                "maxzoom": 22
            }
        ]
    };

    // --- CSS za image overlay ---
    const overlayStyle = document.createElement('style');
    overlayStyle.innerHTML = `
    .leaflet-image-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `;
    document.head.appendChild(overlayStyle);

    // --- BRISANJE SVIH PINOVA ---
    window.markers.forEach(marker => marker.remove());
    window.markers = [];

    // --- DODAVANJE NOVOG PINA ---
    const palataIcon = L.icon({
        iconUrl: '/images/palata.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
    });

    const newMarker = L.marker([478, 1623], { icon: palataIcon }).addTo(window.map);
    newMarker.pointType = "Dešavanja";
    window.markers.push(newMarker);

    // --- CSS za ikonicu ---
    const iconStyle = document.createElement('style');
    iconStyle.innerHTML = `
    .leaflet-marker-icon {
        background: transparent;
        border: none;
    }
    `;
    document.head.appendChild(iconStyle);

    // --- DODAVANJE POPUP-A ZA CARSKU PALATU ---
    newMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_ImperialPalace_Title'] : 'Carska Palata'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_ImperialPalace_Description'] : 'Carska palata u Sremskoj Mitrovici, poznata kao Imperijalna palata Sirmijuma, jedno je od najznačajnijih arheoloških nalazišta u Srbiji, simbol moci nekadasnjeg Rimskog carstva.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Event'] : 'Dešavanje:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_Parade'] : 'Defile učesnika festivala'}</span> <span style=\"color:#D3B865;\">(01.08. i 02.08. 2025. u 20:00h)</span><br>
                <span>${window.localizationData ? window.localizationData['Event_ParadeDesc'] : 'Defile učesnika festivala kreće od Carske palate do Žitnog trga.'}</span>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.966733731689764,19.610175926337753\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/1\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- DODAVANJE PARKA ---
    const parkIcon = L.icon({
        iconUrl: '/images/park.png',
        iconSize: [55, 55],
        iconAnchor: [27.5, 55],
        popupAnchor: [0, -55]
    });

    const parkMarker = L.marker([662, 1274], { icon: parkIcon }).addTo(window.map);
    parkMarker.pointType = "Dešavanja";
    window.markers.push(parkMarker);

    parkMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_CityPark_Title'] : 'Gradski Park - Kameni cvet'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_CityPark_Description'] : 'Fontana „Kameni cvet" u Gradskom parku Sremske Mitrovice jedno je od najprepoznatljivijih obeležja grada, koje spaja umetnost, istoriju i duboku emotivnu simboliku.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Events'] : 'Dešavanja:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_ChildrenWorkshops'] : 'Radionice za decu'}</span> <span style=\"color:#D3B865;\">(02.08.2025, 10:00-14:00)</span><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_ExperimentalArchaeology'] : 'Eksperimentalna arheologija'}</span> <span style=\"color:#D3B865;\">(02.08.2025, 10:00-19:00)</span><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_RomanBazaar'] : 'Rimski bazar'}</span> <span style=\"color:#D3B865;\">(02.08.2025, 10:00-19:00)</span><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_PhotoCornerFull'] : 'Foto kutak'}</span><br>
                <span style=\"font-style:italic;\">${window.localizationData ? window.localizationData['Event_CaptureRomanMoment'] : '"Uhvati rimski trenutak"'}</span><br>
                <span style=\"font-size:0.9rem;\">${window.localizationData ? window.localizationData['Event_CaptureRomanMomentOrganizer'] : 'Organizator: Meerart kreativni centar'}</span><br>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.96772509437982,19.608036819991597\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/2\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- LEGEND CLICK HANDLER ZA PARK ---
    document.querySelector('.legend-park')?.addEventListener('click', function() {
        if (!parkMarker) return;
        window.map.setView([728, 1362], window.map.getZoom(), { animate: true });
        parkMarker.openPopup();
    });

    // --- DODAVANJE MUZEJA ---
    const muzejIcon = L.icon({
        iconUrl: '/images/muzejsrema.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
    });

    const muzejMarker = L.marker([676, 1528], { icon: muzejIcon }).addTo(window.map);
    muzejMarker.pointType = "Dešavanja";
    window.markers.push(muzejMarker);

    muzejMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_SremMuseum_Title'] : 'Muzej Srema'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_SremMuseum_Description'] : 'Muzej Srema u Sremskoj Mitrovici, smešten na adresi Trg Svetog Stefana 15, predstavlja jednu od najznačajnijih kulturnih institucija u regionu.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Event'] : 'Dešavanje:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_ExperimentalArchaeology'] : 'Eksperimentalna arheologija'}</span> <span style=\"color:#D3B865;\">(02.08.2025 10h-19h)</span><br>
                <span>${window.localizationData ? window.localizationData['Event_ExperimentalArchaeology'] : 'Eksperimentalna arheologija'}</span>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.9760,19.6120\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/3\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- LEGEND CLICK HANDLER ZA MUZEJ ---
    document.querySelector('.legend-muzej')?.addEventListener('click', function() {
        if (!muzejMarker) return;
        window.map.setView([702, 1668], window.map.getZoom(), { animate: true });
        muzejMarker.openPopup();
    });

    // --- DODAVANJE LAPIDARIJUMA ---
    const lapidarijumIcon = L.icon({
        iconUrl: '/images/lapidarijum.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
    });

    const lapidarijumMarker = L.marker([659, 551], { icon: lapidarijumIcon }).addTo(window.map);
    lapidarijumMarker.pointType = "Dešavanja";
    window.markers.push(lapidarijumMarker);

    lapidarijumMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Lapidarium_Title'] : 'Muzej Srema Lapidarijum'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Lapidarium_Description'] : 'Lapidarijum Muzeja Srema u Sremskoj Mitrovici predstavlja jednu od najvrednijih arheoloških postavki u Srbiji, smešten u dvorištu muzeja na Trgu Svetog Stefana 15.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Event'] : 'Dešavanje:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_ExperimentalArchaeology'] : 'Eksperimentalna arheologija'}</span> <span style=\"color:#D3B865;\">(02.08.2025 10h-19h)</span><br>
                <span>${window.localizationData ? window.localizationData['Event_ExperimentalArchaeology'] : 'Eksperimentalna arheologija'}</span>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.96747443960462,19.60618380441317\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/4\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- DODAVANJE ATELJEA ---
    const ateljeIcon = L.icon({
        iconUrl: '/images/atelje.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
    });

    const ateljeMarker = L.marker([679, 421], { icon: ateljeIcon }).addTo(window.map);
    ateljeMarker.pointType = "Dešavanja";
    window.markers.push(ateljeMarker);

    ateljeMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Atelje_Title'] : 'Atelje'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Atelje_Description'] : 'Umetničko-istraživačka izložba. Beata Kuhto i Ivan Efimov. Podrška Arcus Sirmium.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Event'] : 'Dešavanje:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_AteljeWorkshop'] : 'U kojoj boji je bio Rimski Sirmium?'}</span> <span style=\"color:#D3B865;\">(02.08.2025)</span><br>
                <span>${window.localizationData ? window.localizationData['Event_AteljeWorkshopTime'] : 'Vreme radionice od 10h-11h i od 16h-17h'}</span>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.967687768821456,19.604694912914173\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
            </div>
        </div>
    `);

    // --- DODAVANJE BIBLIOTEKE ---
    const bibliotekaIcon = L.icon({
        iconUrl: '/images/biblioteka.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
    });

    const bibliotekaMarker = L.marker([810, 1060], { icon: bibliotekaIcon }).addTo(window.map);
    bibliotekaMarker.pointType = "Dešavanja";
    window.markers.push(bibliotekaMarker);

    bibliotekaMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Library_Title'] : 'Biblioteka „Gligorije Vozarević"'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Library_Description'] : 'Biblioteka „Gligorije Vozarević" u Sremskoj Mitrovici jedna je od najstarijih i najznačajnijih kulturnih ustanova u Sremu, osnovana 4. februara 1866. godine kao Srpska građanska čitaonica.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Events'] : 'Dešavanja:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_DigitalInteraction'] : 'Digitalna interakcija - Razgovor sa rimskim carevima Sirmiuma'}</span> <span style=\"color:#D3B865;\">(02.08.2025, 10h-19h)</span><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_ChildrenWorkshopWriting'] : 'Dečija radionica "Piši kao rimljani"'}</span> <span style=\"color:#D3B865;\">(02.08.2025 - 10:00-11:30)</span><br>
                <span style=\"font-size:0.9rem;\">${window.localizationData ? window.localizationData['Event_ChildrenWorkshopWritingModerators'] : 'Moderatori: Milica Panić, Verica Karić - Meerart kreativni centar'}</span><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_ChildrenWorkshopPattern'] : 'Dečija radionica "Pustuj rimljansku šaru"'}</span> <span style=\"color:#D3B865;\">(02.08.2025 - 12:00-13:30)</span><br>
                <span style=\"font-size:0.9rem;\">${window.localizationData ? window.localizationData['Event_ChildrenWorkshopPatternModerators'] : 'Moderatori: Anica Jelenković, Emilija Teodorović - Anana art'}</span><br>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.96812210658803,19.607509922876687\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/6\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- LEGEND CLICK HANDLERS ---
    document.querySelector('.legend-lapidarijum')?.addEventListener('click', function() {
        if (!lapidarijumMarker) return;
        window.map.setView([648, 656], window.map.getZoom(), { animate: true });
        lapidarijumMarker.openPopup();
    });

    document.querySelector('.legend-atelje')?.addEventListener('click', function() {
        if (!ateljeMarker) return;
        window.map.setView([679, 421], window.map.getZoom(), { animate: true });
        ateljeMarker.openPopup();
    });

    document.querySelector('.legend-biblioteka')?.addEventListener('click', function() {
        if (!bibliotekaMarker) return;
        window.map.setView([926, 1000], window.map.getZoom(), { animate: true });
        bibliotekaMarker.openPopup();
    });

    // --- DODAVANJE ŽITNOG TRGA ---
    const zitniTrgIcon = L.icon({
        iconUrl: '/images/zitnitrg.png',
        iconSize: [60, 60],
        iconAnchor: [30, 60],
        popupAnchor: [0, -60]
    });

    const zitniTrgMarker = L.marker([824, 142], { icon: zitniTrgIcon }).addTo(window.map);
    zitniTrgMarker.pointType = "Dešavanja";
    window.markers.push(zitniTrgMarker);

    zitniTrgMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_GrainSquare_Title'] : 'Žitni Trg'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_GrainSquare_Description'] : 'Žitni trg je bio deo zanatsko-trgovačke zone Sirmijuma.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Events'] : 'Dešavanja:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_FestivalParade'] : 'Defile učesnika Festivala Lux Aurelius'}</span> <span style=\"color:#D3B865;\">(01.08.2025 20:00h)</span><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_SirmiumLuxVerbi'] : 'Sirmium Lux Verbi - revija besednistva'}</span> <span style=\"color:#D3B865;\">(01.08.2025 20:30h)</span><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_FestivalOpening'] : 'Program otvaranja festivala Lux Aurelius'}</span> <span style=\"color:#D3B865;\">(01.08.2025 21:00h)</span><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_FestivalClosing'] : 'Program zatvaranja Festivala Lux Aurelius'}</span> <span style=\"color:#D3B865;\">(02.08.2025 21:30h)</span><br>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.96793486346734,19.603518546856105\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/7\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- DODAVANJE POZORIŠTA ---
    const pozoristeIcon = L.icon({
        iconUrl: '/images/pozoriste.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
    });

    const pozoristeMarker = L.marker([770, 968], { icon: pozoristeIcon }).addTo(window.map);
    pozoristeMarker.pointType = "Dešavanja";
    window.markers.push(pozoristeMarker);

    pozoristeMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Theater_Title'] : 'Pozorište „Dobrica Milutinović"'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Theater_Description'] : 'Pozorište „Dobrica Milutinović" u Sremskoj Mitrovici jedina je profesionalna pozorišna ustanova u Sremu, sa tradicijom koja seže u 19. vek.'}</p>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.967912043904136,19.607416066846497\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/8\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- DODAVANJE GALERIJE ---
    const galerijaIcon = L.icon({
        iconUrl: '/images/galerija.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
    });

    const galerijaMarker = L.marker([730, 867], { icon: galerijaIcon }).addTo(window.map);
    galerijaMarker.pointType = "Dešavanja";
    window.markers.push(galerijaMarker);

    galerijaMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Gallery_Title'] : 'Galerija „Lazar Vozarević"'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Gallery_Description'] : 'Galerija „Lazar Vozarević" osnovana je 1973. godine u čast jednog od najznačajnijih posleratnih srpskih slikara, rođenog u Sremskoj Mitrovici.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Event'] : 'Dešavanje:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_OpenForVisitors'] : 'Otvorena za posetioce'}</span> <span style=\"color:#D3B865;\">(tokom festivala)</span><br>
                <span>${window.localizationData ? window.localizationData['Event_OpenForVisitorsDesc'] : 'Ustanova je otvorena za sve posetioce tokom festivala.'}</span>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.9675542153864,19.607229753180945\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/9\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- DODAVANJE KAFANE MOSKVA ---
    const moskvaIcon = L.icon({
        iconUrl: '/images/kafanamoskva.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
    });

    const moskvaMarker = L.marker([682, 228], { icon: moskvaIcon }).addTo(window.map);
    moskvaMarker.pointType = "Dešavanja";
    window.markers.push(moskvaMarker);

    moskvaMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_MoscowTavern_Title'] : 'Kafana Moskva'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_MoscowTavern_Description'] : 'Kafana Moskva nudi autentična jela ruske kuhinje pripremljena s ljubavlju i pažnjom, uz domaće likere koji savršeno zaokružuju doživljaj. Topla atmosfera, srdačni domaćini i više nego pristupačne cene čine ovo mesto pravim izborom za uživanje u ruskoj tradiciji i ukusu.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Event'] : 'Dešavanje:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_RomanPubQuiz'] : 'Rimski pub kviz'}</span> <span style=\"color:#D3B865;\">(01.08. u 21:30)</span><br>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.967592000759105,19.60358034611363\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
            </div>
        </div>
    `);

    // --- LEGEND CLICK HANDLERS ---
    document.querySelector('.legend-zitnitrg')?.addEventListener('click', function() {
        if (!zitniTrgMarker) return;
        window.map.setView([846, 132], window.map.getZoom(), { animate: true });
        zitniTrgMarker.openPopup();
    });

    document.querySelector('.legend-pozoriste')?.addEventListener('click', function() {
        if (!pozoristeMarker) return;
        window.map.setView([784, 1028], window.map.getZoom(), { animate: true });
        pozoristeMarker.openPopup();
    });

    document.querySelector('.legend-galerija')?.addEventListener('click', function() {
        if (!galerijaMarker) return;
        window.map.setView([730, 900], window.map.getZoom(), { animate: true });
        galerijaMarker.openPopup();
    });

    document.querySelector('.legend-moskva')?.addEventListener('click', function() {
        if (!moskvaMarker) return;
        window.map.setView([698, 150], window.map.getZoom(), { animate: true });
        moskvaMarker.openPopup();
    });

    // --- DODAVANJE ARHIVA SREMA ---
    const arhivSremaIcon = L.icon({
        iconUrl: '/images/arhivsrema.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
    });

    const arhivSremaMarker = L.marker([550, 1167], { icon: arhivSremaIcon }).addTo(window.map);
    arhivSremaMarker.pointType = "Dešavanja";
    window.markers.push(arhivSremaMarker);

    arhivSremaMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_HistoricalArchive_Title'] : 'Istorijski arhiv Srema'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_HistoricalArchive_Description'] : 'Istorijski arhiv Srem u Sremskoj Mitrovici predstavlja centralnu arhivsku ustanovu za Sremski okrug, osnovanu 1946. godine.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Event'] : 'Dešavanje:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_OpenForVisitors'] : 'Otvoreno za posetioce'}</span> <span style=\"color:#D3B865;\">(tokom festivala)</span><br>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.96715616157948,19.607888312961947\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/11\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- LEGEND CLICK HANDLERS ---
    document.querySelector('.legend-arhiv-srema')?.addEventListener('click', function() {
        if (!arhivSremaMarker) return;
        window.map.setView([562, 1238], window.map.getZoom(), { animate: true });
        arhivSremaMarker.openPopup();
    });

    // --- DODAVANJE RIMSKOG KAMPA ---
    const kampIcon = L.icon({
        iconUrl: '/images/kamp.png',
        iconSize: [60, 60],
        iconAnchor: [30, 60],
        popupAnchor: [0, -60]
    });

    const kampMarker = L.marker([496, 1002], { icon: kampIcon }).addTo(window.map);
    kampMarker.pointType = "Dešavanja";
    window.markers.push(kampMarker);

    kampMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_RomanCamp_Title'] : 'Rimski Legionarski Kamp'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_RomanCamp_Description'] : 'Rimski vojni kamp u doba Sirmijuma bio je organizovan po strogoj hijerarhiji i disciplinovanoj strukturi, sa vojnicima raspoređenim u redove šatora (tentorija) koji su formirali ulice i trgove unutar utvrđenog logora.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Event'] : 'Dešavanje:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_RomanGames'] : 'Rimske igre'}</span> <span style=\"color:#D3B865;\">(02.08.2025, 10h-14h)</span><br>
                <span>${window.localizationData ? window.localizationData['Event_RomanGamesDesc'] : 'Rimske igre i rekonstrukcija svakodnevnog života legionara'}</span>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.96635770210009,19.608090675161904\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/12\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- LEGEND CLICK HANDLER ZA KAMP ---
    document.querySelector('.legend-kamp')?.addEventListener('click', function() {
        if (!kampMarker) return;
        window.map.setView([464, 1118], window.map.getZoom(), { animate: true });
        kampMarker.openPopup();
    });

    // --- DODAVANJE BAZILIKE ---
    const bazilikaIcon = L.icon({
        iconUrl: '/images/bazilika.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
    });

    const bazilikaMarker = L.marker([1056, 1404], { icon: bazilikaIcon }).addTo(window.map);
    bazilikaMarker.pointType = "Dešavanja";
    window.markers.push(bazilikaMarker);

    bazilikaMarker.bindPopup(`
        <div style=\"font-family:'Open Sans',sans-serif;\">
            <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.3em;margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Basilica_Title'] : 'Bazilika Svetog Dimitrija'}</h3>
            <p style=\"margin-bottom:0.3em;\">${window.localizationData ? window.localizationData['Popup_Basilica_Description'] : 'Bazilika Svetog Dimitrija u Sremskoj Mitrovici jedno je od najznačajnijih ranohrišćanskih arheoloških nalazišta na prostoru antičkog Sirmijuma.'}</p>
            <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">
                <strong>${window.localizationData ? window.localizationData['Popup_Event'] : 'Dešavanje:'}</strong><br>
                <span style=\"font-weight:bold;\">${window.localizationData ? window.localizationData['Event_OpenForVisitors'] : 'Otvorena za posetioce'}</span> <span style=\"color:#D3B865;\">(tokom festivala)</span><br>
                <span>${window.localizationData ? window.localizationData['Event_OpenForVisitorsDuring'] : 'Ustanova je otvorena u toku festivala za sve posetioce'}</span>
            </div>
            <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">
                <a href=\"https://www.google.com/maps/search/?api=1&query=44.969564113652375,19.60932520307554\" target=\"_blank\" class=\"popup-gmaps-btn\">${window.localizationData ? window.localizationData['Popup_OpenInGoogleMaps'] : 'Otvori u Google mapama'}</a>
                <a href=\"/POI/Details/13\" class=\"popup-details-link\">${window.localizationData ? window.localizationData['Popup_Details'] : 'Detalji'}</a>
            </div>
        </div>
    `);

    // --- LEGEND CLICK HANDLER ZA BAZILIKU ---
    document.querySelector('.legend-bazilika')?.addEventListener('click', function() {
        if (!bazilikaMarker) return;
        window.map.setView([1025, 1154], window.map.getZoom(), { animate: true });
        bazilikaMarker.openPopup();
    });

    // --- TURISTIČKA ORGANIZACIJA MARKER ---
    const turistickaIcon = L.icon({ iconUrl: '/images/turistickaorganizacija.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] });
    const turistickaMarker = L.marker([712, 1372], { icon: turistickaIcon });
    const turistickaPopup = `
        <img src='/images/turistickaorganizacija.png' alt='' style='width:70px;height:70px;object-fit:contain;margin-bottom:8px;border-radius:50%;box-shadow:0 2px 8px #aaa;background:#ffffff;'>
        <h3 style="font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.15em;margin:0 0 0.3em 0;color:#211B0D;text-align:left;">${localizationData.Popup_TouristInfo_Title || 'Turistički informativni centar'}</h3>
        <div style='text-align:left;'>${localizationData.Popup_TouristInfo_Description || 'Turistički informativni centar Sremske Mitrovice nalazi se u Gradskom parku, na adresi Masarikova 2A, i predstavlja centralno mesto za sve posetioce koji žele da otkriju bogatu istoriju, kulturu i prirodne lepote ovog grada i okoline.'}</div>
        <div style="font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;">
            <strong>${localizationData.Popup_Event || 'Dešavanje'}:</strong><br>
            <span style="font-weight:bold;">${localizationData.Popup_TouristInfo_Event || 'Terasa Turističke organizacije - izložba Fotografija "Mitrovica kroz objektiv"'}</span> <span style="color:#D3B865;">${localizationData.Popup_TouristInfo_EventTime || '(02.08.2025, 10-19h)'}</span><br>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;">
            <a href="https://www.google.com/maps/search/?api=1&query=44.96811551930968,19.60832829252163" target="_blank" class="popup-gmaps-btn">${localizationData.Popup_GoogleMaps || 'Otvori u Google mapama'}</a>
            <a href="/POI/Details/17" class="popup-details-link">${localizationData.Popup_Details || 'Detalji'}</a>
        </div>
    `;
    turistickaMarker.bindPopup(turistickaPopup);
    turistickaMarker.pointType = 'Servisi';
    window.markers.push(turistickaMarker);
    turistickaMarker.addTo(window.map);
    document.querySelector('.legend-turisticka')?.addEventListener('click', function() {
        turistickaMarker.openPopup();
        window.map.setView(turistickaMarker.getLatLng(), window.map.getZoom(), { animate: true });
    });

    // Remove legend toggle functionality since legend is always visible
    const legendContainer = document.querySelector('.legend');
    if (legendContainer) {
        // Prevent clicks inside legend from interfering with map
        legendContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // --- TOALET MARKERS ---
    const toaletIcon = L.icon({ iconUrl: '/images/wc.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] });
    
    // Definišemo toalet pozicije sa njihovim Google Maps koordinatama
    const toaletData = [
        { pos: [538, 1328], lat: 44.966995938758096, lng: 19.60858772722934}, 
        { pos: [436, 1732], lat: 44.96671902553784, lng: 19.610064464631744 },
        { pos: [736, 1450], lat: 44.96816754457013, lng: 19.60863776301084}
    ];
    
    window.toaletMarkers = toaletData.map((data, index) => {
        const marker = L.marker(data.pos, { icon: toaletIcon });
        
        // Kreiraj popup sa specifičnim Google Maps linkom za svaki marker
        const toaletPopup = `<div style=\"position:relative;display:block;background:#ffffff url('https://www.transparenttextures.com/patterns/old-wall.png');background-size:cover;background-blend-mode:multiply;border:2px solid #b0a99f;box-shadow:0 4px 24px rgba(211,184,101,0.2),inset 0 0 40px #ffffff; border-radius:16px;padding:18px 18px 12px 12px;min-width:260px;max-width:340px;font-family:'Open Sans',sans-serif;\">\n    <img src='/images/wc.png' alt='' style='width:70px;height:70px;object-fit:contain;margin-bottom:8px;border-radius:50%;box-shadow:0 2px 8px #aaa;background:#ffffff;'>\n    <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.15em;margin:0 0 0.3em 0;color:#211B0D;text-align:left;\">${localizationData.Popup_Toilet_Title || 'Javni Toalet'} ${index + 1}</h3>\n    <div style='text-align:left;'>${localizationData.Popup_Toilet_Description || 'Objekti su na usluzi kako učesnicima tako i posetiocima festivala.'}</div>\n    <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">\n        <a href=\"https://www.google.com/maps/search/?api=1&query=${data.lat},${data.lng}\" target=\"_blank\" class=\"popup-gmaps-btn\">${localizationData.Popup_GoogleMaps || 'Otvori u Google mapama'}</a>\n    </div>\n</div>`;
        
        marker.bindPopup(toaletPopup);
        marker.pointType = 'Servisi';
        window.markers.push(marker);
        marker.addTo(window.map);
        return marker;
    });

    // --- POPUP SLIKE ZA SVE MARKERE ---
    window.markers.forEach(marker => {
        const iconUrl = marker.options.icon?.options?.iconUrl || '';
        const popupContent = marker.getPopup()?.getContent();
        if (popupContent && iconUrl) {
            // Zameni popup tako da ima sliku u gornjem desnom uglu, round i sa marginom
            const parchmentBg = "https://www.transparenttextures.com/patterns/old-wall.png";
            const newPopup = `<div style=\"position:relative;display:block;background:#ffffff url('${parchmentBg}');background-size:cover;background-blend-mode:multiply;border:2px solid #b0a99f;box-shadow:0 4px 24px rgba(211,184,101,0.2),inset 0 0 40px #ffffff; border-radius:16px;padding:18px 18px 12px 12px;min-width:260px;max-width:340px;font-family:'Open Sans',sans-serif;\">\n    <img src='${iconUrl}' alt='' style='width:64px;height:64px;object-fit:contain;margin-bottom:8px;border-radius:50%;box-shadow:0 2px 8px #aaa;background:#ffffff;'>\n    <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.15em;margin:0 0 0.3em 0;color:#211B0D;text-align:left;\">${(popupContent.match(/<h3[^>]*>(.*?)<\/h3>/i)||[])[1]||''}</h3>\n    <div style='text-align:left;'>${popupContent.replace(/<img[^>]*>/, '').replace(/<h3[^>]*>.*?<\/h3>/i, '')}</div>\n</div>`;
            marker.setPopupContent(newPopup);
        }
    });

    // --- LEGEND CLICK HANDLERS FOR PALATA AND WC ---
    document.querySelector('.legend-palata')?.addEventListener('click', function() {
        const palataMarker = window.markers.find(m => m.options.icon?.options?.iconUrl?.includes('palata'));
        if (palataMarker) {
            palataMarker.openPopup();
            window.map.setView(palataMarker.getLatLng(), window.map.getZoom(), { animate: true });
        }
    });
    document.querySelector('.legend-toalet')?.addEventListener('click', function() {
        if(window.toaletMarkers && window.toaletMarkers[0]) {
            window.toaletMarkers[0].openPopup();
            window.map.setView(window.toaletMarkers[0].getLatLng(), window.map.getZoom(), { animate: true });
            }
        });

    // --- VODA MARKER ---
    const vodaIcon = L.icon({ iconUrl: '/images/voda.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] });
    const vodaMarker = L.marker([513, 1436], { icon: vodaIcon });
    const parchmentBg = "https://www.transparenttextures.com/patterns/old-wall.png";
    const vodaPopup = `<div style="position:relative;display:block;background:#ffffff url('${parchmentBg}');background-size:cover;background-blend-mode:multiply;border:2px solid #b0a99f;box-shadow:0 4px 24px rgba(211,184,101,0.2),inset 0 0 40px #ffffff; border-radius:16px;padding:18px 18px 12px 12px;min-width:260px;max-width:340px;font-family:'Open Sans',sans-serif;">
    <img src='/images/voda.png' alt='' style='width:70px;height:70px;object-fit:contain;margin-bottom:8px;border-radius:50%;box-shadow:0 2px 8px #aaa;background:#ffffff;'>
    <h3 style="font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.15em;margin:0 0 0.3em 0;color:#211B0D;text-align:left;">${localizationData.Popup_Water_Title || 'Voda za piće'}</h3>
    <div style='text-align:left;'>${localizationData.Popup_Water_Description || 'Cisterna sa vodom za piće'}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;">
        <a href="https://www.google.com/maps/search/?api=1&query=44.966995938758096,19.60858772722934" target="_blank" class="popup-gmaps-btn">${localizationData.Popup_GoogleMaps || 'Otvori u Google mapama'}</a>
    </div>
</div>`;
    vodaMarker.bindPopup(vodaPopup);
    vodaMarker.pointType = 'Servisi';
    window.markers.push(vodaMarker);
    vodaMarker.addTo(window.map);

    document.querySelector('.legend-voda')?.addEventListener('click', function() {
        vodaMarker.openPopup();
        window.map.setView(vodaMarker.getLatLng(), window.map.getZoom(), { animate: true });
    });

    // --- PRVA POMOC MARKER ---
    const pomocIcon = L.icon({ iconUrl: '/images/pomoc.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] });
    const pomocMarker = L.marker([482, 1352], { icon: pomocIcon });
    const pomocPopup = `<div style=\"position:relative;display:block;background:#ffffff url('https://www.transparenttextures.com/patterns/old-wall.png');background-size:cover;background-blend-mode:multiply;border:2px solid #b0a99f;box-shadow:0 4px 24px rgba(211,184,101,0.2),inset 0 0 40px #ffffff; border-radius:16px;padding:18px 18px 12px 12px;min-width:260px;max-width:340px;font-family:'Open Sans',sans-serif;\">\n    <img src='/images/pomoc.png' alt='' style='width:70px;height:70px;object-fit:contain;margin-bottom:8px;border-radius:50%;box-shadow:0 2px 8px #aaa;background:#ffffff;'>\n    <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.15em;margin:0 0 0.3em 0;color:#211B0D;text-align:left;\">${localizationData.Popup_FirstAid_Title || 'Prva Pomoć'}</h3>\n    <div style='text-align:left;'>${localizationData.Popup_FirstAid_Description || 'Kombi za pružanje prve pomoći u hitnim slučajevima.'}</div>\n    <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">\n        <a href=\"https://www.google.com/maps/search/?api=1&query=44.96698512825069,19.608613296413235\" target=\"_blank\" class=\"popup-gmaps-btn\">${localizationData.Popup_GoogleMaps || 'Otvori u Google mapama'}</a>\n    </div>\n</div>`;
    pomocMarker.bindPopup(pomocPopup);
    pomocMarker.pointType = 'Servisi';
    window.markers.push(pomocMarker);
    pomocMarker.addTo(window.map);
    document.querySelector('.legend-pomoc')?.addEventListener('click', function() {
        pomocMarker.openPopup();
        window.map.setView(pomocMarker.getLatLng(), window.map.getZoom(), { animate: true });
    });

    // --- HRANA MARKER ---
    const hranaIcon = L.icon({ iconUrl: '/images/hrana.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] });
    const hranaMarker = L.marker([568, 1056], { icon: hranaIcon });
    const hranaPopup = `<div style=\"position:relative;display:block;background:#ffffff url('https://www.transparenttextures.com/patterns/old-wall.png');background-size:cover;background-blend-mode:multiply;border:2px solid #b0a99f;box-shadow:0 4px 24px rgba(211,184,101,0.2),inset 0 0 40px #ffffff; border-radius:16px;padding:18px 18px 12px 12px;min-width:260px;max-width:340px;font-family:'Open Sans',sans-serif;\">\n    <img src='/images/hrana.png' alt='' style='width:70px;height:70px;object-fit:contain;margin-bottom:8px;border-radius:50%;box-shadow:0 2px 8px #aaa;background:#ffffff;'>\n    <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.15em;margin:0 0 0.3em 0;color:#211B0D;text-align:left;\">${localizationData.Popup_Food_Title || 'Hrana'}</h3>\n    <div style='text-align:left;'>${localizationData.Popup_Food_Description || 'Mesto sa hranom za učesnike.'}</div>\n    <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">\n        <a href=\"https://www.google.com/maps/search/?api=1&query=44.96676755112274,19.607829282291533\" target=\"_blank\" class=\"popup-gmaps-btn\">${localizationData.Popup_GoogleMaps || 'Otvori u Google mapama'}</a>\n    </div>\n</div>`;
    hranaMarker.bindPopup(hranaPopup);
    hranaMarker.pointType = 'Servisi';
    window.markers.push(hranaMarker);
    hranaMarker.addTo(window.map);
    document.querySelector('.legend-hrana')?.addEventListener('click', function() {
        hranaMarker.openPopup();
        window.map.setView(hranaMarker.getLatLng(), window.map.getZoom(), { animate: true });
    });

    // --- RIMSKI BAZAR MARKER ---
    const bazarIcon = L.icon({ iconUrl: '/images/rimskibazar.png', iconSize: [60, 60], iconAnchor: [30, 60], popupAnchor: [0, -60] });
    const bazarMarker = L.marker([690, 1082], { icon: bazarIcon });
    const bazarPopup = `<div style=\"position:relative;display:block;background:#ffffff url('https://www.transparenttextures.com/patterns/old-wall.png');background-size:cover;background-blend-mode:multiply;border:2px solid #b0a99f;box-shadow:0 4px 24px rgba(211,184,101,0.2),inset 0 0 40px #ffffff; border-radius:16px;padding:18px 18px 12px 12px;min-width:260px;max-width:340px;font-family:'Open Sans',sans-serif;\">\n    <img src='/images/rimskibazar.png' alt='' style='width:70px;height:70px;object-fit:contain;margin-bottom:8px;border-radius:50%;box-shadow:0 2px 8px #aaa;background:#ffffff;'>\n    <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.15em;margin:0 0 0.3em 0;color:#211B0D;text-align:left;\">${localizationData.Popup_RomanBazaar_Title || 'Rimski Bazar'}</h3>\n    <div style='text-align:left;'>${localizationData.Popup_RomanBazaar_Description || 'Rimski bazar oživljava duh carskog Sirmijuma kroz autentične prikaze starih zanata, kostima i mirisa antičkog doba.'}</div>\n    <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">\n        <strong>${localizationData.Popup_Event || 'Dešavanje'}:</strong><br>\n        <span style=\"font-weight:bold;\">${localizationData.Popup_RomanBazaar_Event || 'Prodaja unikatnih ručno rađenih proizvoda'}</span> <span style=\"color:#D3B865;\">${localizationData.Popup_RomanBazaar_EventTime || '(02.08.2025, 10h-19h)'}</span><br>\n    </div>\n    <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">\n        <a href=\"https://www.google.com/maps/search/?api=1&query=44.96775968818096,19.608081420476406\" target=\"_blank\" class=\"popup-gmaps-btn\">${localizationData.Popup_GoogleMaps || 'Otvori u Google mapama'}</a>\n        <a href=\"/POI/Details/16\" class=\"popup-details-link\">${localizationData.Popup_Details || 'Detalji'}</a>\n    </div>\n</div>`;
    bazarMarker.bindPopup(bazarPopup);
    bazarMarker.pointType = 'Dešavanja';
    window.markers.push(bazarMarker);
    bazarMarker.addTo(window.map);
    document.querySelector('.legend-bazar')?.addEventListener('click', function() {
        bazarMarker.openPopup();
        window.map.setView(bazarMarker.getLatLng(), window.map.getZoom(), { animate: true });
    });

    // --- LAMPIONI MARKER ---
    const lampioniIcon = L.icon({ iconUrl: '/images/lampioni.png', iconSize: [60, 60], iconAnchor: [30, 60], popupAnchor: [0, -60] });
    const lampioniMarker = L.marker([490, 112], { icon: lampioniIcon });
    const lampioniPopup = `<div style=\"position:relative;display:block;background:#ffffff url('https://www.transparenttextures.com/patterns/old-wall.png');background-size:cover;background-blend-mode:multiply;border:2px solid #b0a99f;box-shadow:0 4px 24px rgba(211,184,101,0.2),inset 0 0 40px #ffffff; border-radius:16px;padding:18px 18px 12px 12px;min-width:260px;max-width:340px;font-family:'Open Sans',sans-serif;\">\n    <img src='/images/lampioni.png' alt='' style='width:70px;height:70px;object-fit:contain;margin-bottom:8px;border-radius:50%;box-shadow:0 2px 8px #aaa;background:#ffffff;'>\n    <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.15em;margin:0 0 0.3em 0;color:#211B0D;text-align:left;\">${localizationData.Popup_Lampioni_Title || 'Savski kej'}</h3>\n    <div style='text-align:left;'>${localizationData.Popup_Lampioni_Description || 'Nasip u Sremskoj Mitrovici, poznat i kao Savski kej, predstavlja ključnu odbrambenu strukturu uz reku Savu koja štiti grad od poplava.'}</div>\n    <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">\n        <strong>${localizationData.Popup_Event || 'Dešavanje'}:</strong><br>\n        <span style=\"font-weight:bold;\">${localizationData.Popup_Lampioni_Event || 'Program zatvaranja Festivala Lux Aurelius'}</span> <span style=\"color:#D3B865;\">${localizationData.Popup_Lampioni_EventTime || '(21:30)'}</span><br>\n        <span>${localizationData.Popup_Lampioni_EventDesc || 'Na završnici festivala, simbolično puštamo lampione niz reku Savu'}</span>\n    </div>\n    <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">\n        <a href=\"https://www.google.com/maps/search/?api=1&query=44.96847785895552,19.60156776496794\" target=\"_blank\" class=\"popup-gmaps-btn\">${localizationData.Popup_GoogleMaps || 'Otvori u Google mapama'}</a>\n        <a href=\"/POI/Details/15\" class=\"popup-details-link\">${localizationData.Popup_Details || 'Detalji'}</a>\n    </div>\n</div>`;
    lampioniMarker.bindPopup(lampioniPopup);
    lampioniMarker.pointType = 'Dešavanja';
    window.markers.push(lampioniMarker);
    lampioniMarker.addTo(window.map);
    document.querySelector('.legend-lampioni')?.addEventListener('click', function() {
        lampioniMarker.openPopup();
        window.map.setView(lampioniMarker.getLatLng(), window.map.getZoom(), { animate: true });
    });

    // --- KEDAR BAR MARKER ---
    const kedarbarIcon = L.icon({ iconUrl: '/images/kedarbar.png', iconSize: [50, 50], iconAnchor: [25, 50], popupAnchor: [0, -50] });
    const kedarbarMarker = L.marker([630, 100], { icon: kedarbarIcon });
    const kedarbarPopup = `<div style=\"position:relative;display:block;background:#ffffff url('https://www.transparenttextures.com/patterns/old-wall.png');background-size:cover;background-blend-mode:multiply;border:2px solid #b0a99f;box-shadow:0 4px 24px rgba(211,184,101,0.2),inset 0 0 40px #ffffff; border-radius:16px;padding:18px 18px 12px 12px;min-width:260px;max-width:340px;font-family:'Open Sans',sans-serif;\">\n    <img src='/images/kedarbar.png' alt='' style='width:70px;height:70px;object-fit:contain;margin-bottom:8px;border-radius:50%;box-shadow:0 2px 8px #aaa;background:#ffffff;'>\n    <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.15em;margin:0 0 0.3em 0;color:#211B0D;text-align:left;\">${localizationData.Popup_KedarBar_Title || 'Kedar Bar'}</h3>\n    <div style='text-align:left;'>${localizationData.Popup_KedarBar_Description || 'Ušuškani kafić koji se nalazi na obroncima starorimskih iskopina, na Žitnom trgu u Sremskoj Mitrovici'}</div>\n    <div style=\"font-family:'Open Sans',sans-serif;font-size:1em;margin-top:0.5em;\">\n        <strong>${localizationData.Popup_Event || 'Dešavanje'}:</strong><br>\n        <span style=\"font-weight:bold;\">${localizationData.Popup_KedarBar_Event || 'Rimski pub kviz'}</span> <span style=\"color:#D3B865;\">${localizationData.Popup_KedarBar_EventTime || '(01.08, 21h)'}</span><br>\n    </div>\n    <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">\n        <a href=\"https://www.google.com/maps/search/?api=1&query=44.96752191535946,19.60316377179182\" target=\"_blank\" class=\"popup-gmaps-btn\">${localizationData.Popup_GoogleMaps || 'Otvori u Google mapama'}</a>\n    </div>\n</div>`;
    kedarbarMarker.bindPopup(kedarbarPopup);
    kedarbarMarker.pointType = 'Dešavanja';
    window.markers.push(kedarbarMarker);
    kedarbarMarker.addTo(window.map);
    document.querySelector('.legend-kedarbar')?.addEventListener('click', function() {
        kedarbarMarker.openPopup();
        window.map.setView(kedarbarMarker.getLatLng(), window.map.getZoom(), { animate: true });
    });

    // --- PARKING MARKERS ---
    const parkingIcon = L.icon({ iconUrl: '/images/parking.png', iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40] });
    
    // Definišemo parking pozicije sa njihovim Google Maps koordinatama
    const parkingData = [
        { pos: [680, 1600], lat: 44.96733935328512, lng: 19.60963441308127 },
        { pos: [548, 1245], lat: 44.96696, lng: 19.60830 }
    ];
    
    window.parkingMarkers = parkingData.map((data, index) => {
        const marker = L.marker(data.pos, { icon: parkingIcon });
        
        // Kreiraj popup sa specifičnim Google Maps linkom za svaki marker
        const parkingPopup = `<div style=\"position:relative;display:block;background:#ffffff url('https://www.transparenttextures.com/patterns/old-wall.png');background-size:cover;background-blend-mode:multiply;border:2px solid #b0a99f;box-shadow:0 4px 24px rgba(211,184,101,0.2),inset 0 0 40px #ffffff; border-radius:16px;padding:18px 18px 12px 12px;min-width:260px;max-width:340px;font-family:'Open Sans',sans-serif;\">\n    <img src='/images/parking.png' alt='' style='width:70px;height:70px;object-fit:contain;margin-bottom:8px;border-radius:50%;box-shadow:0 2px 8px #aaa;background:#ffffff;'>\n    <h3 style=\"font-family:'Marcellus',serif;font-weight:400;text-transform:uppercase;font-size:1.15em;margin:0 0 0.3em 0;color:#211B0D;text-align:left;\">${localizationData.Popup_Parking_Title || 'Parking'} ${index + 1}</h3>\n    <div style='text-align:left;'>${localizationData.Popup_Parking_Description || 'Javni parking za učesnike i posetioce festivala'}</div>\n    <div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:0.7em;\">\n        <a href=\"https://www.google.com/maps/search/?api=1&query=${data.lat},${data.lng}\" target=\"_blank\" class=\"popup-gmaps-btn\">${localizationData.Popup_GoogleMaps || 'Otvori u Google mapama'}</a>\n    </div>\n</div>`;
        
        marker.bindPopup(parkingPopup);
        marker.pointType = 'Servisi';
        window.markers.push(marker);
        marker.addTo(window.map);
        return marker;
    });
    document.querySelector('.legend-parking')?.addEventListener('click', function() {
        if(window.parkingMarkers[0]) {
            window.parkingMarkers[0].openPopup();
            window.map.setView(window.parkingMarkers[0].getLatLng(), window.map.getZoom(), { animate: true });
        }
    });

    // Initialize with landmarks filter (default) - called after all markers are created
    // Set active class on Landmarks button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.type === 'Landmarks') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    filterPoints('Landmarks');
}); 