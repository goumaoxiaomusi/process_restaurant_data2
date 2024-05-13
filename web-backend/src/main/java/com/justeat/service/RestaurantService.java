package com.justeat.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.justeat.pojo.Restaurant;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

/*
This is an interface that can be used to actualize a getRestaurant service
 */
public interface RestaurantService {
	List<Restaurant> getRestaurants(@PathVariable String postcode) throws JsonProcessingException;
}
