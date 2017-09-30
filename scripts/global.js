function change(str) {
var id=document.getElementById('content');
//alert(str);
var st='<iframe src="views/'+str+'.html"></iframe>';
//alert(st);
id.innerHTML=st;

}