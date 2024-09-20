var t1=gsap.timeline()
t1.from("#nav h3",{
    y:-50,
    duration:0.8,
    delay:0.3,
    opacity:0,
    stagger:0.3
})
t1.from("#main h1",{
    x:-500,
    duration:0.8,
    opacity:0,
    stagger:0.3
})
t1.from("img",{
    opacity:0,
    x:100,
    duration:0.5,
    // delay:0.4,
    rotate:45,
    stagger:0.5
})
t1.from("#footer h3",
{
    y:20,
    duration:0.8,
    stagger:0.3,
    opacity:0
})