

const Bullet = ({ text }) => {


    return (
        <div>
            <div className="flex items-center py-2">
                <div className="bg-green-400 w-[12px] h-[12px] mr-2 rounded-md"></div>
                
                <div className="text-gray-600 text-lg">{text}</div>
            </div>
        </div>
    )
}
export default Bullet