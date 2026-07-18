# Ashkan Allhaveisi — Portfolio

A production-ready, responsive portfolio made with semantic HTML, CSS, and vanilla JavaScript. It opens directly without a build step.

## Run locally

Open `index.html` in a modern browser. The Google-hosted Manrope font requires an internet connection; the site falls back to Arial when offline.

## Add the portrait

Save Ashkan's portrait as `assets/ashkan-portrait.png`. Use a high-resolution vertical PNG with a transparent or dark background. The website automatically hides the designed placeholder when this image loads successfully.

## Replace project images

Add six images to `assets/` using these filenames:

- `project-01.jpg`
- `project-02.jpg`
- `project-03.jpg`
- `project-04.jpg`
- `project-05.jpg`
- `project-06.jpg`

Recommended dimensions are 1600 × 1200 pixels or larger. Missing files are hidden cleanly and reveal the built-in art-directed color compositions instead of broken-image icons.

## Edit content

Open `js/script.js` and edit the `portfolioData` object at the beginning of the file. It controls personal information, roles, statistics, projects, services, skills, software, experience, testimonials, work packages, and social links.

To add a project, copy one object in `projects`, update its content and image filename, and save the corresponding image in `assets/`. Services and skills work the same way: add, remove, or reorder entries in their arrays.

## Connect the contact form

The included form validates in the browser and shows an honest local success message, but it does not transmit data without a backend.

- Formspree: create a form endpoint, add its URL as the form `action`, set `method="POST"`, and replace the demonstration submit handler with a `fetch()` request.
- EmailJS: add the EmailJS SDK, initialize it with your public key, and call `emailjs.sendForm()` after successful validation.
- Custom API: post `new FormData(form)` or JSON to your HTTPS endpoint inside the submit handler.

Never place private API keys in front-end JavaScript.

## Publish

- GitHub Pages: push the folder to a repository, then enable Pages for the branch containing `index.html`.
- Netlify: drag the portfolio folder into Netlify Drop or connect its Git repository. No build command is required.
- Vercel: import the repository as a static project. No framework preset or build command is required.

The supplied reference is saved as `assets/reference.jpg` for visual comparison only. It is not loaded into the website or used as a flattened background.

## Certificates & Achievements

All original certificate files are stored unchanged in `assets/certificates/`. The gallery supports PDF, PNG, JPG, JPEG, and WEBP files.

Certificate titles, issuers, dates, categories, file types, and paths are controlled by the `certificates` array inside `portfolioData` at the beginning of `js/script.js`.

### Add a PDF certificate

1. Copy the original PDF into `assets/certificates/`.
2. Add a new object to `portfolioData.certificates` with a unique `id`, confirmed metadata, `type: "pdf"`, and its relative file path.
3. Keep unknown issuer and date values as empty strings. Use `Professional Certificate` and the `Other` category when the title or category cannot be confirmed.

PDF.js renders only the first page as a thumbnail when the card approaches the viewport. The complete original PDF is loaded into the modal only after the certificate is opened. If PDF.js or embedded PDF viewing is unavailable, the interface preserves Open Original and Download links.

### Add an image certificate

1. Copy the original PNG, JPG, JPEG, or WEBP file into `assets/certificates/` without resizing or recompressing it.
2. Add a certificate object with `type: "image"` and the matching relative path.

Image previews use `object-fit: contain`, so certificate edges, signatures, stamps, and text are never intentionally cropped.

### Replace or remove a certificate

- To replace a file, update the corresponding `file` path in the certificate object.
- To change its label or filter, edit `title`, `issuer`, `date`, or `category`.
- To remove a certificate, delete its object from the array and remove its original file from `assets/certificates/` if it is no longer needed.

The certificate count and filter results update automatically from the array.
