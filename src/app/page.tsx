import Image from "next/image"
import { AiFillInstagram } from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold tracking-tight text-white-800 sm:text-4xl">Cảm ơn bạn đã ghé xem Portfolio của tôi. </h1>
      <Image
        src='/Web_is_building_banner_SVG.svg'
        alt="Web is building"
        width="0"  
        height={0}    
        sizes="100vw"
        style={{ width: '40%', height: 'auto' }}
      />
      <h2 className="text-2xl text-white-500 sm:text-2xl">Tuy nhiên, Website vẫn còn đang trong quá trình hoàn thiện.</h2>
      <p className="flex items-center">
        Thay vào đó bạn có thể vào <a className="flex gap-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700 px-1 py-1 br-10 rounded-md" href="https://www.instagram.com/vinhtage_0_spices/"><AiFillInstagram className="text-2xl"/> Instagram của tôi</a> để xem các sản phẩm của tôi.
      </p>
    </main>
  )
}
