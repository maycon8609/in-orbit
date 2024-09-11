import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import fastify from 'fastify'
import z from 'zod'

import { createGoalCompletionUseCase } from '../use-cases/create-goal-completion'
import { createGoalUseCase } from '../use-cases/create-goal'
import { getWeekPendingGoalsUseCase } from '../use-cases/get-week-pending-goals'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.get('/goals/pendings', async () => {
  const { pendingGoals } = await getWeekPendingGoalsUseCase()

  return { pendingGoals }
})

app.post(
  '/goals',
  {
    schema: {
      body: z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number().int().min(1).max(7),
      }),
    },
  },
  async request => {
    const { title, desiredWeeklyFrequency } = request.body

    await createGoalUseCase({
      title,
      desiredWeeklyFrequency,
    })
  }
)

app.post(
  '/goals/completions',
  {
    schema: {
      body: z.object({
        goalId: z.string(),
      }),
    },
  },
  async request => {
    const { goalId } = request.body

    await createGoalCompletionUseCase({
      goalId,
    })
  }
)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
