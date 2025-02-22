let secretNumber = Math.floor(Math.random() * 100) + 1; // 1-100 arası sayı seç
let attempts = 0;
 let sayi = secretNumber;
function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    let message = "";
   
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message = "Lütfen 1 ile 100 arasında bir sayı girin!";
    } else {
        attempts++;
        if (guess < secretNumber) {
            message = "Daha büyük bir sayı girin!";
        } else if (guess > secretNumber) {
            message = "Daha küçük bir sayı girin!";
        } else {
            message = `Tebrikler! ${attempts} denemede bildiniz. Yeni oyun başladı!`;
            secretNumber = Math.floor(Math.random() * 100) + 1; // Yeni sayı belirle
            attempts = 0; // Deneme sayısını sıfırla
            sayi = secretNumber;
        }
    }

    document.getElementById("resultMessage").innerText = message;
}
function koy()
{
    document.getElementById("guessInput").value = sayi;   
}