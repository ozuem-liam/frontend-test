import React, {useState} from 'react'
import { Col } from 'antd'

// Import all Assets
import IcChevronDown from '../assets/ic_chevron_down.png'
import IcChevronRight from '../assets/ic_chevron_right.png'
import WelcomeIcon from '../assets/shuttle 1.png'
import DashboardIcon from '../assets/ic_dashboard.png'
import SalesIcon from '../assets/ic_wallet.png'
import PurchaseIcon from '../assets/Purchase Icon.png'
import AccountingIcon from '../assets/Accounting.png'
import BankingIcon from '../assets/bank.png'
import PayrollIcon from '../assets/ic_invoices.png'
import ReportsIcon from '../assets/tabler_report.png'
import AnalyticsIcon from '../assets/Group 945.png'
import SettingsIcon from '../assets/settings.png'
import WalletIcon from '../assets/ic_wallet.png'
import LogoutIcon from '../assets/logout.png'

function SideBar() {
    const [showPurchaseMenu, setShowPurchaseMenu] = useState(false);
    const [showAnalyticsMenu, setShowAnalyticsMenu] = useState(false);

    const togglePurchase = () => {
        setShowPurchaseMenu(showPurchaseMenu => !showPurchaseMenu)
    }

    const toggleAnalytics = () => {
        setShowAnalyticsMenu(setShowAnalyticsMenu => !setShowAnalyticsMenu)
    }
  return (
    <Col span={6}> 
        <aside className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-slate-100 rounded dark:bg-gray-800 h-screen">
        <ul className="space-y-2">
        <li>
        <a href="#" className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <img src={WelcomeIcon} alt="icon" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" />
        <span className="text-sm">Welcome</span>
        </a>
        </li>
        <li>
        <a href="#" className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <img src={DashboardIcon} alt="icon" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" />
        <span className="text-sm">Dashboard</span>
        </a>
        </li>
        <li>
        <a href="#" className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <img src={SalesIcon} alt="icon" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
        <span className="text-sm">Sales</span>
        <img src={IcChevronRight} alt="icon" className="justify-self-end" />
        </a>
        </li>
        <li>
            <div onClick={togglePurchase} className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src={PurchaseIcon} alt="icon" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
            <span className="text-sm">Purchases</span>
            <img src={showPurchaseMenu ? IcChevronRight : IcChevronDown} alt="icon" className="justify-self-end" />
            </div>
            <div className={showPurchaseMenu ? "hidden" : ""}>
                <ul className="flex flex-col justify-end ml-20 pl-2">
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="#"><span>Bills</span></a></li>
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="#"><span>Vendors</span></a></li>
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="#"><span>Product & Services</span></a></li>
                </ul>
            </div>
        </li>
        <li>
        <a href="#" className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <img src={AccountingIcon} alt="icon" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
        <span className="text-sm">Accounting</span>
        <img src={IcChevronRight} alt="icon" className="justify-self-end" />
        </a>
        </li>
        <li>
        <a href="#" className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <img src={BankingIcon} alt="icon" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
        <span className="text-sm">Banking</span>
        <img src={IcChevronRight} alt="icon" className="justify-self-end" />
        </a>
        </li>
        <li>
        <a href="#" className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <img src={PayrollIcon} alt="icon" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
        <span className="text-sm">Payroll</span>
        <img src={IcChevronRight} alt="icon" className="justify-self-end" />
        </a>
        </li>
        <li>
        <a href="#" className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <img src={ReportsIcon} alt="icon" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
        <span className="text-sm">Reports</span>
        </a>
        </li>
        <li>
        <div onClick={toggleAnalytics} className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <img src={AnalyticsIcon} alt="icon" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
        <span className="text-sm">Analytics</span>
        <img src={showAnalyticsMenu ? IcChevronRight : IcChevronDown} alt="icon" className="justify-self-end" />
        </div>
        <div className={showAnalyticsMenu ? "hidden" : ""}>
                <ul className="flex flex-col justify-end ml-20 pl-2">
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="/view-report"><span>View Report</span></a></li>
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="#"><span>To-Do</span></a></li>
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="#"><span>Upload Docs</span></a></li>
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="#"><span>Chat</span></a></li>
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="#"><span>Schedule</span></a></li>
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="#"><span>Message Board</span></a></li>
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="#"><span>Make Payments</span></a></li>
                    <li><a className="flex items-center p-1 font-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href="#"><span>Billing</span></a></li>
                </ul>
        </div>
        </li>
        <li>
        <a href="#" className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <img src={SettingsIcon} alt="icon" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
        <span className="text-sm">Settings</span>
        </a>
        </li>
        <li className="mt-8 border-b-gray-800">
        <a href="#" className="grid grid-cols-3 items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <img src={LogoutIcon} alt="icon" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
        <span className="text-sm">Logout</span>
        </a>
        </li>
        </ul>
        <div className="flex items-center justify-center">
        <button className="inline-flex items-center justify-center py-2 px-2 w-48 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
           <img src={WalletIcon} alt="icon" className="w-8 h-8 mr-3" />
           <p className="font-normal text-base m-0">Accept Payments</p>
        </button>
        </div>
        </div>
        </aside>
        </Col>

  )
}

export default SideBar