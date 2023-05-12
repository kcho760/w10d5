import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./GalleryNavigation.css";

function GalleryNavigation({galleries}) {
    // console.log({galleries}); //This just wraps in an obj?
    // console.log(galleries);
    






    
    const galleryLinks = galleries.map(gallery => {
        return <li key={`${gallery.id}`}><NavLink to={`/galleries/${gallery.id}`}>{`${gallery.name}`}</NavLink></li>;
    })

    // console.log(galleryIds);
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/">Link</NavLink>
            <ul>
                {galleryLinks}                        
            </ul>
        </nav>
    )
}



export default GalleryNavigation;