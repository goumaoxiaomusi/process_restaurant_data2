package com.justeat.pojo;

import java.util.ArrayList;
import java.util.List;

/*
Create an object that match the data structure of cuisine in a restaurant object
 */
public class Cuisine{
	private String name;

	public Cuisine(String name) {
		this.name = name;
	}

	public Cuisine() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
