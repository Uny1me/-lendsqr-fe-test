import Icon from "components/Icon";
import nextIcon from "assets/icons/next-btn.svg";
import prevIcon from "assets/icons/prev-btn.svg";
type Props = {
  paginateUserData: any;
  sliceArray: { indexed: number; firstIndex: number; lastIndex: number };
  setSliceArray: any;
};

const Pagination = ({ paginateUserData, sliceArray, setSliceArray }: Props) => {
  return (
    <div className="flex ">
      <button
        onClick={() => {
          if (sliceArray.indexed < 2) {
            return null;
          }
          paginateUserData(sliceArray.indexed - 1);
        }}
      >
        <Icon icon={prevIcon} />
      </button>
      {/* <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 " --> */}
      <button
        aria-current="page"
        className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-medium text-primary focus:z-20"
        onClick={() => paginateUserData(1)}
      >
        1
      </button>
      <button
        //   aria-current="page"
        className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-medium text-primary focus:z-20 cursor-pointer"
        onClick={() => paginateUserData(2)}
      >
        2
      </button>

      <button
        //   aria-current="page"
        className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-medium text-primary focus:z-20 cursor-pointer"
        onClick={() => paginateUserData(3)}
      >
        3
      </button>
      <span className="relative inline-flex items-center text-secondary px-4 py-2 text-sm font-medium text-gray-700">
        ...
      </span>
      <button
        //   aria-current="page"
        className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-medium text-primary focus:z-20 cursor-pointer"
        onClick={() => paginateUserData(8)}
      >
        8
      </button>
      <button
        //   aria-current="page"
        className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-medium text-primary focus:z-20 cursor-pointer"
        onClick={() => paginateUserData(9)}
      >
        9
      </button>
      <button
        //   aria-current="page"
        className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-medium text-primary focus:z-20 cursor-pointer"
        onClick={() => paginateUserData(10)}
      >
        10
      </button>
      <button
        onClick={() => {
          if (sliceArray.indexed > 10) {
            return null;
          }
          paginateUserData(sliceArray.indexed + 1);
        }}
      >
        <Icon icon={nextIcon} />
      </button>
    </div>
  );
};

export default Pagination;
