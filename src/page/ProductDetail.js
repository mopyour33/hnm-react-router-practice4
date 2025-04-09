import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'


const ProductDetail = () => {

  const [data,setData] = useState(null);
  const {id} = useParams();


  const getProductDetailInfo = async(id) => {
    
    console.log("id:",id);
    // let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/mopyour33/hnm-react-router-practice1/products/${id}`;
    console.log(url);

    let response = await fetch(url);
    let data = await response.json();

    console.log("Data:",data);
    setData(data);
    
  }

  useEffect(()=>{
    getProductDetailInfo(id);  
  },[id])

  return (
    <Container>
      <Row className="product-detail-content">
        <Col>
          <img src={data?.img} alt="" className="image-detail-content"/>
        </Col>
        <Col>
          <Row>
            <Col className="info-detail-box">
              <div className="info-detail-content">상품명 </div>
              <div>{data?.title}</div>
            </Col>
          </Row>
          <Row>
          <Col className="info-detail-box">
            <div className="info-detail-content">가격(원) </div>
            <div>{data?.price}</div>
            </Col>
          </Row>
          <Row>
            <Col className="info-detail-box">
              <div className="info-detail-content">친환경 소재 제품 </div>
              <div> {data?.choice===true? "Y" : "N"} </div>
            </Col>
          </Row>
          <Row>
            <Col className="info-detail-box">
              <div className="info-detail-content">신제품 여부 </div>
              <div>{data?.new===true ? "Y" : "N"}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className="purchase-button">장바구니 담기</Button>
            </Col>
            <Col>
              <Button variant="primary" className="purchase-button">바로 결제하기</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
