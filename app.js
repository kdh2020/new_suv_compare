const vehicles = [
  {
    id: "hyundai-venue",
    brand: "현대",
    model: "베뉴",
    segment: "소형",
    popularity: 74,
    summary: "도심 주행과 첫 SUV 구매에 어울리는 컴팩트 SUV",
    imageTone: ["#f7e38d", "#d7e7ef"],
    specs: { length: 4040, width: 1770, height: 1565, wheelbase: 2520, weight: 1215, efficiency: 13.7, displacement: 1598, fuel: "가솔린", drivetrain: "FWD" },
    safety: "전방 충돌방지, 차로 유지 보조, 후측방 경고",
    convenience: "8인치 내비, 스마트키, 열선 시트",
    trims: [
      { name: "프리미엄", basePrice: 2146, options: ["스마트 센스"], finalPrice: 2291 },
      { name: "플럭스", basePrice: 2420, options: ["테크 패키지"], finalPrice: 2600 }
    ],
    packages: [
      { name: "스마트 센스", price: 145 },
      { name: "테크 패키지", price: 180 },
      { name: "선루프", price: 55 }
    ],
    promotions: [{ type: "현금 할인", amount: 70, condition: "개소세 포함 재고 조건", period: "2025 예시" }]
  },
  {
    id: "hyundai-kona",
    brand: "현대",
    model: "코나",
    segment: "소형",
    popularity: 86,
    summary: "넓어진 실내와 다양한 파워트레인이 장점인 소형 SUV",
    imageTone: ["#cde7ff", "#f7f7f7"],
    specs: { length: 4350, width: 1825, height: 1580, wheelbase: 2660, weight: 1360, efficiency: 13.0, displacement: 1598, fuel: "가솔린/하이브리드", drivetrain: "FWD/AWD" },
    safety: "고속도로 주행 보조, 후측방 충돌방지, 내비 기반 스마트 크루즈",
    convenience: "12.3인치 클러스터, 디지털 키, 통풍 시트",
    trims: [
      { name: "모던", basePrice: 2516, options: ["컨비니언스"], finalPrice: 2675 },
      { name: "인스퍼레이션", basePrice: 3120, options: ["파킹 어시스트"], finalPrice: 3340 }
    ],
    packages: [
      { name: "컨비니언스", price: 159 },
      { name: "파킹 어시스트", price: 120 },
      { name: "빌트인 캠", price: 69 }
    ],
    promotions: [{ type: "저금리", amount: 90, condition: "36개월 2.9% 환산 혜택", period: "2025 예시" }]
  },
  {
    id: "hyundai-tucson",
    brand: "현대",
    model: "투싼",
    segment: "준중형",
    popularity: 91,
    summary: "균형 잡힌 공간과 상품성을 갖춘 대표 준중형 SUV",
    imageTone: ["#d9f2df", "#f1f1f1"],
    specs: { length: 4640, width: 1865, height: 1665, wheelbase: 2755, weight: 1575, efficiency: 12.5, displacement: 1598, fuel: "가솔린/디젤/하이브리드", drivetrain: "FWD/AWD" },
    safety: "후측방 모니터, 원격 스마트 주차, 8에어백",
    convenience: "파노라믹 커브드 디스플레이, OTA, 전동 트렁크",
    trims: [
      { name: "프리미엄", basePrice: 2771, options: ["익스테리어 디자인"], finalPrice: 2971 },
      { name: "인스퍼레이션", basePrice: 3439, options: ["플래티넘"], finalPrice: 3739 }
    ],
    packages: [
      { name: "익스테리어 디자인", price: 200 },
      { name: "플래티넘", price: 300 },
      { name: "파노라마 선루프", price: 115 }
    ],
    promotions: [{ type: "재고 할인", amount: 120, condition: "생산월별 차등", period: "2025 예시" }]
  },
  {
    id: "hyundai-santafe",
    brand: "현대",
    model: "싼타페",
    segment: "중형",
    popularity: 97,
    summary: "박시한 공간감과 패밀리 편의성이 강한 중형 SUV",
    imageTone: ["#f8d7bf", "#e6edf5"],
    specs: { length: 4830, width: 1900, height: 1720, wheelbase: 2815, weight: 1795, efficiency: 11.0, displacement: 2497, fuel: "가솔린/하이브리드", drivetrain: "FWD/AWD" },
    safety: "전방 교차 충돌방지, 고속도로 주행 보조 2, 10에어백",
    convenience: "듀얼 무선충전, 양방향 콘솔, 디지털 센터 미러",
    trims: [
      { name: "익스클루시브", basePrice: 3546, options: ["현대 스마트센스"], finalPrice: 3746 },
      { name: "캘리그래피", basePrice: 4596, options: ["6인승", "보스 사운드"], finalPrice: 4926 }
    ],
    packages: [
      { name: "현대 스마트센스", price: 200 },
      { name: "6인승", price: 104 },
      { name: "보스 사운드", price: 226 }
    ],
    promotions: [{ type: "현금 할인", amount: 180, condition: "노후차 교체/재고 조건", period: "2025 예시" }]
  },
  {
    id: "kia-seltos",
    brand: "기아",
    model: "셀토스",
    segment: "소형",
    popularity: 92,
    summary: "소형 SUV 시장의 스테디셀러, 탄탄한 옵션 구성이 장점",
    imageTone: ["#e5e7eb", "#ffd7a8"],
    specs: { length: 4390, width: 1800, height: 1600, wheelbase: 2630, weight: 1345, efficiency: 12.8, displacement: 1598, fuel: "가솔린", drivetrain: "FWD/AWD" },
    safety: "전방 충돌방지, 후측방 충돌방지, 스마트 크루즈",
    convenience: "파노라마 디스플레이, 스마트 파워테일게이트, 통풍 시트",
    trims: [
      { name: "프레스티지", basePrice: 2463, options: ["드라이브 와이즈"], finalPrice: 2633 },
      { name: "그래비티", basePrice: 2900, options: ["모니터링"], finalPrice: 3120 }
    ],
    packages: [
      { name: "드라이브 와이즈", price: 170 },
      { name: "모니터링", price: 120 },
      { name: "선루프", price: 45 }
    ],
    promotions: [{ type: "저금리", amount: 100, condition: "48개월 3.5% 환산", period: "2025 예시" }]
  },
  {
    id: "kia-niro",
    brand: "기아",
    model: "니로",
    segment: "소형",
    popularity: 82,
    summary: "고연비 하이브리드 중심의 실용형 SUV",
    imageTone: ["#ccebdc", "#f6f2d8"],
    specs: { length: 4420, width: 1825, height: 1545, wheelbase: 2720, weight: 1405, efficiency: 20.8, displacement: 1580, fuel: "하이브리드", drivetrain: "FWD" },
    safety: "고속도로 주행 보조, 내비 기반 크루즈, 안전 하차 보조",
    convenience: "헤드업 디스플레이, 친환경 소재, 2열 에어벤트",
    trims: [
      { name: "트렌디", basePrice: 2713, options: ["컨비니언스"], finalPrice: 2883 },
      { name: "시그니처", basePrice: 3376, options: ["하이테크"], finalPrice: 3626 }
    ],
    packages: [
      { name: "컨비니언스", price: 170 },
      { name: "하이테크", price: 250 },
      { name: "HUD", price: 65 }
    ],
    promotions: [{ type: "친환경 혜택", amount: 120, condition: "하이브리드 구매 지원 예시", period: "2025 예시" }]
  },
  {
    id: "kia-sportage",
    brand: "기아",
    model: "스포티지",
    segment: "준중형",
    popularity: 94,
    summary: "넓은 실내와 높은 인지도의 준중형 SUV",
    imageTone: ["#d8e5ff", "#f5f5f5"],
    specs: { length: 4660, width: 1865, height: 1665, wheelbase: 2755, weight: 1600, efficiency: 12.3, displacement: 1598, fuel: "가솔린/디젤/하이브리드", drivetrain: "FWD/AWD" },
    safety: "원격 스마트 주차, 후방 교차 충돌방지, 차로 유지",
    convenience: "파노라믹 커브드 디스플레이, 빌트인 캠, 전동 트렁크",
    trims: [
      { name: "프레스티지", basePrice: 2836, options: ["스타일"], finalPrice: 3036 },
      { name: "시그니처", basePrice: 3570, options: ["프리미엄"], finalPrice: 3840 }
    ],
    packages: [
      { name: "스타일", price: 200 },
      { name: "프리미엄", price: 270 },
      { name: "드라이브 와이즈", price: 120 }
    ],
    promotions: [{ type: "재고 할인", amount: 130, condition: "생산월별 차등", period: "2025 예시" }]
  },
  {
    id: "kia-sorento",
    brand: "기아",
    model: "쏘렌토",
    segment: "중형",
    popularity: 99,
    summary: "가족 수요와 하이브리드 인기가 높은 중형 SUV",
    imageTone: ["#f4d9d0", "#dce7ef"],
    specs: { length: 4815, width: 1900, height: 1700, wheelbase: 2815, weight: 1810, efficiency: 10.8, displacement: 2497, fuel: "가솔린/디젤/하이브리드", drivetrain: "FWD/AWD" },
    safety: "전방 교차 충돌방지, 고속도로 주행 보조 2, 다중 충돌방지",
    convenience: "12.3인치 디스플레이, 릴랙션 시트, 6/7인승 선택",
    trims: [
      { name: "프레스티지", basePrice: 3506, options: ["드라이브 와이즈"], finalPrice: 3716 },
      { name: "그래비티", basePrice: 4553, options: ["컴포트", "HUD"], finalPrice: 4893 }
    ],
    packages: [
      { name: "드라이브 와이즈", price: 210 },
      { name: "컴포트", price: 180 },
      { name: "HUD", price: 160 }
    ],
    promotions: [{ type: "저금리", amount: 160, condition: "36개월 특별 금리 환산", period: "2025 예시" }]
  },
  {
    id: "renault-arkana",
    brand: "르노코리아",
    model: "아르카나(XM3)",
    segment: "소형",
    popularity: 73,
    summary: "쿠페형 실루엣과 합리적 가격대의 도심형 SUV",
    imageTone: ["#eadcff", "#f5f5f5"],
    specs: { length: 4570, width: 1820, height: 1570, wheelbase: 2720, weight: 1420, efficiency: 13.2, displacement: 1332, fuel: "가솔린/하이브리드", drivetrain: "FWD" },
    safety: "긴급제동 보조, 차선이탈 경보, 어댑티브 크루즈",
    convenience: "이지 커넥트, 9.3인치 내비, 앰비언트 라이트",
    trims: [
      { name: "테크노", basePrice: 2285, options: ["드라이빙 어시스트"], finalPrice: 2445 },
      { name: "아이코닉", basePrice: 2845, options: ["BOSE 패키지"], finalPrice: 3095 }
    ],
    packages: [
      { name: "드라이빙 어시스트", price: 160 },
      { name: "BOSE 패키지", price: 250 },
      { name: "블랙 루프", price: 45 }
    ],
    promotions: [{ type: "현금 할인", amount: 150, condition: "특별 구매 지원", period: "2025 예시" }]
  },
  {
    id: "renault-grand-koleos",
    brand: "르노코리아",
    model: "그랑 콜레오스",
    segment: "중형",
    popularity: 88,
    summary: "넉넉한 공간과 최신 인포테인먼트 구성이 돋보이는 중형 SUV",
    imageTone: ["#d7ecf2", "#f1e1c8"],
    specs: { length: 4780, width: 1880, height: 1680, wheelbase: 2820, weight: 1735, efficiency: 11.6, displacement: 1499, fuel: "가솔린/하이브리드", drivetrain: "FWD/AWD" },
    safety: "능동형 운전자 보조, 360도 카메라, 긴급제동",
    convenience: "오픈R 파노라마 스크린, 동승석 디스플레이, 전동 트렁크",
    trims: [
      { name: "테크노", basePrice: 3495, options: ["어시스트 패키지"], finalPrice: 3695 },
      { name: "에스프리 알핀", basePrice: 4350, options: ["파노라마 루프"], finalPrice: 4620 }
    ],
    packages: [
      { name: "어시스트 패키지", price: 200 },
      { name: "파노라마 루프", price: 140 },
      { name: "프리미엄 사운드", price: 130 }
    ],
    promotions: [{ type: "저금리", amount: 140, condition: "출시 기념 특별 금리", period: "2025 예시" }]
  },
  {
    id: "kgm-tivoli",
    brand: "KGM",
    model: "티볼리",
    segment: "소형",
    popularity: 70,
    summary: "가성비와 개성 있는 디자인을 앞세운 소형 SUV",
    imageTone: ["#f3d5e1", "#ebedf2"],
    specs: { length: 4225, width: 1810, height: 1615, wheelbase: 2600, weight: 1300, efficiency: 12.0, displacement: 1497, fuel: "가솔린", drivetrain: "FWD" },
    safety: "긴급제동 보조, 차선 유지 보조, 후측방 경고",
    convenience: "디지털 클러스터, 스마트키, 운전석 통풍",
    trims: [
      { name: "V5", basePrice: 1898, options: ["밸류업"], finalPrice: 2048 },
      { name: "V7", basePrice: 2340, options: ["세이프티"], finalPrice: 2550 }
    ],
    packages: [
      { name: "밸류업", price: 150 },
      { name: "세이프티", price: 210 },
      { name: "투톤 루프", price: 40 }
    ],
    promotions: [{ type: "현금 할인", amount: 120, condition: "일시불 구매 지원", period: "2025 예시" }]
  },
  {
    id: "kgm-korando",
    brand: "KGM",
    model: "코란도",
    segment: "준중형",
    popularity: 68,
    summary: "합리적 가격과 기본 공간을 갖춘 준중형 SUV",
    imageTone: ["#d8e2d1", "#f5f0e8"],
    specs: { length: 4450, width: 1870, height: 1620, wheelbase: 2675, weight: 1525, efficiency: 11.5, displacement: 1497, fuel: "가솔린", drivetrain: "FWD/AWD" },
    safety: "딥컨트롤, 후측방 경고, 안전거리 경고",
    convenience: "10.25인치 클러스터, 9인치 내비, 2열 리클라이닝",
    trims: [
      { name: "C5", basePrice: 2445, options: ["딥컨트롤"], finalPrice: 2615 },
      { name: "C7", basePrice: 2827, options: ["인포콘"], finalPrice: 3057 }
    ],
    packages: [
      { name: "딥컨트롤", price: 170 },
      { name: "인포콘", price: 120 },
      { name: "4WD", price: 210 }
    ],
    promotions: [{ type: "재고 할인", amount: 180, condition: "생산월 조건", period: "2025 예시" }]
  },
  {
    id: "kgm-torres",
    brand: "KGM",
    model: "토레스",
    segment: "중형",
    popularity: 89,
    summary: "정통 SUV 감성과 넉넉한 적재 공간이 특징",
    imageTone: ["#d9d2c6", "#f3f6f4"],
    specs: { length: 4705, width: 1890, height: 1720, wheelbase: 2680, weight: 1610, efficiency: 11.2, displacement: 1497, fuel: "가솔린", drivetrain: "FWD/AWD" },
    safety: "긴급제동, 후측방 보조, 차선 중앙 유지",
    convenience: "12.3인치 내비, 전동식 파워 테일게이트, 캠핑 옵션",
    trims: [
      { name: "T5", basePrice: 2838, options: ["세이프티 선루프"], finalPrice: 3058 },
      { name: "T7", basePrice: 3229, options: ["하이디럭스"], finalPrice: 3549 }
    ],
    packages: [
      { name: "세이프티 선루프", price: 220 },
      { name: "하이디럭스", price: 320 },
      { name: "4WD", price: 202 }
    ],
    promotions: [{ type: "현금 할인", amount: 200, condition: "브랜드 페스타 예시", period: "2025 예시" }]
  },
  {
    id: "kgm-actyon",
    brand: "KGM",
    model: "액티언",
    segment: "중형",
    popularity: 84,
    summary: "쿠페형 중형 SUV 포지션의 신규 라인업",
    imageTone: ["#dce1ea", "#f3dfd5"],
    specs: { length: 4740, width: 1910, height: 1680, wheelbase: 2680, weight: 1665, efficiency: 10.9, displacement: 1497, fuel: "가솔린", drivetrain: "FWD/AWD" },
    safety: "딥컨트롤, 어댑티브 크루즈, 360도 안전 보조",
    convenience: "와이드 디스플레이, 프리미엄 퀼팅 시트, 무선 업데이트",
    trims: [
      { name: "S7", basePrice: 3395, options: ["컴포트"], finalPrice: 3595 },
      { name: "S9", basePrice: 3851, options: ["스마트 테일게이트"], finalPrice: 4091 }
    ],
    packages: [
      { name: "컴포트", price: 200 },
      { name: "스마트 테일게이트", price: 140 },
      { name: "4WD", price: 230 }
    ],
    promotions: [{ type: "저금리", amount: 130, condition: "론칭 특별 금리 환산", period: "2025 예시" }]
  },
  {
    id: "hyundai-kona-hybrid",
    brand: "현대",
    model: "코나 하이브리드",
    segment: "소형",
    popularity: 90,
    summary: "도심 효율과 넉넉한 소형 SUV 공간을 함께 챙긴 하이브리드 모델",
    imageTone: ["#c8f0df", "#eaf8ff"],
    specs: { length: 4350, width: 1825, height: 1580, wheelbase: 2660, weight: 1450, efficiency: 19.8, displacement: 1580, fuel: "하이브리드", drivetrain: "FWD" },
    safety: "고속도로 주행 보조, 후측방 충돌방지, 내비 기반 스마트 크루즈",
    convenience: "12.3인치 디스플레이, 디지털 키, 통풍 시트",
    trims: [
      { name: "모던 HEV", basePrice: 3020, options: ["컨비니언스"], finalPrice: 3190 },
      { name: "인스퍼레이션 HEV", basePrice: 3611, options: ["파킹 어시스트"], finalPrice: 3831 }
    ],
    packages: [
      { name: "컨비니언스", price: 170 },
      { name: "파킹 어시스트", price: 120 },
      { name: "빌트인 캠", price: 69 }
    ],
    promotions: [{ type: "친환경 혜택", amount: 110, condition: "하이브리드 구매 지원 예시", period: "2025 예시" }]
  },
  {
    id: "hyundai-tucson-hybrid",
    brand: "현대",
    model: "투싼 하이브리드",
    segment: "준중형",
    popularity: 96,
    summary: "준중형 SUV 공간감에 높은 연비와 정숙성을 더한 인기 하이브리드",
    imageTone: ["#cff2d9", "#eef4f7"],
    specs: { length: 4640, width: 1865, height: 1665, wheelbase: 2755, weight: 1685, efficiency: 16.2, displacement: 1598, fuel: "하이브리드", drivetrain: "FWD/AWD" },
    safety: "후측방 모니터, 고속도로 주행 보조, 원격 스마트 주차",
    convenience: "파노라믹 커브드 디스플레이, OTA, 전동 트렁크",
    trims: [
      { name: "프리미엄 HEV", basePrice: 3213, options: ["익스테리어 디자인"], finalPrice: 3413 },
      { name: "인스퍼레이션 HEV", basePrice: 3858, options: ["플래티넘"], finalPrice: 4158 }
    ],
    packages: [
      { name: "익스테리어 디자인", price: 200 },
      { name: "플래티넘", price: 300 },
      { name: "파노라마 선루프", price: 115 }
    ],
    promotions: [{ type: "저금리", amount: 130, condition: "하이브리드 특별 금리 환산", period: "2025 예시" }]
  },
  {
    id: "hyundai-santafe-hybrid",
    brand: "현대",
    model: "싼타페 하이브리드",
    segment: "중형",
    popularity: 100,
    summary: "패밀리 SUV 수요가 높은 중형 하이브리드 대표 모델",
    imageTone: ["#f7dfc8", "#dff0ec"],
    specs: { length: 4830, width: 1900, height: 1720, wheelbase: 2815, weight: 1905, efficiency: 15.5, displacement: 1598, fuel: "하이브리드", drivetrain: "FWD/AWD" },
    safety: "전방 교차 충돌방지, 고속도로 주행 보조 2, 10에어백",
    convenience: "듀얼 무선충전, 양방향 콘솔, 디지털 센터 미러",
    trims: [
      { name: "익스클루시브 HEV", basePrice: 4031, options: ["현대 스마트센스"], finalPrice: 4231 },
      { name: "캘리그래피 HEV", basePrice: 5036, options: ["6인승", "보스 사운드"], finalPrice: 5366 }
    ],
    packages: [
      { name: "현대 스마트센스", price: 200 },
      { name: "6인승", price: 104 },
      { name: "보스 사운드", price: 226 }
    ],
    promotions: [{ type: "친환경 혜택", amount: 170, condition: "패밀리 HEV 구매 지원 예시", period: "2025 예시" }]
  },
  {
    id: "kia-sportage-hybrid",
    brand: "기아",
    model: "스포티지 하이브리드",
    segment: "준중형",
    popularity: 98,
    summary: "높은 연비와 실내 활용성을 모두 갖춘 준중형 하이브리드 SUV",
    imageTone: ["#cfe8ff", "#ecf8df"],
    specs: { length: 4660, width: 1865, height: 1665, wheelbase: 2755, weight: 1690, efficiency: 16.7, displacement: 1598, fuel: "하이브리드", drivetrain: "FWD/AWD" },
    safety: "원격 스마트 주차, 후방 교차 충돌방지, 차로 유지",
    convenience: "파노라믹 커브드 디스플레이, 빌트인 캠, 전동 트렁크",
    trims: [
      { name: "프레스티지 HEV", basePrice: 3263, options: ["스타일"], finalPrice: 3463 },
      { name: "시그니처 HEV", basePrice: 3968, options: ["프리미엄"], finalPrice: 4238 }
    ],
    packages: [
      { name: "스타일", price: 200 },
      { name: "프리미엄", price: 270 },
      { name: "드라이브 와이즈", price: 120 }
    ],
    promotions: [{ type: "저금리", amount: 140, condition: "HEV 특별 금리 환산", period: "2025 예시" }]
  },
  {
    id: "kia-sorento-hybrid",
    brand: "기아",
    model: "쏘렌토 하이브리드",
    segment: "중형",
    popularity: 100,
    summary: "가족용 중형 SUV와 고효율 파워트레인을 결합한 인기 하이브리드",
    imageTone: ["#f2d8cc", "#d7eef4"],
    specs: { length: 4815, width: 1900, height: 1700, wheelbase: 2815, weight: 1900, efficiency: 15.7, displacement: 1598, fuel: "하이브리드", drivetrain: "FWD/AWD" },
    safety: "전방 교차 충돌방지, 고속도로 주행 보조 2, 다중 충돌방지",
    convenience: "12.3인치 디스플레이, 릴랙션 시트, 6/7인승 선택",
    trims: [
      { name: "프레스티지 HEV", basePrice: 3929, options: ["드라이브 와이즈"], finalPrice: 4139 },
      { name: "그래비티 HEV", basePrice: 4965, options: ["컴포트", "HUD"], finalPrice: 5305 }
    ],
    packages: [
      { name: "드라이브 와이즈", price: 210 },
      { name: "컴포트", price: 180 },
      { name: "HUD", price: 160 }
    ],
    promotions: [{ type: "친환경 혜택", amount: 180, condition: "중형 HEV 구매 지원 예시", period: "2025 예시" }]
  },
  {
    id: "renault-arkana-hybrid",
    brand: "르노코리아",
    model: "아르카나 E-Tech 하이브리드",
    segment: "소형",
    popularity: 80,
    summary: "쿠페형 디자인에 E-Tech 하이브리드 효율을 더한 도심형 SUV",
    imageTone: ["#e4dcff", "#edf8e8"],
    specs: { length: 4570, width: 1820, height: 1570, wheelbase: 2720, weight: 1475, efficiency: 17.4, displacement: 1598, fuel: "하이브리드", drivetrain: "FWD" },
    safety: "긴급제동 보조, 차선이탈 경보, 어댑티브 크루즈",
    convenience: "이지 커넥트, 9.3인치 내비, 앰비언트 라이트",
    trims: [
      { name: "테크노 E-Tech", basePrice: 3095, options: ["드라이빙 어시스트"], finalPrice: 3255 },
      { name: "아이코닉 E-Tech", basePrice: 3370, options: ["BOSE 패키지"], finalPrice: 3620 }
    ],
    packages: [
      { name: "드라이빙 어시스트", price: 160 },
      { name: "BOSE 패키지", price: 250 },
      { name: "블랙 루프", price: 45 }
    ],
    promotions: [{ type: "친환경 혜택", amount: 150, condition: "E-Tech 구매 지원 예시", period: "2025 예시" }]
  },
  {
    id: "renault-grand-koleos-hybrid",
    brand: "르노코리아",
    model: "그랑 콜레오스 E-Tech 하이브리드",
    segment: "중형",
    popularity: 92,
    summary: "넓은 실내와 최신 인포테인먼트에 하이브리드 효율을 더한 중형 SUV",
    imageTone: ["#d5eef4", "#e7f2d9"],
    specs: { length: 4780, width: 1880, height: 1680, wheelbase: 2820, weight: 1810, efficiency: 15.7, displacement: 1499, fuel: "하이브리드", drivetrain: "FWD" },
    safety: "능동형 운전자 보조, 360도 카메라, 긴급제동",
    convenience: "오픈R 파노라마 스크린, 동승석 디스플레이, 전동 트렁크",
    trims: [
      { name: "테크노 E-Tech", basePrice: 3995, options: ["어시스트 패키지"], finalPrice: 4195 },
      { name: "에스프리 알핀 E-Tech", basePrice: 4560, options: ["파노라마 루프"], finalPrice: 4830 }
    ],
    packages: [
      { name: "어시스트 패키지", price: 200 },
      { name: "파노라마 루프", price: 140 },
      { name: "프리미엄 사운드", price: 130 }
    ],
    promotions: [{ type: "저금리", amount: 160, condition: "E-Tech 특별 금리 환산", period: "2025 예시" }]
  }
];

vehicles.push({
  id: "kia-seltos-hybrid",
  brand: "기아",
  model: "셀토스 하이브리드",
  segment: "소형",
  popularity: 91,
  summary: "셀토스의 실용적인 차체에 하이브리드 효율을 더한 소형 SUV",
  imageTone: ["#d9f4df", "#f5e7c6"],
  specs: { length: 4390, width: 1800, height: 1600, wheelbase: 2630, weight: 1460, efficiency: 18.6, displacement: 1580, fuel: "하이브리드", drivetrain: "FWD" },
  safety: "전방 충돌방지, 후측방 충돌방지, 스마트 크루즈",
  convenience: "파노라마 디스플레이, 전자식 변속 레버, 실내 V2L",
  trims: [
    { name: "트렌디 HEV", basePrice: 2898, options: ["스타일"], finalPrice: 3007 },
    { name: "프레스티지 HEV", basePrice: 3120, options: ["컨비니언스"], finalPrice: 3260 },
    { name: "시그니처 HEV", basePrice: 3450, options: ["모니터링"], finalPrice: 3630 },
    { name: "X-Line HEV", basePrice: 3610, options: ["하만카돈"], finalPrice: 3800 }
  ],
  packages: [
    { name: "스타일", price: 109 },
    { name: "컨비니언스", price: 64 },
    { name: "실내 V2L", price: 69 }
  ],
  promotions: [{ type: "친환경 혜택", amount: 130, condition: "HEV 구매 지원 예시", period: "2026 예시" }]
});

const trimOverrides = {
  "hyundai-venue": [
    ["프리미엄", 2146, ["현대 스마트센스", "스타일"]],
    ["플럭스", 2413, ["테크", "투톤 컬러 루프"]]
  ],
  "hyundai-kona": [
    ["스마트", 1950, ["현대 스마트센스 I"]],
    ["모던 초이스", 2141, ["밸류 II"]],
    ["프리미엄", 2288, ["디자인 I"]],
    ["인스퍼레이션", 2860, ["플래티넘"]],
    ["블랙 익스테리어", 3175, ["블랙 전용 외관"]]
  ],
  "hyundai-kona-hybrid": [
    ["모던", 3013, ["컨비니언스"]],
    ["모던 스페셜", 3190, ["멀티미디어 내비 플러스"]],
    ["프리미엄 스페셜", 3370, ["디자인 II"]],
    ["인스퍼레이션", 3611, ["파킹 어시스트"]],
    ["블랙 익스테리어", 3790, ["블랙 전용 외관"]]
  ],
  "hyundai-tucson": [
    ["모던", 2805, ["익스테리어 디자인 I"]],
    ["프리미엄", 3069, ["컴포트 II"]],
    ["H-Pick", 3156, ["플래티넘"]],
    ["인스퍼레이션", 3407, ["파킹 어시스트 III"]],
    ["블랙 익스테리어", 3452, ["블랙 외관"]],
    ["N Line", 3492, ["N Line 전용 디자인"]]
  ],
  "hyundai-tucson-hybrid": [
    ["모던 HEV", 3295, ["익스테리어 디자인 I"]],
    ["프리미엄 HEV", 3570, ["컴포트 II"]],
    ["H-Pick HEV", 3660, ["플래티넘"]],
    ["인스퍼레이션 HEV", 3905, ["파킹 어시스트 II"]],
    ["블랙 익스테리어 HEV", 3950, ["블랙 외관"]],
    ["N Line HEV", 3990, ["N Line 전용 디자인"]]
  ],
  "hyundai-santafe": [
    ["익스클루시브", 3606, ["빌트인 캠 2"]],
    ["프레스티지", 3896, ["시트플러스"]],
    ["H-Pick", 4179, ["파킹 어시스트 플러스 I"]],
    ["블랙 익스테리어", 4184, ["블랙 외관"]],
    ["캘리그래피", 4484, ["BOSE 사운드"]],
    ["블랙 잉크", 4484, ["블랙잉크 플러스"]]
  ],
  "hyundai-santafe-hybrid": [
    ["익스클루시브 HEV", 3964, ["빌트인 캠 2"]],
    ["프레스티지 HEV", 4247, ["시트플러스"]],
    ["H-Pick HEV", 4508, ["헤드업 디스플레이"]],
    ["블랙 익스테리어 HEV", 4542, ["블랙 외관"]],
    ["캘리그래피 HEV", 4848, ["BOSE 사운드"]],
    ["블랙 잉크 HEV", 4848, ["블랙잉크 플러스"]]
  ],
  "kia-seltos": [
    ["트렌디", 2477, ["스타일"]],
    ["프레스티지", 2680, ["컨비니언스"]],
    ["시그니처", 3030, ["모니터링"]],
    ["X-Line", 3180, ["하만카돈"]]
  ],
  "kia-niro": [
    ["트렌디", 2885, ["컨비니언스"]],
    ["프레스티지", 3200, ["드라이브 와이즈 II"]],
    ["시그니처", 3560, ["HUD"]]
  ],
  "kia-sportage": [
    ["프레스티지", 2863, ["스타일"]],
    ["노블레스", 3195, ["12.3인치 내비게이션"]],
    ["시그니처", 3490, ["프리미엄"]],
    ["시그니처 X-Line", 3660, ["X-Line 전용 디자인"]]
  ],
  "kia-sportage-hybrid": [
    ["프레스티지 HEV", 3330, ["스타일"]],
    ["노블레스 HEV", 3640, ["12.3인치 내비게이션"]],
    ["시그니처 HEV", 3950, ["프리미엄"]],
    ["시그니처 X-Line HEV", 4120, ["X-Line 전용 디자인"]]
  ],
  "kia-sorento": [
    ["프레스티지", 3580, ["드라이브 와이즈"]],
    ["노블레스", 3890, ["컴포트"]],
    ["시그니처", 4295, ["프리미엄"]],
    ["X-Line", 4560, ["X-Line 전용 디자인"]]
  ],
  "kia-sorento-hybrid": [
    ["프레스티지 HEV", 3940, ["드라이브 와이즈"]],
    ["노블레스 HEV", 4250, ["컴포트"]],
    ["시그니처 HEV", 4795, ["프리미엄"]],
    ["X-Line HEV", 4888, ["X-Line 전용 디자인"]]
  ],
  "renault-arkana": [
    ["아이코닉", 2640, ["파워 테일게이트", "BOSE 사운드"]]
  ],
  "renault-arkana-hybrid": [
    ["아이코닉 E-Tech", 3313, ["360도 어라운드 뷰", "BOSE 사운드"]]
  ],
  "renault-grand-koleos": [
    ["테크노", 3495, ["어시스트 패키지"]],
    ["아이코닉", 3860, ["동승석 디스플레이"]],
    ["에스프리 알핀", 4190, ["파노라마 루프"]]
  ],
  "renault-grand-koleos-hybrid": [
    ["테크노 E-Tech", 3995, ["어시스트 패키지"]],
    ["아이코닉 E-Tech", 4295, ["동승석 디스플레이"]],
    ["에스프리 알핀 E-Tech", 4560, ["파노라마 루프"]]
  ],
  "kgm-tivoli": [
    ["V1", 1898, ["밸류업"]],
    ["V3", 2263, ["세이프티"]],
    ["V5", 2410, ["컨비니언스"]],
    ["V7", 2600, ["투톤 루프"]]
  ],
  "kgm-korando": [
    ["C5", 2410, ["딥컨트롤"]],
    ["C7", 2840, ["인포콘"]]
  ],
  "kgm-torres": [
    ["T5", 2810, ["세이프티 선루프"]],
    ["T7", 3220, ["하이디럭스"]],
    ["블랙 에디션", 3540, ["블랙 전용 외관"]]
  ],
  "kgm-actyon": [
    ["S7", 3395, ["컴포트"]],
    ["S9", 3851, ["스마트 테일게이트"]]
  ]
};

vehicles.forEach((vehicle) => {
  if (!trimOverrides[vehicle.id]) return;
  vehicle.trims = trimOverrides[vehicle.id].map(([name, basePrice, options]) => ({
    name,
    basePrice,
    options,
    finalPrice: basePrice + options.reduce((sum, optionName) => {
      const option = vehicle.packages.find((pack) => optionName.includes(pack.name) || pack.name.includes(optionName));
      return sum + (option?.price || 0);
    }, 0)
  }));
});

const state = {
  brand: "all",
  segment: "all",
  search: "",
  compare: [],
  popularIndex: 0
};

const won = (value) => `${Number(value).toLocaleString("ko-KR")}만원`;
const byId = (id) => vehicles.find((vehicle) => vehicle.id === id);
const minTrimPrice = (vehicle) => Math.min(...vehicle.trims.map((trim) => trim.basePrice));
const maxPromotion = (vehicle) => Math.max(...vehicle.promotions.map((promo) => promo.amount));

function setTone(element, vehicle) {
  element.style.setProperty("--tone-a", vehicle.imageTone[0]);
  element.style.setProperty("--tone-b", vehicle.imageTone[1]);
}

function filteredVehicles() {
  return vehicles.filter((vehicle) => {
    const brandMatch = state.brand === "all" || vehicle.brand === state.brand;
    const segmentMatch = state.segment === "all" || vehicle.segment === state.segment;
    const searchMatch =
      !state.search ||
      vehicle.model.toLowerCase().includes(state.search.toLowerCase()) ||
      vehicle.brand.toLowerCase().includes(state.search.toLowerCase());
    return brandMatch && segmentMatch && searchMatch;
  });
}

function vehicleCard(vehicle, compact = false) {
  return `
    <article class="vehicle-card" data-id="${vehicle.id}">
      <div class="vehicle-art" aria-hidden="true"></div>
      <div class="card-topline">
        <span class="brand-pill">${vehicle.brand}</span>
        <span class="segment-pill">${vehicle.segment}</span>
      </div>
      <h3>${vehicle.model}</h3>
      <p>${vehicle.summary}</p>
      <strong>${won(minTrimPrice(vehicle))}부터</strong>
      ${
        compact
          ? ""
          : `<div class="card-actions">
              <button class="primary-btn small" type="button" data-action="detail" data-id="${vehicle.id}">상세 보기</button>
              <button class="ghost-btn small" type="button" data-action="compare" data-id="${vehicle.id}">비교 담기</button>
            </div>`
      }
    </article>
  `;
}

function renderGrid() {
  const grid = document.querySelector("#vehicleGrid");
  const results = filteredVehicles();
  grid.innerHTML = results.map((vehicle) => vehicleCard(vehicle)).join("");
  document.querySelector("#resultCount").textContent = `${results.length}개 모델 표시 중`;
  grid.querySelectorAll(".vehicle-card").forEach((card) => setTone(card.querySelector(".vehicle-art"), byId(card.dataset.id)));
}

function renderPopular() {
  const sorted = [...vehicles].sort((a, b) => b.popularity - a.popularity).slice(0, 6);
  const slider = document.querySelector("#popularSlider");
  slider.innerHTML = sorted.map((vehicle) => vehicleCard(vehicle)).join("");
  slider.querySelectorAll(".vehicle-card").forEach((card) => setTone(card.querySelector(".vehicle-art"), byId(card.dataset.id)));
}

function renderSuggestions() {
  document.querySelector("#modelSuggestions").innerHTML = vehicles
    .map((vehicle) => `<option value="${vehicle.model}"></option>`)
    .join("");
}

function renderDetail(id) {
  const vehicle = byId(id);
  if (!vehicle) return;
  const rivals = vehicles.filter((item) => item.segment === vehicle.segment && item.id !== vehicle.id).slice(0, 3);
  const detail = document.querySelector("#detail");
  const view = document.querySelector("#detailView");
  view.innerHTML = `
    <div class="section-heading">
      <div>
        <span class="eyebrow">${vehicle.brand} · ${vehicle.segment}</span>
        <h2>${vehicle.model}</h2>
      </div>
      <button class="ghost-btn small" type="button" data-action="compare" data-id="${vehicle.id}">비교 담기</button>
    </div>
    <div class="detail-hero">
      <div class="gallery">
        <div class="gallery-main vehicle-art" aria-label="${vehicle.model} 외관 이미지"></div>
        <div class="gallery-thumbs" aria-label="외관 이미지 갤러리 썸네일">
          <div></div><div></div><div></div>
        </div>
      </div>
      <article class="detail-card">
        <p class="muted">${vehicle.summary}</p>
        <dl class="spec-grid">
          ${Object.entries({
            전장: `${vehicle.specs.length}mm`,
            전폭: `${vehicle.specs.width}mm`,
            전고: `${vehicle.specs.height}mm`,
            축거: `${vehicle.specs.wheelbase}mm`,
            공차중량: `${vehicle.specs.weight}kg`,
            연비: `${vehicle.specs.efficiency}km/L`,
            배기량: `${vehicle.specs.displacement}cc`,
            연료: vehicle.specs.fuel,
            구동방식: vehicle.specs.drivetrain
          })
            .map(([key, value]) => `<div class="spec-item"><dt>${key}</dt><dd>${value}</dd></div>`)
            .join("")}
        </dl>
      </article>
    </div>
    <article class="detail-card">
      <h3>트림별 가격표</h3>
      <div class="trim-list">
        ${vehicle.trims
          .map(
            (trim) => `
          <div class="trim-row">
            <div><strong>${trim.name}</strong><span>${trim.options.join(", ")}</span></div>
            <div><span>기본가 ${won(trim.basePrice)}</span><strong>최종 ${won(trim.finalPrice)}</strong></div>
          </div>`
          )
          .join("")}
      </div>
    </article>
    <article class="detail-card">
      <h3>옵션 패키지</h3>
      <div class="package-list">
        ${vehicle.packages.map((pack) => `<div class="package-row"><strong>${pack.name}</strong><span>+ ${won(pack.price)}</span></div>`).join("")}
      </div>
    </article>
    <article class="detail-card">
      <h3>프로모션/할인 정보</h3>
      <div class="package-list">
        ${vehicle.promotions
          .map((promo) => `<div class="package-row"><strong>${promo.type} ${won(promo.amount)}</strong><span>${promo.condition} · ${promo.period}</span></div>`)
          .join("")}
      </div>
    </article>
    <article class="detail-card">
      <h3>경쟁 모델 추천</h3>
      <div class="rival-list">
        ${rivals.map((rival) => `<button class="ghost-btn small" type="button" data-action="detail" data-id="${rival.id}">${rival.brand} ${rival.model}</button>`).join("")}
      </div>
    </article>
  `;
  detail.hidden = false;
  detail.scrollIntoView({ behavior: "smooth", block: "start" });
  view.querySelectorAll(".vehicle-art, .gallery-thumbs div").forEach((element) => setTone(element, vehicle));
}

function addCompare(id) {
  if (state.compare.includes(id)) return;
  if (state.compare.length >= 3) {
    document.querySelector("#shareMessage").textContent = "비교는 최대 3대까지 가능합니다.";
    return;
  }
  state.compare.push(id);
  renderCompare();
}

function renderCompare() {
  const selected = state.compare.map(byId).filter(Boolean);
  const wrap = document.querySelector("#compareTable");
  const selectedList = document.querySelector("#selectedCompareList");
  selectedList.innerHTML = selected.length
    ? selected
        .map(
          (vehicle) => `
            <span class="compare-token">
              ${vehicle.brand} ${vehicle.model}
              <button type="button" data-action="remove-compare" data-id="${vehicle.id}" aria-label="${vehicle.model} 비교에서 삭제">×</button>
            </span>
          `
        )
        .join("")
    : `<span class="compare-empty">아직 선택된 비교 차량이 없습니다.</span>`;

  if (!selected.length) {
    wrap.innerHTML = `<div class="detail-card"><p class="muted">비교할 차량을 선택해 주세요. 카드의 비교 담기 버튼으로도 추가할 수 있습니다.</p></div>`;
    return;
  }

  const cheapest = Math.min(...selected.map(minTrimPrice));
  const bestEfficiency = Math.max(...selected.map((vehicle) => vehicle.specs.efficiency));
  const bestDiscount = Math.max(...selected.map(maxPromotion));
  const longest = Math.max(...selected.map((vehicle) => vehicle.specs.length));

  const badge = (show, label = "우세") => (show ? `<span class="winner-badge">${label}</span>` : "");
  const cells = (mapper) => selected.map(mapper).join("");
  wrap.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr><th>항목</th>${selected.map((vehicle) => `<th>${vehicle.brand}<br>${vehicle.model}</th>`).join("")}</tr>
      </thead>
      <tbody>
        <tr><th>가격</th>${cells((vehicle) => `<td>${won(minTrimPrice(vehicle))}부터 ${badge(minTrimPrice(vehicle) === cheapest, "최저")}</td>`)}</tr>
        <tr><th>제원</th>${cells((vehicle) => `<td>전장 ${vehicle.specs.length}mm<br>축거 ${vehicle.specs.wheelbase}mm ${badge(vehicle.specs.length === longest, "공간")}</td>`)}</tr>
        <tr><th>안전·편의</th>${cells((vehicle) => `<td><strong>${vehicle.safety}</strong><br>${vehicle.convenience}</td>`)}</tr>
        <tr><th>연비</th>${cells((vehicle) => `<td>${vehicle.specs.efficiency}km/L ${badge(vehicle.specs.efficiency === bestEfficiency, "고연비")}</td>`)}</tr>
        <tr><th>할인 혜택</th>${cells((vehicle) => `<td>${won(maxPromotion(vehicle))} ${badge(maxPromotion(vehicle) === bestDiscount, "최대")}</td>`)}</tr>
        <tr><th>선택 해제</th>${cells((vehicle) => `<td><button class="text-btn" type="button" data-action="remove-compare" data-id="${vehicle.id}">삭제</button></td>`)}</tr>
      </tbody>
    </table>
  `;
}

function renderCompareSelects() {
  const options = vehicles.map((vehicle) => `<option value="${vehicle.id}">${vehicle.brand} ${vehicle.model}</option>`).join("");
  document.querySelector("#compareSelect").innerHTML = options;
  document.querySelector("#simVehicle").innerHTML = options;
}

function renderSimulationVehicle() {
  const vehicle = byId(document.querySelector("#simVehicle").value) || vehicles[0];
  document.querySelector("#simTrim").innerHTML = vehicle.trims
    .map((trim, index) => `<option value="${index}">${trim.name} · ${won(trim.basePrice)}</option>`)
    .join("");
  document.querySelector("#optionList").innerHTML = vehicle.packages
    .map(
      (pack, index) => `
        <label>
          <span><input type="checkbox" value="${index}" /> ${pack.name}</span>
          <strong>+ ${won(pack.price)}</strong>
        </label>
      `
    )
    .join("");
  calculateSimulation();
}

function calculateSimulation() {
  const vehicle = byId(document.querySelector("#simVehicle").value) || vehicles[0];
  const trim = vehicle.trims[Number(document.querySelector("#simTrim").value)] || vehicle.trims[0];
  const checked = [...document.querySelectorAll("#optionList input:checked")].map((input) => vehicle.packages[Number(input.value)]);
  const optionTotal = checked.reduce((sum, pack) => sum + pack.price, 0);
  const before = trim.basePrice + optionTotal;
  const discount = maxPromotion(vehicle);
  const after = Math.max(before - discount, 0);
  const annualRate = Number(document.querySelector("#interestRate").value) / 100;
  const months = Number(document.querySelector("#loanMonths").value);
  const monthlyRate = annualRate / 12;
  const principal = after * 10000;
  const monthly =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

  document.querySelector("#simTitle").textContent = `${vehicle.brand} ${vehicle.model} ${trim.name}`;
  document.querySelector("#beforeDiscount").textContent = won(before);
  document.querySelector("#discountTotal").textContent = `- ${won(discount)}`;
  document.querySelector("#afterDiscount").textContent = won(after);
  document.querySelector("#monthlyPayment").textContent = `${Math.round(monthly / 10000).toLocaleString("ko-KR")}만원`;
}

function renderPromotions() {
  document.querySelector("#promotionGrid").innerHTML = vehicles
    .map((vehicle) => {
      const promo = vehicle.promotions[0];
      return `
        <article class="promotion-card">
          <div class="promo-meta">
            <span class="brand-pill">${vehicle.brand}</span>
            <span class="segment-pill">${vehicle.segment}</span>
          </div>
          <h3>${vehicle.model}</h3>
          <strong>${promo.type} ${won(promo.amount)}</strong>
          <p class="muted">${promo.condition}<br>${promo.period}</p>
        </article>
      `;
    })
    .join("");
}

function hydrateFromUrl() {
  const params = new URLSearchParams(location.search);
  const compare = params.get("compare");
  if (compare) {
    state.compare = compare.split(",").filter((id) => byId(id)).slice(0, 3);
  }
}

function bindEvents() {
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".gnb").classList.toggle("is-open");
  });

  document.querySelectorAll(".chip").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.filterType;
      state[type] = button.dataset.value;
      document.querySelectorAll(`[data-filter-type="${type}"]`).forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderGrid();
    });
  });

  document.querySelector("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderGrid();
  });

  document.body.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-action]");
    if (!trigger) return;
    const { action, id } = trigger.dataset;
    if (action === "detail") renderDetail(id);
    if (action === "compare") {
      addCompare(id);
      document.querySelector("#compare").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (action === "remove-compare") {
      state.compare = state.compare.filter((item) => item !== id);
      renderCompare();
    }
  });

  document.querySelector("#prevPopular").addEventListener("click", () => {
    document.querySelector("#popularSlider").scrollBy({ left: -320, behavior: "smooth" });
  });

  document.querySelector("#nextPopular").addEventListener("click", () => {
    document.querySelector("#popularSlider").scrollBy({ left: 320, behavior: "smooth" });
  });

  document.querySelector("#addCompare").addEventListener("click", () => addCompare(document.querySelector("#compareSelect").value));
  document.querySelector("#clearCompare").addEventListener("click", () => {
    state.compare = [];
    document.querySelector("#shareMessage").textContent = "";
    renderCompare();
  });

  document.querySelector("#shareCompare").addEventListener("click", async () => {
    if (!state.compare.length) {
      document.querySelector("#shareMessage").textContent = "비교할 차량을 먼저 선택해 주세요.";
      return;
    }
    const url = `${location.origin}${location.pathname}?compare=${state.compare.join(",")}#compare`;
    try {
      await navigator.clipboard.writeText(url);
      document.querySelector("#shareMessage").textContent = "공유 링크를 클립보드에 복사했습니다.";
    } catch {
      document.querySelector("#shareMessage").textContent = url;
    }
  });

  document.querySelector("#simVehicle").addEventListener("change", renderSimulationVehicle);
  document.querySelector("#simTrim").addEventListener("change", calculateSimulation);
  document.querySelector("#optionList").addEventListener("change", calculateSimulation);
  document.querySelector("#interestRate").addEventListener("input", calculateSimulation);
  document.querySelector("#loanMonths").addEventListener("input", calculateSimulation);
}

function init() {
  hydrateFromUrl();
  renderSuggestions();
  renderPopular();
  renderGrid();
  renderCompareSelects();
  renderCompare();
  renderSimulationVehicle();
  renderPromotions();
  bindEvents();
}

init();
