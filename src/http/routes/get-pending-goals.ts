import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import { getWeekPendingGoalsUseCase } from '../../use-cases/get-week-pending-goals'

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/goals/pendings', async () => {
    const { pendingGoals } = await getWeekPendingGoalsUseCase()

    return { pendingGoals }
  })
}
