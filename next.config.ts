import type {NextConfig} from "next";

const nextConfig:NextConfig={
  async redirects(){return [{source:"/회사-소개",destination:"/company",permanent:true}]}
};
export default nextConfig;
