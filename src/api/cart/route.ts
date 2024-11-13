import { container } from "@medusajs/framework"
import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import { Modules } from "@medusajs/framework/utils"
import { completeCartWorkflow, refreshPaymentCollectionForCartWorkflow } from "@medusajs/medusa/core-flows"

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
) {

    console.log(req)
    const cartModuleService = container.resolve(
        Modules.CART
    )

    // const cart = await cartModuleService.createCarts({
    //     currency_code: "myr",
    // })

    const carts = await cartModuleService.listCarts()

    return res.json({
        carts
    }
    )
}

export async function POST(
    req: MedusaRequest,
    res: MedusaResponse
) {

    console.log(req)
    const cartModuleService = container.resolve(
        Modules.CART
    )

    // const cart = await cartModuleService.createCarts({
    //     currency_code: "usd",
    // })

    // const carts = await cartModuleService.addLineItems(req.body)

    // refreshPaymentCollectionForCartWorkflow(req.scope).run({
    //     input: {
    //         cart_id: "cart_01JCF7KPFZNTGZCGPENEZH8ZTD",
    //     },
    //     throwOnError: true
    // })

    completeCartWorkflow(req.scope).run({
        input: {
            id: "cart_01JCF7KPFZNTGZCGPENEZH8ZTD"
        },
        throwOnError: true
    })

    return res.json({
        
    })
}