import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import HelloModuleService from "../../modules/hello/service"
import { HELLO_MODULE } from "../../modules/hello"
import { Modules } from "@medusajs/framework/utils"
import { IPaymentModuleService } from "@medusajs/framework/types"

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void> {
    const helloModuleService: IPaymentModuleService = req.scope.resolve(
        Modules.PAYMENT
    )

    const my_custom = await helloModuleService.cancelPayment()
    

    res.json({
        my_custom
    })
}