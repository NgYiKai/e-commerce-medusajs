import { MedusaService } from "@medusajs/framework/utils"
import MyCustom from "./models/my-custom"
import EmailModuleService from "../email/service"
import { sendEmailWorkflow } from "src/workflows/send-email"
import { MedusaContainer } from "@medusajs/medusa/types"
import { container } from "@medusajs/framework"

type InjectedDependencies = {
  emailService: EmailModuleService
}

class HelloModuleService extends MedusaService({
  MyCustom,
}) {

  constructor(container: MedusaContainer) {
    super(...arguments)
  }



  async sayHello() {
    console.log("test")
    await sendEmailWorkflow(container).run()
  }
}

export default HelloModuleService