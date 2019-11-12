import { Personaje } from './personaje';

export interface Response{
    code: number;
    error: boolean;
    data: Personaje | null | {};
    message: any;
}