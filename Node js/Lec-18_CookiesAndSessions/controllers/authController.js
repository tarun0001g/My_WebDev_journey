





exports.getLogin =  (req, res, next) => { 
    isLoggedIn = false;
    res.render('auth/login', {pageTitle: "Login", pageName: "login"}); 

} 

exports.postLogin = (req, res, next) => { 
    console.log(req.body);
    // res.cookie("isLoggedIn", true);
    req.session.isLoggedIn = true; //after this we can see the connect.sid (data) of cookie in browser inspect
    // isLoggedIn = true;
    res.redirect("/");
}

exports.postLogout = (req, res, next) =>{
    // res.cookie("isLoggedIn", false);
    // res.redirect("/login");

    req.session.destroy( () => {
        res.redirect("/login");
    })
}

