# Development Information for Kultur- und Heimatverein Gondorf

This document provides project-specific information for developers working on this Jekyll-based website.

## 0. Website Purpose and Identity

The website is specifically developed for the **Kultur- und Heimatverein Gondorf**. It should convey a professional yet
regional and down-to-earth impression.

### Key Themes and Visual Identity

- **Themes**: Weinbau, Mosel, Natur, Schiefer, Sandstein, historische Gebäude.
- **Design Principles**:
    - Warm natural colors (warme Naturfarben).
    - Generous white space (großzügige Weißräume).
    - High-quality typography.
    - Quiet, friendly, and high-quality aesthetic.
    - Timeless, down-to-earth, and regional.
- **Goal**: A dedicated "Vereinswebsite" feel.

### Target Audience

The website is designed for:

- Association members (Vereinsmitglieder).
- Visitors and tourists.
- Local citizens (Bürger).
- Older users (requiring easy usability/barrierearm).
- History enthusiasts (historisch Interessierte).

## 1. Build and Configuration Instructions

The project uses Jekyll 4.4.1.

### Prerequisites

- **Ruby**: Version 2.7.0 or higher is required (Jekyll 4.4.0+ dependency).
- **Bundler**: To manage Ruby gems.

### Local Development

1. Install dependencies:
   ```bash
   bundle install
   ```
2. Start the development server:
   ```bash
   bundle exec jekyll serve
   ```
   The site will be available at `http://localhost:4000`.

### Production Build

To generate the static site in the `_site/` directory:

```bash
bundle exec jekyll build
```

## 2. Testing Information

Since this is a static site, testing primarily involves verifying the generated HTML and assets in the `_site/`
directory.

### Running Tests

You can use a simple script (e.g., in Python or Ruby) to verify that the build produced the expected files and that
there are no broken links (using external tools like `html-proofer`).

#### Example: Python Verification Script

A simple test to ensure critical pages are generated:

```python
import os
import unittest

class TestJekyllSite(unittest.TestCase):
    def test_site_built(self):
        self.assertTrue(os.path.isdir('_site'), "_site directory does not exist.")

    def test_index_exists(self):
        self.assertTrue(os.path.exists('_site/index.html'), "index.html not found.")

    def test_critical_pages(self):
        pages = [
            '_site/impressum/index.html',
            '_site/kontakt/index.html',
            '_site/datenschutz/index.html'
        ]
        for page in pages:
            with self.subTest(page=page):
                self.assertTrue(os.path.exists(page), f"{page} not found.")

if __name__ == '__main__':
    unittest.main()
```

### Guidelines for New Tests

- **Content Validation**: Use regex or HTML parsers to check for mandatory SEO tags or specific text snippets in the
  generated HTML.
- **Link Checking**: It is highly recommended to run `html-proofer` on the `_site` directory as part of the CI/CD
  pipeline.

## 3. Additional Development Information

### Code Style

- **HTML/Liquid**: Follow Jekyll's default patterns. Use `_includes` for reusable components and `_layouts` for page
  structures.
- **CSS**: The project uses **mobile-first Vanilla CSS** located in `assets/css/main.css`. Avoid adding CSS frameworks
  unless necessary; stick to the existing custom styles.
- **Data-Driven**: Content like opening hours, contact details, and navigation is managed in `_data/*.yml`. Always
  update these files instead of hardcoding values in templates.

### Collections

- **Events**: Managed via the `termine` collection in `_termine/`. Each file should have `title`, `date`, and
  `layout: event` (defaulted in `_config.yml`).

### Debugging

- Use `{{ site | inspect }}` or `{{ page | inspect }}` in Liquid templates to debug variables during development.
- Check `CONTENT_REVIEW.md` before finalizing changes to ensure all quality standards are met.
