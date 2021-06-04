import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SidebarData";

const Nav = styled.div`
  background: #021155;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavIcon = styled(Link)`
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
  color:white;
`;

const SidebarNav = styled.nav`
  background: #021155;
  padding-right: 2px;
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  overflow: overlay;  
  top: 12;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  color: white;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Nav>
        <span style={{ display: "flex", width: "50%" }}>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingLeft: "16px",
              fontSize: "x-large",
            }}
          >
            Banyan Data Services
          </div>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "50%",
          }}
        >
          {" "}
          <input
            id="123"
            type="text"
            placeholder="Search"
            style={{
              width: "75%",
              height: "30px",
              border: "none"
            }}
          />{" "}
          &nbsp; &nbsp; <strong>India/BLR </strong>
        </div>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};
