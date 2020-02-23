import './util/jquery_polyfill'

$('.al_header_setting').click(event => {
    $('.al_sidebar').addClass('al_sidebar_Active')
    $('body').addClass('al_no_scroll')
})

$('.al_sidebar_close,.al_sidebar_overlay').click(event => {
    $('.al_sidebar').removeClass('al_sidebar_Active')
    $('body').removeClass('al_no_scroll')
    event.stopPropagation()
})

$('.al_social_icon_cnt').click(event => {
    window.open($(event.target).attr('data_link'))
})