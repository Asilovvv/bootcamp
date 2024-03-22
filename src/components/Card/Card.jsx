import classes from "./Card.module.css"
import {useForm} from "react-hook-form";
import img from '../../assets/new.png';

const Card = () => {

    return (
        <section>
        
        <img src={img} alt="Purchase Image"/>
        <h1>Purchase Name</h1>
        <p>Purchase description</p>
        <p>Purchase description</p>
        <p>Purchase description</p>
        <p>Purchase description</p>
        <p>Purchase description</p>
</section>

    );
};

export default Card;