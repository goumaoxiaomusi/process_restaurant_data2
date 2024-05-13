package com.justeat.pojo;

import java.util.List;

/*
Create an object that match the data structure of cuisines in a restaurant object
 */
public class Cuisines {
	private List<Cuisine> cuisines;

	public Cuisines() {
	}

	public Cuisines(List<Cuisine> cuisines) {
		this.cuisines = cuisines;
	}

	public List<Cuisine> getCuisines() {
		return cuisines;
	}

	public void setCuisines(List<Cuisine> cuisines) {
		this.cuisines = cuisines;
	}
}
