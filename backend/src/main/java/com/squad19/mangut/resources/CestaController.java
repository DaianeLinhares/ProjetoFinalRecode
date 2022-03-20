package com.squad19.mangut.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	@GetMapping(value = "/{id}")
	public Optional<Cesta> findById(@PathVariable Long id) {
		Optional<Cesta> cestaId = service.findById(id);
		return cestaId;
	}

	@PostMapping
	public Cesta create(@RequestBody Cesta cesta) {
		return service.create(cesta);
	}

	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}

}