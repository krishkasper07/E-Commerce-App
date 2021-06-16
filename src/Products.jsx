import products from "./ProductData";
import ProductCard from "./ProductCards";

const Products = () => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    }

    return <div style={containerStyle}>{products.map(product => <ProductCard key={product.id} product={product}/>)}</div>;
}
 
export default Products;