// ========================================
// MOVIE DATA - REAL TELUGU & INDIAN CINEMA
// ========================================

const movieDatabase = {
    trending: [
        { id: 1, title: "Salaar", rating: 8.9, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/nlu9WbcetNFRGXXPWITr30ob7W6.jpg", trailer: "https://youtu.be/4GPvYMKtrtI?si=rzopIuqu1QcQ-58Q" },
        { id: 2, title: "Devara", rating: 8.7, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/lQfuaXjANoTsdx5iS0gCXlK9D2L.jpg", trailer: "https://youtu.be/5cx7rvMvAWo?si=QTRpq5cw_S-nivad" },
        { id: 3, title: "HanuMan", rating: 8.5, year: 2024, genre: "Fantasy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/m1zq48rWSXxplzoJR8YtbXWnnHM.jpg", trailer: "https://youtu.be/Oqvly3MvlXA?si=1XWC_Bc8Dq5nCGa7" },
        { id: 4, title: "Kalki 2898 AD", rating: 9.0, year: 2024, genre: "Sci-Fi", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg", trailer: "https://youtu.be/y1-w1kUGuz8?si=kKttSqd1dLQJHALp" },
        { id: 5, title: "RRR", rating: 9.2, year: 2022, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg", trailer: "https://youtu.be/GY4BgdUSpbE?si=Tr2VZSqaitE6jOPT" },
        { id: 6, title: "Pushpa 2", rating: 8.8, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/759mIIerY4Njb8uPoj7AIXGSNh3.jpg", trailer: "https://youtu.be/g3JUbgOHgdw?si=78LoC9IZzy1zl5x4" },
        { id: 7, title: "Guntur Kaaram", rating: 8.3, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/qvBt4YLy274ZmoMAfVlwmHkjVkq.jpg", trailer: "https://youtu.be/DYLG65xz55U?si=oK_X7qzRndR38QSq" },
        { id: 8, title: "Tillu Square", rating: 8.4, year: 2024, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/unRseguQgs9YQbzSHTZKIE3qXa7.jpg", trailer: "https://youtu.be/DYLG65xz55U?si=l_P_CzKzLja1KQE5" }
    ],
    latest: [
        { id: 9, title: "Hi Nanna", rating: 8.6, year: 2023, genre: "Drama", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/hhMLtq9m1aK0dpY9Wcq26XeDH2z.jpg", trailer: "https://youtu.be/Iz97_kxHaSc?si=BDKbkS6d8nF50ZJJ" },
        { id: 10, title: "Eagle", rating: 8.2, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/mjQN27x0Dfkmsi3SRRkAIatOr2p.jpg", trailer: "https://youtu.be/2sX0lElZKQE?si=MQBaOhNCU_s4_rS7" },
        { id: 11, title: "Family Star", rating: 7.8, year: 2024, genre: "Drama", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/2mLyHeWwU0Ocv9Jvk72IDqZqT7G.jpg", trailer: "https://youtu.be/0nWuRw770TI?si=anJ3dBL_-rFXwSff" },
        { id: 12, title: "Naa Saami Ranga", rating: 8.0, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/4xwNsmT0XPFF0Ssa7kB6FR1MZRz.jpg", trailer: "https://youtu.be/E4y10KwtTrQ?si=6qEvKs1KQkruS1ed" },
        { id: 13, title: "OG", rating: 8.5, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/chNN2KaPwjebfhh1vWhGyIKBOj3.jpg", trailer: "https://youtu.be/_8J8LwoVH_0?si=H4ugdsucVdfIRTzf" },
        { id: 14, title: "Bhagavanth Kesari", rating: 8.3, year: 2023, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/tvADrBoLJgyrxMYl8QyQW2125xv.jpg", trailer: "https://youtu.be/00mFeykBgVM?si=aZF_34YVHV4aBK3n" },
        { id: 15, title: "Extra Ordinary Man", rating: 7.9, year: 2023, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/bOym2XLkyDcYVvX5sZ6YYm19xXT.jpg", trailer: "https://youtu.be/WB8YAqYkpDE?si=H_YWCvGQ0iEOjBMr" },
        { id: 16, title: "Tiger Nageswara Rao", rating: 8.1, year: 2023, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/3tiYpneYIvXfbaCE0brOoBjXP7v.jpg", trailer: "https://youtu.be/CdwIA8ZBksQ?si=-QFxFa0H-NVhgHD3" }
    ],
    popular: [
        { id: 17, title: "Baahubali 2", rating: 9.3, year: 2017, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/4YAX6AIFsU7gCCWAxoQ5ajdwSIN.jpg", trailer: "https://youtu.be/dRvmrYh6lZc?si=NRaNDejFS5hSK-ji" },
        { id: 18, title: "Pushpa: The Rise", rating: 9.0, year: 2021, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/h6Pd89ngvl9quPVsx3KoJlQsvk9.jpg", trailer: "https://youtu.be/Q1NKMPhP8PY?si=PHDgVvw1hB9-f03Y" },
        { id: 19, title: "Rangasthalam", rating: 8.9, year: 2018, genre: "Drama", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/yiEzDgBBFC25Zd6z0r7sMngn5vr.jpg", trailer: "https://youtu.be/1Drha8HZN_c?si=RavgDaZW1nJyTQGY" },
        { id: 20, title: "Ala Vaikunthapurramuloo", rating: 8.7, year: 2020, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/goVGxWzvxs8oMNJ1Zc0QmfJlIzs.jpg", trailer: "https://youtu.be/SkENAjfVoNI?si=Qa_PSAUGhtNjDNct" },
        { id: 21, title: "Sita Ramam", rating: 8.8, year: 2022, genre: "Romance", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/g3hk2wEeIsTGhh7JvK8yWFVR7ue.jpg", trailer: "https://youtu.be/Ljk6tGZ1l3A?si=q4TgRyQtZZZKlR-B" },
        { id: 22, title: "Eega", rating: 8.8, year: 2012, genre: "Fantasy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/gZ1nxfXJjnQSzTTOzUjaz1IIhTF.jpg", trailer: "https://youtu.be/x-1ZoU1xB4I?si=34GYyMlbwarOeK4s" },
        { id: 23, title: "Arjun Reddy", rating: 8.6, year: 2017, genre: "Drama", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/kHubDgL59I5hCn7ccBYvU7bKY1r.jpg", trailer: "https://youtu.be/aozErj9NqeE?si=wIDZPZeJQd_JsSZ0" },
        { id: 24, title: "Magadheera", rating: 8.7, year: 2009, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/xK7MEV56GF291VG0U5XnVJuvNv3.jpg", trailer: "https://youtu.be/NXfhuqDNxg4?si=GPXY9mIXWkNjVLzR" }
    ],
    recommended: [
        { id: 25, title: "Dasara", rating: 8.4, year: 2023, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/4OTVoCVXa5aHDZl8opKoIV9Ezr5.jpg", trailer: "https://youtu.be/BSPbF25_s8M?si=VA5ioQXBN1srUt2I" },
        { id: 26, title: "Karthikeya 2", rating: 8.5, year: 2022, genre: "Mystery", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/fKKoQndNfbDOLfYM1Zogt7miGF1.jpg", trailer: "https://youtu.be/d5s_IGuOJEc?si=faAbdIrEBbdm0qlo" },
        { id: 27, title: "Bheemla Nayak", rating: 8.3, year: 2022, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/14KeWSkgzTbfJmmD4bXT9mwkaYz.jpg", trailer: "https://youtu.be/m8v-qYaiWzw?si=JEFqFgNhk6ebbYM9" },
        { id: 28, title: "Jersey", rating: 8.6, year: 2019, genre: "Drama", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/bU9q9yVtxeBiC0Do27CekHXNE6D.jpg", trailer: "https://youtu.be/AjAe_Q1WZ_8?si=kQ_dK-RWhHCZnuVv" },
        { id: 29, title: "Fidaa", rating: 8.5, year: 2017, genre: "Romance", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/cvpwHdJuUzm544lvleBIAxGdzBB.jpg", trailer: "https://youtu.be/AVtvjfoXNXc?si=465ATrbSzdAKkbqM" },
        { id: 30, title: "Geetha Govindam", rating: 8.4, year: 2018, genre: "Romance", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/sTreb0ajewXqeIqAyZ0IWtafoB5.jpg", trailer: "https://youtu.be/qHqWRCxhcOk?si=mBZ0g5DY3w6OgZAK" },
        { id: 31, title: "Athadu", rating: 8.7, year: 2005, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/ojZAu2KOemaDEfLnJXZeuU9QQko.jpg", trailer: "https://youtu.be/KWt9dzrc1Go?si=vpDQKKONWilvV0av" },
        { id: 32, title: "Pokiri", rating: 8.8, year: 2006, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/rQ8NH5f3CxRrmqZWMZNYPwLmjDS.jpg", trailer: "https://youtu.be/Eizdl6D0O9M?si=iiUWB267N8WoWJSa" }
    ],
    action: [
        { id: 33, title: "Saaho", rating: 8.2, year: 2019, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/abjWQwUakmBUecf73jiZDx5iex0.jpg", trailer: "https://youtu.be/lD0-ztCFydA?si=rLRRHVqLBYRomXSX" },
        { id: 34, title: "Vikram", rating: 8.9, year: 2022, genre: "Action", language: "Tamil", image: "https://www.themoviedb.org/t/p/w1280/774UV1aCURb4s4JfEFg3IEMu5Zj.jpg", trailer: "https://youtu.be/WC5X3i0B4cg?si=hT0kc_8ck_r8hakw" },
        { id: 35, title: "Kantara chapter 1", rating: 9.1, year: 2025, genre: "Action", language: "Kannada", image: "https://www.themoviedb.org/t/p/w1280/ehQPboTPaIMkMUOoNOh8e7pZ5Rp.jpg", trailer: "https://youtu.be/axBF-4nNZ3s?si=x8mYbQgPnpazjL50" },
        { id: 36, title: "KGF Chapter 2", rating: 9.0, year: 2022, genre: "Action", language: "Kannada", image: "https://www.themoviedb.org/t/p/w1280/khNVygolU0TxLIDWff5tQlAhZ23.jpg", trailer: "https://youtu.be/bDTUFufX-1s?si=BUDSP8yMjaPqkHd3" },
        { id: 37, title: "Jailer", rating: 8.7, year: 2023, genre: "Action", language: "Tamil", image: "https://www.themoviedb.org/t/p/w1280/pTmMxAHqX4vsIDE6HPPxOR0Q6TN.jpg", trailer: "https://youtu.be/VutF0FpL4Pw?si=B9VDBJOdUgSsp0Ks" },
        { id: 38, title: "Leo", rating: 8.8, year: 2023, genre: "Action", language: "Tamil", image: "https://www.themoviedb.org/t/p/w1280/2XUHC4lp3tDsgfFLFygNZ2x2Um9.jpg", trailer: "https://youtu.be/Po3jStA673E?si=_RMKQcgTeSowh4KZ" },
        { id: 39, title: "Jawan", rating: 8.6, year: 2023, genre: "Action", language: "Hindi", image: "https://www.themoviedb.org/t/p/w1280/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg", trailer: "https://youtu.be/db6e22CkmJY?si=14uWMFFd4IM5H8fu" },
        { id: 40, title: "Pathaan", rating: 8.5, year: 2023, genre: "Action", language: "Hindi", image: "https://www.themoviedb.org/t/p/w1280/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg", trailer: "https://youtu.be/vqu4z34wENw?si=kOnMmq7RRKzNxN5r" }
    ],
    comedy: [
        { id: 41, title: "Mathu Vadalara 2", rating: 8.3, year: 2024, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/7gDzqf5tSwnwfREEVJeTAZtK64F.jpg", trailer: "https://youtu.be/ahZX-ewuZP8?si=26-zhHoAM96fFYVf" },
        { id: 42, title: "F3: Fun and Frustration", rating: 7.9, year: 2022, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/c6yJv8fyNONChZ6bSAGsLEnvDKt.jpg", trailer: "https://youtu.be/3pelriJ6Acs?si=M7IUCWOUqh_WyS-B" },
        { id: 43, title: "Jathi Ratnalu", rating: 8.6, year: 2021, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/7MzvmgHRmhbJH1UZJhRCkAtxvEy.jpg", trailer: "https://youtu.be/qbrSpeGCKT8?si=IwUZO760KFmbopBf" },
        { id: 44, title: "DJ Tillu", rating: 8.4, year: 2022, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/2XKg3VhpFDXdAktwKvFMSuIneE3.jpg", trailer: "https://youtu.be/CRFnqrv9pEg?si=eRk5AfdKyB8QYRSJ" },
        { id: 45, title: "Bro", rating: 8.0, year: 2023, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/cCirdTe57qpOvb1NFKECbQRMmfQ.jpg", trailer: "https://youtu.be/ArOm-GWR6Zk?si=-i0Yj4Ww14eYkOtC" },
        { id: 46, title: "Mad", rating: 8.5, year: 2023, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/nDpOmgBfQZwOpFBcgokQGqd74r1.jpg", trailer: "https://youtu.be/bQRCyrNmhj4?si=Ey9BjxnhADinYdjP" },
        { id: 47, title: "Pelli SandaD", rating: 7.8, year: 2021, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/ozaOyoDo83brgYqbcduBIAxxyX9.jpg", trailer: "https://youtu.be/vIzDDbIFoI0?si=HwRV9d8fAauI9gkK" },
        { id: 48, title: "3 Monkeys", rating: 8.1, year: 2020, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/qCy7e3t03fb0YxQKh4cmvqxfK7M.jpg", trailer: "https://youtu.be/elrgHY-NRyE?si=UOYOhI2mtIfO12cO" }
    ],
    tvshows: [
        { id: 101, title: "The Software DevLOVEper", rating: 8.5, episodes: 19, genre: "Crime", image: "https://www.themoviedb.org/t/p/w1280/2TaptiD69q81c7ZXNiNcjPSjR2K.jpg", trailer: "https://youtu.be/ZvISbJNSolg?si=_HOw7C1oRmbp5sQe" },
        { id: 102, title: "The Family Man", rating: 8.7, episodes: 19, genre: "Action", image: "https://www.themoviedb.org/t/p/w1280/tE1NUJqw9gV6AVjQ1GTK78LbWJ9.jpg", trailer: "https://youtu.be/XatRGut65VI?si=dBWkPhD5KggBaJmp" },
        { id: 103, title: "Panchayat", rating: 8.9, episodes: 16, genre: "Comedy", image: "https://www.themoviedb.org/t/p/w1280/cPPhduQk1eX0MAE2JDaQRh3UZB5.jpg", trailer: "https://youtu.be/AHMEtNAZTP4?si=fiTs3f2tF8fyRwfn" },
        { id: 104, title: "Sacred Games", rating: 8.5, episodes: 16, genre: "Crime", image: "https://www.themoviedb.org/t/p/w1280/uEbNtFbK4At9WBDGap23lt1qO9n.jpg", trailer: "https://youtu.be/AkUgf2jIPyI?si=m2qXNZRIgG5K4nrc" },
        { id: 105, title: "Scam 1992", rating: 9.3, episodes: 10, genre: "Drama", image: "https://www.themoviedb.org/t/p/w1280/fiimZ9Xt5cPTPHNrbS4QautBXpU.jpg", trailer: "https://youtu.be/ISORfez27og?si=ypQwabU3BmWPQu-p" },
        { id: 106, title: "Kota Factory", rating: 9.0, episodes: 10, genre: "Drama", image: "https://www.themoviedb.org/t/p/w1280/fMBookmwL6HjIgIVTjQ6EMr3pCH.jpg", trailer: "https://youtu.be/rJEB-0yCjKw?si=2tj17hc1H_qboKqY" },
        { id: 107, title: "Paatal Lok", rating: 8.1, episodes: 9, genre: "Crime", image: "https://www.themoviedb.org/t/p/w1280/qL8f1E0W42CFHG8NtpyJFMPeKnw.jpg", trailer: "https://youtu.be/RyzVgy8JteA?si=OLoF6ReP7fQX7t9c" },
        { id: 108, title: "Asur", rating: 8.4, episodes: 16, genre: "Thriller", image: "https://www.themoviedb.org/t/p/w1280/WUfHP1VrHKFBXbKuCDoB6hSUa9.jpg", trailer: "https://youtu.be/1oCIyDZ76IY?si=v2zQXUlQINbKTtaQ" },
        { id: 109, title: "Farzi", rating: 8.4, episodes: 8, genre: "Thriller", image: "https://www.themoviedb.org/t/p/w1280/cTS86RwEBIDgCgUmjWQTSoPsK6p.jpg", trailer: "https://youtu.be/rcQ_xZdzPBc?si=3dSNIX4phIKtp79X" },
        { id: 110, title: "Rocket Boys", rating: 8.9, episodes: 16, genre: "Drama", image: "https://www.themoviedb.org/t/p/w1280/esNv5JwxVsvu6vZE7bTVeu0mLaA.jpg", trailer: "https://youtu.be/rOD-78_0pPU?si=ByoEMsV_aJgBAFUl" },
        { id: 111, title: "Made in Heaven", rating: 8.3, episodes: 16, genre: "Drama", image: "https://www.themoviedb.org/t/p/w1280/leBOnbO2aLyfhMEdgO9tMlwcCY.jpg", trailer: "https://youtu.be/_lpxWzvII5k?si=6PQJjK2X1Z_50YK6" },
        { id: 112, title: "Special OPS", rating: 8.6, episodes: 8, genre: "Action", image: "https://www.themoviedb.org/t/p/w1280/doqymbPdJNLpkkEOhvlRALidJGb.jpg", trailer: "https://youtu.be/iaNXfCYW91U?si=WbeusewMz32mnJPW" }
    ]
};

// ========================================
// GLOBAL STATE
// ========================================

let currentTheme = 'dark';
let searchTimeout;
let allMovies = [];
let allShows = [];
let currentMovie = null;

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Flatten all movies for search
    // Exclude tvshows from 'allMovies' if 'allMovies' is intended strictly for movies search on home/movies page
    // BUT for global search, we might want everything.
    // Let's keep them separate for now or combined based on use case.

    // Combine everything for global search potentially
    const moviesOnly = [
        ...movieDatabase.trending,
        ...movieDatabase.latest,
        ...movieDatabase.popular,
        ...movieDatabase.recommended,
        ...movieDatabase.action,
        ...movieDatabase.comedy
    ];

    // Remove duplicates based on ID
    allMovies = Array.from(new Map(moviesOnly.map(item => [item.id, item])).values());
    allShows = movieDatabase.tvshows;

    // Load movies into sections (Home Page)
    loadMovies();

    // Initialize event listeners
    initializeNavbar();
    initializeSearch();
    initializeThemeToggle();
    initializeScrollControls();
    initializeMobileMenu();
    initializeModal();
    initializeHeroCarousel();

    // Load saved theme
    loadTheme();

    console.log('🎬 VibeWave - Telugu & Indian Cinema initialized!');
    console.log(`📊 Total Movies: ${allMovies.length}`);
}

// ========================================
// HERO CAROUSEL (AUTO-SCROLLING)
// ========================================

let currentHeroIndex = 0;
let heroInterval;

function initializeHeroCarousel() {
    // Get featured movies (first 5 from trending)
    const featuredMovies = movieDatabase.trending.slice(0, 5);

    // Show first movie
    updateHeroSection(featuredMovies[currentHeroIndex]);

    // Auto-scroll every 5 seconds
    heroInterval = setInterval(() => {
        currentHeroIndex = (currentHeroIndex + 1) % featuredMovies.length;
        updateHeroSection(featuredMovies[currentHeroIndex]);
    }, 5000);
}

function updateHeroSection(movie) {
    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroRating = document.querySelector('.hero-meta .rating');
    const heroYear = document.querySelector('.hero-meta .year');
    const heroGenre = document.querySelector('.hero-meta .genre');

    if (!hero || !movie) return;

    // Update background image
    hero.style.backgroundImage = `
        linear-gradient(to bottom, transparent 0%, var(--bg-primary) 100%),
        url('${movie.image}')
    `;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';

    // Update text content
    if (heroTitle) heroTitle.textContent = movie.title;
    if (heroDescription) {
        heroDescription.textContent = getMovieDescription(movie);
    }
    if (heroRating) {
        heroRating.innerHTML = `<i class="fas fa-star"></i> ${movie.rating}`;
    }
    if (heroYear) heroYear.textContent = movie.year;
    if (heroGenre) heroGenre.textContent = `${movie.language} • ${movie.genre}`;
}

// ========================================
// MOVIE LOADING
// ========================================

function loadMovies() {
    Object.keys(movieDatabase).forEach(category => {
        const container = document.getElementById(category);
        if (container) {
            renderMovies(container, movieDatabase[category]);
        }
    });
}

function renderMovies(container, movies) {
    container.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
    });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('data-movie-id', movie.id);

    const yearOrEp = movie.episodes ? `${movie.episodes} Episodes` : movie.year;

    card.innerHTML = `
        <img src="${movie.image}"
             alt="${movie.title}"
             class="movie-poster"
             loading="lazy"
             onerror="this.src='https://via.placeholder.com/300x450/667eea/ffffff?text=${encodeURIComponent(movie.title)}'; this.onerror=null;">
        <div class="movie-video-preview"></div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-rating">
                    <i class="fas fa-star"></i> ${movie.rating}
                </span>
                <span class="movie-year">${yearOrEp}</span>
            </div>
        </div>
    `;

    // Hover Video Logic
    let hoverTimeout;
    const previewContainer = card.querySelector('.movie-video-preview');

    card.addEventListener('mouseenter', () => {
        if (!movie.trailer) {
            // console.log(`No trailer for ${movie.title}`);
            return;
        }

        console.log(`Hovering ${movie.title}, loading trailer: ${movie.trailer}`);

        hoverTimeout = setTimeout(() => {
            // Check if already active to avoid re-renders
            if (previewContainer.classList.contains('active')) return;

            // Embed YouTube Player with comprehensive allow attributes
            previewContainer.innerHTML = `
                <iframe 
                    src="${movie.trailer}" 
                    title="${movie.title} Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    frameborder="0">
                </iframe>
            `;
            previewContainer.classList.add('active');
        }, 1000); // 1 second delay
    });

    card.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        previewContainer.classList.remove('active');
        // Clear iframe slightly after transition to avoid abrupt cut
        setTimeout(() => {
            if (!previewContainer.classList.contains('active')) {
                previewContainer.innerHTML = '';
            }
        }, 300);
    });

    // Add click event to open modal
    card.addEventListener('click', (e) => {
        openMovieModal(movie);
    });

    return card;
}



// ========================================
// NAVBAR FUNCTIONALITY
// ========================================

function initializeNavbar() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Active link highlighting
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim().toLowerCase();

            searchTimeout = setTimeout(() => {
                performSearch(query);
            }, 300);
        });
    }
}

function performSearch(query) {
    // 1. Check if we are on the Home Page (has specific section IDs)
    const isHomePage = document.getElementById('trending');
    // 2. Check if we are on Movies Page
    const isMoviesPage = document.getElementById('moviesGrid');
    // 3. Check if we are on TV Shows Page
    const isTVPage = document.getElementById('showsGrid');

    if (query.length === 0) {
        if (isHomePage) loadMovies(); // Reset home page
        if (isMoviesPage && typeof loadAllMovies === 'function') loadAllMovies(); // Reset movies page
        if (isTVPage && typeof loadAllShows === 'function') loadAllShows(); // Reset tv page
        return;
    }

    if (isHomePage) {
        const filteredMovies = allMovies.filter(movie =>
            movie.title.toLowerCase().includes(query) ||
            movie.genre.toLowerCase().includes(query) ||
            movie.language.toLowerCase().includes(query)
        );

        // Update all sections with filtered results
        Object.keys(movieDatabase).forEach(category => {
            const container = document.getElementById(category);
            if (container) {
                const categoryMovies = filteredMovies.filter(movie => {
                    // Check if movie belongs to this category
                    return movieDatabase[category].some(m => m.id === movie.id);
                });

                if (categoryMovies.length > 0) {
                    renderMovies(container, categoryMovies);
                    container.parentElement.style.display = 'block';
                } else {
                    container.parentElement.style.display = 'none';
                }
            }
        });
    } else if (isMoviesPage) {
        // Search in all movies
        const filteredMovies = allMovies.filter(movie =>
            movie.title.toLowerCase().includes(query) ||
            movie.genre.toLowerCase().includes(query) ||
            movie.language.toLowerCase().includes(query)
        );
        const grid = document.getElementById('moviesGrid');
        renderMovies(grid, filteredMovies);
    } else if (isTVPage) {
        // Search in all shows
        const filteredShows = allShows.filter(show =>
            show.title.toLowerCase().includes(query) ||
            show.genre.toLowerCase().includes(query)
        );
        const grid = document.getElementById('showsGrid');
        renderMovies(grid, filteredShows);
    }
}

function showNoResults() {
    const firstSection = document.querySelector('.movie-section');
    if (firstSection) {
        const container = firstSection.querySelector('.movie-row');
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary); width: 100%;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p style="font-size: 1.2rem;">No results found</p>
                <p>Try searching for something else</p>
            </div>
        `;
        firstSection.style.display = 'block';
    }
}

// ========================================
// THEME TOGGLE
// ========================================

function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
        saveTheme(currentTheme);
    });
}

function applyTheme(theme) {
    const body = document.body;
    const themeIcon = document.querySelector('#themeToggle i');

    if (theme === 'light') {
        body.classList.add('light-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        body.classList.remove('light-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

function saveTheme(theme) {
    localStorage.setItem('vibewave-theme', theme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('vibewave-theme') || 'dark';
    currentTheme = savedTheme;
    applyTheme(currentTheme);
}

// ========================================
// HORIZONTAL SCROLL CONTROLS
// ========================================

function initializeScrollControls() {
    const scrollButtons = document.querySelectorAll('.scroll-btn');

    scrollButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            const container = document.getElementById(section);
            const scrollAmount = 600;

            if (btn.classList.contains('scroll-left')) {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// MOBILE MENU
// ========================================

function initializeMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
}

// ========================================
// MODAL FUNCTIONALITY
// ========================================

function initializeModal() {
    const modal = document.getElementById('movieModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const playNowBtn = document.getElementById('playNowBtn');
    const watchTrailerBtn = document.getElementById('watchTrailerBtn');
    const backButton = document.getElementById('backButton');

    modalClose.addEventListener('click', closeMovieModal);
    modalOverlay.addEventListener('click', closeMovieModal);

    if (playNowBtn) {
        playNowBtn.addEventListener('click', () => playVideo('trailer'));
    }

    if (watchTrailerBtn) {
        watchTrailerBtn.addEventListener('click', () => playVideo('trailer'));
    }

    if (backButton) {
        backButton.addEventListener('click', backToMovieInfo);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeMovieModal();
        }
    });
}

function openMovieModal(movie) {
    const modal = document.getElementById('movieModal');
    currentMovie = movie;

    // Show movie info, hide video player
    document.getElementById('modalHero').style.display = 'block';
    document.getElementById('modalInfo').style.display = 'block';
    document.getElementById('videoPlayerContainer').style.display = 'none';

    // Populate modal with movie data - with error handling for poster
    const modalPoster = document.getElementById('modalPoster');
    modalPoster.src = movie.image;
    modalPoster.onerror = function () {
        this.src = 'https://via.placeholder.com/300x450/667eea/ffffff?text=' + encodeURIComponent(movie.title);
    };

    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalRating').innerHTML = `<i class="fas fa-star"></i> ${movie.rating}`;
    document.getElementById('modalYear').textContent = `${movie.year} • ${movie.language}`;
    document.getElementById('modalDuration').textContent = '2h 15m';
    document.getElementById('modalDescription').textContent = getMovieDescription(movie);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMovieModal() {
    const modal = document.getElementById('movieModal');
    const videoEmbed = document.getElementById('videoEmbed');

    // Stop video by clearing the embed
    if (videoEmbed) {
        videoEmbed.innerHTML = '';
    }

    // Reset view
    document.getElementById('modalHero').style.display = 'block';
    document.getElementById('modalInfo').style.display = 'block';
    document.getElementById('videoPlayerContainer').style.display = 'none';

    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentMovie = null;
}

function backToMovieInfo() {
    const videoEmbed = document.getElementById('videoEmbed');

    // Stop video
    if (videoEmbed) {
        videoEmbed.innerHTML = '';
    }

    // Show movie info, hide video player
    document.getElementById('modalHero').style.display = 'block';
    document.getElementById('modalInfo').style.display = 'block';
    document.getElementById('videoPlayerContainer').style.display = 'none';
}

function playVideo(type) {
    const videoPlayerContainer = document.getElementById('videoPlayerContainer');
    const modalHero = document.getElementById('modalHero');
    const modalInfo = document.getElementById('modalInfo');
    const videoEmbed = document.getElementById('videoEmbed');

    // Hide movie info, show video player
    modalHero.style.display = 'none';
    modalInfo.style.display = 'none';
    videoPlayerContainer.style.display = 'block';

    // Use YouTube trailer if available
    if (currentMovie && currentMovie.trailer) {
        let trailerId = currentMovie.trailer;

        // Robust ID Extraction using Regex
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = trailerId.match(regExp);

        if (match && match[2].length === 11) {
            trailerId = match[2];
        } else {
            console.warn('Could not extract video ID, using fallback logic for:', trailerId);
            // Fallback: If it's already an embed URL, try to use it as is but we need controls, so we prefer the ID.
            if (trailerId.includes('/embed/')) {
                const parts = trailerId.split('/embed/');
                if (parts[1]) {
                    trailerId = parts[1].split('?')[0];
                }
            }
        }

        // Create YouTube embed with controls enabled (Unmuted for main player)
        videoEmbed.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${trailerId}?autoplay=1&controls=1&rel=0&modestbranding=1&fs=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                title="${currentMovie.title} Trailer">
            </iframe>
        `;
        console.log(`▶️ Playing YouTube trailer for: ${currentMovie.title}`);
        console.log(`🎬 YouTube ID: ${trailerId}`);
    } else {
        // Fallback message if no trailer available
        videoEmbed.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #000; color: #fff; flex-direction: column; gap: 1rem; padding: 2rem;">
                <i class="fas fa-film" style="font-size: 4rem; opacity: 0.5;"></i>
                <p style="font-size: 1.2rem; font-weight: 600;">Trailer not available</p>
                <p style="opacity: 0.7;">This movie does not have a trailer link.</p>
            </div>
        `;
        console.log(`⚠️ No trailer available for: ${currentMovie ? currentMovie.title : 'Unknown'}`);
    }
}

function getMovieDescription(movie) {
    const descriptions = {
        'Sci-Fi': `Embark on an epic journey through space and time in this mind-bending ${movie.language} science fiction adventure.`,
        'Action': `Experience non-stop action and thrilling sequences in this adrenaline-pumping ${movie.language} blockbuster.`,
        'Mystery': `Unravel the secrets and solve the mystery in this captivating ${movie.language} thriller.`,
        'Horror': `Prepare to be terrified in this spine-chilling ${movie.language} horror experience.`,
        'Romance': `Fall in love with this heartwarming ${movie.language} romantic story.`,
        'Comedy': `Get ready to laugh out loud with this hilarious ${movie.language} comedy.`,
        'Drama': `Experience powerful storytelling in this emotional ${movie.language} drama.`,
        'Fantasy': `Enter a magical world of wonder and adventure in this ${movie.language} epic.`,
        'Adventure': `Join the adventure of a lifetime in this thrilling ${movie.language} tale.`,
        'Thriller': `Keep on the edge of your seat with this gripping ${movie.language} thriller.`
    };

    return descriptions[movie.genre] || `An unforgettable ${movie.language} cinematic experience awaits you.`;
}

// ========================================
// SMOOTH ANIMATIONS
// ========================================

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all movie sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.movie-section');
    sections.forEach(section => observer.observe(section));
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Log performance
console.log('%c🎬 VibeWave - Telugu & Indian Cinema', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to the ultimate streaming experience!', 'color: #764ba2; font-size: 14px;');
console.log('%c✨ Real movie posters & YouTube trailers integrated', 'color: #4caf50; font-size: 12px;');

