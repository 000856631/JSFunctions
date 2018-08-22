import forEach from '../lib/forEachArray.js'
import unless from '../lib/unless.js'
import times from '../lib/times.js'
import every from '../lib/every.js'
import sortBy from '../lib/sortBy.js'
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var jsonObj = {
	"retcode": 0,
	"retmsg": "",
	"unit": "亿",
	"data": [ {
		"bal_rank_asc": "106935",
		"pro_m": "2000.0",
		"lst_date": "20180430",
		"bor_link": "",
		"comp_ytd_rank_desc": "96355",
		"balOrder": 1,
		"pro_d": "300006.0",
		"id_name": "储蓄存款（日均）",
		"balance": "1.2456E+7",
		"bal_rank": "83655",
		"pro_y": "12100.0",
		"addOrder": 1,
		"index_id": "00002",
		"comp_ytd_rank_asc": "124560",
		"is_bor": "1"
	}, {
		"bal_rank_asc": "1",
		"pro_m": "6580345.9",
		"lst_date": "20180430",
		"bor_link": "",
		"comp_ytd_rank_desc": "1",
		"balOrder": 1,
		"pro_d": "6580345.9",
		"id_name": "金融资产",
		"balance": "6580345.9",
		"bal_rank": "1",
		"pro_y": "-340629500.21",
		"addOrder": 1,
		"index_id": "00003",
		"comp_ytd_rank_asc": "1",
		"is_bor": "0"
	}, {
		"bal_rank_asc": "1",
		"pro_m": "-1301090247330.21",
		"lst_date": "20180430",
		"bor_link": "",
		"comp_ytd_rank_desc": "1",
		"balOrder": 1,
		"pro_d": "-26545137.11",
		"id_name": "个人贷款",
		"balance": "2384572587370.91",
		"bal_rank": "1",
		"pro_y": "-1242303774293.46",
		"addOrder": 1,
		"index_id": "00004",
		"comp_ytd_rank_asc": "1",
		"is_bor": "1"
	}, {
		"bal_rank_asc": "1",
		"pro_m": "700.0",
		"lst_date": "20180430",
		"bor_link": "",
		"comp_ytd_rank_desc": "1",
		"balOrder": 1,
		"pro_y_net_growth": "-12744.0",
		"pro_y_newon": "694.0",
		"id_name": "客户数",
		"balance": "700.0",
		"bal_rank": "1",
		"addOrder": 1,
		"index_id": "00006",
		"comp_ytd_rank_asc": "1",
		"is_bor": "0"
	}, {
		"pro_sy": "13317294171.63",
		"bal_rank_asc": "1",
		"pro_m": "875086729.73",
		"lst_date": "20180430",
		"bor_link": "",
		"balOrder": 1,
		"pro_d": "16866325.54",
		"id_name": "零售中间业务收入",
		"balance": "13317294171.63",
		"bal_rank": "1",
		"addOrder": 1,
		"index_id": "00005",
		"is_bor": "1"
	},{
		"bal_rank_asc": "1",
		"pro_m": "2614228487281.38",
		"lst_date": "20180430",
		"bor_link": "",
		"comp_ytd_rank_desc": "1",
		"balOrder": 1,
		"pro_d": "560543368140.31",
		"id_name": "储蓄存款（时点）",
		"balance": "560496925957.52",
		"bal_rank": "1",
		"pro_y": "2503425697710.91",
		"addOrder": 1,
		"index_id": "00001",
		"comp_ytd_rank_asc": "1",
		"is_bor": "1"
	}]
}
//var jsonObj2 = Object.assign({},jsonObj);
//print the console
//forEach(array,(data) => console.log(data))
//double the contents
//forEach(array,(data) => {
//	unless(data%2,()=>{console.log(data)})
//	
//	
//})
//forEach(array,(data) => console.log(3*data))
//forEach(array,(data) => console.log( 4* data))

//times(100,(data)=>{
//	unless(data%2,()=>{
//		console.log(data + 'is even')
//	})
//})
//console.log(every([NaN, NaN, NaN], isNaN))
var jsonList = jsonObj.data;
console.log(jsonList.sort(sortBy("index_id")));