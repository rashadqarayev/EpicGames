.filter((value)=>{
      if(searchTitle === ""){
        return value
      }else if(value.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase())){
        return value
      }
    })

    Searchbar filter


WIshlist cartt


            <div className="cart-details">
           <div  className="cart-a col-lg-12">
                    <div className="cart-b d-flex justify-content-between">
                        <div className='col-lg-2 col-md-2 col-sm-4'>
                        <img src={gd} alt="" className='img-fluid' />
                        </div>
                        <div className='col-lg-10 col-md-10 col-sm-8 d-flex  flex-column'>
                            <div className="col-12 d-flex justify-content-between ar-1">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="col-12">
                                    <a href="#" className="btn btn-new text-uppercase">Base Game</a>
                                    </div>
                                    <div className="col-12">
                                       <p className='cart-title'>God Of War</p>
                                    </div>
    
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 ">
                                    <div className="col-12 d-flex justify-content-end cc">
                                        <button className="btn btn-new">
                                            -20%
                                        </button>
                                        <p className='orig-price ms-2 mb-0'>
                                        22$
                                        </p>
                                        <p className='dec-price ms-2 mb-0'>
                                        $33
                                        </p>
                                    </div>
                                    <div className="col-12 d-flex justify-content-end cc">
                                        <p className='sale-time'>assjjashsjhsajbdj</p>
                                    </div>
    
                                </div>
                            </div>
                        
                            <div className="col-12 d-flex justify-content-between dc">
                                <div className="col-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="svg cart-win" viewBox="0 0 512 512"><title>Windows</title><g><path fill="currentColor" d="M0.175 256l-0.175-156.037 192-26.072v182.109zM224 69.241l255.936-37.241v224h-255.936zM479.999 288l-0.063 224-255.936-36.008v-187.992zM192 471.918l-191.844-26.297-0.010-157.621h191.854z"></path></g></svg>
                                </div>
                                <div className="col-11 d-flex justify-content-end  aq">
                                    <p className='move me-3 '>Remove</p>
                                    <button type="button" className="btn btn-add-to-cart">
                        ADD TO CART
                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

        

             
           </div>



             <nav className="navbar navbar-dark bg-epic navbar-expand-lg">
    <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='mx-1 nav-img' src={navimg} alt="asa" /></a>
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
            <NavLink    to='/' className='nav-link' >{t("Navbar.nav-link1")}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink    to='/faq' className="nav-link"  href="#">{t("Navbar.nav-link2")}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  to="./help" className="nav-link" href="#">{t("Navbar.nav-link3")}</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.unrealengine.com/en-US/?sessionInvalidated=true">{t("Navbar.nav-link4")}</a>
          </li>
        </ul>
        <div className="right-side gap-3 d-flex align-items-center">
        <div className='language-choice d-flex align-items-center'>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"  aria-expanded="false">
          <a href="#"><i class="fa-solid fa-globe language"></i></a>
          </a>
          <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
            <li>
                <div>
                    <button className='btn btn-lang' onClick={()=>selectLanguage('de')}>
                    {" "}
                      DEUTSCH
                      </button>
                </div>
            </li>
            <li>
                <div>
                    <button className='btn btn-lang' onClick={()=>selectLanguage('en-US')}>
                      {" "}
                    ENGLISH</button>
                </div>
            </li>
            <li>
                <div>
                    <button className='btn btn-lang' onClick={()=>selectLanguage('br')}>
                      {" "}
                      PORTUGUÊS (BRASIL)</button>
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

        <li class="nav-item dropdown">

          <a class="nav-link dropdown-toggle user-div" href="#" id="navbarDropdown" role="button"   aria-expanded="false">
          <a href=""><i class="fa-solid fa-user me-3 user-logo"></i></a>
          {/* <Link to="/signin" className='user' >RESHADQR</Link> */}
          {
            user != false ? <div>{user.name}</div> : <Link to="/signin" className='user' >SIGN IN</Link>
          }
          </a>
        


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
  </nav>