import { container } from "@medusajs/framework"
import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import { capturePaymentWorkflow, completeCartWorkflow, createPaymentCollectionForCartWorkflow, createPaymentSessionsWorkflow, processPaymentWorkflow } from "@medusajs/medusa/core-flows"

// export async function POST(
//     req: MedusaRequest,
//     res: MedusaResponse
// ) {

//     const paymentModuleService = req.scope.resolve(
//         Modules.PAYMENT
//     )

//     const paymentCollection = await paymentModuleService.createPaymentCollections(
//         {
//             region_id: "reg_123",
//             currency_code: "usd",
//             amount: 4001,
//         }
//     )

//     const remoteLink = container.resolve(
//         ContainerRegistrationKeys.REMOTE_LINK
//     )

//     remoteLink.create({
//         [Modules.CART]: {
//             cart_id: "cart_123"
//         },
//         [Modules.PAYMENT]: {
//             payment_collection_id: paymentCollection.id
//         }
//     })

//     const paymentSession = await paymentModuleService.createPaymentSession(
//         paymentCollection.id,
//         {
//             currency_code: "usd",
//             provider_id: "pp_system_default",
//             amount: 4001,
//             data: {},
//         }
//     )

//     const payment = await paymentModuleService.authorizePaymentSession(
//         paymentSession.id,
//         {}
//     )

//     const paymentres = capturePaymentWorkflow(req.scope).run({
//         input: {
//             payment_id: payment.id,
//         },
//     })

//     return res.json(paymentres)

// }

export async function POST(
    req: MedusaRequest,
    res: MedusaResponse
) {
    let input = {
        cart_id: "cart_01JCF7KPFZNTGZCGPENEZH8ZTD",
        payment_id: "pay_01JCFMVJPKVF507C5A2GPGYRV3"
    }

    const paymentModuleService = req.scope.resolve(
        Modules.PAYMENT
    )

    // const res1 = await createPaymentCollectionForCartWorkflow(req.scope).run({
    //     input: {
    //         cart_id: input.cart_id,
    //     },
    //     throwOnError: false
    // })

    // console.log(res1.errors)

    const {result} = await createPaymentSessionsWorkflow(req.scope).run({
        input: {
            payment_collection_id: "pay_col_01JCGAMVFQTMZX42TW8CZGD6BM",
            provider_id: "pp_system_default"
        },
        throwOnError: true
    })

    // // console.log(res1)

    const payment =
        await paymentModuleService.authorizePaymentSession(
            result.id,
            {}
        )
    
       
    capturePaymentWorkflow(req.scope).run({
        input: {
            payment_id: payment.id
        },
    })

    // completeCartWorkflow(req.scope).run({
    //     input: {
    //         id: "cart_01JCF7KPFZNTGZCGPENEZH8ZTD"
    //     },
    //     throwOnError: true
    // })

    return res.json({})

}