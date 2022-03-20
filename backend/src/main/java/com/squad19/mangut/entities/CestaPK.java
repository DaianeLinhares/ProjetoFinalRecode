package com.squad19.mangut.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

	@Embeddable
	public class CestaPK implements Serializable {
		private static final long serialVersionUID = 1L;
		
		@ManyToOne
		@JoinColumn(name = "cliente_id")
		private Vendedor vendedor;

		@ManyToOne
		@JoinColumn(name = "produto_id")
		private Categoria categoria;
		
		public CestaPK() {
			
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
