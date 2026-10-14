/**
 * ELLUS ACADEMIA — SCRIPT PRINCIPAL
 * Funcionalidades:
 * - Rotas e mensagens dinâmicas de WhatsApp (CRO)
 * - Controle acessível de reprodução do vídeo do Hero (A11y & Motion)
 * - Drawer de navegação mobile com trapping e suporte a ESC
 * - Copiar endereço com feedback visual instantâneo
 * - Revelação suave por Intersection Observer
 * - Detecção de scroll no header para efeito glassmorphic
 */

(function () {
  'use strict';

  // 1. DADOS OFICIAIS & WHATSAPP CRO
  const WA_NUMBER = '5511951857532';
  const FULL_ADDRESS = 'Rua João Antônio Ramos, 90 — Vila Granada, Mairinque - SP, CEP 18120-000';

  const WA_MESSAGES = {
    'hero-primary': 'Olá! Gostaria de conhecer a Ellus Academia e saber como começar meus treinos na Vila Granada.',
    'header': 'Olá! Gostaria de saber mais sobre a Ellus Academia e os horários de treino.',
    'mobile-drawer': 'Olá! Gostaria de falar com a equipe da Ellus Academia sobre treinos.',
    'diferenciais': 'Olá! Gostaria de entender melhor como funciona o acompanhamento de treinos na Ellus.',
    'visita': 'Olá! Gostaria de agendar uma visita para conhecer o espaço da Ellus Academia na Vila Granada.',
    'contato-link': 'Olá! Gostaria de conversar com a equipe da Ellus Academia.',
    'final-cta': 'Olá! Gostaria de dar o primeiro passo e começar a treinar na Ellus Academia.',
    'floating-btn': 'Olá! Estava navegando no site da Ellus e gostaria de mais informações.',
    'footer-phone': 'Olá! Gostaria de mais informações sobre a Ellus Academia em Mairinque.'
  };

  // Inicializar todos os links de WhatsApp com mensagens contextuais
  document.querySelectorAll('.wal').forEach(function (link) {
    const intent = link.getAttribute('data-wa-intent') || 'default';
    const message = WA_MESSAGES[intent] || 'Olá! Gostaria de mais informações sobre a Ellus Academia.';
    link.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  // Atualizar ano atual no rodapé
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. CONTROLE DO VÍDEO DO HERO & ACESSIBILIDADE DE MOVIMENTO
  const heroVideo = document.getElementById('heroVideo');
  const heroVideoToggle = document.getElementById('heroVideoToggle');
  const videoCtrlText = document.getElementById('videoCtrlText');
  const videoCtrlIcon = document.getElementById('videoCtrlIcon');

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function updateVideoToggleUI(isPaused) {
    if (!heroVideoToggle) return;
    heroVideoToggle.setAttribute('aria-pressed', isPaused ? 'true' : 'false');
    heroVideoToggle.setAttribute('aria-label', isPaused ? 'Reproduzir vídeo de fundo' : 'Pausar vídeo de fundo');
    if (videoCtrlText) {
      videoCtrlText.textContent = isPaused ? 'Reproduzir' : 'Pausar';
    }
    if (videoCtrlIcon) {
      if (isPaused) {
        // Ícone de Play
        videoCtrlIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
      } else {
        // Ícone de Pause
        videoCtrlIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
      }
    }
  }

  function handleReducedMotion(matches) {
    if (!heroVideo) return;
    if (matches) {
      heroVideo.pause();
      updateVideoToggleUI(true);
    } else {
      heroVideo.play().catch(function () {});
      updateVideoToggleUI(false);
    }
  }

  if (heroVideo && heroVideoToggle) {
    heroVideoToggle.addEventListener('click', function () {
      if (heroVideo.paused) {
        heroVideo.play();
        updateVideoToggleUI(false);
      } else {
        heroVideo.pause();
        updateVideoToggleUI(true);
      }
    });

    handleReducedMotion(reducedMotionQuery.matches);
    if (reducedMotionQuery.addEventListener) {
      reducedMotionQuery.addEventListener('change', function (e) {
        handleReducedMotion(e.matches);
      });
    }
  }

  // 3. MENU MOBILE ACESSÍVEL (DRAWER COM SUPORTE A ESC E LOCK DE SCROLL)
  const mbtn = document.getElementById('mbtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mbtnIcon = document.getElementById('mbtnIcon');

  function setMobileMenuState(isOpen) {
    if (!mobileDrawer || !mbtn) return;
    mobileDrawer.classList.toggle('open', isOpen);
    mobileDrawer.setAttribute('aria-hidden', (!isOpen).toString());
    mbtn.setAttribute('aria-expanded', isOpen.toString());
    mbtn.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (mbtnIcon) {
      if (isOpen) {
        // Ícone X
        mbtnIcon.innerHTML = '<path d="M6 18L18 6M6 6l12 12" stroke-linecap="round"/>';
      } else {
        // Ícone Hambúrguer
        mbtnIcon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/>';
      }
    }
  }

  if (mbtn && mobileDrawer) {
    mbtn.addEventListener('click', function () {
      const isOpen = mobileDrawer.classList.contains('open');
      setMobileMenuState(!isOpen);
    });

    // Fechar ao clicar em qualquer link da gaveta
    mobileDrawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        setMobileMenuState(false);
      }
    });

    // Fechar ao pressionar tecla Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        setMobileMenuState(false);
        mbtn.focus();
      }
    });
  }

  // 4. COPIAR ENDEREÇO COM FEEDBACK VISUAL INSTANTÂNEO
  const btnCopyAddress = document.getElementById('btnCopyAddress');
  const copyToast = document.getElementById('copyToast');
  let toastTimer = null;

  function showToast(message) {
    if (!copyToast) return;
    copyToast.textContent = message;
    copyToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      copyToast.classList.remove('show');
    }, 2800);
  }

  if (btnCopyAddress) {
    btnCopyAddress.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(FULL_ADDRESS).then(function () {
          showToast('Endereço copiado para a área de transferência!');
        }).catch(function () {
          fallbackCopyText(FULL_ADDRESS);
        });
      } else {
        fallbackCopyText(FULL_ADDRESS);
      }
    });
  }

  function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast('Endereço copiado para a área de transferência!');
    } catch (err) {
      showToast('Não foi possível copiar automaticamente.');
    }
    document.body.removeChild(textarea);
  }

  // 5. HEADER GLASSMORPHIC AO ROLAR
  const siteHeader = document.getElementById('siteHeader');
  function handleScrollHeader() {
    if (!siteHeader) return;
    if (window.scrollY > 25) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader();

  // 6. ANIMAÇÕES DE ENTRADA SUAVES (INTERSECTION OBSERVER)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && !reducedMotionQuery.matches) {
    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback para navegadores antigos ou reduced-motion
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }
})();
