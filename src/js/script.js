console.log('working..')
let key  = 'YOUR_API_KEY'; //you can get it from https://app.emailvalidation.io/
let results = document.querySelector('.result');
let btn = document.querySelector('.btn');
let str = ``;
// let current_result = {
//     "email": "riteshcgiri@gmail.com",
//     "state": "deliverable",
//     "reason": "valid_mailbox",
//     "domain": "gmail.com",
//     "user": "riteshcgiri",
//     "tag": "",
//     "format_valid": true,
//     "mx_found": true,
//     "smtp_check": true,
//     "score": 0.64,
//     "catch_all": null,
//     "role": false,
//     "free": true,
//     "disposable": false,
//     "did_you_mean": "",
// }
let current_result;
btn.addEventListener('click', async(e) => {
    e.preventDefault();
    let email = document.getElementById('validation').value;
    console.log('pressed', email);

    // return
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    
    let res = await fetch(url);
     current_result = await res.json();

        for (let key of Object.keys(current_result)) {
            str = str + `<div class="result--item">
                            <span >${key}</span>
                            <span >${current_result[key] === "" ? "-" : current_result[key]}</span>
                        </div>`;
        }
        results.innerHTML = str;




});




// console.log(str)