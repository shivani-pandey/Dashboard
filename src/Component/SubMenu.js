import React, { Component, useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SidebarLink = styled(Link)`
display:flex;
color:#000000;
justify-content: space-between;
align-items:center;
height: 24px;
list-style: none;
text-decoration: none;
font-size: 16px;
padding: 8px;
color: white;
font-family: Times New Roman, Times, serif;
&:hover
{
    background: gray;
    cursor: pointer;
}
`;
const SidebarLabel= styled.span`
margin-left: 12px;
padding:6px;

`;

const SidebarSubLabel= styled.span`
margin-left: 12px;
padding:6px;
`;

const SidebarMainLabel = styled.div`
padding-left: 4px;
font-size: 16px;
font-weight:400;
padding-bottom:2px;
text-decoration: underline;
`;

const DropdownLink =styled(Link)`
height: 24px;
padding-right: 1rem;
margin-left: 1rem;
display: flex;
align-items: center;
text-decoration: none;
color: #000000;
font-size:14px;
padding:4px;
color: white;
&:hover
{
    background: gray;
    cursor: pointer;
}
`;

const SubMenu = ({item}) =>
{
    const [subnav, setSubnav]=useState(false);
    const showSubnav =()=> setSubnav(!subnav);
    return(
    <>
    {item?.mainTitle ? <span style ={{display:'flex', paddingTop: '12px', paddingLeft: '4px'}}>{item?.mainTitle?item.icon:""}<SidebarMainLabel>{item?.mainTitle}</SidebarMainLabel></span>:"" }
    
    <SidebarLink to ={item.path} onClick ={item.subNav && showSubnav}>
        <div>
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
            {item.subNav && subnav ? item.iconOpened :item.subNav ? item.iconClosed:null }
        </div>
    </SidebarLink>
    {subnav && item.subNav.map((item,index)=>
     {
         return( <DropdownLink to ={item.path} key={index}>{item.icon}
         <SidebarSubLabel>
             {item.title}</SidebarSubLabel></DropdownLink>)

    })}
    </>);    
};

export default SubMenu;