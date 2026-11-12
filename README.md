# donniezvadah.github.io

Personal website of Donald Zvada, built with [Hugo](https://gohugo.io) and served by GitHub Pages from `docs/`.

## Layout

- `content/` holds one HTML file per page.
- `layouts/` holds the page shell, header and footer.
- `static/css/styles.css` and `static/js/main.js` hold the styles and the script.
- `static/media/photos/` holds the hero and gallery photos.

## Preview and publish

```bash
hugo server --port 8080
```

```bash
hugo --minify --cleanDestinationDir && rsync -a --delete public/ docs/
```

Commit and push `docs/` to publish.
