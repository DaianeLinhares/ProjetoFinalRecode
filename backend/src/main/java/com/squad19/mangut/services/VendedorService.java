package com.squad19.mangut.services;

import java.util.List;

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
}
