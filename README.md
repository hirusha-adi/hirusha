<h2 align="center">
Personal Website | Hirusha Adikari
</h2><br>

<pre align="center">
 Built with 🦖<a href="https://docusaurus.io/">Docusaurus</a> 
</pre>

<p align="center">
<br>
<a href="https://hirusha.xyz">🖥 Online Preview</a>
<br><br> 
<a href="https://vercel.com/new/clone?repository-url=https://github.com/hirusha-adi/hirusha/tree/main&project-name=blog&repo-name=blog" rel="nofollow"><img src="https://vercel.com/button"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/hirusha-adi/hirusha" rel="nofollow"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
<a href="https://stackblitz.com/github/hirusha-adi/hirusha" rel="nofollow"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"></a>
</p>

## 👋 Introduction

This website is powered by [Docusaurus 3](https://docusaurus.io/), a modern static website generator designed for creating easy-to-navigate documentation sites.

This is a fork of [kuizuo/blog](https://github.com/kuizuo/blog), made by 愧怍

## ✨ Improved Features

- ✍️ **Markdown** - Easy to write
- 🎨 **Beautiful** - Neat and beautiful
- 🖥️ **PWA** - Supports PWA, installable, available offline
- 💯 **SEO** - Search engine optimization, easy to index
- 📊 **Google Analytics** - Support Google Analytics
- 🔎 **Full text search** - Support Local Search
- 🗃️ **Blog View** - Different blog views, list, grid, card
- 🌈 **Resource Navigation** - Collect and share useful and interesting resources
- 📦 **Project Display** - Display your projects, can be used in your portfolio

Changes made by 愧怍 (kuizo) can be found [here](https://kuizuo.cn/docs/docusaurus-guides)

### Changes that I made:

- Switched from alglolia search to [`docusaurus-plugin-search-local`](https://github.com/gabrielcsapo/docusaurus-plugin-search-local)
- removed Chinese, the site is English only.
- changed `/friends` to `/contributions`
- changed `/resources` to `/recommended-tools`, later, removed it completely.
- and, changed the structure of `/docs/` and `/blog/` with `sidebars.ts` to suite my personal needs

## 📥 Installation

Before you get started with our website, follow these installation steps to ensure a smooth setup.

**Step 1: Clear Existing Cache**

```bash
pnpm cache clean --force
```

This command helps ensure that you have a clean slate before installing the required dependencies.

**Step 2: Install Dependencies**

```bash
pnpm install
```

This command installs all the necessary packages and dependencies for our website.

## 👩‍💻 Local Development

To work on our website locally and see your changes in real-time, follow these steps:

```bash
pnpm start
```

This command starts a local development server and automatically opens your default web browser. Most changes are reflected live without the need to restart the server. It's an efficient way to test and make improvements to our website.

## 📦 Deployment

To deploy our website, follow these steps:

**Step 1: Open Command Prompt**

Open your command prompt or terminal.

**Step 2: Set Git User**

Set your Git user credentials using the following command:

```bash
set GIT_USER=hirusha-adi
```

Use the command below if you are using linux:

```bash
export GIT_USER="hirusha-adi"
```

Replace `hirusha-adi` with your actual Git username.

**Step 3: Deploy to GitHub Pages**

Execute the following command to build the website and push it to the `gh-pages` branch:

```bash
npx docusaurus deploy
```

<details>
<summary>pnpm deploy - gave an error</summary>

```bash
>pnpm deploy
 ERR_PNPM_CANNOT_DEPLOY  A deploy is only possible from inside a workspace
```

</details>

If you are using GitHub Pages for hosting, this command is a convenient way to make your website accessible to the public.

By following these steps, you can easily set up, develop, and deploy our website using Docusaurus 3 & pnpm.

## Errors

1. `This diff contains a change in line endings from 'LF' to 'CRLF'.`

    simply run:

    ```bash
    git config core.autocrlf input
    ```

