package com.squad19.mangut.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;

@Embeddable
public class ProdutoPK implements Serializable {
	private static final long serialVersionUID = 1L;

	@JoinColumn(name = "vendedor_id")
	private Vendedor vendedor;

	@JoinColumn(name = "categoria_id")
	private Categoria categoria;

	public ProdutoPK() {

	}

	public Vendedor getVendedor() {
		return vendedor;
	}

	public void setVendedor(Vendedor vendedor) {
		this.vendedor = vendedor;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
}
