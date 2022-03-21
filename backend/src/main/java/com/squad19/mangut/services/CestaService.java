package com.squad19.mangut.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.squad19.mangut.entities.Cesta;
import com.squad19.mangut.entities.Vendedor;
import com.squad19.mangut.repositories.CestaRepository;

@Service
public class CestaService {

	@Autowired
	private CestaRepository repository;

	@Transactional(readOnly = true)
	public List<Cesta> findAll() {
		List<Cesta> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Optional<Cesta> findById(Long id) {
		return repository.findById(id);
	}
	
	@Transactional(readOnly = true)
	public Cesta update(Cesta cesta) {
		return repository.saveAndFlush(cesta);
	}

	public Cesta create(Cesta cesta) {
		return repository.save(cesta);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}
}
