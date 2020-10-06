const simulateQuery = async function (func) {
    return await new Promise((resolve) => {
        func();
        // Таймаут от 100 до 1000мс
        const timeout = ~~(Math.random() * 900) + 100;
        setTimeout(() => resolve(), timeout);
    });
};

const createImagePreview = function (file) {
    const creator = window.URL ? URL : window.webkitURL;
    return creator.createObjectURL(file);
};

export { simulateQuery, createImagePreview };
