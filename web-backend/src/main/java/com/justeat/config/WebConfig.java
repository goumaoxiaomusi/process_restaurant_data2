package com.justeat.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	@Bean
	public RestTemplate restTemplate(){
		return new RestTemplate();
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// Configuring CORS (Cross-Origin Resource Sharing) settings for all paths ("/**")
		// Allowing all requests from the locally running front-end origin
		registry.addMapping("/**").allowedOrigins("http://localhost:3000");
		registry.addMapping("/**").allowedOrigins("http://localhost:5173");
	}
}
