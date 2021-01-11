package com.example.demo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pratica2")
public class Controller {

	@GetMapping
	public String Pratica2() {
		return "atençao aos detalhes";
		
		
		
	}
	
	
}
