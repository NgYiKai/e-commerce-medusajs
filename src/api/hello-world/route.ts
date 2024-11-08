import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import { HELLO_MODULE } from "src/modules/hello"
import HelloModuleService from "src/modules/hello/service"

export async function GET (
    req: MedusaRequest,
    res: MedusaResponse
) {

    // const emailModuleService: EmailModuleService = req.scope.resolve(
    //     EMAIL_MODULE
    // )

    // const my_custom = await emailModuleService.sendEmail()

    const helloModuleService: HelloModuleService = req.scope.resolve(
        HELLO_MODULE
    )

    const my_custom = await helloModuleService.sayHello()

    res.json({
        message: "Hello, world!",
    })
}