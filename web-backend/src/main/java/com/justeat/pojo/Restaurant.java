package com.justeat.pojo;

import java.util.List;

/*
Create an object that match the data structure of cuisine in a restaurant object
and also filter out the desired information: name, cuisines, rating, address
so the controller can serialize and map the fetched JSON data onto the restaurant object
 */
public class Restaurant {
	private String name;
	private List<Cuisine> cuisines;
	private Rating rating;
	private Address address;

	public Restaurant() {
	}

	public Restaurant(String name, List<Cuisine> cuisines, Rating rating, Address address) {
		this.name = name;
		this.cuisines = cuisines;
		this.rating = rating;
		this.address = address;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Cuisine> getCuisines() {
		return cuisines;
	}

	public void setCuisines(List<Cuisine> cuisines) {
		this.cuisines = cuisines;
	}

	public Rating getRating() {
		return rating;
	}

	public void setRating(Rating rating) {
		this.rating = rating;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
}




