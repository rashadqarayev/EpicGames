import { menuItemClasses } from "@mui/material";
import React, { useState , useContext} from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useCart } from "react-use-cart";
import Data from "../data/Data";

import { UserContext } from "../Context";

const Header = () => {


  const [showMenu,setShowMenu] = useState(false);

  const showLinkMenu =()=>{
    setShowMenu(!showMenu);
  }
  const {activeMenu,menuData,openMenu} = useContext(UserContext);

  
  const [filteredData, setFilteredData] = useState([]);

  const [searchTerm , setSearchTerm] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
   
    const newFilter = Data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const { totalUniqueItems } = useCart();

  const history = useHistory();

  function handleChange(value) {
    history.push(`/${value}`);
  }

  const { t } = useTranslation();

 

  return (
    <div className="header">
      <div className="container ">
        <div className="row justify-content-between">
          <div className="col-lg-2 col-md-2 col-sm-2  mt-4 hn-1 d-flex flex-column">
            <div class="searchbar">
              <a href="#" class="search_icon">
                <i class="fas fa-search"></i>
              </a>
              <input
                class="search_input"
                type="text"
                name=""
                placeholder="Search"
                onChange={handleFilter}
              />
            </div>
            {
                filteredData.length != 0 &&(

                  <div className="dataResult">
              <div className="box">
              {filteredData.slice(0,15).map((value,key)=>{
                return (
                  <Link   to={`/games/${value.title}`}  className="mb-0 dataItem">{value.title}</Link>
                )
              })}
              </div>
              
                  </div>

                )
              }
         
          </div>
          <div className="col-lg-7 col-md-6 d-links col-sm-4 hn-2 ">
            <div className="mx-4 d-nav ">
              <NavLink
                to="/"
                exact
                activeClassName="selected"
                className="mx-2"
              >
                {t("Header.link1")}
              </NavLink>
              <NavLink
                to="/browsegames"
                activeClassName="selected"
                className="mx-3"
              >
                {t("Header.link2")}
              </NavLink>
              <NavLink to="/news" activeClassName="selected" className="mx-2">
                {t("Header.link3")}
              </NavLink>
            </div>

            <div>
            <div className="phone-menu-main text-light"  onClick={showLinkMenu}>
             {activeMenu.text}
            </div>
           
            </div>
           
          </div>


          

          <div className="col-lg-3 text-end d-link2 d-flex justify-content-end col-md-3 col-sm-3 hn-3 ">
            <NavLink  to="/wishlist" activeClassName="selected">
              <a href="" className="me-3 wish">
                {t("Header.link4")}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="svg wish-button"
                viewBox="0 0 24 24"
              >
                <title>Wishlist</title>
                <circle
                  cx="11.9999"
                  cy="12"
                  r="9.90909"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                ></circle>
                <path
                  d="M7.09082 12L10.3635 15.2727L16.909 8.72723"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                ></path>
              </svg>
            </NavLink>
            <NavLink to="/cart" activeClassName="selected">
              {" "}
              <div className="d-flex me-2">
                <a href="" className="cart">
                  {t("Header.link5")}
                </a>
                <div className="add-to-cart-number d-flex align-items-center justify-content-center">
                  {totalUniqueItems}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg cart-button"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14.5446 11C15.2943 11 15.9541 10.59 16.2939 9.97L19.8726 3.48C20.2425 2.82 19.7627 2 19.0029 2H4.20844L3.26879 0H0V2H1.99926L5.59792 9.59L4.24842 12.03C3.51869 13.37 4.47834 15 5.99777 15H17.9933V13H5.99777L7.09736 11H14.5446ZM5.15808 4H17.3036L14.5446 9H7.5272L5.15808 4ZM5.99777 16C4.89818 16 4.00851 16.9 4.00851 18C4.00851 19.1 4.89818 20 5.99777 20C7.09736 20 7.99703 19.1 7.99703 18C7.99703 16.9 7.09736 16 5.99777 16ZM15.9941 16C14.8945 16 14.0048 16.9 14.0048 18C14.0048 19.1 14.8945 20 15.9941 20C17.0937 20 17.9933 19.1 17.9933 18C17.9933 16.9 17.0937 16 15.9941 16Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </NavLink>
          </div>
         
        </div>
        <div className="row">
        <div className="col-lg-12 col-md-12">
          {showMenu && <div className="phone-menu d-flex flex-column " >
            {menuData.map((menu)=>{
              return (
                <div  onClick={()=>openMenu(menu)} key={menu.id} >
                  <NavLink to={menu.to} activeClassName="selected">{menu.text}</NavLink>
                </div>
              )
            })}
           </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
