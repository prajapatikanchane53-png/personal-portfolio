// ===== TYPING ANIMATION =====
const titles = [
    "Flutter & Dart Developer 📱",
    "Python Enthusiast 🐍",
    "AI & Firebase Developer 🔥",
    "Sports Tech Analyst 🏆",
    "B.Sc. IT Graduate 🎓"
];

let titleIndex = 0, charIndex = 0, isDeleting = false;
const typedText = document.getElementById('typed-text');

function typeWriter() {
    const currentTitle = titles[titleIndex];
    if (isDeleting) {
        typedText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }
    if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => { isDeleting = true; }, 1500);
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
    }
    setTimeout(typeWriter, isDeleting ? 50 : 80);
}
typeWriter();

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.boxShadow = window.scrollY > 50
        ? '0 4px 20px rgba(168,85,247,0.15)'
        : 'none';
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = '#0a0a0a';
    navLinks.style.padding = '20px';
    navLinks.style.borderBottom = '1px solid #222';
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            navLinks.style.display = 'none';
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .cert-card, .timeline-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== SKILL DATA (Kanchan's Skills) =====
const skillData = {
    flutter: {
        icon: '📱',
        title: 'Flutter & Dart',
        level: 'Advanced',
        percent: '85%',
        desc: 'Built "Yoga Perfect" — a full mobile app using Flutter with AI-based posture detection, guided yoga instructions, and Firebase integration. Strong command over widgets, state management, and UI design.',
        tags: ['Widgets', 'State Management', 'Navigation', 'Firebase', 'UI/UX']
    },
    python: {
        icon: '🐍',
        title: 'Python',
        level: 'Advanced',
        percent: '80%',
        desc: 'Used Python for data processing, scripting, and AI/ML integrations. Comfortable with libraries like NumPy, pandas, and OpenCV for computer vision applications.',
        tags: ['Scripting', 'Data Processing', 'AI/ML', 'OpenCV', 'Automation']
    },
    firebase: {
        icon: '🔥',
        title: 'Firebase',
        level: 'Advanced',
        percent: '80%',
        desc: 'Implemented Firebase backend services in Yoga Perfect app — including Firestore for data storage, Firebase Auth for user management, and real-time database for feedback collection.',
        tags: ['Firestore', 'Auth', 'Realtime DB', 'Storage', 'Cloud Functions']
    },
    html: {
        icon: '🌐',
        title: 'HTML & CSS',
        level: 'Advanced',
        percent: '85%',
        desc: 'Strong command over semantic HTML5 and modern CSS3 including Flexbox, Grid, animations, and responsive design for all screen sizes.',
        tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive']
    },
    cpp: {
        icon: '⚙️',
        title: 'C / C++',
        level: 'Intermediate',
        percent: '70%',
        desc: 'Solid foundation in C and C++ programming including data structures, algorithms, memory management, and object-oriented programming concepts.',
        tags: ['OOP', 'Data Structures', 'Algorithms', 'Pointers', 'STL']
    },
    sql: {
        icon: '🗄️',
        title: 'SQL & MS-SQL',
        level: 'Intermediate',
        percent: '75%',
        desc: 'Proficient in writing SQL queries, managing relational databases using MS-SQL. Experience with joins, stored procedures, and database design.',
        tags: ['Queries', 'Joins', 'MS-SQL', 'Stored Procedures', 'DB Design']
    }
};

function openSkill(skill) {
    const data = skillData[skill];
    document.getElementById('modal-icon').textContent = data.icon;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-level').textContent = '⭐ ' + data.level;
    document.getElementById('modal-desc').textContent = data.desc;
    document.getElementById('modal-tags').innerHTML = data.tags.map(t => `<span>${t}</span>`).join('');
    const fill = document.getElementById('modal-fill');
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = data.percent; }, 100);
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSkill() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSkill();
});

// ===== CONTACT FORM =====
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMsg = document.getElementById('form-msg');
    if (!name || !email || !message) {
        formMsg.textContent = '⚠️ Please fill all fields!';
        formMsg.style.color = '#ff4444';
        return;
    }
    formMsg.textContent = '✅ Message sent! I will get back to you soon.';
    formMsg.style.color = '#a855f7';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}

// ===== ACTIVE NAV =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navAnchors = document.querySelectorAll('.nav-links a');
    sections.forEach(section => {
        const top = section.offsetTop - 200;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
            navAnchors.forEach(a => a.style.color = '#aaa');
            const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (activeLink) activeLink.style.color = '#a855f7';
        }
    });
});
