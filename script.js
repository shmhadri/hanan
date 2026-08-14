/* ==========================================================================
   Hanan UGC Landing Page - JS Controller (script.js)
   ========================================================================== */

// 1. CONFIGURATION BLOCK (Easily editable handles)
const CONFIG = {
    whatsapp: "966577973806", // Replace with real number (e.g. 9665XXXXXXXX)
    tiktok: "https://www.tiktok.com/@lafat_makkah?_r=1&_t=ZS-98Xhkbvo3Zi",
    instagram: "https://instagram.com/hanan_ugc",
    telegram: "https://t.me/hanan_ugc",
    email: "contact@hananugc.com"
};

// 2. PORTFOLIO DATA (Dynamic Portfolio database)
// Categories: 'video' (vertical UGC video) or 'photo' (product photography)
const PORTFOLIO_DATA = [
    {
        id: 1,
        type: 'video',
        title: 'استعراض إبداعي احترافي لروتين العناية بالبشرة ✨',
        category: 'فيديو UGC ترويجي',
        thumbnail: 'videos/er.mp4',
        poster: 'images/arencia-cleanser.jpg',
        url: 'videos/er.mp4',
        views: '24.5K',
        duration: '0:15'
    },
    {
        id: 2,
        type: 'video',
        title: 'عناية بالبشرة وتنظيف لطيف مع منتجات ARENCIA 🌿',
        category: 'فيديو UGC ترويجي',
        thumbnail: 'images/arencia-cleanser.jpg',
        url: 'https://player.vimeo.com/external/430635417.sd.mp4?s=d4f1cd05a30fe86a1dfc79679c13b2d186c67ef5&profile_id=165&oauth2_token_id=57447761',
        views: '22.1K',
        duration: '0:20'
    },
    {
        id: 3,
        type: 'video',
        title: 'تصوير تفصيلي لأرواج وبلاشر إيف سان لوران الفاخرة 💄',
        category: 'تصوير منتجات سينمائي',
        thumbnail: 'images/ysl-makeup.jpg',
        url: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054ba208d9040a444402ebcfb6eb063&profile_id=139&oauth2_token_id=57447761',
        views: '18.9K',
        duration: '0:18'
    },
    {
        id: 4,
        type: 'video',
        title: 'تجربة ملمس ونعومة زبدة الجسم من MOREÓ 🌸',
        category: 'فيديو UGC مراجعة',
        thumbnail: 'images/moreo-body-butter.jpg',
        url: 'https://player.vimeo.com/external/538569947.sd.mp4?s=2d87a747c34d3d526759c5d1b764d603a11dfb2c&profile_id=165&oauth2_token_id=57447761',
        views: '9.4K',
        duration: '0:25'
    },
    {
        id: 5,
        type: 'video',
        title: 'روتين الترطيب اليومي للشفاه باستعمال Dior Lip Glow 💋',
        category: 'فيديو UGC تجربة وتقييم',
        thumbnail: 'images/dior-lipglow.jpg',
        url: 'videos/er.mp4',
        views: '34.2K',
        duration: '0:30'
    },
    {
        id: 6,
        type: 'video',
        title: 'تقشير لطيف وتنعيم للبشرة بمنتج مقشر السكر METODOLOGIA ✨',
        category: 'فيديو UGC روتين',
        thumbnail: 'images/metodologia-scrub.jpg',
        url: 'https://player.vimeo.com/external/430635417.sd.mp4?s=d4f1cd05a30fe86a1dfc79679c13b2d186c67ef5&profile_id=165&oauth2_token_id=57447761',
        views: '12.3K',
        duration: '0:12'
    },
    {
        id: 7,
        type: 'photo',
        title: 'جلسة تصوير احترافية لمنتج زبدة الجسم MOREÓ 🌸',
        category: 'تصوير منتجات فوتوغرافي',
        thumbnail: 'images/moreo-body-butter.jpg',
        url: 'images/moreo-body-butter.jpg',
        views: 'تصوير فوتوغرافي',
        duration: 'صورة بدقة عالية'
    },
    {
        id: 8,
        type: 'photo',
        title: 'تصوير تفصيلي لعلبة البلاشر وأرواج إيف سان لوران الفاخرة 💄',
        category: 'تصوير منتجات فوتوغرافي',
        thumbnail: 'images/ysl-makeup.jpg',
        url: 'images/ysl-makeup.jpg',
        views: 'تصوير فوتوغرافي',
        duration: 'صورة بدقة عالية'
    },
    {
        id: 9,
        type: 'photo',
        title: 'لقطة مقربة تفصيلية لمقشر السكر العضوي METODOLOGIA 🍇',
        category: 'تصوير منتجات فوتوغرافي',
        thumbnail: 'images/metodologia-scrub.jpg',
        url: 'images/metodologia-scrub.jpg',
        views: 'تصوير فوتوغرافي',
        duration: 'صورة بدقة عالية'
    },
    {
        id: 10,
        type: 'photo',
        title: 'تصوير صندوق منتجات العناية بالبشرة العشبية من ARENCIA 🌿',
        category: 'تصوير منتجات فوتوغرافي',
        thumbnail: 'images/arencia-cleanser.jpg',
        url: 'images/arencia-cleanser.jpg',
        views: 'تصوير فوتوغرافي',
        duration: 'صورة بدقة عالية'
    }
];

// 3. INITIALIZATION AND EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    
    // Set dynamic current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Setup WhatsApp configs dynamically (so user only edits at top)
    const phoneNo = CONFIG.whatsapp;
    document.getElementById('heroWaLink').href = `https://wa.me/${phoneNo}?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D8%AD%D9%86%D8%A7%D9%86%D8%8C%20%D9%86%D9%88%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86%20%D9%85%D8%B9%D9%83%20%D9%81%D9%8A%20%D8%AD%D9%85%D9%84%D8%A9%20%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9`;
    document.getElementById('footerWaText').textContent = `+${phoneNo.slice(0,3)} ${phoneNo.slice(3,5)} ${phoneNo.slice(5,8)} ${phoneNo.slice(8)}`;

    // Render Portfolio Items
    renderPortfolio(PORTFOLIO_DATA);

    // Scroll Events
    window.addEventListener('scroll', handleScrollEffects);

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
    
    // 1. Sticky Nav Transition
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // 2. Show/Hide Back-to-top button
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }

    // 3. Scroll Progress bar percentage calculation
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrollPercentage + '%';

    // 4. Highlight Nav Menu link based on section in view
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // offset for sticky nav
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

// Back-to-top button click behavior
document.getElementById('backToTopBtn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// 5. MOBILE HAMBURGER MENU ACTIONS
// ==========================================
function setupMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-cta-btn');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Auto-close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==========================================
// 6. RENDER PORTFOLIO ITEMS
// ==========================================
function renderPortfolio(items) {
    const grid = document.getElementById('portfolioGrid');
    grid.innerHTML = ''; // Clear existing layout

    items.forEach((item, index) => {
        const isVideoThumbnail = item.thumbnail && item.thumbnail.endsWith('.mp4');
        const mediaHtml = isVideoThumbnail
            ? `<video class="portfolio-thumb" src="${item.thumbnail}" autoplay loop muted playsinline ${item.poster ? `poster="${item.poster}"` : ''}></video>`
            : `<img class="portfolio-thumb" src="${item.thumbnail}" alt="${item.title}" loading="lazy">`;

        const itemHtml = `
            <div class="portfolio-item" data-type="${item.type}" onclick="openLightbox(${index})">
                <div class="portfolio-thumbnail-wrap">
                    ${mediaHtml}
                    
                    <!-- Hover overlay details -->
                    <div class="portfolio-overlay">
                        ${item.type === 'video' ? `
                            <div class="portfolio-play-icon">
                                <i class="fas fa-play"></i>
                            </div>
                        ` : ''}
                        <div class="portfolio-item-category">${item.category}</div>
                        <h4 class="portfolio-item-title">${item.title}</h4>
                        
                        <div class="portfolio-item-meta">
                            <div class="portfolio-meta-views">
                                <i class="${item.type === 'video' ? 'far fa-eye' : 'far fa-image'}"></i>
                                <span>${item.views}</span>
                            </div>
                            <div class="portfolio-meta-duration">
                                <i class="${item.type === 'video' ? 'far fa-clock' : 'fas fa-expand-arrows-alt'}"></i>
                                <span>${item.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', itemHtml);
    });
}

// ==========================================
// 7. PORTFOLIO TABS FILTER LOGIC
// ==========================================
function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.portfolio-tab-btn');
    const gridItems = document.getElementsByClassName('portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active tab button style
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Apply filter class animations
            Array.from(gridItems).forEach(item => {
                const itemType = item.getAttribute('data-type');
                
                if (filterValue === 'all' || itemType === filterValue) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInScale 0.4s ease-out forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// ==========================================
// 8. PORTFOLIO LIGHTBOX FUNCTIONALITY
// ==========================================
let currentPlayingVideo = null;

function setupLightbox() {
    const modal = document.getElementById('lightboxModal');
    const closeBtn = document.getElementById('lightboxCloseBtn');

    // Close button click
    closeBtn.addEventListener('click', closeLightbox);

    // Click outside lightbox wrapper closes modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLightbox();
        }
    });

    // ESC key presses closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function openLightbox(index) {
    const modal = document.getElementById('lightboxModal');
    const videoPlayer = document.getElementById('lightboxVideo');
    const imageViewer = document.getElementById('lightboxImage');
    const titleText = document.getElementById('lightboxTitle');
    const catText = document.getElementById('lightboxCategory');
    
    const selectedItem = PORTFOLIO_DATA[index];

    titleText.textContent = selectedItem.title;
    catText.textContent = selectedItem.category;

    // Reset displays
    videoPlayer.style.display = 'none';
    imageViewer.style.display = 'none';
    videoPlayer.src = '';
    imageViewer.src = '';

    if (selectedItem.type === 'video') {
        videoPlayer.src = selectedItem.url;
        videoPlayer.style.display = 'block';
        videoPlayer.play();
        currentPlayingVideo = videoPlayer;
    } else {
        imageViewer.src = selectedItem.url;
        imageViewer.style.display = 'block';
        currentPlayingVideo = null;
    }

    // Show modal & freeze page scrolling
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    const videoPlayer = document.getElementById('lightboxVideo');
    
    // Stop video playback & reset source to prevent download buffer
    if (currentPlayingVideo) {
        videoPlayer.pause();
        videoPlayer.src = '';
        currentPlayingVideo = null;
    }

    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore page scrolling
}

// ==========================================
// 9. COLLABORATION FORM REDIRECT TO WHATSAPP
// ==========================================
function setupCollaborationForm() {
    const form = document.getElementById('collabForm');
    const toast = document.getElementById('toastMsg');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // 1. Get values
        const name = document.getElementById('clientName').value.trim();
        const handle = document.getElementById('clientHandle').value.trim();
        const service = document.getElementById('serviceType').value;
        const brief = document.getElementById('projectBrief').value.trim();

        // 2. Validate input fields
        if (!name || !handle || !service || !brief) {
            alert('يرجى ملء جميع الحقول المطلوبة بشكل صحيح.');
            return;
        }

        // Translate selected dropdown value for the message
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

        // 3. Format message template for WhatsApp
        const whatsappMsg = `*طلب تعاون جديد - Hanan UGC* 💼
-----------------------------
*الاسم/البراند:* ${name}
*رابط الحساب:* ${handle}
*نوع الخدمة:* ${serviceArabic}
*تفاصيل المشروع:*
${brief}
-----------------------------
تم الإرسال من صفحة معرض أعمال حنان ✨`;

        // 4. Encode message for URL
        const encodedMsg = encodeURIComponent(whatsappMsg);
        const finalWhatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodedMsg}`;

        // 5. Trigger Success Toast Animation
        toast.classList.add('show');
        
        // Disable submit button temporarily
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;

        // 6. Redirect to WhatsApp after 2 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            submitBtn.disabled = false;
            form.reset();
            window.location.href = finalWhatsappUrl;
        }, 2200);
    });
}
