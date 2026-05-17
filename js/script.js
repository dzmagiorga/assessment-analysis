const classesOpenPopup = document.getElementById("classes-open-popup");
const classesPopupContainer = document.getElementById("classes-popup-container");
const classesCancel = document.getElementById("classes-cancel");

classesOpenPopup.addEventListener('click', () => {
    classesPopupContainer.classList.add('show');
})

classesCancel.addEventListener('click', () => {
    classesPopupContainer.classList.remove('show')
})



function createClass(name = 'Unnamed Class', description = name){

    let testElement = document.createElement('div');

    testElement.classList.add('container');
    testElement.classList.add('classes');

    testElement.innerHTML += `<p class="bold">${name}</p>
                <p class="grey small">${description}</p>
                <div class="classes-info small">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M96-192v-92q0-25.78 12.5-47.39T143-366q54-32 114.5-49T384-432q66 0 126.5 17T625-366q22 13 34.5 34.61T672-284v92H96Zm648 0v-92q0-42-19.5-78T672-421q39 8 75.5 21.5T817-366q22 13 34.5 34.67Q864-309.65 864-284v92H744ZM282-522q-42-42-42-102t42-102q42-42 102-42t102 42q42 42 42 102t-42 102q-42 42-102 42t-102-42Zm396 0q-42 42-102 42-8 0-15-.5t-15-2.5q25-29 39.5-64.5T600-624q0-41-14.5-76.5T546-765q8-2 15-2.5t15-.5q60 0 102 42t42 102q0 60-42 102ZM168-264h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-360q-54 0-106 14t-99 42q-4.95 2.83-7.98 7.91-3.02 5.09-3.02 12V-264Zm267-309.21q21-21.21 21-51T434.79-675q-21.21-21-51-21T333-674.79q-21 21.21-21 51T333.21-573q21.21 21 51 21T435-573.21ZM384-264Zm0-360Z"/></svg>
                        <p class="grey">0 students</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm221.5-198.5Q510-807 510-820t-8.5-21.5Q493-850 480-850t-21.5 8.5Q450-833 450-820t8.5 21.5Q467-790 480-790t21.5-8.5ZM200-200v-560 560Z"/></svg>
                        <p class="grey">0 quizzes</p>
                    </div>
                </div>
                <div class="classes-code">
                    <div>
                        <p class="classes-code-string smaller">YOVJSKM3</p>
                    </div>
                    <button class="copy-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
                    </button>
                </div>`;

    return testElement;
}

const classesMain = document.getElementById('classes-main');

const test1 = createClass('giorga', 'magaria');

const test2 = createClass();

classesMain.appendChild(test1);

classesMain.appendChild(test2);