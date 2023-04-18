import React from "react";
import { Button } from "antd";
import Logo from "../../../assets/img/jpg/Logo.jpg";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./MenuTop.scss";

//MenuTop recibe las propiedades y se las comparte a menuSider
//Las propiedades las recibe de GeneralLayout
//Propiedad: Saber si el menu esta extendido
export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Button 
          // style={{width: "10px"}} 
          type="link" 
          onClick={() => setMenuCollapsed(!menuCollapsed)}
          aria-label={menuCollapsed ? "Mostrar menú" : "Ocultar menú"}
        >
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <img src={Logo} alt="Logo empresa" className="menu-top__left__logo" />
      </div>
    </div>
  );
};
