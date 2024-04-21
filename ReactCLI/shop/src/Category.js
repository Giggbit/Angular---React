import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import CategoriesList from './CategoriesList';
import AppSettings from './AppSettings';

export default function Category() {
    const { slug } = useParams();
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(AppSettings.backendUrl + AppSettings.apiCategoriesPath + "/" + slug)
        .then(r => r.json())
        .then(j => {
            setProducts(j);
        });
    }, [slug]);

    return (<>
        <div className="row">
            <div className="col col-sm-3"><CategoriesList /></div>
            <div className="col col-sm-9">
                <h1 className="text-center mt-4">{slug}</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products.map(p => <ProductCard product={p} key={p.id} />)}
                </div>
            </div>
        </div> 
    </>);
}

function ProductCard(props) {
    return <>
        <div className="col">
            <div className="card h-100">
                <img src={AppSettings.backendUrl + AppSettings.imgPath + props.product.imageUrl} className="card-img-top" alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <i className="card-text">{props.product.description}</i><br/><br/>
                    <b className="fs-5">{(props.product.priceCent / 100).toFixed(2)} грн.</b>
                    <button className="btn btn-primary ms-5">Купити</button>
                </div>
            </div>
        </div>
    </>;
}

