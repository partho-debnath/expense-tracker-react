import { useState } from "react";
import FilterIcon from "./Icons/FilterIcon";
import SortingDropDown from "./SortingDropDown";
import updateFilters from "../utils/utils";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
      <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
    </svg>
  );
}

function IncomeFilteringDropDown({
  filterVisibleState,
  handelDropDown,
  categories,
  applyFilters,
}) {
  const [filtersState, setFiltersState] = useState([]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => {
            if (!filterVisibleState.filterDropDownIsVisible === false) {
              setFiltersState([]);
            }
            handelDropDown({
              filterDropDownIsVisible:
                !filterVisibleState.filterDropDownIsVisible,
              sortingDropDownIsVisible: false,
            });
          }}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="filter-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <FilterIcon />
        </button>
      </div>

      {filterVisibleState.filterDropDownIsVisible && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          id="filter-dropdown"
        >
          <div className="py-1" role="none">
            {categories.map((item) => {
              return (
                <label
                  key={item}
                  className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
                >
                  <input
                    onClick={(e) => {
                      let newFilterList = updateFilters(
                        e.target.checked,
                        item,
                        filtersState
                      );
                      setFiltersState([...newFilterList]);
                      applyFilters("income", newFilterList);
                    }}
                    type="checkbox"
                    className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                    id="filter-option-1"
                  />
                  <span className="ml-2">{item}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function IncomeHeader({
  sortByAmount,
  categories,
  applyFilters,
}) {
  const [filterVisibleState, setFilterVisibleState] = useState({
    sortingDropDownIsVisible: false,
    filterDropDownIsVisible: false,
  });
  function handelDropDown(visibleState) {
    setFilterVisibleState({
      ...visibleState,
    });
  }
  return (
    <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
      <div className="flex items-center gap-2">
        {/* <!-- Icon --> */}
        <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
          <Icon />
        </div>
        {/* <!-- Text --> */}
        <div>
          <h3 className="text-xl font-semibold leading-7 text-gray-800">
            Income
          </h3>
        </div>
      </div>
      <div>
        {/* <!-- Sorting --> */}
        <SortingDropDown
          stateType={"income"}
          filterVisibleState={filterVisibleState}
          handelDropDown={handelDropDown}
          sortByAmount={sortByAmount}
        />

        {/* <!-- Filtering --> */}
        <IncomeFilteringDropDown
          filterVisibleState={filterVisibleState}
          handelDropDown={handelDropDown}
          categories={categories}
          applyFilters={applyFilters}
        />
      </div>
    </div>
  );
}
