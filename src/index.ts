import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 10]);
const charactersCollection = new CharactersCollection('Treehouse');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
