import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div>
        <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div><Image src={assets.user_image} alt='' className="w-32"/></div>
            
        
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">Hi, I'm Chloe 
                <Image src={assets.hand_icon} alt='' className="rounded-full w-6"/></h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        a full-stack development student based in Vancouver.</h1>
          <p className="max-w-3xl mx-auto font-Ovo">I enjoy building practical applications that solve real problems with clean, maintainable code.
                        
                        I'm always looking to improve, learn new tools, and work on projects that make a difference.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a href="#contact" 
            className="px-10 py-3 border border-white rounded-full flex bg-black text-white items-center gap-2">
              contact me <Image src={assets.right_arrow_white} alt='' className="w-4"/></a>
            <a href="/Chloe_Kwon_resume.pdf" download 
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
              my resume <Image src={assets.download_icon} alt='' className="w-4"/></a>
          </div>
          </div>
        
    </div>
  )
}

export default Header 