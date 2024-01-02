"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[7521],{2072:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=r(5893),s=r(1151);const c={title:"Notes - File processing and exception handling",sidebar_label:"Notes",slug:"notes",sidebar_position:1},l=void 0,d={id:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/notes",title:"Notes - File processing and exception handling",description:"Some words used here might not be exactly correct. I'm just sticking with whats in the book. classes will be further discussed in other chaptersj under OOP.",source:"@site/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/notes.mdx",sourceDirName:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_25",slug:"/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/notes",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/notes",draft:!1,unlisted:!1,editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/notes.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Notes - File processing and exception handling",sidebar_label:"Notes",slug:"notes",sidebar_position:1},sidebar:"study",previous:{title:"Chapter 26 - File processing and exception handling",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/"},next:{title:"ESQ",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/esq"}},t={},o=[{value:"Records",id:"records",level:2},{value:"File Processing",id:"file-processing",level:2},{value:"Now, please refer to the Pickles note before continuing forward and come back",id:"now-please-refer-to-the-pickles-note-before-continuing-forward-and-come-back",level:4},{value:"Sequential File Processing",id:"sequential-file-processing",level:3},{value:"Random-access file processing",id:"random-access-file-processing",level:3},{value:"Exception Handling",id:"exception-handling",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,i.jsx)(n.p,{children:"Some words used here might not be exactly correct. I'm just sticking with whats in the book. classes will be further discussed in other chaptersj under OOP."})}),"\n",(0,i.jsx)(n.h2,{id:"records",children:"Records"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# class definition\r\n# ---------------------------------------\r\nclass CarRecord:\r\n    def __init__(self): # constructor\r\n        self.VehicleID = ""\r\n        self.Registration = ""\r\n        self.DateOfRegistration = None\r\n        self.EngineSize = 0\r\n        self.PurchasePrice = 0.00\r\n\r\n# example\r\n# ---------------------------------------\r\nThisCar = CarRecord()\r\nThisCar.EngineSize = 2500\r\n\r\n# make a list of 100 car records\r\nCar = [CarRecord() for i in range(100)] \r\nCar[1].EngineSize = 2500\n'})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Pseudocode"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"type definition"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"TYPE CarRecord\r\n    DECLARE VehicleID : STRING // unique identifier and record key\r\n    DECLARE Registration : STRING\r\n    DECLARE DateOfRegistration : DATE\r\n    DECLARE EngineSize : INTEGER\r\n    DECLARE PurchasePrice : CURRENCY\r\nENDTYPE\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"to declare a variable of this type CarRecord"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"DECLARE ThisCar : CarRecord\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"file-processing",children:"File Processing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Random file"}),": a file that stores records at specific addresses that can be accessed directly"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pseudocode File Operations:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Structured English"}),(0,i.jsx)(n.th,{children:"Pseudocode"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Create a file and open it for writing OPENFILE"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<filename> FOR WRITE"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Open a file in append mode"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"OPENFILE <filename> FOR APPEND"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Open a file for reading"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"OPENFILE <filename> FOR READ"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Open a file for random access"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"OPENFILE <filename> FOR RANDOM"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Close a file"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CLOSEFILE <filename>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Write a record to a file"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUTRECORD <filename>, <identifier>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Read a record from a file"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GETRECORD <filename>, <identifier>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Move to a specific disk address within the file"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SEEK <filename>, <address>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Test for end of file"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"EOF(<filename>)"})})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Note that there are two new operations:"}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Structured English"}),(0,i.jsx)(n.th,{children:"Pseudocode"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Write a record to a file"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUTRECORD <filename>, <identifier>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Read a record from a file"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GETRECORD <filename>, <identifier>"})})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"These can be used to directly store records (objects in our memmory) to a file (serialized)"}),"\n",(0,i.jsx)(n.li,{children:"When needed, we can directly load that object to the memmory with pickles"}),"\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.code,{children:".pkl"})," or ",(0,i.jsx)(n.code,{children:".dat"})," file that stores this object is meaning less unless its loaded into memmory using the python's ",(0,i.jsx)(n.code,{children:"pickle"})," module"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"now-please-refer-to-the-pickles-note-before-continuing-forward-and-come-back",children:["Now, please refer to the ",(0,i.jsx)(n.a,{href:"pickles",children:"Pickles note"})," before continuing forward and come back"]}),"\n",(0,i.jsx)(n.h3,{id:"sequential-file-processing",children:"Sequential File Processing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If we have an array of records, we may want to store the records on disk before the program quits, so that we don't lose the data."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"We can open a binary file and write one record after another to the file."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"We can then read the records back into the array when the program is run again."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Python:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import pickle\r\n\r\nCar = [CarRecord() for i in range(100)]\r\n\r\nwith open('CarFile.DAT', 'wb') as file:\r\n    for i in range(100):\r\n        pickle.dump(Car[i], file) # write a whole record to the binary file\r\n\r\nCar = []\r\nwith open('CarFile.DAT', 'rb') as file:\r\n    while True: # check for end of file\r\n        Car.append(pickle.load(file)) # append record from file to end of list\n"})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Pseudocode"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Saving contents of array"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"OPENFILE CarFile FOR WRITE\r\nFOR i \u2190 1 TO MaxRecords\r\n    PUTRECORD CarFile, Car[i]\r\nNEXT i\r\nCLOSEFILE CarFile \n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Restoring contents of array"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"OPENFILE CarFile FOR READ\r\nFOR i \u2190 1 TO MaxRecords\r\n    GETRECORD CarFile, Car[i]\r\nNEXT i\r\nCLOSEFILE CarFile \n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"random-access-file-processing",children:"Random-access file processing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Python:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import pickle\r\n\r\nclass CarRecord:\r\n    def __init__(self, VehicleID):\r\n        self.VehicleID = VehicleID\r\n\r\n# Writing a record to the file\r\nThisCar = CarRecord(VehicleID='12345') \r\nAddress = hash(ThisCar.VehicleID)\r\n\r\nwith open('CarFile.DAT', 'rb+') as CarFile: # rb+ - can append\r\n    CarFile.seek(Address)\r\n    pickle.dump(ThisCar, CarFile)\r\n\r\n\r\n# Reading a record from the file\r\nVehicleID_to_find = '12345' \r\n\r\nwith open('CarFile.DAT', 'rb') as CarFile:\r\n    Address = hash(VehicleID_to_find)\r\n    CarFile.seek(Address)    \r\n    ThisCar = pickle.load(CarFile)\r\n\r\n# Print the loaded record\r\nprint(f\"Loaded Record: VehicleID - {ThisCar.VehicleID}\")\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To retrieve a record based on a given VehicleID,","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the file is opened in read mode (",(0,i.jsx)(n.code,{children:"rb"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"The file pointer is moved to the calculated address using seek,"}),"\n",(0,i.jsx)(n.li,{children:"and then pickle.load is used to deserialize (load) the record from the file."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Pseudocode"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Saving a record"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"OPENFILE CarFile FOR RANDOM\r\nAddress \u2190 Hash(ThisCar.VehicleID)\r\nSEEK CarFile, Address\r\nPUTRECORD CarFile, ThisCar\r\nCLOSEFILE CarFile\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retrieving a record"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"OPENFILE CarFile FOR RANDOM\r\nAddress \u2190 Hash(ThisCar.VehicleID)\r\nSEEK CarFile, Address\r\nPUTRECORD CarFile, ThisCar\r\nCLOSEFILE CarFile \n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"exception-handling",children:"Exception Handling"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"essential for writing robust and error-tolerant code."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"allows developers to gracefully handle unexpected errors and prevent program crashes"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Try-Except Block:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Syntax:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"try:\r\n    # Code that might raise an exception\r\n    # ...\r\nexcept SomeSpecificException as e:\r\n    # Handle specific exception\r\n    # ...\r\nexcept AnotherSpecificException as e:\r\n    # Handle another specific exception\r\n    # ...\r\nexcept Exception as e:\r\n    # Handle generic exception\r\n    # ...\r\nelse:\r\n    # Executed if no exception occurs in the try block\r\n    # ...\r\nfinally:\r\n    # Always executed, regardless of whether an exception occurred or not\r\n    # ...\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'try:\r\n    # Code that might raise an exception\r\n    result = 10 / 0\r\nexcept ZeroDivisionError:\r\n    # Handling a specific exception\r\n    print("Error: Cannot divide by zero!")\r\nexcept Exception as e:\r\n    # Handling a generic exception\r\n    print(f"An error occurred: {e}")\r\nelse:\r\n    # Executed if no exception occurs in the try block\r\n    print("No errors!")\r\nfinally:\r\n    # Always executed, regardless of whether an exception occurred or not\r\n    print("Finally block executed.")\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Common Exception Types:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"IOError"}),": for example, a file cannot be opened"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ImportError"}),": Python cannot find the module"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ValueError"}),": an argument has an inappropriate value"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"KeyboardInterrupt"}),": the user presses Ctrl+C or Ctrl+Del"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EOFError"}),": a file-read meets an end-of-file condition"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZeroDivisionError"}),": a division by zero has been attempted"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Finally Block:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"finally"})," block is optional and is used for code that must be executed regardless of whether an exception occurred."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"try:\r\n    # Code that may raise an exception\r\nexcept ExceptionType as e:\r\n    # Code to handle the exception\r\nfinally:\r\n    # Code that always runs, regardless of exceptions\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Custom Exceptions:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Developers can create custom exception classes by inheriting from the ",(0,i.jsx)(n.code,{children:"Exception"})," class."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class CustomError(Exception):\r\n    def __init__(self, message):\r\n        self.message = message\r\n\r\ntry:\r\n    raise CustomError("This is a custom exception")\r\nexcept CustomError as e:\r\n    print("Custom Error:", e.message)\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Pseudocode"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"TRY\r\n    <statementsA>\r\nEXCEPT\r\n    <statementsB>\r\nENDTRY\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>l});var i=r(7294);const s={},c=i.createContext(s);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);