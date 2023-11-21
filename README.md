# Welcome to our Docusaurus 2 Website

Our website is powered by [Docusaurus 2](https://docusaurus.io/), a modern static website generator designed for creating easy-to-navigate documentation sites.

## Installation

Before you get started with our website, follow these installation steps to ensure a smooth setup.

**Step 1: Clear Existing Cache**

```bash
npm cache clean --force
```

This command helps ensure that you have a clean slate before installing the required dependencies.

**Step 2: Install Dependencies**

```bash
npm install --force
```

This command installs all the necessary packages and dependencies for our website. 

## Local Development

To work on our website locally and see your changes in real-time, follow these steps:

```bash
npm run start
```

This command starts a local development server and automatically opens your default web browser. Most changes are reflected live without the need to restart the server. It's an efficient way to test and make improvements to our website.

## Deployment

To deploy our website, follow these steps:

**Step 1: Open Command Prompt**

Open your command prompt or terminal.

**Step 2: Set Git User**

Set your Git user credentials using the following command:

```bash
set GIT_USER=hirusha-adi
```

Replace `hirusha-adi` with your actual Git username.

**Step 3: Deploy to GitHub Pages**

Execute the following command to build the website and push it to the `gh-pages` branch:

```bash
npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to make your website accessible to the public.

By following these steps, you can easily set up, develop, and deploy our website using Docusaurus 2.
