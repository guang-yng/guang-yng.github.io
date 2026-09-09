# Guang Yang · Personal website

A single-page academic website built from scratch with HTML, CSS, and JavaScript.
No theme, frontend framework, package manager, or build dependencies.

## Local preview

Run from the project directory:

```sh
python3 -m http.server 1313 --bind 127.0.0.1
```

Open <http://localhost:1313/> and refresh after editing files.
You can also open `index.html` directly; all local assets use relative paths.

## Files

- `index.html`: Biography, profile links, news, and publications.
- `styles.css`: Typography, colors, and responsive layout.
- `script.js`: News expansion, active navigation, and subtle entrance animations.
- `assets/`: Portrait, locally hosted fonts, and font licenses.
- `.github/workflows/publish.yaml`: GitHub Pages deployment workflow.

## Editing content

**News:** Add a dated `<li>` to `#news-list`, with the newest entries first.
The first four entries appear by default; Show more reveals older news.
All entries remain readable when JavaScript is disabled.

**Publications:** Add an `<article>` to `#publication` with the title, authors,
venue, year, and resource links. Use `<strong>` for Guang Yang.
Representative work appears first. Preserve existing article IDs so links from
news entries continue to work.

**Typography and colors:** Newsreader is used for the name and section headings;
Source Sans 3 is used for body text. Both fonts are hosted locally, with licenses
in `assets/fonts/*-license.txt`. Colors and content width are defined in the
`:root` block of `styles.css`.

**Motion:** Content fades in and moves up slightly when it first enters the
viewport. Animations respect the system's reduced-motion preference.

## Deployment

Set the GitHub Pages source to **GitHub Actions**. Push to `main` or manually run
**Deploy website to GitHub Pages**. The workflow publishes only HTML, CSS,
JavaScript, and assets. No Hugo, Go, Node.js, or dependency installation is needed.
Local previews do not trigger deployment.

The redesigned website starts with a fresh repository history. The previous
website and its history are preserved in the private repository
`guang-yng/guang-yng.github.io-legacy`.

## License

The website code and technical documentation are licensed under the MIT License,
copyright (c) 2026 Guang Yang. See [LICENSE.md](LICENSE.md) for the full terms and
scope. The portrait and personal content, including biography, news, and
publication content, are excluded from this license. Fonts retain their own
licenses in `assets/fonts/`.
