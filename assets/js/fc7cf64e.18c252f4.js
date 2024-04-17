"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[5031],{23021:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(11527),a=s(56213);const i={title:"Notes - Object-Oriented Programming (OOP)",sidebar_label:"Notes",slug:"notes",sidebar_position:1},r=void 0,l={id:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/notes",title:"Notes - Object-Oriented Programming (OOP)",description:"Introduction",source:"@site/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/notes.md",sourceDirName:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_27",slug:"/study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/notes",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/notes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Notes - Object-Oriented Programming (OOP)",sidebar_label:"Notes",slug:"notes",sidebar_position:1},sidebar:"study",previous:{title:"Chapter 27 - Object-Oriented Programming (OOP)",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/"},next:{title:"ESQ",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/esq"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Functional Approach",id:"functional-approach",level:3},{value:"Object-Oridented Approach",id:"object-oridented-approach",level:3},{value:"What is OOP?",id:"what-is-oop",level:2},{value:"Defining a class",id:"defining-a-class",level:2},{value:"Instantiating an Object",id:"instantiating-an-object",level:2},{value:"Constructor (<code>__init__</code>)",id:"constructor-__init__",level:3},{value:"Class Variables vs Instance Variables",id:"class-variables-vs-instance-variables",level:3},{value:"Variable Scopes",id:"variable-scopes",level:3},{value:"<strong>Normal Variables:</strong>",id:"normal-variables",level:4},{value:"<strong>Private Variables:</strong>",id:"private-variables",level:4},{value:"Methods",id:"methods",level:2},{value:"Class Methods",id:"class-methods",level:3},{value:"Static Methods",id:"static-methods",level:3},{value:"Dunder Methods",id:"dunder-methods",level:3},{value:"OOP Concepts",id:"oop-concepts",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you are looking for OOP Concepts only, ",(0,t.jsx)(n.a,{href:"oop",children:"click here"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Great video that covers the majority of theory:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Ej_02ICOIgs?si=-cAUyirCZyj9VUPu",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Let's illustrate the difference between a functional approach using global variables and an object-oriented approach in Python"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"functional-approach",children:"Functional Approach"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Functional approach with global variables\r\nglobal_data = []\r\n\r\ndef add_data(value):\r\n    global global_data\r\n    global_data.append(value)\r\n\r\ndef process_data():\r\n    global global_data\r\n    for item in global_data:\r\n        print(f"Processing data: {item}")\r\n\r\n# Using the functions with a single dataset\r\nadd_data(10)\r\nadd_data(20)\r\nprocess_data()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, ",(0,t.jsx)(n.code,{children:"global_data"})," is a global variable that functions (",(0,t.jsx)(n.code,{children:"add_data"})," and ",(0,t.jsx)(n.code,{children:"process_data"}),") operate on. This approach can become problematic when dealing with multiple datasets, as they all share the same global space."]}),"\n",(0,t.jsx)(n.h3,{id:"object-oridented-approach",children:"Object-Oridented Approach"}),"\n",(0,t.jsx)(n.p,{children:"Don't worry if you don't understand the code below, we will be looking at everything in detail later."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Object-oriented approach\r\nclass Dataset:\r\n    def __init__(self):\r\n        self.data = []\r\n\r\n    def add_data(self, value):\r\n        self.data.append(value)\r\n\r\n    def process_data(self):\r\n        for item in self.data:\r\n            print(f"Processing data: {item}")\r\n\r\n# Using the class with multiple datasets\r\ndataset1 = Dataset()\r\ndataset1.add_data(10)\r\ndataset1.add_data(20)\r\ndataset1.process_data()\r\n\r\ndataset2 = Dataset()\r\ndataset2.add_data(30)\r\ndataset2.add_data(40)\r\ndataset2.process_data()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this object-oriented example, the ",(0,t.jsx)(n.code,{children:"Dataset"})," class encapsulates the data and behavior related to a dataset. Instances (",(0,t.jsx)(n.code,{children:"dataset1"})," and ",(0,t.jsx)(n.code,{children:"dataset2"}),") maintain their own state, avoiding global conflicts. This makes it easier to manage multiple datasets, as each instance operates independently."]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-oop",children:"What is OOP?"}),"\n",(0,t.jsxs)(n.p,{children:["Object-oriented programming is a programming paradigm that provides a means of structuring programs so that properties and behaviors are bundled into individual ",(0,t.jsx)(n.strong,{children:"objects"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, an object could represent a person with ",(0,t.jsx)(n.strong,{children:"properties"})," like a name, age, and address and ",(0,t.jsx)(n.strong,{children:"behaviors"})," such as walking, talking, breathing, and running. Or it could represent an email with properties like a recipient list, subject, and body and behaviors like adding attachments and sending."]}),"\n",(0,t.jsx)(n.p,{children:"Put another way, object-oriented programming is an approach for modeling concrete, real-world things, like cars, as well as relations between things, like companies and employees or students and teachers. OOP models real-world entities as software objects that have some data associated with them and can perform certain operations."}),"\n",(0,t.jsx)(n.p,{children:"The key takeaway is that objects are at the center of object-oriented programming in Python."}),"\n",(0,t.jsx)(n.h2,{id:"defining-a-class",children:"Defining a class"}),"\n",(0,t.jsx)(n.p,{children:"You start all class definitions with the class keyword, then add the name of the class and a colon. Python will consider any code that you indent below the class definition as part of the class\u2019s body."}),"\n",(0,t.jsx)(n.p,{children:"Here\u2019s an example of a Dog class:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Dog:\r\n    pass\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"note",type:"note",children:(0,t.jsxs)(n.p,{children:["The body of the Dog class consists of a single statement: the ",(0,t.jsx)(n.code,{children:"pass"})," keyword. Python programmers often use pass as a placeholder indicating where code will eventually go. It allows you to run this code without Python throwing an error."]})}),"\n",(0,t.jsx)(n.admonition,{title:"note",type:"info",children:(0,t.jsxs)(n.p,{children:["Python class names are written in ",(0,t.jsxs)(n.a,{href:"https://en.wikipedia.org/wiki/Camel_case#Variations_and_synonyms",children:[(0,t.jsx)(n.code,{children:"CapitalizedWords"})," notation"]})," by convention. For example, a class for a specific breed of dog, like the Jack Russell Terrier, would be written as JackRussellTerrier."]})}),"\n",(0,t.jsx)(n.h2,{id:"instantiating-an-object",children:"Instantiating an Object"}),"\n",(0,t.jsx)(n.p,{children:"Object instantiation is the process of creating an instance of a class. When you define a class, you're essentially creating a blueprint for objects."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Creating an instance of the Dog class\r\nmy_dog = Dog()\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"my_dog"})," is assigned as the identifier for the new object."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"my_dog"})," represents an instance of the ",(0,t.jsx)(n.code,{children:"Dog()"})," class, embodying the attributes and behaviors specified within the class definition."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"constructor-__init__",children:["Constructor (",(0,t.jsx)(n.code,{children:"__init__"}),")"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When an object is being instantiated, the constructor is automatically and immediately executed (called 'Automatic Invocation')."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The constructor is defined using the ",(0,t.jsx)(n.code,{children:"__init__()"})," method (basically a function) within the class."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Class definition\r\n# -------------------------------\r\nclass Dog:\r\n    def __init__(self):\r\n        print("Object Instantiated")\r\n\r\n# Object instantiation\r\n# -------------------------------\r\nmy_dog = Dog()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, as soon as ",(0,t.jsx)(n.code,{children:"my_dog"})," is created, the constructor ",(0,t.jsx)(n.code,{children:"__init__()"})," is triggered, resulting in the console output of ",(0,t.jsx)(n.code,{children:'"Object Instantiated"'}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:[(0,t.jsx)(n.code,{children:"self"})," argument"]}),(0,t.jsxs)(n.p,{children:["In this code, ",(0,t.jsx)(n.code,{children:"self"})," is a reference to the instance of the ",(0,t.jsx)(n.code,{children:"Dog"})," class. It allows the instance to access and modify its own attributes and methods. In the ",(0,t.jsx)(n.code,{children:"__init__"})," method, ",(0,t.jsx)(n.code,{children:"self"})," represents the instance being created, and it is automatically passed when the method is called during object instantiation."]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Class definition\r\n# -------------------------------\r\nclass Dog:\r\n    # Class attribute\r\n    species = "Canis familiaris"\r\n\r\n    # Constructor with custom variables\r\n    def __init__(self, name, age):\r\n        self.name = name  # Instance attribute\r\n        self.age = age    # Instance attribute\r\n        print("Dog object created")\r\n\r\n    # Instance method\r\n    def bark(self):\r\n        print(f"{self.name} says Woof!")\r\n\r\n    # Another instance method using the bark method\r\n    def celebrate_birthday(self):\r\n        self.age += 1\r\n        self.bark() # note the self.method_name() syntax here, just like for attributes\r\n        print(f"{self.name} is now {self.age} years old!")\r\n\r\n# Object instantiation with custom variables\r\n# -------------------------------\r\nmy_dog = Dog(name="Buddy", age=3) # note that we don\'t pass in anything for self\r\n                                  # as its handled automatically\r\n                                  # we pass in values for __init__ function (constructor)\r\n\r\n# Using instance methods\r\nmy_dog.celebrate_birthday()\r\n\r\n# Accessing class attribute\r\nprint(f"All dogs belong to the species: {Dog.species}")\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this updated code:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"age"})," are custom variables passed to the ",(0,t.jsx)(n.code,{children:"__init__"})," method. These become instance attributes (",(0,t.jsx)(n.code,{children:"self.name"})," and ",(0,t.jsx)(n.code,{children:"self.age"}),") when the object is instantiated."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"species"})," is a class attribute shared among all instances of the ",(0,t.jsx)(n.code,{children:"Dog"})," class."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bark"})," is an instance method that can access instance attributes using ",(0,t.jsx)(n.code,{children:"self"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"learn more",type:"info",children:(0,t.jsxs)(n.p,{children:["Read ",(0,t.jsx)(n.a,{href:"https://realpython.com/python-class-constructor/",children:(0,t.jsx)(n.strong,{children:"Python Class Constructors: Control Your Object Instantiation by Leodanis Pozo Ramos"})})," for additional information."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Example: continuing the above example,"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"my_dog = Dog() # this would raise an error\r\n\r\n# Traceback (most recent call last):\r\n#   ...\r\n# TypeError: __init__() missing 2 required positional arguments: 'name' and 'age'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"class-variables-vs-instance-variables",children:"Class Variables vs Instance Variables"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Class Attributes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Shared among all instances."}),"\n",(0,t.jsx)(n.li,{children:"Defined outside methods within the class."}),"\n",(0,t.jsx)(n.li,{children:"Accessed and modified using the class name."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Instance Attributes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Unique to each instance."}),"\n",(0,t.jsxs)(n.li,{children:["Defined within methods using ",(0,t.jsx)(n.code,{children:"self"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Accessed and modified using the instance name."}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Aspect"}),(0,t.jsx)(n.th,{children:"Class Attributes"}),(0,t.jsx)(n.th,{children:"Instance Attributes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Scope"})}),(0,t.jsx)(n.td,{children:"Belong to the class and are shared among all instances."}),(0,t.jsx)(n.td,{children:"Belong to individual instances and are unique to each object."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Declaration"})}),(0,t.jsx)(n.td,{children:"Defined outside methods within the class."}),(0,t.jsxs)(n.td,{children:["Defined within methods using ",(0,t.jsx)(n.code,{children:"self"})," keyword."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Modification"})}),(0,t.jsx)(n.td,{children:"Modified by accessing through the class name. Changes affect all instances."}),(0,t.jsx)(n.td,{children:"Modified by accessing through the instance. Changes affect only that instance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Initialization"})}),(0,t.jsx)(n.td,{children:"Often set during class definition or within class methods outside the constructor."}),(0,t.jsxs)(n.td,{children:["Set within the class constructor (",(0,t.jsx)(n.code,{children:"__init__"}),") using ",(0,t.jsx)(n.code,{children:"self"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Access"})}),(0,t.jsxs)(n.td,{children:["Accessed using the class name. (e.g., ",(0,t.jsx)(n.code,{children:"Classname.attribute"}),")"]}),(0,t.jsxs)(n.td,{children:["Accessed using the instance name. (e.g., ",(0,t.jsx)(n.code,{children:"instance_name.attribute"}),")"]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"variable-scopes",children:"Variable Scopes"}),"\n",(0,t.jsx)(n.h4,{id:"normal-variables",children:(0,t.jsx)(n.strong,{children:"Normal Variables:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Declared without any prefix."}),"\n",(0,t.jsx)(n.li,{children:"Accessible both within the class and externally."}),"\n",(0,t.jsx)(n.li,{children:"Follow conventional naming standards but are not enforced."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Car:\r\n    def __init__(self, model, year):\r\n        self.model = model  # Normal variable\r\n        self.year = year    # Normal variable\r\n\r\nmy_car = Car(model="Sedan", year=2022)\r\nprint(f"Model: {my_car.model}, Year: {my_car.year}")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"private-variables",children:(0,t.jsx)(n.strong,{children:"Private Variables:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Declared with a double underscore prefix (",(0,t.jsx)(n.code,{children:"__"}),").","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Private variables, marked with a double underscore, enhance encapsulation (let's discuss this later) by restricting direct access from outside the class. This helps maintain data integrity and control access to sensitive information."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Intended to be accessed and modified only within the class."}),"\n",(0,t.jsx)(n.li,{children:"Provides encapsulation and data hiding."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class BankAccount:\r\n    def __init__(self, balance):\r\n        self.__balance = balance  # Private variable\r\n\r\n    def deposit(self, amount):\r\n        self.__balance += amount\r\n\r\n    def get_balance(self):\r\n        return self.__balance\r\n\r\n# Using private variable\r\naccount = BankAccount(balance=1000)\r\naccount.deposit(500)\r\nprint(f"Current Balance: {account.get_balance()}")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feature"}),(0,t.jsx)(n.th,{children:"Class Methods"}),(0,t.jsx)(n.th,{children:"Static Methods"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Decorator"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@classmethod"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@staticmethod"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"First Parameter"})}),(0,t.jsxs)(n.td,{children:["Takes the class (",(0,t.jsx)(n.code,{children:"cls"}),") as the first parameter."]}),(0,t.jsx)(n.td,{children:"Does not take a reference to the class or instance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Access to Class Variables"})}),(0,t.jsx)(n.td,{children:"Can access and modify class-level variables."}),(0,t.jsx)(n.td,{children:"Cannot access or modify class-level variables directly."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Use Cases"})}),(0,t.jsx)(n.td,{children:"Used for operations related to the class and may involve class-level data. Often used for alternative constructors, working with class-specific attributes."}),(0,t.jsx)(n.td,{children:"Used when the method is related to the class but doesn't depend on class-level data. Typically used for utility functions within the class."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"class-methods",children:"Class Methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Class methods are defined using the ",(0,t.jsx)(n.code,{children:"@classmethod"})," decorator."]}),"\n",(0,t.jsx)(n.li,{children:"They take the class itself as the first parameter (self)"}),"\n",(0,t.jsx)(n.li,{children:"Class methods can be used for operations that are related to the class and not dependent on instance-specific data."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class MyClass:\r\n    class_variable = 10\r\n\r\n    @classmethod\r\n    def class_method(self, x):\r\n        return self.class_variable * x\r\n\r\n# Creating an instance of MyClass\r\nmy_instance = MyClass()\r\n\r\n# Using the class method with the instantiated object\r\nresult = my_instance.class_method(5)\r\nprint(result)  # Output: 50\n"})}),"\n",(0,t.jsx)(n.h3,{id:"static-methods",children:"Static Methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Static methods are defined using the ",(0,t.jsx)(n.code,{children:"@staticmethod"})," decorator."]}),"\n",(0,t.jsx)(n.li,{children:"They do not take a reference to the class or instance as their first parameter."}),"\n",(0,t.jsx)(n.li,{children:"Static methods are typically used when the method does not depend on class or instance-specific data"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class MathOperations:\r\n    @staticmethod\r\n    def add(a, b):\r\n        return a + b\r\n\r\n# Using the static method without creating an instance\r\nresult = MathOperations.add(3, 7)\r\nprint(result)  # Output: 10\n"})}),"\n",(0,t.jsx)(n.h3,{id:"dunder-methods",children:"Dunder Methods"}),"\n",(0,t.jsx)(n.admonition,{title:"note",type:"warning",children:(0,t.jsxs)(n.p,{children:["This part is ",(0,t.jsx)(n.strong,{children:"NOT"})," in the syllabus, but it's great to know."]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"dunder",children:(0,t.jsx)(n.strong,{children:"Click here"})})," to learn more"]}),"\n",(0,t.jsx)(n.h2,{id:"oop-concepts",children:"OOP Concepts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"oop",children:[(0,t.jsx)(n.strong,{children:"Click here"})," to open the note"]})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"note",type:"warning",children:(0,t.jsxs)(n.p,{children:["This is ",(0,t.jsx)(n.strong,{children:"important"}),"! Click the above text to open the note."]})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.admonition,{title:"References",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://realpython.com/python3-object-oriented-programming/",children:'"Object-Oriented Programming (OOP) in Python 3" by David Amos (realpython.com)'})}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},56213:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(50959);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);