---
title: Pickle for Data Serialization in Python
sidebar_label: Pickles
slug: pickles
sidebar_position: 3
---

- Basic Tutorial:

<iframe width="560" height="315" src="https://www.youtube.com/embed/6Q56r_fVqgw?si=Bkf3xfQEikWgVWhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Advanced Tutorial:

<iframe width="560" height="315" src="https://www.youtube.com/embed/qt15PnF8x-M?si=h1ylVhPNvVJDHk9C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- [Click here](https://docs.python.org/3/library/pickle.html#) for official documentation
- [Click here](https://www.datacamp.com/tutorial/pickle-python-tutorial) for a great guide

## Introduction

- Pickle is a module in Python that allows you to serialize and deserialize objects.
  - **Serialization** is the process of converting a Python object into a byte stream, and
  - **Deserialization** is the reverse process, where you recreate the original Python object from a byte stream.
- Pickle is particularly useful for saving (persistently, on disk) and loading complex data structures, such as dictionaries, lists, or custom objects.
- It is commonly used for storing and exchanging data between Python programs or for persisting data to disk

## Basic Pickling and Unpickling

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

- dump: `PUTRECORD Data, Data`

```
OPENFILE CarFile FOR WRITE
FOR i ← 1 TO MaxRecords
    PUTRECORD CarFile, Car[i]
NEXT i
CLOSEFILE CarFile
```

- load: `GETRECORD Data, Data`

```
OPENFILE CarFile FOR READ
FOR i ← 1 TO MaxRecords
    GETRECORD CarFile, Car[i]
NEXT i
CLOSEFILE CarFile
```

</details>

## (Extra) Customizing Pickle Behaviour

- the `__reduce__` method (another [dunder method](https://docs.python.org/3/reference/datamodel.html#special-method-names)) in Python is used for customizing the behavior of object serialization and deserialization when using the `pickle` module.
- by implementing this method in your class,
  - you gain control over how instances of your class are pickled and unpickled.

Here's a breakdown of how it works:

1. **`__reduce__` Method:**

   - The `__reduce__` method is a special method in Python classes that allows you to define custom behavior during pickling.
   - It should return either a string (indicating a global name of a function or a class to be called) or a tuple. The tuple should contain a callable (function or class), followed by arguments to pass to that callable.

2. **Tuple Structure:**

   - In the example, the `__reduce__` method returns a tuple `(self.__class__, (self.data,))`. This tuple specifies that when an instance of `CustomObject` is pickled, it should be reduced to a tuple containing the class itself (`self.__class__`) and a tuple of arguments to recreate the object (`(self.data,)`).

3. **Pickling:**

   - When you use `pickle.dump(custom_obj, file)`, the `__reduce__` method is called during the pickling process. It returns the necessary information for pickling the object.

4. **Unpickling:**
   - During unpickling (`pickle.load(file)`), the information returned by `__reduce__` is used to recreate the object. In this case, it creates a new instance of `CustomObject` using the class and arguments specified in the tuple.

Example Code:

```python
import pickle

class CustomObject:
    def __init__(self, data):
        self.data = data

    def __reduce__(self):
        # Returns a tuple containing class and arguments for object recreation
        return (self.__class__, (self.data,))

# Pickling
custom_obj = CustomObject('Custom data')
with open('custom_data.pkl', 'wb') as file:
    pickle.dump(custom_obj, file)

# Unpickling
with open('custom_data.pkl', 'rb') as file:
    loaded_custom_obj = pickle.load(file)

print(loaded_custom_obj.data)
```

- This example demonstrates how to implement `__reduce__` in a class (`CustomObject`) to customize its pickling and unpickling behavior.
- The result is that the pickled and unpickled object retains its original state.
- We can customize this to our needs
- [Click here](https://www.synopsys.com/blogs/software-security/python-pickling.html#:~:text=Whenever%20an%20object%20is%20pickled,reconstruct%20this%20object%20when%20unpickling.) to learn more
