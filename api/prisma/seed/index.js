"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var utils_1 = require("./utils");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var categories, skills, careers, locations, projects, companies;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Seeding database");
                    /*
                    console.time("Clear database");
                    await prisma.project.deleteMany({ where: {} });
                    await prisma.talent.deleteMany({ where: {} });
                    await prisma.location.deleteMany({ where: {} });
                    await prisma.category.deleteMany({ where: {} });
                    await prisma.company.deleteMany({ where: {} });
                    await prisma.skill.deleteMany({ where: {} });
                    await prisma.career.deleteMany({ where: {} });
                    await prisma.job.deleteMany({ where: {} });
                    await prisma.jobArea.deleteMany({ where: {} });
                    console.timeEnd("Clear database");
                    */
                    console.time("Inserting categories");
                    return [4 /*yield*/, Promise.all((0, utils_1.createCategory)(5).map(function (c) { return prisma.category.create({ data: c }); }))];
                case 1:
                    categories = _a.sent();
                    console.timeEnd("Inserting categories");
                    console.time("Inserting skills");
                    return [4 /*yield*/, Promise.all((0, utils_1.createSkill)(5).map(function (s) { return prisma.skill.create({ data: s }); }))];
                case 2:
                    skills = _a.sent();
                    console.timeEnd("Inserting skills");
                    console.time("Inserting careers");
                    return [4 /*yield*/, Promise.all((0, utils_1.createCareer)(5).map(function (c) { return prisma.career.create({ data: c }); }))];
                case 3:
                    careers = _a.sent();
                    console.timeEnd("Inserting careers");
                    console.time("Inserting locations");
                    return [4 /*yield*/, Promise.all((0, utils_1.createLocation)(5).map(function (l) { return prisma.location.create({ data: l }); }))];
                case 4:
                    locations = _a.sent();
                    console.timeEnd("Inserting locations");
                    console.time("Inserting projects");
                    return [4 /*yield*/, Promise.all((0, utils_1.createProjects)(5).map(function (p) { return prisma.project.create({ data: p }); }))];
                case 5:
                    projects = _a.sent();
                    console.timeEnd("Inserting projects");
                    console.time("Inserting talents");
                    return [4 /*yield*/, Promise.all((0, utils_1.createTalent)({ n: 5, locations: locations, projects: projects, careers: careers, skills: skills }).map(function (t) {
                            return prisma.talent.create({ data: t });
                        }))];
                case 6:
                    _a.sent();
                    console.timeEnd("Inserting talents");
                    console.time("Inserting companies");
                    return [4 /*yield*/, Promise.all((0, utils_1.createCompany)({ n: 5, categories: categories }).map(function (c) {
                            return prisma.company.create({ data: c });
                        }))];
                case 7:
                    companies = _a.sent();
                    console.timeEnd("Inserting companies");
                    console.time("Inserting jobs");
                    return [4 /*yield*/, Promise.all((0, utils_1.createJob)({ n: 5, companies: companies, locations: locations }).map(function (j) {
                            return prisma.job.create({ data: j });
                        }))];
                case 8:
                    _a.sent();
                    console.timeEnd("Inserting jobs");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.log(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
