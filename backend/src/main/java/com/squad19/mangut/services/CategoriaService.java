package com.squad19.mangut.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.squad19.mangut.entities.Categoria;
import com.squad19.mangut.repositories.CategoriaRepository;

@Service
public class CategoriaService {

	@Autowired
	private CategoriaRepository repository;

	@Transactional(readOnly = true)
	public List<Categoria> findAll() {
		List<Categoria> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Optional<Categoria> findById(Long id) {
		return repository.findById(id);
	}

	@Transactional(readOnly = true)
	public Categoria create(Categoria categoria) {
		return repository.save(categoria);
	}

	public Categoria update(Categoria categoria) {
		return repository.saveAndFlush(categoria);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}
}
