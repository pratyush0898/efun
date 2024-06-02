import * as arrayFuncs from './js/array';
import * as mathFuncs from './js/math';
import * as stringFuncs from './js/string';

interface Efun {
  reverseArray(array: any[]): any[];
  sum(a: number, b: number): number;
  sub(a: number, b: number): number;
  mul(a: number, b: number): number;
  div(a: number, b: number): number;
  pow(a: number, b: number): number;
  sqrt(a: number): number;
  sin(a: number): number;
  cos(a: number): number;
  tan(a: number): number;
  asin(a: number): number;
  acos(a: number): number;
  atan(a: number): number;
  sinh(a: number): number;
  cosh(a: number): number;
  tanh(a: number): number;
  log(a: number, b: number): number;
  capitalizeString(str: string): string;
  capitalizeFirstLetter(str: string): string;
  capitalizeFirstLetterOfEachWord(str: string): string;
  capitalizeAllWords(str: string): string;
  reverseString(str: string): string;
}

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
