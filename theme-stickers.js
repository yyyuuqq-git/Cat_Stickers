// ==========================================
// 고양이 칭찬판 2종 스티커 컬렉션 (칭찬 스티커 & 맴매 스티커)
// ==========================================

(function(global) {
    'use strict';

    // 1. 고양이 칭찬 스티커 5종 (image1 폴더의 고양이 이미지 5종)
    const PRAISE_STICKERS = [
        { id: 0, src: "image1/image_1.png", fallbackSrc: "image/image_1.png", emoji: "🐱" },
        { id: 1, src: "image1/image_2.png", fallbackSrc: "image/image_2.png", emoji: "🐱" },
        { id: 2, src: "image1/image_3.png", fallbackSrc: "image/image_3.png", emoji: "🐱" },
        { id: 3, src: "image1/image_4.png", fallbackSrc: "image/image_4.png", emoji: "🐱" },
        { id: 4, src: "image1/image_5.png", fallbackSrc: "image/image_5.png", emoji: "🐱" }
    ];

    // 2. 고양이 맴매 스티커 5종 (image2 폴더의 고양이 이미지 5종)
    const PUNISH_STICKERS = [
        { id: 0, src: "image2/image_1.png", fallbackSrc: "stickers2/image_1.png", emoji: "🐾" },
        { id: 1, src: "image2/image_2.png", fallbackSrc: "stickers2/image_2.png", emoji: "🐾" },
        { id: 2, src: "image2/image_3.png", fallbackSrc: "stickers2/image_3.png", emoji: "🐾" },
        { id: 3, src: "image2/image_4.png", fallbackSrc: "stickers2/image_4.png", emoji: "🐾" },
        { id: 4, src: "image2/image_5.png", fallbackSrc: "stickers2/image_5.png", emoji: "🐾" }
    ];

    // 3. 테마 컬렉션 정의
    const STICKER_THEMES = {
        praise: {
            id: "praise",
            name: "칭찬 스티커 🐾",
            themeColor: "#F97316",
            desc: "착하고 예쁜 일을 했을 때 붙이는 고양이 칭찬 스티커",
            items: PRAISE_STICKERS
        },
        punish: {
            id: "punish",
            name: "맴매 스티커 💢",
            themeColor: "#E11D48",
            desc: "장난치거나 말썽부렸을 때 붙이는 고양이 맴매 스티커",
            items: PUNISH_STICKERS
        }
    };

    // 레거시 키 및 별칭 매핑
    STICKER_THEMES.cat = STICKER_THEMES.praise;
    STICKER_THEMES.image1 = STICKER_THEMES.praise;
    STICKER_THEMES.stickers1 = STICKER_THEMES.praise;
    STICKER_THEMES.maemmae = STICKER_THEMES.punish;
    STICKER_THEMES.cat_playful = STICKER_THEMES.punish;
    STICKER_THEMES.image2 = STICKER_THEMES.punish;
    STICKER_THEMES.stickers2 = STICKER_THEMES.punish;

    function normalizeStickerTheme(theme) {
        if (!theme) return "praise";
        const str = String(theme).trim().toLowerCase();
        if (str === "punish" || str === "maemmae" || str === "cat_playful" || str === "image2" || str === "stickers2" || str.includes("맴매")) {
            return "punish";
        }
        return "praise";
    }

    // ==========================================
    // 고품질 SVG 벡터 그래픽 렌더러
    // (이미지 파일이 아직 없거나 로딩 실패 시 자동 표시)
    // ==========================================
    function getThemeVectorGraphic(theme, type) {
        const safeType = Math.abs(Number(type) || 0) % 5;
        const safeTheme = normalizeStickerTheme(theme);

        switch (safeTheme) {
            case "praise":
            case "cat":
                switch (safeType) {
                    case 0: // 치즈태비 (치즈냥이)
                        return `
                            <defs>
                                <linearGradient id="cat-cheese-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#FDBA74"/>
                                    <stop offset="60%" stop-color="#FB923C"/>
                                    <stop offset="100%" stop-color="#EA580C"/>
                                </linearGradient>
                                <linearGradient id="cat-ear-pink" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#FDA4AF"/>
                                    <stop offset="100%" stop-color="#FB7185"/>
                                </linearGradient>
                            </defs>
                            <!-- 귀 -->
                            <polygon points="20,44 14,14 42,26" fill="url(#cat-cheese-grad)"/>
                            <polygon points="22,40 18,20 38,28" fill="url(#cat-ear-pink)"/>
                            <polygon points="80,44 86,14 58,26" fill="url(#cat-cheese-grad)"/>
                            <polygon points="78,40 82,20 62,28" fill="url(#cat-ear-pink)"/>
                            <!-- 얼굴 -->
                            <ellipse cx="50" cy="54" rx="36" ry="32" fill="url(#cat-cheese-grad)"/>
                            <!-- 이마 태비 무늬 -->
                            <path d="M 50 28 L 50 38 M 42 30 L 44 38 M 58 30 L 56 38" stroke="#C2410C" stroke-width="2.5" stroke-linecap="round"/>
                            <!-- 볼 무늬 -->
                            <path d="M 22 52 L 30 52 M 20 57 L 28 58" stroke="#C2410C" stroke-width="2" stroke-linecap="round"/>
                            <path d="M 78 52 L 70 52 M 80 57 L 72 58" stroke="#C2410C" stroke-width="2" stroke-linecap="round"/>
                            <!-- 하얀 주둥이 영역 -->
                            <ellipse cx="50" cy="64" rx="16" ry="12" fill="#FFF7ED"/>
                            <!-- 큰 눈 -->
                            <circle cx="36" cy="50" r="5" fill="#1C1917"/>
                            <circle cx="37.5" cy="48" r="2" fill="#FFFFFF"/>
                            <circle cx="64" cy="50" r="5" fill="#1C1917"/>
                            <circle cx="65.5" cy="48" r="2" fill="#FFFFFF"/>
                            <!-- 분홍 코 & 입 -->
                            <polygon points="50,60 46,57 54,57" fill="#F43F5E"/>
                            <path d="M 50 60 Q 45 66 42 63 M 50 60 Q 55 66 58 63" stroke="#9A3412" stroke-width="2" fill="none" stroke-linecap="round"/>
                            <!-- 볼터치 -->
                            <circle cx="28" cy="62" r="5" fill="#FDA4AF" opacity="0.6"/>
                            <circle cx="72" cy="62" r="5" fill="#FDA4AF" opacity="0.6"/>
                            <!-- 수염 -->
                            <line x1="28" y1="60" x2="10" y2="58" stroke="#78350F" stroke-width="1.6" stroke-linecap="round"/>
                            <line x1="28" y1="64" x2="12" y2="67" stroke="#78350F" stroke-width="1.6" stroke-linecap="round"/>
                            <line x1="72" y1="60" x2="90" y2="58" stroke="#78350F" stroke-width="1.6" stroke-linecap="round"/>
                            <line x1="72" y1="64" x2="88" y2="67" stroke="#78350F" stroke-width="1.6" stroke-linecap="round"/>
                        `;

                    case 1: // 삼색고양이 (삼색이)
                        return `
                            <defs>
                                <linearGradient id="cat-white-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#FFFFFF"/>
                                    <stop offset="100%" stop-color="#F1F5F9"/>
                                </linearGradient>
                            </defs>
                            <!-- 귀 -->
                            <polygon points="20,44 14,14 42,26" fill="#EA580C"/>
                            <polygon points="22,40 18,20 38,28" fill="#FBCFE8"/>
                            <polygon points="80,44 86,14 58,26" fill="#1E293B"/>
                            <polygon points="78,40 82,20 62,28" fill="#FBCFE8"/>
                            <!-- 기본 하얀 얼굴 -->
                            <ellipse cx="50" cy="54" rx="36" ry="32" fill="url(#cat-white-grad)"/>
                            <!-- 오른쪽 검은 얼룩 -->
                            <path d="M 68 28 C 82 36, 86 52, 78 62 C 68 56, 62 40, 68 28 Z" fill="#1E293B"/>
                            <!-- 왼쪽 주황 얼룩 -->
                            <path d="M 32 28 C 18 36, 14 50, 24 58 C 30 50, 36 38, 32 28 Z" fill="#FB923C"/>
                            <!-- 초롱초롱한 초록빛 눈 -->
                            <ellipse cx="36" cy="50" rx="5" ry="5.5" fill="#059669"/>
                            <circle cx="36" cy="50" r="3.2" fill="#0F172A"/>
                            <circle cx="37.5" cy="48" r="1.8" fill="#FFFFFF"/>
                            <ellipse cx="64" cy="50" rx="5" ry="5.5" fill="#059669"/>
                            <circle cx="64" cy="50" r="3.2" fill="#0F172A"/>
                            <circle cx="65.5" cy="48" r="1.8" fill="#FFFFFF"/>
                            <!-- 분홍 코 & 웃는 입 -->
                            <polygon points="50,60 46,57 54,57" fill="#FB7185"/>
                            <path d="M 50 60 Q 45 66 42 63 M 50 60 Q 55 66 58 63" stroke="#475569" stroke-width="2" fill="none" stroke-linecap="round"/>
                            <!-- 볼터치 -->
                            <circle cx="28" cy="62" r="5" fill="#F472B6" opacity="0.6"/>
                            <circle cx="72" cy="62" r="5" fill="#F472B6" opacity="0.6"/>
                            <!-- 수염 -->
                            <line x1="28" y1="60" x2="10" y2="59" stroke="#64748B" stroke-width="1.5" stroke-linecap="round"/>
                            <line x1="28" y1="64" x2="12" y2="68" stroke="#64748B" stroke-width="1.5" stroke-linecap="round"/>
                            <line x1="72" y1="60" x2="90" y2="59" stroke="#64748B" stroke-width="1.5" stroke-linecap="round"/>
                            <line x1="72" y1="64" x2="88" y2="68" stroke="#64748B" stroke-width="1.5" stroke-linecap="round"/>
                        `;

                    case 2: // 턱시도냥이
                        return `
                            <defs>
                                <linearGradient id="cat-black-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#334155"/>
                                    <stop offset="100%" stop-color="#0F172A"/>
                                </linearGradient>
                            </defs>
                            <!-- 귀 -->
                            <polygon points="20,44 14,14 42,26" fill="url(#cat-black-grad)"/>
                            <polygon points="22,40 18,20 38,28" fill="#FDA4AF"/>
                            <polygon points="80,44 86,14 58,26" fill="url(#cat-black-grad)"/>
                            <polygon points="78,40 82,20 62,28" fill="#FDA4AF"/>
                            <!-- 검은 얼굴 베이스 -->
                            <ellipse cx="50" cy="54" rx="36" ry="32" fill="url(#cat-black-grad)"/>
                            <!-- 턱시도 V자 흰색 마스크/가슴 -->
                            <path d="M 50 48 L 40 68 C 44 76, 56 76, 60 68 Z" fill="#FFFFFF"/>
                            <circle cx="44" cy="66" r="6" fill="#FFFFFF"/>
                            <circle cx="56" cy="66" r="6" fill="#FFFFFF"/>
                            <!-- 빛나는 황금빛 호박색 눈 -->
                            <ellipse cx="35" cy="48" rx="5.5" ry="6" fill="#FBBF24"/>
                            <ellipse cx="35" cy="48" rx="2.5" ry="5" fill="#0F172A"/>
                            <circle cx="36.5" cy="46" r="1.5" fill="#FFFFFF"/>
                            <ellipse cx="65" cy="48" rx="5.5" ry="6" fill="#FBBF24"/>
                            <ellipse cx="65" cy="48" rx="2.5" ry="5" fill="#0F172A"/>
                            <circle cx="66.5" cy="46" r="1.5" fill="#FFFFFF"/>
                            <!-- 분홍 코 & 입 -->
                            <polygon points="50,59 47,56 53,56" fill="#F43F5E"/>
                            <path d="M 50 59 Q 46 64 43 62 M 50 59 Q 54 64 57 62" stroke="#475569" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                            <!-- 빨간 작은 나비넥타이 -->
                            <polygon points="46,78 40,74 40,82" fill="#EF4444"/>
                            <polygon points="54,78 60,74 60,82" fill="#EF4444"/>
                            <circle cx="50" cy="78" r="2.5" fill="#DC2626"/>
                            <!-- 하얀 수염 -->
                            <line x1="30" y1="62" x2="10" y2="60" stroke="#E2E8F0" stroke-width="1.8" stroke-linecap="round"/>
                            <line x1="30" y1="66" x2="12" y2="70" stroke="#E2E8F0" stroke-width="1.8" stroke-linecap="round"/>
                            <line x1="70" y1="62" x2="90" y2="60" stroke="#E2E8F0" stroke-width="1.8" stroke-linecap="round"/>
                            <line x1="70" y1="66" x2="88" y2="70" stroke="#E2E8F0" stroke-width="1.8" stroke-linecap="round"/>
                        `;

                    case 3: // 하얀냥이 (순백냥)
                        return `
                            <defs>
                                <linearGradient id="cat-pure-white" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#FFFFFF"/>
                                    <stop offset="100%" stop-color="#F8FAFC"/>
                                </linearGradient>
                            </defs>
                            <!-- 귀 -->
                            <polygon points="20,44 14,14 42,26" fill="url(#cat-pure-white)" stroke="#E2E8F0" stroke-width="1"/>
                            <polygon points="22,40 18,20 38,28" fill="#FDA4AF"/>
                            <polygon points="80,44 86,14 58,26" fill="url(#cat-pure-white)" stroke="#E2E8F0" stroke-width="1"/>
                            <polygon points="78,40 82,20 62,28" fill="#FDA4AF"/>
                            <!-- 얼굴 -->
                            <ellipse cx="50" cy="54" rx="36" ry="32" fill="url(#cat-pure-white)" stroke="#E2E8F0" stroke-width="1.5"/>
                            <!-- 하늘빛 오드아이/블루아이 -->
                            <circle cx="36" cy="50" r="5.5" fill="#38BDF8"/>
                            <circle cx="36" cy="50" r="3" fill="#0369A1"/>
                            <circle cx="37.5" cy="48" r="1.8" fill="#FFFFFF"/>
                            <circle cx="64" cy="50" r="5.5" fill="#38BDF8"/>
                            <circle cx="64" cy="50" r="3" fill="#0369A1"/>
                            <circle cx="65.5" cy="48" r="1.8" fill="#FFFFFF"/>
                            <!-- 분홍 코 & 귀여운 입 -->
                            <polygon points="50,60 46,57 54,57" fill="#FB7185"/>
                            <path d="M 50 60 Q 45 66 42 63 M 50 60 Q 55 66 58 63" stroke="#94A3B8" stroke-width="2" fill="none" stroke-linecap="round"/>
                            <!-- 발그레 볼터치 -->
                            <circle cx="28" cy="62" r="5.5" fill="#FDA4AF" opacity="0.6"/>
                            <circle cx="72" cy="62" r="5.5" fill="#FDA4AF" opacity="0.6"/>
                            <!-- 머리 위 귀여운 분홍 리본 -->
                            <polygon points="44,24 38,20 38,28" fill="#F43F5E"/>
                            <polygon points="56,24 62,20 62,28" fill="#F43F5E"/>
                            <circle cx="50" cy="24" r="3" fill="#FB7185"/>
                            <!-- 수염 -->
                            <line x1="28" y1="60" x2="10" y2="58" stroke="#94A3B8" stroke-width="1.6" stroke-linecap="round"/>
                            <line x1="28" y1="64" x2="12" y2="67" stroke="#94A3B8" stroke-width="1.6" stroke-linecap="round"/>
                            <line x1="72" y1="60" x2="90" y2="58" stroke="#94A3B8" stroke-width="1.6" stroke-linecap="round"/>
                            <line x1="72" y1="64" x2="88" y2="67" stroke="#94A3B8" stroke-width="1.6" stroke-linecap="round"/>
                        `;

                    case 4: // 핑크냥발 (분홍 젤리 냥발)
                        return `
                            <defs>
                                <linearGradient id="cat-paw-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#FFFFFF"/>
                                    <stop offset="100%" stop-color="#FED7AA"/>
                                </linearGradient>
                                <linearGradient id="cat-jelly-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#FB7185"/>
                                    <stop offset="100%" stop-color="#F43F5E"/>
                                </linearGradient>
                            </defs>
                            <!-- 냥발 손바닥/털 베이스 -->
                            <ellipse cx="50" cy="54" rx="36" ry="32" fill="url(#cat-paw-grad)"/>
                            <!-- 큰 중앙 젤리 패드 -->
                            <path d="M 50 56 C 36 56, 30 68, 36 78 C 42 86, 58 86, 64 78 C 70 68, 64 56, 50 56 Z" fill="url(#cat-jelly-grad)"/>
                            <!-- 4개의 발가락 젤리 -->
                            <ellipse cx="28" cy="40" rx="7" ry="9" fill="url(#cat-jelly-grad)"/>
                            <ellipse cx="43" cy="32" rx="7.5" ry="9.5" fill="url(#cat-jelly-grad)"/>
                            <ellipse cx="57" cy="32" rx="7.5" ry="9.5" fill="url(#cat-jelly-grad)"/>
                            <ellipse cx="72" cy="40" rx="7" ry="9" fill="url(#cat-jelly-grad)"/>
                            <!-- 젤리 하이라이트 광택 -->
                            <ellipse cx="48" cy="68" rx="6" ry="4" fill="#FFE4E6" opacity="0.6"/>
                            <circle cx="42" cy="30" r="2.5" fill="#FFE4E6" opacity="0.6"/>
                            <circle cx="56" cy="30" r="2.5" fill="#FFE4E6" opacity="0.6"/>
                            <!-- 반짝이 별 장식 -->
                            <polygon points="82,20 84,24 88,25 85,28 86,32 82,29 78,32 79,28 76,25 80,24" fill="#FBBF24"/>
                        `;
                }
                break;

            case "punish":
            case "cat_playful":
                switch (safeType) {
                    case 0: // 식빵 냥이
                        return `
                            <ellipse cx="50" cy="62" rx="38" ry="24" fill="#F59E0B"/>
                            <circle cx="36" cy="42" r="16" fill="#FCD34D"/>
                            <polygon points="26,34 24,18 36,26" fill="#D97706"/>
                            <polygon points="46,34 52,18 42,26" fill="#D97706"/>
                            <circle cx="32" cy="42" r="2.5" fill="#1C1917"/>
                            <circle cx="40" cy="42" r="2.5" fill="#1C1917"/>
                            <path d="M 36 46 Q 34 50 32 48 M 36 46 Q 38 50 40 48" stroke="#78350F" stroke-width="1.5" fill="none"/>
                            <circle cx="28" cy="48" r="3.5" fill="#F472B6" opacity="0.6"/>
                            <circle cx="44" cy="48" r="3.5" fill="#F472B6" opacity="0.6"/>
                            <ellipse cx="58" cy="74" rx="8" ry="5" fill="#FDE68A"/>
                        `;
                    case 1: // 털실 냥이
                        return `
                            <circle cx="62" cy="60" r="22" fill="#EC4899"/>
                            <path d="M 46 54 C 52 46, 72 46, 78 54 M 48 64 C 54 74, 70 74, 76 64" stroke="#BE185D" stroke-width="2.5" fill="none"/>
                            <path d="M 50 78 Q 30 84 20 74 Q 14 66 22 58" stroke="#EC4899" stroke-width="3" fill="none"/>
                            <circle cx="32" cy="40" r="16" fill="#CBD5E1"/>
                            <polygon points="22,32 20,18 32,24" fill="#94A3B8"/>
                            <polygon points="42,32 46,18 38,24" fill="#94A3B8"/>
                            <circle cx="28" cy="40" r="2.5" fill="#0F172A"/>
                            <circle cx="36" cy="40" r="2.5" fill="#0F172A"/>
                            <path d="M 32 44 Q 30 47 28 46 M 32 44 Q 34 47 36 46" stroke="#475569" stroke-width="1.5" fill="none"/>
                        `;
                    case 2: // 츄르 냥이
                        return `
                            <ellipse cx="50" cy="54" rx="32" ry="28" fill="#FDBA74"/>
                            <polygon points="24,34 20,14 36,24" fill="#EA580C"/>
                            <polygon points="76,34 80,14 64,24" fill="#EA580C"/>
                            <ellipse cx="40" cy="48" rx="4" ry="1.5" fill="#78350F"/>
                            <ellipse cx="60" cy="48" rx="4" ry="1.5" fill="#78350F"/>
                            <circle cx="34" cy="56" r="4.5" fill="#FB7185" opacity="0.6"/>
                            <circle cx="66" cy="56" r="4.5" fill="#FB7185" opacity="0.6"/>
                            <rect x="42" y="58" width="16" height="30" rx="3" fill="#38BDF8" transform="rotate(-15 50 73)"/>
                            <circle cx="48" cy="58" r="4" fill="#F43F5E"/>
                        `;
                    case 3: // 상자 냥이
                        return `
                            <rect x="20" y="46" width="60" height="42" rx="4" fill="#D97706"/>
                            <polygon points="16,46 20,34 50,34 48,46" fill="#B45309"/>
                            <polygon points="84,46 80,34 50,34 52,46" fill="#B45309"/>
                            <circle cx="50" cy="38" r="18" fill="#1E293B"/>
                            <polygon points="36,28 32,16 44,22" fill="#0F172A"/>
                            <polygon points="64,28 68,16 56,22" fill="#0F172A"/>
                            <circle cx="44" cy="38" r="3.5" fill="#FBBF24"/>
                            <circle cx="44" cy="38" r="1.8" fill="#0F172A"/>
                            <circle cx="56" cy="38" r="3.5" fill="#FBBF24"/>
                            <circle cx="56" cy="38" r="1.8" fill="#0F172A"/>
                        `;
                    case 4: // 하트 냥이
                        return `
                            <path d="M 50 82 C 24 64, 12 44, 22 28 C 30 16, 44 20, 50 30 C 56 20, 70 16, 78 28 C 88 44, 76 64, 50 82 Z" fill="#F43F5E"/>
                            <ellipse cx="50" cy="50" rx="18" ry="16" fill="#FFF7ED"/>
                            <polygon points="36,40 32,28 42,34" fill="#FB923C"/>
                            <polygon points="64,40 68,28 58,34" fill="#FB923C"/>
                            <circle cx="44" cy="48" r="2" fill="#1C1917"/>
                            <circle cx="56" cy="48" r="2" fill="#1C1917"/>
                            <polygon points="50,54 48,52 52,52" fill="#F43F5E"/>
                            <circle cx="40" cy="54" r="2.5" fill="#FDA4AF"/>
                            <circle cx="60" cy="54" r="2.5" fill="#FDA4AF"/>
                        `;
                }
                break;

            case "moon":
                switch (safeType) {
                    case 0:
                        return `
                            <defs>
                                <linearGradient id="mn-crescent" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#FEF08A"/>
                                    <stop offset="50%" stop-color="#FACC15"/>
                                    <stop offset="100%" stop-color="#EAB308"/>
                                </linearGradient>
                            </defs>
                            <path d="M 68 18 C 50 20, 32 34, 32 54 C 32 74, 50 86, 68 86 C 54 84, 46 72, 46 54 C 46 36, 56 22, 68 18 Z" fill="url(#mn-crescent)"/>
                            <polygon points="76,32 78,36 82,37 79,40 80,44 76,41 72,44 73,40 70,37 74,36" fill="#FDE047"/>
                        `;
                    case 1:
                        return `
                            <circle cx="50" cy="50" r="24" fill="#F59E0B"/>
                            <circle cx="50" cy="50" r="19" fill="#FDE047"/>
                            <path d="M 50 14 L 50 22 M 50 78 L 50 86 M 14 50 L 22 50 M 78 50 L 86 50 M 24 24 L 30 30 M 70 70 L 76 76 M 24 76 L 30 70 M 70 30 L 76 24" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
                        `;
                    case 2:
                        return `
                            <path d="M 50 18 C 70 30, 94 44, 88 56 C 82 64, 60 58, 50 64 C 40 58, 18 64, 12 56 C 6 44, 30 30, 50 18 Z" fill="#0284C7"/>
                            <path d="M 50 62 Q 50 84 44 94" stroke="#0284C7" stroke-width="3" fill="none" stroke-linecap="round"/>
                        `;
                    case 3:
                        return `
                            <circle cx="50" cy="50" r="38" fill="#0284C7"/>
                            <path d="M 16 54 C 26 44, 38 42, 48 50 C 58 58, 68 44, 84 52 L 84 84 C 64 88, 36 88, 16 84 Z" fill="#E0F2FE"/>
                        `;
                    case 4:
                        return `
                            <path d="M 26 56 C 28 40, 52 32, 78 38 C 92 42, 94 58, 88 68 C 76 80, 46 78, 26 56 Z" fill="#4338CA"/>
                            <polygon points="52,18 54,23 59,24 55,27 56,32 52,29 48,32 49,27 45,24 50,23" fill="#FDE047"/>
                        `;
                }
                break;

            case "ocean":
                return `<circle cx="50" cy="50" r="36" fill="#0284C7"/><path d="M 20 60 Q 35 45 50 60 T 80 60" stroke="#FFFFFF" stroke-width="4" fill="none"/>`;
            case "forest":
                return `<path d="M 50 20 C 35 20 25 35 30 50 C 35 65 50 78 50 78 C 50 78 65 65 70 50 C 75 35 65 20 50 20 Z" fill="#10B981"/><path d="M 50 24 L 50 74" stroke="#065F46" stroke-width="2"/>`;
            case "star":
                return `<polygon points="50,15 59,38 84,40 65,56 71,80 50,67 29,80 35,56 16,40 41,38" fill="#FACC15"/>`;
            case "pastel":
                return `<path d="M 50 78 C 24 60, 14 42, 24 28 C 32 16, 45 20, 50 30 C 55 20, 68 16, 76 28 C 86 42, 76 60, 50 78 Z" fill="#FB7185"/>`;
        }

        return `<circle cx="50" cy="50" r="36" fill="#F97316"/>`;
    }

    // ==========================================
    // 스티커 HTML 마크업 생성기 (이미지 및 SVG 자동 폴백 지원)
    // ==========================================
    function getThemeStickerMarkup(theme, type) {
        const safeTheme = normalizeStickerTheme(theme);
        const id = Math.abs(Number(type) || 0) % 5;
        const themeObj = STICKER_THEMES[safeTheme] || STICKER_THEMES.praise;
        const item = (themeObj && themeObj.items && themeObj.items[id]) ? themeObj.items[id] : null;
        const folder = safeTheme === "punish" ? "image2" : "image1";
        const src = item && item.src ? item.src : `${folder}/image_${id + 1}.png`;
        const altText = safeTheme === "punish" ? "고양이 맴매 스티커" : "고양이 칭찬 스티커";
        const vectorSvg = getThemeVectorGraphic(safeTheme === "punish" ? "cat_playful" : "cat", id);

        return `
            <img src="${src}" alt="${altText}" class="praise-sticker-img" draggable="false"
                 onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='block';" />
            <svg viewBox="0 0 100 100" class="sticker-svg-vector praise-sticker-img active" aria-hidden="true" style="display:none;">${vectorSvg}</svg>
        `;
    }

    // ==========================================
    // 테마 미리보기 바 렌더링
    // ==========================================
    function renderThemePreviewBar(container, theme) {
        const target = typeof container === "string" ? document.getElementById(container) : container;
        if (!target) return;
        target.innerHTML = "";
        const safeTheme = normalizeStickerTheme(theme);
        const themeObj = STICKER_THEMES[safeTheme] || STICKER_THEMES.praise;
        const items = (themeObj && themeObj.items) ? themeObj.items : PRAISE_STICKERS;

        items.forEach((item, idx) => {
            const previewEl = document.createElement("div");
            previewEl.className = "theme-preview-item";
            previewEl.innerHTML = `
                <div class="theme-preview-icon">
                    ${getThemeStickerMarkup(safeTheme, idx)}
                </div>
            `;
            target.appendChild(previewEl);
        });
    }

    // 전역 네임스페이스 등록
    const CatStickersModule = {
        PRAISE_STICKERS,
        PUNISH_STICKERS,
        STICKER_THEMES,
        normalizeStickerTheme,
        getThemeVectorGraphic,
        getThemeStickerMarkup,
        renderThemePreviewBar
    };

    global.CatStickersModule = CatStickersModule;
    global.PRAISE_STICKERS = PRAISE_STICKERS;
    global.PUNISH_STICKERS = PUNISH_STICKERS;
    global.STICKER_THEMES = STICKER_THEMES;
    global.normalizeStickerTheme = normalizeStickerTheme;
    global.getThemeVectorGraphic = getThemeVectorGraphic;
    global.getThemeStickerMarkup = getThemeStickerMarkup;
    global.renderThemePreviewBar = renderThemePreviewBar;

})(typeof window !== 'undefined' ? window : this);
