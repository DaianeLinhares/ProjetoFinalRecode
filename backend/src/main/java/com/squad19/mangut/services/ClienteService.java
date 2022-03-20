package com.squad19.mangut.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.squad19.mangut.entities.Cliente;
import com.squad19.mangut.repositories.ClienteRepository;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository repository;

	@Transactional(readOnly = true)
	public List<Cliente> findAll() {
		List<Cliente> resultado = repository.findAll();
		return resultado;
	}
}
