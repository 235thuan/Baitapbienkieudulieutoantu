function chuyendoidoCsangF() {
    var C = document.getElementById('giatridoC');

    var F = document.getElementById('giatridoF')
    giatridoF = parseFloat(giatridoC.value) / 5 * 9 + 32;
    F.innerHTML = giatridoF.toFixed(0)+ " " + "độ F";
}
