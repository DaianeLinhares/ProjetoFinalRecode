package com.squad19.mangut.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

	@Embeddable
	public class CestaPK implements Serializable {
		private static final long serialVersionUID = 1L;
		
		@ManyToOne
		@JoinColumn(name = "cliente_id")
		private Cliente cliente;

		@ManyToOne
		@JoinColumn(name = "produto_id")
		private Produto produto;
		
		public CestaPK() {
			
		}

		public Cliente getCliente() {
			return cliente;
		}

		public void setCliente(Cliente cliente) {
			this.cliente = cliente;
		}

		public Produto getProduto() {
			return produto;
		}

		public void setProduto(Produto produto) {
			this.produto = produto;
		}

		public CestaPK(Cliente cliente, Produto produto) {
			super();
			this.cliente = cliente;
			this.produto = produto;
		}

		@Override
		public int hashCode() {
			return Objects.hash(cliente, produto);
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			CestaPK other = (CestaPK) obj;
			return Objects.equals(cliente, other.cliente) && Objects.equals(produto, other.produto);
		}
		
	}
