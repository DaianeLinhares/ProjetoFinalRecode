package com.squad19.mangut.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_produto")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "produtoid")
	private Long produtoId;

	@Column(name = "nome")
	private String nome;

	@Column(name = "preco")
	private Double preco;

	@Column(name = "quantidade")
	private Integer quantidade;

	@Column(name = "foto")
	private String foto;
	
	public Produto() {
	}

	public Produto(Long produtoId, String nome, Double preco, Integer quantidade, String foto) {
		this.produtoId = produtoId;
		this.nome = nome;
		this.preco = preco;
		this.quantidade = quantidade;
		this.foto = foto;
	}

	public Long getProdutoId() {
		return produtoId;
	}

	public void setProdutoId(Long produtoId) {
		this.produtoId = produtoId;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	@Override
	public int hashCode() {
		return Objects.hash(foto, nome, preco, produtoId, quantidade);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Produto other = (Produto) obj;
		return Objects.equals(foto, other.foto) && Objects.equals(nome, other.nome)
				&& Objects.equals(preco, other.preco) && Objects.equals(produtoId, other.produtoId)
				&& Objects.equals(quantidade, other.quantidade);
	}
}