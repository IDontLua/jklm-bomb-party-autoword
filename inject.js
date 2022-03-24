async function getWordWith(syllable) {
    return (await (await fetch(`https://api.datamuse.com/words?sp=*${syllable}*`)).json())[1][
        "word"
    ];
}

(async function () {
    const syllable = document.querySelector(
        "body > div.main.page > div.middle > div.canvasArea > div.round > div"
    );
    const textInput = document.querySelector(
        "body > div.main.page > div.bottom > div.round > div.selfTurn > form > input"
    );

    if (syllable === null || textInput === null) return;

    textInput.value = await getWordWith(syllable.innerHTML);
})();
