import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import { createGoalCompletionUseCase } from '../../use-cases/create-goal-completion'

export const createGoalCompletionRoute: FastifyPluginAsyncZod = async app => {
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
}
