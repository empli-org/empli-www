import { faker } from "@faker-js/faker";
import {
  Company,
  Prisma,
  Location,
  Project,
  Career,
  Category,
  Skill,
} from "@prisma/client";
import { careers, locations } from "./data";

export function createCategory(n: number = 3): Prisma.CategoryCreateInput[] {
  return Array.from({ length: n }, () => ({
    name: faker.name.jobArea(),
  }));
}

export function createSkill(n: number = 3): Prisma.SkillCreateInput[] {
  return Array.from({ length: n }, () => ({
    name: faker.name.jobArea(),
    description: faker.name.jobDescriptor(),
  }));
}

export function createCareer(): Prisma.CareerCreateInput[] {
  return careers.map((c) => ({
    name: c,
  }));
}

export function createLocation(): Prisma.LocationCreateInput[] {
  return locations;
}

export function createProjects(n: number = 3): Prisma.ProjectCreateInput[] {
  return Array.from({ length: n }, () => ({
    name: faker.name.jobTitle(),
    description: faker.lorem.paragraph(),
    verified: faker.datatype.boolean(),
    startDate: faker.date.past(),
    endDate: faker.date.future(),
    amount: faker.datatype.float({ min: 10000 }),
    area: {
      create: {
        name: faker.name.jobArea(),
      },
    },
  }));
}

export function createTalent({
  n = 3,
  locations,
  projects,
  careers,
  skills,
}: {
  n?: number;
  locations: Location[];
  projects: Project[];
  careers: Career[];
  skills: Skill[];
}): Prisma.TalentCreateInput[] {
  return Array.from({ length: n }, () => ({
    name: faker.name.firstName(),
    age: faker.datatype.number({ min: 18, max: 50 }),
    image: faker.image.avatar(),
    verified: faker.datatype.boolean(),
    tuitionNumber: faker.datatype.number({ min: 100000, max: 900000 }),
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
        time: faker.datatype.float({ min: 300, max: 1500 }),
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
  }));
}

export function createCompany({
  n = 3,
  categories,
}: {
  n?: number;
  categories: Category[];
}): Prisma.CompanyCreateInput[] {
  return Array.from({ length: n }, () => ({
    name: faker.company.name(),
    description: faker.company.bs(),
    category: {
      connect: {
        id: categories[Math.floor(Math.random() * categories.length)].id,
      },
    },
  }));
}

export function createJob({
  n = 5,
  locations,
  companies,
}: {
  n?: number;
  locations: Location[];
  companies: Company[];
}): Prisma.JobCreateInput[] {
  return Array.from({ length: n }, () => ({
    code: faker.random.alphaNumeric(6),
    title: faker.name.jobTitle(),
    description: faker.name.jobDescriptor(),
    area: faker.name.jobArea(),
    requiredExp: faker.datatype.number({ min: 1, max: 5 }),
    minRate: faker.datatype.float({ min: 1000, max: 1999 }),
    maxRate: faker.datatype.float({ min: 2000, max: 3000 }),
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
    body: `
## Esta es la primera sección.

${faker.lorem.paragraph()}

### Esta es otra sección.

${faker.lorem.paragraph()}

### Otra sección

- Item descriptivo 1
- Item descriptivo 2
- Item descriptivo 3
`,
  }));
}

export function titleCase(str: string) {
  let arr = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
