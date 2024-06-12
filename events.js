
import { handleOnClickFirmar, handleOnClickGenerateSign } from './handle.js'

function on(eventName, selector, handler) {
    document.addEventListener(eventName, function (event) {
        const elements = document.querySelectorAll(selector);
        const path = event.composedPath();
        path.forEach(function (node) {
            elements.forEach(function (elem) {
                if (node === elem) {
                    handler.call(elem, event);
                }
            });
        });
    }, true);
}


export default function () {
    on('click', 'button[id="btn_firmar"]', handleOnClickFirmar);
    on('change', 'button[id="btn_firmar"]', handleOnClickFirmar);
    on('click', '#download', handleOnClickGenerateSign);
}