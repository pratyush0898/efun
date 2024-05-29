export function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function capitalizeFirstLetterOfEachWord(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function capitalizeAllWords(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function reverseString(str) {
    return str.split("").reverse().join("");
}
