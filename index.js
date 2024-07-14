"use strict";

const navlink=$('#nav-list'),
dropdownBtn = $("#dropdown-btn"),
dropdown=$("#dropdown"),
dropdownBody = $("#dropdown-body"),
logOut=$("#logout");



function renderData(data) {
    data.length && data.forEach(element => {  
        const list=createElement('li',listStyle,
            ` <i class="${element?.icon}"></i> <a href="${element?.path}">${element?.title}</a>
            `
        );
        navlink.appendChild(list);
    });
}
renderData(navLinks)

console.log(dropdownBody.scrollHeight);
console.log(dropdown.scrollHeight);
console.log(dropdownBtn.scrollHeight);


dropdownBtn.addEventListener('click',(e)=>{
dropdownBody.classList.toggle('hidden');
});

(function(token){
if (!token) {
    location.href="./pages/login";
}
})(localStorage.getItem('token'))


logOut.addEventListener('click',()=>{
    localStorage.removeItem('token');
})