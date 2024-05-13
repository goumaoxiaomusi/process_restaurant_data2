package com.justeat.utils;

import com.justeat.pojo.Restaurant;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Util {

	public static List<Restaurant> defaultOrder(List<Restaurant> restaurants){
		restaurants.sort((r1, r2) -> Float.compare(r2.getRating().getStarRating(), r1.getRating().getStarRating()));
		return restaurants;
	}

}
