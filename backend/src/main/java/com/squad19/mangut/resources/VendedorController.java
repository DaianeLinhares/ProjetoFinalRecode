package com.squad19.mangut.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad19.mangut.entities.Vendedor;
import com.squad19.mangut.services.VendedorService;

@RestController
@RequestMapping("/vendedores")
public class VendedorController {

	@Autowired
	VendedorService service;

	@GetMapping
	public List<Vendedor> findAll() {
		return service.findAll();
	}
}
