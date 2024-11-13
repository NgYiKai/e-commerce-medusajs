import { container } from "@medusajs/framework"
import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import { IProductModuleService } from "@medusajs/framework/types"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import { HELLO_MODULE } from "src/modules/hello"
import HelloModuleService from "src/modules/hello/service"

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
) {

    

    // const emailModuleService: EmailModuleService = req.scope.resolve(
    //     EMAIL_MODULE
    // )

    // const my_custom = await emailModuleService.sendEmail()

    // const helloModuleService: HelloModuleService = req.scope.resolve(
    //     HELLO_MODULE
    // )

    // const helloModuleService: HelloModuleService = container.resolve(
    //     HELLO_MODULE
    // )

    // const my_custom = await helloModuleService.sayHello()

    // res.json({
    //     message: my_custom,
    // })


    // const helloModuleService:IProductModuleService  = req.scope.resolve(
    //     Modules.PRODUCT
    // )

    // const my_custom = await helloModuleService.listProducts()

    // const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

    // const { data: products } = await query.graph({
    //     entity: "product",
    //     fields: [
    //         "*",
    //         "variants.*",
    //         "variants.prices.*",
    //         "product_surcharge.*"
    //     ]
    // })

    // res.json({
    //     message: products,
    // })

    console.log(req)

    return     res.json({})
}