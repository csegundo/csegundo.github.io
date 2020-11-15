$(document).ready(function(){
    let _web_version = {
        v           : "v1.0",
        description : "Esta es la primera versión de csegundo.github.io"
    };

    $('body').find('.web-version').html(_web_version.v);

    $('.web-version').click(function(){
        var title = 'Información sobre la versión de la página';
        var popup = _popup.create($('body'), title, 'info-circle');
        var content = 
        `<span>${_web_version.description}.<br><br>
        Cambios recientes realizados en la página web:</span><br>
        <ul>
            <li style="margin-left: 30px;">Creación de popups básicos</li>
            <li style="margin-left: 30px;">Creación de la barra de navegación</li>
        </ul>`;

        popup.html(content);
    });
});