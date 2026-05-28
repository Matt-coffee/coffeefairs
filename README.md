# CoffeeFairs.com — Site Files

## What's included

| File | Page |
|------|------|
| `index.html` | Homepage |
| `saudi-arabia.html` | Saudi Arabia market & C&C Expo |
| `singapore.html` | Singapore market & event |
| `japan.html` | Japan market & event |
| `about.html` | About the platform |
| `contact.html` | General contact form |
| `privacy.html` | GDPR privacy policy |
| `style.css` | Shared stylesheet (all pages link to this) |
| `images/` | Folder for your photos (see below) |

---

## Step 1 — Add your photos

Place photos in the `images/` folder with these exact filenames:

| Filename | Used on |
|----------|---------|
| `hero.jpg` | Homepage hero banner |
| `saudi-arabia.jpg` | Saudi Arabia card + page hero |
| `singapore.jpg` | Singapore card + page hero |
| `japan.jpg` | Japan card + page hero |

**Where to find free professional photos:**
- Go to [unsplash.com](https://unsplash.com)
- Search: "coffee exhibition", "trade fair crowd", "Riyadh skyline", "Singapore skyline"
- Download the largest size, rename the file, drop it in the `images/` folder

---

## Step 2 — Set up Formspree (contact forms)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — Formspree will give you an ID like `xpwzabcd`
3. Open every HTML file and find this line (appears in contact forms):
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree ID — e.g. `xpwzabcd`
5. Files to update: `saudi-arabia.html`, `singapore.html`, `japan.html`, `contact.html`

The free Formspree plan allows 50 submissions/month — more than enough to start.

---

## Step 3 — Deploy to Netlify (free hosting)

Netlify is the easiest option and is completely free for a static site.

1. Go to [netlify.com](https://netlify.com) and create a free account
2. On the dashboard, click **"Add new site" → "Deploy manually"**
3. Drag and drop your entire `coffeefairs/` folder onto the Netlify upload area
4. Netlify gives you a random URL like `amazing-pasteur-12345.netlify.app` — the site is live
5. To use coffeefairs.com as the domain, continue to Step 4

**Alternative: GitHub Pages**
If you prefer GitHub, push the files to a GitHub repository and enable Pages under Settings → Pages → Deploy from branch.

---

## Step 4 — Connect coffeefairs.com domain

Your domain is registered through Webnode. To point it to Netlify:

1. In **Netlify**: go to Site Settings → Domain Management → Add custom domain → type `coffeefairs.com`
2. Netlify will show you DNS records to add (typically two: an A record and a CNAME)
3. In **Webnode**: go to Settings → Domains → DNS settings for coffeefairs.com
4. Add the DNS records Netlify provided
5. DNS changes take 15 minutes to 48 hours to propagate

**Note:** Webnode controls the domain. You are only changing where the domain points — you keep the domain registered with Webnode. This is allowed on the Mini plan.

---

## Step 5 — Update content as needed

- **Add a new country:** Duplicate `singapore.html`, rename it, update all the text
- **Update event dates:** Edit the relevant HTML file and change the dates in the event box
- **Add your name to About:** Edit `about.html` if/when you want to add personal branding

---

## What you do NOT need

- No cookie banner (no cookies are set by default)
- No server or backend
- No CMS login
- No monthly subscription beyond what you already pay for the Webnode domain

---

## Questions?

Open the relevant HTML file in any text editor (TextEdit on Mac, Notepad on Windows)
and make changes directly. The structure is clearly commented throughout.
