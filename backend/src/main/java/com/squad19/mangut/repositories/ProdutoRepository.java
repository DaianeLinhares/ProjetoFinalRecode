package com.squad19.mangut.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.squad19.mangut.entities.Produto;
import com.squad19.mangut.entities.ProdutoPK;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, ProdutoPK> {

	Optional<Produto> findById(Long id);

	void deleteById(Long id);

}
