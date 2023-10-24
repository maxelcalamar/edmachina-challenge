import IStudent from "@/types/student";

export default {
  getStudent(id: number): IStudent {
    return {
      id,
      fullName: "Danielle Munchen Schollengberg",
      regId: "AYSI32392",
      status: "Active",
      imgPath: "",
      phone: "",
      email: "",
    };
  },
};
