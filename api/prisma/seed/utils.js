"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJob = exports.createCompany = exports.createTalent = exports.createProjects = exports.createLocation = exports.createCareer = exports.createSkill = exports.createCategory = void 0;
var faker_1 = require("@faker-js/faker");
function createCategory(n) {
    if (n === void 0) { n = 3; }
    return Array.from({ length: n }, function () { return ({
        name: faker_1.faker.name.jobArea(),
    }); });
}
exports.createCategory = createCategory;
function createSkill(n) {
    if (n === void 0) { n = 3; }
    return Array.from({ length: n }, function () { return ({
        name: faker_1.faker.name.jobArea(),
        description: faker_1.faker.name.jobDescriptor(),
    }); });
}
exports.createSkill = createSkill;
function createCareer(n) {
    if (n === void 0) { n = 3; }
    return Array.from({ length: n }, function () { return ({
        name: faker_1.faker.name.jobArea(),
    }); });
}
exports.createCareer = createCareer;
function createLocation(n) {
    if (n === void 0) { n = 3; }
    return Array.from({ length: n }, function () { return ({
        city: faker_1.faker.address.city(),
        country: faker_1.faker.address.country(),
    }); });
}
exports.createLocation = createLocation;
function createProjects(n) {
    if (n === void 0) { n = 3; }
    return Array.from({ length: n }, function () { return ({
        name: faker_1.faker.name.jobTitle(),
        description: faker_1.faker.lorem.paragraph(),
        verified: faker_1.faker.datatype.boolean(),
        startDate: faker_1.faker.date.past(),
        endDate: faker_1.faker.date.future(),
        amount: faker_1.faker.datatype.float({ min: 10000 }),
        area: {
            create: {
                name: faker_1.faker.name.jobArea(),
            },
        },
    }); });
}
exports.createProjects = createProjects;
function createTalent(_a) {
    var _b = _a.n, n = _b === void 0 ? 3 : _b, locations = _a.locations, projects = _a.projects, careers = _a.careers, skills = _a.skills;
    return Array.from({ length: n }, function () { return ({
        name: faker_1.faker.name.firstName(),
        lastname: faker_1.faker.name.lastName(),
        age: faker_1.faker.datatype.number({ min: 18, max: 50 }),
        image: faker_1.faker.image.avatar(),
        verified: faker_1.faker.datatype.boolean(),
        tuitionNumber: faker_1.faker.datatype.number({ min: 100000, max: 900000 }),
        skills: {
            connect: {
                id: skills[Math.floor(Math.random() * skills.length)].id,
            },
        },
        career: {
            connect: {
                id: careers[Math.floor(Math.random() * careers.length)].id,
            },
        },
        experienceInfo: {
            create: {
                projects: {
                    connect: {
                        id: projects[Math.floor(Math.random() * projects.length)].id,
                    },
                },
            },
        },
        contactInfo: {
            create: {
                location: {
                    connect: {
                        id: locations[Math.floor(Math.random() * locations.length)].id,
                    },
                },
            },
        },
    }); });
}
exports.createTalent = createTalent;
function createCompany(_a) {
    var _b = _a.n, n = _b === void 0 ? 3 : _b, categories = _a.categories;
    return Array.from({ length: n }, function () { return ({
        name: faker_1.faker.company.name(),
        description: faker_1.faker.company.bs(),
        category: {
            connect: {
                id: categories[Math.floor(Math.random() * categories.length)].id,
            },
        },
    }); });
}
exports.createCompany = createCompany;
function createJob(_a) {
    var _b = _a.n, n = _b === void 0 ? 5 : _b, locations = _a.locations, companies = _a.companies;
    return Array.from({ length: n }, function () { return ({
        code: faker_1.faker.random.alphaNumeric(6),
        title: faker_1.faker.name.jobTitle(),
        description: faker_1.faker.name.jobDescriptor(),
        area: faker_1.faker.name.jobArea(),
        type: faker_1.faker.name.jobType(),
        requiredExp: faker_1.faker.datatype.number({ min: 1, max: 5 }),
        minRate: faker_1.faker.datatype.float({ min: 1000, max: 1999 }),
        maxRate: faker_1.faker.datatype.float({ min: 2000, max: 3000 }),
        company: {
            connect: {
                id: companies[Math.floor(Math.random() * companies.length)].id,
            },
        },
        location: {
            connect: {
                id: locations[Math.floor(Math.random() * locations.length)].id,
            },
        },
        body: "\n## This is the first section. \n\n".concat(faker_1.faker.lorem.paragraph(), "\n\n### This is another section.\n\n").concat(faker_1.faker.lorem.paragraph(), "\n\n### Other section\n\n- item1\n- item2\n- item3\n"),
    }); });
}
exports.createJob = createJob;
