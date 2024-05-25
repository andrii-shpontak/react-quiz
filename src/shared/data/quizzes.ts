import type { TQuiz } from '../types';

export const quizzes: TQuiz[] = [
  {
    title: 'React & TS',
    timeLimit: 25,
    difficulty: 'simple',
    category: 'Frontend',
    questions: [
      {
        id: 1,
        text: 'What is TypeScript?',

        options: [
          {
            id: 1,
            text: 'A superset of JavaScript',
          },
          {
            id: 2,
            text: 'A programming language',
          },
          {
            id: 3,
            text: 'A library for React',
          },
          {
            id: 4,
            text: 'An IDE for web development',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 2,
        text: 'What is React?',

        options: [
          {
            id: 1,
            text: 'A JavaScript library for building user interfaces',
          },
          {
            id: 2,
            text: 'A programming language',
          },
          {
            id: 3,
            text: 'A database management system',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 3,
        text: 'What are hooks in React?',

        options: [
          {
            id: 1,
            text: 'Functions that let you use React features in functional components',
          },
          {
            id: 2,
            text: 'CSS classes for styling components',
          },
          {
            id: 3,
            text: 'Event listeners for handling user interactions',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 4,
        text: 'What is the purpose of JSX in React?',

        options: [
          {
            id: 1,
            text: 'To write HTML elements in JavaScript and render them in the DOM',
          },
          {
            id: 2,
            text: 'To style components using CSS',
          },
          {
            id: 3,
            text: 'To define routes for navigation',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 5,
        text: "What is the output of the following code?\n\njavascript\nconst name = 'John';\nconst greeting = `Hello, ${name}`;\nconsole.log(greeting);\n",

        options: [
          {
            id: 1,
            text: 'Hello, John',
          },
          {
            id: 2,
            text: 'Hello, ${name}',
          },
          {
            id: 3,
            text: 'undefined',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 6,
        text: 'What does the useEffect hook do in React?',

        options: [
          {
            id: 1,
            text: 'It allows you to perform side effects in function components',
          },
          {
            id: 2,
            text: 'It handles form submissions',
          },
          {
            id: 3,
            text: 'It creates custom hooks',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 7,
        text: 'What is the purpose of the useState hook in React?',

        options: [
          {
            id: 1,
            text: 'To add state to functional components',
          },
          {
            id: 2,
            text: 'To fetch data from an API',
          },
          {
            id: 3,
            text: 'To handle routing in React applications',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 8,
        text: 'What is the correct way to import a named export in React?',

        options: [
          {
            id: 1,
            text: "import { ComponentName } from 'module'",
          },
          {
            id: 2,
            text: "import * as ComponentName from 'module'",
          },
          {
            id: 3,
            text: "import ComponentName from 'module'",
          },
        ],
        correct_answers: [1],
      },
      {
        id: 9,
        text: 'What is the purpose of props in React?',

        options: [
          {
            id: 1,
            text: 'To pass data from parent to child components',
          },
          {
            id: 2,
            text: 'To define CSS styles for components',
          },
          {
            id: 3,
            text: 'To handle form submissions',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 10,
        text: 'What is the output of the following code?\n\n```javascript\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled);\n```',

        options: [
          {
            id: 1,
            text: '[1, 2, 3]',
          },
          {
            id: 2,
            text: '[2, 4, 6]',
          },
          {
            id: 3,
            text: '[2, 3, 4]',
          },
        ],
        correct_answers: [2],
      },
      {
        id: 11,
        text: 'Which hook is used to perform data fetching in React?',

        options: [
          {
            id: 1,
            text: 'useFetch',
          },
          {
            id: 2,
            text: 'useEffect',
          },
          {
            id: 3,
            text: 'useAPI',
          },
        ],
        correct_answers: [2],
      },
      {
        id: 12,
        text: 'What is the purpose of the useCallback hook in React?',

        options: [
          {
            id: 1,
            text: 'To create memoized functions',
          },
          {
            id: 2,
            text: 'To handle form submissions',
          },
          {
            id: 3,
            text: 'To manage state in functional components',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 13,
        text: 'What is JSX in React?',

        options: [
          {
            id: 1,
            text: 'A syntax extension for JavaScript',
          },
          {
            id: 2,
            text: 'A new programming language',
          },
          {
            id: 3,
            text: 'A build tool',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 14,
        text: 'What does the useMemo hook do in React?',

        options: [
          {
            id: 1,
            text: 'It allows you to perform side effects in function components',
          },
          {
            id: 2,
            text: 'It memoizes the result of a function',
          },
          {
            id: 3,
            text: 'It creates custom hooks',
          },
        ],
        correct_answers: [2],
      },
      {
        id: 15,
        text: 'Which of the following is NOT a valid way to define state in React?',

        options: [
          {
            id: 1,
            text: 'Using the useState hook',
          },
          {
            id: 2,
            text: "Using a class component's state property",
          },
          {
            id: 3,
            text: 'Using the useContext hook',
          },
        ],
        correct_answers: [3],
      },
      {
        id: 16,
        text: 'What is the purpose of the useRef hook in React?',

        options: [
          {
            id: 1,
            text: 'To interact with the DOM',
          },
          {
            id: 2,
            text: 'To manage state in functional components',
          },
          {
            id: 3,
            text: 'To create memoized functions',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 17,
        text: 'What does the useContext hook do in React?',

        options: [
          {
            id: 1,
            text: 'It allows you to use context in functional components',
          },
          {
            id: 2,
            text: 'It allows you to perform side effects in function components',
          },
          {
            id: 3,
            text: 'It memoizes the result of a function',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 18,
        text: 'What is the purpose of the useReducer hook in React?',

        options: [
          {
            id: 1,
            text: 'To manage state in functional components',
          },
          {
            id: 2,
            text: 'To perform data fetching',
          },
          {
            id: 3,
            text: 'To create memoized functions',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 19,
        text: 'What is the purpose of the useEffect hook in React?',

        options: [
          {
            id: 1,
            text: 'To create memoized functions',
          },
          {
            id: 2,
            text: 'To perform side effects in function components',
          },
          {
            id: 3,
            text: 'To manage state in functional components',
          },
        ],
        correct_answers: [2],
      },
      {
        id: 20,
        text: 'What is the purpose of the useMemo hook in React?',

        options: [
          {
            id: 1,
            text: 'To create memoized functions',
          },
          {
            id: 2,
            text: 'To memoize the result of a function',
          },
          {
            id: 3,
            text: 'To manage state in functional components',
          },
        ],
        correct_answers: [2],
      },
      {
        id: 21,
        text: 'What does JSX stand for?',

        options: [
          {
            id: 1,
            text: 'JavaScript XML',
          },
          {
            id: 2,
            text: 'JavaScript Extensible',
          },
          {
            id: 3,
            text: 'Java Standard Extension',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 22,
        text: 'What is the purpose of the useCallback hook in React?',

        options: [
          {
            id: 1,
            text: 'To interact with the DOM',
          },
          {
            id: 2,
            text: 'To manage state in functional components',
          },
          {
            id: 3,
            text: 'To create memoized functions',
          },
        ],
        correct_answers: [3],
      },
      {
        id: 23,
        text: 'What is the purpose of the useLayoutEffect hook in React?',

        options: [
          {
            id: 1,
            text: 'To perform data fetching',
          },
          {
            id: 2,
            text: 'To interact with the DOM',
          },
          {
            id: 3,
            text: 'To manage state in functional components',
          },
        ],
        correct_answers: [2],
      },
      {
        id: 24,
        text: 'What is the purpose of the useRef hook in React?',

        options: [
          {
            id: 1,
            text: 'To interact with the DOM',
          },
          {
            id: 2,
            text: 'To manage state in functional components',
          },
          {
            id: 3,
            text: 'To create memoized functions',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 25,
        text: 'What is the purpose of the useReducer hook in React?',

        options: [
          {
            id: 1,
            text: 'To manage state in functional components',
          },
          {
            id: 2,
            text: 'To perform data fetching',
          },
          {
            id: 3,
            text: 'To create memoized functions',
          },
        ],
        correct_answers: [1],
      },
    ],
  },
  {
    title: 'Docker & docker-compose',
    timeLimit: 25,
    difficulty: 'medium',
    category: 'Devops',
    questions: [
      {
        id: 1,
        text: 'What is Docker?',

        options: [
          {
            id: 1,
            text: 'A containerization platform',
          },
          {
            id: 2,
            text: 'A programming language',
          },
          {
            id: 3,
            text: 'A version control system',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 2,
        text: 'What is Docker Compose?',

        options: [
          {
            id: 1,
            text: 'A tool for defining and running multi-container Docker applications',
          },
          {
            id: 2,
            text: 'A programming language',
          },
          {
            id: 3,
            text: 'A version control system',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 3,
        text: 'What is a Docker image?',

        options: [
          {
            id: 1,
            text: 'A lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files',
          },
          {
            id: 2,
            text: 'A file system snapshot',
          },
          {
            id: 3,
            text: 'A version control system',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 4,
        text: 'What is a Docker container?',

        options: [
          {
            id: 1,
            text: 'A runtime instance of a Docker image',
          },
          {
            id: 2,
            text: 'A version control system',
          },
          {
            id: 3,
            text: 'A programming language',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 5,
        text: 'What is the purpose of a Dockerfile?',

        options: [
          {
            id: 1,
            text: 'To define the contents and configuration of a Docker image',
          },
          {
            id: 2,
            text: 'To define routes for navigation',
          },
          {
            id: 3,
            text: 'To handle form submissions',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 6,
        text: 'What is the difference between a Docker image and a Docker container?',

        options: [
          {
            id: 1,
            text: 'An image is a template for containers, while a container is a running instance of an image',
          },
          {
            id: 2,
            text: 'There is no difference',
          },
          {
            id: 3,
            text: 'An image contains the application code, while a container contains the runtime environment',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 7,
        text: 'What is Docker Hub?',

        options: [
          {
            id: 1,
            text: 'A cloud-based registry service for sharing and storing Docker images',
          },
          {
            id: 2,
            text: 'A version control system',
          },
          {
            id: 3,
            text: 'A programming language',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 8,
        text: 'What is Docker Swarm?',

        options: [
          {
            id: 1,
            text: 'A clustering and orchestration tool for Docker containers',
          },
          {
            id: 2,
            text: 'A version control system',
          },
          {
            id: 3,
            text: 'A programming language',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 9,
        text: 'What is Docker Compose used for?',

        options: [
          {
            id: 1,
            text: 'Defining and running multi-container Docker applications',
          },
          {
            id: 2,
            text: 'A programming language',
          },
          {
            id: 3,
            text: 'A version control system',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 10,
        text: 'What is the difference between Docker and virtual machines (VMs)?',

        options: [
          {
            id: 1,
            text: 'Docker containers share the host OS kernel, while VMs each have their own OS kernel',
          },
          {
            id: 2,
            text: 'There is no difference',
          },
          {
            id: 3,
            text: 'Docker containers are heavier and slower than VMs',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 11,
        text: 'What is Docker volume?',

        options: [
          {
            id: 1,
            text: 'A mechanism for persisting data generated by and used by Docker containers',
          },
          {
            id: 2,
            text: 'A programming language',
          },
          {
            id: 3,
            text: 'A version control system',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 12,
        text: 'What is Docker network?',

        options: [
          {
            id: 1,
            text: 'A communication bridge between containers, allowing them to communicate with each other',
          },
          {
            id: 2,
            text: 'A version control system',
          },
          {
            id: 3,
            text: 'A programming language',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 13,
        text: 'What is Dockerfile?',

        options: [
          {
            id: 1,
            text: 'A text document that contains all the commands a user could call on the command line to assemble an image',
          },
          {
            id: 2,
            text: 'A version control system',
          },
          {
            id: 3,
            text: 'A programming language',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 14,
        text: 'What is Docker image registry?',

        options: [
          {
            id: 1,
            text: 'A storage location where Docker images can be stored and retrieved',
          },
          {
            id: 2,
            text: 'A version control system',
          },
          {
            id: 3,
            text: 'A programming language',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 15,
        text: 'What is Docker Swarm?',

        options: [
          {
            id: 1,
            text: 'A clustering and orchestration tool for Docker containers',
          },
          {
            id: 2,
            text: 'A version control system',
          },
          {
            id: 3,
            text: 'A programming language',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 16,
        text: 'What is Docker Compose file?',

        options: [
          {
            id: 1,
            text: 'A YAML file that defines how Docker containers should behave in production',
          },
          {
            id: 2,
            text: 'A version control system',
          },
          {
            id: 3,
            text: 'A programming language',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 17,
        text: 'What is the purpose of Docker Compose?',

        options: [
          {
            id: 1,
            text: 'Defining and running multi-container Docker applications',
          },
          {
            id: 2,
            text: 'A programming language',
          },
          {
            id: 3,
            text: 'A version control system',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 18,
        text: 'What is the Docker command to build an image from a Dockerfile?',

        options: [
          {
            id: 1,
            text: 'docker build',
          },
          {
            id: 2,
            text: 'docker run',
          },
          {
            id: 3,
            text: 'docker compose',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 19,
        text: 'What is the Docker command to run a container?',

        options: [
          {
            id: 1,
            text: 'docker run',
          },
          {
            id: 2,
            text: 'docker build',
          },
          {
            id: 3,
            text: 'docker compose',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 19,
        text: 'What is the Docker command to run a container?',

        options: [
          {
            id: 1,
            text: 'docker run',
          },
          {
            id: 2,
            text: 'docker build',
          },
          {
            id: 3,
            text: 'docker compose',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 20,
        text: "What is the purpose of the 'docker-compose up' command?",

        options: [
          {
            id: 1,
            text: 'To start all the services defined in a Docker Compose file',
          },
          {
            id: 2,
            text: 'To stop all the services defined in a Docker Compose file',
          },
          {
            id: 3,
            text: 'To build Docker images',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 21,
        text: "What is the purpose of the 'docker-compose down' command?",

        options: [
          {
            id: 1,
            text: 'To stop and remove the containers, networks, and volumes defined in a Docker Compose file',
          },
          {
            id: 2,
            text: 'To start all the services defined in a Docker Compose file',
          },
          {
            id: 3,
            text: 'To build Docker images',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 22,
        text: 'What is the purpose of Docker Compose volumes?',

        options: [
          {
            id: 1,
            text: 'To persist data generated by and used by Docker containers',
          },
          {
            id: 2,
            text: 'To define CSS styles for components',
          },
          {
            id: 3,
            text: 'To handle form submissions',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 23,
        text: 'What is Docker Compose network?',

        options: [
          {
            id: 1,
            text: 'A communication bridge between containers, allowing them to communicate with each other',
          },
          {
            id: 2,
            text: 'A programming language',
          },
          {
            id: 3,
            text: 'A version control system',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 24,
        text: 'What is Docker Compose service?',

        options: [
          {
            id: 1,
            text: 'A containerized application',
          },
          {
            id: 2,
            text: 'A version control system',
          },
          {
            id: 3,
            text: 'A programming language',
          },
        ],
        correct_answers: [1],
      },
      {
        id: 25,
        text: 'What is the Docker Compose command to scale a service?',

        options: [
          {
            id: 1,
            text: 'docker-compose scale',
          },
          {
            id: 2,
            text: 'docker-compose up',
          },
          {
            id: 3,
            text: 'docker-compose run',
          },
        ],
        correct_answers: [1],
      },
    ],
  },
];
