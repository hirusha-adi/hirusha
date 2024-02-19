"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[1687],{9895:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=i(1527),r=i(6213);const t={title:"Exam Style Questions - Declarative programming",sidebar_label:"ESQ",slug:"esq",sidebar_position:2},a=void 0,c={id:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_29/esq",title:"Exam Style Questions - Declarative programming",description:"Question 1",source:"@site/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_29/esq.md",sourceDirName:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_29",slug:"/study/cie_al/computer_science/paper_4/my_study_notes/chapter_29/esq",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_29/esq",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Exam Style Questions - Declarative programming",sidebar_label:"ESQ",slug:"esq",sidebar_position:2},sidebar:"study",previous:{title:"Notes",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_29/notes"},next:{title:"Setup Prolog",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_29/initial_setup"}},l={},d=[{value:"Question 1",id:"question-1",level:2},{value:"Question 2",id:"question-2",level:2}];function o(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"question-1",children:"Question 1"}),"\n",(0,s.jsx)(n.p,{children:"A logic programming language is used to represent, as a set of facts and rules, details of cities of the world. The set of facts and rules are shown below in clauses labelled 1 to 17."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"01 capital(vienna).\n02 capital(london).\n03 capital(santiago).\n04 capital(caracas).\n05 capital(tokyo).\n06 cityIn(vienna, austria).\n07 cityIn(santiago, chile).\n08 cityIn(salzburg, austria).\n09 cityIn(maracaibo, venezuela).\n10 continent(austria, europe).\n11 continent(chile, southAmerica).\n12 continent(uk, europe).\n13 continent(argentina, southAmerica).\n14 iVisited(vienna).\n15 iVisited(tokyo).\n16 capitalOf(City, Country)\n    IF capital(City) AND cityIn(City, Country).\n17 europeanCity(City)\n    IF cityIn(City, Country) AND continent(Country, europe).\n"})}),"\n",(0,s.jsx)(n.p,{children:"These clauses have the following meanings:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Clause"}),(0,s.jsx)(n.th,{children:"Meaning"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"01"}),(0,s.jsx)(n.td,{children:"Vienna is a capital."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"06"}),(0,s.jsx)(n.td,{children:"Vienna is in Austria."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"Austria is in the continent of Europe."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"14"}),(0,s.jsx)(n.td,{children:"I visited the city of Vienna."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"16"}),(0,s.jsxs)(n.td,{children:["City is the capital of Country if ",(0,s.jsx)("br",{})," City is a capital and it is in Country."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"17"}),(0,s.jsx)(n.td,{children:"City is a city in Europe if City is in Country and Country is in Europe."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"a) Write down the extra clauses needed to express the following facts:"}),"\n",(0,s.jsx)(n.p,{children:"i)London is in the UK."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"cityIn(london, uk).\n"})}),"\n",(0,s.jsx)(n.p,{children:"ii) I visited the city of Strasbourg."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"iVisited(strasbourg).\n"})}),"\n",(0,s.jsxs)(n.p,{children:["b) The clause cityIn(City, austria) would return the result: vienna, salzburg. Write down the result returned by the clause: ",(0,s.jsx)(n.code,{children:"continent(Country, southAmerica)."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"Country = chile ; \nCountry = argentina.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["c) Complete the rule to list countries that I have visited ",(0,s.jsx)(n.code,{children:"countriesIVisited(Country) IF ..."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"countriesIVisited(Country) :- iVisited(City), cityIn(City, Country).\n"})}),"\n",(0,s.jsx)(n.h2,{id:"question-2",children:"Question 2"}),"\n",(0,s.jsx)(n.p,{children:"In a particular country, to become a qualified driver you must:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"have a licence: there is a minimum age at which a person can be issued with a licence and it is different for cars and trucks"}),"\n",(0,s.jsx)(n.li,{children:"pass a theory test: it is the same test for cars and trucks"}),"\n",(0,s.jsx)(n.li,{children:"pass a driving test for a specific vehicle (car or truck)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A declarative programming language is to be used to represent the knowledge base shown below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"01 minimumAge(car, 18).\n02 minimumAge(truck, 21).\n03 age(fred, 19).\n04 age(jack, 22).\n05 age(mike, 17).\n06 age(jhon, 20).\n07 age(emma, 22).\n08 age(sheena, 19).\n09 hasLicence(fred).\n10 hasLicence(jack).\n11 hasLicence(mike).\n12 hasLicence(jhon).\n13 hasLicence(emma).\n14 hasLicence(sheena).\n15 allowedToDrive(X, V)\n    IF hasLicence(X) AND minimumAge(V, L)\n        AND age(X, A)\n        AND A >= L.\n16 passedTheoryTest(jack).\n17 passedTheoryTest(emma).\n18 passedTheoryTest(jhon).\n19 passedTheoryTest(fred).\n20 passedDrivingTest(jhon, car).\n21 passedDrivingTest(fred, car).\n22 passedDrivingTest(jack, car).\n23 passedDrivingTest(jack, truck).\n24 passedDrivingTest(sheena, car).\n25 qualifiedDriver(X, V)\n    IF allowedToDrive(X, V)\n        AND passedTheoryTest(X)\n        AND passedDrivingTest(X, V).\n"})}),"\n",(0,s.jsx)(n.p,{children:"These clauses have the following meanings:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Clause"}),(0,s.jsx)(n.th,{children:"Meaning"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"01"}),(0,s.jsx)(n.td,{children:"The minimum age for a car licence is 18."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"03"}),(0,s.jsx)(n.td,{children:"Fred is aged 19."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"09"}),(0,s.jsx)(n.td,{children:"Fred has a licence."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"15"}),(0,s.jsx)(n.td,{children:"Person X is able to drive vehicle V if person X has a licence and the age A of person X is greater than or equal to the minimum age L to drive vehicle V."})]})]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Runnable code"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"minimumAge(car, 18).\nminimumAge(truck, 21).\nage(fred, 19).\nage(jack, 22).\nage(mike, 17).\nage(jhon, 20).\nage(emma, 22).\nage(sheena, 19).\nhasLicence(fred).\nhasLicence(jack).\nhasLicence(mike).\nhasLicence(jhon).\nhasLicence(emma).\nhasLicence(sheena).\nallowedToDrive(X, V):- \n        hasLicence(X),\n        minimumAge(V, L),\n        age(X, A),\n        A >= L.\npassedTheoryTest(jack).\npassedTheoryTest(emma).\npassedTheoryTest(jhon).\npassedTheoryTest(fred).\npassedDrivingTest(jhon, car).\npassedDrivingTest(fred, car).\npassedDrivingTest(jack, car).\npassedDrivingTest(jack, truck).\npassedDrivingTest(sheena, car).\nqualifiedDriver(X, V):- allowedToDrive(X, V),\n        passedTheoryTest(X),\n        passedDrivingTest(X, V).\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"a)"}),"\n",(0,s.jsx)(n.p,{children:"i) Give one example of a fact in this knowledge base."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"age(fred, 19)."})," - This states the fact that Fred is aged 19."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"ii) Give one example of a rule in this knowledge base."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"qualifiedDriver(X, V) IF allowedToDrive(X, V) AND passedTheoryTest(X) AND passedDrivingTest(X, V)."})," - This is a rule that defines a qualified driver. It states that a person X is a qualified driver of vehicle V if they are allowed to drive that vehicle, have passed the theory test, and have passed the driving test for that vehicle."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"b) State the output produced from these clauses:"}),"\n",(0,s.jsx)(n.p,{children:"i) passedDrivingTest(Who, truck)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This will output all individuals (Who) who have passed the driving test for a truck."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"?- passedDrivingTest(Who, truck).\nWho = jack.\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"ii) allowedToDrive(mike, car)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This will output true if Mike is allowed to drive a car according to the knowledge base, based on having a license and meeting the minimum age requirement for driving a car."}),"\n",(0,s.jsx)(n.p,{children:"``prolog\n?- allowedToDrive(mike, car).\nfalse."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"iii) NOT(hasLicence(sheena))."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This will output true if Sheena does not have a license according to the knowledge base."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"?- hasLicence(sheena).\ntrue.\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"c) Write a clause to output:"}),"\n",(0,s.jsx)(n.p,{children:"i) all qualified car drivers."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"qualifiedCarDriver(X) :-\n   qualifiedDriver(X, car).\n"})}),"\n",(0,s.jsx)(n.p,{children:"ii) all drivers who have passed the theory test but not a driving test."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"passedTheoryButNotDriving(X) :-\n   passedTheoryTest(X),\n   NOT(passedDrivingTest(X, _)).\n"})}),"\n",(0,s.jsxs)(n.p,{children:["d) To produce the output from a clause, the inference engine uses a process called backtracking Consider the clause: ",(0,s.jsx)(n.code,{children:"allowedToDrive(mike, car)."})," Identify the order in which clauses are used to produce the output. For each clause, describe the result that it returns."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The clause ",(0,s.jsx)(n.code,{children:"allowedToDrive(X, V)"})," is used, where X = mike and V = car. It checks if Mike has a license and if his age is greater than or equal to the minimum age to drive a car. If both conditions are met, it returns true."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The clause ",(0,s.jsx)(n.code,{children:"hasLicence(mike)"})," is used to check if Mike has a license. If this is true, it proceeds to the next step."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The clause ",(0,s.jsx)(n.code,{children:"minimumAge(car, L)"})," is used to determine the minimum age to drive a car. If Mike's age is greater than or equal to this minimum age (which is 18), it returns true."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"So, if Mike is aged 17 (as per the provided knowledge base), the output would be false since he does not meet the minimum age requirement to drive a car."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prolog",children:"[trace]  ?- allowedToDrive(mike, car).\n   Call: (10) allowedToDrive(mike, car) ? creep\n   Call: (11) hasLicence(mike) ? creep\n   Exit: (11) hasLicence(mike) ? creep\n   Call: (11) minimumAge(car, _22812) ? creep\n   Exit: (11) minimumAge(car, 18) ? creep\n   Call: (11) age(mike, _24322) ? creep\n   Exit: (11) age(mike, 17) ? creep\n   Call: (11) 17>=18 ? creep\n   Fail: (11) 17>=18 ? creep\n   Fail: (10) allowedToDrive(mike, car) ? creep\nfalse.\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},6213:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>a});var s=i(959);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);