"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[4837],{8138:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>_,toc:()=>o});var s=r(1527),t=r(6213);const i={title:"Dunder Methods",sidebar_label:"Dunder Methods",slug:"dunder",sidebar_position:3},l=void 0,_={id:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/dunder",title:"Dunder Methods",description:'- Dunder methods, or "double underscore" methods, are special methods in Python classes.',source:"@site/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/dunder.md",sourceDirName:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_27",slug:"/study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/dunder",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/dunder",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Dunder Methods",sidebar_label:"Dunder Methods",slug:"dunder",sidebar_position:3},sidebar:"study",previous:{title:"ESQ",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/esq"},next:{title:"OOP Concepts",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_27/oop"}},d={},o=[{value:"1. <code>__init__</code>",id:"1-__init__",level:2},{value:"2. <code>__str__</code>",id:"2-__str__",level:2},{value:"3. <code>__repr__</code>",id:"3-__repr__",level:2},{value:"4. <code>__len__</code>",id:"4-__len__",level:2},{value:"5. <code>__getitem__</code>",id:"5-__getitem__",level:2},{value:"6. <code>__del__</code>",id:"6-__del__",level:2},{value:"7. <code>__call__</code>",id:"7-__call__",level:2},{value:"8. <code>__iter__</code> and <code>__next__</code>",id:"8-__iter__-and-__next__",level:2},{value:"9. <code>__eq__</code> and <code>__ne__</code>",id:"9-__eq__-and-__ne__",level:2},{value:"10. <code>__add__</code>",id:"10-__add__",level:2},{value:"11. <code>__sub__</code>",id:"11-__sub__",level:2},{value:"13. <code>__contains__</code>",id:"13-__contains__",level:2},{value:"Others",id:"others",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Dunder methods, or "double underscore" methods, are special methods in Python classes.'}),"\n",(0,s.jsxs)(n.li,{children:["These methods are identified by names enclosed within double underscores, such as ",(0,s.jsx)(n.strong,{children:"init"})," and ",(0,s.jsx)(n.strong,{children:"str"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Dunder methods provide hooks to customize fundamental operations for objects, including initialization, string representation, and arithmetic operations."}),"\n",(0,s.jsx)(n.li,{children:"Leveraging dunder methods enhances code expressiveness and flexibility in creating more intuitive and powerful Python classes."}),"\n",(0,s.jsx)(n.li,{children:"Lets discuss some of the main dunder methods for classes in Python."}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"1-__init__",children:["1. ",(0,s.jsx)(n.a,{href:"#constructor-__init__",children:(0,s.jsx)(n.code,{children:"__init__"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Already discussed. ",(0,s.jsx)(n.a,{href:"notes#constructor-__init__",children:"Click here"})," to open that note."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"2-__str__",children:["2. ",(0,s.jsx)(n.code,{children:"__str__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"String Representation Method"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__str__"})," method is called by the ",(0,s.jsx)(n.code,{children:"str()"})," function and ",(0,s.jsx)(n.code,{children:"print()"})," to get a human-readable string representation."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class Person:\r\n    def __init__(self, name, age):\r\n        self.name = name\r\n        self.age = age\r\n\r\n    def __str__(self):\r\n        return f"{self.name}, {self.age} years old"\r\n\r\n# Using the __str__ method\r\nprint(str(Person(name="John", age=25)))\r\n# Output: John, 25 years old\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"3-__repr__",children:["3. ",(0,s.jsx)(n.code,{children:"__repr__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unambiguous Representation Method"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__repr__"})," method is called by the ",(0,s.jsx)(n.code,{children:"repr()"})," function and is used for a more detailed, unambiguous representation, often for debugging."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class Person:\r\n    def __init__(self, name, age):\r\n        self.name = name\r\n        self.age = age\r\n\r\n    def __repr__(self):\r\n        return f"Person(name={self.name}, age={self.age})"\r\n\r\n# Using the __repr__ method\r\nprint(repr(Person(name="John", age=25)))\r\n# Output: Person(name=John, age=25)\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"4-__len__",children:["4. ",(0,s.jsx)(n.code,{children:"__len__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Length Method"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__len__"})," method is called by the built-in ",(0,s.jsx)(n.code,{children:"len()"})," function. It should return the length of the object."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Stack:\r\n    def __init__(self):\r\n        self.items = []\r\n\r\n    def push(self, item):\r\n        self.items.append(item)\r\n\r\n    def __len__(self):\r\n        return len(self.items)\r\n\r\n# Using the __len__ method\r\nstack = Stack()\r\nstack.push(1)\r\nstack.push(2)\r\nprint(len(stack))\r\n# Output: 2\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"5-__getitem__",children:["5. ",(0,s.jsx)(n.code,{children:"__getitem__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Item Access Method"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__getitem__"})," method is called to retrieve the value at a specific index using square bracket notation."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class MyList:\r\n    def __init__(self, data):\r\n        self.data = data\r\n\r\n    def __getitem__(self, index):\r\n        return self.data[index]\r\n\r\n# Using the __getitem__ method\r\nmy_list = MyList([1, 2, 3, 4, 5])\r\nprint(my_list[2])\r\n# Output: 3\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"6-__del__",children:["6. ",(0,s.jsx)(n.code,{children:"__del__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Destructor Method"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__del__"})," method is called when an object is about to be destroyed. It can be used for cleanup activities."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class MyClass:\r\n    def __del__(self):\r\n        print("Object deleted")\r\n\r\n# Object instantiation\r\nobj = MyClass()\r\n\r\n# Object deletion\r\ndel obj  # Output: Object deleted\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"7-__call__",children:["7. ",(0,s.jsx)(n.code,{children:"__call__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Call Method"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__call__"})," method allows an object to be called as a function."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class CallableClass:\r\n    def __call__(self, x):\r\n        return x * 2\r\n\r\n# Object instantiation\r\nobj = CallableClass()\r\n\r\n# Using the __call__ method\r\nresult = obj(5)\r\nprint(result)\r\n# Output: 10\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"8-__iter__-and-__next__",children:["8. ",(0,s.jsx)(n.code,{children:"__iter__"})," and ",(0,s.jsx)(n.code,{children:"__next__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Iterable Protocol"}),"\n",(0,s.jsxs)(n.li,{children:["Implementing ",(0,s.jsx)(n.code,{children:"__iter__"})," and ",(0,s.jsx)(n.code,{children:"__next__"})," allows an object to be an iterable, supporting iteration using ",(0,s.jsx)(n.code,{children:"for"})," loops."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Counter:\r\n    def __init__(self, limit):\r\n        self.limit = limit\r\n        self.current = 0\r\n\r\n    def __iter__(self):\r\n        return self\r\n\r\n    def __next__(self):\r\n        if self.current < self.limit:\r\n            self.current += 1\r\n            return self.current - 1\r\n        else:\r\n            raise StopIteration\r\n\r\n# Using the iterable\r\ncounter = Counter(limit=5)\r\nfor num in counter:\r\n    print(num)\r\n# Output: 0 1 2 3 4\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"9-__eq__-and-__ne__",children:["9. ",(0,s.jsx)(n.code,{children:"__eq__"})," and ",(0,s.jsx)(n.code,{children:"__ne__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Equality Methods"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__eq__"})," and ",(0,s.jsx)(n.code,{children:"__ne__"})," methods allow you to customize the behavior of equality and inequality comparisons."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Point:\r\n    def __init__(self, x, y):\r\n        self.x = x\r\n        self.y = y\r\n\r\n    def __eq__(self, other):\r\n        return self.x == other.x and self.y == other.y\r\n\r\n    def __ne__(self, other):\r\n        return not self.__eq__(other)\r\n\r\n# Object instantiation\r\npoint1 = Point(1, 2)\r\npoint2 = Point(1, 2)\r\n\r\n# Using the equality methods\r\nprint(point1 == point2)  # Output: True\r\nprint(point1 != point2)  # Output: False\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"10-__add__",children:["10. ",(0,s.jsx)(n.code,{children:"__add__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Addition Method"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__add__"})," method allows objects of a class to define the behavior of the ",(0,s.jsx)(n.code,{children:"+"})," operator."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Point:\r\n    def __init__(self, x, y):\r\n        self.x = x\r\n        self.y = y\r\n\r\n    def __add__(self, other):\r\n        return Point(self.x + other.x, self.y + other.y)\r\n\r\n# Object instantiation\r\npoint1 = Point(1, 2)\r\npoint2 = Point(3, 4)\r\n\r\n# Using the __add__ method\r\nresult = point1 + point2\r\nprint(result.x, result.y)\r\n# Output: 4 6\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"11-__sub__",children:["11. ",(0,s.jsx)(n.code,{children:"__sub__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Subtraction Method"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__sub__"})," method defines the behavior of the ",(0,s.jsx)(n.code,{children:"-"})," operator for objects of a class."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Point:\r\n    def __init__(self, x, y):\r\n        self.x = x\r\n        self.y = y\r\n\r\n    def __sub__(self, other):\r\n        return Point(self.x - other.x, self.y - other.y)\r\n\r\n# Object instantiation\r\npoint1 = Point(5, 8)\r\npoint2 = Point(2, 3)\r\n\r\n# Using the __sub__ method\r\nresult = point1 - point2\r\nprint(result.x, result.y)\r\n# Output: 3 5\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"13-__contains__",children:["13. ",(0,s.jsx)(n.code,{children:"__contains__"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Membership Test"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__contains__"})," method defines the behavior of the ",(0,s.jsx)(n.code,{children:"in"})," operator for objects of a class."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class ShoppingCart:\r\n    def __init__(self, items):\r\n        self.items = items\r\n\r\n    def __contains__(self, item):\r\n        return item in self.items\r\n\r\n# Object instantiation\r\ncart = ShoppingCart(["apple", "banana", "orange"])\r\n\r\n# Using the __contains__ method\r\nprint("banana" in cart)  # Output: True\r\nprint("grapes" in cart)  # Output: False\n'})}),"\n",(0,s.jsx)(n.h2,{id:"others",children:"Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Yes, there are more!"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.python.org/3/reference/datamodel.html#special-method-names",children:"Click here"})," to open the official documentation."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6213:(e,n,r)=>{r.d(n,{Z:()=>_,a:()=>l});var s=r(959);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function _(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);