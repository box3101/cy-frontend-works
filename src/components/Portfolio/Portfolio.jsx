import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardList } from "./comp/Card";

const About = () => {
  const [activeTab, setActiveTab] = useState("all");
  const portfolioData = [
    {
      category: "publisher",
      id: "cy-tech-blog",
      link: "https://bit.ly/cyleeBlog", // 실제 Notion 블로그 링크로 변경 필요
      image: "/images/cy-blog-banner.png", // 블로그 배너 이미지 경로
      info: `(2022.01 ~ 현재) \n Cy의 Tech Chronicles: 프론트엔드 개발 인사이트 공유
    • 팀원 대상 JavaScript 및 \n 최신 SPA 프레임워크(Astro, React, Vue) 교육 자료 제공
  `,
      tags: ["# 프론트엔드", "# 웹개발", "# JavaScript", "# React", "# Vue", "Git ", "# 기술 블로그"],
      subtitle: "Personal Tech Blog",
      title: "CY's Tech Chronicles",
      description: "최신 웹 기술 트렌드와 개발 경험을 공유하는\n 기술 블로그"
    },
    {
      category: "publisher",
      id: "incheon-city",
      link: "https://www.incheon.go.kr/index", // 실제 인천광역시 웹사이트 링크
      image: "/images/pt-incheon-city.png", // 인천광역시 프로젝트 이미지 경로로 변경 필요
      info: `  (2020.01 ~ 2022.12) \n 인천광역시 웹사이트 및 패밀리 사이트 제작 및  유지보수 
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
      category: "publisher",
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
      category: "publisher",
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
      category: "publisher",
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
      category: "publisher",
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
      category: "publisher",
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
    },
    {
      id: "react-portfolio",
      category: "react",
      link: "https://chanyong.netlify.app/",
      image: "/images/react-portfolio.png",
      info: `(2024.08 - 현재) \n React를 이용한 개인 포트폴리오 웹사이트 개발
      • Vite를 사용한 빠른 개발 환경 구축
      • React Router를 통한 SPA 구현
      • AOS를 활용한 스크롤 애니메이션 효과
      • Framer Motion을 이용한 부드러운 전환 효과`,
      tags: ["# React", "# Vite", "# React Router", "# AOS", "# Framer Motion", "# Netlify"],
      subtitle: "Personal Portfolio Website",
      title: "개인 React Portfolio",
      description: "최신 React 기술을 활용한\n반응형 개인 포트폴리오 웹사이트"
    },
    {
      category: "react",
      id: "okr-solution-development",
      link: "ready", // 준비중 페이지 링크
      image: "/images/okr-solution-development.png", // 성과관리 OKR 솔루션 이미지 경로
      info: `(2024.06 - 현재) \n 성과관리 OKR 솔루션 개발 프로젝트
        • React와 Ant Design을 활용한 사용자 중심의 UI/UX 개발
        • Ant Design 기반의 커스텀 컴포넌트 개발로 일관성 있는 디자인 적용
        • Storybook을 활용한 컴포넌트 개발 및 문서화
        `,
      tags: ["# React", "# Ant Design", "# Storybook", "# UI/UX", "# 컴포넌트 기반 아키텍처"],
      subtitle: "OKR Solution Development",
      title: "성과관리 OKR 솔루션 개발",
      description:
        "재사용 가능한 컴포넌트 라이브러리 구축으로 개발 생산성 향상\nStorybook을 통한 시각적 테스트로 QA 시간 단축"
    },
    {
      category: "react",
      id: "animal-flash-cards",
      link: "https://github.com/box3101/AnimalCards/",
      image: "/images/react-portfolio.png",
      info: `(2023.06.03 - 2023.06.16) \n 아이를 위한 동물 플래시 카드 웹 애플리케이션 개발
        • React를 활용한 컴포넌트 기반 설계 및 상태 관리 구현
        • 동물 이미지, 이름, 소리를 포함한 인터랙티브 플래시카드 구현
        • 이미지 로딩 최적화로 사용자 경험 향상
        • 다국어(한국어, 영어) 지원 기능 추가
        • 동물 종류에 따른 카테고리화 구현
        `,
      tags: ["# React", "# 컴포넌트 기반 설계", "# 상태 관리", "# 사용자 경험", "# 다국어 지원", "# 교육용 앱"],
      subtitle: "toy project",
      title: "동물 플래시 카드",
      description: "React 학습 경험을 실제 프로젝트에 적용한 교육용 웹 애플리케이션\n아이들의 동물 학습을 위한 인터랙티브 플래시카드 시스템"
    },    
    {
      category: "vue",
      id: "company-portfolio-landing",
      link: "https://포켓컴퍼니.com/portfolio", // Replace with actual landing page link
      image: "/images/company-portfolio-landing.svg",
      info: `(2024.02 - 2024.06) \n 자사 서비스 포트폴리오 및 랜딩 페이지 개발
        • Vue.js를 활용한 동적 UI 개발
        • 사용자 반응형 웹 페이지 구현
        `,
      tags: ["# Vue.js", "# 브랜딩", "# 랜딩 페이지", "# 컴포넌트 기반 아키텍처"],
      subtitle: "Portfolio and Landing Page Development",
      title: "자사 서비스 포트폴리오 및 \n  랜딩 페이지",
      description: "효율적이고 반응형인 포트폴리오 및 랜딩 페이지 개발"
    },
    {
      category: "vue",
      id: "crm-pocket-camp-frontend",
      link: "https://www.xn--9i1b674cwc38r6pa.com/camp/list", // Replace with actual CRM Pocket Camp link
      image: "/images/company-portfolio-landing.svg",
      info: `(2024.02 - 2024.06) \n 자사 CRM 포켓캠프 프론트엔드 개발
        • 포켓강의 및 교육용 동영상 스트리밍 서비스 개발
        • Vue.js를 활용한 싱글 페이지 애플리케이션(SPA) 구현
        • 비디오 플랫폼 인터페이스 구축`,
      tags: ["# Vue.js", "# 비디오 스트리밍", "# SPA", "# 사용자 경험"],
      subtitle: "CRM Pocket Camp Frontend Development",
      title: "자사 CRM 포켓캠프 프론트엔드",
      description: "상시 접근 가능한 교육 콘텐츠 제공"
    },
    {
      category: "javascript",
      id: "event-loop-visualization",
      link: "../javascript/browser-work", 
      image: "/images/react-portfolio.png",
      info: `JavaScript 이벤트 루프 시각화 웹 애플리케이션
        • 콜 스택, 콜백 큐, 출력을 시각적으로 표현
      `,
      tags: ["# JavaScript", "# 이벤트 루프", "# 비동기 프로그래밍", "# Web API", "# 교육용 도구"],
      subtitle: "Interactive Event Loop Demonstration",
      title: "JavaScript 이벤트 루프 시각화",
      description: "JavaScript의 이벤트 루프 메커니즘을 이해할 수 있게 시각화"
    },
    {
      category: "javascript",
      id: "promise-visualization",
      link: "../javascript/promise-visualization", 
      image: "/images/react-portfolio.png",
      info: `JavaScript Promise 시각화 웹 애플리케이션
        • Promise의 상태 변화와 처리 과정을 시각적으로 표현
      `,
      tags: ["# JavaScript", "# Promise", "# 비동기 프로그래밍", "# 시각화", "# 교육용 도구"],
      subtitle: "Interactive Promise Mechanism Demonstration",
      title: "JavaScript Promise 시각화",
      description: "JavaScript의 Promise 작동 방식을 이해할 수 있게 시각화"
    },
    {
      category: "javascript",
      id: "async-await-visualization",
      link: "../javascript/await-async",
      image: "/images/react-portfolio.png",
      info: `JavaScript Async/Await 시각화 웹 애플리케이션
        • Async/Await의 실행 흐름과 처리 과정을 시각적으로 표현
        • 비동기 작업의 순차적 실행을 막대 차트로 표시`,
      tags: ["# JavaScript", "# Async/Await", "# 비동기 프로그래밍", "# 시각화", "# 교육용 도구"],
      subtitle: "Interactive Async/Await Mechanism Demonstration",
      title: "JavaScript Async/Await 시각화",
      description: "JavaScript의 Async/Await 작동 방식을 이해할 수 있게 시각화한 도구"
    }
  ];

  const categorizedData = {
    all: portfolioData,
    react: portfolioData.filter(project => project.category === "react"),
    vue: portfolioData.filter(project => project.category === "vue"),
    // javascript : portfolioData.filter(project => project.category === "javascript"),
  };

  return (
    <div className='history-section'>
      <Link to='/' className='history-close hover-target' />
      <div className='container'>
        <div className='col-12 text-center' data-aos='fade-up'>
          <h3>Portfolio</h3>
        </div>
        <div className='col-12 mt-3 mb-5 text-center'>
          <p>
            <span>Following your request, I always do my Best!</span>
          </p>
        </div>
        <div className='brand-btn-group'>
          <button className={activeTab === "all" ? "is-active" : "brand-btn"} onClick={() => setActiveTab("all")}>
            All
          </button>
          {/* <button className={activeTab === "react" ? "is-active" : "brand-btn"} onClick={() => setActiveTab("react")}>
            React
          </button>
          <button className={activeTab === "vue" ? "is-active" : "brand-btn"} onClick={() => setActiveTab("vue")}>
            Vue
          </button> */}
          {/* <button className={activeTab === "javascript" ? "is-active" : "brand-btn"} onClick={() => setActiveTab("javascript")}>
            JavaScript + (Es6+)
          </button> */}
        </div>
        <div className='portfolio-container'>
          <CardList cards={categorizedData[activeTab]} />
        </div>
      </div>
    </div>
  );
};

export default About;
