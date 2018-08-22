const sortBy = (property) =>{
	const compareFun = (a,b) =>{
		var result = (a[property]<b[property])? -1 :(a[property]>b[property])? 1:0;
		return result
	}
	return compareFun;
}
export default sortBy;
