module.exports = function() {
    var data = {
        prendas: 
        [
            {
                id:1,
                nombrePrenda: "Pantalon",
                colorPrenda: "Rojo",
                disenioPrenda: "Entallados"
            },
            {
                id:2,
                nombrePrenda: "Camisa",
                colorPrenda: "Azul",
                disenioPrenda: "Rayado"
            },
            {
                id:3,
                nombrePrenda: "Polo",
                colorPrenda: "Negro",
                disenioPrenda: "Colorido"
            },
            {
                id:4,
                nombrePrenda: "Medias",
                colorPrenda: "Gris",
                disenioPrenda: "Animado"
            }
        ],
        marcas:
        [
            {
                id:1,
                nombreMarca:"Billabong"

            },
            {
                id:2,
                nombreMarca:"John Holden"
            },
            {
                id:3,
                nombreMarca:"Index"
            },
            {
                id:4,
                nombreMarca:"Marc Lewis"
            }

        ],
        tallas:
        [
            {
                id:1,
                letraTalla: "Small"

            },
            {
                id:2,
                letraTalla: "Medium"
            }
        ],
        clientes:
        [
            {
                id:1,
                nombreCliente:"Jesus",
                apellidoCliente:"Salazar",
                correo:"jesus213@outlook.com",
                telefono: 921368451,
                direccionCliente: "Av aviacion 123"
            }
        ],
        tiendas:
        [
            {
                id:1,
                nombreTienda: "Ripley",
                direccionTienda: "Surco 293",
                correo: "Ripley@empresarial.net",
                telefono:925786512
            }
        ]
    }
    return data
}