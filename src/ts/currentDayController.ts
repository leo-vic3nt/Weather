interface CurrentDayController {
    getCurrentDay: () => number;
    incrementDay: () => void;
    decrementDay: () => void;
}

function currentDayController(): CurrentDayController {
    let currentDay = 0;

    const getCurrentDay = () => currentDay;

    const incrementDay = () => {
        if (currentDay < 2) currentDay++;
    };

    const decrementDay = () => {
        if (currentDay > 0) currentDay--;
    };

    return { getCurrentDay, incrementDay, decrementDay };
}

const dayController = currentDayController();

export { dayController };
