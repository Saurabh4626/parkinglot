function disp(a){
	return function b{
		return a+b;
};}
var as=(disp(10));
document.write(as(20));
