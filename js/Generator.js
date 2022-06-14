// Function to generate randomizes word content
function PwGen() {
    // Password content
    let pwElem =
        '!@#$%^&_*&+1234567890-ABCDEFGHIJ~KLMNOPQRSTU`VWXYZ*abcdefg&hijklmnopqrstuwxyz'
    let newPw = ''

    for (var i = 0; i < 15; i++)
        newPw += pwElem.charAt(Math.floor(Math.random() * pwElem.length))

    // Button selector for password generator
    document.getElementById('passwordSection').innerHTML = newPw
}
