"use strict";

class Carousel {

	constructor (imagesPaths, currentIndex = 0) {
		if (!Array.isArray(imagesPaths)) {
			throw  new TypeError();
		}
		if (currentIndex < 0 || currentIndex > imagesPaths.length - 1) {
			throw  new RangeError();

		}

		this.imagesPaths = imagesPaths;
		this.currentIndex = currentIndex;
	}

	get currentIndex () {

		return this.currentIndex;
	}

	set currentIndex (value) {

		if (value < 0 || value > this.length - 1) {
			throw  new RangeError();

		}
	}

	get imagesPaths () {
		return this.imagesPaths;
	}

	get length () {
		return this.imagesPaths.length;
	}

	goNext () {
		this.currentIndex = Carousel.getNextIndex(this.currentIndex , this.length);

	}

	goPrev () {
		this.currentIndex = Carousel.getPrevIndex(this.currentIndex , this.length);

	}

	/**
	 *
	 * @param index - index of current elem
	 * @param length
	 * @returns {number}
	 */

	static getNextIndex (index, length) {
		return (index + 1) % length;


	}

	static getPrevIndex (index, length) {
		return(index - 1 + length) % length;
	}

}

export default Carousel;
