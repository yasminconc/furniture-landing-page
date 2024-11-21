import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <div className='flex flex-col h-[1440px] w-full bg-slate-600'>
      <Header />
      <div className=" flex h-full w-full bg-contain bg-top bg-[url('/src/assets/homeBackground.svg')] bg-no-repeat">

      </div>

       

    </div>

  )
}

export default Home


{/* <div className='relative h-screen w-full  bg-slate-800 '>
        <Header/>
        <div className=' bg-black '>
            <img className='w-full h-scrren ' src={homeBackground} alt="Home Background"/>

            <div>
              <h1 className='bg-white h-64 w-full'>GHDUEBDUEBDUH</h1>
            </div>
        </div>
    </div> */}


//<div className="relative h-screen w-full">
{/* <img className="absolute inset-0 w-full h-full object-cover" src={homeBackground} alt="Home Background" />
      
<div className="relative z-10">
  <Header />
</div>

<div className="relative z-10 flex justify-center items-center h-full">
  {/* Conteúdo adicional sobre a imagem, se necessário */}
// </div>
// </div> */}