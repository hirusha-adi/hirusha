---
title: File Handling
sidebar_label: File Handling
slug: file_handling
sidebar_position: 4
---

- make sure to always close the file

## Reading

- use `WHILE NOT EOF()` if you are reading

```
OPENFILE File FOR READ
WHILE NOT EOF()
    READFILE File, MyLine
ENDWHILE
CLOSEFILE File
```

## Writing

- basically write to line
- data in file will be erased/replace if any

```
OPENFILE File FOR WRITE
WRITEFILE File, Data
CLOSEFILE File
```

## Appending

- add to end of life
- doesnt delete file contents if any

```
OPENFILE File FOR APPEND
WRITEFILE File, Data
CLOSEFILE File
```

## Why use Text Files?

- write data from arrays to files before closing the program
- so, data can be read from these files after the program starts again
- no need to re-enter data manually

## What allows this?

- data can be retained after computer has been turned off

## Why use `APPEND` instead of `WRITE`?

- to **not** replace the existing data

## Storing many data items in one file

### Method 1

- save one entity as a single line
- seperated by delimiter
- that is a unique character among the data
- to seperately identify and read/parse the valuess
- concatenate Part 1, then delimiter and then Part 2 and so on...

### Method 2

- have data occupy a fixed number of characters
- a fixed length
- then extract data from it


## Why choose a particular Delimiter?

- it doesn't already exist in the recorded data


## When storing *all* data in file?

### Advantages

- fewer file oeprations required

### Disadvantages

- algorithm to combine, extract individual data will be more complex



