import CardItem from "./CardItem";
import IncomeHeader from "./IncomeHeader";

export default function IncomeList({
  incomeList,
  deleteItemHandler,
  editItemHandler,
}) {
  return (
    <div className="border rounded-md relative">
      {/* <!-- Header --> */}
      <IncomeHeader />

      <div className="p-4 divide-y">
        {/* <!-- Row --> */}

        {incomeList.map((item) => {
          return (
            <CardItem
              key={item.id}
              item={item}
              deleteItemHandler={deleteItemHandler}
              editItemHandler={editItemHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
