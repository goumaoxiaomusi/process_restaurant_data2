package com.justeat.pojo;

/*
Create an object that match the data structure of Address in a restaurant object
 */
public class Address{
	private String city;
	private String firstLine;

	public Address() {
	}


	public Address(String city, String firstLine) {
		this.city = city;
		this.firstLine = firstLine;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getFirstLine() {
		return firstLine;
	}

	public void setFirstLine(String firstLine) {
		this.firstLine = firstLine;
	}
}