// 本地存储工具
const Storage = {
    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key)) || {};
        } catch {
            return {};
        }
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getArray(key) {
        try {
            return JSON.parse(localStorage.getItem(key)) || [];
        } catch {
            return [];
        }
    },
    setArray(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// 错题集管理
const WrongBook = {
    KEY: 'wrong_questions',

    add(question) {
        const wrongs = this.getAll();
        if (!wrongs.find(q => q.id === question.id)) {
            wrongs.push({
                ...question,
                wrongTime: new Date().toLocaleString(),
                practiceCount: 0
            });
            Storage.setArray(this.KEY, wrongs);
        }
    },

    remove(id) {
        const wrongs = this.getAll().filter(q => q.id !== id);
        Storage.setArray(this.KEY, wrongs);
    },

    getAll() {
        return Storage.getArray(this.KEY);
    },

    incrementPractice(id) {
        const wrongs = this.getAll();
        const q = wrongs.find(q => q.id === id);
        if (q) {
            q.practiceCount++;
            Storage.setArray(this.KEY, wrongs);
        }
    }
};

// 学习计划管理
const StudyPlan = {
    KEY: 'study_plan',
    PROGRESS_KEY: 'study_progress',

    getPlan() {
        return Storage.getArray(this.KEY);
    },

    setPlan(plan) {
        Storage.setArray(this.KEY, plan);
    },

    getProgress() {
        return Storage.get(this.PROGRESS_KEY);
    },

    updateProgress(date, completed) {
        const progress = this.getProgress();
        progress[date] = completed;
        Storage.set(this.PROGRESS_KEY, progress);
    },

    getToday() {
        return new Date().toISOString().split('T')[0];
    }
};

// 导航激活状态
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNav);
