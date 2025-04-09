import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const menuList =[
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sales",
    "지속가능성"
  ];

  const navigate = useNavigate();

  const goToLogin =() => {
    navigate("/login");
  };

  const [keyword, setKeyword] = useState("");

  const searchProduct = async() => {

    console.log("검색어:",keyword);
    let url = `http://localhost:5000/products`;
    //let url = `https://my-json-server.typicode.com/mopyour33/hnm-react-router-practice1/products/${id}`;

    let response = await fetch(url);
    let data = await response.json();


    // 검색어가 title에 포함되어 있는 아이템만 필터링 (대소문자 구분 없이)
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );

    // 포함된 항목의 title 출력
    console.log("🔍 검색 결과:");
    filtered.forEach(item => {
      console.log(item);
      data=item;
    });

    //setData(filtered); // 필요하면 상태에 저장하여 검색 결과 렌더링 가능

    goToProductDetailPage(data);
    
  }

  const goToProductDetailPage =(data) => {
    navigate(`/product/${data?.id}`);
  }

  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuc3bBMPD3y14ZTzbFpbc3EkEzpg9FjVSM_Q&s" alt=''/>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => <li key={menu}>{menu}</li>)}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} onClick={searchProduct}/>
          <input className="search-box" type="text" placeholder="제품을 검색해보세요" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </div>
      </div>
    </div>

  )
}

export default Navbar
