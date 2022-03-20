package com.squad19.mangut.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.squad19.mangut.entities.Cesta;
import com.squad19.mangut.entities.CestaPK;

@Repository
public interface CestaRepository extends JpaRepository<Cesta,CestaPK>{

	Optional<Cesta> findById(Long id);

	void deleteById(Long id);

}
