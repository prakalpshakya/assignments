function sortArray() {
  let originalArray

  this.setArray = function () {
    const arr = prompt('Input Array').split(',')
    this.originalArray = arr
  }

  const sortArr = function ([...arr]) {
    const sortedArray = arr.sort()
    return sortedArray
  }

  this.getSortedArray = function () {
    return sortArr(this.originalArray)
  }
}

const arr = new sortArray()
arr.setArray()
const sortedArray = arr.getSortedArray()
