
	 ( function(){
	 //проверка наличия метода с данным именем в нативном JavaScript
		if(typeof(String.prototype.code) !== 'function'){
		String.prototype.code  = function(){
		var beginStr = this;
		var str = '';
			for(var i= 0; i < beginStr.length-1; i++){
				str += beginStr[i].charCodeAt();
				
			}
			return str;
		}
	 } else {console.log('Имя данной фуекции реализованно в нативном JavaScript')}
	 })()
	  