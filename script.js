// ========================================
// MOVIE DATA - REAL TELUGU & INDIAN CINEMA
// ========================================

const movieDatabase = {
    trending: [
        { id: 1, title: "Salaar", rating: 8.9, year: 2024, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BYjFkN2I2MzUtMTA5ZC00YzdhLThhMDAtNWIyNjMxNDg3NTBmXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg", trailer: "eKp-16DHVXI" },
        { id: 2, title: "Devara", rating: 8.7, year: 2024, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BMTg3NjcwNzg5Nl5BMl5BanBnXkFtZTgwMjYzNTczNjE@._V1_.jpg", trailer: "ZS8bkZ7z8sw" },
        { id: 3, title: "HanuMan", rating: 8.5, year: 2024, genre: "Fantasy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BYzY0N2I1NTUtNTY5Yi00ZjI5LWI1YjYtMzQyNTY0MWJlNjcyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "gZoJNKz-pHM" },
        { id: 4, title: "Kalki 2898 AD", rating: 9.0, year: 2024, genre: "Sci-Fi", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BYjBiYjg4ZjMtNzA2Ny00NzJkLWJiNjYtOGFlMzFhZWNjNjkwXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_.jpg", trailer: "pQgSTdMRwbw" },
        { id: 5, title: "RRR", rating: 9.2, year: 2022, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", trailer: "GY4CDWNv1Uk" },
        { id: 6, title: "Pushpa 2", rating: 8.8, year: 2024, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BYWJiZWJkNzAtOGNjNy00ZTgyLWI3OGQtYzI5YWQxOTY1MjkwXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "AnhzW87d2pQ" },
        { id: 7, title: "Guntur Kaaram", rating: 8.3, year: 2024, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BNzUxMDMzODQtNjJlZi00MjY5LTk3ZWYtZWU5ODMxM2E4YzllXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "WV5Dkw7tAT8" },
        { id: 8, title: "Tillu Square", rating: 8.4, year: 2024, genre: "Comedy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BMjBmZTg4NjAtNjdhMS00NWJlLWI0YzItNGJkNGU3NzY0ODhhXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "xbkF9bH-Tws" }
    ],
    latest: [
        { id: 9, title: "Hi Nanna", rating: 8.6, year: 2023, genre: "Drama", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BODJlMzY3MjctNDk3My00ZDcyLWFhNjItMWJjZjdmNGVkYmEzXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "xVFJxL6nf_I" },
        { id: 10, title: "Eagle", rating: 8.2, year: 2024, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BOTI0YzcwNjEtNjliMi00ZTIzLTk5MzctMWNmOGQ5ZWFhMzJhXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "qVAsTYkLQ5E" },
        { id: 11, title: "Family Star", rating: 7.8, year: 2024, genre: "Drama", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BYzI0MzQzOTYtMDkxYS00ZGQyLWFkYjktMzVlZTJlZWE1YzA4XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "8kk0L8pBNyQ" },
        { id: 12, title: "Naa Saami Ranga", rating: 8.0, year: 2024, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BOGY3NjkzYWUtNmNlYy00ODY5LWFmY2ItZjY4YjVmYjNlMmJiXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "kGp4a6N0FSs" },
        { id: 13, title: "OG", rating: 8.5, year: 2024, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BM2QyMjI3ZDYtNDc0Yi00NDUzLTk4NTQtYmI2ZmZhNmRhMDQ4XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "_XpRY17xLNY" },
        { id: 14, title: "Bhagavanth Kesari", rating: 8.3, year: 2023, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BOWExZjIxMDItNTM4Yi00YTY4LWI4OTQtMzkyNGNmNjFkZGRkXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "ZH7_OWvbMds" },
        { id: 15, title: "Extra Ordinary Man", rating: 7.9, year: 2023, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BYjk2MzhjNDEtZThiZi00YmFlLTgzMmItN2RkMGJhMWU0NWYxXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "_2X6Y20wnL8" },
        { id: 16, title: "Tiger Nageswara Rao", rating: 8.1, year: 2023, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BMzRlYmVjNjUtNTI1My00MGI2LTgzNzMtNzcwNmQ4MjU2ODcxXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "rkAsp2AJ48Y" }
    ],
    popular: [
        { id: 17, title: "Baahubali 2", rating: 9.3, year: 2017, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BY2FmYTRlZjgtYzQzNC00YjMzLWJlZDktZjg5YjJkNjk3MTMyXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg", trailer: "G62HrubdD6o" },
        { id: 18, title: "Pushpa: The Rise", rating: 9.0, year: 2021, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BODMxMzRkZjEtOGU5ZS00NDE5LTk5NjItNzY1NzVmZmFhY2FkXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "pKctjEKKQkE" },
        { id: 19, title: "Rangasthalam", rating: 8.9, year: 2018, genre: "Drama", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BZjlmODU2YzUtMTlkYi00ODY3LWJlZDUtOWFkMjdjNDA4MjQ3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", trailer: "ga284eZaVw8" },
        { id: 20, title: "Ala Vaikunthapurramuloo", rating: 8.7, year: 2020, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BNzE4OWU4YzUtYzViOS00MmI0LWJlODQtM2NhNTQwNWZhN2E4XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg", trailer: "DHVAHZfN__s" },
        { id: 21, title: "Sita Ramam", rating: 8.8, year: 2022, genre: "Romance", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BNzk5OGEwMDYtMGUxNi00MjE4LTkwZDctNzM2ODhiNTFhZTlmXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "KdvCPPqksIY" },
        { id: 22, title: "Eega", rating: 8.8, year: 2012, genre: "Fantasy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BMTIxODU4MzQxN15BMl5BanBnXkFtZTcwMDUxODQ2Nw@@._V1_.jpg", trailer: "vwwZfIA-NzI" },
        { id: 23, title: "Arjun Reddy", rating: 8.6, year: 2017, genre: "Drama", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BYjhmNGRiMDEtMjc1Yi00OGU4LWE5NTQtMDBmNTU4OGY3NWFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", trailer: "i_YwcN_DAQ4" },
        { id: 24, title: "Magadheera", rating: 8.7, year: 2009, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BMTM2NzU1NjcyMF5BMl5BanBnXkFtZTcwMjkzODAyMw@@._V1_.jpg", trailer: "kzMgk8EUfc4" }
    ],
    recommended: [
        { id: 25, title: "Dasara", rating: 8.4, year: 2023, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BZTE0ZDQzZDMtNzczNy00ZTU0LTlkNDMtYTA5YTA5NzIyOWQ2XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "bYzCJbgKJPI" },
        { id: 26, title: "Karthikeya 2", rating: 8.5, year: 2022, genre: "Mystery", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BNGYyZGJmOTMtNzY3OS00ZDhjLWIzMzEtMTQ2ZWNkYWQ5ZTYyXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "-Q2kfiC-WN4" },
        { id: 27, title: "Bheemla Nayak", rating: 8.3, year: 2022, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BMDc0YWExZWYtYzk4Yi00OGY5LWI2MzktY2I3NTc5MGI4MWIxXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "ALmm7jDN8tE" },
        { id: 28, title: "Jersey", rating: 8.6, year: 2019, genre: "Drama", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BYTNmNzA2ZDgtZDMwNS00YTk3LTgwMGMtZTdjNGM5NDhiMTBkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", trailer: "5k3coXaB_WE" },
        { id: 29, title: "Fidaa", rating: 8.5, year: 2017, genre: "Romance", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BZjYyN2Y5NTQtMWY0Yi00MWJiLTgwYTctMzI3NTE4NmRkNDQzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", trailer: "nI-D3uo2z9g" },
        { id: 30, title: "Geetha Govindam", rating: 8.4, year: 2018, genre: "Romance", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BM2Q2NDFkNTMtMjU2NS00MmE1LWEzMTItMGNiYmQ3ZTQ0YWE2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", trailer: "l7L0Lu1L0_w" },
        { id: 31, title: "Athadu", rating: 8.7, year: 2005, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BMjAyMDI0OTk4MV5BMl5BanBnXkFtZTcwNjg1ODcyMQ@@._V1_.jpg", trailer: "KX8qh0b5aDY" },
        { id: 32, title: "Pokiri", rating: 8.8, year: 2006, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BMTU2MTY5ODM5NF5BMl5BanBnXkFtZTcwNTE5MjEzMQ@@._V1_.jpg", trailer: "T_f7xq2KS-Y" }
    ],
    action: [
        { id: 33, title: "Saaho", rating: 8.2, year: 2019, genre: "Action", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BMjE4YjMzYTAtNGZmZC00Y2ExLWJlYzYtZjE0NTdiMDU3ZWZlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", trailer: "JXiwwEvY1fY" },
        { id: 34, title: "Vikram", rating: 8.9, year: 2022, genre: "Action", language: "Tamil", image: "https://m.media-amazon.com/images/M/MV5BYjBlMDkwOGMtOGQ5OC00NDg3LWI2MDQtNDA2NDdlOWM5YzQ0XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "OKBMCL-frPU" },
        { id: 35, title: "Kantara", rating: 9.1, year: 2022, genre: "Action", language: "Kannada", image: "https://m.media-amazon.com/images/M/MV5BYjU0MzBlZTEtN2Q3Yi00YjlkLWExNjAtZDEyNzYyNWY0YzBmXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "8KPRoVDxtjg" },
        { id: 36, title: "KGF Chapter 2", rating: 9.0, year: 2022, genre: "Action", language: "Kannada", image: "https://m.media-amazon.com/images/M/MV5BMTAzNDk3OTM2MjVeQTJeQWpwZ15BbWU4MDk1MjI5Nzkx._V1_.jpg", trailer: "JKa05nyUmuQ" },
        { id: 37, title: "Jailer", rating: 8.7, year: 2023, genre: "Action", language: "Tamil", image: "https://m.media-amazon.com/images/M/MV5BMmY4ODI1NjMtMmM4Yi00MDY3LWI1MzAtOTc5M2Y1ZWQzMjM1XkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_.jpg", trailer: "R2s0G5cmFXs" },
        { id: 38, title: "Leo", rating: 8.8, year: 2023, genre: "Action", language: "Tamil", image: "https://m.media-amazon.com/images/M/MV5BZWY1OWU0MzYtODU5Ni00ZjZjLTk1Y2YtNTUyMzUzZmY3NDFlXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg", trailer: "Po3jStA673E" },
        { id: 39, title: "Jawan", rating: 8.6, year: 2023, genre: "Action", language: "Hindi", image: "https://m.media-amazon.com/images/M/MV5BYzQzYmVhNzYtODc0OC00YzExLWFkYWYtNmU4NTUzOGQ0ZjY4XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "CEOJMyL5W68" },
        { id: 40, title: "Pathaan", rating: 8.5, year: 2023, genre: "Action", language: "Hindi", image: "https://m.media-amazon.com/images/M/MV5BOGYzNTc3YjgtOTU1NC00NTliLWE2ZWMtNzAwMjQyMTNjYTY1XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "vqu4z34wENw" }
    ],
    comedy: [
        { id: 41, title: "Mathu Vadalara 2", rating: 8.3, year: 2024, genre: "Comedy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BZjkxNGQ2ZWQtYTc4ZC00NjY5LWI2ZDEtMjMyNTE1MDQxNzM1XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "yAXW4jEUw_c" },
        { id: 42, title: "F3: Fun and Frustration", rating: 7.9, year: 2022, genre: "Comedy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BYjA0MzAzNWYtMjI0MC00MWU2LWI2YmYtODkyZGUwYjI3NWM4XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "LQNiPOzRb8Y" },
        { id: 43, title: "Jathi Ratnalu", rating: 8.6, year: 2021, genre: "Comedy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BNmFkYTlkMzMtZTY5MS00ZmY4LWE4ZGMtNDhmTlmMWE3ZWI0XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "lTVXM9bFmJc" },
        { id: 44, title: "DJ Tillu", rating: 8.4, year: 2022, genre: "Comedy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BZjMwOTI0ZTMtYzc4Ny00NzkxLThlYTQtNTZhMTliMWNjY2U2XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "C6cxzOTukKI" },
        { id: 45, title: "Bro", rating: 8.0, year: 2023, genre: "Comedy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BNTEwNGNiNjgtNzQxNC00YWEyLWI0MWQtMzAxZGUwZjdlOWQ1XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "wLNcM9pczOI" },
        { id: 46, title: "Mad", rating: 8.5, year: 2023, genre: "Comedy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BNzY2ZjJhNjYtZDdjNy00OTI5LWFhY2MtZWJiMGI5MjM3NTU3XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg", trailer: "RxfB3HH0WEo" },
        { id: 47, title: "Pelli SandaD", rating: 7.8, year: 2021, genre: "Comedy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BYjEyMTEzNjEtZjcwMS00MDEzLTlhOWYtMmZlOTMwMGJiZTk5XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", trailer: "lP1xCpPB-iQ" },
        { id: 48, title: "3 Monkeys", rating: 8.1, year: 2020, genre: "Comedy", language: "Telugu", image: "https://m.media-amazon.com/images/M/MV5BODIyYjI5ZmYtNzU2Mi00YzFiLWI4MzUtYWJlOGVkOGFjMzk5XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg", trailer: "L9s0K_-JlXQ" }
    ]
};

// ========================================
// GLOBAL STATE
// ========================================

let currentTheme = 'dark';
let searchTimeout;
let allMovies = [];
let currentMovie = null;

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Flatten all movies for search
    allMovies = Object.values(movieDatabase).flat();

    // Load movies into sections
    loadMovies();

    // Initialize event listeners
    initializeNavbar();
    initializeSearch();
    initializeThemeToggle();
    initializeScrollControls();
    initializeMobileMenu();
    initializeModal();
    initializeHeroCarousel(); // NEW: Auto-scrolling hero

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

    console.log(`🎬 Hero: ${movie.title}`);
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

    card.innerHTML = `
        <img src="${movie.image}"
             alt="${movie.title}"
             class="movie-poster"
             loading="lazy"
             onerror="this.src='https://via.placeholder.com/300x450/667eea/ffffff?text=${encodeURIComponent(movie.title)}'; this.onerror=null;">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-rating">
                    <i class="fas fa-star"></i> ${movie.rating}
                </span>
                <span class="movie-year">${movie.year}</span>
            </div>
        </div>
    `;

    // Add click event to open modal
    card.addEventListener('click', () => openMovieModal(movie));

    return card;
}

// ========================================
// NAVBAR FUNCTIONALITY
// ========================================

function initializeNavbar() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
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

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();

        if (query.length === 0) {
            loadMovies(); // Reset to original state
            return;
        }

        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
}

function performSearch(query) {
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

    // If no results found
    const visibleSections = document.querySelectorAll('.movie-section[style="display: block;"]');
    if (visibleSections.length === 0) {
        showNoResults();
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
