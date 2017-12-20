import React, { Component } from 'react';

class defaultLayout extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="sidebar" data-active-color="rose" data-background-color="black" data-image="/assets/img/sidebar-1.jpg">
            {/*
              Tip 1: You can change the color of active element of the sidebar using: data-active-color="purple | blue | green | orange | red | rose"
              Tip 2: you can also add an image using data-image tag
              Tip 3: you can change the color of the sidebar with data-background-color="white | black"
          */}
            <div className="logo">
              <a href="http://www.creative-tim.com/" className="simple-text logo-mini">
                CT
              </a>
              <a href="http://www.creative-tim.com/" className="simple-text logo-normal">
                Creative Tim
              </a>
            </div>
            <div className="sidebar-wrapper ps-container ps-theme-default" data-ps-id="312b285e-4908-2439-025a-c0ce6f4bd43b">
              <div className="user">
                <div className="photo">
                  <img src="/assets/img/faces/avatar.jpg" />
                </div>
                <div className="info">
                  <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                    <span>
                      Tania Andrew
                      <b className="caret" />
                    </span>
                  </a>
                  <div className="clearfix" />
                  <div className="collapse" id="collapseExample">
                    <ul className="nav">
                      <li>
                        <a href="#">
                          <span className="sidebar-mini"> MP </span>
                          <span className="sidebar-normal"> My Profile </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="sidebar-mini"> EP </span>
                          <span className="sidebar-normal"> Edit Profile </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="sidebar-mini"> S </span>
                          <span className="sidebar-normal"> Settings </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="nav">
                <li className="active">
                  <a href="dashboard.html">
                    <i className="material-icons">dashboard</i>
                    <p> Dashboard </p>
                  </a>
                </li>
                <li>
                  <a data-toggle="collapse" href="#pagesExamples">
                    <i className="material-icons">image</i>
                    <p> Pages
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="pagesExamples">
                    <ul className="nav">
                      <li>
                        <a href="pages/pricing.html">
                          <span className="sidebar-mini"> P </span>
                          <span className="sidebar-normal"> Pricing </span>
                        </a>
                      </li>
                      <li>
                        <a href="pages/rtl.html">
                          <span className="sidebar-mini"> RS </span>
                          <span className="sidebar-normal"> RTL Support </span>
                        </a>
                      </li>
                      <li>
                        <a href="pages/timeline.html">
                          <span className="sidebar-mini"> T </span>
                          <span className="sidebar-normal"> Timeline </span>
                        </a>
                      </li>
                      <li>
                        <a href="pages/login.html">
                          <span className="sidebar-mini"> LP </span>
                          <span className="sidebar-normal"> Login Page </span>
                        </a>
                      </li>
                      <li>
                        <a href="pages/register.html">
                          <span className="sidebar-mini"> RP </span>
                          <span className="sidebar-normal"> Register Page </span>
                        </a>
                      </li>
                      <li>
                        <a href="pages/lock.html">
                          <span className="sidebar-mini"> LSP </span>
                          <span className="sidebar-normal"> Lock Screen Page </span>
                        </a>
                      </li>
                      <li>
                        <a href="pages/user.html">
                          <span className="sidebar-mini"> UP </span>
                          <span className="sidebar-normal"> User Profile </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a data-toggle="collapse" href="#componentsExamples">
                    <i className="material-icons">apps</i>
                    <p> Components
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="componentsExamples">
                    <ul className="nav">
                      <li>
                        <a href="components/buttons.html">
                          <span className="sidebar-mini"> B </span>
                          <span className="sidebar-normal"> Buttons </span>
                        </a>
                      </li>
                      <li>
                        <a href="components/grid.html">
                          <span className="sidebar-mini"> GS </span>
                          <span className="sidebar-normal"> Grid System </span>
                        </a>
                      </li>
                      <li>
                        <a href="components/panels.html">
                          <span className="sidebar-mini"> P </span>
                          <span className="sidebar-normal"> Panels </span>
                        </a>
                      </li>
                      <li>
                        <a href="components/sweet-alert.html">
                          <span className="sidebar-mini"> SA </span>
                          <span className="sidebar-normal"> Sweet Alert </span>
                        </a>
                      </li>
                      <li>
                        <a href="components/notifications.html">
                          <span className="sidebar-mini"> N </span>
                          <span className="sidebar-normal"> Notifications </span>
                        </a>
                      </li>
                      <li>
                        <a href="components/icons.html">
                          <span className="sidebar-mini"> I </span>
                          <span className="sidebar-normal"> Icons </span>
                        </a>
                      </li>
                      <li>
                        <a href="components/typography.html">
                          <span className="sidebar-mini"> T </span>
                          <span className="sidebar-normal"> Typography </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a data-toggle="collapse" href="#formsExamples">
                    <i className="material-icons">content_paste</i>
                    <p> Forms
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="formsExamples">
                    <ul className="nav">
                      <li>
                        <a href="forms/regular.html">
                          <span className="sidebar-mini"> RF </span>
                          <span className="sidebar-normal"> Regular Forms </span>
                        </a>
                      </li>
                      <li>
                        <a href="forms/extended.html">
                          <span className="sidebar-mini"> EF </span>
                          <span className="sidebar-normal"> Extended Forms </span>
                        </a>
                      </li>
                      <li>
                        <a href="forms/validation.html">
                          <span className="sidebar-mini"> VF </span>
                          <span className="sidebar-normal"> Validation Forms </span>
                        </a>
                      </li>
                      <li>
                        <a href="forms/wizard.html">
                          <span className="sidebar-mini"> W </span>
                          <span className="sidebar-normal"> Wizard </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a data-toggle="collapse" href="#tablesExamples">
                    <i className="material-icons">grid_on</i>
                    <p> Tables
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="tablesExamples">
                    <ul className="nav">
                      <li>
                        <a href="tables/regular.html">
                          <span className="sidebar-mini"> RT </span>
                          <span className="sidebar-normal"> Regular Tables </span>
                        </a>
                      </li>
                      <li>
                        <a href="tables/extended.html">
                          <span className="sidebar-mini"> ET </span>
                          <span className="sidebar-normal"> Extended Tables </span>
                        </a>
                      </li>
                      <li>
                        <a href="tables/datatables.net.html">
                          <span className="sidebar-mini"> DT </span>
                          <span className="sidebar-normal"> DataTables.net </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a data-toggle="collapse" href="#mapsExamples">
                    <i className="material-icons">place</i>
                    <p> Maps
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="mapsExamples">
                    <ul className="nav">
                      <li>
                        <a href="maps/google.html">
                          <span className="sidebar-mini"> GM </span>
                          <span className="sidebar-normal"> Google Maps </span>
                        </a>
                      </li>
                      <li>
                        <a href="maps/fullscreen.html">
                          <span className="sidebar-mini"> FSM </span>
                          <span className="sidebar-normal"> Full Screen Map </span>
                        </a>
                      </li>
                      <li>
                        <a href="maps/vector.html">
                          <span className="sidebar-mini"> VM </span>
                          <span className="sidebar-normal"> Vector Map </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="widgets.html">
                    <i className="material-icons">widgets</i>
                    <p> Widgets </p>
                  </a>
                </li>
                <li>
                  <a href="charts.html">
                    <i className="material-icons">timeline</i>
                    <p> Charts </p>
                  </a>
                </li>
                <li>
                  <a href="calendar.html">
                    <i className="material-icons">date_range</i>
                    <p> Calendar </p>
                  </a>
                </li>
              </ul>
              <div className="ps-scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps-scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps-scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps-scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
            <div className="sidebar-background" style={{backgroundImage: 'url(/assets/img/sidebar-1.jpg)'}} /></div>
            <div className="main-panel ps-container ps-theme-default" data-ps-id="f40b5ed7-991c-4bd9-02c9-6855641a3580">
              <nav className="navbar navbar-transparent navbar-absolute">
                <div className="container-fluid">
                  <div className="navbar-minimize">
                    <button id="minimizeSidebar" className="btn btn-round btn-white btn-fill btn-just-icon">
                      <i className="material-icons visible-on-sidebar-regular">more_vert</i>
                      <i className="material-icons visible-on-sidebar-mini">view_list</i>
                    </button>
                  </div>
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#"> Dashboard </a>
                  </div>
                  <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="material-icons">dashboard</i>
                          <p className="hidden-lg hidden-md">Dashboard</p>
                        </a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="material-icons">notifications</i>
                          <span className="notification">5</span>
                          <p className="hidden-lg hidden-md">
                            Notifications
                            <b className="caret" />
                          </p>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Mike John responded to your email</a>
                          </li>
                          <li>
                            <a href="#">You have 5 new tasks</a>
                          </li>
                          <li>
                            <a href="#">You're now friend with Andrew</a>
                          </li>
                          <li>
                            <a href="#">Another Notification</a>
                          </li>
                          <li>
                            <a href="#">Another One</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="material-icons">person</i>
                          <p className="hidden-lg hidden-md">Profile</p>
                        </a>
                      </li>
                      <li className="separator hidden-lg hidden-md" />
                    </ul>
                    <form className="navbar-form navbar-right" role="search">
                      <div className="form-group form-search is-empty">
                        <input type="text" className="form-control" placeholder=" Search " />
                        <span className="material-input" />
                        <span className="material-input" /></div>
                      <button type="submit" className="btn btn-white btn-round btn-just-icon">
                        <i className="material-icons">search</i>
                        <div className="ripple-container" />
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
              <div className="content">
                {this.props.children}
              </div>
              <footer className="footer">
                <div className="container-fluid">
                  <nav className="pull-left">
                    <ul>
                      <li>
                        <a href="#">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Company
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Portofolio
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <p className="copyright pull-right">
                    ©
                    2017
                    <a href="http://www.creative-tim.com/"> Creative Tim </a>, made with love for a better web
                  </p>
                </div>
              </footer>
              <div className="ps-scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps-scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps-scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps-scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
        </div>
        <div className="fixed-plugin">
          <div className="dropdown show-dropdown">
            <a href="#" data-toggle="dropdown">
              <i className="fa fa-cog fa-2x"> </i>
            </a>
            <ul className="dropdown-menu">
              <li className="header-title"> Sidebar Filters</li>
              <li className="adjustments-line">
                <a href="javascript:void(0)" className="switch-trigger active-color">
                  <div className="badge-colors text-center">
                    <span className="badge filter badge-purple" data-color="purple" />
                    <span className="badge filter badge-blue" data-color="blue" />
                    <span className="badge filter badge-green" data-color="green" />
                    <span className="badge filter badge-orange" data-color="orange" />
                    <span className="badge filter badge-red" data-color="red" />
                    <span className="badge filter badge-rose active" data-color="rose" />
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li className="header-title">Sidebar Background</li>
              <li className="adjustments-line">
                <a href="javascript:void(0)" className="switch-trigger background-color">
                  <div className="text-center">
                    <span className="badge filter badge-white" data-color="white" />
                    <span className="badge filter badge-black active" data-color="black" />
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li className="adjustments-line">
                <a href="javascript:void(0)" className="switch-trigger">
                  <p>Sidebar Mini</p>
                  <div className="togglebutton switch-sidebar-mini">
                    <label>
                      <input type="checkbox" unchecked="" />
                    </label>
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li className="adjustments-line">
                <a href="javascript:void(0)" className="switch-trigger">
                  <p>Sidebar Image</p>
                  <div className="togglebutton switch-sidebar-image">
                    <label>
                      <input type="checkbox" defaultChecked />
                    </label>
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li className="header-title">Images</li>
              <li className="active">
                <a className="img-holder switch-trigger" href="javascript:void(0)">
                  <img src="../assets/img/sidebar-1.jpg" alt="" />
                </a>
              </li>
              <li>
                <a className="img-holder switch-trigger" href="javascript:void(0)">
                  <img src="../assets/img/sidebar-2.jpg" alt="" />
                </a>
              </li>
              <li>
                <a className="img-holder switch-trigger" href="javascript:void(0)">
                  <img src="../assets/img/sidebar-3.jpg" alt="" />
                </a>
              </li>
              <li>
                <a className="img-holder switch-trigger" href="javascript:void(0)">
                  <img src="../assets/img/sidebar-4.jpg" alt="" />
                </a>
              </li>
              <li className="button-container">
                <div className="">
                  <a href="http://www.creative-tim.com/product/material-dashboard-pro" target="_blank" className="btn btn-rose btn-block">Buy Now</a>
                </div>
                <div className="">
                  <a href="http://www.creative-tim.com/product/material-dashboard" target="_blank" className="btn btn-info btn-block">Get Free Demo</a>
                </div>
              </li>
              <li className="header-title">Thank you for 95 shares!</li>
              <li className="button-container">
                <button id="twitter" className="btn btn-social btn-twitter btn-round"><i className="fa fa-twitter" /> · 45</button>
                <button id="facebook" className="btn btn-social btn-facebook btn-round"><i className="fa fa-facebook-square"> ·</i>50</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default defaultLayout;