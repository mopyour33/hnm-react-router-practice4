//1~3까지 내가 작성한 것(시작)
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import LoginPage from './page/LoginPage';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. Navigation bar 만들기

//2. 전체상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 안되어있을 경우 로그인페이지가 먼저 나온다.
//5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//6. 로그아웃버튼을 누르면 로그아웃이 되면서 로그인 페이지로 이동한다.
//7. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
//1~3까지 내가 작성한 것(끝)



// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import ProductAll from './page/ProductAll';
// import LoginPage from './page/LoginPage';
// import ProductDetail from './page/ProductDetail';
// import Navbar from './component/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { useEffect, useState } from 'react';

// //1. 전체상품페이지, 로그인, 상품상세페이지
// //1-1. Navigation bar 만들기

// //2. 전체상품페이지에서는 전체 상품을 볼 수 있다.
// //3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// //4. 상품디테일을 눌렀으나, 로그인이 안되어있을 경우 로그인페이지가 먼저 나온다.
// //5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// //6. 로그아웃버튼을 누르면 로그아웃이 되면서 로그인 페이지로 이동한다.
// //7. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.

// function App() {

//   const [authenticate,setAuthenticate] =useState(false) //true면 로그인이 되고 false면 로그인이 안됨.

//   useEffect(()=>{
//     console.log("AAAA", authenticate)
//   },[authenticate])

//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<ProductAll/>}/>
//         <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate}/>}/>
//         <Route path="/product/:id" element={<ProductDetail/>}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;