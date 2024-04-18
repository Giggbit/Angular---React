import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CategoriesList() {
    let [categories, SetCategories] = useState([]);

    useEffect(() => {
        setTimeout(() => SetCategories([
            {id: 123, slug: 'cat1', name: 'Category 1', description: 'The category 1'},
            {id: 124, slug: 'cat2', name: 'Category 2', description: 'The category 2'},
            {id: 125, slug: 'cat3', name: 'Category 3', description: 'The category 3'},
            {id: 126, slug: 'cat4', name: 'Category 4', description: 'The category 4'},
            {id: 127, slug: 'cat5', name: 'Category 5', description: 'The category 5'}
        ]), 500);
    });

    return <>
        <div className="list-group mt-4">
            {categories.map(c => 
                <Link to={"/category/" + c.slug}
                title={c.description}
                className="list-group-item list-group-item-action">{c.name}</Link>
            )}
        </div>
    </>
}