import bcrypt from 'bcryptjs';



const users=[
    {
        name: 'Admin User',
        password: bcrypt.hashSync('12345678', 10),
        email:'admin@123.com',
        isAdmin: true
    },
    {
        name: 'User1',
        password: bcrypt.hashSync('12345678', 10),
        email:'user1@123.com',
    },
    {
        name: 'User2',
        password: bcrypt.hashSync('12345678', 10),
        email:'user2@123.com',
    },
]

export default users;
