import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { createGoalCompletionRoute } from './routes/create-goal-completion'
import { createGoalRoute } from './routes/create-goal'
import { getPendingGoalsRoute } from './routes/get-pending-goals'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalCompletionRoute)
app.register(createGoalRoute)
app.register(getPendingGoalsRoute)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
