class PrintEditionItem {
	_state = 100;
	type = null;

	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(stateNubmer) {
		if (stateNubmer > 100) {
			this._state = 100;
		} else if (this.state < 0) {
			this._state = 0;
		} else {
			this._state = stateNubmer;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	type = 'magazine';
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
	}
}

class Book extends Magazine {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
	}
	type = "book";
}

class NovelBook extends Book {
	type = 'novel';
}

class FantasticBook extends Book {
	type = 'fantastic';
}

class DetectiveBook extends Book {
	type = 'detective';
}

class Library {
	books = [];

	constructor(name) {
		this.name = name;
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		} else {
			this.books.push(null);
		}
	}

	findBookBy(type, value) {
		let bookIndex = this.books.findIndex((item) => item[type] === value);
		return this.books[bookIndex] = (bookIndex != -1) ? this.books[bookIndex] : null;
	}

	giveBookByName(bookName) {
		let bookIndex = this.books.findIndex((item) => item.name === bookName);
		if (bookIndex != -1) {
			let bookReturn = this.books[bookIndex];
			this.books.splice([bookIndex], [1]);
			return bookReturn;
		} else {
			return null;
		}
	}
}

