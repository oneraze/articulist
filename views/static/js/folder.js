const code = len => {
    let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let length = len; // Customize the length here.
    for (let i = length; i > 0; --i) result += characters[Math.round(Math.random() * (characters.length - 1))];
    return result;
}

const folder = (id, header, collapse) => {
    let accordion = `<div class="accordion" id="${id}">
    <div class="accordion-item">
        <h2 class="accordion-header" id="${header}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${collapse}" aria-expanded="true" aria-controls="collapseOne">
                ${header}
            </button>
        </h2>
        <div id="${collapse}" class="accordion-collapse collapse show" aria-labelledby="${header}" data-bs-parent="#${id}">
            <div class="accordion-body">
                <ul class="list-group list-group-flush">
                    
                </ul>
            </div>
        </div>
        </div>
    </div>`;
    console.log(accordion)
    $("#folders").prepend(accordion);
}

folder(code(5), "School", code(5));