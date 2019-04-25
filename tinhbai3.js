function tinhbai3(){
    let R=document.getElementById("bankinh")
    let S=document.getElementById("dientich")
    dientich = parseInt(parseFloat(bankinh.value)*parseFloat(bankinh.value)*3.14);
    S.innerHTML= dientich.toFixed(2) +" "+"(Đơn vị diện tích)"

}