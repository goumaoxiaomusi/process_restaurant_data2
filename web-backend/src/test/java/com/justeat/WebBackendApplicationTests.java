package com.justeat;

import com.justeat.controller.RestaurantController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest
class WebBackendApplicationTests {

	@SpringBootTest
	@AutoConfigureMockMvc
	public class GreetingControllerTest {

		@Autowired
		private MockMvc mockMvc;

		@Test
		public void testConnectEndPoint() throws Exception {
			mockMvc.perform(MockMvcRequestBuilders.get("/restaurant/NR991AW"))
					.andExpect(MockMvcResultMatchers.status().isOk());
		}
	}

}
