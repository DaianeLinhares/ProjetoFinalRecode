package com.squad19.mangut.entities;

import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_categoria")
public class Categoria{
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "categoriaid")
	private Long categoriaId;
	
	@Column(name = "tipo")
	private String tipo;
	
	//relacionamento com produto
    @OneToMany(mappedBy = "categoria")
    private List<Produto> listProduto;

	public Categoria() {

	}

	public Long getCategoriaId() {
		return categoriaId;
	}

	public void setCategoriaId(Long categoriaId) {
		this.categoriaId = categoriaId;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public List<Produto> getListProduto() {
		return listProduto;
	}

	public void setListProduto(List<Produto> listProduto) {
		this.listProduto = listProduto;
	}
	
	

}