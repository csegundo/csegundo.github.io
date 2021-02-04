let _popup = {
    popup_element   : '',
    close_msg       : 'Cerrar',
    accept_msg      : 'Aceptar',
    update_msg      : 'Actualizar',

    create: function(wrapper, title, icon, actions){
        if(icon)
            icon = `<i class="fa fa-${icon}"></i> `;
        else icon = '';

        var btns = '';
        $.each(actions, function(i, action){
            switch(action){
                case 'close'    :
                    btns += `<button class="btn btn-danger btn-sm btn-close_popup"><i class="fa fa-times"></i> ${_popup.close_msg}</button>`; break;
                case 'accept'   :
                    btns += `<button class="btn btn-success btn-sm btn-accept"><i class="fa fa-check"></i> ${_popup.accept_msg}</button>`; break;
                case 'update'   :
                    btns += `<button class="btn btn-info btn-sm btn-update"><i class="fa fa-arrow-up"></i> ${_popup.update_msg}</button>`; break;
                default         :
                btns += `<button class="btn btn-primary btn-sm btn-${action}"><i class="fa fa-times"></i> ${action}</button>`; break;
            }
        });

        var popup_main = `<div class="popup"></div>`,
            popup_content = `<div class="popup-content"></div>`,
            popup_header =
            `<div class="popup-header">
                <span class="title">${icon}${title}</span>
                <span class="popup-close" title="${_popup.close_msg}"><i class="fa fa-times"></i></span>
            </div>`,
            popup_body = `<div class="popup-body"></div>`,
            popup_footer =
            `<div class="popup-actions">
                ${btns}
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

        return _popup.popup_element.find('.popup-body');
    },

    close: function(wrapper){
        wrapper.remove();
    }
};