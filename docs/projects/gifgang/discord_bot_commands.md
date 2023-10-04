---
title: Discord Bot - Commands Guide
sidebar_label: Discord Bot Guide
slug: discord-bot-guide
---

All commands and their usage information

## General

### `ping`

Check the response time of the discord bot

- Usage
    - `.ping`

### `uptime`
Get the uptime of the discord bot and status of other services 
- Usage
    - `.uptime`


### `about`
See information about GifGang and other services of GifGang
- Usage
    - `.about`

### `help`
check help for the available commands 
- Usage
    - `.help [command]`
- Arguments
    - `[command]`
        - the command name to see all the help for

check help for the available commands 
- Example
    - `.help`
    - `.help tenor`

## SFW

### `giphy`

- Example
    - `.help`

- Usage

    - `.giphy [mode] [query]`

- Arguments
    
    - `[mode]`
        
        - "`trending`" / "`search`" / "`random`"

    - `[query]`
        
        - only useful if `[mode]` is "`search`"

- Examples
    
    - `.giphy`
    
    - `.giphy search happy birthday`
    
    - `.giphy trending`
    
    - `.giphy search`

### `picsum`

- Usage
    
    - `.picsum`

### `tenor`

- Usage
    
    - `.tenor [query]`

- Arguments
    
    - `[query]`

        - what to search for.

        - defaults to a randomly selected word

- Examples
    
    - `.tenor`
    
    - `.tenor good morning`

### `cataas`


- Usage

    - `.cataas [mode] [text] [filter]`

- Arguments

    - `[mode]`
        
        - "`img`" / "`i`" / "`image`" / "`gif`"

    - `[text]`
        - any text to add on top of the image

        - if there is no text,

        - this can be replaced with `[filter]`

    - `[filter]`
        - "`blur`" / "`mono`" / "`sepia`" / "`negative`" / "`paint`" / "`pixel`"

        - filter name

        - defaults to `None`

    - Examples
        - `.cataas gif`

        - `.cataas img`

        - `.cataas img hey Meow?`

        - `.cataas img Hey Meow? sepia`

        - `.cataas img sepia`


### `thecatapi`

- Usage
    
    - `.thecatapi [mode]`

- Arguments

    - `[mode]`

        - "`b`" / "`breed`" / "`i`" / "`img`" / "`image`"

        - defaults to "`image`"

- Examples
    - `.thecatapi`

    - `.thecatapi image`

    - `.thecatapi b`

    - `.thecatapi breed`

### `dogs`

- Usage
    
    - `.dogs`

- Example
    
    - `.dogs`

## NSFW

### `eporner`
- Usage
    - `.erporner [query]`

- Arguments

    - `[query]`

        - what to search for

        - defaults to a randomly selected word

- Examples
    - `.eporner`
    - `.eporner query1`
    - `.eporner C++ Tutorial`

### `redtube`

- Usage

    - `.redtube [mode-or-query]`

- Arguments

    - `[mode-or-query]`

        - "`stars`", "`star`"

        - if first word is in above words,

            - will send a random star

        - if not,

            - will search for result in redtube

        - this can be the mode or what to search for

- Examples

    - `.redtube`
    - `.redtube star`
    - `.redtube C++ Tutorial`