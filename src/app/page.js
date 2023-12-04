import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/pizza-logo.png"

import Hero from './components/layout/Hero'
import HomeMenu from './components/layout/HomeMenu'
import SectionHeader from './components/layout/SectionHeaders'



export default function Home() {
  return (
    <>
  
   
   <Hero/>

   <HomeMenu/>
   
   
   <section className="text-center my-16">
<SectionHeader 
subHeader={'Our story'}
mainHeader={'About us'}

/>
<div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4 ">

<p  >
  jfskdfjhffjdsfhhdhjskfkjfhfjksfhiieorjejdsjdsbahjjds
</p>

<p>
  jfskdfjhffjdsfhhdhjskfkjfhfjksfhiieorjejdsjdsbahjjds
</p>
</div>

    
   </section>

   <section className="text-center my-16">
    <SectionHeader subHeader={'Don\'t hesitate'}
                   mainHeader={'Contact us'} 
    />

    <div className="mt-8">

      <a className="text-4xl" href="tel:+8899889988" >
      +8899889988
      </a>

    </div>
   </section>

 
   

    </>
  )
}
