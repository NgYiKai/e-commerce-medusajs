import { model } from "@medusajs/framework/utils"

const ProductSurcharge = model.define("product_surcharge", {
    id: model.id().primaryKey(),
    type: model.text(),
    value: model.number()
})

export default ProductSurcharge