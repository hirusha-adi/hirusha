---
title: Notes - Algorithms
sidebar_label: Notes
slug: notes
sidebar_position: 1
---

## Linear Search

- looks at each element in a list one by one until it finds the given element (or until the list is over)

```python
def linear_search(arr: list, search_for):
    for element in arr: # iterate through the list
        if search_for == element: # compare each element
            return element
```

<details>
<summary>Detailed Example</summary>

```python
def linear_search(arr: list, search_for):
    """
    Perform linear search on the given list to find the specified element.

    Parameters:
    - arr (list): The list to be searched.
    - search_for: The element to search for in the list.

    Returns:
    - The found element if present, otherwise None.
    """
    for element in arr:
        # Check if the current element matches the search target.
        if search_for == element:
            # If a match is found, return the element.
            return element

    # If the loop completes without finding a match, return None.
    return None

# Example usage:
my_list = [1, 2, 3, 4, 5]
target_element = 3
result = linear_search(my_list, target_element)

if result is not None:
    print(f"Element {target_element} found in the list.")
else:
    print(f"Element {target_element} not found in the list.")

```

</details>

## Bubble Sort

### Pythonic Approach

- Makes use of some python specific features

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
```

- **`range(0, n - i - 1)`**:

  - The `range()` function in Python generates a sequence of numbers. In this case, it is used to iterate over the elements of the array `arr`. The parameters of `range()` are `start`, `stop`, and `step`. In the given context:

    - `start` is 0.
    - `stop` is `n - i - 1`.
    - `step` is 1 (implicitly).

  - So, `range(0, n - i - 1)` creates a sequence of numbers starting from 0 up to (but not including) `n - i - 1`. This is used as the index for accessing elements in the array during the inner loop.

- **`arr[j], arr[j + 1] = arr[j + 1], arr[j]`**:

  - This line is a Pythonic way of swapping the values of `arr[j]` and `arr[j + 1]` in a single line, without using a temporary variable. It utilizes tuple packing and unpacking.

<details>
<summary>Detailed Example</summary>

```python
def bubble_sort(arr):
    """
    Sorts a list using the Bubble Sort algorithm.

    Parameters:
    - arr (list): The list to be sorted.
    """
    n = len(arr)

    # Traverse through all array elements
    for i in range(n):
        # Last i elements are already sorted, so we don't need to check them
        for j in range(0, n - i - 1):
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Example usage:
my_list = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(my_list)

print("Sorted array:", my_list)
```

</details>

### Normal Approach

- Refer to the code below if you have trouble understanding the above Pythonic Approach:

```python
def bubble_sort(my_list: list):
    max_index = len(my_list) - 1
    n = max_index
    while True:
        no_more_swaps = True
        for j in range(0, n):
            if my_list[j] > my_list[j + 1]:
                # swap two variables (using a third variable)
                # -------------------------------------------
                temp = my_list[j]
                my_list[j] = my_list[j + 1]
                my_list[j + 1] = temp
                # -------------------------------------------
                no_more_swaps = False
        n -= 1
        if no_more_swaps:
            break # exit infinite loop if fully sorted
```

<details>
<summary>Detailed Example</summary>

```python
def bubble_sort(my_list: list):
    """
    Sorts a list in ascending order using the Bubble Sort algorithm.

    Parameters:
    - my_list (list): The list to be sorted.
    """
    # Get the index of the last element in the list
    max_index = len(my_list) - 1
    n = max_index

    # Continue iterating until the entire list is sorted
    while True:
        # Flag to track whether any swaps were made in the current iteration
        no_more_swaps = True

        # Traverse through the unsorted part of the list
        for j in range(0, n):

            # Compare adjacent elements and swap if they are in the wrong order
            if my_list[j] > my_list[j + 1]:

                # Swap elements if they are in the wrong order
                temp = my_list[j]
                my_list[j] = my_list[j + 1]
                my_list[j + 1] = temp

                # Set flag to indicate that a swap occurred
                no_more_swaps = False

        # Reduce the range of elements to consider in the next iteration
        n -= 1

        # If no swaps occurred in the inner loop, the list is already sorted
        if no_more_swaps:
            break

# Example usage:
my_list = [4, 2, 7, 1, 9, 3, 5, 8]
bubble_sort(my_list)
print("Sorted List:", my_list)
```

</details>
