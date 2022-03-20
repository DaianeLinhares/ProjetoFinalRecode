package com.squad19.mangut.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squad19.mangut.entities.Produto;
import com.squad19.mangut.entities.ProdutoPK;

public interface ProdutoRepository extends JpaRepository<Produto,ProdutoPK>{

	
}
