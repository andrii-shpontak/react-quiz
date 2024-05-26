"use strict";(self.webpackChunkreact_quiz=self.webpackChunkreact_quiz||[]).push([[805],{805:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var i,n=o(56),s=o(125),r=o(475),a=o(43);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)({}).hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},c.apply(null,arguments)}function d(e,t){let{title:o,titleId:n,...s}=e;return a.createElement("svg",c({fill:"#3B82F6",width:"800px",height:"800px",viewBox:"0 0 45.402 45.402",xmlSpace:"preserve",ref:t,"aria-labelledby":n},s),o?a.createElement("title",{id:n},o):null,i||(i=a.createElement("g",null,a.createElement("path",{d:"M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"}))))}const m=a.forwardRef(d);o.p;var l=o(888),u=o(576),x=o(579);const h=()=>{const{quizzesData:e,requestStatus:t}=(0,u.t)({});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.Y9,{title:"Home page"}),t===l.X.Pending?(0,x.jsx)(n.aH,{}):(0,x.jsxs)("section",{className:"flex items-center h-screen mt-4 flex-col",children:[(0,x.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Select a Quiz to Get Started!"}),(0,x.jsxs)("div",{className:"mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,x.jsx)("div",{className:"p-4 border border-gray-300 rounded-md shadow-md transition-colors hover:bg-gray-50",children:(0,x.jsx)(r.N_,{to:s.u.CREATE_QUIZ,className:"block text-blue-500 hover:underline h-full w-full flex items-center justify-center",children:(0,x.jsx)(m,{className:"h-5 w-5"})})}),e.map(((e,t)=>(0,x.jsx)("div",{className:"p-4 border border-gray-300 rounded-md shadow-md transition-colors hover:bg-gray-50",children:(0,x.jsx)(r.N_,{to:"".concat(s.u.QUIZ_PAGE,"/").concat(e.title),className:"block text-blue-500 hover:underline",children:e.title})},t)))]})]})]})}},180:(e,t,o)=>{o.d(t,{s:()=>i});class i{static setItem(e,t){return localStorage.setItem(e,function(e){return null===e&&void 0===e?"":"string"===typeof e?e:JSON.stringify(e)}(t))}static getItem(e){return localStorage.getItem(e)}static removeItem(e){localStorage.removeItem(e)}static clear(){localStorage.clear()}}},350:(e,t,o)=>{o.d(t,{H:()=>i});let i=function(e){return e.Answers="answers",e.Quizzes="quizzes",e}({})},888:(e,t,o)=>{o.d(t,{X:()=>i});let i=function(e){return e.Idle="Idle",e.Pending="Pending",e.Success="Success",e.Error="Error",e}({})},962:(e,t,o)=>{o.d(t,{X:()=>i});const i=(n=500,s=2e3,Math.floor(Math.random()*(s-n+1))+n);var n,s},576:(e,t,o)=>{o.d(t,{t:()=>d});var i=o(43),n=o(350),s=o(180),r=o(888);const a=[{title:"React & TS",timeLimit:25,difficulty:"simple",category:"Frontend",custom:!1,questions:[{id:1,text:"What is TypeScript?",options:[{id:1,text:"A superset of JavaScript"},{id:2,text:"A programming language"},{id:3,text:"A library for React"},{id:4,text:"An IDE for web development"}],correct_answers:[1]},{id:2,text:"What is React?",options:[{id:1,text:"A JavaScript library for building user interfaces"},{id:2,text:"A programming language"},{id:3,text:"A database management system"}],correct_answers:[1]},{id:3,text:"What are hooks in React?",options:[{id:1,text:"Functions that let you use React features in functional components"},{id:2,text:"CSS classes for styling components"},{id:3,text:"Event listeners for handling user interactions"}],correct_answers:[1]},{id:4,text:"What is the purpose of JSX in React?",options:[{id:1,text:"To write HTML elements in JavaScript and render them in the DOM"},{id:2,text:"To style components using CSS"},{id:3,text:"To define routes for navigation"}],correct_answers:[1]},{id:5,text:"What is the output of the following code?\n\njavascript\nconst name = 'John';\nconst greeting = `Hello, ${name}`;\nconsole.log(greeting);\n",options:[{id:1,text:"Hello, John"},{id:2,text:"Hello, ${name}"},{id:3,text:"undefined"}],correct_answers:[1]},{id:6,text:"What does the useEffect hook do in React?",options:[{id:1,text:"It allows you to perform side effects in function components"},{id:2,text:"It handles form submissions"},{id:3,text:"It creates custom hooks"}],correct_answers:[1]},{id:7,text:"What is the purpose of the useState hook in React?",options:[{id:1,text:"To add state to functional components"},{id:2,text:"To fetch data from an API"},{id:3,text:"To handle routing in React applications"}],correct_answers:[1]},{id:8,text:"What is the correct way to import a named export in React?",options:[{id:1,text:"import { ComponentName } from 'module'"},{id:2,text:"import * as ComponentName from 'module'"},{id:3,text:"import ComponentName from 'module'"}],correct_answers:[1]},{id:9,text:"What is the purpose of props in React?",options:[{id:1,text:"To pass data from parent to child components"},{id:2,text:"To define CSS styles for components"},{id:3,text:"To handle form submissions"}],correct_answers:[1]},{id:10,text:"What is the output of the following code?\n\n```javascript\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled);\n```",options:[{id:1,text:"[1, 2, 3]"},{id:2,text:"[2, 4, 6]"},{id:3,text:"[2, 3, 4]"}],correct_answers:[2]},{id:11,text:"Which hook is used to perform data fetching in React?",options:[{id:1,text:"useFetch"},{id:2,text:"useEffect"},{id:3,text:"useAPI"}],correct_answers:[2]},{id:12,text:"What is the purpose of the useCallback hook in React?",options:[{id:1,text:"To create memoized functions"},{id:2,text:"To handle form submissions"},{id:3,text:"To manage state in functional components"}],correct_answers:[1]},{id:13,text:"What is JSX in React?",options:[{id:1,text:"A syntax extension for JavaScript"},{id:2,text:"A new programming language"},{id:3,text:"A build tool"}],correct_answers:[1]},{id:14,text:"What does the useMemo hook do in React?",options:[{id:1,text:"It allows you to perform side effects in function components"},{id:2,text:"It memoizes the result of a function"},{id:3,text:"It creates custom hooks"}],correct_answers:[2]},{id:15,text:"Which of the following is NOT a valid way to define state in React?",options:[{id:1,text:"Using the useState hook"},{id:2,text:"Using a class component's state property"},{id:3,text:"Using the useContext hook"}],correct_answers:[3]},{id:16,text:"What is the purpose of the useRef hook in React?",options:[{id:1,text:"To interact with the DOM"},{id:2,text:"To manage state in functional components"},{id:3,text:"To create memoized functions"}],correct_answers:[1]},{id:17,text:"What does the useContext hook do in React?",options:[{id:1,text:"It allows you to use context in functional components"},{id:2,text:"It allows you to perform side effects in function components"},{id:3,text:"It memoizes the result of a function"}],correct_answers:[1]},{id:18,text:"What is the purpose of the useReducer hook in React?",options:[{id:1,text:"To manage state in functional components"},{id:2,text:"To perform data fetching"},{id:3,text:"To create memoized functions"}],correct_answers:[1]},{id:19,text:"What is the purpose of the useEffect hook in React?",options:[{id:1,text:"To create memoized functions"},{id:2,text:"To perform side effects in function components"},{id:3,text:"To manage state in functional components"}],correct_answers:[2]},{id:20,text:"What is the purpose of the useMemo hook in React?",options:[{id:1,text:"To create memoized functions"},{id:2,text:"To memoize the result of a function"},{id:3,text:"To manage state in functional components"}],correct_answers:[2]},{id:21,text:"What does JSX stand for?",options:[{id:1,text:"JavaScript XML"},{id:2,text:"JavaScript Extensible"},{id:3,text:"Java Standard Extension"}],correct_answers:[1]},{id:22,text:"What is the purpose of the useCallback hook in React?",options:[{id:1,text:"To interact with the DOM"},{id:2,text:"To manage state in functional components"},{id:3,text:"To create memoized functions"}],correct_answers:[3]},{id:23,text:"What is the purpose of the useLayoutEffect hook in React?",options:[{id:1,text:"To perform data fetching"},{id:2,text:"To interact with the DOM"},{id:3,text:"To manage state in functional components"}],correct_answers:[2]},{id:24,text:"What is the purpose of the useRef hook in React?",options:[{id:1,text:"To interact with the DOM"},{id:2,text:"To manage state in functional components"},{id:3,text:"To create memoized functions"}],correct_answers:[1]},{id:25,text:"What is the purpose of the useReducer hook in React?",options:[{id:1,text:"To manage state in functional components"},{id:2,text:"To perform data fetching"},{id:3,text:"To create memoized functions"}],correct_answers:[1]}]},{title:"Docker & docker-compose",timeLimit:25,difficulty:"medium",category:"Devops",custom:!1,questions:[{id:1,text:"What is Docker?",options:[{id:1,text:"A containerization platform"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:2,text:"What is Docker Compose?",options:[{id:1,text:"A tool for defining and running multi-container Docker applications"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:3,text:"What is a Docker image?",options:[{id:1,text:"A lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files"},{id:2,text:"A file system snapshot"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:4,text:"What is a Docker container?",options:[{id:1,text:"A runtime instance of a Docker image"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:5,text:"What is the purpose of a Dockerfile?",options:[{id:1,text:"To define the contents and configuration of a Docker image"},{id:2,text:"To define routes for navigation"},{id:3,text:"To handle form submissions"}],correct_answers:[1]},{id:6,text:"What is the difference between a Docker image and a Docker container?",options:[{id:1,text:"An image is a template for containers, while a container is a running instance of an image"},{id:2,text:"There is no difference"},{id:3,text:"An image contains the application code, while a container contains the runtime environment"}],correct_answers:[1]},{id:7,text:"What is Docker Hub?",options:[{id:1,text:"A cloud-based registry service for sharing and storing Docker images"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:8,text:"What is Docker Swarm?",options:[{id:1,text:"A clustering and orchestration tool for Docker containers"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:9,text:"What is Docker Compose used for?",options:[{id:1,text:"Defining and running multi-container Docker applications"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:10,text:"What is the difference between Docker and virtual machines (VMs)?",options:[{id:1,text:"Docker containers share the host OS kernel, while VMs each have their own OS kernel"},{id:2,text:"There is no difference"},{id:3,text:"Docker containers are heavier and slower than VMs"}],correct_answers:[1]},{id:11,text:"What is Docker volume?",options:[{id:1,text:"A mechanism for persisting data generated by and used by Docker containers"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:12,text:"What is Docker network?",options:[{id:1,text:"A communication bridge between containers, allowing them to communicate with each other"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:13,text:"What is Dockerfile?",options:[{id:1,text:"A text document that contains all the commands a user could call on the command line to assemble an image"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:14,text:"What is Docker image registry?",options:[{id:1,text:"A storage location where Docker images can be stored and retrieved"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:15,text:"What is Docker Swarm?",options:[{id:1,text:"A clustering and orchestration tool for Docker containers"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:16,text:"What is Docker Compose file?",options:[{id:1,text:"A YAML file that defines how Docker containers should behave in production"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:17,text:"What is the purpose of Docker Compose?",options:[{id:1,text:"Defining and running multi-container Docker applications"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:18,text:"What is the Docker command to build an image from a Dockerfile?",options:[{id:1,text:"docker build"},{id:2,text:"docker run"},{id:3,text:"docker compose"}],correct_answers:[1]},{id:19,text:"What is the Docker command to run a container?",options:[{id:1,text:"docker run"},{id:2,text:"docker build"},{id:3,text:"docker compose"}],correct_answers:[1]},{id:20,text:"What is the purpose of the 'docker-compose up' command?",options:[{id:1,text:"To start all the services defined in a Docker Compose file"},{id:2,text:"To stop all the services defined in a Docker Compose file"},{id:3,text:"To build Docker images"}],correct_answers:[1]},{id:21,text:"What is the purpose of the 'docker-compose down' command?",options:[{id:1,text:"To stop and remove the containers, networks, and volumes defined in a Docker Compose file"},{id:2,text:"To start all the services defined in a Docker Compose file"},{id:3,text:"To build Docker images"}],correct_answers:[1]},{id:22,text:"What is the purpose of Docker Compose volumes?",options:[{id:1,text:"To persist data generated by and used by Docker containers"},{id:2,text:"To define CSS styles for components"},{id:3,text:"To handle form submissions"}],correct_answers:[1]},{id:23,text:"What is Docker Compose network?",options:[{id:1,text:"A communication bridge between containers, allowing them to communicate with each other"},{id:2,text:"A programming language"},{id:3,text:"A version control system"}],correct_answers:[1]},{id:24,text:"What is Docker Compose service?",options:[{id:1,text:"A containerized application"},{id:2,text:"A version control system"},{id:3,text:"A programming language"}],correct_answers:[1]},{id:25,text:"What is the Docker Compose command to scale a service?",options:[{id:1,text:"docker-compose scale"},{id:2,text:"docker-compose up"},{id:3,text:"docker-compose run"}],correct_answers:[1]}]}];var c=o(962);function d(e){let{id:t}=e;const[o,d]=(0,i.useState)([]),[m,l]=(0,i.useState)(r.X.Idle),u=(0,i.useCallback)((async()=>{l(r.X.Pending);try{const e=await new Promise((e=>{setTimeout((()=>e(a)),c.X)})),t=s.s.getItem(n.H.Quizzes),o=t?JSON.parse(t):[];d([...e,...o]),l(r.X.Success)}catch(e){console.error("Failed to fetch quizzes:",e),l(r.X.Error)}}),[]);return(0,i.useEffect)((()=>{u()}),[]),{quizzesData:o,requestStatus:m}}}}]);
//# sourceMappingURL=805.b2df1df2.chunk.js.map