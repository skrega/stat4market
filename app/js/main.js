$(function () {
    $('.dropdown-trigger').on('click', function () {
        $(this).toggleClass('open')
    });
    $('.btn-menu').on('click', function () {
        $(this).toggleClass('open')
        $('.header-col-nav').toggleClass('open')
        $('.background').toggleClass('open')
        $('body').toggleClass('open')
    });

    $('.background').on('click', function () {
        $(this).removeClass('open')
        $('.btn-menu').removeClass('open')
        $('.header-col-nav').removeClass('open')
        $('.background').removeClass('open')
        $('body').removeClass('open')
    });

    window.onclick = function (event) {
        if (!event.target.matches('.dropdown-trigger')) {
            var dropdowns = document.getElementsByClassName("dropdown-trigger");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('open')) {
                    openDropdown.classList.remove('open');
                }
            }
        }
    }
})