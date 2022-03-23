package com.squad19.mangut.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.squad19.mangut.entities.Cliente;
import com.squad19.mangut.repositories.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;
	

	@Transactional(readOnly = true)
	public ResponseEntity<List<Cliente>> findAll() {
		return ResponseEntity.ok(repository.findAll());		
	}

	@Transactional(readOnly = true)
	public Optional<Cliente> findById(Long id) {
		return repository.findById(id);
	}

		
	public Cliente update(Cliente cliente) {
		return repository.saveAndFlush(cliente);
	}	

	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	// tentativa de colocar o save
	/*
	 * @Transactional(readOnly = true) public Cliente create(Cliente cliente) {
	 * return repository.save(cliente); }
	 */
}
