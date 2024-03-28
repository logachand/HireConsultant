import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import "./admin.css"

export default function MainAdmin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
    <div className='body'>
     <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
    </div>
    </>
  );
}
