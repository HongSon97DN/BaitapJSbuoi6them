// Bài 1

function kiemTraSNT(n) {
    var flag = true;
 
    if (n < 2) {
         flag = false;
    } else if (n == 2) {
         flag = true;
    } else if (n % 2 == 0) {
         flag = false;
    } else {
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
             
            
    }
    return flag;
}

function inSoNguyenTo() {
    var num = Number(document.getElementById("soNguyenTo").value);
    var soNguyenTo = "";

    for (var i = 1; i <= num; i++) {
        if (kiemTraSNT(i)){
            soNguyenTo += i + " ";
        }
    }
    console.log(soNguyenTo);
    document.getElementById("txtResult").innerHTML = soNguyenTo;
}
document.getElementById("inSoNguyenTo").onclick = inSoNguyenTo;

