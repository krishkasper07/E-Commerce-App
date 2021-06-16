import Product from "./Products"
import Filter from './Filter';
const Home=()=>{
    return(
        <>
        <div style={{display:'flex'}}>
        <div style={{width:'20%'}}><Filter/></div>
        <div style={{width:'80%'}}><Product/></div>
        </div>
        </>
    )
}

export default Home;