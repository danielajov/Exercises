function newArrayWithoutStrings (filterArray) {

    filterArray = filterArray.filter(filterArray => typeof filterArray !== "string");
    console.log(filterArray);
    return filterArray;
}
newArrayWithoutStrings([1, 6, "y"]);
newArrayWithoutStrings([1, 2, 3, 4,"y", "a", "b","c"]);