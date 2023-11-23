function containsDuplicates(array) {
  const countMap = new Map();
  
	array.forEach((value) => {
	  if (!countMap.has(value)) {
	    countMap.set(value, 1);
	    return;
	  }
	  
	  const currentCount = countMap.get(value);
	  countMap.set(value, currentCount + 1);
	});
	
	for (const value of array) {
	  if (countMap.get(value) > 1) {
	    return true
	  }
	}
	
	return false;
}