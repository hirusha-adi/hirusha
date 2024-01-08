---
title: Exam Style Questions - Object-Oriented Programming (OOP)
sidebar_label: ESQ
slug: esq
sidebar_position: 2
---

## Tasks

<details>
<summary>Tasks</summary>

### Task 27.01

#### 1 Copy the Car class definition into your program editor and write a simple program to test that each method works.

```python
class Car:
    def __init__(self, n, e):
        self.__VehicleID = n
        self.__Registration = ""
        self.__DateOfRegistration = None
        self.__EngineSize = e
        self.__PurchasePrice = 0.00

    @property
    def VehicleID(self):
        return self.__VehicleID

    @property
    def EngineSize(self):
        return self.__EngineSize

    @property
    def Registration(self):
        return self.__Registration

    @Registration.setter
    def Registration(self, r):
        self.__Registration = r

    @property
    def DateOfRegistration(self):
        return self.__DateOfRegistration

    @DateOfRegistration.setter
    def DateOfRegistration(self, d):
        self.__DateOfRegistration = d

    @property
    def PurchasePrice(self):
        return self.__PurchasePrice

    @PurchasePrice.setter
    def PurchasePrice(self, p):
        self.__PurchasePrice = p

# Test the Car class
if __name__ == "__main__":
    # Create an instance of Car
    my_car = Car(n=123, e=2.0)

    # Test the getters
    print("VehicleID:", my_car.VehicleID)
    print("EngineSize:", my_car.EngineSize)
    print("Registration:", my_car.Registration)
    print("DateOfRegistration:", my_car.DateOfRegistration)
    print("PurchasePrice:", my_car.PurchasePrice)

    # Test the setters
    my_car.Registration = "ABC123"
    my_car.DateOfRegistration = "2022-01-08"
    my_car.PurchasePrice = 25000.00

    # Test the getters after setting values
    print("\nAfter setting values:")
    print("VehicleID:", my_car.VehicleID)
    print("EngineSize:", my_car.EngineSize)
    print("Registration:", my_car.Registration)
    print("DateOfRegistration:", my_car.DateOfRegistration)
    print("PurchasePrice:", my_car.PurchasePrice)
```

#### 2 A business wants to store data about companies they supply. The data to be stored includes: company name, email address, date of last contact.

#### a Design a class Company and draw a class diagram

```
  +-------------------------------------------+
  |                  Company                  |
  +-------------------------------------------+
  | - company_name: str                       |
  | - email_address: str                      |
  | - date_last_contact: str                  |
  +-------------------------------------------+
  | + get_company_name(): str                 |
  | + set_company_name(name: str): void       |
  | + get_email_address(): str                |
  | + set_email_address(email: str): void     |
  | + get_date_last_contact(): str            |
  | + set_date_last_contact(date: str): void  |
  +-------------------------------------------+

```

#### Write program code to declare the class. Company name and email address are to be set by the constructor and will never be changed.

```python
class Company:
    def __init__(self, company_name, email_address):
        self.__company_name = company_name
        self.__email_address = email_address
        self.__date_last_contact = None

    @property
    def company_name(self):
        return self.__company_name

    @property
    def email_address(self):
        return self.__email_address

    @property
    def date_last_contact(self):
        return self.__date_last_contact

    @date_last_contact.setter
    def date_last_contact(self, date):
        self.__date_last_contact = date
```

#### c Instantiate one object of this class and test your class code works.

```python
# Create an instance of Company
company = Company(company_name="ABC Corp", email_address="abc@example.com")

# Accessing company details
print("Company Name:", company.company_name)
print("Email Address:", company.email_address)

# Setting date of last contact using property setter
company.date_last_contact = "2024-01-08"

# Accessing updated details
print("Date of Last Contact:", company.date_last_contact)
```

### Task 27.02

#### Copy the class definitions for LibraryItem, Book and CD into your program editor. Write the additional get methods. Write a simple program to test that each method works.

```python
import datetime

class LibraryItem:
    def __init__(self, t, a, i):
        # constructor / initialiser method
        self.__Title = t
        self.__Author_Artist = a
        self.__ItemID = i
        self.__OnLoan = False
        self.__DueDate = datetime.date.today()

    @property
    def Title(self):
        return self.__Title

    @property
    def Author_Artist(self):
        return self.__Author_Artist

    @property
    def ItemID(self):
        return self.__ItemID

    @property
    def OnLoan(self):
        return self.__OnLoan

    @property
    def DueDate(self):
        return self.__DueDate

    def Borrowing(self):
        self.__OnLoan = True
        self.__DueDate = self.__DueDate + datetime.timedelta(weeks=3)

    def Returning(self):
        self.__OnLoan = False

    def PrintDetails(self):
        print(self.__Title, '; ', self.__Author_Artist, '; ', end='')
        print(self.__ItemID, '; ', self.__OnLoan, '; ', self.__DueDate)

    def __repr__(self):
        return f"LibraryItem('{self.__Title}', '{self.__Author_Artist}', {self.__ItemID})"

class Book(LibraryItem):
    def __init__(self, t, a, i):
        # initialiser method
        LibraryItem.__init__(self, t, a, i)
        self.__IsRequested = False
        self.__RequestedBy = 0

    @property
    def IsRequested(self):
        return self.__IsRequested

    @IsRequested.setter
    def IsRequested(self, b):
        self.__IsRequested = b

    def PrintDetails(self):
        print("Book Details")
        LibraryItem.PrintDetails(self)
        print(self.__IsRequested)

    def __repr__(self):
        return f"Book('{self.Title}', '{self.Author_Artist}', {self.ItemID})"

class CD(LibraryItem):
    def __init__(self, t, a, i):
        # initialiser method
        LibraryItem.__init__(self, t, a, i)
        self.__Genre = ""

    @property
    def Genre(self):
        return self.__Genre

    @Genre.setter
    def Genre(self, g):
        self.__Genre = g

    def __repr__(self):
        return f"CD('{self.Title}', '{self.Author_Artist}', {self.ItemID})"

# Test the classes
if __name__ == "__main__":
    # Test LibraryItem
    item = LibraryItem("Title1", "Author1", 1)
    print(item)

    # Test Book
    book = Book("BookTitle", "BookAuthor", 2)
    print(book)

    # Test CD
    cd = CD("CDTitle", "CDArtist", 3)
    print(cd)
```

### Task 27.03

#### Write code to define a Borrower class as shown in the class diagram in Figure 27.05

```
+-----------------------------------+
|    Borrower                       |
+-----------------------------------+
| BorrowerName  : STRING            |
| EmailAddress  : STRING            |
| BorrowerID    : INTEGER           |
| ItemsOnLoan   : INTEGER           |
+-----------------------------------+
| Constructor()                     |
| GetBorrowerName(): STRING         |
| GetEmailAddress(): STRING         |
| GetBorrowerID()  : INTEGER        |
| GetItemsOnLoan() : INTEGER        |
| UpdateItemsOnLoan(increment_by)   |
| PrintDetails(): void              |
+-----------------------------------+
```

#### The constructor should initialise ItemsOnLoan to 0. UpdateItemsOnLoan() should increment ItemsOnLoan by an integer passed as parameter. Write a simple program to test the methods.

```python
class Borrower:
    def __init__(self, borrower_name, email_address, borrower_id):
        self.BorrowerName = borrower_name
        self.EmailAddress = email_address
        self.BorrowerID = borrower_id
        self.ItemsOnLoan = 0

    def GetBorrowerName(self):
        return self.BorrowerName

    def GetEmailAddress(self):
        return self.EmailAddress

    def GetBorrowerID(self):
        return self.BorrowerID

    def GetItemsOnLoan(self):
        return self.ItemsOnLoan

    def UpdateItemsOnLoan(self, increment_by):
        self.ItemsOnLoan += increment_by

    def PrintDetails(self):
        print("Borrower Details:")
        print("Borrower Name:", self.GetBorrowerName())
        print("Email Address:", self.GetEmailAddress())
        print("Borrower ID:", self.GetBorrowerID())
        print("Items On Loan:", self.GetItemsOnLoan())

# Test the Borrower class
if __name__ == "__main__":
    # Create an instance of Borrower
    borrower = Borrower(borrower_name="John Doe", email_address="john@example.com", borrower_id=1)

    # Display initial details
    borrower.PrintDetails()

    # Update items on loan
    borrower.UpdateItemsOnLoan(3)

    # Display updated details
    borrower.PrintDetails()
```

### Task 27.04

#### Use your program code from Task 27.02. Re-define the PrintDetail methods for the Book class and the CD class. Test your code.

```python
import datetime

class LibraryItem:
    def __init__(self, t, a, i):
        # constructor / initialiser method
        self.__Title = t
        self.__Author_Artist = a
        self.__ItemID = i
        self.__OnLoan = False
        self.__DueDate = datetime.date.today()

    @property
    def Title(self):
        return self.__Title

    @property
    def Author_Artist(self):
        return self.__Author_Artist

    @property
    def ItemID(self):
        return self.__ItemID

    @property
    def OnLoan(self):
        return self.__OnLoan

    @property
    def DueDate(self):
        return self.__DueDate

    def Borrowing(self):
        self.__OnLoan = True
        self.__DueDate = self.__DueDate + datetime.timedelta(weeks=3)

    def Returning(self):
        self.__OnLoan = False

    def PrintDetails(self):
        print(self.__Title, '; ', self.__Author_Artist, '; ', end='')
        print(self.__ItemID, '; ', self.__OnLoan, '; ', self.__DueDate)

    def __repr__(self):
        return f"LibraryItem('{self.__Title}', '{self.__Author_Artist}', {self.__ItemID})"

class Book(LibraryItem):
    def __init__(self, t, a, i):
        # initialiser method
        LibraryItem.__init__(self, t, a, i)
        self.__IsRequested = False
        self.__RequestedBy = 0

    @property
    def IsRequested(self):
        return self.__IsRequested

    @IsRequested.setter
    def IsRequested(self, b):
        self.__IsRequested = b

    def PrintDetails(self):
        print("Book Details:")
        LibraryItem.PrintDetails(self)
        print("Requested:", self.__IsRequested)

    def __repr__(self):
        return f"Book('{self.Title}', '{self.Author_Artist}', {self.ItemID})"

class CD(LibraryItem):
    def __init__(self, t, a, i):
        # initialiser method
        LibraryItem.__init__(self, t, a, i)
        self.__Genre = ""

    @property
    def Genre(self):
        return self.__Genre

    @Genre.setter
    def Genre(self, g):
        self.__Genre = g

    def PrintDetails(self):
        print("CD Details:")
        LibraryItem.PrintDetails(self)
        print("Genre:", self.__Genre)

    def __repr__(self):
        return f"CD('{self.Title}', '{self.Author_Artist}', {self.ItemID})"

# Test the classes
if __name__ == "__main__":
    # Test LibraryItem
    item = LibraryItem("Title1", "Author1", 1)
    item.PrintDetails()

    # Test Book
    book = Book("BookTitle", "BookAuthor", 2)
    book.IsRequested = True
    book.PrintDetails()

    # Test CD
    cd = CD("CDTitle", "CDArtist", 3)
    cd.Genre = "Rock"
    cd.PrintDetails()
```

### Task 27.05

#### Use your program code from Task 27.03. Add another attribute, BorrowerID, to the LibraryItem class so that the item being loaned can have the borrower recorded. Change the LibraryItem.Borrowing and LibraryItem.Returning methods, so that LoanItem.BorrowerID and Borrower.ItemsOnLoan are updated when a library item is borrowed or returned.

```python
import datetime

class LibraryItem:
    def __init__(self, t, a, i):
        # constructor / initialiser method
        self.__Title = t
        self.__Author_Artist = a
        self.__ItemID = i
        self.__OnLoan = False
        self.__DueDate = datetime.date.today()
        self.__BorrowerID = None

    @property
    def Title(self):
        return self.__Title

    @property
    def Author_Artist(self):
        return self.__Author_Artist

    @property
    def ItemID(self):
        return self.__ItemID

    @property
    def OnLoan(self):
        return self.__OnLoan

    @property
    def DueDate(self):
        return self.__DueDate

    @property
    def BorrowerID(self):
        return self.__BorrowerID

    def Borrowing(self, borrower_id):
        self.__OnLoan = True
        self.__DueDate = self.__DueDate + datetime.timedelta(weeks=3)
        self.__BorrowerID = borrower_id

    def Returning(self):
        self.__OnLoan = False
        self.__BorrowerID = None

    def PrintDetails(self):
        print(self.__Title, '; ', self.__Author_Artist, '; ', end='')
        print(self.__ItemID, '; ', self.__OnLoan, '; ', self.__DueDate, '; ', self.__BorrowerID)

    def __repr__(self):
        return f"LibraryItem('{self.__Title}', '{self.__Author_Artist}', {self.__ItemID})"

class Borrower:
    def __init__(self, borrower_name, email_address, borrower_id):
        self.BorrowerName = borrower_name
        self.EmailAddress = email_address
        self.BorrowerID = borrower_id
        self.ItemsOnLoan = 0

    def GetBorrowerName(self):
        return self.BorrowerName

    def GetEmailAddress(self):
        return self.EmailAddress

    def GetBorrowerID(self):
        return self.BorrowerID

    def GetItemsOnLoan(self):
        return self.ItemsOnLoan

    def UpdateItemsOnLoan(self, increment_by):
        self.ItemsOnLoan += increment_by

    def PrintDetails(self):
        print("Borrower Details:")
        print("Borrower Name:", self.GetBorrowerName())
        print("Email Address:", self.GetEmailAddress())
        print("Borrower ID:", self.GetBorrowerID())
        print("Items On Loan:", self.GetItemsOnLoan())

# Test the classes
if __name__ == "__main__":
    # Create instances of Borrower and LibraryItem
    borrower = Borrower(borrower_name="John Doe", email_address="john@example.com", borrower_id=1)
    item = LibraryItem("Title1", "Author1", 1)

    # Display initial details
    borrower.PrintDetails()
    item.PrintDetails()

    # Borrow an item
    item.Borrowing(borrower.GetBorrowerID())
    borrower.UpdateItemsOnLoan(1)

    # Display updated details
    borrower.PrintDetails()
    item.PrintDetails()

    # Return the item
    item.Returning()
    borrower.UpdateItemsOnLoan(-1)

    # Display final details
    borrower.PrintDetails()
    item.PrintDetails()
```

### Task 27.06

#### Use your code from Task 27.02 or Task 27.04. Add another attribute, RequestedBy, to the Book class so that the borrower making the request can be recorded. Change the method Book.SetIsRequested, so that Book.RequestedBy is updated when a book is requested.

```python
import datetime

class LibraryItem:
    def __init__(self, t, a, i):
        # constructor / initialiser method
        self.__Title = t
        self.__Author_Artist = a
        self.__ItemID = i
        self.__OnLoan = False
        self.__DueDate = datetime.date.today()

    @property
    def Title(self):
        return self.__Title

    @property
    def Author_Artist(self):
        return self.__Author_Artist

    @property
    def ItemID(self):
        return self.__ItemID

    @property
    def OnLoan(self):
        return self.__OnLoan

    @property
    def DueDate(self):
        return self.__DueDate

    def Borrowing(self):
        self.__OnLoan = True
        self.__DueDate = self.__DueDate + datetime.timedelta(weeks=3)

    def Returning(self):
        self.__OnLoan = False

    def PrintDetails(self):
        print(self.__Title, '; ', self.__Author_Artist, '; ', end='')
        print(self.__ItemID, '; ', self.__OnLoan, '; ', self.__DueDate)

    def __repr__(self):
        return f"LibraryItem('{self.__Title}', '{self.__Author_Artist}', {self.__ItemID})"

class Book(LibraryItem):
    def __init__(self, t, a, i):
        # initialiser method
        LibraryItem.__init__(self, t, a, i)
        self.__IsRequested = False
        self.__RequestedBy = None  # New attribute

    @property
    def IsRequested(self):
        return self.__IsRequested

    @IsRequested.setter
    def IsRequested(self, b):
        self.__IsRequested = b

    @property
    def RequestedBy(self):
        return self.__RequestedBy

    def SetIsRequested(self, borrower_id):
        self.__IsRequested = True
        self.__RequestedBy = borrower_id

    def PrintDetails(self):
        print("Book Details:")
        LibraryItem.PrintDetails(self)
        print("Requested:", self.__IsRequested)
        print("Requested By:", self.__RequestedBy)

    def __repr__(self):
        return f"Book('{self.Title}', '{self.Author_Artist}', {self.ItemID})"

class CD(LibraryItem):
    def __init__(self, t, a, i):
        # initialiser method
        LibraryItem.__init__(self, t, a, i)
        self.__Genre = ""

    @property
    def Genre(self):
        return self.__Genre

    @Genre.setter
    def Genre(self, g):
        self.__Genre = g

    def PrintDetails(self):
        print("CD Details:")
        LibraryItem.PrintDetails(self)
        print("Genre:", self.__Genre)

    def __repr__(self):
        return f"CD('{self.Title}', '{self.Author_Artist}', {self.ItemID})"

# Test the classes
if __name__ == "__main__":
    # Test LibraryItem
    item = LibraryItem("Title1", "Author1", 1)
    item.PrintDetails()

    # Test Book
    book = Book("BookTitle", "BookAuthor", 2)
    book.SetIsRequested(borrower_id=101)
    book.PrintDetails()

    # Test CD
    cd = CD("CDTitle", "CDArtist", 3)
    cd.Genre = "Rock"
    cd.PrintDetails()
```

### Task 27.07

#### Use your code from Task 27.06 to write the complete program to implement a simplified library system. Write code to provide the user with a menu to choose an option.

```
1 – Add a new borrower
2 – Add a new book
3 – Add a new CD
4 – Borrow a book
5 – Return a book
6 – Borrow a CD
7 – Return a CD
8 – Request book
9 – Print all details
99 – Exit program
Enter your menu choice:
```

#### An example of a menu that would be suitable is shown in Figure 27.06.

```python
import datetime

class LibraryItem:
    def __init__(self, t, a, i):
        # constructor / initialiser method
        self.__Title = t
        self.__Author_Artist = a
        self.__ItemID = i
        self.__OnLoan = False
        self.__DueDate = datetime.date.today()

    @property
    def Title(self):
        return self.__Title

    @property
    def Author_Artist(self):
        return self.__Author_Artist

    @property
    def ItemID(self):
        return self.__ItemID

    @property
    def OnLoan(self):
        return self.__OnLoan

    @property
    def DueDate(self):
        return self.__DueDate

    def Borrowing(self):
        self.__OnLoan = True
        self.__DueDate = self.__DueDate + datetime.timedelta(weeks=3)

    def Returning(self):
        self.__OnLoan = False

    def PrintDetails(self):
        print(self.__Title, '; ', self.__Author_Artist, '; ', end='')
        print(self.__ItemID, '; ', self.__OnLoan, '; ', self.__DueDate)

    def __repr__(self):
        return f"LibraryItem('{self.__Title}', '{self.__Author_Artist}', {self.__ItemID})"

class Book(LibraryItem):
    def __init__(self, t, a, i):
        # initialiser method
        LibraryItem.__init__(self, t, a, i)
        self.__IsRequested = False
        self.__RequestedBy = None  # New attribute

    @property
    def IsRequested(self):
        return self.__IsRequested

    @IsRequested.setter
    def IsRequested(self, b):
        self.__IsRequested = b

    @property
    def RequestedBy(self):
        return self.__RequestedBy

    def SetIsRequested(self, borrower_id):
        self.__IsRequested = True
        self.__RequestedBy = borrower_id

    def PrintDetails(self):
        print("Book Details:")
        LibraryItem.PrintDetails(self)
        print("Requested:", self.__IsRequested)
        print("Requested By:", self.__RequestedBy)

    def __repr__(self):
        return f"Book('{self.Title}', '{self.Author_Artist}', {self.ItemID})"

class CD(LibraryItem):
    def __init__(self, t, a, i):
        # initialiser method
        LibraryItem.__init__(self, t, a, i)
        self.__Genre = ""

    @property
    def Genre(self):
        return self.__Genre

    @Genre.setter
    def Genre(self, g):
        self.__Genre = g

    def PrintDetails(self):
        print("CD Details:")
        LibraryItem.PrintDetails(self)
        print("Genre:", self.__Genre)

    def __repr__(self):
        return f"CD('{self.Title}', '{self.Author_Artist}', {self.ItemID})"

class Borrower:
    def __init__(self, borrower_name, email_address, borrower_id):
        self.BorrowerName = borrower_name
        self.EmailAddress = email_address
        self.BorrowerID = borrower_id
        self.ItemsOnLoan = 0

    def GetBorrowerName(self):
        return self.BorrowerName

    def GetEmailAddress(self):
        return self.EmailAddress

    def GetBorrowerID(self):
        return self.BorrowerID

    def GetItemsOnLoan(self):
        return self.ItemsOnLoan

    def UpdateItemsOnLoan(self, increment_by):
        self.ItemsOnLoan += increment_by

    def PrintDetails(self):
        print("Borrower Details:")
        print("Borrower Name:", self.GetBorrowerName())
        print("Email Address:", self.GetEmailAddress())
        print("Borrower ID:", self.GetBorrowerID())
        print("Items On Loan:", self.GetItemsOnLoan())

# Function to add a new borrower
def add_borrower():
    name = input("Enter borrower name: ")
    email = input("Enter email address: ")
    borrower_id = int(input("Enter borrower ID: "))
    borrowers.append(Borrower(name, email, borrower_id))
    print("Borrower added successfully!")

# Function to add a new book
def add_book():
    title = input("Enter book title: ")
    author = input("Enter book author: ")
    item_id = int(input("Enter book ID: "))
    books.append(Book(title, author, item_id))
    print("Book added successfully!")

# Function to add a new CD
def add_cd():
    title = input("Enter CD title: ")
    artist = input("Enter CD artist: ")
    item_id = int(input("Enter CD ID: "))
    cds.append(CD(title, artist, item_id))
    print("CD added successfully!")

# Function to borrow a book
def borrow_book():
    book_id = int(input("Enter book ID to borrow: "))
    borrower_id = int(input("Enter borrower ID: "))
    for book in books:
        if book.ItemID == book_id:
            book.Borrowing()
            for borrower in borrowers:
                if borrower.BorrowerID == borrower_id:
                    borrower.UpdateItemsOnLoan(1)
            print("Book borrowed successfully!")
            return
    print("Book not found!")

# Function to return a book
def return_book():
    book_id = int(input("Enter book ID to return: "))
    for book in books:
        if book.ItemID == book_id and book.OnLoan:
            book.Returning()
            for borrower in borrowers:
                if borrower.BorrowerID == book.RequestedBy:
                    borrower.UpdateItemsOnLoan(-1)
            print("Book returned successfully!")
            return
    print("Book not found or not on loan!")

# Function to borrow a CD
def borrow_cd():
    cd_id = int(input("Enter CD ID to borrow: "))
    borrower_id = int(input("Enter borrower ID: "))
    for cd in cds:
        if cd.ItemID == cd_id:
            cd.Borrowing()
            for borrower in borrowers:
                if borrower.BorrowerID == borrower_id:
                    borrower.UpdateItemsOnLoan(1)
            print("CD borrowed successfully!")
            return
    print("CD not found!")

# Function to return a CD
def return_cd():
    cd_id = int(input("Enter CD ID to return: "))
    for cd in cds:
        if cd.ItemID == cd_id and cd.OnLoan:
            cd.Returning()
            for borrower in borrowers:
                if borrower.BorrowerID == cd.RequestedBy:
                    borrower.UpdateItemsOnLoan(-1)
            print("CD returned successfully!")
            return
    print("CD not found or not on loan!")

# Function to request a book
def request_book():
    book_id = int(input("Enter book ID to request: "))
    borrower_id = int(input("Enter borrower ID: "))
    for book in books:
        if book.ItemID == book_id:
            book.SetIsRequested(borrower_id)
            print("Book requested successfully!")
            return
    print("Book not found!")

# Function to print all details
def print_all_details():
    print("\nBorrowers:")
    for borrower in borrowers:
        borrower.PrintDetails()

    print("\nBooks:")
    for book in books:
        book.PrintDetails()

    print("\nCDs:")
    for cd in cds:
        cd.PrintDetails()

# Main program
borrowers = []
books = []
cds = []

while True:
    print("\nMenu:")
    print("1 – Add a new borrower")
    print("2 – Add a new book")
    print("3 – Add a new CD")
    print("4 – Borrow a book")
    print("5 – Return a book")
    print("6 – Borrow a CD")
    print("7 – Return a CD")
    print("8 – Request book")
    print("9 – Print all details")
    print("99 – Exit program")

    choice = input("Enter your menu choice: ")

    if choice == '1':
        add_borrower()
    elif choice == '2':
        add_book()
    elif choice == '3':
        add_cd()
    elif choice == '4':
        borrow_book()
    elif choice == '5':
        return_book()
    elif choice == '6':
        borrow_cd()
    elif choice == '7':
        return_cd()
    elif choice == '8':
        request_book()
    elif choice == '9':
        print_all_details()
    elif choice == '99':
        print("Exiting program. Goodbye!")
        break
    else:
        print("Invalid choice. Please enter a valid menu option.")
```

</details>

## Question 1
