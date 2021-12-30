let tl = gsap.timeline();

console.log("New");

tl.from(".card", {
  opacity: 0,
  x: -20,
});

tl.from(".avatar img", {
  opacity: 0,
  y: 10,
});

tl.from(".user-online-indicator",{
    opacity: 0,
    y: 10,
})
tl.from(".profile-name",{
    opacity: 0,
    y: 10,
})
tl.from(".profile-role",{
    opacity: 0,
    y: 10,
})

tl.from(".social-buttons",{
    opacity: 0,
})
