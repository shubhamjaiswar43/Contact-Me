const head = `<h1>Welcome To My Website</h1>`;
const linkTemp = `<a class="box" href="LINK" target="_blank">MEDIA</a>`
const link = {
    "Linkedin":"https://linkedin.com/in/shubhamjaiswar",
    "Github":"https://github.com/shubhamjaiswar43",
    "Instagram":"https://instagram.com/shubham_jaiswar_43",
    "Facebook":"https://www.facebook.com/shubham.jaiswar.123276?mibextid=ZbWKwL",
    "Telegram":"https://t.me/shubham_jaiswar_43",
    "Snapchat":"https://snapchat.com/add/shubham_4701"
}
const val = [];
for(key in link){
    val.push(linkTemp);
    val[val.length-1] = val[val.length-1].replace("LINK",link[key]);
    val[val.length-1] = val[val.length-1].replace("MEDIA",key);
};
const root = document.getElementById('root');
let final = head;
val.forEach(ele=>{
    final+=ele;
})
root.innerHTML = final;