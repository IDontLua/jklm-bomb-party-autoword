async function getWordWith(syllable) {
    const possibleWords = await (
        await fetch(`https://api.datamuse.com/words?sp=*${syllable}*`)
    ).json();
    possibleWords.splice(0, 5); // max 5 words.

    return possibleWords[Math.floor(Math.random() * possibleWords.length)].word;
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
