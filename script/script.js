/* ============================================================
   웹디자인개발기능사 공개과제 ① JUST 쇼핑몰
   - B. Slide 애니메이션 (위 -> 아래 이동, 3초 이내, 자동 무한 반복)
   - C. 공지사항 / 갤러리 탭
   - C.1 레이어 팝업 (공지사항 첫 번째 글)
   ============================================================ */
(function () {
  'use strict';

  /* ===== B. Slide 애니메이션 : 위 → 아래 이동 방식, 3초 이내 자동 반복 ===== */
  var slide    = document.getElementById('slide');
  var track    = document.getElementById('slideTrack');
  var navBtns  = document.getElementById('slideNav').querySelectorAll('button');
  var TOTAL    = 3;         // 실제 이미지 수
  var DURATION = 700;       // 전환 시간(ms)
  var INTERVAL = 2800;      // 전환 간격(ms) - 3초 이내
  var idx = 0;
  var timer = null;

  function mark(n) {
    for (var i = 0; i < navBtns.length; i++) {
      navBtns[i].setAttribute('aria-current', i === n ? 'true' : 'false');
    }
  }

  function goTo(n, animate) {
    idx = n;
    track.style.transition = animate === false ? 'none' : 'transform ' + DURATION + 'ms ease';
    track.style.transform  = 'translateY(-' + (idx * 100) + '%)';
    mark(idx % TOTAL);
  }

  function next() {
    goTo(idx + 1, true);
    // 복제본(4번째)까지 이동한 뒤 애니메이션 없이 첫 장으로 되돌림 → 무한 반복
    if (idx === TOTAL) {
      setTimeout(function () { goTo(0, false); }, DURATION + 20);
    }
  }

  function play() { stop(); timer = setInterval(next, INTERVAL); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  for (var i = 0; i < navBtns.length; i++) {
    (function (n) {
      navBtns[n].addEventListener('click', function () { goTo(n, true); play(); });
    })(i);
  }

  // 마우스를 올리면 잠시 멈춤(가독성 확보)
  slide.addEventListener('mouseenter', stop);
  slide.addEventListener('mouseleave', play);

  play();   // 웹사이트를 열었을 때 자동 시작


  /* ===== C. 공지사항 / 갤러리 탭 ===== */
  var tabs = [
    { btn: document.getElementById('tabNotice'),  panel: document.getElementById('panelNotice') },
    { btn: document.getElementById('tabGallery'), panel: document.getElementById('panelGallery') }
  ];

  function selectTab(target) {
    tabs.forEach(function (t) {
      var on = (t === target);
      t.btn.setAttribute('aria-selected', on ? 'true' : 'false');
      t.panel.hidden = !on;
    });
  }

  tabs.forEach(function (t) {
    t.btn.addEventListener('click', function () { selectTab(t); });
  });


  /* ===== C.1 레이어 팝업 (공지사항 첫 번째 글) ===== */
  var layer    = document.getElementById('layerPopup');
  var openLink = document.getElementById('noticeFirst');
  var closeBtn = document.getElementById('btnClose');
  var dim      = layer.querySelector('.layer-dim');

  function openLayer(e) {
    e.preventDefault();
    layer.hidden = false;
    closeBtn.focus();
  }

  function closeLayer() {
    layer.hidden = true;
    openLink.focus();
  }

  openLink.addEventListener('click', openLayer);
  closeBtn.addEventListener('click', closeLayer);
  dim.addEventListener('click', closeLayer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !layer.hidden) { closeLayer(); }
  });
})();
