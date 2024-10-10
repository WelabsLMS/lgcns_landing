import React from 'react'
import "../globals.css";
import localFont from "next/font/local";

const lgFont = localFont({
    src: [
        {
            path: "../fonts/LGEIText-Regular.otf",
            weight: "500",
        },
        {
            path: "../fonts/LGEIText-SemiBold.otf",
            weight: "600",
        },
        {
            path: "../fonts/LGEIText-Light.otf",
            weight: "400",
        },
        {
            path: "../fonts/LGEIText-Bold.otf",
            weight: "700",
        }
    ]
})

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kor" className="scroll-smooth">
            <body
                className={`${lgFont.className} antialiased z-[1000]`}
            >
                {children}
            </body>
        </html>
    );
}
