import { useParams } from 'react-router';

export default function Category() {
    const { slug } = useParams();
    return <>
        <h1 className="text-center mt-4">Category Page for {slug}</h1>
    </>
}