"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[340],{2254:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var s=i(5893),r=i(1151);const t={title:"Pickle for Data Serialization in Python",sidebar_label:"Pickles",slug:"pickles",sidebar_position:3},l=void 0,c={id:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/pickles",title:"Pickle for Data Serialization in Python",description:"- Basic Tutorial:",source:"@site/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/pickles.md",sourceDirName:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_25",slug:"/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/pickles",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/pickles",draft:!1,unlisted:!1,editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/pickles.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Pickle for Data Serialization in Python",sidebar_label:"Pickles",slug:"pickles",sidebar_position:3},sidebar:"study",previous:{title:"ESQ",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/esq"},next:{title:"Edexcel IAL",permalink:"/docs/study/edexcel_ial/"}},o={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Pickling and Unpickling",id:"basic-pickling-and-unpickling",level:2},{value:"(Extra) Customizing Pickle Behaviour",id:"extra-customizing-pickle-behaviour",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Basic Tutorial:"}),"\n"]}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6Q56r_fVqgw?si=Bkf3xfQEikWgVWhY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Advanced Tutorial:"}),"\n"]}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qt15PnF8x-M?si=h1ylVhPNvVJDHk9C",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.python.org/3/library/pickle.html#",children:"Click here"})," for official documentation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.datacamp.com/tutorial/pickle-python-tutorial",children:"Click here"})," for a great guide"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pickle is a module in Python that allows you to serialize and deserialize objects.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Serialization"})," is the process of converting a Python object into a byte stream, and"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Deserialization"})," is the reverse process, where you recreate the original Python object from a byte stream."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Pickle is particularly useful for saving (persistently, on disk) and loading complex data structures, such as dictionaries, lists, or custom objects."}),"\n",(0,s.jsx)(n.li,{children:"It is commonly used for storing and exchanging data between Python programs or for persisting data to disk"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basic-pickling-and-unpickling",children:"Basic Pickling and Unpickling"}),"\n",(0,s.jsxs)(n.admonition,{title:"note",type:"warning",children:[(0,s.jsx)(n.p,{children:"Please deal with the files in binary mode (to prevent encoding issues):"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"wb"})," - write in binary mode"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rb"})," - read in binary mode"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pickling and Dumping to a file"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import pickle\r\n\r\n# Note: we can serialize and dump anything, dict, list, or even our own classes\r\n# data_to_pickle = {'name': 'John', 'age': 30, 'city': 'New York'}\r\n\r\n# in this example: `CarRecord` is our own class\r\ndata_to_pickle = CarRecord(\"Toyota\")\r\ndata_to_pickle.number = 10\r\nprint(data_to_pickle.number) # 10\r\n\r\n# Pickling (Serialize)\r\nwith open('data.pkl', 'wb') as file:\r\n    pickle.dump(data_to_pickle, file)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Loading and Unpickling from a file"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Unpickling (Deserialize)\r\nwith open('data.pkl', 'rb') as file:\r\n    loaded_data: CarRecord = pickle.load(file) # (optionally) mention our data type for Intellisense in IDE\r\n\r\nprint(loaded_data.data.number) # 10\n"})}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Pseudocode"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["dump: ",(0,s.jsx)(n.code,{children:"PUTRECORD Data, Data"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"OPENFILE CarFile FOR WRITE\r\nFOR i \u2190 1 TO MaxRecords\r\n    PUTRECORD CarFile, Car[i]\r\nNEXT i\r\nCLOSEFILE CarFile\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["load: ",(0,s.jsx)(n.code,{children:"GETRECORD Data, Data"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"OPENFILE CarFile FOR READ\r\nFOR i \u2190 1 TO MaxRecords\r\n    GETRECORD CarFile, Car[i]\r\nNEXT i\r\nCLOSEFILE CarFile\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"extra-customizing-pickle-behaviour",children:"(Extra) Customizing Pickle Behaviour"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"__reduce__"})," method (another ",(0,s.jsx)(n.a,{href:"https://docs.python.org/3/reference/datamodel.html#special-method-names",children:"dunder method"}),") in Python is used for customizing the behavior of object serialization and deserialization when using the ",(0,s.jsx)(n.code,{children:"pickle"})," module."]}),"\n",(0,s.jsxs)(n.li,{children:["by implementing this method in your class,","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"you gain control over how instances of your class are pickled and unpickled."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here's a breakdown of how it works:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"__reduce__"})," Method:"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__reduce__"})," method is a special method in Python classes that allows you to define custom behavior during pickling."]}),"\n",(0,s.jsx)(n.li,{children:"It should return either a string (indicating a global name of a function or a class to be called) or a tuple. The tuple should contain a callable (function or class), followed by arguments to pass to that callable."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Tuple Structure:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the example, the ",(0,s.jsx)(n.code,{children:"__reduce__"})," method returns a tuple ",(0,s.jsx)(n.code,{children:"(self.__class__, (self.data,))"}),". This tuple specifies that when an instance of ",(0,s.jsx)(n.code,{children:"CustomObject"})," is pickled, it should be reduced to a tuple containing the class itself (",(0,s.jsx)(n.code,{children:"self.__class__"}),") and a tuple of arguments to recreate the object (",(0,s.jsx)(n.code,{children:"(self.data,)"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Pickling:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When you use ",(0,s.jsx)(n.code,{children:"pickle.dump(custom_obj, file)"}),", the ",(0,s.jsx)(n.code,{children:"__reduce__"})," method is called during the pickling process. It returns the necessary information for pickling the object."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Unpickling:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["During unpickling (",(0,s.jsx)(n.code,{children:"pickle.load(file)"}),"), the information returned by ",(0,s.jsx)(n.code,{children:"__reduce__"})," is used to recreate the object. In this case, it creates a new instance of ",(0,s.jsx)(n.code,{children:"CustomObject"})," using the class and arguments specified in the tuple."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example Code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import pickle\r\n\r\nclass CustomObject:\r\n    def __init__(self, data):\r\n        self.data = data\r\n\r\n    def __reduce__(self):\r\n        # Returns a tuple containing class and arguments for object recreation\r\n        return (self.__class__, (self.data,))\r\n\r\n# Pickling\r\ncustom_obj = CustomObject('Custom data')\r\nwith open('custom_data.pkl', 'wb') as file:\r\n    pickle.dump(custom_obj, file)\r\n\r\n# Unpickling\r\nwith open('custom_data.pkl', 'rb') as file:\r\n    loaded_custom_obj = pickle.load(file)\r\n\r\nprint(loaded_custom_obj.data)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This example demonstrates how to implement ",(0,s.jsx)(n.code,{children:"__reduce__"})," in a class (",(0,s.jsx)(n.code,{children:"CustomObject"}),") to customize its pickling and unpickling behavior."]}),"\n",(0,s.jsx)(n.li,{children:"The result is that the pickled and unpickled object retains its original state."}),"\n",(0,s.jsx)(n.li,{children:"We can customize this to our needs"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.synopsys.com/blogs/software-security/python-pickling.html#:~:text=Whenever%20an%20object%20is%20pickled,reconstruct%20this%20object%20when%20unpickling.",children:"Click here"})," to learn more"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var s=i(7294);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);