import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Animation= () => {
  return (
    <div className="text-white py-10 gap-3 relative grid justify-items-center">

        <span className="grid border-2 border-white rounded-full px-4 pt-2 pb-6">
          <p className="animate-infinite-translate">|</p>
        </span>

        <span className="">
          <MdOutlineKeyboardDoubleArrowDown className="animate-bounce size-8" />
        </span>

    </div>
  );
};

export default Animation;
