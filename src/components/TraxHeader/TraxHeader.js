import React, { useState } from 'react';
import "./TraxHeader.scss";
// import Navbar from "react-bootstrap/Navbar";
import { Button, Collapse, Drawer, theme } from 'antd';
// import {BsChevronDown} from 'react-icons/bs';
import { CaretRightOutlined } from '@ant-design/icons';
// import Nav from "react-bootstrap/Nav";
const { Panel } = Collapse;
export const TraxHeader = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  const sideBarData=[
    {name:"Home",id: 1,submenu:["Standard Version","Creative Agency","Class Light","Video Background","Modern Agency","Classic Setup","Flat Version","Innovative Layout","Onepage Layout","Center Logo","Bottom Nav","Minimal Gray","Parallax Version","Interactive class","Design Studio","Interactive Particles"]},
    {name:"About",id: 2,submenu:[""]},
    {name:"Gallery",id: 3,submenu:[""]},
    {name:"Pages",id: 4,submenu:["Our Team","Service","Service Detail","Testimonals","Gallery","Gallery Detail","Pricing","FAQ's","Error 404","Coming Soon","Account","Shops"]},
    {name:"Blogs",id: 5,submenu:["Blog 1","Blog 2","Blog Details"]},
    {name:"Contact",id: 6,submenu:[""]},
  ]
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    // background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
    color:"white" ,
  };
  return (
    <div className='trax-header-container navbar'>
         <div className='trax-header-left-container'>
            <img src="https://trax.acrothemes.com/bootstrap-v5/images/logo.png" className='trax-header-image' alt="trax-avatar"/>
         </div>
          <div className="justify-content-center menu">
            <ul className="cart-info navbar-expand-md mt-4 trax-header-middle-container d-flex flex-row justify-content-space-between ">
             {sideBarData.map((each)=>
             <li href="#about" className="nav-link">
              <p>{each.name}</p>
             </li>
             )}
            </ul>
          </div>
          <div className='trax-header-right-container'>
          <div className="hamburger" onClick={showDrawer}>
              <span class="top-bun"></span>
              <span class="meat"></span>
              <span class="bottom-bun"></span>
            </div>
            <Drawer
              title=" "
              placement="right"
              closable={false}
              // id='trax-header-side-containner'
              width={500}
              onClose={onClose}
              open={open}
              key="right"
              extra={<Button onClick={onClose}>&times;</Button>}
            >
              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 270 : 90} />}
                expandIconPosition="right"
              className='trax-header-drawer'
              >
                {sideBarData.map((eachName)=>
                <Panel header={eachName.name} key={eachName.id} style={panelStyle}>
                  {eachName.submenu.map((eachSubmenu)=>
                   <p>{eachSubmenu}</p> 
                  // console.log(eachSubmenu)
                  )}
                </Panel>
                )}
              </Collapse>
            </Drawer> 
            {/* </div> */}
          </div>
    </div>
  )
}


