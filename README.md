# KinoPoisk DL

Aplikacja została opracowana w oparciu o **React.js** z wykorzystaniem:
- **Redux Toolkit** do zarządzania stanem aplikacji,
- **React Router** do nawigacji,
- **Tailwind CSS** do stylizacji interfejsu aplikacji.

Dodatkowo system wykorzystuje zewnętrzne API: **TMDB** oraz **YouTube**.

---

## Dokumentacja instalacyjna

Aby uruchomić aplikację lokalnie, należy przygotować środowisko deweloperskie oraz zainstalować wszystkie wymagane zależności.

### Wymagania systemowe

Do poprawnego działania aplikacji potrzebne jest:
- **Node.js** w wersji **18** lub nowszej
- **npm** jako menedżer pakietów
- Przeglądarka obsługująca **HTML5** i **CSS3**
- Stabilne połączenie z Internetem umożliwiające dostęp do API **TMDB** i **YouTube**

---

### Pobranie projektu

Projekt należy pobrać z repozytorium GitHub używając polecenia:

    git clone https://github.com/davidlukashevich/kinopoiskDL.git

Po pobraniu należy przejść do katalogu projektu:

    cd kinopoiskDL

---

### Instalacja zależności

Wszystkie zależności projektu są instalowane przy użyciu menedżera pakietów npm:

    npm install

To polecenie pobiera niezbędne biblioteki do uruchomienia aplikacji, takie jak **React**, **Redux Toolkit**, **React Router** oraz **Tailwind CSS**.  
Proces instalacji może potrwać kilka minut w zależności od połączenia internetowego.

---

### Konfiguracja pliku środowiskowego

Aplikacja wykorzystuje zewnętrzne API, takie jak **TMDB** i **YouTube**.  
Aby aplikacja działała poprawnie, należy utworzyć plik `.env` w głównym katalogu projektu i uzupełnić go kluczami API:

    VITE_TMDB_API_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWU1ZGNlYzVlMTI2YTFmNjM5ODU4ODMzNWRmYTMxMyIsIm5iZiI6MTc2Njc1NzUwNS41ODMwMDAyLCJzdWIiOiI2OTRlOTQ4MWQzMmE2MWEwYjA4MTFkNDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YYR1HILADosHVHFwa3mkBrSX6RVwy10nz0WFIYxlWU8
    VITE_TMDB_API_URL=https://api.themoviedb.org/3
    VITE_YOUTUBE_API_KEY=AIzaSyDVcJvuaSc0j2lhzh9uBUXO1NOM_w0zATk
    VITE_YOUTUBE_API_URL=https://www.googleapis.com/youtube/v3

> W przypadku braku kluczy API, funkcje takie jak wyświetlanie zwiastunów czy wyszukiwanie filmów nie będą działać.

---

### Uruchomienie aplikacji

#### Tryb deweloperski

Uruchomienie aplikacji w trybie deweloperskim jest możliwe za pomocą polecenia:

    npm run dev

Po kilku sekundach aplikacja zostanie uruchomiona pod adresem:

    http://localhost:5173

#### Wersja produkcyjna

Uruchomienie aplikacji w wersji produkcyjnej odbywa się przy użyciu poleceń:

    npm run build
    npm run preview

Po kilku sekundach aplikacja zostanie uruchomiona pod adresem:

    http://localhost:4173

Wszystkie zoptymalizowane pliki zostaną zapisane w katalogu:

    dist

---

## Wdrożenie

Aplikacja jest wdrożona i dostępna na platformie hostingowej **Vercel** pod adresem:

https://kinopoisk-gw8prs784-davidlukashevichs-projects.vercel.app