package com.squad19.mangut.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.squad19.mangut.entities.Vendedor;

@Repository
public interface VendedorRepository extends JpaRepository<Vendedor,Long> {

}