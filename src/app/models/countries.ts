import { Name } from "./name";

export class Countries {
    name!: Name;
    flags!: { [key: string]: string };
    tld: string[] = []; // Inicializa como array vacío
    independent!: boolean;
    currencies!: { [key: string]: { name: string; symbol: string } };
    capital: string[] = []; // Inicializa como array vacío
    region!: string;
    subregion!: string;
    languages!: { [key: string]: string };
    borders: string[] = []; // Inicializa como array vacío
    continents: string[] = []; // Inicializa como array vacío
    population!: number;
}
