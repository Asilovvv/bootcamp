import axios from "axios";
import { useEffect } from "react";
import Card from "../../components/Card/Card";



const Purchase = () => {

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:5079/immovables/getAll')
                console.log(res)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, []);
    


    return (
        <section>
            <Card/>
        </section>
    );
};


export default Purchase;