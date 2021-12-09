var heightVal = document.getElementById("heightVal");
    heightVal.innerHTML = height.value;

height.oninput = function() {
    heightVal.innerHTML = this.value;
}

var weightVal = document.getElementById("weightVal");
    weightVal.innerHTML = weight.value;
weight.oninput = function() {
    weightVal.innerHTML = this.value;
}

var riwayat = [];
$(function () {
  if (localStorage.riwayat)
  {
    riwayat = JSON.parse(localStorage.riwayat);
    showhist();
  }
});

function savehist() {
  if ( window.localStorage)
  {
    localStorage.riwayat = JSON.stringify(riwayat);
  }
}

$('#hitung').click(function(){
    var today = new Date(),
      date = today.getFullYear()+'\/'+(today.getMonth()+1)+'\/'+today.getDate();
    
    var height   = $("#height").val(),
      weight   = $("#weight").val(),
      quadH = height / 100,
      calc = weight / (quadH * quadH),
      bmi = calc.toFixed(1);
    
    if (calc < 18.5) {
        var status =  "KURANG",
            saran = "Tingkatkan asupan nutrisi dan porsi makan Anda secara terukur.",
            color = "#c9c71c";
    } else if (calc >= 18.5 && calc <= 24.9) {
        var status =  "NORMAL",
            saran = "Bagus! Pertahankan gaya hidup dan pola makan sehat Anda!",
            color = "green";
    } else if (calc >= 25 && calc <= 29.9) {
        var status = "BERLEBIH",
            saran = "Mulailah untuk memperhatikan porsi makan Anda dari sekarang.",
            color = "orange";
    } else {
        var status = "OBESITAS",
            saran = "Gawat! Anda harus konsumsi fitbar :)",
            color = "red";
    }
        
    var result = document.getElementById('result');
    result.style.display = 'flex';
    document.getElementById('cControl').style.color = color;
    document.getElementById('status').innerHTML = status;
    document.getElementById('bmiScore').innerHTML = bmi;
    document.getElementById('advice').innerHTML = saran;
    
    document.getElementById('tutup').onclick = function() {
        result.style.display = 'none';
    }
    
    var item = {date:date, height:height, weight:weight, bmi:bmi, status:status, color:color}; 
    riwayat.push(item);
    savehist();
    showhist();
});

function showhist() {
  if (riwayat.length == 0) {
    $("#classhist").css("visibility", "hidden");
    return;
  }

  $("#classhist").css("visibility", "visible");
  $("#histBody").empty();

  for (var i in riwayat) {
    var item = riwayat[i],
        row = '<div class=\'col\'><p class=\'showDate\'>'+ item.date +'</p><span id=\'topIndo\'><span id=\'tb\'>'+ item.height +' cm</span><span id=\'bb\'>'+ item.weight +' kg</span></span><span id=\'bottomInfo\'><span id=\'bmi\'>BMI '+ item.bmi +'</span><span id=\'state\' style=\'color:'+ item.color +'\'>'+ item.status +'</span></span></div>';
    $("#histBody").append(row);
  }
}
    
var clear = document.getElementById('clearLocalStorage');
clear.onclick = function() {
  localStorage.clear();
  document.getElementById('classhist').style.display = 'none';
}

var showData = document.getElementById('showData');
var hideData = document.getElementById('hideData');

function openNav() {document.getElementById("myNav").style.display = "block";
  document.getElementById('inputForm').style.display = "none";
  showData.style.display = "none";
  hideData.style.display = "flex";
  document.getElementById('respMenu').style.display = 'block';
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
  document.getElementById('inputForm').style.display = "block";
  hideData.style.display = "none";
  showData.style.display = "flex";
}

function showRecord() {
  document.getElementById("myNav").style.display = "block";
  document.getElementById('inputForm').style.display = "none";
}

function tutupNav() {
  document.getElementById("myNav").style.display = "none";
  document.getElementById('inputForm').style.display = "block";
}
