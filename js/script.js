// INDEX PAGE //

/* Header Animation */
$(".company-header").addClass("easeRight");

/* Shooting Star Animation */

function blink() {
    $(".star").fadeOut(3000).fadeIn(3000);
    $(".shiningStar").fadeOut(3000).fadeIn(3000);
}
setInterval(blink, 2000);

/* Earth & Moon Animation */

$("#earth").hover(
    function () {
        $(this).removeClass("glow-2").addClass("glow-1");
        $("#moon").removeClass("glow-1").addClass("glow-2");
    },
    function () {
        $(this).removeClass("glow-1").addClass("glow-2");
        $("#moon").removeClass("glow-2").addClass("glow-1");
    }
);

let flyPast = new Audio("sounds/flyBy.mp3");
function playAudio() {
    flyPast.play();
}

$("#earth").click(function () {
    $(".trigger").fadeOut(100).fadeIn(6000);
    $("#spaceship").attr("style", "display:inline-block");
    $("#spaceship").animate({ left: "127%" }, 3100);
    $("#spaceship").fadeOut("slow");
    playAudio();
});

/*Scroll Animation */

function randoNum() {
    let rando1 = Math.floor(Math.random() * 240);
    let rando2 = Math.floor(Math.random() * 240);
    let rando3 = Math.floor(Math.random() * 255);
    return rando1 + "," + rando2 + "," + rando3;
}

let smallScreen = window.matchMedia("(max-width: 501px)");
let midScreen = window.matchMedia("(max-width: 768px)");
let lgScreen = window.matchMedia("(max-width: 992px)");

$(window).scroll(function () {
    $("#earth").css("transform", "rotate(" + $(window).scrollTop() + "deg)");
    $("#moon").css("transform", "rotate(" + -$(window).scrollTop() + "deg)");
    $("#connected").fadeOut(3000).fadeIn(3000);
    $("#rocketship")
        .css("color", "rgba(" + randoNum())
        .css("transform", "rotateZ(" + $(window).scrollTop() + "deg)");
});

/* Review Logo Animation */

if (midScreen.matches) {
    $(".review-logo").fadeIn(3000).removeClass("hide").addClass("easeTop");
} else {
    $(window).scroll(function () {
        if (
            document.body.scrollTop > 500 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".review-logo").fadeIn(3000).removeClass("hide").addClass("easeTop");
        } else {
            $(".review-logo").fadeOut(500).removeClass("easeTop").addClass("hide");
        }
    });
}

/* Callout */

$(".closebtn").click(function () {
    $(".callout").animate(
        {
            right: "45%",
            top: "100%",
            opacity: "0.5",
        },
        1500
    );
});

$("#callout-btn").click(function () {
    validateEmail();
});

$(document).scroll(function () {
    $(".callout").css("opacity", 1.85 - $(window).scrollTop() / 700);
});

// SERVICES PAGE //

/* Review Logos */
$(".review-logo").hover(
    function () {
        $(this).addClass("glow-1");
    },
    function () {
        $(this).removeClass("glow-1");
    }
);

/* Feature Icons */

$(".feature-box").hover(
    function () {
        $(this).find(".feature-icon").removeClass("fa-5x").addClass("fa-6x");
    },
    function () {
        $(this).find(".feature-icon").removeClass("fa-6x").addClass("fa-5x");
    }
);

$(".feature-box").click(function () {
    if ($(this).find(".feature-text").hasClass("hide")) {
        $(this).find(".feature-text").removeClass("hide"),
            $(this).find(".feature-icon").css("color", "whitesmoke");
    } else {
        $(this).find(".feature-text").addClass("hide"),
            $(this).find(".feature-icon").css("color", "");
    }
});

/* Pricing Cards */

let $cards = $(".card-object"),
    $faceButtons = $(".face");

$faceButtons.on("click", flipCard);

function flipCard(event) {
    event.preventDefault();

    let $btnFace = $(this),
        $card = $btnFace.parent(".card-object");

    if ($card.hasClass("flip-in")) {
        closeCards();
    } else {
        closeCards();
        openCard($card);
    }
}

function closeCards() {
    $cards.each(function () {
        $(this)
            .filter(".flip-in")
            .removeClass("flip-in")
            .queue(function () {
                let reflow = this.offsetHeight;
                $(this).addClass("flip-out").dequeue();
            });
    });
}

function openCard($card) {
    $card.removeClass("flip-out").queue(function () {
        let reflow = this.offsetHeight;
        $(this).addClass("flip-in").dequeue();
    });
}

// ABOUT US PAGE //

/* Innovative Word Animation */

$("#innovative").stop().delay(2000).animate({ fontSize: "2rem" }, "slow");
$("#innovative").fadeOut(1500).fadeIn(1500);
$("#innovative").animate({ fontSize: "1.5rem" }, "slow");

/* CuttingEdge Word Animation */

$("#cuttingEdge").stop().delay(5200).fadeOut(1500).fadeIn(1500);
$("#cuttingEdge").animate({ fontSize: "2rem" }, "slow");
// $("#cuttingEdge").slideUp("slow").slideDown("fast");
$("#cuttingEdge").animate({ fontSize: "1.5rem" }, "slow");

/* Meet The Team Cards */

$(".team-card").click(function () {
    if ($(this).hasClass("flipped")) {
        $(this).removeClass("flipped");
    } else {
        $(".team-card").removeClass("flipped"), $(this).addClass("flipped");
    }
});

// CONTACT US PAGE //

/* FORM VALIDATION */

/* Salutation Validation */

$("#salutationCheck").hide();

function validateSalutation() {
    let salutValue = $("#salutation option:selected").val();
    if (salutValue < 1) {
        $("#salutationCheck").show();
        $("#salutation").addClass("error");
    } else {
        $("#salutationCheck").hide();
        $("#salutation").removeClass("error");
    }
}

/* Name Validation */

$("#fnameCheck").hide();
$("#lnameCheck").hide();

function validateFirstName() {
    if ($("#fnameInput").val().match("^[a-zA-Z]{3,16}$")) {
        $("#fnameCheck").hide();
        $("#fnameInput").removeClass("error");
    } else {
        $("#fnameCheck").show();
        $("#fnameInput").addClass("error");
    }
}

function validateLastName() {
    if ($("#lnameInput").val().match("^[a-zA-Z]{3,16}$")) {
        $("#lnameCheck").hide();
        $("#lnameInput").removeClass("error");
    } else {
        $("#lnameCheck").show();
        $("#lnameInput").addClass("error");
    }
}

/* Phone Number Validation */

$("#telCheck").hide();

function validateTel() {
    if (
        $("#telInput")
            .val()
            .match(/[0-9\-\(\)\s]+/)
    ) {
        $("#telCheck").hide();
        $("#telInput").removeClass("error");
    } else {
        $("#telCheck").show();
        $("#telInput").addClass("error");
    }
}

/* Email Validation */

$("#emailCheck").hide();

function validateEmail() {
    if (
        $("#emailInput")
            .val()
            .match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    ) {
        $("#emailCheck").hide();
        $("#emailInput").removeClass("error");
    } else {
        $("#emailCheck").show();
        $("#emailInput").addClass("error");
    }
}

/* Consent Validation */

$("#consentCheck").hide();

function validateConsent() {
    if ($("#consentBox input:checkbox:checked").length > 0) {
        $("#consentCheck").hide();
        $("#consent1, #consent2").removeClass("error");
    } else {
        $("#consentCheck").show();
        $("#consent1, #consent2").addClass("error");
    }
}

/* SUBMIT FORM BUTTON */

$(".form-btn").click(function () {
    validateSalutation();
    validateFirstName();
    validateLastName();
    validateTel();
    validateEmail();
    validateConsent();
});

/* Accordian */

const accordion = $(".faqContainer");

for (i = 0; i < accordion.length; i++) {
    $(accordion[i]).on("click", function () {
        this.classList.toggle("active");
    });
}

/* Address Scroll Animation */

$(window).scroll(function () {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 20
    ) {
        $(".address").fadeIn(2000).removeClass("hide").addClass("easeTop");
    } else {
        $(".address").fadeOut(500).removeClass("easeTop").addClass("hide");
    }
});

// ON ALL PAGES //

/* Login/ Signup/ Forget Password Modal */

$(".login-nav").click(function () {
    $(".overlay, .loginModal").removeClass("hide");
    $(".signupModal, .forgetPassModal").addClass("hide");
});

$(".signup-btn").click(function () {
    $(".loginModal").addClass("hide");
    $(".signupModal").removeClass("hide");
});

$(".closeModal-icon").click(function () {
    $(".overlay").addClass("hide");
});

$(".forgetPassword").click(function () {
    $(".loginModal").addClass("hide");
    $(".forgetPassModal").removeClass("hide");
});

$(".signupText").click(function () {
    $(".signupTerms").removeClass("hide");
});

$(".closeTerms-icon").click(function () {
    $(".signupTerms").addClass("hide");
});

/* Back to Top Button */

$("#topBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});

/* Current Year */

let currentYear = new Date().getUTCFullYear();
$("#currentYear-El").html(currentYear);
