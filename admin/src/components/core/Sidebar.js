import React, { useEffect, useState, useContext } from "react";
import "../../styles/sidebar.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/university-logo.png";
import { Context as UserContext } from "../../context/UserContext";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const { userLogout } = useContext(UserContext);
  const userInformation = localStorage.getItem("userInfo");

  useEffect(() => {
    userInformation ? setActive(true) : setActive(false);
  }, [userInformation]);

  if (active) {
    return (
      <ProSidebar rtl={true} collapsed={false}>
        <SidebarHeader className="sidebar-header">
          <img className="logo" src={logo} />
          <p className="header-title">دانشکده شهید شمسی پور</p>
          {/**
           *  You can add a header for the sidebar ex: logo
           */}
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FontAwesomeIcon icon={faCoffee} />}>
              داشبورد
              <Link to="/" />
            </MenuItem>
            <SubMenu title="پست ها" icon={<FontAwesomeIcon icon={faCoffee} />}>
              <MenuItem>
                لیست پست ها
                <Link to="/post/list" />
              </MenuItem>
              <MenuItem>
                ایجاد
                <Link to="/post/create" />
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="ویدیو ها"
              icon={<FontAwesomeIcon icon={faCoffee} />}
            >
              <MenuItem>
                لیست ویدیو ها
                <Link to="/video/list" />
              </MenuItem>
              <MenuItem>
                ایجاد
                <Link to="/video/create" />
              </MenuItem>
            </SubMenu>
            <SubMenu title="کاربران" icon={<FontAwesomeIcon icon={faCoffee} />}>
              <MenuItem>
                لیست کاربران
                <Link to="/user/list" />
              </MenuItem>
              <MenuItem>
                ایجاد
                <Link to="/user/create" />
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="دسته بندی ها"
              icon={<FontAwesomeIcon icon={faCoffee} />}
            >
              <MenuItem>
                لیست
                <Link to="/category/list" />
              </MenuItem>
              <MenuItem>
                ایجاد
                <Link to="/category/create" />
              </MenuItem>
            </SubMenu>
            <MenuItem>
              <button
                onClick={() => userLogout()}
                type="button"
                className="btn btn-danger logout-btn"
              >
                خروج
              </button>
            </MenuItem>
          </Menu>
        </SidebarContent>

        <SidebarFooter className="sidebar-footer">
          <p className="footer-title">طراحی توسط عرفان مبشری</p>
          {/**
           *  You can add a footer for the sidebar ex: copyright
           */}
        </SidebarFooter>
      </ProSidebar>
    );
  } else {
    return null;
  }
};
export default Sidebar;
