---
title: Pickle for Data Serialization in Python
sidebar_label: Pickles
slug: pickles
sidebar_position: 3
---

## Introduction

- Pickle is a module in Python that allows you to serialize and deserialize objects.
  - **Serialization** is the process of converting a Python object into a byte stream, and
  - **Deserialization** is the reverse process, where you recreate the original Python object from a byte stream.
- Pickle is particularly useful for saving (persistently, on disk) and loading complex data structures, such as dictionaries, lists, or custom objects.
- It is commonly used for storing and exchanging data between Python programs or for persisting data to disk

# Basic Pickling and Unpickling

:::warning note

Please deal with the files in binary mode (to prevent encoding issues):

- `wb` - write in binary mode
- `rb` - read in binary mode

:::

- Pickling and Dumping to a file

```python
import pickle

# Note: we can serialize and dump anything, dict, list, or even our own classes
# data_to_pickle = {'name': 'John', 'age': 30, 'city': 'New York'}

# in this example: `CarRecord` is our own class
data_to_pickle = CarRecord("Toyota")
data_to_pickle.number = 10
print(data_to_pickle.number) # 10

# Pickling (Serialize)
with open('data.pkl', 'wb') as file:
    pickle.dump(data_to_pickle, file)
```

- Loading and Unpickling from a file

```python
# Unpickling (Deserialize)
with open('data.pkl', 'rb') as file:
    loaded_data: CarRecord = pickle.load(file) # (optionally) mention our data type for Intellisense in IDE

print(loaded_data.data.number) # 10
```

<details>
<summary>Pseudocode</summary>

- dump

```
OPENFILE CarFile FOR WRITE
FOR i ← 1 TO MaxRecords
    PUTRECORD CarFile, Car[i]
NEXT i
CLOSEFILE CarFile
```

- load

```
OPENFILE CarFile FOR READ
FOR i ← 1 TO MaxRecords
    GETRECORD CarFile, Car[i]
NEXT i
CLOSEFILE CarFile
```

</details>

# Pickling and Unpickling Files

<details>
<summary>Pseudocode</summary>
</details>
