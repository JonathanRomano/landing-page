import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body{
          background-color: black;
        }
      `}
      </style>
    </>
  )
}

export default MyApp
