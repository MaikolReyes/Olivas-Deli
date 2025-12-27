"use client";

import Script from "next/script";

export function GoogleAnalytics() {
    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-KT84G3LZWN"
                strategy="afterInteractive"
            />

            {/* Inicialización de Google Analytics */}
            <Script id="ga-init" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KT84G3LZWN');
        `}
            </Script>
        </>
    );
}
