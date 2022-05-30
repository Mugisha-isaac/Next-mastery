import { useState,useRef } from "react";
import { fetcher } from '../../../utils/fetcher';

const Signup = ()=>{
    
const emailRef = useRef();
const usernameRef = useRef();
const passwordRef = useRef();

    const onSubmit = async()=>{
        e.preventDefault();
        try{
          const response = await fetcher('/api/users',{
              method:'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  email:emailRef.current.value,
                  username:usernameRef.current.value,
                  password:passwordRef.current.value
              })
          });

          console.log("response: ", response);
        }
        catch(err){
            throw new Error('Error: ', err);
        }
    }



    return (
        <div className="m-auto bg-blue-700 grid place-items-center marker:h-40">
            <div className="bg-white w-2/5 m-auto h-[35rem] mt-[12rem] text-center rounded-sm drop-shadow-lg">
            <form action="">
               <p className="text-[1.5rem] font-bold py-8">Create account</p>
               <div className="mt-[3rem] ">
                   <input type='text' ref={emailRef} name="email" placeholder="Email" className=" py-3 px-8 border-2 border-gray-200 rounded-lg w-96 text-xl focus:outline-none focus:border-blue-700" />
                   <input type='text' ref={usernameRef} autoComplete="username" name="username" placeholder="Username" className=" py-3 px-8 border-2 border-gray-200 rounded-lg w-96 text-xl focus:outline-none focus:border-blue-700 mt-8" />    
                   <input type='password' ref={passwordRef} placeholder="Password" className=" py-3 px-8 border-2 border-gray-200 rounded-lg w-96 text-xl focus:outline-none focus:border-blue-700 mt-8" />
                   <input type='submit' value='Submit'  className=" py-3 px-8 bg-blue-700 w-96 text-white font-bold text-xl capitalize mt-8 rounded-lg cursor-pointer" />
               </div>
            </form>    
            </div>
            
        </div>
    )
}

export default Signup;   