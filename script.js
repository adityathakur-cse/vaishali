        const scroll = new LocomotiveScroll({
            el: document.querySelector('#main'),
            smooth: true
        });

        function page4Animation() {
            var elemC = document.querySelector("#elem-container")
            var fixed = document.querySelector("#fixed-image")
            elemC.addEventListener("mouseenter", function () {
                fixed.style.display = "block"
            })
            elemC.addEventListener("mouseleave", function () {
                fixed.style.display = "none"
            })

            var elems = document.querySelectorAll(".elem")
            elems.forEach(function (e) {
                e.addEventListener("mouseenter", function () {
                    var image = e.getAttribute("data-image")
                    fixed.style.backgroundImage = `url(${image})`
                })
            })
        }

        function swiperAnimation() {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 100,
            });
        }
        
        function menuAnimation() {
            var menu = document.querySelector("#menu-btn")
            var full = document.querySelector("#full-scr")
            var navimg = document.querySelector("nav img")
            var closeBtn = document.querySelector("#close-menu")
            
            menu.addEventListener("click", function () {
                full.style.top = "0"
                navimg.style.opacity = "0"
                document.body.style.overflow = "hidden"
            })
            
            closeBtn.addEventListener("click", function() {
                full.style.top = "-100%"
                navimg.style.opacity = "1"
                document.body.style.overflow = "auto"
            })
            
            // Close menu when clicking on links
            document.querySelectorAll('#full-div1 a').forEach(link => {
                link.addEventListener('click', () => {
                    full.style.top = "-100%"
                    navimg.style.opacity = "1"
                    document.body.style.overflow = "auto"
                })
            })
        }

        function loaderAnimation() {
            var loader = document.querySelector("#loader")
            setTimeout(function () {
                loader.style.top = "-100%"
            }, 4200)
        }

        swiperAnimation()
        page4Animation()
        menuAnimation()
        loaderAnimation()
