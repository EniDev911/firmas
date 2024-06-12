import events from "./events.js"

function initApplication() {
    events();
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        initApplication();
    }
};