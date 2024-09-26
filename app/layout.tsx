import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

const mkFont = localFont({
  src: [
    {
      path: "./fonts/mk-regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/mk-bold.woff",
      weight: "700",
    }
  ]
});

const lgFont = localFont({
  src: [
    {
      path: "./fonts/LGEIText-Regular.otf",
      weight: "500",
    },
    {
      path: "./fonts/LGEIText-SemiBold.otf",
      weight: "600",
    },
    {
      path: "./fonts/LGEIText-Light.otf",
      weight: "400",
    },
    {
      path: "./fonts/LGEIText-Bold.otf",
      weight: "700",
    }
  ]
})


export const metadata: Metadata = {
  title: "LGCNSCAMP",
  description: "LGCNSCAMP",
  icons: {
    icon: "../public/assets/logo/cropped-logo-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${lgFont.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
