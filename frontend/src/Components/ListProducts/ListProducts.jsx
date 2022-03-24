import { React, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './ListProducts.css';

const List = () => {
    const nome = useRef()
    const preco = useRef()
    const quantidade = useRef()
    const foto = useRef()

    // create a loop to get all the products
    const [products, setProducts] = useState([]);
    useEffect(() => {
        api.get('/produtos/').then(response => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-3">
            <div class="d-flex justify-content-center" style={{position: "relative"}}>
                // start the loop
                {products.map(product => (
                    <div class="card" style={{width: "18rem"}}>
                        <img src={product.foto} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{product.nome}</h5>
                            <p class="card-text">{product.preco}</p>
                            <p class="card-text">{product.quantidade}</p>
                        </div>
                    </div>
                ))}
                // end the loop
            </div>
        </div>
    );
}

export default List;