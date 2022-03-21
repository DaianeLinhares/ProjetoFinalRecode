package com.squad19.mangut.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.squad19.mangut.entities.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {

}
