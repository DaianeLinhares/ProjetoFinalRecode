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

import com.squad19.mangut.entities.Produto;
import com.squad19.mangut.services.ProdutoService;

@RestController
@RequestMapping(value = "/produtos")
public class ProdutoController {

	@Autowired
	ProdutoService service;

	@GetMapping
	public List<Produto> findAll() {
		return service.findAll();
	}

	@GetMapping(value = "/{id}")
	public Optional<Produto> findById(@PathVariable Long id) {
		Optional<Produto> produtoId = service.findById(id);
		return produtoId;
	}

	@PostMapping
	public Produto create(@RequestBody Produto produto) {
		return service.create(produto);
	}

	@PutMapping
	public Produto update(@RequestBody Produto produto) {
		return service.update(produto);
	}

	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}