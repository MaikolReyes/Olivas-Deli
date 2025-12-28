"use client";
import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const whatsappNumber = "5491123963021"; // 👈 TU NÚMERO

        const text = `
Hola! 👋
Quiero hacer una consulta desde la web.

🧑 Nombre: ${form.name}
📧 Email: ${form.email}
📞 Teléfono: ${form.phone || "No informado"}

💬 Mensaje:
${form.message}
    `;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            text
        )}`;

        window.open(url, "_blank");
        setLoading(false);
    };

    return (
        <div
            className="max-w-2xl py-16 mx-auto bg-white p-6 rounded-2xl shadow-md"
            id="contacto"
        >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Contactanos
            </h2>
            <p className="text-gray-500 mb-6 text-sm font-secondary">
                Completá el formulario y te respondemos a la brevedad.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Tu nombre"
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg border px-4 py-2 border-gray-300"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="tu@email.com"
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg border px-4 py-2 border-gray-300"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Teléfono (opcional)
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="11 1234 5678"
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg border px-4 py-2 border-gray-300"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Mensaje
                    </label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Escribí tu consulta..."
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg border px-4 py-2 border-gray-300"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-[#3a1d35] py-3 text-white font-semibold hover:opacity-90 transition"
                >
                    {loading ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
                </button>
            </form>
        </div>
    );
}
