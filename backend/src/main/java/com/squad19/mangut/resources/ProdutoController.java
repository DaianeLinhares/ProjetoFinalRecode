package com.squad19.mangut.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad19.mangut.entities.Produto;
import com.squad19.mangut.services.ProdutoService;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

	@Autowired
	ProdutoService service;
	
	@GetMapping
	public List<Produto> findAll() {
		return service.findAll();
	}
	
}
