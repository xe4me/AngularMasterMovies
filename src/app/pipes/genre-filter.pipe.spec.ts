import {GenreFilterPipe} from './genre-filter.pipe';

describe('GenreFilterPipe', () => {
    it('create an instance', () => {
        const pipe = new GenreFilterPipe();
        expect(pipe).toBeTruthy();
    });
    it('should filter the array when the text is in the array', () => {
        const pipe = new GenreFilterPipe();
        const text = 'ac';
        const data = [
            {"id": 28, "name": "Action"},
            {"id": 12, "name": "Adventure"},
            {"id": 16, "name": "Animation"}
        ];
        const expected = [
            {"id": 28, "name": "Action"}
        ];
        const filtered = pipe.transform(data, text);
        expect(filtered).toEqual(expected);
    });
    it('should NOT filter the when the text can not be found in the array', () => {
        const pipe = new GenreFilterPipe();
        const text = 'mil'; // this is not in the data
        const data = [
            {"id": 28, "name": "Action"},
            {"id": 12, "name": "Adventure"},
            {"id": 16, "name": "Animation"}
        ];
        const expected = [
            {"id": 28, "name": "Action"}
        ];
        const filtered = pipe.transform(data, text);
        expect(filtered).not.toEqual(expected);
    });
});
