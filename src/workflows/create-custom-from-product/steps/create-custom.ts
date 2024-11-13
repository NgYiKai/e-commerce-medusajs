import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import HelloModuleService from "../../../modules/hello/service"
import { HELLO_MODULE } from "../../../modules/hello"

type CreateCustomStepInput = {
    type?: string
    value?: number
}

export const createCustomStep = createStep(
  "create-custom",
  async (data: CreateCustomStepInput, { container }) => {
    if (!data.type && !data.value) {
      return
    }

    const helloModuleService: HelloModuleService = container.resolve(
      HELLO_MODULE
    )

    const custom = await helloModuleService.createProductSurcharges(data)

    return new StepResponse(custom, custom)
  }
)