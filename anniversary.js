function showElement(elementId) {
  var elem1 = document.getElementById("Home");
  var elem2 = document.getElementById("Gallery");
  var elem3 = document.getElementById("Note");

  if (elementId === "Home") {
    fadeIn(elem1);
    fadeOut(elem2);
    fadeOut(elem3);
  } else if (elementId === "Gallery") {
    fadeOut(elem1);
    fadeIn(elem2);
    fadeOut(elem3);
  } else if (elementId === "Note") {
    fadeOut(elem1);
    fadeOut(elem2);
    fadeIn(elem3);
  }
}

function fadeIn(element) {
  element.style.opacity = "0";
  element.style.display = "block";
  setTimeout(function() {
    element.style.opacity = "1";
  }, 100); // Waktu sebelum fading dalam milidetik
}
function fadeOut(element) {
  element.style.opacity = "1";
  setTimeout(function() {
    element.style.opacity = "0";
    element.style.display = "none";
  }, 100); // Waktu sebelum fading dalam milidetik
}
let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const navbarToggle = document.querySelector('.navbar-toggle');

    navbarLinks.classList.toggle('active');
    navbarToggle.classList.toggle('active');
}

document.getElementById('gift-box').addEventListener('click', function() {
    var giftBox = document.getElementById('gift-box');
    var typingParagraph = document.getElementById('ketik');
    giftBox.style.transition = 'opacity 1s';
    giftBox.style.opacity = '0';

    setTimeout(function() {
        typingParagraph.style.display = 'block';
        typeWriter(text, 0); // Memanggil fungsi typeWriter setelah delay
        typingParagraph.classList.add('typing-animation');
    }, 500); // Waktu delay sebelum muncul teks animasi
});

const text = "Hari ini adalah hari yang istimewa karena tidak hanya hari ulang tahunmu, tetapi juga hari ulang tahun kita. Selama setahun ini, setiap momen bersamamu telah menjadi kenangan indah yang tak terlupakan. Terima kasih telah menjadi pasangan yang sempurna. Kamu telah membawa kebahagiaan dan cinta yang begitu tulus ke dalam hidupku. Aku tak sabar untuk membuat lebih banyak kenangan bersamamu di masa depan. Setiap detik bersamamu adalah anugerah, dan aku bersyukur untuk setiap hari yang kita lalui bersama. Kamu adalah seseorang yang selalu mampu membuatku tersenyum, menghangatkan hatiku dengan cinta dan perhatianmu. Dalam setiap pelukanmu, aku merasakan ketenangan dan kenyamanan yang tiada tara. Dalam setiap canda dan tawamu, aku menemukan kebahagiaan yang sejati. Aku sangat berterima kasih karena kamu selalu ada di sisiku, dalam suka dan duka, dalam tawa dan tangis. Kamu adalah teman terbaikku, kekasihku, dan belahan jiwaku. Setiap hari bersamamu adalah petualangan baru yang penuh dengan cinta dan kebahagiaan. Aku tidak bisa membayangkan hidup tanpamu, karena kamu adalah bagian terpenting dalam hidupku. Selamat ulang tahun, dan selamat hari jadi, sayangku. Aku berharap hari ini dan setiap hari berikutnya dipenuhi dengan kebahagiaan, cinta, dan keberkahan. Mari kita terus berjalan bersama, menaklukkan setiap rintangan, dan merayakan setiap kemenangan. Aku mencintaimu lebih dari kata-kata yang bisa diungkapkan, dan aku berjanji akan selalu ada untukmu, mencintaimu dengan sepenuh hati, dan menjaga setiap momen berharga yang kita miliki. Denganmu, aku merasa lengkap. Terima kasih telah menjadi pasangan yang sempurna, dan mari kita lanjutkan perjalanan ini dengan penuh cinta dan semangat. Selamat ulang tahun, cintaku, dan selamat hari jadi untuk kita. Aku mencintaimu lebih dari yang bisa diungkapkan, sekarang dan selamanya.";
const typingText = document.getElementById('ketik');

function typeWriter(text, i) {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i), 100);
    }
}
document.getElementById('gift-box').addEventListener('click', function() {
    var giftBox = document.getElementById('gift-box');
    setTimeout(function() {
        giftBox.style.display = 'none'; // Menghilangkan elemen setelah 2 detik
    }, 500); // 2000 milidetik = 2 detik
});

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

showImage(currentIndex);
function kirimSaran() {
      // Mengambil nilai input dari formulir
      var saran = document.getElementById('saran').value;
      
      // Membuat objek data
      var saran = {
        saran: saran,
        
      };
      
      // Mengambil data yang sudah ada atau membuat array baru
      var existingSaran = JSON.parse(localStorage.getItem('saran')) || [];
      // Menambahkan data baru ke array
      existingSaran.push(saran);
      localStorage.setItem('saran', JSON.stringify(existingSaran));
      alert('I LOVE YOU FOREVER LAURA, Even you're not💕');
    }
    ;
