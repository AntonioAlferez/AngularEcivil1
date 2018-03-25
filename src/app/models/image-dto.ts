
import { CoordinateDto } from './coordinate-dto';

export class ImageDto{
    
    id: number;
    link: string;
    thumbNailLink: string;
    name: string;
    coordinate: CoordinateDto;
    comments: string;
    creaDate: number;
    takenDate: number;                     //THE DATE AND TIME THE PIC WASS TAKEN
    relation: string;                    //the entity that will hold the relations  
    withWhom: string; 
}