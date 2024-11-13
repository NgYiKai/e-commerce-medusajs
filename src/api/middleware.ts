import { defineMiddlewares } from "@medusajs/medusa"
import { z } from "zod"

export default defineMiddlewares({
    routes: [
        {
            matcher: "/admin/products",
            method: ["POST"],
            additionalDataValidator: {
                product_surcharge_type: z.string().optional(),
                product_surcharge_value: z.number().optional(),
            },
        },
    ],
})