import React, { useState } from 'react'
import Form from '../../components/shared/Form/Form'
import {useSelector} from 'react-redux'
import {DNA} from 'react-loader-spinner'
import toast from 'react-hot-toast'

const Login = () => {
  const {loading,error} = useSelector(state => state.auth)
  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      <div className='row hide_scroll'>
      <section className="vh-100">
        <div className="container-fluid">
                <div className="row">
                <div className="col-sm-4 text-black">
              <div className="px-5 ms-xl-4">
                  <img src="./assets/logo.png" className='logo-login' alt="Red Gold" />
              </div>
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                {loading ?  (<div className="d-flex w-100 h-100 align-items-center justify-content-center">
                <DNA
                visible={true}
                height="400"
                width="400"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                />
                </div> ):(
                  <Form formTitle={"Log In"} submitBtn={"Login"} formType={'login'} />
                )}
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src="./assets/banner1.jpg" alt="Login image" />
            </div>
            </div>
        </div>
      </section>
        </div>
    </>
  )
}

export default Login