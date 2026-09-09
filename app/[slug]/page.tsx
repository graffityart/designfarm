import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {ContactBand,PageHero} from "@/components/site";

const companySlug="company";
const legacySlug=encodeURIComponent("회사-소개");
const isCompany=(slug:string)=>slug===companySlug||slug.toUpperCase()===legacySlug;
export function generateStaticParams(){return [{slug:companySlug}]}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;if(!isCompany(slug))return {};
 return {title:"회사 소개",description:"목적에 맞는 웹사이트를 설계하고 운영까지 함께 생각하는 디자인팜입니다.",alternates:{canonical:"/company"}};
}
const process=[['01','상담 접수','업종, 목적과 필요한 기능을 확인합니다.'],['02','구성 제안','페이지 구조와 제작 방향을 정리합니다.'],['03','디자인 제작','브랜드 분위기에 맞는 화면을 구성합니다.'],['04','오픈 및 관리','최종 점검 후 운영과 유지보수를 지원합니다.']];
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!isCompany(slug))notFound();return <><PageHero eyebrow="ABOUT DESIGNFARM" title="기업의 첫인상을 만드는 실용적인 웹사이트 파트너" description="단순히 보기 좋은 화면에서 멈추지 않고, 방문자가 필요한 정보를 찾고 상담과 구매로 이어지는 구조를 설계합니다."/><section className="content-section"><div className="shell split"><div className="copy"><span className="eyebrow">OUR STANDARD</span><h2>목적과 운영을 함께 봅니다.</h2><p>디자인팜은 홈페이지와 쇼핑몰 제작, 유지보수와 웹사이트 수정을 중심으로 기업과 브랜드가 온라인에서 정보를 안정적으로 전달하도록 돕습니다.</p><div className="feature-list"><div><b>목적 중심 설계</b><span>업종, 서비스와 고객 흐름을 먼저 파악합니다.</span></div><div><b>반응형 화면</b><span>PC, 모바일, 태블릿에서 안정적으로 보이도록 구성합니다.</span></div><div><b>운영 편의성</b><span>제작 후 수정과 관리가 쉽도록 안내합니다.</span></div></div></div><div className="stat-card"><b>20+</b><h3>Years of experience</h3><p>2006년부터 다양한 업종의 웹사이트를 제작하고 관리해 왔습니다.</p></div></div></section><section className="content-section alt"><div className="shell"><div className="section-head"><span className="eyebrow">PROCESS</span><h2>상담부터 오픈 후 관리까지</h2><p>진행 단계를 분명하게 공유하며 프로젝트를 완성합니다.</p></div><div className="process-grid">{process.map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section><ContactBand/></>}
