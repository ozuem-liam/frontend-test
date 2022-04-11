import React from 'react'
import { Row, Col } from 'antd'

// Import Components
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'

// Import all Assets
import UploadIcon from '../../assets/Vector 21.png'
import BinIcon from '../../assets/Vector.png'


function AddBill() {
    const itemUpload = () => {
        document.getElementById('itemId').click();
    }

    const expenseUpload = () => {
        document.getElementById('expenseId').click();
    }

  return (
    <>
    <NavBar />
    <Row>    
        <Col span={6}>
            <SideBar />    
        </Col>    
        <Col span={18}>
        <div className="mt-5 md:mt-0 rounded-t-3xl">
            <div className="w-11/12 py-3 p-4 ml-3 mt-3 mt-6">
                <h1 className="m-0 mt-3 text-lg font-bold">Add Bill</h1>
            </div>
                <form action="#" method="POST">
                    <div className="px-4 py-5 bg-white sm:p-6">
                            <Row gutter={16}>
                                <Col>
                                    <div>
                                        <label for="vendor" className="block mt-2 text-sm font-medium text-gray-700">Vendor</label>
                                        <select className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            <option selected value="#">Choose</option>
                                            <option value="#">#</option>
                                            <option value="#">#</option>
                                            <option value="#">#</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="last-name" className="block mt-2 text-sm font-medium text-gray-700">Currency</label>
                                        <select className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            <option selected value="#">USD - U.S dollar</option>
                                            <option value="#">#</option>
                                            <option value="#">#</option>
                                            <option val<div className="w-11/12 py-3 p-4 ml-3 mt-3 mt-6">
                <h1 className="m-0 mt-3 text-lg font-bold">View Report</h1>
            </div>ue="#">#</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="upload-bill" className="block mt-2 text-sm font-medium text-gray-700">Upload Copy of Bill</label>
                                        <input type="text" name="upload-bill" id="upload-bill" autocomplete="upload-bill" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label for="date" className="block mt-2 text-sm font-medium text-gray-700">Date</label>
                                        <input placeholder="2021-03-25" type="date" name="date" id="date" autocomplete="date" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div>
                                        <label for="due-date" className="block mt-2 text-sm font-medium text-gray-700">Due Date</label>
                                        <input placeholder="2021-03-25" type="date" name="due-date" id="due-date" autocomplete="due-date" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label for="po-so" className="block mt-2 text-sm font-medium text-gray-700">P.O./S.O</label>
                                        <input type="text" name="po-so" id="po-so" autocomplete="po-so" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label for="bill" className="block mt-2 text-sm font-medium text-gray-700">Bill #</label>
                                        <input type="text" name="bill" id="bill" autocomplete="bill" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label for="notes" className="block mt-2 text-sm font-medium text-gray-700">Notes</label>
                                        <input type="text" name="notes" id="notes" autocomplete="notes" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-28" />
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="shadow overflow-hidden sm:rounded-md w-11/12 ml-6">
                            <div className="flex items-center mb-2 border-b-2 border-black-500 p-2"> 
                                <div className="text-base mr-10 font-medium">Item</div>
                                <div className="text-base mr-10 font-medium">Expense Category</div>
                                <div className="text-base mr-10 font-medium">Description</div>
                                <div className="text-base mr-10 font-medium">Qty</div>
                                <div className="text-base mr-10 font-medium">Price</div>
                                <div className="text-base mr-10 font-medium">Tax</div>
                                <div className="text-base mr-10 font-medium">Amount</div>
                            </div>

                            <div className="flex items-center pt-2 pb-2 border-b-2 border-black-500 p-2">
                                <div onClick={itemUpload} className="flex w-16 h-6 border-2 border-gray-300 justify-between items-center">
                                    <span>
                                    <input id="itemId" type="file" className="hidden"/>
                                    </span>
                                    <span>
                                    <img src={UploadIcon} alt="icon" className="w-3 h-2.5 mr-2"/>
                                    </span>
                                </div>
                                <div onClick={expenseUpload} className="flex m-2 w-40 h-6 border-2 border-gray-300 justify-between items-center">
                                    <span>
                                    <input id="expenseId" type="file" className="hidden"/>
                                    </span>
                                    <span>
                                    <img src={UploadIcon} alt="icon" className="w-3 h-2.5 mr-2"/>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                    <input id="itemId" type="text" className="m-2 w-24 h-6 border-2 border-gray-300"/>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                    <input id="itemId" type="number" placeholder="1" className="m-2 w-12 h-6 border-2 border-gray-300"/>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                    <input id="itemId" type="number" placeholder="0" className="m-2 w-16 h-6 border-2 border-gray-300"/>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                    <input id="itemId" type="number" className="m-2 w-14 h-6 border-2 border-gray-300"/>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                    <input id="itemId" type="number" className="m-2 w-14 h-6 border-2 border-gray-300"/>
                                    </span>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                     <p className="m-0">N0.00</p>
                                     <img src={BinIcon} alt="icon" className="w-3 h-3 ml-3"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-right items-center">
                                    <p>Subtotal:<span className="pl-2">N0.00</span></p>
                                </div>
                                <div className="text-right items-center">
                                    <p>Total (NGN):<span className="pl-2">N0.00</span></p>
                                </div>
                            </div>
                        </div>
                    <div className="py-3 w-11/12 box-content text-right sm:px-6">
                        <button type="submit" className="inline-flex mr-4 justify-center py-2 px-8 border border-gray border-solid shadow-sm text-sm font-medium rounded-md text-gray bg-white-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
                        <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                    </div>
                </form>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default AddBill