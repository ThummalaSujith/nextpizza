import Image from 'next/image'
import Menuitem from '../menu/Menuitem'
import SectionHeader from './SectionHeaders'

export default function HomeMenu() {
    return (
        <section className="">
            <div className="h-48 w-48 absolute top-1/2 -left-12 ">
                <Image src={'/sallad1.png'} layout={'fill'} objectFit='contain' alt={'salad'} />

            </div>
            <div className="h-48 w-48 absolute top-44
             -right-12">
                <Image src={'/sallad2.png'} layout={'fill'} objectFit='contain' alt={'salad'} />

            </div>
            <div className="h-48 w-48 absolute top-1/2 -right-6">
                <Image src={'/tomato-png.png'} layout={'fill'} objectFit='contain' alt={'salad'} />

            </div>
            <div className="text-center mb-24 ">
                <SectionHeader subHeader={'check out'} mainHeader={'Menu'}/>
            </div>
        <div className="grid grid-cols-3 gap-4 mt-50 max-w-4xl mx-auto p-4 ">
           <Menuitem/>
           <Menuitem/>
           <Menuitem/>
           <Menuitem/>
           <Menuitem/>
           <Menuitem/>
           </div>
           

        </section>


    )
}