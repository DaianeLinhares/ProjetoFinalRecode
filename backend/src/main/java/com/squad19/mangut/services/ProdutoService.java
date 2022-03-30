package com.squad19.mangut.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.squad19.mangut.entities.Produto;
import com.squad19.mangut.repositories.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository repository;

	@Transactional(readOnly = true)
	public List<Produto> findAll() {
		List<Produto> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Optional<Produto> findById(Long id) {
		return repository.findById(id);
	}

	public Produto create(Produto produto) {
		return repository.save(produto);
	}

	public Produto update(Produto produto) {
		return repository.saveAndFlush(produto);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}
}