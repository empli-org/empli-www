import { PrismaClient } from "@prisma/client";
import {
  createCareer,
  createCategory,
  createCompany,
  createJob,
  createLocation,
  createProjects,
  createSkill,
  createTalent,
} from "./utils";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database");

  console.time("Inserting categories");
  const categories = await Promise.all(
    createCategory(5).map((c) => prisma.category.create({ data: c }))
  );
  console.timeEnd("Inserting categories");
  console.time("Inserting skills");
  const skills = await Promise.all(
    createSkill(5).map((s) => prisma.skill.create({ data: s }))
  );
  console.timeEnd("Inserting skills");
  console.time("Inserting careers");
  const careers = await Promise.all(
    createCareer().map((c) => prisma.career.create({ data: c }))
  );
  console.timeEnd("Inserting careers");
  console.time("Inserting locations");
  const locations = await Promise.all(
    createLocation().map((l) => prisma.location.create({ data: l }))
  );
  console.timeEnd("Inserting locations");
  console.time("Inserting projects");
  const projects = await Promise.all(
    createProjects(5).map((p) => prisma.project.create({ data: p }))
  );
  console.timeEnd("Inserting projects");
  console.time("Inserting talents");
  await Promise.all(
    createTalent({ n: 15, locations, projects, careers, skills }).map((t) =>
      prisma.talent.create({ data: t })
    )
  );
  console.timeEnd("Inserting talents");
  console.time("Inserting companies");
  const companies = await Promise.all(
    createCompany({ n: 15, categories }).map((c) =>
      prisma.company.create({ data: c })
    )
  );
  console.timeEnd("Inserting companies");
  console.time("Inserting jobs");
  await Promise.all(
    createJob({ n: 15, companies, locations }).map((j) =>
      prisma.job.create({ data: j })
    )
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
