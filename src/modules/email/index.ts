import { Module } from "@medusajs/framework/utils"
import EmailModuleService from "./service"

export const EMAIL_MODULE = "emailModule"

export default Module(EMAIL_MODULE, {
  service: EmailModuleService,
})