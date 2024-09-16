import dayjs from 'dayjs'
import { client, db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Go to the gym', desiredWeeklyFrequency: 5 },
      { title: 'Sleep early', desiredWeeklyFrequency: 6 },
      { title: 'To study', desiredWeeklyFrequency: 6 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    {
      goalId: result[0].id,
      createdAt: startOfWeek.add(1, 'day').add(8, 'hours').toDate(),
    },
    {
      goalId: result[1].id,
      createdAt: startOfWeek.add(1, 'day').add(20, 'hours').toDate(),
    },
    {
      goalId: result[2].id,
      createdAt: startOfWeek.add(1, 'day').add(9, 'hour').toDate(),
    },
    {
      goalId: result[0].id,
      createdAt: startOfWeek.add(2, 'day').add(8, 'hours').toDate(),
    },
    {
      goalId: result[2].id,
      createdAt: startOfWeek.add(2, 'day').add(9, 'hour').toDate(),
    },
  ])
}

seed().finally(() => client.end())
