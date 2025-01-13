const { createApp, reactive, computed } = Vue;

const DEFAULT_STATE = {
    state: true,
    inputMovie: '',
    inputName: '',
    begin: true,
    categories: [],
    names: [],
    error: '',
    showError: false,
    result: ''
};

createApp({
    setup() {
        const data = reactive(DEFAULT_STATE);

        // Προσθήκη κατηγορίας
        const add = () => {
            const category = data.inputName.trim();

            if (data.category==='') {
                window.alert("Please enter a category");
            } else if (data.categories.includes(category)) {
                window.alert("Category already exists");
            } else {
                data.categories.push(category);
                data.inputName = '';
                data.begin = false;
                console.log(`Added category: ${category}`);
            }
        };

        // Προσθήκη ταινίας στη λίστα
        const addMovieToList = () => {
            const userMovie = data.inputMovie.trim();

            if (!userMovie) {
                window.alert("Sorry, no empty movie");
            } else if (data.names.includes(userMovie)) {
                window.alert("Sorry, movies must be unique");
            } else {
                data.names.push(userMovie);
                data.inputMovie = '';
                console.log(data.names);
            }
        };

        // Αφαίρεση ταινίας από τη λίστα
        const removeMovie = (index) => {
            data.names.splice(index, 1);
        };

        // Έλεγχος αν η λίστα έχει πάνω από 1 ταινία
        const isReady = computed(() => {
            return data.names.length > 1;
        });

        // Επιλογή τυχαίας ταινίας
        const getRandomName = () => {
            return data.names[Math.floor(Math.random() * data.names.length)];
        };

        // Δημιουργία αποτελέσματος
        const generateResult = () => {
            let rand = getRandomName();

            if (data.result !== '') {
                while (rand === data.result) rand = getRandomName();
            }
            data.result = rand;
        };

        // Εμφάνιση αποτελέσματος
        const showResults = () => {
            generateResult();
            data.state = false;
        };

        // Επαναφορά εφαρμογής
        const restApp = () => {
            data.state = true;
            data.inputMovie = '';
            data.inputName = '';
            data.begin = true;
            data.categories = [];
            data.names = [];
            data.error = '';
            data.showError = false;
            data.result = '';
        };

        // Νέο τυχαίο αποτέλεσμα
        const getNewResult = () => {
            generateResult();
        };

        return {
            data,
            add,
            addMovieToList,
            removeMovie,
            isReady,
            showResults,
            restApp,
            getNewResult
        };
    }
}).mount('#app');
