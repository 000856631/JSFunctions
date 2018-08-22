import forEachObject from '../lib/forEachObject.js'
var obj = {
	a:1,
	b:2
}
forEachObject(obj,(k,v) => console.log( k + ":" + v))