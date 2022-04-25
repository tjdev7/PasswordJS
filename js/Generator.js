// Function to generate randomizes word content
function PwGen() {
    // Password content
    let pwElem =
        '!@#$%^&)__)(*&+1234567890-ABCDEFGHIJKLMNOPQRSTUVWXYZ*abcdefghijklmnopqrst'
    let newPw = ''

    for (var i = 0; i < 12; i++)
        newPw += pwElem.charAt(Math.floor(Math.random() * pwElem.length))

    // Button selector for password generator
    document.getElementById('passwordSection').innerHTML = newPw
}

// function copyPw() {
//     document.getElementById("passwordSection");
//
// }
