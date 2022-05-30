import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div className='bg-blue-700 h-[61.5rem]'>
       <Component {...pageProps} />
    </div>
  )
}

export default MyApp
