// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
function finder(item){
    return item.result ==="W"
}
function superbowlWin(thing){
    if (thing.find(finder))
    return thing.find(finder).year
}

