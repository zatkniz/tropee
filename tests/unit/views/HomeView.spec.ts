import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView component", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.exists()).toBeTruthy();
  });
});
