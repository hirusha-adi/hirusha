"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[8829],{6694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(1527),i=n(6213);const a={title:"Exam Style Questions - Algorithms",sidebar_label:"ESQ",slug:"esq",sidebar_position:2},o=void 0,s={id:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_23/esq",title:"Exam Style Questions - Algorithms",description:"Question 1",source:"@site/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_23/esq.md",sourceDirName:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_23",slug:"/study/cie_al/computer_science/paper_4/my_study_notes/chapter_23/esq",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_23/esq",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Exam Style Questions - Algorithms",sidebar_label:"ESQ",slug:"esq",sidebar_position:2},sidebar:"study",previous:{title:"Notes",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_23/notes"},next:{title:"Chapter 24 - Recursion",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_24/"}},d={},l=[{value:"Question 1",id:"question-1",level:2},{value:"a) Complete the algorithm for a binary search function FindName. The data being searched is stored in the array <code>Names[0 : 50]</code>. The name to be searched for is passed as a parameter.",id:"a-complete-the-algorithm-for-a-binary-search-function-findname-the-data-being-searched-is-stored-in-the-array-names0--50-the-name-to-be-searched-for-is-passed-as-a-parameter",level:4},{value:"b) The binary search does not work if the data in the array being searched is \u2026\u2026\u2026\u2026\u2026\u2026",id:"b-the-binary-search-does-not-work-if-the-data-in-the-array-being-searched-is-",level:4},{value:"c) State the return value of the function FindName return when:",id:"c-state-the-return-value-of-the-function-findname-return-when",level:4},{value:"i the name searched for exists in the array.",id:"i-the-name-searched-for-exists-in-the-array",level:4},{value:"ii the name searched for does not exist in the array.",id:"ii-the-name-searched-for-does-not-exist-in-the-array",level:4},{value:"Question 2",id:"question-2",level:2},{value:"2) A queue Abstract Data Type (ADT) is to be implemented as a linked list of nodes. Each node is a record, consisting of a data field and a pointer field. The queue ADT also has a FrontOfQueue pointer and an EndOfQueue pointer associated with it. The possible queue operations are: JoinQueue and LeaveQueue.",id:"2-a-queue-abstract-data-type-adt-is-to-be-implemented-as-a-linked-list-of-nodes-each-node-is-a-record-consisting-of-a-data-field-and-a-pointer-field-the-queue-adt-also-has-a-frontofqueue-pointer-and-an-endofqueue-pointer-associated-with-it-the-possible-queue-operations-are-joinqueue-and-leavequeue",level:4},{value:"a) i Write labels on the diagram to show the state of the queue after three data items have been added to the queue in the given order: Apple, Pear, Banana.",id:"a-i-write-labels-on-the-diagram-to-show-the-state-of-the-queue-after-three-data-items-have-been-added-to-the-queue-in-the-given-order-apple-pear-banana",level:4},{value:"ii Write labels on the diagram to show how the unused nodes are linked to form a list of free nodes. This list has a StartOfFreeList pointer associated with it",id:"ii-write-labels-on-the-diagram-to-show-how-the-unused-nodes-are-linked-to-form-a-list-of-free-nodes-this-list-has-a-startoffreelist-pointer-associated-with-it",level:4},{value:"b) i Write program code to declare the record type Node",id:"b-i-write-program-code-to-declare-the-record-type-node",level:4},{value:"ii Write program code to create an array Queue with 50 records of type Node. Your solution should link all nodes and initialise the pointers FrontOfQueue, EndOfQueue and StartOfFreeList.",id:"ii-write-program-code-to-create-an-array-queue-with-50-records-of-type-node-your-solution-should-link-all-nodes-and-initialise-the-pointers-frontofqueue-endofqueue-and-startoffreelist",level:4},{value:"c) The pseudocode algorithm for the queue operation JoinQueue is written as a procedure with the header: <code>PROCEDURE JoinQueue(NewItem)</code> where NewItem is the new value to be added to the queue. The procedure uses the variables shown in the following identifier table:",id:"c-the-pseudocode-algorithm-for-the-queue-operation-joinqueue-is-written-as-a-procedure-with-the-header-procedure-joinqueuenewitem-where-newitem-is-the-new-value-to-be-added-to-the-queue-the-procedure-uses-the-variables-shown-in-the-following-identifier-table",level:4},{value:"i Complete the identifier table.",id:"i-complete-the-identifier-table",level:4},{value:"ii Complete the pseudocode using the identifiers from the table in part (c) (i)",id:"ii-complete-the-pseudocode-using-the-identifiers-from-the-table-in-part-c-i",level:4},{value:"Question 3",id:"question-3",level:2},{value:"A program is required that sorts a list of words into alphabetical order. The list of words is supplied as a text file",id:"a-program-is-required-that-sorts-a-list-of-words-into-alphabetical-order-the-list-of-words-is-supplied-as-a-text-file",level:4},{value:"a) Write a program to declare a string array, WordList, that can hold 500 elements. Initialise the array so all elements contain the empty string.",id:"a-write-a-program-to-declare-a-string-array-wordlist-that-can-hold-500-elements-initialise-the-array-so-all-elements-contain-the-empty-string",level:4},{value:"b) Write a procedure, OutputList, to output all elements in index order.",id:"b-write-a-procedure-outputlist-to-output-all-elements-in-index-order",level:4},{value:"c) Write a procedure, LoadWords, that asks the user for a filename and reads the contents of the text file, storing each line of text (word) in a separate array element. The procedure should output a relevant error message if: - the file doesn\u2019t exist - the array is full.",id:"c-write-a-procedure-loadwords-that-asks-the-user-for-a-filename-and-reads-the-contents-of-the-text-file-storing-each-line-of-text-word-in-a-separate-array-element-the-procedure-should-output-a-relevant-error-message-if---the-file-doesnt-exist---the-array-is-full",level:4},{value:"d) Write a procedure, SortWords, to perform a bubble sort on all non-empty array elements, so that the words are in alphabetical order.",id:"d-write-a-procedure-sortwords-to-perform-a-bubble-sort-on-all-non-empty-array-elements-so-that-the-words-are-in-alphabetical-order",level:4},{value:"e) Write program code to call LoadWords, then OutputList, followed by SortWords and then OutputList again.",id:"e-write-program-code-to-call-loadwords-then-outputlist-followed-by-sortwords-and-then-outputlist-again",level:4},{value:"f) Test your program by running it first with a non-existing file, and then with a text file ontaining 20 words in random order. Take screenshots of your test runs that show your code works correctly.",id:"f-test-your-program-by-running-it-first-with-a-non-existing-file-and-then-with-a-text-file-ontaining-20-words-in-random-order-take-screenshots-of-your-test-runs-that-show-your-code-works-correctly",level:4}];function u(e){const t={code:"code",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"question-1",children:"Question 1"}),"\n",(0,r.jsxs)(t.h4,{id:"a-complete-the-algorithm-for-a-binary-search-function-findname-the-data-being-searched-is-stored-in-the-array-names0--50-the-name-to-be-searched-for-is-passed-as-a-parameter",children:["a) Complete the algorithm for a binary search function FindName. The data being searched is stored in the array ",(0,r.jsx)(t.code,{children:"Names[0 : 50]"}),". The name to be searched for is passed as a parameter."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://cdn.discordapp.com/attachments/1163847683207856178/1187213911783649460/image.png",alt:"i1"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"FUNCTION FindName(s : STRING) RETURNS INTEGER\n    Index \u2190 -1\n    First \u2190 0\n    Last \u2190 50\n\n    WHILE (Last >= First) AND (Index = -1) DO\n        Middle \u2190 (First + Last) DIV 2\n\n        IF Names[Middle] = s THEN\n            Index \u2190 Middle\n        ELSE\n            IF Names[Middle] > s THEN\n                Last \u2190 Middle - 1\n            ELSE\n                First \u2190 Middle + 1\n            ENDIF\n        ENDIF\n    ENDWHILE\n\n    RETURN Index\nENDFUNCTION\n"})}),"\n",(0,r.jsx)(t.h4,{id:"b-the-binary-search-does-not-work-if-the-data-in-the-array-being-searched-is-",children:"b) The binary search does not work if the data in the array being searched is \u2026\u2026\u2026\u2026\u2026\u2026"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"not sorted."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"c-state-the-return-value-of-the-function-findname-return-when",children:"c) State the return value of the function FindName return when:"}),"\n",(0,r.jsx)(t.h4,{id:"i-the-name-searched-for-exists-in-the-array",children:"i the name searched for exists in the array."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"will return the index of that name in the array."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"ii-the-name-searched-for-does-not-exist-in-the-array",children:"ii the name searched for does not exist in the array."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"will return -1 to indicate that the name is not found in the array."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"question-2",children:"Question 2"}),"\n",(0,r.jsx)(t.h4,{id:"2-a-queue-abstract-data-type-adt-is-to-be-implemented-as-a-linked-list-of-nodes-each-node-is-a-record-consisting-of-a-data-field-and-a-pointer-field-the-queue-adt-also-has-a-frontofqueue-pointer-and-an-endofqueue-pointer-associated-with-it-the-possible-queue-operations-are-joinqueue-and-leavequeue",children:"2) A queue Abstract Data Type (ADT) is to be implemented as a linked list of nodes. Each node is a record, consisting of a data field and a pointer field. The queue ADT also has a FrontOfQueue pointer and an EndOfQueue pointer associated with it. The possible queue operations are: JoinQueue and LeaveQueue."}),"\n",(0,r.jsx)(t.h4,{id:"a-i-write-labels-on-the-diagram-to-show-the-state-of-the-queue-after-three-data-items-have-been-added-to-the-queue-in-the-given-order-apple-pear-banana",children:"a) i Write labels on the diagram to show the state of the queue after three data items have been added to the queue in the given order: Apple, Pear, Banana."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"lets assume you have a node structure like this:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Node:\n  - Data\n  - Next (pointer to the next node)\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"at the start, the FrontOfQueue and EndOfQueue pointers are set to null because the queue is empty."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'After adding "Apple"'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"FrontOfQueue -> [Apple] <- EndOfQueue\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'After adding "Pear"'}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"FrontOfQueue -> [Apple] -> [Pear] <- EndOfQueue\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'After adding "Banana"'}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"FrontOfQueue -> [Apple] -> [Pear] -> [Banana] <- EndOfQueue\n"})}),"\n",(0,r.jsx)(t.h4,{id:"ii-write-labels-on-the-diagram-to-show-how-the-unused-nodes-are-linked-to-form-a-list-of-free-nodes-this-list-has-a-startoffreelist-pointer-associated-with-it",children:"ii Write labels on the diagram to show how the unused nodes are linked to form a list of free nodes. This list has a StartOfFreeList pointer associated with it"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"after the initial setup"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"FrontOfQueue -> null\nEndOfQueue   -> null\n\nStartOfFreeList -> [Apple] -> [Pear] -> [Banana] -> null\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'after adding "Apple" to the queue'}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"FrontOfQueue -> [Apple]\nEndOfQueue   -> [Apple]\n\nStartOfFreeList -> [Pear] -> [Banana] -> null\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'after adding "Pear" to the queue'}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"FrontOfQueue -> [Apple] -> [Pear]\nEndOfQueue   -> [Pear]\n\nStartOfFreeList -> [Banana] -> null\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'after adding "Banana" to the queue'}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"FrontOfQueue -> [Apple] -> [Pear] -> [Banana]\nEndOfQueue   -> [Banana]\n\nStartOfFreeList -> null\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'the EndOfQueue points to the node containing "Banana".'}),"\n",(0,r.jsx)(t.li,{children:"all nodes are in use, and the free list is empty."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"b-i-write-program-code-to-declare-the-record-type-node",children:"b) i Write program code to declare the record type Node"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Node:\n    def __init__(self, data=None):\n        self.data = data\n        self.next = None\n"})}),"\n",(0,r.jsx)(t.h4,{id:"ii-write-program-code-to-create-an-array-queue-with-50-records-of-type-node-your-solution-should-link-all-nodes-and-initialise-the-pointers-frontofqueue-endofqueue-and-startoffreelist",children:"ii Write program code to create an array Queue with 50 records of type Node. Your solution should link all nodes and initialise the pointers FrontOfQueue, EndOfQueue and StartOfFreeList."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'class Node:\n    def __init__(self, data=None):\n        self.data = data\n        self.next = None\n\n# Initialize an array Queue with 50 records of type Node\nQueue = [Node() for _ in range(50)]\n\n# Link all nodes in the array\nfor i in range(len(Queue) - 1):\n    Queue[i].next = Queue[i + 1]\n\n# Initialize pointers\nFrontOfQueue = None\nEndOfQueue = None\n\n# Set FrontOfQueue and EndOfQueue to the first node\nFrontOfQueue = Queue[0] if Queue else None\nEndOfQueue = Queue[-1] if Queue else None\n\n# Initialize the StartOfFreeList pointer\nStartOfFreeList = Queue[0] if Queue else None\n\n# Print the state of pointers for demonstration\nprint("FrontOfQueue:", FrontOfQueue.data if FrontOfQueue else None)\nprint("EndOfQueue:", EndOfQueue.data if EndOfQueue else None)\nprint("StartOfFreeList:", StartOfFreeList.data if StartOfFreeList else None)\n'})}),"\n",(0,r.jsxs)(t.h4,{id:"c-the-pseudocode-algorithm-for-the-queue-operation-joinqueue-is-written-as-a-procedure-with-the-header-procedure-joinqueuenewitem-where-newitem-is-the-new-value-to-be-added-to-the-queue-the-procedure-uses-the-variables-shown-in-the-following-identifier-table",children:["c) The pseudocode algorithm for the queue operation JoinQueue is written as a procedure with the header: ",(0,r.jsx)(t.code,{children:"PROCEDURE JoinQueue(NewItem)"})," where NewItem is the new value to be added to the queue. The procedure uses the variables shown in the following identifier table:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://cdn.discordapp.com/attachments/1163847683207856178/1187217297186758706/image.png",alt:"a1"})}),"\n",(0,r.jsx)(t.h4,{id:"i-complete-the-identifier-table",children:"i Complete the identifier table."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Identifier"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NullPointer"}),(0,r.jsx)(t.td,{children:"INTEGER"}),(0,r.jsx)(t.td,{children:"Constant set to -1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"QueueArray"}),(0,r.jsx)(t.td,{children:"ARRAY"}),(0,r.jsx)(t.td,{children:"Array to store queue data"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NewItem"}),(0,r.jsx)(t.td,{children:"STRING"}),(0,r.jsx)(t.td,{children:"Value to be added"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"FreeNodePointer"}),(0,r.jsx)(t.td,{children:"INTEGER"}),(0,r.jsx)(t.td,{children:"Pointer to next free node in array"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"FrontOfQueue"}),(0,r.jsx)(t.td,{children:"POINTER"}),(0,r.jsx)(t.td,{children:"Pointer to the first node in queue"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"EndOfQueue"}),(0,r.jsx)(t.td,{children:"POINTER"}),(0,r.jsx)(t.td,{children:"Pointer to the last node in queue"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NodeToAdd"}),(0,r.jsx)(t.td,{children:"POINTER"}),(0,r.jsx)(t.td,{children:"Pointer to the node to be added"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"ii-complete-the-pseudocode-using-the-identifiers-from-the-table-in-part-c-i",children:"ii Complete the pseudocode using the identifiers from the table in part (c) (i)"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://cdn.discordapp.com/attachments/1163847683207856178/1187217991574753330/image.png",alt:"b1"}),"\n",(0,r.jsx)(t.img,{src:"https://cdn.discordapp.com/attachments/1163847683207856178/1187218056942977095/image.png",alt:"b2"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"PROCEDURE JoinQueue(NewItem : STRING)\n// Report error if no free nodes remaining\nIF StartOfFreeList = NullPointer\nTHEN\n    Report Error\nELSE\n    // new data item placed in node at start of free list\n    NewNodePointer \u2190 StartOfFreeList\n    Queue[NewNodePointer].Data \u2190 NewItem\n    // adjust free list pointer\n    StartOfFreeList \u2190 Queue[NewNodePointer].Pointer\n    Queue[NewNodePointer].Pointer \u2190 NullPointer\n    // if the first item in the queue then adjust front of queue pointer\n    IF FrontOfQueue = NullPointer\n    THEN\n        FrontOfQueue \u2190 NewNodePointer\n    ENDIF\n    // new node is the new end of queue\n    Queue[NewNodePointer].Pointer \u2190 NullPointer\n    IF EndOfQueue = NullPointer\n    THEN\n        EndOfQueue \u2190 NewNodePointer\n    ELSE\n        Queue[EndOfQueue].Pointer \u2190 NewNodePointer\n        EndOfQueue \u2190 NewNodePointer\n    ENDIF\nENDIF\nENDPROCEDURE\n"})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Alternative python code"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'class Node:\n    def __init__(self, data=None):\n        self.data = data\n        self.pointer = None\n\nclass Queue:\ndef **init**(self):\nself.QueueArray = [Node() for _ in range(50)]\nself.StartOfFreeList = 0\nself.FrontOfQueue = None\nself.EndOfQueue = None\n\n    def JoinQueue(self, NewItem):\n        # Report error if no free nodes remaining\n        if self.StartOfFreeList is None:\n            print("Error: No free nodes remaining.")\n        else:\n            # new data item placed in node at start of free list\n            NewNodePointer = self.StartOfFreeList\n            self.QueueArray[NewNodePointer].data = NewItem\n            # adjust free list pointer\n            self.StartOfFreeList = self.QueueArray[NewNodePointer].pointer\n            self.QueueArray[NewNodePointer].pointer = None\n            # if the first item in the queue then adjust front of queue pointer\n            if self.FrontOfQueue is None:\n                self.FrontOfQueue = NewNodePointer\n            # new node is the new end of queue\n            self.QueueArray[NewNodePointer].pointer = None\n            if self.EndOfQueue is None:\n                self.EndOfQueue = NewNodePointer\n            else:\n                self.QueueArray[self.EndOfQueue].pointer = NewNodePointer\n                self.EndOfQueue = NewNodePointer\n\n# Example usage:\n\nmy_queue = Queue()\nmy_queue.JoinQueue("Apple")\nmy_queue.JoinQueue("Pear")\nmy_queue.JoinQueue("Banana")\n'})})]}),"\n",(0,r.jsx)(t.h2,{id:"question-3",children:"Question 3"}),"\n",(0,r.jsx)(t.h4,{id:"a-program-is-required-that-sorts-a-list-of-words-into-alphabetical-order-the-list-of-words-is-supplied-as-a-text-file",children:"A program is required that sorts a list of words into alphabetical order. The list of words is supplied as a text file"}),"\n",(0,r.jsx)(t.h4,{id:"a-write-a-program-to-declare-a-string-array-wordlist-that-can-hold-500-elements-initialise-the-array-so-all-elements-contain-the-empty-string",children:"a) Write a program to declare a string array, WordList, that can hold 500 elements. Initialise the array so all elements contain the empty string."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# a. Declare and initialize the WordList array\nWordList = [''] * 500\n"})}),"\n",(0,r.jsx)(t.h4,{id:"b-write-a-procedure-outputlist-to-output-all-elements-in-index-order",children:"b) Write a procedure, OutputList, to output all elements in index order."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# b. Procedure to output all elements in index order\ndef OutputList():\n    for i, word in enumerate(WordList):\n        print(f"{i + 1}. {word}")\n'})}),"\n",(0,r.jsx)(t.h4,{id:"c-write-a-procedure-loadwords-that-asks-the-user-for-a-filename-and-reads-the-contents-of-the-text-file-storing-each-line-of-text-word-in-a-separate-array-element-the-procedure-should-output-a-relevant-error-message-if---the-file-doesnt-exist---the-array-is-full",children:"c) Write a procedure, LoadWords, that asks the user for a filename and reads the contents of the text file, storing each line of text (word) in a separate array element. The procedure should output a relevant error message if: - the file doesn\u2019t exist - the array is full."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# c. Procedure to load words from a file into the WordList array\ndef LoadWords():\n    filename = input("Enter the filename: ")\n\n    try:\n        with open(filename, \'r\') as file:\n            for i, line in enumerate(file):\n                line = line.strip()\n                if i < len(WordList):\n                    WordList[i] = line\n                else:\n                    print("Error: Array is full.")\n                    return\n        print("Words loaded successfully.")\n    except FileNotFoundError:\n        print("Error: File not found.")\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"alternative list comprehension approach"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# c. Procedure to load words from a file into the WordList array\ndef LoadWords():\n    filename = input("Enter the filename: ")\n\n    try:\n        with open(filename, \'r\') as file:\n            WordList[:len(file.readlines())] = [line.strip() for line in file]\n        print("Words loaded successfully.")\n    except FileNotFoundError:\n        print("Error: File not found.")\n    except IndexError:\n        print("Error: Array is full.")\n'})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["to further describe this one liner: ",(0,r.jsx)(t.code,{children:"WordList[:len(file.readlines())] = [line.strip() for line in file]"})]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# Read all lines from the file and strip whitespace from each line\nfile_lines_stripped = [line.strip() for line in file]\n\n# Determine the length of the list of stripped lines\nnum_lines = len(file_lines_stripped)\n\n# Slice the WordList array to accommodate the lines from the file\n# This ensures that only the necessary elements are updated, and any remaining elements in WordList remain unchanged.\nWordList[:num_lines] = file_lines_stripped\n"})})]}),"\n",(0,r.jsx)(t.h4,{id:"d-write-a-procedure-sortwords-to-perform-a-bubble-sort-on-all-non-empty-array-elements-so-that-the-words-are-in-alphabetical-order",children:"d) Write a procedure, SortWords, to perform a bubble sort on all non-empty array elements, so that the words are in alphabetical order."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# d. Procedure to perform bubble sort on non-empty array elements\ndef SortWords():\n    n = len(WordList)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if WordList[j] and WordList[j] > WordList[j+1]:\n                WordList[j], WordList[j+1] = WordList[j+1], WordList[j]\n"})}),"\n",(0,r.jsx)(t.h4,{id:"e-write-program-code-to-call-loadwords-then-outputlist-followed-by-sortwords-and-then-outputlist-again",children:"e) Write program code to call LoadWords, then OutputList, followed by SortWords and then OutputList again."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# e. Call LoadWords, OutputList, SortWords, and OutputList\nLoadWords()\nprint("\\nOriginal Word List:")\nOutputList()\n\nSortWords()\nprint("\\nSorted Word List:")\nOutputList()\n'})}),"\n",(0,r.jsx)(t.h4,{id:"f-test-your-program-by-running-it-first-with-a-non-existing-file-and-then-with-a-text-file-ontaining-20-words-in-random-order-take-screenshots-of-your-test-runs-that-show-your-code-works-correctly",children:"f) Test your program by running it first with a non-existing file, and then with a text file ontaining 20 words in random order. Take screenshots of your test runs that show your code works correctly."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# f. Test the program with a non-existing file and a file with 20 words\n# Test 1: Non-existing file\nLoadWords()  # This will display an error message\n\n# Test 2: File with 20 words in random order\nwith open("word_list.txt", \'w\') as test_file:\n    test_file.write("banana\\napple\\norange\\ngrape\\nkiwi\\npear\\ncherry\\nmelon\\n")\n    test_file.write("peach\\nstrawberry\\nblueberry\\nraspberry\\npineapple\\nmango\\n")\n    test_file.write("watermelon\\npapaya\\napricot\\nplum\\nfig")\n\nLoadWords()\nprint("\\nOriginal Word List:")\nOutputList()\n\nSortWords()\nprint("\\nSorted Word List:")\nOutputList()\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"the whole program should look something like this:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# a. Declare and initialize the WordList array\nWordList = [\'\'] * 500\n\n# b. Procedure to output all elements in index order\ndef OutputList():\n    for i, word in enumerate(WordList):\n        print(f"{i + 1}. {word}")\n\n# c. Procedure to load words from a file into the WordList array\ndef LoadWords():\n    filename = input("Enter the filename: ")\n\n    try:\n        with open(filename, \'r\') as file:\n            for i, line in enumerate(file):\n                line = line.strip()\n                if i < len(WordList):\n                    WordList[i] = line\n                else:\n                    print("Error: Array is full.")\n                    return\n        print("Words loaded successfully.")\n    except FileNotFoundError:\n        print("Error: File not found.")\n\n# d. Procedure to perform bubble sort on non-empty array elements\ndef SortWords():\n    n = len(WordList)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if WordList[j] and WordList[j] > WordList[j+1]:\n                WordList[j], WordList[j+1] = WordList[j+1], WordList[j]\n\n# e. Call LoadWords, OutputList, SortWords, and OutputList\nLoadWords()\nprint("\\nOriginal Word List:")\nOutputList()\n\nSortWords()\nprint("\\nSorted Word List:")\nOutputList()\n\n# f. Test the program with a non-existing file and a file with 20 words\n# Test 1: Non-existing file\nLoadWords()  # This will display an error message\n\n# Test 2: File with 20 words in random order\nwith open("word_list.txt", \'w\') as test_file:\n    test_file.write("banana\\napple\\norange\\ngrape\\nkiwi\\npear\\ncherry\\nmelon\\n")\n    test_file.write("peach\\nstrawberry\\nblueberry\\nraspberry\\npineapple\\nmango\\n")\n    test_file.write("watermelon\\npapaya\\napricot\\nplum\\nfig")\n\nLoadWords()\nprint("\\nOriginal Word List:")\nOutputList()\n\nSortWords()\nprint("\\nSorted Word List:")\nOutputList()\n'})})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},6213:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(959);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);