

export const fetcher = (...args)=>{
   return fetch(...args).then(async(res)=>{
       let payload;
       try{
           if(res.status ===204) return null;
           payload = await res.json();
       }
       catch(e){
           throw new Error('Error: ', e.message());
       }
   })
   .catch((err)=>{
       throw new Error('Error: ', err.message());
   })
}