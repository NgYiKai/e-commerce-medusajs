import BrandModule from "../modules/brand"
import ProductModule from "@medusajs/medusa/product"
import { defineLink } from "@medusajs/framework/utils"
import HelloModuleService from "src/modules/hello/service"
import hello, { HELLO_MODULE } from "src/modules/hello"

export default defineLink(
  ProductModule.linkable.product,
  hello.linkable.productSurcharge
)