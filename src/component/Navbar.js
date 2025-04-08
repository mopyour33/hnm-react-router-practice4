import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

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
          <FontAwesomeIcon icon={faSearch}/>
          <input className="search-box" type="text" placeholder="제품을 검색해보세요"/>
        </div>
      </div>
    </div>

  )
}

export default Navbar
