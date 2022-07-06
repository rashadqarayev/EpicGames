import React , { useEffect, useMemo , useContext} from 'react';
import { Link,NavLink } from 'react-router-dom';
import navimg from '../assets/img/download.png';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import {UserContext} from '../Context'




const Navbar = () => {

  const {user , setUser} = useContext(UserContext)

  

  useEffect(() => {
    i18next.changeLanguage(localStorage.lang)
  }, [])

  // useEffect(() => {
    
  // }, [localStorage.user])
  


  
  

  const {t} = useTranslation();

  function selectLanguage(a){
    localStorage.lang = a;
    i18next.changeLanguage(localStorage.lang);


  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Logout =()=>{
    setUser(false)
   localStorage.removeItem("user")
  }

  
  return  useMemo(()=>   <nav className="navbar navbar-dark bg-epic navbar-expand-lg">
  <div className="container-fluid">
  <Link className="navbar-brand"><img className='mx-1 nav-img' src={navimg} alt="asa" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div style={{}} className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
      <i class="fa fa-times-thin fa-2x" aria-hidden="true"></i>
      <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
  
      </div>
      <div className="offcanvas-body">
      <ul className="navbar-nav me-auto gap-3 mx-1">
        <li className="nav-item">
          {/*  activeClassName='active'  */}
          <NavLink exact  activeClassName='nav-select'   to='/' className='nav-link' >{t("Navbar.nav-link1")}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName='nav-select'   to='/faq' className="nav-link" >{t("Navbar.nav-link2")}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='nav-select'  to="./help" className="nav-link" >{t("Navbar.nav-link3")}</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.unrealengine.com/en-US/?sessionInvalidated=true">{t("Navbar.nav-link4")}</a>
        </li>
      </ul>
      <div className="right-side gap-3 d-flex align-items-center">
      <div className='language-choice d-flex align-items-center'>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle"  id="navbarDropdown" role="button"  aria-expanded="false">
        <Link ><i class="fa-solid fa-globe language"></i></Link>
        </Link>
        <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
          <li>
              <div>
                  <button className='btn btn-lang' onClick={()=>selectLanguage('en-US')}>
                    {" "}
                  ENGLISH</button>
              </div>
          </li>
          <li>
              <div>
                  <button className='btn btn-lang' onClick={()=>selectLanguage('tr-TR')}>
                    {" "}
                    TÜRKÇE</button>
              </div>
          </li>
          
          
          
        </ul>
      </li>
        
      </div>

      <div className="user-information d-flex align-items-center">

      <li class="nav-item dropdown dropnow">

        <Link class="nav-link dropdown-toggle user-div" to="/signin" id="navbarDropdown" role="button"   aria-expanded="false">
        <a  href=""><i class="fa-solid fa-user me-3 user-logo"></i></a>
        {/* <Link to="/signin" className='user' >RESHADQR</Link> */}
        {
          user !== false ? <a className='user text-uppercase'>{user.name}</a> : <Link  className='user' >SIGN IN</Link>
        }
        </Link>
      


        <ul class="dropdown-menu text-center " aria-labelledby="navbarDropdown1">
          <li>
              <div>
                  <button className='btn btn-lang'>{t("UserInfo.info1")}</button>
              </div>
          </li>
          <li>
              <div>
                  <button className='btn btn-lang'>{t("UserInfo.info2")}</button>
              </div>
          </li>
          <li>
              <div>
                  <button className='btn btn-lang'>{t("UserInfo.info3")}</button>
              </div>
          </li>
          <li>
              <div>
                  <button className='btn btn-lang'>{t("UserInfo.info4")}</button>
              </div>
          </li>
          <li>
              <div>
                  <button className='btn btn-lang'>{t("UserInfo.info5")}</button>
              </div>
          </li>
          <li>
              <div>
                  <button className='btn btn-lang' onClick={Logout}>{t("UserInfo.info6")}</button>
              </div>
          </li>
          
          
          
        </ul>
      </li>
      
      </div>

      <div>
        <button href="" className='btn btn-reshad'>DOWNLOAD</button>
      </div>

      </div>
      </div>
    </div>
  </div>
</nav>,[t,user,Logout])
}

export default Navbar
