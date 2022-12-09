export default [
    {
        id: 'felfedezo',
        name: 'Felfedező',
        desc: 'Gratulálok az első játékodhoz!',
        picture: '/images/okor2zn.png',
        isLocked: (gameOverview) => {
            return gameOverview.lastStars.length !== 1;
        }
    },
    {
        id: 'farao',
        name: 'Fáraó',
        desc: 'Hibátlan játékért az Ókori birodalmak témakörben.',
        picture: '/images/okor2zn.png',
        isLocked: (gameOverview) => {
            return !(gameOverview.topicId === 0 && gameOverview.score === 5);
        }
    },
    {
        id: 'lovag',
        name: 'Lovag',
        desc: 'Hibátlan játékért a Királyok és lovagok témakörben.',
        picture: '/images/knight1zn.png',
        isLocked: (gameOverview) => {
            return !(gameOverview.topicId === 1 && gameOverview.score === 5);
        }
    },
    {
        id: 'raketaveto',
        name: 'Rakétavető',
        desc: 'Hibátlan játékért a 20. század témakörben.',
        picture: '/images/knight1zn.png',
        isLocked: (gameOverview) => {
            return !(gameOverview.topicId === 2 && gameOverview.score === 5);
        }
    },
    {
        id: 'kodex',
        name: 'Kódex',
        desc: '20 <span><ion-icon name="star" style="margin: 0 0.2em; color: #fff3bd; opacity: 0.7;"></ion-icon></span> megszerzéséért.',
        picture: '/images/knight1zn.png',
        isLocked: (gameOverview) => {
            return gameOverview.allStars < 20;
        }
    },
    {
        id: 'jatekmester',
        name: 'Játékmester',
        desc: '40 <span><ion-icon name="star" style="margin: 0 0.2em; color: #fff3bd; opacity: 0.7;"></ion-icon></span> megszerzéséért.',
        picture: '/images/knight1zn.png',
        isLocked: (gameOverview) => {
            return gameOverview.allStars < 40;
        }
    }
]