type Grammar = {
    title: string,
    short_explanation : string,
    long_explanation : string,
    formation : string,
    examples : ExamplesGrammar[];
}

type ExamplesGrammar = {
    jp : string,
    romaji : string,
    en : string,
    vi : string,
}

export {Grammar,ExamplesGrammar}
