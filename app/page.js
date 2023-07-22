import Header from './Components/Header'
import Footer from './Components/Footer'
import MainContent from './Components/MainContent'

export default function Home() {
  return (
    <div className=' bg-[#1C1C1C] h-screen text-center'>
      <div className='max-w-lg m-auto bg-[#23252C] py-5'>
        <div className='max-w-xs bg-[#1A1B21] mx-auto rounded-xl'>
          <Header/>
          <MainContent/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
