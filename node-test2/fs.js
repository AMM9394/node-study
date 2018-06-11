var fs = require('fs');
var data;

//同步读取
//try{
//	data = fs.readFileSync('./fileForRead.txt','utf-8');
//	console.log('fileForRead文件的内容是：\n',data);
//}catch(error){
//	console.error(error);
//}

//异步读取
fs.readFile('./fileForRead.txt','utf-8',function(error,data){
	if(error){
		return console.error(error);
	}
	console.log('fileForRead文件的内容是：\n',data);
});