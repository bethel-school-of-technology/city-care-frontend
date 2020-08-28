import {PipeTransform, Pipe} from '@angular/core';
import { Request } from './request.model';

@Pipe({
          name: 'requestFilter'
})
export class RequestFilterPipe implements PipeTransform {
          transform(requests: Request[], searchTerm: string): Request[] {
                    if(!requests || !searchTerm) { //if the list of employees or the searh is not true, return the requests
                              return requests;
                    }

                    return requests.filter(request => 
                              request.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
          }
}