import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import {products} from '../data.js' //but for now -> is not good
import '../styles/productsshop.css'
import ProductShop from './ProductShop'
import ReactPaginate from 'react-paginate'
import { Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer'
import '../styles/shop.css'




const Lifestyle = () => {

  let [fetchedProducts,setFetchedProducts]=useState([])
  //for filter category and all products
  const[products, setProducts] = useState([]);

  //for category
  const [category, setCategory] = useState([]);

  //for paginate
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 7;

  const pagesVisited = pageNumber * productPerPage;

  const displayProducts = products.slice(pagesVisited, pagesVisited + productPerPage).map((item) => (
      <ProductShop item={item} key={item._id} />
    ))

  const pageCount = Math.ceil(products.length / productPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected); //if i click page number 2 than selected is number 2
  }
  


  //filter and all products
  const filterResult = (catItem) => {
    
    const result = fetchedProducts.filter((curDate) => {
      return curDate.category === catItem;
    });
    setProducts(result);
  }


  useEffect(()=>{
    
    const fetchProducts=async()=>{
      const reponse=await axios.get("/api/products/lifestyle")
      setProducts(reponse.data)
      setFetchedProducts(reponse.data)
    }

      fetchProducts();
},[])
  //for show all category
  useEffect(() => {

    const fetchData = async () => {
      const result = await axios.get('/api/category');
      setCategory(result.data);
    }
    fetchData();

  }, []);

  return (
    <div>
    <Navbar/>
    <div className="s-row">
        <div className="s-col">
    <div className='shop-container'>
      <div className="shop-row">
        <div className="shop-col">
          <h2>Catgeories</h2>
          <NavLink to={"/shop"}>
          <button className="shop-btn" onClick={() => setProducts(fetchedProducts)}>All <FontAwesomeIcon icon={faChevronRight} /></button>
          </NavLink>
          {/* show all category if exists */}
          {category.map((item) => (
              // <button className="shop-btn" onClick={() => filterResult(item.title)}>{item.title} <FontAwesomeIcon icon={faChevronRight} /></button>
              <NavLink to={"/shop/"+item.title.split(" ").join("")} activeClassName="active"> <button className="shop-btn">{item.title} <FontAwesomeIcon icon={faChevronRight} /></button></NavLink>

          ))}
        </div>
        <div className="shop-col">
          <div className="shop-products">
            {displayProducts}
          </div>
          <div className="shop-pagination">
              <ReactPaginate 
                previousLabel={"<<"}  //for previous
                nextLabel={">>"}  //for next
                pageCount={pageCount} //for page number
                onPageChange={changePage} //for selected page, current page
                containerClassName={"paginationBttns"} //class for style
                previousLinkClassName={"previousBttn"}  //class for style
                nextLinkClassName={"nextBttn"}  //class for style
                disabledClassName={"paginationDisabled"}  //class for style
                activeClassName={"paginationActive"}  //class for style
              />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
 
    <Footer/>
    </div>
  )
}

export default  Lifestyle
