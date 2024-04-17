"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[9753],{9474:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=s(11527),i=s(56213);const t={title:"Notes - Low-level programming",sidebar_label:"Notes",slug:"notes",sidebar_position:1},d=void 0,l={id:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_28/notes",title:"Notes - Low-level programming",description:"Our instruction set",source:"@site/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_28/notes.md",sourceDirName:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_28",slug:"/study/cie_al/computer_science/paper_4/my_study_notes/chapter_28/notes",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_28/notes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Notes - Low-level programming",sidebar_label:"Notes",slug:"notes",sidebar_position:1},sidebar:"study",previous:{title:"Chapter 28 - Low-level programming",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_28/"},next:{title:"ESQ",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_28/esq"}},c={},o=[{value:"Our instruction set",id:"our-instruction-set",level:2},{value:"Symbolic Addresses",id:"symbolic-addresses",level:2},{value:"Problem Solving",id:"problem-solving",level:2},{value:"Assignment",id:"assignment",level:3},{value:"Assign Value",id:"assign-value",level:4},{value:"Increment",id:"increment",level:4},{value:"Add another Variable",id:"add-another-variable",level:4},{value:"Negative Value",id:"negative-value",level:4},{value:"Selection",id:"selection",level:3},{value:"if",id:"if",level:4},{value:"if-else",id:"if-else",level:4},{value:"Repitition",id:"repitition",level:3},{value:"repeat-until",id:"repeat-until",level:4},{value:"Repitition",id:"repitition-1",level:3},{value:"Input a Character",id:"input-a-character",level:4},{value:"Output a String",id:"output-a-string",level:4},{value:"Input a String",id:"input-a-string",level:4},{value:"Absolute Addressing",id:"absolute-addressing",level:2},{value:"Relative Addressing",id:"relative-addressing",level:2},{value:"Indirect Addressing",id:"indirect-addressing",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"our-instruction-set",children:"Our instruction set"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:'"An instruction set architecture is a part of the abstract model of a computer, which generally defines how software controls the CPU. A device that executes instructions described by that ISA, such as a central processing unit, is called an implementation"'})," - ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Instruction_set_architecture",children:"Wikipedia"})]}),"\n",(0,r.jsx)(n.p,{children:"Refer to Chapter 6 in P1 for additional information."}),"\n",(0,r.jsx)(n.p,{children:"Below is the instruction set that we will be working with:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"alt text",src:s(58004).Z+"",width:"812",height:"931"}),"\r\n",(0,r.jsx)(n.img,{alt:"alt text",src:s(72797).Z+"",width:"810",height:"270"})]}),"\n",(0,r.jsx)(n.p,{children:"In the assembly code in this chapter:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ACC"})," denotes the Accumulator"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"IX"})," denotes the Index Register"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"#"})," denotes immediate addressing"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"B"})," denotes a binary number, e.g. B01001010"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"&"})," denotes a hexadecimal number, e.g. &4A"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<address>"})," can be an absolute address or a symbolic address."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["An address can be ",(0,r.jsx)(n.strong,{children:"absolute (a number)"})," or ",(0,r.jsx)(n.strong,{children:"symbolic (a label)"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"symbolic-addresses",children:"Symbolic Addresses"}),"\n",(0,r.jsx)(n.p,{children:"A label is a symbolic name for the memory location that it represents."}),"\n",(0,r.jsx)(n.p,{children:"You can treat it like a variable name"}),"\n",(0,r.jsx)(n.p,{children:"The assembler will allocate absolute addresses during the assembly process."}),"\n",(0,r.jsx)(n.h2,{id:"problem-solving",children:"Problem Solving"}),"\n",(0,r.jsx)(n.h3,{id:"assignment",children:"Assignment"}),"\n",(0,r.jsx)(n.h4,{id:"assign-value",children:"Assign Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pseudocode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"A <- 34\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assmebly: To store a value in a memory location, the value must first be generated in the accumulator."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"LDM #34\r\nSTO A\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"increment",children:"Increment"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pseudocode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"B <- B + 1\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assmebly: To increment the value stored at a memory location: first load the value into the accumulator, increment the value and then store the contents of the accumulator back to the memory location."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"LDD B\r\nINC ACC\r\nSTO B\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"add-another-variable",children:"Add another Variable"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pseudocode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"B <- B + A\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assmebly: To calculate a value: load the first value from a memory location into the accumulator, then add the value stored at the second memory location to the accumulator and then store the contents of the accumulator to the required memory location."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"LDD B\r\nADD A\r\nSTO B\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"negative-value",children:"Negative Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pseudocode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"A <- -A\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Assmebly: doing ",(0,r.jsx)(n.code,{children:"XOR"})," with ",(0,r.jsx)(n.code,{children:"11111111"})," to get the ones complement and then adding ",(0,r.jsx)(n.code,{children:"1"})," to get the two's complement."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"LDD A\r\nXOR #&FF\r\nINC ACC\r\nSTO A\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assembly: set the ACC to zero and then subtract the value from the ACC and store it back in the original address"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"LDM #0\r\nSUB A\r\nSTO A\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Summary"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Pseudocode"}),(0,r.jsx)(n.th,{children:"Assembly Code"}),(0,r.jsx)(n.th,{children:"Explanation"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"A <- 34"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"LDM #34"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"STO A"})]}),(0,r.jsx)(n.td,{children:"Assign value to A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"B <- B + 1"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"LDD B"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"INC ACC"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"STO B"})]}),(0,r.jsx)(n.td,{children:"Increment value of B"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"B <- B + A"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"LDD B"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"ADD A"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"STO B"})]}),(0,r.jsx)(n.td,{children:"Add A to B"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"A <- -A"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"LDD A"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"XOR #&FF"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"INC ACC"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"STO A"}),(0,r.jsx)("br",{})," ",(0,r.jsx)(n.strong,{children:"Alternative Method:"})," ",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"LDM #0"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"SUB A"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"STO A"}),(0,r.jsx)("br",{})]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"XOR"})," with ",(0,r.jsx)(n.code,{children:"11111111"}),"to produce onces complement and add 1 (twos complement)"]})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"selection",children:"Selection"}),"\n",(0,r.jsx)(n.h4,{id:"if",children:"if"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pseudocode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"IF A = 0 THEN\r\n    B <- B + 1\r\nENDIF\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assembly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"        LDD A       ; load A\r\n        CMP #0      ; is A = zero\r\n        JPN ENDIF   ; if comparison is false, skip\r\nTHEN:   LDD B       \r\n        INC ACC     ; increment B\r\n        STOP B\r\nENDIF:  ...\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"if-else",children:"if-else"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pseudocode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'IF A=B THEN\r\n    OUTPUT "Y"\r\nELSE\r\n    OUTPUT "N"\r\nENDIF\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assembly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'        LDD A\r\n        SUB B       ; do a-b\r\n        CMP #0      ; if a-b=0?\r\n        JPN ELSE    ; skip if false\r\nTHEN:   LDM #89     ; ascii code of "Y"\r\n        OUT         ; \r\n        JMP ENDIF   ; PLEASE include this only in THEN: part\r\nELSE:   LDM #78     ; ascii code of "N" \r\n        OUT         ; \r\nENDIF:  ...\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"repitition",children:"Repitition"}),"\n",(0,r.jsx)(n.h4,{id:"repeat-until",children:"repeat-until"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pseudocode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'A = 0\r\nREPEAT\r\n    OUTPUT "*"\r\n    A <- A + 1\r\nUNTIL A = 5\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assembly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"        LDM #0\r\n        STO A\r\nLOOP:   LDM #42\r\n        OUT\r\n        LDD A\r\n        INC ACC\r\n        STO A\r\n        CMP #5\r\n        JPN LOOP\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"repitition-1",children:"Repitition"}),"\n",(0,r.jsx)(n.h4,{id:"input-a-character",children:"Input a Character"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pseudocode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"INPUT A\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assembly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"IN\r\nSTO A\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"output-a-string",children:"Output a String"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pseudocode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"OUTPUT B\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assembly:"}),"\n",(0,r.jsx)(n.p,{children:"To output a string of characters stored in consecutive locations, starting at location labelled B, a loop and indexed addressing are used"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"        LDM #-1\r\n        MOV IX\r\nLOOP:   INC IX\r\n        LDX B\r\n        OUT\r\n        CMP #13\r\n        JPN LOOP\n"})}),"\n",(0,r.jsx)(n.p,{children:"The first time round the loop the index register is 0 and the character in memory location B will be loaded into the accumulator and output to the screen. Then a check is made for the end of the string (the carriage return character with ASCII code 13). If it is not the end of the string, jump back to the beginning of the loop."}),"\n",(0,r.jsx)(n.p,{children:"To output a number, the number must first be changed into its equivalent string and stored in consecutive memory locations. Then the above method can be used."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"input-a-string",children:"Input a String"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pseudocode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"INPUT B\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assembly:"}),"\n",(0,r.jsx)(n.p,{children:"Store a string of characters input from the keyboard into consecutive memory locations starting from A."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"        LDM #-1\r\n        MOV IX\r\nLOOP:   INC IX\r\n        IN\r\n        STX A\r\n        CMP #13\r\n        JPN LOOP\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note: The STX instruction is not given as part of the instruction set in the syllabus for 9618 (from now on referred to as the 9618 instruction set). This means a string can not be saved with the 9618 instruction set."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"absolute-addressing",children:"Absolute Addressing"}),"\n",(0,r.jsx)(n.p,{children:"An absolute address is the numeric address of a memory location. A program using absolute addresses cannot be loaded anywhere else in memory."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["eg: ",(0,r.jsx)(n.code,{children:"LDD 120"}),", ",(0,r.jsx)(n.code,{children:"STO 150"})," where 120 and 150 are memmory locations/addresses."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"relative-addressing",children:"Relative Addressing"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"( to recall from Chapter 6 from P1, this is the addressing mode with the offset thing )"})}),"\n",(0,r.jsx)(n.p,{children:"Some assemblers produce relative addresses, so that the program can be loaded anywhere in memory."}),"\n",(0,r.jsx)(n.p,{children:"Relative addresses are addresses relative to a base address, for example the first instruction of the program."}),"\n",(0,r.jsxs)(n.p,{children:["When the program is loaded into memory the base address is stored in a ",(0,r.jsxs)(n.strong,{children:["base register: ",(0,r.jsx)(n.code,{children:"BR"})]}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Instructions that refer to addresses then use the value in the base register, modified by the offset. For example, ",(0,r.jsx)(n.code,{children:"STO [BR] + 10"})," will store the contents of the accumulator at the address calculated from ",(0,r.jsx)(n.strong,{children:"(contents of the base register) + 10"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"alt text",src:s(60913).Z+"",width:"643",height:"315"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the above image, ",(0,r.jsx)(n.code,{children:"BR"})," (Base Register) is ",(0,r.jsx)(n.code,{children:"0"}),". A is in after ",(0,r.jsx)(n.code,{children:"10"})," locations from the ",(0,r.jsx)(n.code,{children:"BR"}),", so ",(0,r.jsx)(n.code,{children:"A"})," can be reffered to as ",(0,r.jsx)(n.code,{children:"[BR] + 10"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["It is very important that, at the end of the program, control is passed back to the operating system. Otherwise the binary pattern held in the next memory location will be interpreted as an instruction, leading the processor to crash. Use the ",(0,r.jsx)(n.code,{children:"END"})," instruction to do that."]}),"\n",(0,r.jsxs)(n.p,{children:["The instruction ",(0,r.jsx)(n.code,{children:"END"})," signals the end of the program instructions."]}),"\n",(0,r.jsx)(n.h2,{id:"indirect-addressing",children:"Indirect Addressing"}),"\n",(0,r.jsx)(n.p,{children:"Useful if the memory address to be used in an instruction is changed during the execution of the program. This goes beyond the syllabus."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"eg: when programming subroutines to which parameters are passed by reference."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},72797:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/image-1-ee678a0709cc31cb9f0937f07e1e1814.png"},60913:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/image-2-7b4c876ddb1c2e5320345bc5561f47a0.png"},58004:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/image-f65462a19d8ee6f728781ad950839aa4.png"},56213:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var r=s(50959);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);