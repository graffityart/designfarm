import Link from "next/link";
export default function NotFound(){return <section className="page-hero"><div className="shell"><span className="eyebrow">404</span><h1>페이지를 찾을 수 없습니다.</h1><p>주소가 변경되었거나 존재하지 않는 페이지입니다.</p><Link className="button" href="/">메인으로 돌아가기</Link></div></section>}
