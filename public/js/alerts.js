let _alerts = {

    /**
     * 
     * @param {mensaje de la alerta} message 
     * @param {0 (success), 1 (error), 2 (warning), null (default)} type 
     */
    create: function(message, type){
        switch(type){
            case 0: type = 'success'; break;
            case 3: type = 'error'; break;
            case 2: type = 'warning'; break;
            default: type = 'default'; break;
        }

        var alert = $(`<div class="slide-alert ${type}">${message}</div>`);
        $('body').append(alert);
        $(alert).animate({
            // right : '10px',
            // right : '-10px'
            // right : '-200px'
            opacity : '0'
        }, 3000, null, function(){
            $(alert).remove();
        });
    }
};