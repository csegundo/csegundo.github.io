let _popup = {
    popup_element: '',
    close_msg: 'Cerrar',

    create: function(wrapper, title, icon){
        var popup_main = `<div class="popup"></div>`,
            popup_content = `<div class="popup-content"></div>`,
            popup_header =
            `<div class="popup-header">
                <span class="title">${title}</span>
                <span class="popup-close" title="${_popup.close_msg}"><i class="fa fa-${icon}"></i></span>
            </div>`,
            popup_body = `<div class="popup-body"></div>`,
            popup_footer =
            `<div class="popup-actions">
                <button class="btn btn-danger btn-sm btn-close_popup"><i class="fa fa-times "></i>${_popup.close_msg}</button>
            </div>`;

        // put popup HTML
        wrapper.append(popup_main);
        $('.popup').html(popup_content);
        $('.popup-content').html(popup_header);
        $('.popup-content').append(popup_body);
        $('.popup-content').append(popup_footer);

        // close action
        _popup.popup_element = wrapper.find('.popup');
        _popup.popup_element.on('click', '.popup-close,.btn-close_popup', function(){
            _popup.close(_popup.popup_element);
        });

        return _popup.popup_element;
    },

    close: function(wrapper){
        _popup.popup_element.remove();
    }
};