package com.squad19.mangut.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.squad19.mangut.entities.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

	public Produto findByNome(String nome);
	
	Optional<Produto> findById(Long id);

	void deleteById(Long id);

}
