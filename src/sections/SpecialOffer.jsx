import Button from "../components/Button";
import {offer} from "../assets/images";
import {arrowRight} from "../assets/icons";
function SpecialOffer() {
  return (
    <section className="flex flex-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} width={773} height={687}
        className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col ">
       

       <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg '>
        <span className='text-coral-red'>
         Special
        </span> Offer 
       </h2>
       <p className='mt-4 lg:max-w-lg info-text'>
         Ensuring premium comfort and 
         Style, Our meticulously crafted
         footwear is designed to elavate
         your experience, providing you
         with unmatched quality,
         innovation, and a touch of elegence. 
       </p>
       <p className='mt-4 lg:max-w-lg info-text'>
         Ensuring premium comfort and 
         Style, Our meticulously crafted
         footwear is designed to elavate
         your experience, providing you
         with unmatched quality,
         innovation, and a touch of elegence. 
       </p>
       
       <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Shop Now' iconURL={arrowRight} />
          <Button label='Learn more' backgroundColor="bg-white" 
          borderColor="border-slate-gray" text-Color="text-slate-gray" ></Button>
         
       </div>
      </div> 
    </section>
  )
}

export default SpecialOffer