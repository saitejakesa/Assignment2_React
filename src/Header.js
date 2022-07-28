import React from 'react'

export default function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
            </button>

            {/* <!-- Topbar Search --> */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>

            {/* <!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">

              {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-search fa-fw"></i>
                </a>
                {/* <!-- Dropdown - Messages --> */}
                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
        {/* <!-- Nav Item - Alerts --> */}
              <li classNameName="nav-item dropdown no-arrow mx-1">
                <a classNameName="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i classNameName="fas fa-bell fa-fw"></i>
                  {/* <!-- Counter - Alerts --> */}
                  <span classNameName="badge badge-danger badge-counter">3+</span>
                </a>
                {/* <!-- Dropdown - Alerts --> */}
                <div classNameName="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                  <h6 classNameName="dropdown-header">
                    Alerts Center
                  </h6>
                  <a classNameName="dropdown-item d-flex align-items-center" href="#">
                    <div classNameName="mr-3">
                      <div classNameName="icon-circle bg-primary">
                        <i classNameName="fas fa-file-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div classNameName="small text-gray-500">December 12, 2019</div>
                      <span classNameName="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                  </a>
                  <a classNameName="dropdown-item d-flex align-items-center" href="#">
                    <div classNameName="mr-3">
                      <div classNameName="icon-circle bg-success">
                        <i classNameName="fas fa-donate text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div classNameName="small text-gray-500">December 7, 2019</div>
                      $290.29 has been deposited into your account!
                    </div>
                  </a>
                  <a classNameName="dropdown-item d-flex align-items-center" href="#">
                    <div classNameName="mr-3">
                      <div classNameName="icon-circle bg-warning">
                        <i classNameName="fas fa-exclamation-triangle text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div classNameName="small text-gray-500">December 2, 2019</div>
                      Spending Alert: We've noticed unusually high spending for your account.
                    </div>
                  </a>
                  <a classNameName="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                </div>
              </li>

              {/* <!-- Nav Item - Messages --> */}
              <li classNameName="nav-item dropdown no-arrow mx-1">
                <a classNameName="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i classNameName="fas fa-envelope fa-fw"></i>
                  {/* <!-- Counter - Messages --> */}
                  <span classNameName="badge badge-danger badge-counter">7</span>
                </a>
                {/* <!-- Dropdown - Messages --> */}
                <div classNameName="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                  <h6 classNameName="dropdown-header">
                    Message Center
                  </h6>
                  <a classNameName="dropdown-item d-flex align-items-center" href="#">
                    <div classNameName="dropdown-list-image mr-3">
                      <img classNameName="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                      <div classNameName="status-indicator bg-success"></div>
                    </div>
                    <div classNameName="font-weight-bold">
                      <div classNameName="text-truncate">Hi there! I am wondering if you can help me with a
                        problem I've been having.</div>
                      <div classNameName="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                  </a>
                  <a classNameName="dropdown-item d-flex align-items-center" href="#">
                    <div classNameName="dropdown-list-image mr-3">
                      <img classNameName="rounded-circle" src="img/undraw_profile_2.svg" alt="..." />
                      <div classNameName="status-indicator"></div>
                    </div>
                    <div>
                      <div classNameName="text-truncate">I have the photos that you ordered last month, how
                        would you like them sent to you?</div>
                      <div classNameName="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                  </a>
                  <a classNameName="dropdown-item d-flex align-items-center" href="#">
                    <div classNameName="dropdown-list-image mr-3">
                      <img classNameName="rounded-circle" src="img/undraw_profile_3.svg" alt="..." />
                      <div classNameName="status-indicator bg-warning"></div>
                    </div>
                    <div>
                      <div classNameName="text-truncate">Last month's report looks great, I am very happy with
                        the progress so far, keep up the good work!</div>
                      <div classNameName="small text-gray-500">Morgan Alvarez · 2d</div>
                    </div>
                  </a>
                  <a classNameName="dropdown-item d-flex align-items-center" href="#">
                    <div classNameName="dropdown-list-image mr-3">
                      <img classNameName="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                      <div classNameName="status-indicator bg-success"></div>
                    </div>
                    <div>
                      <div classNameName="text-truncate">Am I a good boy? The reason I ask is because someone
                        told me that people say this to all dogs, even if they aren't good...</div>
                      <div classNameName="small text-gray-500">Chicken the Dog · 2w</div>
                    </div>
                  </a>
                  <a classNameName="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                </div>
              </li>

              <div classNameName="topbar-divider d-none d-sm-block"></div>

              {/* <!-- Nav Item - User Information --> */}
              <li classNameName="nav-item dropdown no-arrow">
                <a classNameName="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span classNameName="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                  <img classNameName="img-profile rounded-circle" src="img/undraw_profile.svg" />
                </a>
                {/* <!-- Dropdown - User Information --> */}
                <div classNameName="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <a classNameName="dropdown-item" href="#">
                    <i classNameName="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a classNameName="dropdown-item" href="#">
                    <i classNameName="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a classNameName="dropdown-item" href="#">
                    <i classNameName="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div classNameName="dropdown-divider"></div>
                  <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i classNameName="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
              </ul>
    </nav>
    </div>
  )
}
