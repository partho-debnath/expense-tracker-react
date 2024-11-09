import { useState } from "react";
import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList";
import InputForm from "./InputForm";
import Summary from "./Summary";

export default function ExpenseManager() {
  const initialData = {
    income: [
      // {
      //   id: crypto.randomUUID(),
      //   stateType: "income",
      //   category: "Salary",
      //   amount: "1234",
      //   date: "",
      // },
    ],
    expense: [
      // {
      //   id: crypto.randomUUID(),
      //   stateType: "expense",
      //   category: "",
      //   amount: "",
      //   date: "",
      // },
    ],
  };

  const [listData, setListData] = useState(initialData);
  const [editData, setEditData] = useState(null);

  function addNewItemHandler(item) {
    setListData({
      ...listData,
      [item.stateType]: [item, ...listData[item.stateType]],
    });
  }

  function deleteItemHandler(item) {
    const newDataList = listData[item.stateType].filter(
      (a) => a.id !== item.id
    );

    setListData({
      ...listData,
      [item.stateType]: newDataList,
    });
  }

  function editItemHandler(item) {
    setEditData({ ...item });
  }

  function saveEditItemHandler(updatedItem) {
    setEditData(null);
    let index = listData[updatedItem.stateType].findIndex(
      (item) => item.id === updatedItem.id
    );
    listData[updatedItem.stateType][index] = updatedItem;

    setListData({
      ...listData,
    });
  }

  function sortByAmount(stateType, orderBy) {
    let sortedList = [];
    if (orderBy === "ASCENDING") {
      sortedList = listData[stateType].sort(function (item1, item2) {
        return item1.amount - item2.amount;
      });
    } else {
      sortedList = listData[stateType].sort(function (item1, item2) {
        return item2.amount - item1.amount;
      });
    }

    setListData({
      ...listData,
      [stateType]: sortedList,
    });
  }

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Submission Form --> */}
        <InputForm
          key={editData?.id}
          handleAddItem={addNewItemHandler}
          editData={editData}
          saveEditItemHandler={saveEditItemHandler}
        />

        {/* <!-- Right Column --> */}
        <div className="lg:col-span-2">
          {/* <!-- Total Balance Stat--> */}
          <Summary listData={listData} />
          {/* <!-- List Down --> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {/* <!-- Income --> */}
            <IncomeList
              incomeList={listData.income}
              deleteItemHandler={deleteItemHandler}
              editItemHandler={editItemHandler}
              sortByAmount={sortByAmount}
            />
            {/* <!-- Expense --> */}
            <ExpenseList
              expenseList={listData.expense}
              deleteItemHandler={deleteItemHandler}
              editItemHandler={editItemHandler}
              sortByAmount={sortByAmount}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
