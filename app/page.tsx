import MainNav from "@/components/MainNav";
import Part1 from "@/components/Part1";
import Part2 from "@/components/Part2";
import Part3 from "@/components/Part3";
import Testimonials from "@/components/Testimonials";
import  { StaticImageData } from "next/image";
import Last_start from "@/components/last_start";
import Socialmedia from "@/components/Socialmedia";
import Footer from "@/components/Footer";
import Questions from "@/components/Questions";
import Dealer from "@/components/Dealer";

import c from '@/public/Dealer/c.jpg'
import c1 from '@/public/Dealer/c1.jpg'
import c2 from '@/public/Dealer/c2.jpg'
import c3 from '@/public/Dealer/c3.jpg'
import c4 from '@/public/Dealer/c4.jpg'

const data: { image: StaticImageData }[] = [
      { image: c},
      { image: c1},
      { image: c2 },
      { image: c3 },
      { image: c4 },
      { image: c },
      
    ];
export default function Home() {
  return (
    <div>
    
      <MainNav/>

      <Part1/>
       <Part2/>
      <Part3/>
      <Testimonials/> 
      <Socialmedia/>
      <div className="container mx-auto">
            <Dealer images={data} />
      </div>

      <Questions/>
      <Last_start/>
      <Footer/>

    </div>
  );
}
