import React from 'react';
import {  toast } from 'react-toastify';


export const toastSuccess=(text)=>{
    
    toast.success(text , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "Dark",
        });

}
    export const toastError = (text) => {
        toast.error(text, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      


