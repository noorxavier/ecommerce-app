import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { backendUrl } from '../../../admin/src/App'
import {toast } from 'react-toastify'

import axios from 'axios'
const Verify = () => {

    const {token,setCartItems }= useContext(ShopContext)
    const navigate = useNavigate();
    const [searchParam] = useSearchParams()

    const success = searchParam.get('success')
    const orderId = searchParam.get('orderId')

    const verifyPayment = async () =>{
        try {
            if (!token) {
                return null
            }

            const response = await axios.post(backendUrl+ '/api/order/verifyStripe',{success,orderId},{headers:{token}})

            if(response.data.success){
                setCartItems({})
                navigate('/orders')
            }else{
                navigate('/cart')
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[token])
  return (
    <div>
      
    </div>
  )
}

export default Verify
