window.onload = function () {
    Particles.init({
        selector: ".background",
    });
};

var particle_info = Particles.init({
    color: ["#039dda", "#ff0228", "#000000"],
    selector: ".background",
    connectParticles: true,
    responsive: [
        {
            options: {
                color: ["#faebd7", "#039dda", "#ff0228"],
                maxParticles: 43,
                connectParticles: false,
            },
            breakpoint: 768
        },
    ],
});

class NavPageMain {

    constructor() {
        this.currentTab = null;
        this.lastScroll = 0;
        this.tabContainerHeight = 69.5;
        this.currentId = null;
        let self = this;

        $(".navigation-tab").click(function () {
            self.onTabClick(event, $(this));
        });

        $(window).scroll(() => {
            this.onScroll();
        });

        $(window).resize(() => {
            this.onResize();
        });

    }

    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
        $("html, body").animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
        this.checkHeaderPosition();
        this.findCurrentTabSelector();
        this.lastScroll = $(window).scrollTop();
    }

    checkHeaderPosition() {
        const headerHeight = 75;
        if ($(window).scrollTop() > headerHeight) {
            $(".header").addClass("header--scrolled");
        }
        else {
            $(".header").removeClass("header--scrolled");
        }

        let offset =
            $(".nav").offset().top + $(".nav").height() - this.tabContainerHeight - headerHeight;

        if ($(window).scrollTop() > this.lastScroll && $(window).scrollTop() > offset) {
            $(".header").addClass("et-header--move-up");
            $(".navigation-container").removeClass("navigation-container--top-first");
            $(".navigation-container").addClass("navigation-container--top-second");
        }
        else if ($(window).scrollTop() < this.lastScroll && $(window).scrollTop() > offset) {
            $(".header").removeClass("et-header--move-up");
            $(".navigation-container").removeClass("navigation-container--top-second");
            $(".et-hero-tabs-container").addClass("et-hero-tabs-container--top-first");
        }
        else {
            $(".header").removeClass("header--move-up");
            $(".navigation-container").removeClass("navigation-container--top-first");
            $(".navigation-container").removeClass("navigation-container--top-second");
        }
    }

    onResize() {
        if (this.currentId) {
            this.setSliderCss();
        }
    }

    setSliderCss() {
        let width = 0;
        let left = 0;

        if (this.currentTab) {
            width = this.currentTab.css("width");
            left = this.currentTab.offset().left;
        }

        $(".navigation-tab-slider").css("width", width);
        $(".navigation-tab-slider").css("left", left);
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;

        $(".navigation-tab").each(function () {
            let id = $(this).attr("href");
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;

            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });

        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

}

new NavPageMain();