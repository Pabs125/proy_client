import React from "react";
import "./MenuSider.scss";
import { useLocation, useNavigate } from "react-router-dom";

import { UserOutlined, AppstoreOutlined, HomeOutlined,TeamOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";


export const MenuSider = (props) => {
  const { Sider } = Layout;
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "/users",
      icon: <HomeOutlined />,
      label: <span className="navbar-text">Usuarios</span>,
    },
    {
      key: "/products",
      icon: <TeamOutlined />,
      label: <span className="navbar-text">Productos</span>,
    },
    {
      key: "/services",
      icon: <AppstoreOutlined />,
      label: <span className="navbar-text">Servicios</span>,
    },
    {
      key: "/config",
      icon: <AppstoreOutlined />,
      label: <span className="navbar-text">Configuración</span>,
    },
  ];

  const navigateTo = (e) => {
    const path = e.key;
    console.log(path);
    navigate(path);
  };

  const itemRender = (item, idex) => {
    const { icon, label } = item;
    const isSelected = location.pathname === item.key;
    return (
      <Menu.Item
        key={item.key}
        icon={icon}
        className={
          isSelected ? "ant-menu-item ant-menu-item-selected" : "ant-menu-item"
        }
      >
        {label}
      </Menu.Item>
    );
  };

  return (
    <Sider className="menu-sider" collapsed = {props.menuCollapsed}>
      <Menu
        // className="menu-sider"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        onClick={navigateTo}
        items={menuItems}
      >
        {menuItems.map((item) => itemRender(item))}
      </Menu>
    </Sider>
  );
};
