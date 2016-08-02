 $.fn.scrollToView = function () {
    return $.each(this, function () {
        if ($(this).position().top < 0 ||
            $(this).position().top + $(this).height() > $(this).parent().height()) {
            $(this).parent().animate({
                scrollTop: $(this).parent().scrollTop() + $(this).position().top
            }, {
                duration: 300,
                queue: false
            });
        }
    });
};