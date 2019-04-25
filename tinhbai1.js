function Tinhdiemtb()
{
    var x1=document.getElementById('diem1');
    var x2=document.getElementById('diem2');
    var x3=document.getElementById('diem3');
    var TB=document.getElementById('Trungbinh');
    var T= document.getElementById('Tong');

    Trungbinh = (parseFloat(x1.value)+parseFloat(x2.value)+parseFloat(x3.value))/3;

    TB.innerHTML= Trungbinh.toFixed(1);

    Tong = (parseFloat(x1.value)+parseFloat(x2.value)+parseFloat(x3.value));
    T.innerHTML=Tong.toFixed(0);

}