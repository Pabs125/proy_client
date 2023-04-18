// import { Button, Row, Space, Col, Divider, Card } from "antd";
// import { BugFilled, SearchOutlined } from "@ant-design/icons";
// import React from "react";
// const { Meta } = Card;

// export const App = () => {
//   return (
//     <div style={styles}>
//       {/* Fila 1 */}
//       <Row>
//         <Col span={12}>
//           <Space wrap>
//             {/* Botón normal */}
//             <Button type="primary">Aceptar</Button>
//             {/* Botón circular */}
//             <Button type="primary" shape="circle" icon={<BugFilled />}></Button>
//             {/* Botón circular manejando tooltip */}
//             <Button
//               type="default"
//               shape="circle"
//               icon={<SearchOutlined />}
//             ></Button>
//             {/* Opción recomendada */}
//             <Button icon={<SearchOutlined />}>Search</Button>
//           </Space>
//         </Col>

//         <Col span={12}>
//           <Button type="primary">Aceptar</Button>
//         </Col>
//       </Row>

//       {/* Fila 2 */}
//       <Divider orientation="left">Responsive</Divider>
//       <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//         <Col className="gutter-row" span={6}>
//           <h1 style={styles}>Columna1</h1>
//         </Col>
//         <Col className="gutter-row" span={6}>
//           <h1 style={styles}>Columna2</h1>
//         </Col>
//         <Col className="gutter-row" span={6}>
//           <h1 style={styles}>Columna3</h1>
//         </Col>
//       </Row>

//       {/* Fila 3 */}
//       <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 24 }}>
//         <Col className="gutter-row" span={6}>
//           <Card
//             hoverable
//             style={{ width: 240 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//               />
//             }
//           >
//             <Meta title="Europe Street beat" description="www.instagram.com" />
//           </Card>
//         </Col>
//         <Col className="gutter-row" span={6}>
//           <Card
//             hoverable
//             style={{ width: 240 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//               />
//             }
//           >
//             <Meta title="Europe Street beat" description="www.instagram.com" />
//           </Card>
//         </Col>
//         <Col className="gutter-row" span={6}>
//           <Card
//             hoverable
//             style={{ width: 240 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//               />
//             }
//           >
//             <Meta title="Europe Street beat" description="www.instagram.com" />
//           </Card>
//         </Col>
//         <Col className="gutter-row" span={6}>
//           <Card
//             hoverable
//             style={{ width: 240 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//               />
//             }
//           >
//             <Meta title="Europe Street beat" description="www.instagram.com" />
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// const styles = (React.CSSProperties = { padding: "8px 0" });

// export default App;

import React from "react";
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import allRoutesProject from "./config/routes";
// import { Contact } from './pages/Contact'
// import { Home } from './pages/Home'
// import { NotFound } from './pages/NotFound'

const App = () => {
  return (
    // <React.Fragment>
    //   <Home></Home>
    //   <Contact></Contact>
    //   <NotFound></NotFound>
    // </React.Fragment>
    <BrowserRouter>
      <Routes>
        {allRoutesProject.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
