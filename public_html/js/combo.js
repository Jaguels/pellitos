$("#formulario").validate({
    rules: {
        "txtNombre": {
            required: true
        },
        "txtEmail": {            required: true,
            email: true
        },
        "txtMovil": {
            required: true,
            tel:true
        },
        "cmbSede": "required"
    }, // --> Fin de reglas
    messages: {
        "txtNombre": {
            required: 'Ingrese nombre'
        },
        "txtEmail": {
            required: 'Ingrese un mail valido'
        },
        "txtMovil": {
            required: 'Ingrese un numero de telefono',
            tel:true
        },
        "cmbSede": 'Seleccione una sede'
    } //-->Fin de mensajes
});