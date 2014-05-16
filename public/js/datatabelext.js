$.fn.dataTableExt.oApi.fnAddTr= function(oSettings,nTr,bRedraw) {
if( typeof bRedraw=='undefined') {
bRedraw=true;
}
var nTds=nTr.getElementsByTagName('td');
//alert(nTds2.length);
//var $nTds=$(nTr).children('td');
if(nTds.length!=oSettings.aoColumns.length) {
//alert('Warning: not adding new TR - columns and TD elements must match');
alert("浏览器出现兼容错误，请联系开发商");
//alert($nTds.length);
return;
}


var aData=[];
var aInvisible=[];
for(var i=0;i<nTds.length;i++) {
aData.push(nTds[i].innerHTML);
//alert(nTds[i].innerHTML);
//alert($nTds[i].html());
if(!oSettings.aoColumns[i].bVisible) {
aInvisible.push(i);
}
}
/* Add the data and then replace DataTable's generated TR with ours */
var iIndex=this.oApi._fnAddData(oSettings,aData);
nTr._DT_RowIndex=iIndex;
oSettings.aoData[iIndex].nTr=nTr;
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();
// Hidding invisible columns
for(var i=(aInvisible.length-1);i>=0;i--) {
oSettings.aoData[iIndex]._anHidden[i]=nTds[aInvisible[i]];
 nTr.removeChild(nTds[aInvisible[i]]);
}
// Redraw
if(bRedraw) {
  this.oApi._fnReDraw(oSettings);
}
};