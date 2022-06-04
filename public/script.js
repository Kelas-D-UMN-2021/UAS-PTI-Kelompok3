var nama;
var jurusan;
$(".alert").hide();
$("#div_game").hide();
$(document).ready(function () {
  $("#play_button").click(function (nama) {
    jurusan = $("#Category").val();
    nama = $("#nama_pemain").val();
    $("#nama_pemain").val(nama);
    if (nama === "") {
      nama = "Player";
    }
    $("#salam").html(salam + " " + nama);
    $("#semester").html(sem);
    $("#jurusan_text").html(jurusan);
    $("#div_intro").hide();
    $("footer").hide();
    $("#div_game").slideDown().show();
  });
});
var sem = 1;
var hari = 0;
const lapar = 20;
const stress = 20;
const capek = 20;
var gameendcheck = 0;
var countBelajar = 0;
var countBermain = 0;
var countTidur = 0;
var countMakan = 0;

//AUDIO
var audio = new Audio("image/click.wav");
var maingame = new Audio("image/happy.mp3");
maingame.volume = 0.2;

function pause(element) {
  var musik = document.getElementById(element);
  musik.pause();
}

//AUDIO END

//IMAGE
var charflag = 0;
var flag = 0;
var imgArray = new Array();
var roomflag = 1;

imgArray[0] = new Image();
imgArray[0].src = "image/char1.png";

imgArray[1] = new Image();
imgArray[1].src = "image/char3.png";

imgArray[2] = new Image();
imgArray[2].src = "image/char4.png";

imgArray[3] = new Image();
imgArray[3].src = "image/char5.png";

// imgArray[4] = new Image();
// imgArray[4].src = 'image/char5.png';

function nextimg(element) {
  var img = document.getElementById(element);
  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].src === img.src) {
      if (i === imgArray.length) {
        document.getElementById(element).src = imgArray[0].src;
        document.getElementById("play_char").src = imgArray[0].src;
        charflag = 0;
        break;
      }
      document.getElementById(element).src = imgArray[i + 1].src;
      document.getElementById("play_char").src = imgArray[i + 1].src;

      charflag = i + 1;
      break;
    }
  }
}
function previmg(element) {
  var img = document.getElementById(element);
  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].src === img.src) {
      if (i === imgArray.length) {
        document.getElementById(element).src = imgArray[0].src;
        document.getElementById("play_char").src = imgArray[0].src;
        charflag = 0;
        break;
      }
      document.getElementById(element).src = imgArray[i - 1].src;
      document.getElementById("play_char").src = imgArray[i - 1].src;
      charflag = i - 1;
      break;
    }
  }
}
//IMAGE END

const today = new Date();
let hour = 0;
let h = hour;
let m = 0;
let sec = m;

//UNTUK SALAM
if (h >= 0 && h <= 11) {
  salam = "Selamat Pagi, ";
  $("#div_game").css("background-image", "url('image/room_sore.png");
} else if (h >= 12 && h <= 15) {
  salam = "Selamat Siang, ";
  $("#div_game").css("background-image", "url('image/room_pagi.png");
} else if (h >= 16 && h <= 18) {
  salam = "Selamat Sore,";
  $("#div_game").css("background-image", "url('image/room_sore.png");
} else if (h >= 19 && h <= 23) {
  salam = "Selamat Malam, ";
  $("#div_game").css("background-image", "url('image/room_malam.png");
}

function cekjam(h) {
  nama = $("#nama_pemain").val();
  $("#nama_pemain").val(nama);
  if (nama === "") {
    nama = "Player";
  }
  if (h >= 0 && h <= 3) {
    s = "Selamat Malam, ";
    $("#div_game").css("background-image", "url('image/room_malam.png");
    $("#salam").html(s + " " + nama);
  } else if (h >= 4 && h <= 11) {
    s = "Selamat Pagi, ";
    $("#div_game").css("background-image", "url('image/room_sore.png");
    $("#salam").html(s + " " + nama);
  } else if (h >= 12 && h <= 15) {
    s = "Selamat Siang, ";
    $("#div_game").css("background-image", "url('image/room_pagi.png");
    $("#salam").html(s + " " + nama);
  } else if (h >= 16 && h <= 18) {
    s = "Selamat Sore,";
    $("#div_game").css("background-image", "url('image/room_sore.png");
    $("#salam").html(s + " " + nama);
  } else if (h >= 19 && h <= 23) {
    s = "Selamat Malam, ";
    $("#div_game").css("background-image", "url('image/room_malam.png");
    $("#salam").html(s + " " + nama);
  }
}
//ganti tempat

document.getElementById("activity_makan").disabled = true;
document.getElementById("activity_belajar").disabled = true;
document.getElementById("place_rumah").disabled = true;
document.getElementById("place_kampus").disabled = true;

function kampus() {
  roomflag = 0;
  document.getElementById("place_kampus").disabled = true;
  document.getElementById("place_rumah").disabled = false;
  document.getElementById("place_kantin").disabled = false;

  document.getElementById("activity_tidur").disabled = true;
  document.getElementById("activity_main").disabled = true;
  document.getElementById("activity_makan").disabled = true;
  document.getElementById("activity_belajar").disabled = false;
}
function rumah() {
  roomflag = 1;
  document.getElementById("place_kampus").disabled = false;
  document.getElementById("place_rumah").disabled = true;
  document.getElementById("place_kantin").disabled = false;

  document.getElementById("activity_tidur").disabled = false;
  document.getElementById("activity_main").disabled = false;
  document.getElementById("activity_makan").disabled = true;
  document.getElementById("activity_belajar").disabled = true;
}
function kantin() {
  roomflag = 2;
  document.getElementById("place_kampus").disabled = false;
  document.getElementById("place_rumah").disabled = false;
  document.getElementById("place_kantin").disabled = true;

  document.getElementById("activity_main").disabled = true;
  document.getElementById("activity_makan").disabled = false;
  document.getElementById("activity_belajar").disabled = true;
  document.getElementById("activity_tidur").disabled = true;
}
// tombol makan

function memakan(element) {
  if (roomflag === 2) {
    countMakan++;
    document.getElementById("activity_makan").innerHTML = "-makan-";
    document.getElementById("activity_makan").disabled = true;
    var img = document.getElementById(element);
    if (img.src === imgArray[0].src) {
      document.getElementById("play_char").src = "image/makan/char1_makan.png";
      flag = 0;
    }
    if (img.src === imgArray[1].src) {
      document.getElementById("play_char").src = "image/makan/char3_makan.png";
      flag = 3;
    }
    if (img.src === imgArray[2].src) {
      document.getElementById("play_char").src = "image/makan/char4_makan.png";
      flag = 4;
    }
    if (img.src === imgArray[3].src) {
      document.getElementById("play_char").src = "image/makan/char5_makan.png";
      flag = 5;
    }
    setTimeout(function () {
      document.getElementById("activity_makan").disabled = false;
      document.getElementById("activity_makan").innerHTML = "Makan";
      if (flag === 0) {
        document.getElementById("play_char").src = "image/char1.png";
      }
      if (flag === 3) {
        document.getElementById("play_char").src = "image/char3.png";
      }
      if (flag === 4) {
        document.getElementById("play_char").src = "image/char4.png";
      }
      if (flag === 5) {
        document.getElementById("play_char").src = "image/char5.png";
      }
      document.getElementById("sts_makan").value += 25;
      document.getElementById("sts_tidur").value += 5;
      document.getElementById("sts_main").value += 5;
      h += 2;
    }, 1000);
    return false;
  }
}

//tombol main

function memain(element) {
  countBermain++;
  document.getElementById("activity_main").innerHTML = "-bermain-";
  document.getElementById("activity_tidur").disabled = true;
  document.getElementById("activity_main").disabled = true;
  var img = document.getElementById(element);
  if (img.src === imgArray[0].src) {
    document.getElementById("play_char").src = "image/main/char1_main.png";
    flag = 0;
  }
  if (img.src === imgArray[1].src) {
    document.getElementById("play_char").src = "image/main/char3_main.png";
    flag = 3;
  }
  if (img.src === imgArray[2].src) {
    document.getElementById("play_char").src = "image/main/char4_main.png";
    flag = 4;
  }
  if (img.src === imgArray[3].src) {
    document.getElementById("play_char").src = "image/main/char5_main.png";
    flag = 5;
  }
  setTimeout(function () {
    document.getElementById("activity_main").disabled = false;
    document.getElementById("activity_tidur").disabled = false;
    document.getElementById("activity_main").innerHTML = "Main";
    if (flag === 0) {
      document.getElementById("play_char").src = "image/char1.png";
    }
    if (flag === 3) {
      document.getElementById("play_char").src = "image/char3.png";
    }
    if (flag === 4) {
      document.getElementById("play_char").src = "image/char4.png";
    }
    if (flag === 5) {
      document.getElementById("play_char").src = "image/char5.png";
    }
    document.getElementById("sts_main").value += 20;
    document.getElementById("sts_tidur").value -= 20;
    document.getElementById("sts_makan").value -= 10;
    h += 3;
  }, 1000);
}

//tombol tidur
function mentidur(element) {
  countTidur++;
  document.getElementById("activity_tidur").innerHTML = "-tertidur-";
  document.getElementById("activity_tidur").disabled = true;
  document.getElementById("activity_main").disabled = true;
  var img = document.getElementById(element);
  if (img.src === imgArray[0].src) {
    document.getElementById("play_char").src = "image/tidur/char1_tidur.png";
    flag = 0;
  }
  if (img.src === imgArray[1].src) {
    document.getElementById("play_char").src = "image/tidur/char3_tidur.png";
    flag = 3;
  }
  if (img.src === imgArray[2].src) {
    document.getElementById("play_char").src = "image/tidur/char4_tidur.png";
    flag = 4;
  }
  if (img.src === imgArray[3].src) {
    document.getElementById("play_char").src = "image/tidur/char5_tidur.png";
    flag = 5;
  }
  setTimeout(function () {
    document.getElementById("activity_main").disabled = false;
    document.getElementById("activity_tidur").disabled = false;
    document.getElementById("activity_tidur").innerHTML = "Tidur";
    if (flag === 0) {
      document.getElementById("play_char").src = "image/char1.png";
    }
    if (flag === 3) {
      document.getElementById("play_char").src = "image/char3.png";
    }
    if (flag === 4) {
      document.getElementById("play_char").src = "image/char4.png";
    }
    if (flag === 5) {
      document.getElementById("play_char").src = "image/char5.png";
    }
    document.getElementById("sts_tidur").value += 30;
    document.getElementById("sts_main").value += 5;
    document.getElementById("sts_makan").value -= 5;
    h += 6;
  }, 1000);
}

//Tombol Belajar
function membelajar(element) {
  if (roomflag === 0) {
    countBelajar++;
    document.getElementById("activity_belajar").innerHTML = "-belajar-";
    document.getElementById("activity_belajar").disabled = true;
    var img = document.getElementById(element);
    if (img.src === imgArray[0].src) {
      document.getElementById("play_char").src =
        "image/belajar/char1_belajar.png";
      flag = 0;
    }
    if (img.src === imgArray[1].src) {
      document.getElementById("play_char").src =
        "image/belajar/char3_belajar.png";
      flag = 3;
    }
    if (img.src === imgArray[2].src) {
      document.getElementById("play_char").src =
        "image/belajar/char4_belajar.png";
      flag = 4;
    }
    if (img.src === imgArray[3].src) {
      document.getElementById("play_char").src =
        "image/belajar/char5_belajar.png";
      flag = 5;
    }
    setTimeout(function () {
      document.getElementById("activity_belajar").disabled = false;
      document.getElementById("activity_belajar").innerHTML = "Belajar";
      if (flag === 0) {
        document.getElementById("play_char").src = "image/char1.png";
      }
      if (flag === 3) {
        document.getElementById("play_char").src = "image/char3.png";
      }
      if (flag === 4) {
        document.getElementById("play_char").src = "image/char4.png";
      }
      if (flag === 5) {
        document.getElementById("play_char").src = "image/char5.png";
      }
      document.getElementById("sts_belajar").value += 30;
      document.getElementById("sts_main").value -= 10;
      document.getElementById("sts_tidur").value -= 15;
      document.getElementById("sts_makan").value -= 10;
      h += 6;
    }, 1000);
  }
}

function mulai() {
  const element1 = document.getElementById("sts_makan");
  const element2 = document.getElementById("sts_main");
  const element3 = document.getElementById("sts_tidur");
  const id = setInterval(frame, 3500);
  function frame() {
    let width1 = document.getElementById("sts_makan").value;
    let width2 = document.getElementById("sts_main").value;
    let width3 = document.getElementById("sts_tidur").value;
    width1 = width1 - 2;
    width2 = width2 - 2;
    width3--;
    element1.value = width1;
    element2.value = width2;
    element3.value = width3;
  }
}
const bar_makan = document.getElementById("sts_makan");
const bar_main = document.getElementById("sts_main");
const bar_tidur = document.getElementById("sts_tidur");
const bar_belajar = document.getElementById("sts_belajar");

const daylist = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu"
];
var tellday = 0;

const time = setInterval(proses, 1000);
function proses() {
  nama = $("#nama_pemain").val();
  $("#nama_pemain").val(nama);
  if (nama === "") {
    nama = "Player";
  }
  if (h >= 0 && h <= 3) {
    if (roomflag === 0) {
      $("#div_game").css("background-image", "url('image/night_campus.png");
    } else if (roomflag === 1) {
      $("#div_game").css("background-image", "url('image/room_malam.png");
    } else if (roomflag === 2) {
      $("#div_game").css(
        "background-image",
        "url('image/night_supermarket.png"
      );
    }
    ss = "Selamat Malam, ";
    $("#salam").html(ss + " " + nama);
  } else if (h >= 4 && h <= 11) {
    ss = "Selamat Pagi, ";
    if (roomflag === 0) {
      $("#div_game").css("background-image", "url('image/campus.jpg");
    } else if (roomflag === 1) {
      $("#div_game").css("background-image", "url('image/room_sore.png");
    } else if (roomflag === 2) {
      $("#div_game").css("background-image", "url('image/supermarket.jpg");
    }
    $("#salam").html(ss + " " + nama);
  } else if (h >= 12 && h <= 15) {
    ss = "Selamat Siang, ";
    if (roomflag === 0) {
      $("#div_game").css("background-image", "url('image/campus.jpg");
    } else if (roomflag === 1) {
      $("#div_game").css("background-image", "url('image/room_pagi.png");
    } else if (roomflag === 2) {
      $("#div_game").css("background-image", "url('image/supermarket.jpg");
    }
    $("#salam").html(ss + " " + nama);
  } else if (h >= 16 && h <= 18) {
    ss = "Selamat Sore,";
    if (roomflag === 0) {
      $("#div_game").css("background-image", "url('image/night_campus.png");
    } else if (roomflag === 1) {
      $("#div_game").css("background-image", "url('image/room_sore.png");
    } else if (roomflag === 2) {
      $("#div_game").css(
        "background-image",
        "url('image/night_supermarket.png"
      );
    }
    $("#salam").html(ss + " " + nama);
  } else if (h >= 19 && h <= 23) {
    ss = "Selamat Malam, ";
    if (roomflag === 0) {
      $("#div_game").css("background-image", "url('image/night_campus.png");
    } else if (roomflag === 1) {
      $("#div_game").css("background-image", "url('image/room_malam.png");
    } else if (roomflag === 2) {
      $("#div_game").css(
        "background-image",
        "url('image/night_supermarket.png"
      );
    }
    $("#salam").html(ss + " " + nama);
  }
  if (tellday !== 0) {
    if (h >= 8 && h <= 17) {
      document.getElementById("place_kampus").disabled = false;
      console.log("kampus buka " + tellday);
    } else {
      document.getElementById("place_kampus").disabled = true;
    }
  } else {
    document.getElementById("place_kampus").disabled = true;
  }
  const today = new Date();
  let d = today.getSeconds();

  if (d >= 59 || d === 60) {
    d = 0;
    h++;
  }
  if (h > 24 || h === 24) {
    extra = h - 24;
    h = extra - 0;
    hari++;
    gameendcheck++;
    if (tellday === 6) {
      tellday = 0;
    } else {
      tellday++;
    }
  }
  if (d < 10) {
    d = "0" + d;
  }

  document.getElementById("jam").innerHTML = +h + ":" + d;
  if (bar_belajar.value >= 100) {
    sem = sem + 1;
    bar_belajar.value = 0;
    hari = 0;
  }
  document.getElementById("tellday").innerHTML = daylist[tellday];

  if (bar_makan.value <= lapar) {
    document.getElementById("pesan").innerHTML = "KAMU HARUS MAKAN";
    setTimeout(function () {
      document.getElementById("pesan").innerHTML = "";
    }, 2000);
  }
  if (bar_tidur.value <= capek) {
    document.getElementById("pesan").innerHTML = "KAMU HARUS TIDUR";
    setTimeout(function () {
      document.getElementById("pesan").innerHTML = "";
    }, 2000);
  }
  if (bar_main.value <= stress) {
    document.getElementById("pesan").innerHTML = "KAMU MULAI DEPRESI";
    setTimeout(function () {
      document.getElementById("pesan").innerHTML = "";
    }, 2000);
  }

  if (bar_makan.value === 0 || bar_tidur.value === 0 || bar_main.value === 0) {
    clearInterval(time);
    alert("GAME OVER! kamu tidak menjaga diri kamu dengan baik!");
    window.location = "index.html";
  }
  if (gameendcheck === 7) {
    console.log(gameendcheck);
    console.log(countBelajar);
    console.log(countBermain);
    console.log(countTidur);
    console.log(countMakan);
    clearInterval(time);
    if (countBelajar > 9) {
      if (countBermain < 3 || countTidur < 4) {
        alert(
          "7 hari telah berlalu... Kamu rajin kuliah tapi kamu mulai stress, kamu mengundurkan diri dari kuliah!"
        );
        console.log("ending 1");
      } else {
        alert(
          "7 hari telah berlalu... Kamu rajin kuliah dan rajin jaga kesehatan!"
        );
        console.log("ending 2");
      }
    } else if (countBelajar < 9) {
      if (countBermain < 3 || countTidur < 4) {
        alert(
          "7 hari telah berlalu... Kamu terlihat depresi, sudah saatnya untuk kamu mencari bantuan!"
        );
        console.log("ending 3");
      } else if (countBermain > 10) {
        alert(
          "7 hari telah berlalu... Kamu cuman tau main doang, kami dari kelompok 3 kecewa sama kamu!!!"
        );
        console.log("ending 4");
      } else {
        alert(
          "7 hari telah berlalu... Kamu tampak kesulitan dalam belajar, saatnya kamu pindah jurusan!"
        );
        console.log("ending 5");
      }
    } else {
      alert(
        "7 hari telah berlalu... Kamu jarang kuliah, mungkin lain kali jangan bolos lagi!"
      );
    }
    //window.location = "index.html";
  }
  document.getElementById("semester").innerHTML = sem;
}
