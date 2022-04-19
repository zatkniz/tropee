import { shallowMount } from "@vue/test-utils";
import CountDown from "@/components/CountDown.vue";

describe("CountDown component", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(CountDown);
    expect(wrapper.exists()).toBeTruthy();
  });
});
