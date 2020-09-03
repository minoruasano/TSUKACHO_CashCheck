function Calculation() {
    var row1 = document.frm1.row1_price.value * document.frm1.row1_sel_traffic.selectedIndex;
    document.frm1.row1_total.value = row1;
 
    var row2 = document.frm1.row2_price.value * document.frm1.row2_sel_traffic.selectedIndex;
    document.frm1.row2_total.value = row2;
 
    var row3 = document.frm1.row3_price.value * document.frm1.row3_sel_traffic.selectedIndex;
    document.frm1.row3_total.value = row3;
 
    var total = row1 + row2 + row3;
    document.frm1.field_total.value = total;
}
 
function Calculation2 {
    var row4 = document.frm2.row4_price.value * document.frm2.row4_sel_cost.selectedIndex;
    document.frm2.row4_total.value = row4;
 
    var row5 = document.frm2.row5_price.value * document.frm2.row5_sel_cost.selectedIndex;
    document.frm2.row5_total.value = row5;
 
    var row6 = document.frm2.row6_price.value * document.frm2.row6_sel_cost.selectedIndex;
    document.frm2.row6_total.value = row6;
 
    var total2 = row4 + row5 + row6;
    document.frm2.field_total2.value = total2;
}
 
var button = document.getElementById('button');
 
button.addEventListener("click", function(e){
    e.preventDefault();
 
    var field_total = document.getElementById("field_total").value;
    var field_total2 = document.getElementById("field_total2").value;
 
    var sum = parseInt(field_total, 10) + parseInt(field_total2, 10);
 
    var all_total = document.getElementById("all_total");
    all_total.value = sum;
});
