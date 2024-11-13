import { 
  ModuleProvider, 
  Modules
} from "@medusajs/framework/utils"
import PaymentProviderService from "./service"

export default ModuleProvider(Modules.PAYMENT, {
  services: [PaymentProviderService],
})