import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";

export default function CardItem({ item, deleteItemHandler, editItemHandler }) {
  return (
    <div className="flex justify-between items-center py-2 relative group cursor-pointer">
      <div>
        <h3 className="text-base font-medium leading-7 text-gray-600">
          {item.category}
        </h3>
        <p className="text-xs text-gray-600">{item.date}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
          BDT {item.amount}
        </p>

        {/* <!-- 3 Dots --> */}
        <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
          <button
            onClick={() => {
              editItemHandler(item);
            }}
            className="hover:text-teal-600"
            role="button"
            title="Edit Button"
          >
            <EditIcon />
          </button>

          <button
            onClick={() => {
              deleteItemHandler(item);
            }}
            className="hover:text-red-600"
            role="button"
            title="Delete"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
