/* ==========================================================================
   Hanan UGC Landing Page - JS Controller (script.js)
   ========================================================================== */

// 1. CONFIGURATION BLOCK (Easily editable handles)
const CONFIG = {
    whatsapp: "966577973806", // WhatsApp Number
    tiktok: "https://www.tiktok.com/@lafat_makkah?_r=1&_t=ZS-98Xhkbvo3Zi",
    instagram: "https://instagram.com/hanan_ugc",
    telegram: "https://t.me/hanan_ugc",
    email: "contact@hananugc.com"
};

// 2. PORTFOLIO DATA (Dynamic Portfolio database with new featured video works)
const PORTFOLIO_DATA = [
    {
        id: 1,
        type: 'video',
        title: 'استعراض إعلاني إبداعي - إبراز تفاصيل وجودة المنتج 🌟',
        category: 'فيديو UGC إعلاني',
        badge: '✨ عمل جديد',
        thumbnail: 'videos/ugc-work-1.mp4',
        url: 'videos/ugc-work-1.mp4',
        views: '48.5K',
        duration: '0:22'
    },
    {
        id: 2,
        type: 'video',
        title: 'تجربة ومراجعة حية لمنتجات الجمال والعناية الطبيعية 🌸',
        category: 'تغطية وتجربة منتج',
        badge: '🔥 الأكثر طلباً',
        thumbnail: 'videos/ugc-work-2.mp4',
        url: 'videos/ugc-work-2.mp4',
        views: '39.2K',
        duration: '0:19'
    },
    {
        id: 3,
        type: 'video',
        title: 'محتوى ريلز وتيك توك إبداعي سريع التفاعل والانتشار 🚀',
        category: 'ريلز & تيك توك UGC',
        badge: '⭐ مميز',
        thumbnail: 'videos/ugc-work-3.mp4',
        url: 'videos/ugc-work-3.mp4',
        views: '54.8K',
        duration: '0:32'
    },
    {
        id: 4,
        type: 'video',
        title: 'روتين العناية بالبشرة والجمال بأسلوب عصري فخم 💄',
        category: 'فيديو UGC روتين',
        badge: '✨ روتين جمالي',
        thumbnail: 'videos/er.mp4',
        url: 'videos/er.mp4',
        views: '24.5K',
        duration: '0:15'
    },
    {
        id: 5,
        type: 'video',
        title: 'عناية بالبشرة وتنظيف لطيف مع منتجات ARENCIA 🌿',
        category: 'فيديو UGC ترويجي',
        thumbnail: 'images/arencia-cleanser.jpg',
        url: 'https://player.vimeo.com/external/430635417.sd.mp4?s=d4f1cd05a30fe86a1dfc79679c13b2d186c67ef5&profile_id=165&oauth2_token_id=57447761',
        views: '22.1K',
        duration: '0:20'
    },
    {
        id: 6,
        type: 'video',
        title: 'تصوير تفصيلي لأرواج وبلاشر إيف سان لوران الفاخرة 💄',
        category: 'تصوير منتجات سينمائي',
        thumbnail: 'images/ysl-makeup.jpg',
        url: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054ba208d9040a444402ebcfb6eb063&profile_id=139&oauth2_token_id=57447761',
        views: '18.9K',
        duration: '0:18'
    },
    {
        id: 7,
        type: 'photo',
        title: 'جلسة تصوير احترافية لمنتج زبدة الجسم MOREÓ 🌸',
        category: 'تصوير منتجات فوتوغرافي',
        badge: '📸 لقطة احترافية',
        thumbnail: 'images/moreo-body-butter.jpg',
        url: 'images/moreo-body-butter.jpg',
        views: 'تصوير فوتوغرافي',
        duration: 'دقة عالية HD'
    },
    {
        id: 8,
        type: 'photo',
        title: 'تصوير تفصيلي لعلبة البلاشر وأرواج إيف سان لوران الفاخرة 💄',
        category: 'تصوير منتجات فوتوغرافي',
        badge: '📸 لقطة احترافية',
        thumbnail: 'images/ysl-makeup.jpg',
        url: 'images/ysl-makeup.jpg',
        views: 'تصوير فوتوغرافي',
        duration: 'دقة عالية HD'
    },
    {
        id: 9,
        type: 'photo',
        title: 'لقطة مقربة تفصيلية لمقشر السكر العضوي METODOLOGIA 🍇',
        category: 'تصوير منتجات فوتوغرافي',
        badge: '📸 لقطة احترافية',
        thumbnail: 'images/metodologia-scrub.jpg',
        url: 'images/metodologia-scrub.jpg',
        views: 'تصوير فوتوغرافي',
        duration: 'دقة عالية HD'
    },
    {
        id: 10,
        type: 'photo',
        title: 'تصوير صندوق منتجات العناية بالبشرة العشبية من ARENCIA 🌿',
        category: 'تصوير منتجات فوتوغرافي',
        badge: '📸 لقطة احترافية',
        thumbnail: 'images/arencia-cleanser.jpg',
        url: 'images/arencia-cleanser.jpg',
        views: 'تصوير فوتوغرافي',
        duration: 'دقة عالية HD'
    }
];

// Active state variables
let currentLightboxIndex = 0;
let currentPlayingVideo = null;
let videoObserver = null;

// 3. INITIALIZATION AND EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    
    // Set dynamic current year in footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
    
    // Setup WhatsApp links dynamically
    const phoneNo = CONFIG.whatsapp;
    const heroWaLink = document.getElementById('heroWaLink');
    if (heroWaLink) {
        heroWaLink.href = `https://wa.me/${phoneNo}?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D8%AD%D9%86%D8%A7%D9%86%D8%8C%20%D9%86%D9%88%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86%20%D9%85%D8%B9%D9%83%20%D9%81%D9%8A%20%D8%AD%D9%85%D9%84%D8%A9%20%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9`;
    }
    const footerWaText = document.getElementById('footerWaText');
    if (footerWaText) {
        footerWaText.textContent = `+${phoneNo.slice(0,3)} ${phoneNo.slice(3,5)} ${phoneNo.slice(5,8)} ${phoneNo.slice(8)}`;
    }

    // Render Portfolio Items
    renderPortfolio(PORTFOLIO_DATA);

    // Setup Smart Auto-play with Intersection Observer
    setupAutoPlayObserver();

    // Scroll Events
    window.addEventListener('scroll', handleScrollEffects, { passive: true });

    // Hamburger Mobile Menu
    setupMobileMenu();

    // Portfolio Filters
    setupPortfolioFilters();

    // Lightbox Controls
    setupLightbox();

    // Form Submission
    setupCollaborationForm();
});

// ==========================================
// 4. SCROLL EFFECTS (Progress, Sticky Nav, Highlight, Back-to-Top)
// ==========================================
function handleScrollEffects() {
    const header = document.getElementById('headerNav');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const scrollProgress = document.getElementById('scrollBar');
    
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    if (backToTopBtn) {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
        scrollProgress.style.width = scrollPercentage + '%';
    }

    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    if (currentSectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

const backToTopBtn = document.getElementById('backToTopBtn');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// 5. MOBILE HAMBURGER MENU ACTIONS
// ==========================================
function setupMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-cta-btn');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ==========================================
// 6. RENDER PORTFOLIO ITEMS WITH PROFESSIONAL AUTOPLAY
// ==========================================
function renderPortfolio(items) {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    grid.innerHTML = '';

    items.forEach((item, index) => {
        const isVideo = item.type === 'video';
        const isVideoThumbnail = isVideo && item.thumbnail && item.thumbnail.endsWith('.mp4');

        const mediaHtml = isVideoThumbnail
            ? `<video class="portfolio-thumb portfolio-video-auto" src="${item.thumbnail}" loop muted playsinline preload="metadata" data-index="${index}"></video>`
            : `<img class="portfolio-thumb" src="${item.thumbnail}" alt="${item.title}" loading="lazy">`;

        const badgeHtml = item.badge 
            ? `<div class="portfolio-card-badge">${item.badge}</div>` 
            : '';

        const soundBtnHtml = isVideoThumbnail
            ? `<button class="portfolio-sound-btn" data-index="${index}" aria-label="تشغيل/كتم الصوت" title="كتم / تشغيل الصوت"><i class="fas fa-volume-mute"></i></button>`
            : '';

        const liveIndicatorHtml = isVideoThumbnail
            ? `<div class="portfolio-live-indicator"><span class="live-dot"></span> تشغيل تلقائي</div>`
            : '';

        const itemHtml = `
            <div class="portfolio-item ${isVideo ? 'item-video' : 'item-photo'}" data-type="${item.type}" data-index="${index}">
                <div class="portfolio-thumbnail-wrap">
                    ${mediaHtml}
                    ${badgeHtml}
                    ${soundBtnHtml}
                    ${liveIndicatorHtml}
                    
                    <!-- Hover overlay details -->
                    <div class="portfolio-overlay" onclick="openLightbox(${index})">
                        ${isVideo ? `
                            <div class="portfolio-play-icon" title="مشاهدة بالشاشة الكاملة مع الصوت">
                                <i class="fas fa-play"></i>
                            </div>
                        ` : `
                            <div class="portfolio-play-icon" title="عرض الصورة بدقة كاملة">
                                <i class="fas fa-expand"></i>
                            </div>
                        `}
                        <div class="portfolio-item-category">${item.category}</div>
                        <h4 class="portfolio-item-title">${item.title}</h4>
                        
                        <div class="portfolio-item-meta">
                            <div class="portfolio-meta-views">
                                <i class="${isVideo ? 'far fa-eye' : 'far fa-image'}"></i>
                                <span>${item.views}</span>
                            </div>
                            <div class="portfolio-meta-duration">
                                <i class="${isVideo ? 'far fa-clock' : 'fas fa-expand-arrows-alt'}"></i>
                                <span>${item.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', itemHtml);
    });

    // Attach sound toggle listeners
    document.querySelectorAll('.portfolio-sound-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Don't trigger openLightbox
            toggleCardSound(btn);
        });
    });
}

// Toggle sound directly on card
function toggleCardSound(button) {
    const card = button.closest('.portfolio-item');
    const video = card ? card.querySelector('video') : null;
    if (!video) return;

    // If currently muted, unmute it and mute all other cards
    if (video.muted) {
        // Mute all other video cards
        document.querySelectorAll('.portfolio-video-auto').forEach(v => {
            if (v !== video) {
                v.muted = true;
                const otherBtn = v.closest('.portfolio-item')?.querySelector('.portfolio-sound-btn');
                if (otherBtn) {
                    otherBtn.classList.remove('unmuted');
                    otherBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                }
            }
        });

        video.muted = false;
        video.play().catch(() => {});
        button.classList.add('unmuted');
        button.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        video.muted = true;
        button.classList.remove('unmuted');
        button.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

// ==========================================
// 7. SMART AUTOPLAY OBSERVER (Viewport aware)
// ==========================================
function setupAutoPlayObserver() {
    if ('IntersectionObserver' in window) {
        videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    // Play video smoothly when visible
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {
                            // Autoplay was prevented by browser policy (safely ignore)
                        });
                    }
                } else {
                    // Pause when out of screen to save performance and battery
                    video.pause();
                }
            });
        }, {
            threshold: 0.25, // Trigger when 25% of video is in view
            rootMargin: '50px 0px 50px 0px'
        });

        document.querySelectorAll('.portfolio-video-auto').forEach(video => {
            videoObserver.observe(video);

            // Hover trigger to ensure instant response
            const parentItem = video.closest('.portfolio-item');
            if (parentItem) {
                parentItem.addEventListener('mouseenter', () => {
                    video.play().catch(() => {});
                });
            }
        });
    } else {
        // Fallback: auto-play all muted
        document.querySelectorAll('.portfolio-video-auto').forEach(video => {
            video.play().catch(() => {});
        });
    }
}

// ==========================================
// 8. PORTFOLIO TABS FILTER LOGIC
// ==========================================
function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.portfolio-tab-btn');
    const gridItems = document.getElementsByClassName('portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            Array.from(gridItems).forEach(item => {
                const itemType = item.getAttribute('data-type');
                const video = item.querySelector('video');
                
                if (filterValue === 'all' || itemType === filterValue) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInScale 0.4s ease-out forwards';
                    if (video) {
                        video.play().catch(() => {});
                    }
                } else {
                    item.classList.add('hidden');
                    if (video) {
                        video.pause();
                    }
                }
            });
        });
    });
}

// ==========================================
// 9. MODERN ENHANCED LIGHTBOX CONTROLLER
// ==========================================
function setupLightbox() {
    const modal = document.getElementById('lightboxModal');
    const closeBtn = document.getElementById('lightboxCloseBtn');
    const prevBtn = document.getElementById('lightboxPrevBtn');
    const nextBtn = document.getElementById('lightboxNextBtn');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', navigatePrevLightbox);
    if (nextBtn) nextBtn.addEventListener('click', navigateNextLightbox);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!modal || !modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            navigatePrevLightbox(); // In RTL, right is previous item
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            navigateNextLightbox(); // In RTL, left is next item
        }
    });
}

function openLightbox(index) {
    const modal = document.getElementById('lightboxModal');
    const videoPlayer = document.getElementById('lightboxVideo');
    const imageViewer = document.getElementById('lightboxImage');
    const titleText = document.getElementById('lightboxTitle');
    const catText = document.getElementById('lightboxCategory');
    const viewsText = document.getElementById('lightboxViews');
    const orderBtn = document.getElementById('lightboxOrderBtn');
    
    currentLightboxIndex = index;
    const selectedItem = PORTFOLIO_DATA[index];
    if (!selectedItem) return;

    if (titleText) titleText.textContent = selectedItem.title;
    if (catText) catText.textContent = selectedItem.category;
    if (viewsText) viewsText.textContent = `${selectedItem.views} • ${selectedItem.duration}`;

    // Update WhatsApp order CTA button with dynamic message
    if (orderBtn) {
        const orderMsg = `*طلب فيديو UGC جديد - Hanan UGC* 🌟\n\nأهلاً حنان، شاهدت عملك في المعرض بعنوان:\n"${selectedItem.title}"\nوأود التعاون معك لتنفيذ فيديو احترافي مشابه لعلامتي التجارية 💼`;
        orderBtn.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(orderMsg)}`;
    }

    // Reset media
    if (videoPlayer) {
        videoPlayer.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = '';
    }
    if (imageViewer) {
        imageViewer.style.display = 'none';
        imageViewer.src = '';
    }

    if (selectedItem.type === 'video' && videoPlayer) {
        videoPlayer.src = selectedItem.url;
        videoPlayer.style.display = 'block';
        videoPlayer.muted = false; // Play with audio in full lightbox mode
        videoPlayer.currentTime = 0;
        
        const playPromise = videoPlayer.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay with sound might require user gesture in some browsers
                videoPlayer.muted = true;
                videoPlayer.play().catch(() => {});
            });
        }
        currentPlayingVideo = videoPlayer;
    } else if (imageViewer) {
        imageViewer.src = selectedItem.url;
        imageViewer.style.display = 'block';
        currentPlayingVideo = null;
    }

    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    const videoPlayer = document.getElementById('lightboxVideo');
    
    if (currentPlayingVideo && videoPlayer) {
        videoPlayer.pause();
        videoPlayer.src = '';
        currentPlayingVideo = null;
    }

    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateNextLightbox() {
    let nextIndex = currentLightboxIndex + 1;
    if (nextIndex >= PORTFOLIO_DATA.length) {
        nextIndex = 0;
    }
    openLightbox(nextIndex);
}

function navigatePrevLightbox() {
    let prevIndex = currentLightboxIndex - 1;
    if (prevIndex < 0) {
        prevIndex = PORTFOLIO_DATA.length - 1;
    }
    openLightbox(prevIndex);
}

// ==========================================
// 10. COLLABORATION FORM REDIRECT TO WHATSAPP
// ==========================================
function setupCollaborationForm() {
    const form = document.getElementById('collabForm');
    const toast = document.getElementById('toastMsg');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('clientName')?.value.trim();
        const service = document.getElementById('serviceType')?.value;
        const brief = document.getElementById('projectBrief')?.value.trim();

        if (!name || !service || !brief) {
            alert('يرجى ملء جميع الحقول المطلوبة بشكل صحيح.');
            return;
        }

        let serviceArabic = "";
        switch (service) {
            case "UGC Video":
                serviceArabic = "فيديو UGC ترويجي قصير";
                break;
            case "Product Photo":
                serviceArabic = "جلسة تصوير منتجات فوتوغرافية";
                break;
            case "Review & Test":
                serviceArabic = "تجربة وتقييم منتجات";
                break;
            case "Event Coverage":
                serviceArabic = "تغطية إعلانية ميدانية";
                break;
            default:
                serviceArabic = service;
        }

        const whatsappMsg = `*طلب تعاون جديد - Hanan UGC* 💼
-----------------------------
*الاسم/البراند:* ${name}
*نوع الخدمة:* ${serviceArabic}
*تفاصيل المشروع:*
${brief}
-----------------------------
تم الإرسال من صفحة معرض أعمال حنان ✨`;

        const encodedMsg = encodeURIComponent(whatsappMsg);
        const finalWhatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodedMsg}`;

        if (toast) toast.classList.add('show');
        
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;

        setTimeout(() => {
            if (toast) toast.classList.remove('show');
            if (submitBtn) submitBtn.disabled = false;
            form.reset();
            window.location.href = finalWhatsappUrl;
        }, 1800);
    });
}
