package com.squad19.mangut.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squad19.mangut.entities.Cesta;
import com.squad19.mangut.entities.CestaPK;

public interface CestaRepository extends JpaRepository<Cesta,CestaPK>{

}
