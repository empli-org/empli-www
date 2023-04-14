import { PrismaClient } from "@prisma/client";
import {
  createCareer,
  createCategory,
  createCompany,
  createContactInfo,
  createJob,
  createLocation,
  createSkill,
  createTalent,
} from "./utils";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database");

  console.time("Clear database");
  await prisma.talent.deleteMany({ where: {} });
  await prisma.location.deleteMany({ where: {} });
  await prisma.category.deleteMany({ where: {} });
  await prisma.company.deleteMany({ where: {} });
  await prisma.skill.deleteMany({ where: {} });
  await prisma.career.deleteMany({ where: {} });
  await prisma.job.deleteMany({ where: {} });
  console.timeEnd("Clear database");

  console.time("Inserting skills");
  const skills = await Promise.all(
    Array.from({ length: 20 }, async () => {
      return await prisma.skill.create({
        data: { ...createSkill() },
      });
    })
  );
  console.timeEnd("Inserting skills");

  console.time("Inserting careers");
  const careers = await Promise.all(
    Array.from({ length: 20 }, async () => {
      return await prisma.career.create({
        data: { ...createCareer() },
      });
    })
  );
  console.timeEnd("Inserting careers");

  console.time("Inserting talents");
  const skillIds = skills.map((s) => s.id);
  const careersIds = careers.map((r) => r.id);
  Promise.all(
    Array.from({ length: 30 }, async () => {
      await prisma.talent.create({
        data: {
          ...createTalent(),
          location: {
            create: createLocation(),
          },
          career: {
            connect: {
              id: careersIds[Math.floor(Math.random() * careersIds.length)],
            },
          },
          skills: {
            connect: {
              id: skillIds[Math.floor(Math.random() * skillIds.length)],
            },
          },
          contactInfo: {
            create: {
              ...createContactInfo(),
            },
          },
        },
      });
    })
  );

  console.time("Inserting categories");
  const categories = await Promise.all(
    Array.from({ length: 15 }, async () => {
      return await prisma.category.create({
        data: { ...createCategory() },
      });
    })
  );
  console.timeEnd("Inserting categories");

  console.time("Inserting companies");
  const companies = await Promise.all(
    Array.from({ length: 20 }, async () => {
      return await prisma.company.create({
        data: {
          category: {
            connect: {
              id: categories[Math.floor(Math.random() * categories.length)].id,
            },
          },
          ...createCompany(),
        },
      });
    })
  );
  console.timeEnd("Inserting companies");

  console.time("Inserting jobs");
  const companiesIds = companies.map((c) => c.id);
  Promise.all(
    Array.from({ length: companiesIds.length }, async (_, idx) => {
      await prisma.job.create({
        data: {
          ...createJob(),
          location: { create: createLocation() },
          company: {
            connect: {
              id: companiesIds[Math.floor(Math.random() * companiesIds.length)],
            },
          },
        },
      });
    })
  );
  console.timeEnd("Inserting jobs");
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
