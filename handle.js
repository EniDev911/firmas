const get = (id) => document.getElementById(id);

let activate = false;
let signaturePad = null;

export function handleOnClickFirmar(e) {
    if (activate) {

    } else {
        const canvas = get("signature-canvas");
        signaturePad = new SignaturePad(canvas, {});
        canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetWidth;
        canvas.style.visibility = 'visible';
        document.querySelector(".signature").style.height = '200px';
        const div = document.createElement('div');
        div.textContent = 'Resetear firma'
        div.classList.add("btn", "btn-primary")
        div.style.marginBottom = '5px';
        div.id = "resetear_firma";
        div.onclick = function () {
            signaturePad.clear();
        }
        get('btn_firmar').insertAdjacentElement("afterend", div);
        e.target.style.display = 'none'
        activate = true;
    }
}

export function handleOnClickGenerateSign(e) {
    const messages = {
        title: "Debe firmar antes de descargar la firma",
        animation: false
    }

    if (signaturePad === null || signaturePad.isEmpty()) {
        alert(messages.title)
    }
    else {
        const imageBase64 = signaturePad.toDataURL(); // save image as PNG
        var a = document.createElement("a"); //Create <a>
        // console.log(imageBase64)
        a.href = imageBase64; //Image Base64 Goes here
        a.download = "mi_firma.png"; //File name Here
        a.click(); //Downloaded file
    }
}
