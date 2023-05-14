let sampleString = "debajyoti";

console.log(sampleString);

const strArray = sampleString.split(" ");

console.log(strArray);

for (let str of strArray) {
	let strIndex = strArray.indexOf(str);
	let strF = str[0].toUpperCase();
	let strL = str.slice(1);
	// console.log(strF);
	// console.log(strL);
	strArray[strIndex] = strF.concat(strL);
}

console.log(strArray);

let newSampleString = "";

for (let str of strArray) {
	newSampleString = newSampleString + str + " ";
}

console.log(newSampleString);