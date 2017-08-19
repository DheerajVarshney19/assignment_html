var arr = ["John","Yaakov","Divya","Dheeraj"];

for(var i=0;i<arr.length;i++){
	if(arr[i][0]=="J"||arr[i][0]=="j"){
		console.log("Goodbye "+arr[i]);
	}
	else console.log("Hello "+arr[i]);
}