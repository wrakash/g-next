import { Experience } from "@/components";
import {Carousel} from "@/components/Carousel";
import { get } from "@/services";



export default async function Home() {
  const myDataQ = await get('https://prod-be.guarented.com/get-site-settings?prop_name=rent_site')
  return (
    <main className="w-full h-full">
       <Carousel images={myDataQ.data.banner_images_dsk}/>
       <Experience/>
       <Carousel images={myDataQ.data.banner_images_dsk}/>
    </main>
  );
} 
