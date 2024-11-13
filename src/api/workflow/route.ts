import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import myWorkflow from "../../workflows/hello-world"
import { capturePaymentWorkflow } from "@medusajs/medusa/core-flows"

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
) {
    const { result } = await capturePaymentWorkflow(req.scope)
        .run({
            input: {
                name: req.query.name as string,
            },
        })

    res.send(result)
}