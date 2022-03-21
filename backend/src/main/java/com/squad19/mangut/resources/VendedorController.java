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

import com.squad19.mangut.entities.Vendedor;
import com.squad19.mangut.services.VendedorService;

@RestController
@RequestMapping("/vendedores")
public class VendedorController {

	@Autowired
	VendedorService service;

	@GetMapping
	public List<Vendedor> findAll() {
		return service.findAll();
	}
	@GetMapping(value = "/{id}")
    public Optional<Vendedor> findById(@PathVariable Long id) {
        Optional<Vendedor> vendedorId = service.findById(id); 
        return vendedorId;
    }
		
	@PostMapping    
    public Vendedor create(@RequestBody Vendedor vendedor) {
        return service.create(vendedor);
    }	
	
	@PutMapping  
    public Vendedor update(@RequestBody Vendedor vendedor) {
        return service.update(vendedor);
    }	
	
	@DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);        
	}
	
}