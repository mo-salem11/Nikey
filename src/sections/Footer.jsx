import { copyrightSign } from "../assets/icons";
import {footerLogo} from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start max-lg:flex-col gap-20 flex-wrap ">
           <div className="flex flex-col items-start">
              <a href="#">
                <img 
                src={footerLogo} 
                alt="" 
                width={150}
                height={46}
                />
              </a>
              <p className="text-base mt-6 leading-7 font-montserrat
              text-white-400 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci ullam sint non corrupti. Odio nisi voluptas optio modi explicabo perferendis at consequuntur natus!</p>
              <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((icon) =>(
              <div  className="flex justify-center items-center w-12 h-12 bg-white  rounded-full">
                <img 
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                  />
              </div> 
            ))};
           </div>
           </div>
           
           <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section)=>(
              <div key={section}>
                <h4 className="text-white font-montserrat 
                text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li className="mt-3 text-white-400 
                    text-base leading-normal cursor-pointer font-montserrat"   key={link.name}>
                    
                     <a className="text-white">{link.name}</a>
                    </li>
                  ))};
                </ul>
              </div>
            ))};
           </div>
      </div>
      <div className="flex justify-between text-white-400 
      mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-start
         gap-2 font-montserrat cursor-pointer">
             <img src={copyrightSign} alt="copy right sign"
             width={20} height={20}
             className="rounded-full m-0"  />
             <p>Copyright, All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer