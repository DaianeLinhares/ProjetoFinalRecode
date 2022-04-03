import { React, useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './ListProducts.css';

const List = () => {

    // create a loop to get all the products
    const [products, setProducts] = useState([]);
    useEffect(() => {
        api.get('/produtos/').then(response => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-3" className='listaProduto'>   
                {products.map(product => (
                    
                    <div class="card" style={{width: "18rem"}} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <img src={product.foto} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{product.nome}</h5>
                            <p class="card-text">Preço unidade: R$ {product.preco}</p>
                            <p class="card-text">Estoque: {product.quantidade}</p>
                        </div>
                    </div>
                ))}  
            </div>
    );
}

export default List;