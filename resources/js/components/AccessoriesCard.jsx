import Tumbler from "@images/tumbler-wood.jpg";
import RegularTumbler from "@images/tumbler.png"
import Mugs from "@images/mug.png"
export default function AccessoriesCard() {
    return (
        <div className="flex flex-row flex-wrap gap-10">
            <div className="flex flex-col">
                <img src={Tumbler} alt="Accessories" className="h-50"/>
                <div>
                    <h1 className="font-semibold text-[16px]">UM Wooden<br/>Tumbler</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <img src={RegularTumbler} alt="Accessories" className="h-50"/>
                <div>
                    <h1 className="font-semibold text-[16px]">UM Regular<br/>Tumbler</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <img src={RegularTumbler} alt="Accessories" className="h-50"/>
                <div>
                    <h1 className="font-semibold text-[16px]">UM Regular<br/>Tumbler</h1>
                </div>
            </div>
        </div>
    );
}