import Accordion from "../components/Accordion";

export default function Questions() {
    const faqItems = [
        {
            title: "Políticas de devolución",
            content: (
                <>
                    <p>
                        Todos nuestros productos de pastelería son artesanales y, al tratarse de alimentos, no se aceptan cambios ni devoluciones. Ya que se producen a pedido.
                    </p>
                    <p>
                        En caso de que tengas un error en tu pedido escribinos para encontrar una solución lo antes posible.
                    </p>
                    <p>
                        Los artículos comestibles sólo podrán ser devueltos en el caso que se encontraré con algún problema en su interior que atente contra la salubridad y la salud de las personas. Por ejemplo, de encontrarse el artículo abierto, roto, abollado, desparramado o que se note que ha sido manipulado y que pueda haber sido contaminado por algún agente externo. Por ningún motivo se aceptará la devolución de artículos comestibles para cambios por otra mercadería ni para devolución del dinero por arrepentimiento de compra.
                    </p>
                    <p>
                        El costo del envío de mercadería para devoluciones corre por cuenta del comprador. Este se hará cargo de cualquier gasto de logística implicado para enviar el/los artículos a devolver.
                    </p>
                </>
            ),
        },
        {
            title: "Zonas de entrega",
            content: (
                <p>
                    Realizamos entregas en CABA y zonas cercanas. Consultar barrios
                    específicos antes de realizar el pedido.
                </p>
            ),
        },
        {
            title: "Horario de entrega",
            content: (
                <p>
                    Las entregas se realizan en franjas horarias acordadas previamente.
                </p>
            ),
        },
        {
            title: "Condiciones / formalidades en las entregas",
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Manejamos un margen de hasta 2 horas por imprevistos.</li>
                    <li>Debe haber alguien disponible para recibir el pedido.</li>
                    <li>Tiempo de espera máximo del chofer: 15 minutos.</li>
                    <li>
                        En microcentro y zonas complicadas, elegir una dirección accesible.
                    </li>
                </ul>
            ),
        },
        {
            title: "¿Con cuánta anticipación debo hacer mi pedido?",
            content: (
                <>
                    <p>Depende del producto:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Macarons y alfajores: el mismo día.</li>
                        <li>Productos en stock: mínimo 24 hs hábiles.</li>
                        <li>
                            Tortas: <strong>48 hs hábiles de producción.</strong>
                        </li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <main className="p-6">
            <Accordion items={faqItems} />
        </main>
    );
}
