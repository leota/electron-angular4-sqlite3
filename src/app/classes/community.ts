import { ICommunity } from '../interfaces/community.interface';

export class Community implements ICommunity {
    id: number;
    name: string;
    country: string;
    city: string;
    address: string;
    picture: string;
    telephone: string;
}
