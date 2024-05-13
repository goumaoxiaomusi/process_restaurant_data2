package com.justeat.pojo;

/*
Create an object that match the data structure of rating in a restaurant object
 */
public class Rating{
	private float starRating;

	public Rating() {
	}

	public Rating(float starRating) {
		this.starRating = starRating;
	}

	public float getStarRating() {
		return starRating;
	}

	public void setStarRating(float starRating) {
		this.starRating = starRating;
	}
}