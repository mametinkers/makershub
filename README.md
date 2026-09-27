# Makershub

A searchable directory of makerspaces, machine shops, 3D printing and fabrication resources at McGill University. Maintained by The Tinkers (MAME Manufacturing Committee).

**What's in this folder**

| File | What it is | Do you edit it? |
|---|---|---|
| `index.html` | The website (design + search) | Rarely |
| `resources.js` | The list of spaces — **all the content** | Yes, this is the one |
| `robots.txt`, `sitemap.xml` | Help Google find the site | Once (step 4) |
| `README.md` | This guide | — |

To preview the site on your computer, just double-click `index.html`.

---

## Publish it on the internet (about 20 minutes, free)

### 1. Make a GitHub account
Go to <https://github.com/signup>. Tip: make a shared account for the committee (e.g. `tinkers-mame`) so the site doesn't disappear when someone graduates. Your site address will be `https://ACCOUNT-NAME.github.io/makershub/`.

### 2. Create a repository (a project folder on GitHub)
1. Click the **+** in the top-right → **New repository**.
2. Name it exactly `makershub`.
3. Choose **Public**. Click **Create repository**.

### 3. Upload the files
1. On the new repository page, click **uploading an existing file**.
2. Drag in `index.html`, `resources.js`, `robots.txt`, `sitemap.xml` and `README.md`.
3. Click **Commit changes**.

### 4. Turn the site on
1. In the repository, go to **Settings** → **Pages** (left menu).
2. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
3. Wait 1–2 minutes and refresh. The page shows your live link.

Then open `robots.txt` and `sitemap.xml` on GitHub (click the file → pencil icon ✏️), replace `YOUR-USERNAME` with your account name, and commit.

### 5. Create the "Suggest a space" Google Form
1. Go to <https://forms.google.com> → blank form, titled "Makershub — Suggest a space or correction".
2. Suggested questions: Name of the space · Building & room · Equipment · Who can use it · How to get access / training · Cost · Hours · Contact · Website · Is this a new space or a correction? · Your email (optional).
3. Click **Send** → link icon → tick **Shorten URL** → **Copy**.
4. In `resources.js` on GitHub (✏️), paste it into `suggestFormUrl: "..."` and commit.
5. In the form's **Responses** tab, click **Link to Sheets** so submissions collect in a spreadsheet the committee can review.

### 6. Get it on Google
Google usually finds new sites on its own within a few weeks. To speed it up:
1. Go to <https://search.google.com/search-console> and sign in.
2. Add a property → **URL prefix** → paste your site link.
3. Verify with the **HTML tag** method: copy the `<meta name="google-site-verification" ...>` line, paste it into `index.html` on GitHub right below the `<meta charset="utf-8">` line, commit, wait a minute, then click **Verify**.
4. In the left menu, **Sitemaps** → enter `sitemap.xml` → **Submit**.
5. **URL inspection** → paste your link → **Request indexing**.

What helps it rank: links from other pages. Ask MAME, the EUS, design teams, the library, and the professor's course pages to link to it, and share it on The Tinkers' socials.

---

## Adding or editing a space

1. On GitHub, open `resources.js` → click ✏️.
2. Scroll to the TEMPLATE at the bottom, copy it, and paste it just above the line `// ▲ end of list`.
3. Fill in the fields. Leave `""` for anything you don't know — the site shows "Not yet confirmed".
4. Click **Commit changes**. The live site updates in about a minute.

If the site goes blank after an edit, a comma or quote is usually missing. Open the file's **History**, compare with the previous version, and fix it (or revert).

**Things to check with each space:** location & room · equipment list · who can use it · training required · cost · hours · contact person · booking link.

---

## Optional later upgrades
- **Custom address** (e.g. `makershub.ca`, ~$15/yr): buy a domain, then Settings → Pages → Custom domain.
- **Official McGill link**: once the content is verified, ask the professor or Faculty to link to it from a mcgill.ca page — the single biggest boost for Google.
