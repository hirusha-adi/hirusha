---
title: Setting up and Running Prolog
sidebar_label: Setup Prolog
slug: initial_setup
---

## Install SWI-Prolog

### Ubuntu

Run the command below to install prolog: 

```bash
sudo apt install swi-prolog
```

Run the command below to open the interactive console in your current working directory.

```bash
prolog
```

Inside the prolog application, enter this to load everything in your file to run queries

```prolog
consult("your_filename.pl").
```




