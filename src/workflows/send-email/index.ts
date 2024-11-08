import {
    createWorkflow,
    WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { sendEmailStep } from "./steps/send-email"


export const sendEmailWorkflow = createWorkflow(
    "send-email",
    () => {
        const email = sendEmailStep()

        return new WorkflowResponse('')
    }
)