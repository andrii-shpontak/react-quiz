"use strict";(self.webpackChunkreact_quiz=self.webpackChunkreact_quiz||[]).push([[740],{740:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var i=o(56),n=o(43),s=o(125),r=o(476),a=o(216),c=o(579);const d=e=>{let{endResult:t}=e;const{percentageColor:o,percentage:i,correctOfAll:n,elapsedTime:d}=(0,r.h)(t),l=(0,a.Zp)();return(0,c.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,c.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md w-full max-w-md",children:[(0,c.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Quiz Results"}),(0,c.jsxs)("p",{className:"text-2xl font-bold mb-4 ".concat(o),children:["Percentage: ",i,"%"]}),(0,c.jsxs)("p",{className:"text-xl mb-4",children:["Correct Answers: ",n]}),(0,c.jsxs)("p",{className:"text-xl mb-4",children:["Time Taken: ",d," seconds"]}),(0,c.jsx)("button",{onClick:()=>{l(s.u.HOME)},className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600",children:"Close"})]})})};const l=e=>{let{timeLimit:t,isFinished:o}=e;const{minutesLeft:i,secondsLeft:s}=function(e,t){const[o,i]=(0,n.useState)(60*e);return(0,n.useEffect)((()=>{if(o<=0||t)return;const e=setInterval((()=>{i((e=>e-1))}),1e3);return()=>clearInterval(e)}),[o,t]),{minutesLeft:Math.floor(o/60),secondsLeft:o%60}}(t,o);return(0,c.jsx)("div",{className:"flex justify-center items-center mt-4",children:(0,c.jsxs)("div",{className:"text-".concat(o?"green":"red","-500 font-bold mb-4 text-2xl"),children:["Time remaining: ",i,":",s<10?"0".concat(s):s]})})};var m=o(350),u=o(180);function x(e){let{question:t,questionNumber:o,totalQuestions:i,onNext:s,quizTitle:r}=e;const[a,c]=(0,n.useState)(null),[d,l]=(0,n.useState)(!1),[x,h]=(0,n.useState)(!1),[p,f]=(0,n.useState)([]),[g,w]=(0,n.useState)(null),[b,k]=(0,n.useState)(null),[v,y]=(0,n.useState)(null),T=(0,n.useCallback)((e=>{const t=e.target.value;!d&&t&&c(Number(t))}),[c,d]),A=(0,n.useCallback)((()=>{if(null!==a){const e=t.correct_answers.includes(a);h(e),l(!0),f((t=>[...t,{questionId:o,answerId:a,correct:e}])),o===i&&k(new Date)}}),[l,h,t,a,f,o,k,i]),D=(0,n.useCallback)((()=>{if(o===i&&g&&b){const e=(new Date).toISOString().split(".")[0],t=function(e,t){const o=e&&t?(t.getTime()-e.getTime())/1e3:0,i=Math.floor(o/60),n=Math.floor(o%60);return"".concat(i,":").concat(n<10?"0"+n:n)}(g,b),o=u.s.getItem(m.H.Answers),i=o?JSON.parse(o):[],n={title:r,date:e,elapsedTime:t,answers:p};y(n);const s=[...i,n];u.s.setItem(m.H.Answers,JSON.stringify(s))}else s(),c(null),l(!1),h(!1)}),[p,o,i,s,r,b,g]);return(0,n.useEffect)((()=>{g||w(new Date)}),[g]),{isConfirmed:d,isCorrect:x,selectedOption:a,handleOptionChange:T,handleConfirm:A,handleNextClick:D,isFinished:!!b,endResult:v}}const h=e=>{let{question:t,questionNumber:o,totalQuestions:i,onNext:n,quizTitle:s,timeLimit:r}=e;const{isConfirmed:a,isCorrect:m,selectedOption:u,handleOptionChange:h,handleConfirm:p,handleNextClick:f,isFinished:g,endResult:w}=x({question:t,questionNumber:o,totalQuestions:i,onNext:n,quizTitle:s});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{timeLimit:r,isFinished:g}),(0,c.jsxs)("div",{className:"p-6 rounded-lg shadow-md border w-full max-w-xl mx-auto ".concat(a?m?"bg-green-100":"bg-red-100":"bg-white"," mb-6"),children:[(0,c.jsxs)("h3",{className:"text-xl font-bold mb-4",children:["Question ",o," of ",i]}),(0,c.jsx)("p",{className:"text-gray-800 mb-4",children:t.text}),(0,c.jsx)("ul",{children:t.options.map((e=>(0,c.jsx)("li",{className:"mb-2",children:(0,c.jsx)("label",{className:"flex items-center cursor-pointer w-full",children:(0,c.jsxs)("span",{className:"inline-block flex items-center p-2 border rounded-lg shadow-sm transition-colors ".concat(u===e.id?"bg-gray-300":"bg-gray-100"," ").concat(a&&u===e.id?m?"bg-green-100":"bg-red-100":""," hover:bg-gray-200 w-full"),style:{pointerEvents:a?"none":"auto"},children:[(0,c.jsx)("input",{type:"radio",name:"question-".concat(t.id),value:e.id,checked:u===e.id,onChange:h,disabled:a,className:"mx-3"}),e.text]})})},e.id)))}),a?(0,c.jsx)("button",{onClick:f,className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4",children:o===i?"Finish":"Next"}):(0,c.jsx)("button",{onClick:p,className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4",children:"Confirm"})]}),!!w&&(0,c.jsx)(d,{endResult:w})]})},p=e=>{let{quizInfo:t,startQuiz:o}=e;const{title:i,category:n,difficulty:s,timeLimit:r}=t;return(0,c.jsx)("div",{className:"flex justify-center items-center mt-10",children:(0,c.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-200 w-96",children:[(0,c.jsx)("h2",{className:"text-2xl font-bold mb-4",children:i}),(0,c.jsxs)("p",{className:"text-gray-700 mb-2",children:["Category: ",n]}),(0,c.jsxs)("p",{className:"text-gray-700 mb-2",children:["Difficulty: ",s]}),(0,c.jsxs)("p",{className:"text-gray-700 mb-4",children:["Time limit: ",r," minutes"]}),(0,c.jsx)("button",{onClick:o,className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600",children:"Start Quiz"})]})})},f=e=>{let{quizInfo:t}=e;const[o,i]=(0,n.useState)({inProcess:0}),s=(0,n.useCallback)((()=>{i((e=>({inProcess:e.inProcess+1})))}),[i]),r=(0,n.useMemo)((()=>t.questions.find((e=>e.id===o.inProcess))),[t,o.inProcess]);return(0,c.jsx)(c.Fragment,{children:o.inProcess&&r?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(h,{question:r,onNext:s,questionNumber:o.inProcess,totalQuestions:t.questions.length,quizTitle:t.title,timeLimit:t.timeLimit})}):(0,c.jsx)(p,{quizInfo:t,startQuiz:s})})};var g=o(888);var w=o(576);const b=()=>{const{id:e}=(0,a.g)(),{quizzesData:t,requestStatus:o}=(0,w.t)({}),{currentQuiz:s}=function(e){let{id:t,data:o}=e;const[i,s]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(t&&o&&o.length>0){const e=o.find((e=>e.title===t));e?s(e):console.error("Quiz with id ".concat(t," not found."))}}),[o,t]),{currentQuiz:i}}({id:e,data:t});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Y9,{title:e?"Quiz #".concat(e):""}),o===g.X.Pending&&(0,c.jsx)(i.aH,{}),!!s&&(0,c.jsx)(f,{quizInfo:s})]})}},180:(e,t,o)=>{o.d(t,{s:()=>i});class i{static setItem(e,t){return localStorage.setItem(e,function(e){return null===e&&void 0===e?"":"string"===typeof e?e:JSON.stringify(e)}(t))}static getItem(e){return localStorage.getItem(e)}static removeItem(e){localStorage.removeItem(e)}static clear(){localStorage.clear()}}},350:(e,t,o)=>{o.d(t,{H:()=>i});let i=function(e){return e.Answers="answers",e.Quizzes="quizzes",e}({})},888:(e,t,o)=>{o.d(t,{X:()=>i});let i=function(e){return e.Idle="Idle",e.Pending="Pending",e.Success="Success",e.Error="Error",e}({})},476:(e,t,o)=>{function i(e){const{elapsedTime:t,answers:o}=e;let i=0;for(let a=0;a<o.length;a++)o[a].correct&&i++;const n=Math.round(i/o.length*100),s="".concat(i," / ").concat(o.length);let r="";switch(!0){case n>=70:r="text-green-500";break;case n>50:r="text-orange-500";break;default:r="text-red-500"}return{percentageColor:r,percentage:n,correctOfAll:s,elapsedTime:t}}o.d(t,{h:()=>i})},962:(e,t,o)=>{o.d(t,{X:()=>i});const i=(n=500,s=2e3,Math.floor(Math.random()*(s-n+1))+n);var n,s},576:(e,t,o)=>{o.d(t,{t:()=>d});var i=o(43),n=o(350),s=o(180),r=o(888);const a=[{title:"React & TS",timeLimit:25,difficulty:"simple",category:"Frontend",custom:!1,questions:[{id:1,text:"What is TypeScript?",options:[{id:1,text:"A superset of JavaScript"},{id:2,text:"A programming language"},{id:3,text:"A library for React"},{id:4,text:"An IDE for web development"}],correct_answers:[1]},{id:2,text:"What is React?",options:[{id:1,text:"A JavaScript library for building user interfaces"},{id:2,text:"A programming language"},{id:3,text:"A database management system"}],correct_answers:[1]},{id:3,text:"What are hooks in React?",options:[{id:1,text:"Functions that let you use React features in functional components"},{id:2,text:"CSS classes for styling components"},{id:3,text:"Event listeners for handling user interactions"}],correct_answers:[1]},{id:4,text:"What is the purpose of JSX in React?",options:[{id:1,text:"To write HTML elements in JavaScript and render them in the DOM"},{id:2,text:"To style components using CSS"},{id:3,text:"To define routes for navigation"}],correct_answers:[1]},{id:5,text:"What is the output of the following code?\n\njavascript\nconst name = 'John';\nconst greeting = `Hello, ${name}`;\nconsole.log(greeting);\n",options:[{id:1,text:"Hello, John"},{id:2,text:"Hello, ${name}"},{id:3,text:"undefined"}],correct_answers:[1]},{id:6,text:"What does the useEffect hook do in React?",options:[{id:1,text:"It allows you to perform side effects in function components"},{id:2,text:"It handles form submissions"},{id:3,text:"It creates custom hooks"}],correct_answers:[1]},{id:7,text:"What is the purpose of the useState hook in React?",options:[{id:1,text:"To add state to functional components"},{id:2,text:"To fetch data from an API"},{id:3,text:"To handle routing in React applications"}],correct_answers:[1]},{id:8,text:"What is the correct way to import a named export in React?",options:[{id:1,text:"import { ComponentName } from 'module'"},{id:2,text:"import * as ComponentName from 'module'"},{id:3,text:"import ComponentName from 'module'"}],correct_answers:[1]},{id:9,text:"What is the purpose of props in React?",options:[{id:1,text:"To pass data from parent to child components"},{id:2,text:"To define CSS styles for components"},{id:3,text:"To handle form submissions"}],correct_answers:[1]},{id:10,text:"What is the output of the following code?\n\n```javascript\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled);\n```",options:[{id:1,text:"[1, 2, 3]"},{id:2,text:"[2, 4, 6]"},{id:3,text:"[2, 3, 4]"}],correct_answers:[2]},{id:11,text:"Which hook is used to perform data fetching in React?",options:[{id:1,text:"useFetch"},{id:2,text:"useEffect"},{id:3,text:"useAPI"}],correct_answers:[2]},{id:12,text:"What is the purpose of the useCallback hook in React?",options:[{id:1,text:"To create memoized functions"},{id:2,text:"To handle form submissions"},{id:3,text:"To manage state in functional components"}],correct_answers:[1]},{id:13,text:"What is JSX in React?",options:[{id:1,text:"A syntax extension for JavaScript"},{id:2,text:"A new programming language"},{id:3,text:"A build tool"}],correct_answers:[1]},{id:14,text:"What does the useMemo hook do in React?",options:[{id:1,text:"It allows you to perform side effects in function components"},{id:2,text:"It memoizes the result of a function"},{id:3,text:"It creates custom hooks"}],correct_answers:[2]},{id:15,text:"Which of the following is NOT a valid way to define state in React?",options:[{id:1,text:"Using the useState hook"},{id:2,text:"Using a class component's state property"},{id:3,text:"Using the useContext hook"}],correct_answers:[3]},{id:16,text:"What is the purpose of the useRef hook in React?",options:[{id:1,text:"To interact with the DOM"},{id:2,text:"To manage state in functional components"},{id:3,text:"To create memoized functions"}],correct_answers:[1]},{id:17,text:"What does the useContext hook do in React?",options:[{id:1,text:"It allows you to use context in functional components"},{id:2,text:"It allows you to perform side effects in function components"},{id:3,text:"It memoizes the result of a function"}],correct_answers:[1]},{id:18,text:"What is the purpose of the useReducer hook in React?",options:[{id:1,text:"To manage state in functional components"},{id:2,text:"To perform data fetching"},{id:3,text:"To create memoized functions"}],correct_answers:[1]},{id:19,text:"What is the purpose of the useEffect hook in React?",options:[{id:1,text:"To create memoized functions"},{id:2,text:"To perform side effects in function components"},{id:3,text:"To manage state in functional components"}],correct_answers:[2]},{id:20,text:"What is the purpose of the useMemo hook in React?",options:[{id:1,text:"To create memoized functions"},{id:2,text:"To memoize the result of a function"},{id:3,text:"To manage state in functional components"}],correct_answers:[2]},{id:21,text:"What does JSX stand for?",options:[{id:1,text:"JavaScript XML"},{id:2,text:"JavaScript Extensible"},{id:3,text:"Java Standard Extension"}],correct_answers:[1]},{id:22,text:"What is the purpose of the useCallback hook in React?",options:[{id:1,text:"To interact with the DOM"},{id:2,text:"To manage state in functional components"},{id:3,text:"To create memoized functions"}],correct_answers:[3]},{id:23,text:"What is the purpose of the useLayoutEffect hook in React?",options:[{id:1,text:"To perform data fetching"},{id:2,text:"To interact with the DOM"},{id:3,text:"To manage state in functional components"}],correct_answers:[2]},{id:24,text:"What is the purpose of the useRef hook in React?",options:[{id:1,text:"To interact with the DOM"},{id:2,text:"To manage state in functional components"},{id:3,text:"To create memoized functions"}],correct_answers:[1]},{id:25,text:"What is the purpose of the useReducer hook in React?",options:[{id:1,text:"To manage state in functional components"},{id:2,text:"To perform data fetching"},{id:3,text:"To create memoized functions"}],correct_answers:[1]}]},{title:"Docker & docker-compose",timeLimit:25,difficulty:"medium",category:"Devops",custom:!1,questions:[{id:1,text:"What is Docker?",options:[{id:1,text:"A containerization platform"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:2,text:"What is Docker Compose?",options:[{id:1,text:"A tool for defining and running multi-container Docker applications"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:3,text:"What is a Docker image?",options:[{id:1,text:"A lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files"},{id:2,text:"A file system snapshot"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:4,text:"What is a Docker container?",options:[{id:1,text:"A runtime instance of a Docker image"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:5,text:"What is the purpose of a Dockerfile?",options:[{id:1,text:"To define the contents and configuration of a Docker image"},{id:2,text:"To define routes for navigation"},{id:3,text:"To handle form submissions"}],correct_answers:[1]},{id:6,text:"What is the difference between a Docker image and a Docker container?",options:[{id:1,text:"An image is a template for containers, while a container is a running instance of an image"},{id:2,text:"There is no difference"},{id:3,text:"An image contains the application code, while a container contains the runtime environment"}],correct_answers:[1]},{id:7,text:"What is Docker Hub?",options:[{id:1,text:"A cloud-based registry service for sharing and storing Docker images"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:8,text:"What is Docker Swarm?",options:[{id:1,text:"A clustering and orchestration tool for Docker containers"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:9,text:"What is Docker Compose used for?",options:[{id:1,text:"Defining and running multi-container Docker applications"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:10,text:"What is the difference between Docker and virtual machines (VMs)?",options:[{id:1,text:"Docker containers share the host OS kernel, while VMs each have their own OS kernel"},{id:2,text:"There is no difference"},{id:3,text:"Docker containers are heavier and slower than VMs"}],correct_answers:[1]},{id:11,text:"What is Docker volume?",options:[{id:1,text:"A mechanism for persisting data generated by and used by Docker containers"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:12,text:"What is Docker network?",options:[{id:1,text:"A communication bridge between containers, allowing them to communicate with each other"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:13,text:"What is Dockerfile?",options:[{id:1,text:"A text document that contains all the commands a user could call on the command line to assemble an image"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:14,text:"What is Docker image registry?",options:[{id:1,text:"A storage location where Docker images can be stored and retrieved"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:15,text:"What is Docker Swarm?",options:[{id:1,text:"A clustering and orchestration tool for Docker containers"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:16,text:"What is Docker Compose file?",options:[{id:1,text:"A YAML file that defines how Docker containers should behave in production"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:17,text:"What is the purpose of Docker Compose?",options:[{id:1,text:"Defining and running multi-container Docker applications"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:18,text:"What is the Docker command to build an image from a Dockerfile?",options:[{id:1,text:"docker build"},{id:2,text:"docker run"},{id:3,text:"docker compose"}],correct_answers:[1]},{id:19,text:"What is the Docker command to run a container?",options:[{id:1,text:"docker run"},{id:2,text:"docker build"},{id:3,text:"docker compose"}],correct_answers:[1]},{id:20,text:"What is the purpose of the 'docker-compose up' command?",options:[{id:1,text:"To start all the services defined in a Docker Compose file"},{id:2,text:"To stop all the services defined in a Docker Compose file"},{id:3,text:"To build Docker images"}],correct_answers:[1]},{id:21,text:"What is the purpose of the 'docker-compose down' command?",options:[{id:1,text:"To stop and remove the containers, networks, and volumes defined in a Docker Compose file"},{id:2,text:"To start all the services defined in a Docker Compose file"},{id:3,text:"To build Docker images"}],correct_answers:[1]},{id:22,text:"What is the purpose of Docker Compose volumes?",options:[{id:1,text:"To persist data generated by and used by Docker containers"},{id:2,text:"To define CSS styles for components"},{id:3,text:"To handle form submissions"}],correct_answers:[1]},{id:23,text:"What is Docker Compose network?",options:[{id:1,text:"A communication bridge between containers, allowing them to communicate with each other"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:24,text:"What is Docker Compose service?",options:[{id:1,text:"A containerized application"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:25,text:"What is the Docker Compose command to scale a service?",options:[{id:1,text:"docker-compose scale"},{id:2,text:"docker-compose up"},{id:3,text:"docker-compose run"}],correct_answers:[1]}]}];var c=o(962);function d(e){let{id:t}=e;const[o,d]=(0,i.useState)([]),[l,m]=(0,i.useState)(r.X.Idle),u=(0,i.useCallback)((async()=>{m(r.X.Pending);try{const e=await new Promise((e=>{setTimeout((()=>e(a)),c.X)})),t=s.s.getItem(n.H.Quizzes),o=t?JSON.parse(t):[];d([...e,...o]),m(r.X.Success)}catch(e){console.error("Failed to fetch quizzes:",e),m(r.X.Error)}}),[]);return(0,i.useEffect)((()=>{u()}),[]),{quizzesData:o,requestStatus:l}}}}]);
//# sourceMappingURL=740.bdb8e2c2.chunk.js.map