import CardItem from "./CardItem";
import ExpenseHeader from "./ExpenseHeader";

export default function ExpenseList({
  expenseList,
  deleteItemHandler,
  editItemHandler,
}) {
  return (
    <div className="border rounded-md">
      {/* <!-- Header --> */}
      <ExpenseHeader />
      <div className="p-4 divide-y">
        {/* <!-- Expense Row 1 --> */}

        {expenseList.map((item) => {
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
