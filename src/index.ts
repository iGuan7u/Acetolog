import './util/jquery_polyfill.ts'

var $ = window.$

window.$('.al_header_setting').click(event => {
    $('.al_sidebar').addClass('al_sidebar_Active')
    $('body').addClass('al_no_scroll')
})

$('.al_sidebar_close,.al_sidebar_overlay').click(event => {
    $('.al_sidebar').removeClass('al_sidebar_Active')
    $('body').removeClass('al_no_scroll')
    event.stopPropagation()
})

$('.al_social_icon_cnt').click(event => {
    window.open($(event.target as Element).attr('data_link'))
})

$('.al_lightbox_cnt').click((event) => {
    $('.al_lightbox_cnt').removeClass('al_lightbox_cnt_Active')
    $('body').removeClass('al_no_scroll')
    event.stopPropagation()
})

$('#post-body img').click(((event) => {
    const imageDOM = event.target as HTMLImageElement
    if (!imageDOM) {
        return
    }
    $('.al_lightbox_cnt').addClass('al_lightbox_cnt_Active')
    $('body').addClass('al_no_scroll')
    $('.al_lightbox_img').attr('src', imageDOM.getAttribute('src'))
}))