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
        showCust();
      }
    });

    const saveCust = () => {
      if ( window.localStorage)
      {
        localStorage.riwayat = JSON.stringify(riwayat);
      }
    }

    $('#hitung').click(function(){
      var today = new Date();
      var date = today.getFullYear()+'\/'+(today.getMonth()+1)+'\/'+today.getDate();
      var height   = $("#height").val();
      var weight   = $("#weight").val();
      var quadH = (height / 100) * 2;
      var calc = weight / quadH;
      var bmi = calc.toFixed(1);
      
        if (calc < 18.5) {
            var status =  "KURANG";
            var saran = "Tingkatkan asupan nutrisi dan porsi makan Anda secara terukur.";
            var color = "#c9c71c";
        }
        if (calc > 18.5 && calc < 22.9) {
            var status =  "NORMAL";
            var saran = "Bagus! Pertahankan gaya hidup dan pola makan sehat Anda!";
            var color = "green";
        }
        if (calc > 23 && calc < 29.9) {
            var status = "BERLEBIH";
            var saran = "Mulailah untuk memperhatikan porsi makan Anda dari sekarang.";
            var color = "orange";
        }
        if (calc > 30) {
            var status = "OBESITAS";
            var saran = "Gawat! Anda harus konsumsi fitbar :)";
            var color = "red";
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
      saveCust();
      showCust();
    });

    const showCust = () => {
      if (riwayat.length == 0) {
        $("#classcust").css("visibility", "hidden");
        return;
      }

      $("#classcust").css("visibility", "visible");
      $("#custBody").empty();

      for (var i in riwayat) {
        var item = riwayat[i];
        var row = '<div class=\'col\'><p class=\'showDate\'>'+ item.date +'</p><span id=\'topIndo\'><span id=\'tb\'>'+ item.height +' cm</span><span id=\'bb\'>'+ item.weight +' kg</span></span><span id=\'bottomInfo\'><span id=\'bmi\'>BMI '+ item.bmi +'</span><span id=\'state\' style=\'color:'+ item.color +'\'>'+ item.status +'</span></span></div>';
        $("#custBody").append(row);
      }
    }
    
var clear = document.getElementById('clearLocalStorage');
clear.onclick = function() {
    localStorage.clear();
    document.getElementById('classcust').style.display = 'none';
}

var showData = document.getElementById('showData');
var hideData = document.getElementById('hideData');

const openNav = () => {
  document.getElementById("myNav").style.display = "block";
  document.getElementById('inputForm').style.display = "none";
  showData.style.display = "none";
  hideData.style.display = "flex";
  document.getElementById('respMenu').style.display = 'block';
}

const closeNav = () => {document.getElementById("myNav").style.display = "none";
document.getElementById('inputForm').style.display = "block";hideData.style.display = "none";
showData.style.display = "flex";
}

const showRecord = () => {
  document.getElementById("myNav").style.display = "block";
  document.getElementById('inputForm').style.display = "none";
}

const tutupNav = () => {
    document.getElementById("myNav").style.display = "none";
    document.getElementById('inputForm').style.display = "block";
}
