import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import { getWeekSummaryUseCase } from '../../use-cases/get-week-summary'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/goals/week-summary', async () => {
    const { summary } = await getWeekSummaryUseCase()

    return { summary }
  })
}
