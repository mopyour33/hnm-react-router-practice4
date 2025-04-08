import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({setAuthenticate}) => {
  
  const navigate= useNavigate();
  const loginUser=(event)=>{
    event.preventDefault();
    console.log("login user function issue");
    setAuthenticate(true);
    navigate("/");
  }

  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="Enter your ID" />
          <Form.Text className="text-muted">
            We'll never share your ID with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default LoginPage



// //1~3까지 내가 작성(시작)
// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIdBadge } from '@fortawesome/free-regular-svg-icons'
// import { Col, Container, Row } from 'react-bootstrap';

// const LoginPage = () => {
//   return (
//     <div>
//       <Container className="login-container">
//         <Row className="justify-content-center">
//           <Col lg={4}></Col>
//           <Col lg={4} className="text-center">
//           <FontAwesomeIcon icon={faIdBadge} size="2X"/>
//             <h3>Login</h3>

//             <div className="login-form-box">
//               <div className="form-group">
//                 <input type="text" placeholder="ID를 입력하세요"/>
//               </div>  
//               <div className="form-group">
//               <input type="text" placeholder="PW를 입력하세요"/>
//               </div>
//             </div>
//           </Col>
//           <Col lg={4}></Col>
//         </Row>
//         <Row></Row>
//         <Row>
//           <Col lg={4}></Col>
//           <Col lg={2}>
//             <div>
//               <button className="button-style">회원가입</button>
//             </div>
//           </Col>
//           <Col log={2}>
//             <div>
//             <button className="button-style">로그인</button>
//             </div>
//           </Col>
//           <Col lg={4}></Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default LoginPage

// //1~3까지 내가 작성(끝)


