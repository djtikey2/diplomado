const autos = {
    toyota: {
        vagoneta: { motor: '2.0L', traccion: '4x2', caja: 'Automática', version: '2022', velocidad: 180, imagen: 'img/toyota_vagoneta.jpg' },
        camioneta: { motor: '2.8L', traccion: '4x4', caja: 'Manual', version: '2023', velocidad: 200, imagen: 'img/toyota_camioneta.jpg' },
        suv: { motor: '2.5L', traccion: 'AWD', caja: 'Automática', version: '2021', velocidad: 190, imagen: 'img/toyota_suv.jpg' },
    },
    nissan: {
        vagoneta: { motor: '1.8L', traccion: '4x2', caja: 'Automática', version: '2020', velocidad: 170, imagen: 'img/nissan_vagoneta.jpg' },
        camioneta: { motor: '3.0L', traccion: '4x4', caja: 'Manual', version: '2022', velocidad: 210, imagen: 'img/nissan_camioneta.jpg' },
        suv: { motor: '2.4L', traccion: 'AWD', caja: 'Automática', version: '2021', velocidad: 195, imagen: 'img/nissan_suv.jpg' },
    },
    kia: {
        vagoneta: { motor: '1.6L', traccion: '4x2', caja: 'Automática', version: '2022', velocidad: 160, imagen: 'img/kia_vagoneta.jpg' },
        camioneta: { motor: '2.7L', traccion: '4x4', caja: 'Manual', version: '2023', velocidad: 180, imagen: 'img/kia_camioneta.jpg' },
        suv: { motor: '2.0L', traccion: 'AWD', caja: 'Automática', version: '2021', velocidad: 185, imagen: 'img/kia_suv.jpg' },
    },
};

function actualizarDatos(autoNumero) {
    const marca = document.getElementById(`marca${autoNumero}`).value;
    const tipo = document.getElementById(`tipo${autoNumero}`).value;
    const datosAuto = autos[marca][tipo];

    document.getElementById(`motor${autoNumero}`).textContent = datosAuto.motor;
    document.getElementById(`traccion${autoNumero}`).textContent = datosAuto.traccion;
    document.getElementById(`caja${autoNumero}`).textContent = datosAuto.caja;
    document.getElementById(`version${autoNumero}`).textContent = datosAuto.version;
    document.getElementById(`velocidad${autoNumero}`).textContent = datosAuto.velocidad;
    document.getElementById(`imagen${autoNumero}`).src = datosAuto.imagen;
}
