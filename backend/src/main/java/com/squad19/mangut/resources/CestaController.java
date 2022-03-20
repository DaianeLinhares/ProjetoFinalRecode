package com.squad19.mangut.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad19.mangut.entities.Cesta;
import com.squad19.mangut.services.CestaService;

@RestController
@RequestMapping("/cesta")
public class CestaController {

	@Autowired
	CestaService service;
	
	@GetMapping
	public List<Cesta> findAll() {
		return service.findAll();
	}
	
}
