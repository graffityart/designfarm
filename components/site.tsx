import Image from "next/image";
import Link from "next/link";

const nav = [
  ["홈페이지제작", "/"], ["쇼핑몰제작", "/shopping-mall-production"],
  ["홈페이지유지보수", "/maintenance"], ["제작상담", "/production-inquiry"]
];

export function Header() {
  return <><div className="topline"/><header className="header"><div className="shell nav-wrap">
    <Link className="logo" href="/"><span>DF</span>디자인팜</Link>
    <nav className="desktop-nav">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
    <details className="mobile-nav"><summary aria-label="메뉴 열기"><i/><i/><i/></summary><nav>{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></details>
  </div></header></>;
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid"><div>
    <Link className="footer-logo" href="/">DESIGNFARM</Link>
    <p>목적에 맞는 웹사이트를 설계하고<br/>운영까지 함께 생각합니다.</p>
  </div><div><strong>바로가기</strong><Link href="/company">회사소개</Link><Link href="/privacy-policy">개인정보취급방침</Link><Link href="/production-inquiry">온라인문의</Link></div>
  <div><strong>디자인팜</strong><p>대표 김미향<br/>부산광역시 연제구 중앙대로 1221, 6층<br/>대구광역시 중구 태평로100, 3층<br/><a href="mailto:cs@designfarm.co.kr">cs@designfarm.co.kr</a></p></div>
  <div><strong>상담 안내</strong><a className="footer-phone" href="tel:15778741">1577-8741</a><p>평일 09:30–17:30<br/>점심·토·일·공휴일 제외</p></div></div>
  <div className="copyright shell">Copyright © 2026 디자인팜. All rights reserved.</div></footer>;
}

export function PageHero({eyebrow,title,description}:{eyebrow:string,title:string,description:string}) {
  return <section className="page-hero"><div className="shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p><Link className="button" href="/production-inquiry">제작 상담하기 <b>→</b></Link></div></section>;
}

export type Service = {mark:string,title:string,body:string};
export function ServiceGrid({items}:{items:Service[]}) { return <div className="service-grid">{items.map((x,i)=><article className="service-card" key={x.title}><div className="service-no">0{i+1}</div><span className="service-mark">{x.mark}</span><h3>{x.title}</h3><p>{x.body}</p></article>)}</div>; }

const portfolioNames=["다국어 교육 홈페이지","건축사무소 홈페이지","안전산업 기업 사이트","주류 브랜드 홈페이지","뷰티 브랜드 사이트","비영리단체 홈페이지","법률사무소 홈페이지","모바일 서비스 사이트","조경·설계 홈페이지","기업 홍보 홈페이지","예약형 서비스 사이트","브랜드 랜딩페이지"];
const files=["1-1","2-2","3-1","4-1","5-1","6","7","8","9","10","11","12"];
export function Portfolio({title="Selected Portfolio"}:{title?:string}) {return <section className="section portfolio"><div className="shell"><div className="section-head"><span className="eyebrow">PORTFOLIO</span><h2>{title}</h2><p>업종과 목표가 다른 프로젝트를 목적에 맞춰 설계했습니다.</p></div><div className="portfolio-grid">{files.map((f,i)=><figure key={f}><Image src={`/images/portfolio/${f}.webp`} alt={portfolioNames[i]} width={443} height={260} sizes="(max-width:700px) 100vw, (max-width:1000px) 50vw, 33vw"/><figcaption><b>{portfolioNames[i]}</b><span>Web design · Responsive</span></figcaption></figure>)}</div></div></section>}

export function ContactBand(){return <section className="contact-band"><div className="shell"><div><span className="eyebrow light">START A PROJECT</span><h2>필요한 웹사이트를 함께 이야기해 보세요.</h2><p>목적과 예산, 필요한 기능을 확인해 알맞은 제작 방향을 안내합니다.</p></div><div className="contact-actions"><a className="button white" href="tel:15778741">1577-8741</a><Link className="text-link" href="/production-inquiry">온라인 문의 →</Link></div></div></section>}
