# 🚀 Template Repo

A ready-to-use project starter template designed for rapid development and clean architecture.  
Preconfigured with **Webpack**, **ESLint**, **Prettier**, **Husky**, **lint-staged**, and more to speed up production.

Easily clone, fork, or generate a new repository using this template to kickstart your own project.

---

## 📦 Getting Started

**1. Create a New Repository From This Template**

- Go to the template repo.
- Click **“Use this template” → “Create a new repository”**.
- Choose a name for your new project.

**2. Clone Your New Repository**

```sh
git clone https://github.com/YOUR_USERNAME/YOUR_NEW_REPO.git
cd YOUR_NEW_REPO
```

**3. Install Dependencies**

- Make sure you have Node.js (>=18) installed.
- Install all required npm packages:

```sh
npm install
```

**4. Update Project Variables**
Update the following in `package.json` to reflect your new repo:

- `"name"` → project name (no spaces, lowercase, hyphens allowed)
- `"description"` → short description of your project
- `"author"` → your name or GitHub handle
- `"repository.url"` → URL of your new GitHub repo
- `"bugs.url"` → https://github.com/YOUR_USERNAME/YOUR_NEW_REPO/issues
- `"homepage"` → https://github.com/YOUR_USERNAME/YOUR_NEW_REPO#readme

**Example:**

```json
{
  "name": "my-new-project",
  "description": "An awesome project built with my starter template",
  "author": "Your Name",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/YOUR_USERNAME/my-new-project.git"
  },
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/my-new-project/issues"
  },
  "homepage": "https://github.com/YOUR_USERNAME/my-new-project#readme"
}
```

---

## ⚡ Available Scripts

| Script                    | Description                                          |
| ------------------------- | ---------------------------------------------------- |
| `npm run dev`             | Runs the development server on http://localhost:8080 |
| `npm run build`           | Builds the app into the `/dist` folder               |
| `npm run build-final`     | Builds the app for production with optimizations     |
| `npm run clean`           | Removes the `/dist` folder                           |
| `npm run prettify`        | Formats code with Prettier                           |
| `npm run prettify-check`  | Checks code formatting                               |
| `npm run add-pre-commits` | Initializes Husky and adds pre-commit hooks          |
| `npm run deploy`          | Deploys `/dist` to the `gh-pages` branch             |

---

## 🛠 Tech Stack

- **Webpack 5** (bundling)
- **ESLint + Prettier** (linting & formatting)
- **Husky + lint-staged** (git hooks & staged file formatting)
- **Date-fns** (date utilities)
- **GitHub Pages** (deployment ready)

---

## ✅ Next Steps

- Update project metadata in `package.json` ✅
- Start coding in `src/` ✅
- Commit and push changes ✅
- Deploy with `npm run deploy` ✅

---

## 📁 File Structure

```
templaterepo/
├── src/                # Source files (JS, CSS, assets)
│   ├── index.js
│   └── styles.css
├── dist/               # Production build output
├── public/             # Static files (e.g., index.html)
├── webpack.config.js   # Webpack configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

---

## 💡 Tips

- Use `npx webpack --mode development` for development builds.
- Use `npx webpack --mode production` for optimized production builds.
- Customize the template by editing files in the `src/` and `public/` folders.

---

## 📜 License

ISC

---

## 🐙 Husky & lint-staged Setup

```sh
npm install --save-dev husky lint-staged
npx husky init
node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"
```

## 🎉 You are good to go!

Start building your awesome project!
