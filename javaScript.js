function factorial(x){
    if (x==0 || x==1) return 1;
    else return(x*factorial(x-1));
}

function my (b,callback)
{
	if (b<=10) b=factorial(b);
	callback(alert(b));
}