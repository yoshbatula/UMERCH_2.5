import Tumbler from "@images/tumbler-wood.jpg";
import RegularTumbler from "@images/tumbler.png"
import Mugs from "@images/mug.png"
import Notebooks from "@images/notebook.png"
export default function AccessoriesCard() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row flex-wrap gap-6">
                    <div className="flex flex-col">
                    <img src={Tumbler} alt="Accessories" className="h-80"/>
                    <div className="mt-2">
                        <h1 className="font-semibold text-[16px]">UM Wooden<br/>Tumbler</h1>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src={RegularTumbler} alt="Accessories" className="h-80"/>
                    <div className="mt-2">
                        <h1 className="font-semibold text-[16px]">UM Regular<br/>Tumbler</h1>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src={Mugs} alt="Accessories" className="h-80"/>
                    <div className="mt-2">
                        <h1 className="font-semibold text-[16px]">UM Mug | Wildcats</h1>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src={Notebooks} alt="Accessories" className="h-80"/>
                    <div className="mt-2">
                        <h1 className="font-semibold text-[16px]">UM Notebook</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center p-10">
                <div className="bg-[#9C0306] flex justify-center items-center w-60 h-10 rounded-[20px] hover:cursor-pointer">
                    <button className="text-white text-[16px] font-semibold hover:cursor-pointer">SEE MORE ACCESSORIES</button>
                </div>
            </div>
        </div>    
    );
}