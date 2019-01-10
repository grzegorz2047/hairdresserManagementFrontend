import { Customer } from './customer'

export const CUSTOMERS: Customer[] = 
[   {
        id: 1,
        firstname: 'Jan',
        lastname: 'Kowalski',
        phoneNumber: '693785343',
        appointment:  new Date(),
        serviceCost: 30
    },
    {
        id: 2,
        firstname: 'Ania',
        lastname: 'Kowalska',
        phoneNumber: '693745343',
        appointment:  new Date(),
        serviceCost: 25
    },
    {
        id: 3,
        firstname: 'Agnieszka',
        lastname: 'Nowak',
        phoneNumber: '633785343',
        appointment:  new Date(),
        serviceCost: 65
    },
    {
        id: 4,
        firstname: 'Edyta',
        lastname: 'Farkowska',
        phoneNumber: '694785343',
        appointment:  new Date(),
        serviceCost: 80
    },
    {
        id: 5,
        firstname: 'Barbara',
        lastname: 'Kawka',
        phoneNumber: '793785343',
        appointment:  new Date(),
        serviceCost: 100
    },
    {
        id: 6,
        firstname: 'Andrzej',
        lastname: 'Wydmuszka',
        phoneNumber: '533485343',
        appointment:  new Date(),
        serviceCost: 35   
    }
];