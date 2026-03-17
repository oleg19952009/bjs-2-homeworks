function getArrayParams(...arr) {
	if (arr.length > 0) {
		let i, min = Infinity,
			max = -Infinity,
			sum = 0;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
			if (arr[i] > max) {
				max = arr[i];
			}
			sum += arr[i];
		};

		avg = sum / arr.length;
		avg = Number(avg.toFixed(2));

		return { min: min, max: max, avg: avg };
	} else {
		return 0;
	}
}

function summElementsWorker(...arr) {
	if (arr.length > 0) {
		const sum = arr.reduce(function (currentSum, currentNumber) {
			return currentSum + currentNumber
		}, 0)

		return sum;
	} else {
		return 0;
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length > 0) {
		const difference = Math.max(...arr) - Math.min(...arr);

		return difference;
	} else {
		return 0;
	}
}

function differenceEvenOddWorker(...arr) {
	if (arr.length > 0) {
		let sumEvenElement = 0, sumOddElement = 0;

		for (let i = 0; i < arr.length; ++i) {
			if (arr[i] % 2) {
				sumOddElement += arr[i];
			} else {
				sumEvenElement += arr[i];
			}
		}

		return sumEvenElement - sumOddElement;
	} else {
		return 0;
	}

}

function averageEvenElementsWorker(...arr) {
	if (arr.length > 0) {
		let sumEvenElement = 0, countEvenElement = 0;

		for (let i = 0; i < arr.length; ++i) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}

		return sumEvenElement / countEvenElement;
	} else {
		return 0;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const resultFunc = func(...arrOfArr[i]);
		if (resultFunc > maxWorkerResult) {
			maxWorkerResult = resultFunc;
		}
	}

	return maxWorkerResult;
}
