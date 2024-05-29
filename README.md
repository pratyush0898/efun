## Efun - Extra Utility Functions

**efun** is a collection of utility functions designed to enhance your JavaScript projects. It provides a variety of functionalities for common tasks, making your code more concise and efficient.

## Features

* **Math Functions:** Perform basic arithmetic operations (addition, subtraction, multiplication, division), exponentiation, square root, trigonometric functions, and logarithms.
* **String Manipulation Functions:** Capitalize strings in various styles (first letter, all words, etc.) and reverse strings.
* **Array Manipulation Functions:** Reverse the order of elements in an array.

## Installation

Install the `efun` package using npm or yarn:

```bash
npm install efun
```

or

```bash
yarn add efun
```

## Usage

**1. Import the entire package:**

```javascript
import Efun from 'efun';
```

**2. Use individual functions:**

```javascript
const sum = Efun.aum(5, 3); // 8
const reversedString = Efun.reverseString('hello'); // olleh

const capitalizedWords = Efun.capitalizeFirstLetterOfEachWord('hello world'); // Hello World
```

**3. Alternatively, import specific functions (optional):**

```javascript
import { reverseArray } from 'efun';
import { capitalizeString } from 'efun';

const reversedArray = reverseArray([1, 2, 3]); // [3, 2, 1]
const capitalizedString = capitalizeString('javascript'); // Javascript
```

**Note:** When importing specific functions, you'll need to import each function you want to use from the `efun` package.

## Contributing

We welcome contributions to the `efun` package! If you have any suggestions for new features or improvements, feel free to create a pull request on [git reposotry](https://github.com/pratyush0898/).

## License

This project is licensed under the [Apache-2.0 License](LICENSE).
