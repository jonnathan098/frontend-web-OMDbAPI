import { useEffect, useState } from "react";
import api from '../../services/api';

interface IProduct{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

const Products = () => {
    const [Products, setProducts] = useState<IProduct []>([]);

    const loadingProducts = async () => {
        const results = await api.get('/?apikey=9aa59e65&s=avengers');
        setProducts(results.data.Search);
    };

    useEffect(() => {
        loadingProducts();
    }, []);
    return(
        <>
            <h1>Produtos</h1>
            <ul>
                {Products.map(p => {
                    return(
                        <li>
                            <img src={p.Poster} />
                            {p.Title}
                        </li>
                    );
                })}
            </ul>       
                    


        </> 
    );
}
export default Products;