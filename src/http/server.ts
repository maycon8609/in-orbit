import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import fastify from 'fastify'
import fastifyCors from '@fastify/cors'

import { createGoalCompletionRoute } from './routes/create-goal-completion'
import { createGoalRoute } from './routes/create-goal'
import { getPendingGoalsRoute } from './routes/get-pending-goals'
import { getWeekSummaryRoute } from './routes/get-week-summary'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalCompletionRoute)
app.register(createGoalRoute)
app.register(getPendingGoalsRoute)
app.register(getWeekSummaryRoute)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
