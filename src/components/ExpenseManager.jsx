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

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Submission Form --> */}
        <InputForm handleAddItem={addNewItemHandler} />

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
            />
            {/* <!-- Expense --> */}
            <ExpenseList
              expenseList={listData.expense}
              deleteItemHandler={deleteItemHandler}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
