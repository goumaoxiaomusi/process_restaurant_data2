package com.justeat.pojo;

import java.util.ArrayList;
import java.util.List;
/*
return a list of restaurants with filtered data
 */
public class RestaurantResponse {
	private List<Restaurant> restaurants;

	public RestaurantResponse() {
	}

	public RestaurantResponse(List<Restaurant> restaurants) {
		this.restaurants = restaurants;
	}

	public List<Restaurant> getRestaurants() {
		return restaurants;
	}

	public void setRestaurants(List<Restaurant> restaurants) {
		this.restaurants = restaurants;
	}
}
