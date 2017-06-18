import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {
    transform(items: any, args?: any): any {
        if (items && args) {
            return items.filter((genre) => {
                return genre.name.toLowerCase().indexOf(args.toLowerCase()) > -1;
            });
        }
        return items;
    }
}
