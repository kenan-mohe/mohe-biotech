document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    const sections = gsap.utils.toArray('.page h1');

    sections.forEach((section) => {
        gsap.fromTo(section, {
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                start: 'top bottom',
                end: 'center center'
            }
        }, {
            scale: 1.5,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                start: 'top bottom',
                end: 'bottom top'
            }
        })
    })
})