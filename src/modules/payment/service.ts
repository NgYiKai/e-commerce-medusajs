import {
    AbstractPaymentProvider
} from "@medusajs/framework/utils"
import { Logger, PaymentProviderError, PaymentProviderSessionResponse, PaymentSessionStatus } from "@medusajs/framework/types"

type InjectedDependencies = {
    logger: Logger
}

type Options = {
    apiKey: string
}

class PaymentProviderService extends AbstractPaymentProvider<
    Options
> {
    static identifier = "my-payment"
    protected logger_: Logger
    protected options_: Options
    // Assuming you're using a client to integrate
    // with a third-party service
    protected client

    constructor(
        { logger }: InjectedDependencies,
        options: Options
    ) {
        // @ts-ignore
        super(...arguments)

        this.logger_ = logger
        this.options_ = options

        //   // Assuming you're initializing a client
        //   this.client = new Client(options)
    }

    async capturePayment(
        paymentData: Record<string, unknown>
    ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
        const externalId = paymentData.id

        try {
            //   const newData = await this.client.capturePayment(externalId)

            //   return {
            //     ...newData,
            //     id: externalId
            //   }
        } catch (e) {
            return {
                error: e,
                code: "unknown",
                detail: e
            }
        }
    }

    async authorizePayment(
        paymentSessionData: Record<string, unknown>,
        context: Record<string, unknown>
    ): Promise<
        PaymentProviderError | {
            status: PaymentSessionStatus
            data: PaymentProviderSessionResponse["data"]
        }
    > {
        const externalId = paymentSessionData.id

        try {
            // const paymentData = await this.client.authorizePayment(externalId)

            // return {
            //     data: {
            //         ...paymentData,
            //         id: externalId
            //     },
            //     status: "authorized"
            // }
        } catch (e) {
            return {
                error: e,
                code: "unknown",
                detail: e
            }
        }
    }

    async testExtend() {
        console.log("extend")
    }


}

export default PaymentProviderService