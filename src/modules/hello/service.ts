import { MedusaService } from "@medusajs/framework/utils"
import MyCustom from "./models/my-custom"
import EmailModuleService from "../email/service"
import { sendEmailWorkflow } from "src/workflows/send-email"
import { MedusaContainer } from "@medusajs/medusa/types"
import { container } from "@medusajs/framework"
import ProductSurcharge from "./models/product-surcharge"
import { EMAIL_MODULE } from "../email"
import { capturePaymentWorkflow, getOrdersListWorkflow } from "@medusajs/medusa/core-flows"

type InjectedDependencies = {
  emailService: EmailModuleService
}

class HelloModuleService extends MedusaService({
  MyCustom,
  ProductSurcharge
}) {

  constructor(container: MedusaContainer) {
    super(...arguments)
  }



  async sayHello() {
    // console.log("test")
    // await sendEmailWorkflow(container).run()

    // const emailModuleService: EmailModuleService = container.resolve(
    //   EMAIL_MODULE
    // )

    // const email = await emailModuleService.sendEmail()

    // getOrdersListWorkflow(container).run(

    // )


  }
}

export default HelloModuleService