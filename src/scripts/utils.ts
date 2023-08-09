import {Article} from '../components/Article'

export let Shuffle = (arr: Article[]) => {
    let randomizedArr = arr.slice(0);
    randomizedArr.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    return randomizedArr;
}
