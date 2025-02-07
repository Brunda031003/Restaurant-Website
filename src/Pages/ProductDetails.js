import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

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

const dishes = [
    {
        id: 1,
        name: "Tteokbokki",
        image: tteokbokki,
        description: "Chewy rice cakes cooked in a sweet and spicy gochujang sauce."
    },
    {
        id: 2,
        name: "Kimchi Ramen",
        image: kimchiRamen,
        description: "A hearty bowl of ramen with spicy kimchi and vegetables."
    },
    {
        id: 3,
        name: "Bulgogi",
        image: bulgogi,
        description: "Marinated, grilled beef with a sweet and savory flavor."
    },
    {
        id: 4,
        name: "Bibimbap",
        image: bibimbap,
        description: "A rice bowl topped with assorted vegetables, meat, and a fried egg."
    },
    {
        id: 5,
        name: "Kimbap",
        image: kimbap,
        description: "Korean seaweed rolls filled with rice, vegetables, and meat."
    },
    {
        id: 6,
        name: "Japchae",
        image: japchae,
        description: "Stir-fried glass noodles with vegetables and seasoned beef."
    },
    {
        id: 7,
        name: "Jjajangmyeon",
        image: jjajangmyeon,
        description: "Noodles smothered in a savory black bean sauce."
    },
    {
        id: 8,
        name: "Hoddeok",
        image: hoddeok,
        description: "Sweet Korean pancakes filled with brown sugar and nuts."
    },
    {
        id: 9,
        name: "Kimchi Pancake",
        image: kimchiPancake,
        description: "A crispy pancake made with kimchi and flour batter."
    },
    {
        id: 10,
        name: "Patbingsu",
        image: patbingsu,
        description: "A refreshing shaved ice dessert with sweet red beans and toppings."
    }
];

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const dish = dishes.find((dish) => dish.id === parseInt(id));

    if (!dish) {
        return (
            <div className="paged">
                <button onClick={() => navigate(-1)}>← Back</button>
                <h1>Dish Not Found</h1>
            </div>
        );
    }

    return (
        <div className="productd-detail-page">
            <button className="backd-button" onClick={() => navigate(-1)}>← Back</button>
            <div className="productd-detail">
                <img className="productd-image" src={dish.image} alt={dish.name} />
                <div className="productd-info">
                    <h1>{dish.name}</h1>
                    <p>{dish.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
