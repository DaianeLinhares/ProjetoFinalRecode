package com.squad19.mangut.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.squad19.mangut.entities.Cesta;
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
}
