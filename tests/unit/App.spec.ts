import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App component", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBeTruthy();
  });
});
