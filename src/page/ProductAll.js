import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);

    const getProducts =async () => {
      let url = `http://localhost:5000/products`;
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    }

    useEffect(() => {
      getProducts()
    },[])

  return (
    <div>
        {/* //아이템을 한눈에 볼 수 있도록 만들어주는게 Container라는 컴포넌트임 */}
        <Container className="product-all-content">
          <Row>
            {productList.map((menu) => (
              <Col lg={3} key={menu.id}>
                <ProductCard item={menu}/>
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  );
}

export default ProductAll
