import { shallowMount } from "@vue/test-utils";
import RightPart from "@/components/index/RightPart.vue";
import { nextTick } from "vue";

describe("RightPart component", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(RightPart);

    expect(wrapper.exists()).toBeTruthy();
  });
});

describe("RightPart component functionality", () => {
  it("has button disabled by default", () => {
    const wrapper = shallowMount(RightPart);

    expect(wrapper.find("button").html()).toContain("disabled");
  });

  it("enables the button when the text field is not empty", () => {
    const wrapper = shallowMount(RightPart);
    wrapper.find("input").setValue("Hello");

    expect(wrapper.find("button").attributes("disabled")).toBeFalsy();
  });

  it(" input gets an error if input text is not a valid email  after button clicked", async () => {
    const wrapper = shallowMount(RightPart);
    await wrapper.find("input").setValue("Hello");
    await wrapper.find("button").trigger("click");
    await nextTick();

    expect(wrapper.find("input").html()).toContain("border-red-500");
    expect(wrapper.find(".error-text")).toBeTruthy();
    expect(wrapper.find(".error-text").html()).toContain(
      "The email is not valid."
    );
  });

  it("Alerts when input text is a valid email", async () => {
    jest.spyOn(window, "alert").mockImplementation(() => {
      return;
    });

    const wrapper = shallowMount(RightPart);
    await wrapper.find("input").setValue("stkitziris@gmail.com");
    await wrapper.find("button").trigger("click");
    await nextTick();
    expect(wrapper.find("input").element.value).toBe("");
    expect(window.alert).toBeCalled();
  });
});
