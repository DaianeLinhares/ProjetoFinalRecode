package com.squad19.mangut.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name = "tb_cesta")
public class Cesta {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cod;
	@EmbeddedId
	private CestaPK id = new CestaPK();
	private Integer quantidade;
	private Double total;

	private Cesta() {

	}

	public Cesta(CestaPK id, Integer quantidade, Double total) {
		this.id = id;
		this.quantidade = quantidade;
		this.total = total;
	}

	public CestaPK getId() {
		return id;
	}

	public void setId(CestaPK id) {
		this.id = id;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

}