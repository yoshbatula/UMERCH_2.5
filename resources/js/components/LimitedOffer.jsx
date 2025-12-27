import LimitedOfferImage from '@images/LimitedOffer.png';
export default function LimitedOffer() {
    return (
        <div className="bg-[#F6F6F6] flex flex-col p-15">
           <div>
                <img src={LimitedOfferImage} alt="Limited Offer" className='object-cover w-full h-[360px]'/>
           </div>
        </div>
    );
}