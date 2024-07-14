const loginForm=$("#submit-form"),
password=$("#password"),
email=$("#email");


async function useAuth(URL,user) {
    console.log(URL);
    console.log(user);
    try {
        const req=await fetch(`${URL}/auth/login`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        const res=await req.json();

        console.log(res);


        if (req.status===200) {
            localStorage.setItem('token',res.token);
        }


        if (localStorage.getItem('token')) {
            location.href="../../index.html";
        }

      

    } catch (err) {
        console.error(err.message);
    }
}

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const user={
        username:$("#email").value,
        password:$("#password").value
    }

    console.log(user);

    if (user.username.trim().length===0 && user.password.length===0) {
        alert('Please enter')
    }else{
        useAuth(API,user);
    }
})