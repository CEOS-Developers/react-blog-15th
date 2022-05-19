## SEO란?

Search Engine Optimization의 약자인 SEO는 구글 (혹은 다른 검색엔진)의 검색 결과 상 사이트가 상단에 노출되도록 하는 전략을 말합니다. 현재 구글은 Google Quality Guideline (https://developers.google.com/search/docs/advanced/guidelines/overview) 을 통해 검색엔진 상단에 노출시키 위한 일련의 가이드라인을 제공하고 있습니다. 위의 가이드라인을 위반하는 사이트는 구글에 의해 패널티를 받을 수 있습니다. 구글의 랭킹 알고리즘은 매년 주요 업데이트를 진행하며 이러한 업데이트를 추적하는 것도 중요한 개발자의 작업입니다.

SEO는 개발자만의 작업이 아닙니다. 웹페이지가 제공하는 정보의 질과 신뢰성이 가장 중요합니다. 개발자는 사용자와 크롤러에 의한 페이지 접근성을 높이는 작업을 진행할 수 있습니다. 올바른 html 태그의 사용, 데이터의 구조화, 모바일 친화적인 페이지와 같은 작업들이 존재합니다. 일례로 구글은 <title> 태그 안의 내용을 검색결과의 제목으로 사용합니다. 따라서 <title> 태그를 잘 사용하고 해당 태그 내 적절한 내용을 적어넣는 것은 웹페이지의 노출에 중요할 수 있습니다.

	-	<title>과 <meta> 태그의 사용
	-	<h1>, <h2>와 같은 헤더 태그 사용, <img>에 alt 속성 부여
	-	HTTPS 프로토콜의 사용
	-	웹 접근성 강화
	-	URL이 의미를 가지도록 구조화 (example.com/RunningShoes/Womens)
	-	<href> 연결 (외부 사이트 연결시 rel=“nofollow”를 통해 구분, 자기 사이트 최대한 연결)
	-	콘텐츠가 중복되지 않도록 주의 (같은 콘텐츠가 서로 경쟁하지 않도록 구분)
	-	로컬라이제이션 (meta 태그를 통해 지원 언어 명시)

구글은 SEO를 위해 Google Search Console (https://search.google.com/search-console/about)을 제공하고 있습니다. 혹은 크롤링을 수행해 문제점을 보여주는 상업적 툴을 이용해 SEO를 시도할 수 있습니다. 

기본적인 검색엔진은 서버에 의해 생성된 html 페이지를 분석합니다. 지난 시간 동안 크롤러는 다량의 페이지를 빠르게 탐색해야 하므로 자바스크립트를 지원하지 않았습니다. 만일 어떤 페이지가 CSR을 통해 렌더링한다면 크롤러는 그냥 지나칩니다. 따라서 이커머스 사이트의 경우 서버에 인덱싱용 정적 페이지를 생성하고 로드과 완료되면 CSR이 개입해 사용자 경험을 강화해왔습니다. 이러한 개념을 토대로 발전한 것이 SSR입니다.

다만, 현재는 CSR로 생성된 페이지를 크롤러가 지원하기 시작했습니다. 따라서, 모던 웹의 발전에 따라 SSR의 중요성은 점차 감소할 수도 있습니다.

검색엔진 최적화 만큼 중요한 것은 웹페이지 속도 개선입니다. 이는 Google PageSpeed Insights를 통해 간편하게 조회할 수 있습니다. Mobify는 100ms의 홈페이지 속도 차이 개선으로 세션 기반 전환율의 1.11% 증가 및 연간 $380,000의 수익 증가를 이끌어 냈습니다. 홈페이지 속도를 측정하는 대표적인 지표는 다음과 같습니다. (1) FID: First Input Display (2) FCP: First Contentful Paint (3) TTI: Time to Interactive. 자세한 내용은 다음의 링크를 통해 찾을 수 있습니다. (https://web.dev/i18n/ko/vitals/) 웹페이지의 속도는 제한된 대역폭 내에서 얼마나 많은 자원을 불러오는지에 영향을 받습니다. 여기에는 폰트, 서드파티 스트립트, 이미지 등 자원이 해당됩니다. 

출처 
https://medium.com/welldone-software/seo-for-developers-a-quick-overview-5b5b7ce34679
https://business.adobe.com/blog/basics/server-side-vs-client-side-rendering-and-changing-seo-practices

## 성능 최적화를 위해 사용한 방법

Next.js는 SSR과 SSG를 지원하는 리엑트 배포 프레임워크입니다. 이번 과제가 서버와 통신을 요구하지는 않지만, Next.js에서 제공하는 기초적인 기능들을 사용하기 위해 노력했습니다. 이중 성능 최적화와 관련된 부분은 SSG(Static Site Generation)의 사용입니다. “/“ 경로에 위치한 메인 페이지를 제외하고 “/edit/“ 및 “/detail/” 경로에 위치한 페이지들은 SSG를 통해 생성되고 브라우저로 전달됩니다. 따라서 각 페이지는 컴파일 타임에 생성되어 서버에 저장되어 있다가 요청이 발생하면 html 및 리소스로 브라우저에  전달됩니다. 

다만, 이럴 경우 수정하거나 새로 생성한 글이 브라우저에 나타나지 않는 문제가 존재했습니다. SSG를 사용하므로 Redux 전역 상태로 새로 작성한 글을 저장하더라도, 해당 경로에 들어가면 빌드 타임에 생성된 초기 상태가 나타납니다. 따라서, 서버로부터 조회하는 함수인 GetStaticProps의 중간에 개입해 Redux 전역 상태의 값을 삽입하고자 했습니다.

이 과정에서 Next.js와 Redux를 연결하는 Redux Wrapper를 사용했는데, 서버와 클라이언트가 서로 독립적인 State를 가지고 있었습니다. 또한, 서버 State는 Node.js를 통해 독립적으로 관리되고 있으므로  클라이언트 State에 접근할 수 없다는 문제를 발견할 수 있었습니다. 따라서 중간에 클라이언트 State를 삽입하는 시도는 실패했습니다.

따라서, 두번째 방법으로 초기 렌더링만 SSG를 이용하고 이후 변경이 발생하면 Client State를 참조하는 방식으로 성공할 수 있었습니다. 비유하자면 껍질만 서버로 불러온 뒤 내용은 로컬에서 업데이트하는 방식입니다. 이는 다음의 예제(https://github.com/vercel/next.js/tree/canary/examples/with-redux-wrapper)에서 아이디어를 얻었습니다. 예제는 SSG로 우선 서버에서 페이지를 생성한 뒤, 이후 상태변화를 클라이언트 State로 관리하고 있습니다. 우연히 발견한 꼼수를 통한 우아하지 않은(ㅠ) 방법이지만, 구현에 의미를 둘 수 있을 것 입니다.
