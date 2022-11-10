const MobileMenu = () => {
    $(document).ready(function() {
        const menuButton = $('.js--menu-button');
        const menu = $('.js--menu');
        const body = $('body');
    
        menuButton.on('click', function() {
            menuButton.toggleClass('active');
            menu.slideToggle();
            body.toggleClass('overflow-hidden');
        });

        $(window).resize(function() {

            if($(window).width() < 1024) {
                menuButton.removeClass('active');
                body.removeClass('overflow-hidden');
                menu.slideUp();
            }


            if($(window).width() >= 1024) {
                menu.removeAttr('style');
            }
        });
    });

    
}

export default MobileMenu;