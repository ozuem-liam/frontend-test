import React from 'react'
import { Row, Col } from 'antd'
import signUpImage from '../../assets/Group968.png'

function SignUp() {

    function load() {
        window.location.href = "/add-bill";
    }

  return (
    <>
      <Row>
        <Col span={12}>
            <img src={signUpImage} alt="signup" />
        </Col>
        <Col span={12}>
        <div className="mt-10 sm:mt-0">
                <div className="w-11/12 py-3 p-4 ml-3 mt-3 mt-6">
                    <h1 className="m-0 mt-3 text-lg font-bold">Create Account</h1>
                    <p>Build an exceptional business</p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label for="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label for="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6">
                            <label for="street-address" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6">
                            <label for="street-address" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6">
                            <label for="street-address" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6">   
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-6">
                            <button onClick={load} type="button" className="justify-center w-full h-12 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </Col>
      </Row>
    </>
  )
}

export default SignUp
