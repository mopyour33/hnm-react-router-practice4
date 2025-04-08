import React from 'react'

//1. 이미지 들어가기
//2. 상품설명 들어가기
//3. 신제품 신제품 아닌것 구분하기기
//4. 상품에 이미지 올리면 카드가 커지는 hover 이벤트 만들기
//5. 로그인 버튼을 클릭하면 로그인 페이지가 나오게 하기
//6. 로그인 페이지의 디자인을 스스로 하기


const ProductCard = ({item}) => {
  
  console.log("item:", item);
    return (
    <div className="product-card-box">
      <div className="card-inner">
        <img src={item?.img} alt="" className="card-image"/>
        <div className="card-text">
          <div> {item?.choice===true? "Conscious choice" : ""} </div>
          <div>{item?.title}</div>
          <div>{item?.price}</div>
          <div>{item?.new===true ? "신제품" : ""}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
