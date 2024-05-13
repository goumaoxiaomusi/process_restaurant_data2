package com.justeat.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.justeat.pojo.Restaurant;
import com.justeat.pojo.RestaurantResponse;
import com.justeat.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService {

	public RestTemplate restTemplate;
	@Override
	public List<Restaurant> getRestaurants(@PathVariable String postcode) throws JsonProcessingException {
		String url = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/{postcode}";
		restTemplate = new RestTemplate();
		RestaurantResponse restaurantResponse = restTemplate.getForObject(url, RestaurantResponse.class, postcode);
		return restaurantResponse.getRestaurants();
	}

}
