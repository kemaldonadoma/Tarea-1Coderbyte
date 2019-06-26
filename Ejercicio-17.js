function VowelSquare(strArr) { 
	for(var i=0;i<strArr.length;i++){
		for(var j=0;j<strArr[i].length;j++){
			if(strArr[i][j+1]!==undefined && strArr[i+1]!==undefined){
				if(
					strArr[i][j].match(/[aeiou]/g) &&
					strArr[i][j+1].match(/[aeiou]/g) &&
					strArr[i+1][j].match(/[aeiou]/g) &&
					strArr[i+1][j+1].match(/[aeiou]/g)
				){
					return i+'-'+j
				}
			}
		}
	}
	return 'not found'
}
   
// keep this function call here 
VowelSquare(readline());