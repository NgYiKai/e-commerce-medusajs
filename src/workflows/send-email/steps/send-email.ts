import {
    createStep,
    StepResponse,
} from "@medusajs/framework/workflows-sdk"
import EmailModuleService from "src/modules/email/service"
import { EMAIL_MODULE } from "src/modules/email"

export const sendEmailStep = createStep(
    "send-email-step",
    async ( _ , { container }) => {
        const emailModuleService: EmailModuleService = container.resolve(
            EMAIL_MODULE
        )

        const email = await emailModuleService.sendEmail()

        return new StepResponse('')
    }
)