


var subGenreSchema = new Schema ({
    subCategory: {
        type: String,
        enum: ['Star Trek', 'Star Wars', 'Futurama','The Orville', 'Umbrella Academy', 'Brooklyn Nine-Nine', 'Derry Girls', 'Parks and Recreation', 'Psych', 'The Marvelous Mrs. Maisel', 'Encanto', 'Game of Thrones', 'Harry Potter', 'Lord of the Rings', 'The Witcher', 'Haunting of Bly Manor', 'Hush','Midsommar', 'The Call', 'The Walking Dead']  
    }
});

module.exports 