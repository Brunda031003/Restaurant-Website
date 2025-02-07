import { useNavigate } from 'react-router-dom';
import './Products.css';
import tteokbokki from '../images/tteokbokki.jpeg';
import kimchiRamen from '../images/kimchi-ramen.jpeg';
import bulgogi from '../images/bulgogi.jpeg';
import bibimbap from '../images/bibimbap.jpeg';
import kimbap from '../images/kimbap.jpeg';
import japchae from '../images/japchae.jpeg';
import jjajangmyeon from '../images/jjajangmyeon.jpeg';
import hoddeok from '../images/hoddeok.jpeg';
import kimchiPancake from '../images/kimchi-pancake.jpeg';
import patbingsu from '../images/patbingsu.jpeg';

function Products() {
    const navigate = useNavigate();
    const products = [
        { id: 1, name: "Tteokbokki", price: "$10", image: tteokbokki },
        { id: 2, name: "Kimchi Ramen", price: "$12", image: kimchiRamen },
        { id: 3, name: "Bulgogi", price: "$15", image: bulgogi },
        { id: 4, name: "Bibimbap", price: "$14", image: bibimbap },
        { id: 5, name: "Kimbap", price: "$8", image: kimbap },
        { id: 6, name: "Japchae", price: "$13", image: japchae },
        { id: 7, name: "Jjajangmyeon", price: "$11", image: jjajangmyeon },
        { id: 8, name: "Hoddeok", price: "$7", image: hoddeok },
        { id: 9, name: "Kimchi Pancake", price: "$9", image: kimchiPancake },
        { id: 10, name: "Patbingsu", price: "$6", image: patbingsu }
    ];

    return (
        <div className="products-grid">
            {products.map(product => (
                <div 
                    key={product.id} 
                    className="product-card"
                    onClick={() => navigate(`/products/${product.id}`)}
                >
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2>{product.name}</h2>
                    <p className="price">{product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;
