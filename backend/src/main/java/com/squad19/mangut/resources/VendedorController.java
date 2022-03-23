package com.squad19.mangut.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.squad19.mangut.entities.Cliente;
import com.squad19.mangut.entities.Vendedor;
import com.squad19.mangut.repositories.VendedorRepository;
import com.squad19.mangut.services.VendedorService;

@RestController
@RequestMapping("/vendedores")
public class VendedorController {

	@Autowired
	VendedorService service;
	
	@Autowired
	VendedorRepository repository;
	
	@Autowired
	private PasswordEncoder encoder;

	/*
	 * @GetMapping public List<Vendedor> findAll() { return service.findAll(); }
	 */
	
	@GetMapping
	public ResponseEntity<List<Vendedor>> findAll() {
		return service.findAll();
	}
	
	@GetMapping(value = "/{id}")
    public Optional<Vendedor> findById(@PathVariable Long id) {
        Optional<Vendedor> vendedorId = service.findById(id); 
        return vendedorId;
    }
		
	/*
	 * @PostMapping public Vendedor create(@RequestBody Vendedor vendedor) { return
	 * service.create(vendedor); }
	 */	
	
	@PostMapping("/salvar") 
	  public ResponseEntity<Vendedor> create(@RequestBody
	  Vendedor vendedor) { vendedor.setSenha(encoder.encode(vendedor.getSenha()));
	  return ResponseEntity.ok(repository.save(vendedor)); }
	
	@GetMapping("/validarSenha") public ResponseEntity<Boolean>
	  validarSenha(@RequestParam String email, @RequestParam String senha){
	  
	  Optional<Vendedor> optVendedor = repository.findByEmail(email);
	  if(optVendedor.isEmpty()) { return
	  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false); }
	  
	  
	  Vendedor vendedor = optVendedor.get(); boolean valid = encoder.matches(senha,
	  vendedor.getSenha());
	  
	  HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED; return
	  ResponseEntity.status(status).body(valid); }
	
	@PutMapping  
    public Vendedor update(@RequestBody Vendedor vendedor) {
        return service.update(vendedor);
    }	
	
	@DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);        
	}
	
}