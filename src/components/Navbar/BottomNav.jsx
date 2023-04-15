import React, { useState } from "react";
import {
  BsFillBagCheckFill,
  BsFillHouseFill,
} from "react-icons/bs";
import { SiYourtraveldottv } from 'react-icons/si'
import { MdPermContactCalendar } from 'react-icons/md'
import { FaBlog } from 'react-icons/fa'
import "./bottomnav.scss";
import { Link } from 'react-router-dom';

export const BottomNav = () => {
  const [selected, setSelected] = useState(0);

  const menus = [
    {
      icon: <BsFillHouseFill size={25} />,
      name: "Home",
      path: "/"
    },
    {
      icon: <BsFillBagCheckFill size={25} />,
      name: "Offers",
      path: "/offers"
    },
    {
      icon: <SiYourtraveldottv size={25} />,
      name: "Tours",
      path: "/tourss"
    },
    {
      icon: <FaBlog size={25} />,
      name: "Blog",
      path: "/CBlog"
    },
    {
      icon: <MdPermContactCalendar size={25} />,
      name: "Contact",
      path: "/contact-us"
    },
  ];

  return (
    <div className="navigation" style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <ul>
        {menus.map((val, index) => {
          return (
            <li
              key={index}
              className={index === selected ? "active" : ""}
            >
              <Link to={val.path}
              
              onClick={() => setSelected(index)}>
                
                <div className="icon">{val.icon}</div>
               
              </Link>
              <div className="name">{val.name}</div>
            </li>
          );
        })}
        <div className="menu-bg" />
      </ul>
    </div>
  );
}

export default BottomNav;
