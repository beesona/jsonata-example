import jsonata from 'jsonata';
import { JSON_DATA } from './json-data';

const exampleJson = JSON_DATA;
const expression = jsonata('$sum(store.book.price)');

expression.evaluate(exampleJson).then((result) => {
    console.log(result); // 59.94
});
