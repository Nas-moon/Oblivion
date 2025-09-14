const binaryMessage = "01010111 01100101 01101100 01100011 01101111 01101101 01100101 00100000 01110100 01101111 00100000 01110100 01101000 01100101 00100000 01001111 01100010 01101100 01101001 01110110 01101001 01101111 01101110 00100001";

const container = document.getElementById('binary-container');
let i = 0;

function typeBinary() {
    if (i < binaryMessage.length) {
        container.textContent += binaryMessage[i];
        i++;
        setTimeout(typeBinary, 20); // typing speed
    }
}

typeBinary();