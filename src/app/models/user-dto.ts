import { ImageDto } from './image-dto';
import { OurClientDto } from './our-client-dto';

export class UserDto{

     
    id: number;
    
    firstName: string;
    
    lastName: string;
    
    email: string;
    
    organization: string;

    ourClient: OurClientDto;
    
    image: ImageDto;
}