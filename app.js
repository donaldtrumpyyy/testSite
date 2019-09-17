function firstExample() {
    const flightPath = {
        curviness: 3,
        autoRotate: false,
        values: [
            /*
            {x: 100, y: -20},
            {x: 300, y: 10},
            {x: 500, y: 100},
            {x: 750, y: -100},
            {x: 350, y: -50},
            {x: 600, y: 100},
            {x: 800, y: 0},
            {x: window.innerWidth, y: -250}
            */

            {x: 00, y: -50},
            {x: 00, y: -150},
            {x: 00, y: -170},
            {x: 00, y: -190},
            {x: 00, y: -210},
            {x: 00, y: -230},
            {x: 00, y: -250},
            {x: 00, y: -270},
            {x: 00, y: -290},
            {x: 00, y: -310},
            {x: 00, y: -330},
            {x: 00, y: -window.innerHeight}
        ]
    }
    
    const tween = new TimelineLite()
    
    tween.add(
        TweenLite.to("[class*='demo']", 1, {
            bezier: flightPath,
            ease: Power1.easeInOut
        })
    )
    
    const controller = new ScrollMagic.Controller()
    
    const scene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 0.75*1000,
        triggerHook: 0
    }).setTween(tween)
      .setPin('.animation')
      .addTo(controller)
}

function secondExample() {
    const ratio = .1

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
            if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        })
    }

    const observer = new IntersectionObserver(handleIntersect, options)

    document.querySelectorAll("[class*='reveal']").forEach(function (r) {
        observer.observe(r)
    })
}

firstExample()
secondExample()