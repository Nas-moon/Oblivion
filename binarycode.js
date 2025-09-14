async function loadBinaryMessage() {
    try {
        const response = await fetch('message.txt');
        const binaryMessage = await response.text();

        const textMessage = binaryMessage
            .match(/.{1,8}/g)
            .map(byte => String.fromCharCode(parseInt(byte, 2)))
            .join('');

        document.getElementById('binary-container').textContent = textMessage;

    } catch (error) {
        console.error('Error loading binary message:', error);
    }
}

loadBinaryMessage();