import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/smallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Home = ({exploreData }) => {

  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeStart", ()=>{setProgress(40)})
    router.events.on("routeChangeComplete", ()=>{setProgress(100)})
    router.events.on("routeChangeError", ()=>{setProgress(100)})
  }, [router.query])
  

 const cardData = [
    { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720', title: 'Outdoor getaways' },

    { img: 'https://a0.muscache.com/im/pictures/monet/Luxury-602690453390608880/original/7d13b8b5-b1b4-4b51-9b60-71eb6b1664da?im_w=720', title: 'Unique stays' },

    { img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', title: 'Entire homes' },

    { img: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', title: 'Pet allowed' }
  ]

  console.log(cardData)
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       <Header/>
       <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
       <Banner/>

       <main className='max-w-7xl mx-auto px-8 sm:px-16'>
         <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'>Explore Nearly</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map((item) =>(
              <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location}/>
            ))}
              </div>
         </section>

          <section>
              <h2 className='text-4xl font-semibold py-6'>Live AnyWhere</h2>
              <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {cardData.map((item) => (
                <MediumCard key={item.img} img={item.img} title={item.title}/>
              ))}
              </div>
          </section>

          <LargeCard 
            img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />

       </main>
       <Footer/>
    </div>
  )
}


export async function getStaticProps(){
   const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res)=>res.json())

   return {
    props:{
      exploreData
    }
   }
}


export default Home
