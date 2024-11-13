import { container } from "@medusajs/framework"
import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import { Modules } from "@medusajs/framework/utils"

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

    const carts = await cartModuleService.listLineItems({

    })

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

    const carts = await cartModuleService.addLineItems({
        cart_id: "cart_01JCF7KPFZNTGZCGPENEZH8ZTD",
        title: "Shirt",
        quantity: 2,
        unit_price: 4000,
    })

    return res.json({
        carts
    }
    )
}