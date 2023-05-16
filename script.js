// complete the given function

function palindrome(str){
	let n = str.length;
	if(n === 1) return true;
	for(let i = 0; i < n/2; i++){
		if(str[i] !== str[n-1-i])
			return false;
	}
}
module.exports = palindrome
