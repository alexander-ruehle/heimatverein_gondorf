# Kultur- und Heimatverein Gondorf

Eigenständige, barrierearme Jekyll-Website für den Kultur- und Heimatverein Gondorf. Die Gestaltung verwendet
ausschließlich eigenes Vanilla CSS.

## Entwicklung

Voraussetzungen: Ruby, Bundler und Jekyll 4.4.1.

```bash
bundle install
bundle exec jekyll serve
```

Der lokale Server ist anschließend unter `http://localhost:4000` erreichbar. Für einen Produktions-Build:

```bash
bundle exec jekyll build
```

## Asset-Optimierung

Das Projekt verwendet `jekyll-minibundle` für das Fingerprinting (Cache-Busting) von Assets.

**Hinweis:** `jekyll-minibundle` benötigt Ruby >= 2.7.0.

## Struktur und Pflege

- `_layouts/` enthält die Grund-, Start-, Seiten- und Terminlayouts.
- `_includes/` enthält Kopfbereich, Navigation, Footer, Breadcrumbs und Terminliste.
- `_data/site.yml` ist die zentrale Quelle für Kontaktdaten und Öffnungszeiten.
- `_data/navigation.yml` und `_data/footer.yml` steuern die Navigation.
- `_termine/` enthält zukünftige Veranstaltungen mit Front Matter `title`, `date` und optional `location`.
- `assets/css/main.css` enthält das selbst geschriebene, mobile-first Vanilla CSS.
- `assets/images/` enthält nur eigene oder freigegebene Bilder. Vorhandene Bilder erst nach Rechteprüfung austauschen
  und mit sinnvollem Alt-Text verwenden.

Termine werden in `_termine/` als Markdown-Datei angelegt. Für vergangene Termine kann später ein Archiv ergänzt werden;
die Sortierung der aktuellen Liste erfolgt über das Veranstaltungsdatum.

## Deployment

Der Build erzeugt `_site/`. Dieser Ordner kann auf einen beliebigen statischen Webserver oder in einen Jekyll-fähigen
Deployment-Prozess übertragen werden. Vor dem Livegang `CONTENT_REVIEW.md` vollständig abarbeiten.
