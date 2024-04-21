import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function CategoriesList() {
    let [categories, SetCategories] = useState([]);
    let savedCategories = useRef([]);
    const backendUrl = "https://localhost:7207/";
    const apiPath = "api/categories";
    const imgPath = "img/";

    useEffect(() => {
        if(savedCategories.current.length === 0) {
            fetch(backendUrl + apiPath).then(r => r.json()).then(j => {savedCategories.current = j; SetCategories(j)});
        }       
    });

    return <>
        <div className="list-group mt-4">
            {categories.map(c => 
                <Link to={"/category/" + c.slug}
                    key={c.slug}
                    title={c.description}
                    className="list-group-item list-group-item-action">
                    <img className="ctg-img" src={backendUrl + imgPath + c.imageUrl} alt="logo" />
                    {c.name}
                    <i className="bi bi-arrow-right position-absolute center-0 end-0 pe-3"></i>
                </Link>
            )}
        </div>
    </>
}