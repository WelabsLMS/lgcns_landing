import React from 'react'
import "../globals.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "LGCNSCAMP",
    description: "LGCNSCAMP",
    icons: {
        icon: "../public/assets/logo/cropped-logo-32x32.png",
    },
};

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            {children}
        </main>
    );
}
