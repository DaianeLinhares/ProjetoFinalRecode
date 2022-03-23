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

		@Override
		public int hashCode() {
			return Objects.hash(categoria, vendedor);
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
			return Objects.equals(categoria, other.categoria) && Objects.equals(vendedor, other.vendedor);
		}
		
		
		
}
