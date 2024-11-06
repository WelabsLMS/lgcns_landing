import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/Header";
import ScrollToTop from "@/components/ui/ScrollToTop";
import KaKaoNav from "@/components/ui/KaKaoNav";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const mkFont = localFont({
//   src: [
//     {
//       path: "./fonts/mk-regular.woff",
//       weight: "400",
//     },
//     {
//       path: "./fonts/mk-bold.woff",
//       weight: "700",
//     }
//   ]
// });

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
  title: "LG CNS AM Inspire Camp",
  description: "LG CNS AM Inspire Camp ",
  icons: {
    icon: "../public/assets/logo/cropped-logo-32x32.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://lgcnscmap.kr/",
    title: "LG CNS AM Inspire Camp",
    siteName: "LG CNS AM Inspire Camp",
    description : "LG CNS의 SW, AM(Application Modernization) 인재 육성 노하우를 그대로 적용한 LG CNS AM 전문가 양성과정",
    images: [
      {
        url: "https://lgcnscmap.kr/assets/logo/lgcns_og.png",
        width: 32,
        height: 32,
        alt: "LG CNS AM Inspire Camp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kor" className="scroll-smooth">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${lgFont.className} antialiased`}
      >
        <Header />
        <KaKaoNav />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
