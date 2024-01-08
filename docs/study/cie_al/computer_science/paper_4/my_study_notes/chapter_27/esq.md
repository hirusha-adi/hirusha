---
title: Exam Style Questions - Object-Oriented Programming (OOP)
sidebar_label: ESQ
slug: esq
sidebar_position: 2
---

<details>
<summary>Tasks</summary>

#### Task 26.01

#### 1 Write a complete program to save several car records to a sequential file.

```python
import pickle

class CarRecord:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

# Function to save car records to a file
def save_car_records(records, filename):
    with open(filename, 'wb') as file:
        pickle.dump(records, file)

# Sample car records
car_records = [
    CarRecord('Toyota', 'Camry', 2022),
    CarRecord('Honda', 'Accord', 2021),
    CarRecord('Ford', 'Mustang', 2020)
]

# Save car records to a file
save_car_records(car_records, 'car_records.pkl')
```

#### 2 Write another program to read the file and display the contents on screen.

```python
import pickle

class CarRecord:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

# Function to read and display car records from a file
def read_and_display_car_records(filename):
    with open(filename, 'rb') as file:
        car_records = pickle.load(file)

        # Display car records
        print("Car Records:")
        for record in car_records:
            print(f"Make: {record.make}, Model: {record.model}, Year: {record.year}")

# Read and display car records from the file
read_and_display_car_records('car_records.pkl')
```

#### Task 26.01

#### Write a complete program to save several car records to a random-access file. Write another program to find a record in the random-access file using the record key. Display the record data on screen.

- Save Car Records to a Random-Access File

```python
import pickle

class CarRecord:
    def __init__(self, VehicleID, make, model, year):
        self.VehicleID = VehicleID
        self.make = make
        self.model = model
        self.year = year

# Function to save car records to a random-access file
def save_car_records(records, filename):
    with open(filename, 'wb') as file:
        for record in records:
            pickle.dump(record, file)

# sample car records
car_records = [
    CarRecord('1A123', 'Toyota', 'Prius', 2023),
    CarRecord('2B456', 'Honda', 'Vezel', 2022),
    CarRecord('3C789', 'Ford', 'Mustang', 2021)
]

# Save car records to a random-access file
save_car_records(car_records, 'car_records.dat')
```

- Find and Display a Record in the Random-Access File

```python
import pickle

class CarRecord:
    def __init__(self, VehicleID, make, model, year):
        self.VehicleID = VehicleID
        self.make = make
        self.model = model
        self.year = year

# Function to find and display a car record from a random-access file
def find_and_display_record(filename, key):
    with open(filename, 'rb') as file:
        try:
            while True:
                record = pickle.load(file)
                if record.VehicleID == key:
                    print("Found Record:")
                    print(f"VehicleID: {record.VehicleID}")
                    print(f"Make: {record.make}")
                    print(f"Model: {record.model}")
                    print(f"Year: {record.year}")
                    break  # Stop searching once the record is found
        except EOFError:
            print(f"No record found with VehicleID '{key}'")

# Find and display a record with the specified VehicleID
find_and_display_record('car_records.dat', '2B456')
```

</details>

## Question 1

#### A company stores details about their customers in a binary file of records.

- #### The key field of a customer record is the customer ID (a number between 100001 and 999999).
- #### The name of the customer is stored in a 30-character field.
- #### The customer’s telephone number is stored in a 14-character field.
- #### The total value of orders so far is stored in a currency (decimal) field.

#### i Write the declaration statement for the record data type CustomerRecord required to store the data. Write program code. [6]

```python
class CustomerRecord:
    def __init__(self, customer_id=None, name=None, phone_number=None, total_order_value=None):
        self.customer_id = customer_id              # The key field
        self.name = name                            # 30-character field for the customer's name
        self.phone_number = phone_number            # 14-character field for the telephone number
        self.total_order_value = total_order_value  # Decimal field for the total value of orders
```

#### ii Write the declaration statement for an array CustomerData[0 : 999] to store customer records. [2]

```python
CustomerData = [CustomerRecord() for i in range(1000)]
```

#### b The array CustomerData is to be used as a hash table to store customer records. The function Hash is used to calculate the address where a record is to be stored.

```
FUNCTION Hash(CustomerID : INTEGER) RETURNS INTEGER
    Address ← CustomerID MOD 1000
    RETURN Address
ENDFUNCTION
```

#### i Write program code to implement the function Hash.

```python
def Hash(CustomerID):
    return CustomerID % 1000

# or using a single line lambda function
Hash = lambda CustomerID: CustomerID % 1000
```

#### ii Write a procedure AddRecord(Customer : CustomerRecord) to add a customer record to the hash table CustomerData. Your solution should handle collisions by using the next available slot in the hash table.

```python
def AddRecord(Customer):
    address = Hash(Customer.customer_id)

    while CustomerData[address].customer_id is not None:
        # Handle collision by moving to the next available slot
        address = (address + 1) % 1000

    # Add the customer record to the hash table
    CustomerData[address] = Customer
```

#### iii Write a function FindRecord(CustomerID : INTEGER) that returns the index of the hash table slot where the record for the customer with CustomerID is stored.

```python
def FindRecord(CustomerID):
    address = Hash(CustomerID)

    while CustomerData[address].customer_id is not None:
        # Check if the current slot matches the desired CustomerID
        if CustomerData[address].customer_id == CustomerID:
            return address  # Found the record, return the index

        # Move to the next slot
        address = (address + 1) % 1000

    return None  # Customer record not found
```

#### c Before the program stops, the hash table records must be stored in a sequential file, so that the records can be restored to the array when the program is re-entered. Write program code to store the records of the array CustomerData sequentially into a binary file CustomerData.DAT

```python
import pickle

# Function to store records sequentially into a binary file
def store_records_to_file(filename, data_array):
    with open(filename, 'wb') as file:
        for record in data_array:
            pickle.dump(record, file)

# Store records from CustomerData array to binary file
store_records_to_file('CustomerData.DAT', CustomerData)
```

#### Instead of using a hash table, the company decide they want to store customer records in a direct-access binary file. Explain what changes need to be made to your program to do this

- Data Structure:

  - Use a list or array for CustomerRecord instances.
  - Eliminate hash function and collision-handling logic.

- Sequential File Handling:

  - Directly access the binary file using the customer's ID as an index.
  - Write and read records at positions corresponding to the customer's ID.

- Data Storage and Retrieval:
  - Calculate the file position based on the customer's ID for adding and searching records.

```python
import pickle

class CustomerRecord:
    def __init__(self, customer_id=None, name=None, phone_number=None, total_order_value=None):
        self.customer_id = customer_id
        self.name = name
        self.phone_number = phone_number
        self.total_order_value = total_order_value

# Function to store a record in the direct-access binary file
def store_record_to_file(filename, record):
    with open(filename, 'rb+') as file:
        # Calculate the position based on the customer's ID
        position = (record.customer_id - 100001) * pickle.PickleBuffer.HEADER_SIZE
        file.seek(position)
        pickle.dump(record, file)

# Function to retrieve a record from the direct-access binary file
def retrieve_record_from_file(filename, customer_id):
    with open(filename, 'rb') as file:
        # Calculate the position based on the customer's ID
        position = (customer_id - 100001) * pickle.PickleBuffer.HEADER_SIZE
        file.seek(position)
        try:
            record = pickle.load(file)
            return record
        except EOFError:
            return None  # Customer record not found

# Example usage:
customer1 = CustomerRecord(customer_id=100001, name="John Doe", phone_number="555-1234", total_order_value=1500.25)
store_record_to_file('customer_records.dat', customer1)

customer_id_to_retrieve = 100001
retrieved_customer = retrieve_record_from_file('customer_records.dat', customer_id_to_retrieve)

if retrieved_customer:
    print("Retrieved Customer Record:")
    print(f"Customer ID: {retrieved_customer.customer_id}")
    print(f"Name: {retrieved_customer.name}")
    print(f"Phone Number: {retrieved_customer.phone_number}")
    print(f"Total Order Value: {retrieved_customer.total_order_value}")
else:
    print(f"No record found for Customer ID {customer_id_to_retrieve}")
```

## Question 2

#### A program allows a user to enter a filename for accessing a data file. If the user types in a filename that does not exist, the program crashes. Write program code that includes exception handling to replace the following pseudocode: [5]

```
OUTPUT "Which file do you want to use? "
INPUT FileName
OPENFILE FileName FOR RANDOM
```

- Python Code:

```python
while True:
    try:
        filename = input("Which file do you want to use? ")
        with open(filename, 'r') as file:
            print(f"File '{filename}' opened successfully!")
        break
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found. Please enter a valid filename.")
    except Exception as e:
        print(f"An error occurred: {e}")


# a better alternative is to use,
import os
os.path.isfile() # check if a file exists
os.path.isdir() # check if a directory exists
```
