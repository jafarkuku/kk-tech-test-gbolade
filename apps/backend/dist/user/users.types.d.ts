export type Cat = {
    name: string;
    subscriptionActive: boolean;
    breed: string;
    pouchSize: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
};
export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    cats: Cat[];
};
