function showTableData() {
  var table = document.getElementById("table");

  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
    info.innerHTML="";
    info2.innerHTML="";
      //rIndex = this.rowIndex;
      var sonuc = (document.getElementById("name").value =
        this.cells[1].innerHTML);
      var sonuc2 = (document.getElementById("name").value =
        this.cells[2].innerHTML);
      var sonuc3 = (document.getElementById("name").value =
        this.cells[3].innerHTML);
      var sonuc4 = (document.getElementById("name").value =
        this.cells[4].innerHTML);
      info.innerHTML =
        info.innerHTML + " " + sonuc + " " + sonuc2 + " " + sonuc3;
      info2.innerHTML = info2.innerHTML + " " + sonuc4;
    };


  }

}
