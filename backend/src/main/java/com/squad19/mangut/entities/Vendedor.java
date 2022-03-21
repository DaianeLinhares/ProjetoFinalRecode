package com.squad19.mangut.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_vendedor")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vendedor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String telefone;
	private String email;
	private String senha;
	private String logradouro;
	private String numeroLogradouro;
	private String bairro;
	private String cidade;
	private String estado;
	private String cep;

}
