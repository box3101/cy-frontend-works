import { Link } from "react-router-dom";
import { CardList } from "./comp/Card";

const About = () => {
  const portfolioData = [
    {
      id: "cy-tech-blog",
      link: "https://bit.ly/cyleeBlog", // 실제 Notion 블로그 링크로 변경 필요
      image: "/images/cy-blog-banner.png", // 블로그 배너 이미지 경로
      info: `(2022.01 ~ 현재) \n CY의 Tech Chronicles: 프론트엔드 개발 인사이트 공유
    • 팀원 대상 JavaScript 및 최신 SPA 프레임워크(Astro, React, Vue) 교육 자료 제공
  `,
      tags: ["# 프론트엔드", "# 웹개발", "# JavaScript", "# React", "# Vue", "Git ", "# 기술 블로그"],
      subtitle: "Personal Tech Blog",
      title: "CY's Tech Chronicles",
      description: "최신 웹 기술 트렌드와 개발 경험을 공유하는\n 프론트엔드 개발자의 기술 블로그"
    },
    {
      id: "incheon-city",
      link: "https://www.incheon.go.kr/index", // 실제 인천광역시 웹사이트 링크
      image: "/images/pt-incheon-city.png", // 인천광역시 프로젝트 이미지 경로로 변경 필요
      info: `  (2020.01 ~ 2023.12) \n 인천광역시 웹사이트 및 패밀리 사이트 제작 및  유지보수 
    • 2021.03 웹 접근성 마크 획득
    • 2021.10 행정안전부 품질관리 수준평가 우수평가
      (웹 접근성, 웹 호환성, 웹 편의성, 웹 접속성 부문)
    • 2022.03 웹 접근성 마크 갱신
  `,
      tags: ["# 공공기관 웹사이트", "# 웹 접근성", "# 품질관리 우수평가", "# 장기 프로젝트"],
      subtitle: "Public Sector Web Development",
      title: "인천광역시 웹사이트",
      description: "3년간의 지속적인 개선과 유지보수\n 웹 접근성 및 사용자 경험 최적화"
    },
    {
      id: "korean-bank-evaluation",
      link: "https://box3101.github.io/BankofKorea/dist/guide/guide.html",
      image: "/images/pt-koreaBank.jpg",
      info: "  (2023.07 - 2024.01) \n 한국은행의 직원평가시스템을 [ 기획 - 디자인 - 개발 ] 올인원으로 빌드업한 사례입니다. \n Astro 프레임워크를 사용하여 개발 효율성을 높임",
      tags: ["Astro 프레임워크 사용", "# 적응형", "# 웹 접근성", "# 인터렉션", "# IT SAAS"],
      subtitle: "Employee Evaluation System",
      title: "한국은행 직원평가시스템",
      description: "체계적이고 공정한 직원 평가를 위한\n데이터 기반 평가 관리 시스템"
    },
    {
      id: "incheon-jung-gu-edu",
      link: "https://github.com/box3101/AstroProject",
      image: "/images/incheon-jung-gu-edu.jpg",
      info: ` (2022.10 - 2023.03) \n 인천광역시 중구청 평생교육포털의 \n Front 및 관리자화면 UI 개발을 담당했습니다. 
• gulp 대신 Astro 프레임워크를 사용하여 개발 효율성을 높였으며, 
• 2021.03 웹 접근성 마크 획득`,
      tags: ["# Astro 프레임워크", "# 반응형", "# 웹 접근성", "# 인터랙티브", "# Front-end 개발"],
      subtitle: "Lifelong Education Portal",
      title: "인천광역시 중구청 평생교육포털",
      description: "효율적이고 접근성 높은 평생교육 정보 제공을 위한\n최신 기술 기반의 포털 사이트 개발",
      additionalInfo: {
        period: "2022.12 ~ 2023.03",
        gitUrl: "https://github.com/box3101/AstroProject",
        operationUrl: "https://edu.icjg.go.kr/",
        developmentUrl: "https://leechanyong.netlify.app/"
      }
    },
    {
      id: "g4b-business-support",
      link: "https://box3101.github.io/g4b/assets/guide/guide.html",
      image: "/images/g4b-business-support.svg",
      info: `(2022.04 ~ 2022.07) \n G4b 기업지원 플러스 리뉴얼 작업을 수행했습니다. 
    Front 화면단 작업을 담당, 
    • 2021.03 웹 접근성 마크 획득`,
      tags: ["# 반응형", "# 인터랙티브", "# 웹 접근성", "# Astro 프레임워크", "# 리뉴얼"],
      subtitle: "Business Support Platform",
      title: "G4b 기업지원 플러스",
      description: "기업 지원 서비스의 효율성과 접근성을 높인\n종합 지원 플랫폼 리뉴얼",
      additionalInfo: {
        period: "2022.04 ~ 2022.07",
        gitUrl: "https://github.com/box3101/AstroProject",
        operationUrl: "https://edu.icjg.go.kr/",
        developmentUrl: "https://leechanyong.netlify.app/"
      }
    },
    {
      id: "ict-ksa-system",
      link: "https://rnd.tta.or.kr/user/main/main/main",
      image: "/images/ict-ksa-system.png",
      info: `(2022.07 - 2022.11) \n ICT 한국표준협회 성과관리 시스템의 Front 화면단 작업을 담당. 
    반응형 웹 디자인과 인터랙티브한 사용자 경험을 구현하여 
    효율적인 성과관리 시스템을 개발.`,
      tags: ["# 반응형", "# 인터랙티브", "# 성과관리 시스템", "# Front-end 개발"],
      subtitle: "Performance Management System",
      title: "ICT 한국표준협회 시스템",
      description: "ICT 산업 표준화를 위한 효율적인\n성과관리 시스템 개발",
      additionalInfo: {
        period: "2022.07 ~ 진행중",
        status: "개발 진행 중"
      }
    },
    {
      id: "samsung-sdi-gsop",
      link: "https://cylee-blog.notion.site/SDI-308c97bcb9894e71818e3dcd48dda889",
      image: "/images/samsung-sdi-gsop.png",
      info: `(2023.02 - 2023.08) \n 삼성 SDI의 GSOP(Global Standard Operation Procedure) \n 시스템 개발 프로젝트에서 
    Admin 화면단 작업을 담당했습니다. `,
      tags: ["# 적응형", "# Admin 개발", "# 시스템 커스터마이징", "# 기업 솔루션", "# 각 색 테마적용"],
      subtitle: "Enterprise System Development",
      title: "삼성 SDI (GSOP 시스템 개발)",
      description: "글로벌 표준 운영 절차를 위한\n맞춤형 관리자 시스템 개발",
      additionalInfo: {
        period: "2022.08 ~ 2022.11",
        role: "Admin 화면단 개발",
        features: "기존 솔루션 커스터마이징"
      }
    }
  ];
  return (
    <div className='history-section'>
      <Link to='/' className='history-close hover-target' />
      <div className='container'>
        <div className='col-12 text-center' data-aos='fade-up'>
          <h3>Portfolio</h3>
        </div>
        <div class='col-12 mt-3 mb-5 text-center'>
          <p>
            <span>Following your request, i always do my Best!</span>
          </p>
        </div>
        <div className='portfolio-container'>
          <CardList cards={portfolioData} />
        </div>
      </div>
    </div>
  );
};

export default About;
