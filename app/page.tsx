import Image from "next/image";
import Link from "next/link";
import {ContactBand,Portfolio,ServiceGrid} from "@/components/site";

const services=[
 {mark:"WEB",title:"기업 홈페이지 제작",body:"업종과 고객 흐름을 반영해 기업의 강점을 분명하게 전달합니다."},
 {mark:"SHOP",title:"쇼핑몰 제작",body:"상품 탐색부터 주문과 결제까지 구매 흐름을 편리하게 설계합니다."},
 {mark:"CARE",title:"수정·유지보수",body:"문구와 이미지 수정, 오류 점검과 정기 관리를 지원합니다."},
 {mark:"GROW",title:"검색·홍보 구조",body:"검색 유입과 광고 전환을 고려한 콘텐츠 구조를 제안합니다."}
];
export default function Home(){return <>
 <section className="home-hero"><Image src="/images/hero.webp" alt="웹사이트 제작 작업 공간" fill priority sizes="100vw"/><div className="hero-overlay"/><div className="shell hero-copy"><span className="eyebrow light">DESIGN WITH PURPOSE</span><h1>보기 좋은 화면을 넘어,<br/><em>성과로 이어지는 웹사이트</em></h1><p>2006년부터 축적한 경험으로 브랜드의 목적과 고객의 흐름을 함께 설계합니다.</p><div><Link className="button" href="/production-inquiry">프로젝트 문의 <b>→</b></Link><Link className="ghost-button" href="#portfolio">포트폴리오 보기</Link></div></div></section>
 <section className="trust-strip"><div className="shell"><span><b>20+</b> Years Experience</span><span><b>1,000+</b> Projects</span><span><b>Responsive</b> PC · Mobile · Tablet</span></div></section>
 <section className="section services"><div className="shell"><div className="section-head left"><span className="eyebrow">OUR SERVICES</span><h2>사업에 필요한 웹사이트를<br/>한 번에 설계합니다.</h2><p>기획, 디자인, 구축 그리고 운영 이후의 관리까지 연결합니다.</p></div><ServiceGrid items={services}/></div></section>
 <div id="portfolio"><Portfolio title="선택받은 웹사이트 디자인"/></div><ContactBand/>
 </>}
