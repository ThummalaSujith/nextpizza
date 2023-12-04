import Image from 'next/image'
import Right from '../icons/Right'


export default function Hero(){
    return(
        <section className="hero py-16 mt-4" >

            <div className="py-16 px-8 pl-24">
            <h1 className="text-4xl  font-bold">The door is always <br/>open to <span className="text-primary">pizza lovers!</span></h1>
            <p className="my-4 text-gray-500 text-semibold py-3 font-semibold">Indulge in pizza perfection at NJ Pizza. Elevate your day with the missing piece that completes every moment – a mouthwatering slice of joy!</p>
           
           <div  className="flex gap-4">
            <button className="bg-primary flex gap-2 items-center text-white px-4 py-2 rounded-full text-sm">ORDER NOW
        <Right/>
            </button>
                <button className="flex gap-2 py-2 text-gray-800 font-bold items-center text-sm">
                    LEARN MORE
                   <Right/>
                   </button>
                </div>
            </div>

            
               
          
            
            <div className="relative ">
            <Image src={'/pizza.png'} layout={'fill'} objectFit='contain' alt="pizza" />
            </div>
          
        </section>
    )
}