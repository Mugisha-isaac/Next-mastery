

const Signup = ()=>{
    return (
        <div className="m-auto bg-blue-700 grid place-items-center marker:h-40">
            <div className="bg-white w-2/5 m-auto h-[35rem] mt-[12rem] text-center rounded-sm drop-shadow-lg">
               <p className="text-[1.5rem] font-bold py-8">Create account</p>
               <div className="mt-[3rem] ">
                   <input type='text' name="email" placeholder="Email" className=" py-3 px-8 border-2 border-gray-200 rounded-lg w-96 text-xl focus:outline-none focus:border-blue-700   " />
                   <input type='text' name="username" placeholder="Username" className=" py-3 px-8 border-2 border-gray-200 rounded-lg w-96 text-xl focus:outline-none focus:border-blue-700 mt-8" />    
                   <input type='password' placeholder="Password" className=" py-3 px-8 border-2 border-gray-200 rounded-lg w-96 text-xl focus:outline-none focus:border-blue-700 mt-8" />
                   <input type='button'  className=" py-3 px-8 bg-blue-700 w-96 text-white font-bold text-xl capitalize mt-8 rounded-lg cursor-pointer" />
               </div>
            </div>
            
        </div>
    )
}

export default Signup;   