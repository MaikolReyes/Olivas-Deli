"use client";
import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulación de envío
        setTimeout(() => {
            setLoading(false);
            alert("Mensaje enviado correctamente 💌");
        }, 1200);
    };

    return (
        <div className="max-w-2xl py-16 mx-auto bg-white p-6 rounded-2xl shadow-md" id="contacto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Contactanos
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
                Completá el formulario y te respondemos a la brevedad.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                </div>

                {/* Teléfono */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Teléfono (opcional)
                    </label>
                    <input
                        type="tel"
                        placeholder="11 1234 5678"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                </div>

                {/* Mensaje */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Mensaje
                    </label>
                    <textarea
                        required
                        rows={4}
                        placeholder="Escribí tu consulta..."
                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                </div>

                {/* Botón */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-primary py-3 text-white font-semibold hover:opacity-90 transition disabled:opacity-60 cursor-pointer"
                >
                    {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
            </form>
        </div>
    );
}
