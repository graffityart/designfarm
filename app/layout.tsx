import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://designfarm.co.kr"),
  title: {default:"홈페이지 제작 전문 디자인팜",template:"%s | 디자인팜"},
  description:"기업 홈페이지, 쇼핑몰 제작, 반응형 웹사이트와 유지보수를 지원하는 디자인팜입니다.",
  alternates:{canonical:"/"}, openGraph:{type:"website",locale:"ko_KR",siteName:"디자인팜",images:["/images/hero.webp"]}
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><Header/><main>{children}</main><Footer/></body></html>}
