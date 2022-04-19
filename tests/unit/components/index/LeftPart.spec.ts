import { shallowMount } from "@vue/test-utils";
import LeftPart from "@/components/index/LeftPart.vue";

describe("LeftPart component", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(LeftPart);
    expect(wrapper.exists()).toBeTruthy();
  });
});
