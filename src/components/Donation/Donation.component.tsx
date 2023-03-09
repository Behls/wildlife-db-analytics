import donation from "../../assets/donationpot.svg";

function Donation(){

    return(
        <div className="relative w-60 h-24 overflow-hidden rounded-md bg-lightGreen flex flex-row justify-center drop-shadow-lg">
            
            <div className="w-2/3 h-full flex flex-col justify-center ml-4">
                <p className="text-donation font-semibold text-sm leading-snug">Make a charitable</p>
                <p className="text-darkBlue font-extrabold text-lg leading-snug">Donation</p>
            </div>
            <div className="w-1/3 h-full overflow-hidden flex flex-col justify-center items-center">
                <img src={donation} className="h-72 w-72"/>
            </div>
        </div>
    )
}

export default Donation;