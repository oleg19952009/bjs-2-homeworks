"use strict"
function solveEquation(a, b, c) {
	let discriminant, arr = [];

	discriminant = (b * b) - (4 * a * c);

	if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
	} else if (discriminant == 0) {
		arr.push(-b / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let S, P, monthAmount, totalAmount;

	P = parseInt(percent) / 100 / 12;
	S = amount - contribution;
	monthAmount = S * (P + P / (((1 + P) ** countMonths) - 1));
	totalAmount = monthAmount * countMonths;

	return Number(totalAmount.toFixed(2));
}
