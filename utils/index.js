export const chunkArray = (array = [], chunkSize = 1) => {
  const chunked_array = []
  let index = 0
  while (index < array.length) {
    chunked_array.push(array.slice(index, chunkSize + index))
    index += chunkSize
  }

  return chunked_array
}

export const fakeArray = (length = 1) => {
	let arr = new Array(length);
	let returnedArr = [];
	for(let i = 0; i < arr.length; i++){
		returnedArr.push(i);
	}

	return returnedArr;
}
