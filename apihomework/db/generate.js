module.exports = function() {
    var faker = require("faker")
    var _ = require("lodash")

    return {
        people: _.times(50, function(n) {
            return {
                id: n + 1,
                name: faker.name.findName(),
                avatar: faker.internet.avatar(),
                phone: faker.phone.phoneNumber(),
                coverPhoto: faker.image.image(),
                email: faker.internet.email(this.name),
                createdAt: faker.date.recent(),
                companyName: faker.company.companyName(),
                city: faker.address.city(),
            }
        })
    }
}