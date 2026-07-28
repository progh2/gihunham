# 함샘의 작업공방 BBS

90년대 후반 한국 PC통신(하이텔) 감성으로 만든 개인 페이지입니다.
외부 라이브러리 없이 **HTML + CSS + 순수 JavaScript**로만 제작했습니다.

## 구성

| 페이지 | 파일 | 설명 |
|---|---|---|
| 메인 (BBS) | `index.html` | 하이텔 스타일 텍스트 게시판. 좌측 번호 메뉴 + 하단 명령 입력 |
| 오락실 | `tettris.html` | 테트리스 게임 |
| 웹디자인개발기능사 샘플 | `webdesigndev.html` | 실기 공개과제 ① `JUST 쇼핑몰` 답안 예제 |

메인 페이지의 좌측 메뉴에서 번호를 클릭하거나, 하단 입력창에 번호를 입력하고 Enter를 누르면 이동합니다.

- `6` → 오락실(테트리스)
- `7` → 웹디자인개발기능사 샘플 (새 창)

## 폴더 구조

```
.
├─ index.html            # 메인 BBS 페이지
├─ tettris.html          # 테트리스
├─ webdesigndev.html     # 웹디자인개발기능사 실기 샘플
├─ css/
│  └─ style.css          # webdesigndev.html 스타일
├─ script/
│  └─ script.js          # webdesigndev.html 스크립트
└─ images/               # 로고 / 슬라이드 / 갤러리 이미지
```

## 웹디자인개발기능사 샘플 (`webdesigndev.html`)

국가기술자격 웹디자인개발기능사 실기 **공개과제 ① JUST 쇼핑몰** 요구사항에 맞춰 제작했습니다.

- **Ⓐ Header** — 200×40 워드타입 로고, 메인 메뉴 4개 + 서브 메뉴 (mouse over 시 부드럽게 노출)
- **Ⓑ Slide** — 이미지 3장이 위 → 아래로 이동하며 전환, 2.8초 간격 자동 무한 반복
- **Ⓒ Contents** — 공지사항/갤러리 탭, 배너, 바로가기 (배너·바로가기는 이미지 없이 HTML 코딩)
- **Ⓓ Footer** — grayscale 로고, Copyright, SNS 3개
- 공지사항 첫 번째 글 클릭 시 **레이어 팝업** (닫기 버튼 / ESC / 배경 클릭으로 닫힘)

기술적 준수 사항: HTML5 웹표준, `charset=utf-8`, CSS·JS 외부 파일 분리, 모든 이미지 `alt` 속성,
Tab 키 이동 가능, Table 미사용 CSS 레이아웃, CSS 해제 시 콘텐츠 세로 나열, 반응형 대응.

> `images/` 안의 SVG는 자리표시용 그래픽입니다. 실제 시험에서는 시험장 제공 이미지로 교체하고,
> 폴더명을 본인 비번호로 지정해 제출하세요.

## 로컬에서 실행

별도 빌드 과정이 없습니다. `index.html`을 브라우저에서 열면 됩니다.

```bash
# 간단한 로컬 서버로 확인하고 싶다면
python -m http.server 8000
# http://localhost:8000
```

## GitHub Pages 배포

1. 저장소 → **Settings** → **Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` / 폴더: `/ (root)` → **Save**
4. 잠시 후 `https://<사용자명>.github.io/<저장소명>/` 에서 확인

## 라이선스

개인 학습용 프로젝트입니다.
