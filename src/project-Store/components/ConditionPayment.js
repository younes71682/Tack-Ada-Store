import { toast } from "react-toastify";

export const PaymentSuccess = () => {

    toast.success(
        <div className="flex gap-1 justify-end text-[#484848]">
            <p className="font-Yekan">پرداخت انجام شد</p>
         </div>
        , {
            position: "top-right"
        });

}

export const PaymentError = () => {
    toast.error(<p className="font-Yekan text-[#484848]">پرداخت با خطا مواجه شد</p>, {
        position: "top-right"
    });

}
