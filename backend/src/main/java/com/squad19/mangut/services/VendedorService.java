package com.squad19.mangut.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.squad19.mangut.entities.Vendedor;
import com.squad19.mangut.repositories.VendedorRepository;

@Service
public class VendedorService {

	@Autowired
	VendedorRepository repository;

	@Transactional(readOnly = true)
	public List<Vendedor> findAll() {
		List<Vendedor> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Optional<Vendedor> findById(Long id) {
		return repository.findById(id);
	}

	@Transactional(readOnly = true)
	public Vendedor create(Vendedor vendedor) {
		return repository.save(vendedor);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}
}