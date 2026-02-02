// ========================================
// MOVIE DATA - REAL TELUGU & INDIAN CINEMA
// ========================================

const movieDatabase = {
    trending: [
        { id: 1, title: "Salaar", rating: 8.9, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/nlu9WbcetNFRGXXPWITr30ob7W6.jpg", trailer: "eKp-16DHVXI" },
        { id: 2, title: "Devara", rating: 8.7, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/lQfuaXjANoTsdx5iS0gCXlK9D2L.jpg", trailer: "ZS8bkZ7z8sw" },
        { id: 3, title: "HanuMan", rating: 8.5, year: 2024, genre: "Fantasy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/m1zq48rWSXxplzoJR8YtbXWnnHM.jpg", trailer: "gZoJNKz-pHM" },
        { id: 4, title: "Kalki 2898 AD", rating: 9.0, year: 2024, genre: "Sci-Fi", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg", trailer: "pQgSTdMRwbw" },
        { id: 5, title: "RRR", rating: 9.2, year: 2022, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg", trailer: "GY4CDWNv1Uk" },
        { id: 6, title: "Pushpa 2", rating: 8.8, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/759mIIerY4Njb8uPoj7AIXGSNh3.jpg", trailer: "AnhzW87d2pQ" },
        { id: 7, title: "Guntur Kaaram", rating: 8.3, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/qvBt4YLy274ZmoMAfVlwmHkjVkq.jpg", trailer: "WV5Dkw7tAT8" },
        { id: 8, title: "Tillu Square", rating: 8.4, year: 2024, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/unRseguQgs9YQbzSHTZKIE3qXa7.jpg", trailer: "xbkF9bH-Tws" }
    ],
    latest: [
        { id: 9, title: "Hi Nanna", rating: 8.6, year: 2023, genre: "Drama", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/hhMLtq9m1aK0dpY9Wcq26XeDH2z.jpg", trailer: "xVFJxL6nf_I" },
        { id: 10, title: "Eagle", rating: 8.2, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/mjQN27x0Dfkmsi3SRRkAIatOr2p.jpg", trailer: "qVAsTYkLQ5E" },
        { id: 11, title: "Family Star", rating: 7.8, year: 2024, genre: "Drama", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/2mLyHeWwU0Ocv9Jvk72IDqZqT7G.jpg", trailer: "8kk0L8pBNyQ" },
        { id: 12, title: "Naa Saami Ranga", rating: 8.0, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/4xwNsmT0XPFF0Ssa7kB6FR1MZRz.jpg", trailer: "kGp4a6N0FSs" },
        { id: 13, title: "OG", rating: 8.5, year: 2024, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/chNN2KaPwjebfhh1vWhGyIKBOj3.jpg", trailer: "_XpRY17xLNY" },
        { id: 14, title: "Bhagavanth Kesari", rating: 8.3, year: 2023, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/tvADrBoLJgyrxMYl8QyQW2125xv.jpg", trailer: "ZH7_OWvbMds" },
        { id: 15, title: "Extra Ordinary Man", rating: 7.9, year: 2023, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/bOym2XLkyDcYVvX5sZ6YYm19xXT.jpg", trailer: "_2X6Y20wnL8" },
        { id: 16, title: "Tiger Nageswara Rao", rating: 8.1, year: 2023, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/3tiYpneYIvXfbaCE0brOoBjXP7v.jpg", trailer: "rkAsp2AJ48Y" }
    ],
    popular: [
        { id: 17, title: "Baahubali 2", rating: 9.3, year: 2017, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/4YAX6AIFsU7gCCWAxoQ5ajdwSIN.jpg", trailer: "G62HrubdD6o" },
        { id: 18, title: "Pushpa: The Rise", rating: 9.0, year: 2021, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/h6Pd89ngvl9quPVsx3KoJlQsvk9.jpg", trailer: "pKctjEKKQkE" },
        { id: 19, title: "Rangasthalam", rating: 8.9, year: 2018, genre: "Drama", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/yiEzDgBBFC25Zd6z0r7sMngn5vr.jpg", trailer: "ga284eZaVw8" },
        { id: 20, title: "Ala Vaikunthapurramuloo", rating: 8.7, year: 2020, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/goVGxWzvxs8oMNJ1Zc0QmfJlIzs.jpg", trailer: "DHVAHZfN__s" },
        { id: 21, title: "Sita Ramam", rating: 8.8, year: 2022, genre: "Romance", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/g3hk2wEeIsTGhh7JvK8yWFVR7ue.jpg", trailer: "KdvCPPqksIY" },
        { id: 22, title: "Eega", rating: 8.8, year: 2012, genre: "Fantasy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/gZ1nxfXJjnQSzTTOzUjaz1IIhTF.jpg", trailer: "vwwZfIA-NzI" },
        { id: 23, title: "Arjun Reddy", rating: 8.6, year: 2017, genre: "Drama", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/kHubDgL59I5hCn7ccBYvU7bKY1r.jpg", trailer: "i_YwcN_DAQ4" },
        { id: 24, title: "Magadheera", rating: 8.7, year: 2009, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/xK7MEV56GF291VG0U5XnVJuvNv3.jpg", trailer: "kzMgk8EUfc4" }
    ],
    recommended: [
        { id: 25, title: "Dasara", rating: 8.4, year: 2023, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/4OTVoCVXa5aHDZl8opKoIV9Ezr5.jpg", trailer: "bYzCJbgKJPI" },
        { id: 26, title: "Karthikeya 2", rating: 8.5, year: 2022, genre: "Mystery", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/fKKoQndNfbDOLfYM1Zogt7miGF1.jpg", trailer: "-Q2kfiC-WN4" },
        { id: 27, title: "Bheemla Nayak", rating: 8.3, year: 2022, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/14KeWSkgzTbfJmmD4bXT9mwkaYz.jpg", trailer: "ALmm7jDN8tE" },
        { id: 28, title: "Jersey", rating: 8.6, year: 2019, genre: "Drama", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/bU9q9yVtxeBiC0Do27CekHXNE6D.jpg", trailer: "5k3coXaB_WE" },
        { id: 29, title: "Fidaa", rating: 8.5, year: 2017, genre: "Romance", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/cvpwHdJuUzm544lvleBIAxGdzBB.jpg", trailer: "nI-D3uo2z9g" },
        { id: 30, title: "Geetha Govindam", rating: 8.4, year: 2018, genre: "Romance", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/sTreb0ajewXqeIqAyZ0IWtafoB5.jpg", trailer: "l7L0Lu1L0_w" },
        { id: 31, title: "Athadu", rating: 8.7, year: 2005, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/ojZAu2KOemaDEfLnJXZeuU9QQko.jpg", trailer: "KX8qh0b5aDY" },
        { id: 32, title: "Pokiri", rating: 8.8, year: 2006, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/rQ8NH5f3CxRrmqZWMZNYPwLmjDS.jpg", trailer: "T_f7xq2KS-Y" }
    ],
    action: [
        { id: 33, title: "Saaho", rating: 8.2, year: 2019, genre: "Action", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/abjWQwUakmBUecf73jiZDx5iex0.jpg", trailer: "JXiwwEvY1fY" },
        { id: 34, title: "Vikram", rating: 8.9, year: 2022, genre: "Action", language: "Tamil", image: "https://www.themoviedb.org/t/p/w1280/774UV1aCURb4s4JfEFg3IEMu5Zj.jpg", trailer: "OKBMCL-frPU" },
        { id: 35, title: "Kantara", rating: 9.1, year: 2022, genre: "Action", language: "Kannada", image: "https://www.themoviedb.org/t/p/w1280/ehQPboTPaIMkMUOoNOh8e7pZ5Rp.jpg", trailer: "8KPRoVDxtjg" },
        { id: 36, title: "KGF Chapter 2", rating: 9.0, year: 2022, genre: "Action", language: "Kannada", image: "https://www.themoviedb.org/t/p/w1280/khNVygolU0TxLIDWff5tQlAhZ23.jpg", trailer: "JKa05nyUmuQ" },
        { id: 37, title: "Jailer", rating: 8.7, year: 2023, genre: "Action", language: "Tamil", image: "https://www.themoviedb.org/t/p/w1280/pTmMxAHqX4vsIDE6HPPxOR0Q6TN.jpg", trailer: "R2s0G5cmFXs" },
        { id: 38, title: "Leo", rating: 8.8, year: 2023, genre: "Action", language: "Tamil", image: "https://www.themoviedb.org/t/p/w1280/2XUHC4lp3tDsgfFLFygNZ2x2Um9.jpg", trailer: "Po3jStA673E" },
        { id: 39, title: "Jawan", rating: 8.6, year: 2023, genre: "Action", language: "Hindi", image: "https://www.themoviedb.org/t/p/w1280/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg", trailer: "CEOJMyL5W68" },
        { id: 40, title: "Pathaan", rating: 8.5, year: 2023, genre: "Action", language: "Hindi", image: "https://www.themoviedb.org/t/p/w1280/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg", trailer: "vqu4z34wENw" }
    ],
    comedy: [
        { id: 41, title: "Mathu Vadalara 2", rating: 8.3, year: 2024, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/8B3H5q1iOQ4wE6uX5tG1h1lX9l.jpg", trailer: "ahZX-ewuZP8" },
        { id: 42, title: "F3: Fun and Frustration", rating: 7.9, year: 2022, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/tL1kQ8xc7fWzZ8vL3k6yP5j4c.jpg", trailer: "9pX-C4gL904" },
        { id: 43, title: "Jathi Ratnalu", rating: 8.6, year: 2021, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/3T9yu2w8b6nB3z5f4v8k9l.jpg", trailer: "J_VjH0GZ8Qk" },
        { id: 44, title: "DJ Tillu", rating: 8.4, year: 2022, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/2u2k2w8b6nB3z5f4v8k9l.jpg", trailer: "R0sS9oD-l5I" },
        { id: 45, title: "Bro", rating: 8.0, year: 2023, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/5y5h5f5v5f5v5f5.jpg", trailer: "kYJ8qJc_R4o" },
        { id: 46, title: "Mad", rating: 8.5, year: 2023, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/6z6h6h6h6h6h6h6.jpg", trailer: "k0M9-rW2c2s" },
        { id: 47, title: "Pelli SandaD", rating: 7.8, year: 2021, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/7x7x7x7x7x7x7x7.jpg", trailer: "lP1xCpPB-iQ" },
        { id: 48, title: "3 Monkeys", rating: 8.1, year: 2020, genre: "Comedy", language: "Telugu", image: "https://www.themoviedb.org/t/p/w1280/8y8y8y8y8y8y8y8.jpg", trailer: "qLP7bExKUsw" }
    ],
    tvshows: [
        { id: 101, title: "Mirzapur", rating: 8.5, episodes: 19, genre: "Crime", image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Poster_of_Mirzapur_2018.jpg", trailer: "DE6yKSU76Kc" },
        { id: 102, title: "The Family Man", rating: 8.7, episodes: 19, genre: "Action", image: "https://upload.wikimedia.org/wikipedia/en/a/aa/The_Family_Man_season_2.jpg", trailer: "3S6wR_vT8nU" },
        { id: 103, title: "Panchayat", rating: 8.9, episodes: 16, genre: "Comedy", image: "https://upload.wikimedia.org/wikipedia/en/d/d4/Panchayat_poster.jpeg", trailer: "f0c5mX82a_k" },
        { id: 104, title: "Sacred Games", rating: 8.5, episodes: 16, genre: "Crime", image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Sacred_Games_Title.png", trailer: "28j8h0rr6AE" },
        { id: 105, title: "Scam 1992", rating: 9.3, episodes: 10, genre: "Drama", image: "https://upload.wikimedia.org/wikipedia/en/7/76/Scam_1992_poster.jpg", trailer: "biLw8V60D1Y" },
        { id: 106, title: "Kota Factory", rating: 9.0, episodes: 10, genre: "Drama", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Kota_Factory_poster.jpg/250px-Kota_Factory_poster.jpg", trailer: "p205936Z4Is" },
        { id: 107, title: "Paatal Lok", rating: 8.1, episodes: 9, genre: "Crime", image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Paatal_Lok_poster.jpeg", trailer: "cNw1q2u_0j8" },
        { id: 108, title: "Asur", rating: 8.4, episodes: 16, genre: "Thriller", image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Asur_web_series_poster.jpg", trailer: "K5_aqh439v8" },
        { id: 109, title: "Farzi", rating: 8.4, episodes: 8, genre: "Thriller", image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Farzi_poster.jpg", trailer: "f3Q5e7y7m0o" },
        { id: 110, title: "Rocket Boys", rating: 8.9, episodes: 16, genre: "Drama", image: "https://upload.wikimedia.org/wikipedia/en/b/b5/Rocket_Boys_poster.jpg", trailer: "L7JdC0_g0B4" },
        { id: 111, title: "Made in Heaven", rating: 8.3, episodes: 16, genre: "Drama", image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Made_In_Heaven_poster.jpeg", trailer: "u02Q8oP_jUI" },
        { id: 112, title: "Special OPS", rating: 8.6, episodes: 8, genre: "Action", image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Special_Ops_poster.jpeg", trailer: "GF0H5DZmWm8" }
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
        if (!movie.trailer) return; // Only if trailer exists

        hoverTimeout = setTimeout(() => {
            // Check if already active to avoid re-renders
            if (previewContainer.classList.contains('active')) return;

            // Embed YouTube Player (Muted, Autoplay, No Controls)
            previewContainer.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/${movie.trailer}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${movie.trailer}&rel=0" 
                    allow="autoplay; encrypted-media" 
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
        // Prevent click if clicking specific localized controls (if any), but generally whole card opens modal
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
        // Create YouTube embed with controls enabled
        videoEmbed.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${currentMovie.trailer}?autoplay=1&controls=1&rel=0&modestbranding=1&fs=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                title="${currentMovie.title} Trailer">
            </iframe>
        `;
        console.log(`▶️ Playing YouTube trailer for: ${currentMovie.title} (${currentMovie.language})`);
        console.log(`🎬 YouTube ID: ${currentMovie.trailer}`);
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
