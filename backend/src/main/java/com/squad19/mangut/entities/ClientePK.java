package com.squad19.mangut.entities;

import java.io.Serializable;

import javax.persistence.JoinColumn;

public class ClientePK implements Serializable {
	private static final long serialVersionUID = 1L;

	@JoinColumn(name = "vendedor_id")
	private Vendedor vendedor;

	@JoinColumn(name = "produto_id")
	private Produto produto;
	
	public ClientePK() {
		
	}

	public Vendedor getVendedor() {
		return vendedor;
	}

	public void setVendedor(Vendedor vendedor) {
		this.vendedor = vendedor;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}
	
}
