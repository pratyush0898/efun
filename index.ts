// Import all functions from the respective files for arrays, math, and strings
import * as arrayFuncs from './js/array';
import * as mathFuncs from './js/math';
import * as stringFuncs from './js/string';

// Define an interface for Efun object specifying function signatures
interface Efun {
  // Reverses the order of elements in an array
  reverseArray(array: any[]): any[];

  // Mathematical functions
  sum(a: number, b: number): number;
  sub(a: number, b: number): number;
  mul(a: number, b: number): number;
  div(a: number, b: number): number;
  pow(a: number, b: number): number;
  sqrt(a: number): number;

  // Trigonometric functions
  sin(a: number): number;
  cos(a: number): number;
  tan(a: number): number;

  // Inverse trigonometric functions
  asin(a: number): number;
  acos(a: number): number;
  atan(a: number): number;

  // Hyperbolic functions
  sinh(a: number): number;
  cosh(a: number): number;
  tanh(a: number): number;

  // Logarithm function with custom base
  log(a: number, b: number): number;

  // String manipulation functions
  capitalizeString(str: string): string;
  capitalizeFirstLetter(str: string): string;
  capitalizeFirstLetterOfEachWord(str: string): string;
  capitalizeAllWords(str: string): string;
  reverseString(str: string): string;
}

interface main {
  // Basic types
  name: string;
  age: number;
  active: boolean;

  // Union type
  loginId: string | number;  // Can be username (string) or user ID (number)

  // Array
  skills: string[];  // Array of strings

  // Object
  address: {
    street: string;
    city: string;
    state?: string;  // Optional property (can be undefined)
};
  // Interface example (assuming a function exists)
  greet: GreetFunction;  // Interface defining function signature
};
type Person = {
  name: string;
  age: number;
  hobbies?: string[];  // Optional property (can be undefined)
};

interface Product {
  name: string;
  price: number;
  getInfo(): string; // Method signature (doesn't define implementation)
}

class Car {
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }

  accelerate() {
    console.log("Car is accelerating!");
  }
}

function identity<T>(value: T): T {
  return value;
}

const numberIdentity = identity<number>(10); // numberIdentity will be of type number
const stringIdentity = identity<string>("hello"); // stringIdentity will be of type string



interface GreetFunction {
  (name: string): string;
}


const json = {
  "name": "efun",
  "version": "1.3.0",
  "description": "A collection of extra utility functions to enhance your JavaScript projects.",
  "main": "index.ts",
  "scripts": {
    "build": "tsc",
    "run": "ts-node index.ts",
    "test": "mocha"
  },
  "keywords": [
    "efun",
    "utility",
    "functions",
    "extra",
    "javascript"
  ],
  "author": "nvmPratyush",
  "license": "Apache-2.0",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/pratyush0898/efun.git"
  },
  "bugs": {
    "url": "https://github.com/pratyush0898/efun/issues"
  },
  "homepage": "https://github.com/pratyush0898/efun#readme"
}

const Publish = {
  "name": "Publish efun",
  "on": {
    "push": {
      "branches": ["main"]
    }
  },
  "jobs": {
    "publish-grp": {
      "runsOn": "ubuntu-latest",
      "steps": [
        {
          "uses": "actions/checkout@v2"
        },
        {
          "uses": "actions/setup-node@v1",
          "with": {
            "nodeVersion": "12",
            "registryUrl": "https://npm.pkg.github.com/",
            "scope": "@nvmpratyush"
          }
        },
        {
          "run": "npm install"
        },
        {
          "run": "npm publish",
          "env": {
            "NODE_AUTH_TOKEN": "{{secrets.GITHUB_TOKEN}}"
          }
        }
      ]
    }
  }
}

const Build = {
  "name": "build",
  "on": {
    "push": {
      "branches": ["main"]
    }
  },
  "jobs": {
    "build": {
      "runsOn": "ubuntu-latest",
      "steps": [
        {
          "uses": "actions/checkout@v3"
        },
        {
          "name": "Use Node.js",
          "uses": "actions/setup-node@v4",
          "with": {
            "nodeVersion": "20.x"
          }
        },
        {
          "name": "Install dependencies",
          "run": "npm ci"
        },
        {
          "name": "Build",
          "run": "npm run build"
        },
        {
          "name": "Commit changes",
          "run": [
            "git config --local user.email \"github-actions[bot]@users.noreply.github.com\"",
            "git config --local user.name \"GitHub Actions\"",
            "git add .",
            "git commit -m \"Build and deploy from workflow\""
          ]
        },
        {
          "name": "Push changes",
          "uses": "ad-actions/push-to-repo@v2",
          "with": {
            "githubToken": "{{ secrets.GITHUB_TOKEN }}",
            "branch": "{{ github.ref }}"
          }
        }
      ]
    }
  }
}


const packages = [json];
const workflows = [
  Publish, 
  Build
];

// Create an Efun object implementing the interface
const Efun: Efun = {
  reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  },
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  },
  pow(a, b) {
    return Math.pow(a, b);
  },
  sqrt(a) {
    return Math.sqrt(a);
  },
  sin(a) {
    return Math.sin(a);
  },
  cos(a) {
    return Math.cos(a);
  },
  tan(a) {
    return Math.tan(a);
  },
  asin(a) {
    return Math.asin(a);
  },
  acos(a) {
    return Math.acos(a);
  },
  atan(a) {
    return Math.atan(a);
  },
  sinh(a) {
    return Math.sinh(a);
  },
  cosh(a) {
    return Math.cosh(a);
  },
  tanh(a) {
    return Math.tanh(a);
  },
  log(a, b) {
    return Math.log(a) / Math.log(b);
  },
  capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
  capitalizeFirstLetterOfEachWord(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },
  capitalizeAllWords(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },
  reverseString(str) {
    return str.split("").reverse().join("");
  },
};

export default Efun;
