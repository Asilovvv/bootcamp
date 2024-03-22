import classes from "./Cardinfo.module.css"
import {useForm} from "react-hook-form";
import img from '../../assets/new.png';

const Cardinfo = () => {

    return (
        <section>
            <h1>Purchase name</h1>
            <img src={img} />
            <span><p>The official React documentation has shifted its recommendation for beginners away from using create-react-app. Instead, they now advise using fully-fledged React frameworks like Next.js, Remix, or Gatsby. One possible reason for this change is that the React team may have recognised some issues with create-react-app or the shortcomings of single-page applications.
However, if you’re looking to use React without a framework, Vite is an excellent choice. Vite is a powerful bundler that offers a React template out of the box. In this article, we’ll guide you through the process of installing React using Vite.</p>
</span>
        </section>
    );
};

export default Cardinfo;