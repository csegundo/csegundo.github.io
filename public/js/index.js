$(document).ready(function(){
    let _web_version = {
        v           : "v1.0.1",
        description : "Esta es la primera versión de csegundo.github.io"
    };

    $('body').find('.web-version').html(_web_version.v);

    $('.web-version').click(function(){
        var title = 'Información sobre la versión de la página';
        var popup = _popup.create($('body'), title, 'info-circle', ['close']);
        var content = 
        `<span>${_web_version.description}.<br><br>
        Cambios recientes realizados en la página web:</span><br>
        <ul>
            <li style="margin-left: 30px;">Creación de popups básicos</li>
            <li style="margin-left: 30px;">Creación de la barra de navegación</li>
        </ul>`;

        popup.html(content);
    });

    let _encoders = {
        base64  : function(encode, text){
            try{
                return encode ? btoa(text) : atob(text);
            } catch(error){
                return text;
            }
        },
        url     : function(encode, text){
            return encode ? encodeURIComponent(text) : decodeURIComponent(text);
        }
    };

    $('.btn-base64,.btn-url').click(function(){
        var btn     = $(this),
            action  = btn.data().action,
            type    = btn.data().type,
            text    = '';
        switch(action){
            case 'url'      : text = $('textarea[name=url-encode_decode]'); break;
            case 'base64'   : text = $('textarea[name=base64-encode_decode]'); break;
        }
        $(text).val(_encoders[`${action}`](type == 'encode', $(text).val()));
    });

    $('.bt-alert').click(function(){
        _alerts.create('Mensaje de prueba', 0);
    });
});