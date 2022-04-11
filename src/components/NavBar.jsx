import React from 'react'

// Import all Assets
import Logo from '../assets/Group.png'
import IcChevron from '../assets/ic_chevron.png'
import MaskImg from '../assets/Mask Group.png'
import ArrowDownVector from '../assets/Vector 20.png'
import NotificationIcon from '../assets/Notification.png'

function NavBar() {
  return (
<nav className="bg-slate-100">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-2 bg-white rounded-xl flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="space-x-2.5 flex items-center">
          <img className="block lg:hidden h-8 w-auto" src={Logo} alt="Workflow"/>
          <img className="hidden lg:block h-8 w-auto" src={Logo} alt="Workflow"/>
          <h1 className="text-xl mb-0">HostDeak</h1>
          <img className="hidden lg:block h-8 w-auto" src={IcChevron} alt="Workflow"/>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="bg-slate-100 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          {/* <!-- Heroicon name: outline/bell --> */}
          <img className="hidden lg:block h-8 w-auto" src={NotificationIcon} alt="Workflow"/>
        </button>

        {/* <!-- Profile dropdown --> */}
        <div className="text-sm relative">
          <div>
            <button type="button" className="space-x-1.5 items-center bg-slate-100 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-10 w-10 rounded-full" src={MaskImg} alt="mask"/>
              <h3>Ogoluwa</h3>
              <img src={ArrowDownVector} alt="arrow Down" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className="sm:hidden" id="mobile-menu">
  </div>
</nav>
  )
}

export default NavBar