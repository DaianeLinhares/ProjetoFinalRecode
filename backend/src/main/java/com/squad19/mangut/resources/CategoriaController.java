package com.squad19.mangut.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad19.mangut.entities.Categoria;
import com.squad19.mangut.services.CategoriaService;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

	@Autowired
	CategoriaService service;

	@GetMapping
	public List<Categoria> findAll() {
		return service.findAll();
	}

	@GetMapping(value = "/{id}")
	public Optional<Categoria> findById(@PathVariable Long id) {
		Optional<Categoria> categoriaId = service.findById(id);
		return categoriaId;
	}

	@PostMapping
	public Categoria create(@RequestBody Categoria categoria) {
		return service.create(categoria);
	}

	@PutMapping
	public Categoria update(@RequestBody Categoria categoria) {
		return service.update(categoria);
	}

	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}