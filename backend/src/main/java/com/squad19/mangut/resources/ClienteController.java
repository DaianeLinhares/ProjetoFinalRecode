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
import com.squad19.mangut.repositories.ClienteRepository;
import com.squad19.mangut.services.ClienteService;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteController {

	@Autowired
	ClienteService service;
	
	@Autowired
	ClienteRepository repository;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@GetMapping
	public ResponseEntity<List<Cliente>> findAll() {
		return service.findAll();
	}
	
	
	@GetMapping(value = "/{id}")
    public Optional<Cliente> findById(@PathVariable Long id) {
        Optional<Cliente> clienteId = service.findById(id); 
        return clienteId;
    }
	
	
	  @PostMapping("/salvar") 
	  public ResponseEntity<Cliente> create(@RequestBody
	  Cliente cliente) { cliente.setSenha(encoder.encode(cliente.getSenha()));
	  return ResponseEntity.ok(repository.save(cliente)); }
	 
	
	/*
	 * @PostMapping public Cliente create(@RequestBody Cliente cliente) { return
	 * service.create(cliente); }
	 */	
	
	
	  @GetMapping("/validarSenha") public ResponseEntity<Boolean>
	  validarSenha(@RequestParam String email, @RequestParam String senha){
	  
	  Optional<Cliente> optCliente = repository.findByEmail(email);
	  if(optCliente.isEmpty()) { return
	  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false); }
	  
	  
	  Cliente cliente = optCliente.get(); boolean valid = encoder.matches(senha,
	  cliente.getSenha());
	  
	  HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED; return
	  ResponseEntity.status(status).body(valid); }
	 
	
	
	@PutMapping  
    public Cliente update(@RequestBody Cliente cliente) {
        return service.update(cliente);
	}
	
	@DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);        
	}
	
}
