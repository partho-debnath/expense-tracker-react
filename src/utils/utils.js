export default function updateFilters(isChecked, value, filterList){
    if (isChecked){
        return [...filterList, value];
    }
    else{
        let newFilterList = filterList.filter((item)=>item !== value);
        return newFilterList;
    }
}