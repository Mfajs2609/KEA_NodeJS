$.get("/getUsername").done(data => {
    $("#username").text(data.response.username)
})

$.get("/getUseremail").done(data => {
    $("#email").text(data.response.email)
});