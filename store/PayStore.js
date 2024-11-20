import {defineStore} from "pinia";
import {useTostStore} from "@/store/TostStore";
import {useCourseStore} from "@/store/CourseStore";
import {useOfferStore} from "@/store/OfferStore";
import {useAuthStore} from "@/store/AuthStore";
import {useGlobalStore} from "@/store/GlobalStore";

const errors = reactive(useErrors());

export const usePayStore = defineStore("usePayStore", {
  state: () => {
    return {
      payData: reactive({
        id: null,
        typeOrder: ref("course"),
        show: ref(false),
        type: ref("cash"),
        code: ref(null),
        photo: ref(null),
        spinnerPhoto: ref(false),
      }),
    };
  },
  getters: {
    getPayData: state => state.payData,
  },
  actions: {
    setPayData(type, value) {
      this.payData[type] = value;
    },
    sendDataPay() {
      let tost = useTostStore();
      let codeTrim = this.payData.code?.trim();
      let formData = {
        code: codeTrim,
        ID: this.payData.id,
        card_type: this.payData.type,
      };
      if (this.payData.type == "cash") {
        if (this.payData.photo == null) {
          useAuthStore().add({
            type: "error",
            message: "يجب ارفاق إيصال الدفع",
          });
          return;
        }
        this.payData.spinnerPhoto = true;
        const file = this.payData.photo.files[0];
        formData = new FormData();
        formData.append("photo", file);
        formData.append("code", codeTrim);
        formData.append("ID", this.payData.id);
        formData.append("card_type", this.payData.type);
      }
      $fetch(`${useRuntimeConfig().public.apiURL}/order/${this.payData.typeOrder}/payBank`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
        body: formData,
      }).then(res => {
        if (res.status) {
          useAuthStore().add({
            type: "success",
            message: res.message,
          });
          this.payData.show = false;
          let modelID = this.payData.typeOrder == "lecture" ? useCourseStore().getCourse.id : this.payData.id;
          if (this.payData.typeOrder == "offer") {
            useOfferStore().getOfferApi(modelID);
          } else {
            useCourseStore().getCourseApi(modelID);
          }
          useAuthStore().user.balance = res.data.balance;
        } else {
          if (res.errCode == 403) {
            errors.record({code: res.message});
          }
          useAuthStore().add({
            type: "error",
            message: res.message,
          });
        }
        this.payData.spinnerPhoto = false;
      });
    },
    checkUser(price) {
      if (localStorage.getItem("user") == null) {
        useAuthStore().add({
          type: "error",
          message: "لازم تسجل دخول الأول",
        });
        this.payData.show = false;
        useGlobalStore().redirectUrl = location.pathname;
        return navigateTo("/login");
      }
      if (price == 0) {
        this.payData.type = "wallet";
        return this.sendDataPay();
      }
      errors.clear("code");
      this.payData.code = null;
      this.payData.photo = null;
      return (this.payData.show = true);
    },
    setValueOrder(type, id, price = 1, lecture_views = false) {
      const tost = useTostStore();
      if (!lecture_views && type === "lecture" && useCourseStore().getCourse.subscribed) {
        return useAuthStore().add({
          type: "error",
          message: "يجب عليك اجتياز امتحان الحصة  السابق أولا",
        });
      }
      this.payData.typeOrder = type;
      this.payData.id = id;
      this.checkUser(price);
    },
  },
});
