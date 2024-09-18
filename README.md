# in-orbit

[![docker](https://img.shields.io/badge/docker-030712?logo=docker)](https://www.docker.com/)
[![typescript](https://img.shields.io/badge/typescript-030712?logo=typescript)](https://www.typescriptlang.org/)
[![zod](https://img.shields.io/badge/zod-3E67B1?logo=zod)](https://zod.dev/)
[![postgresql](https://img.shields.io/badge/postgresql-030712?logo=postgresql)](https://www.postgresql.org/)
[![drizzle orm](https://img.shields.io/badge/drizzle_orm-030712?logo=drizzle)](https://orm.drizzle.team/)
[![fastify](https://img.shields.io/badge/fastify-030712?logo=fastify)](https://fastify.dev/)

### summary

- [About](#about-the-project)
- [Drizzle ORM](#drizzle-orm)
- [Install dependencies](#install-dependencies)
- [Seed](#seed)
- [Run project](#run-project)

---

### About the project:
In Orbit is a habit tracker where you can create and monitor the progress of new habits throughout the week. Users can create and define how many times they want to perform a habit, and can also mark it as completed.

### Drizzle ORM:
"It’s the only ORM with both relational and SQL-like query APIs, providing you the best of both worlds when it comes to accessing your relational data. Drizzle is lightweight, performant, typesafe, non-lactose, gluten-free, sober, flexible and serverless-ready by design. Drizzle is not just a library, it’s an experience. 🤩. BY: drizzle team"

- Generate migration:
  ```sh
  npx drizzle-kit generate
  ```

- Execulte migration:
  ```sh
  npx drizzle-kit migrate
  ```

- Open drizzle studio:
  ```sh
  npx drizzle-kit studio
  ```

### Install dependencies
```bash
npm install
```

### Seed
A seed has been prepared which should populate the database with mocked data for testing purposes
```sh
npm run seed
```

### Run project
```bash
npm run start:docker
```
```bash
npm run dev
```

## Roates
**POST /goals**
- Creates a new goal.
- Parameters:
    ```json
    // body
    {
      "title": "go to the gym",
      "desiredWeeklyFrequency": 5
    }
    ```

**POST /goals/completions**
- Marks a goal as completed.
- Parameters:
    ```json
    // body
    {
      "goalId": "mg7vmiu63tryx0h05kinbk1u"
    }
    ```

**GET /goals/pendings**
- Returns pending goals.
- Return:
    ```json
    {
      "pendingGoals": [
        {
          "id": "mg7vmiu63tryx0h05kinbk1u",
          "title": "go to the gym",
          "desiredWeeklyFrequency": 5,
          "completionCount": 2
        },
        {
          "id": "zy5i3g9o4vq5w7pndwjq0mqh",
          "title": "sleep early",
          "desiredWeeklyFrequency": 6,
          "completionCount": 1
        }
      ]
    }
    ```

**GET /goals/week-summary**
- Returns the summary of the week's goals.
- Return:
    ```json
    {
      "summary": {
        "completed": 3,
        "total": 10,
        "goalsPerDay": {
          "2024-09-10": [
            {
              "id": "wplzmg75bewz0vd2owxu70y1",
              "title": "go to the gym",
              "completedAt": "2024-09-10T20:12:21.678503+00:00"
            },
            {
              "id": "jdau1uua0ghabmegjt7o5mqk",
              "title": "sleep early",
              "completedAt": "2024-09-10T23:48:21.235381+00:00"
            }
          ],
          "2024-09-09": [
            {
              "id": "w0unje27jhrh0al64tkpuo72",
              "title": "go to the gym",
              "completedAt": "2024-09-09T20:35:16.678503+00:00"
            }
          ]
        }
      }
    }
    ```
