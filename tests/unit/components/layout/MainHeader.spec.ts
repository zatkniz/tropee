import { shallowMount } from "@vue/test-utils";
import MainHeader from "@/components/layout/MainHeader.vue";

describe("MainHeader component", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(MainHeader);
    expect(wrapper.exists()).toBeTruthy();
  });
});
