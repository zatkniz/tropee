import { shallowMount } from "@vue/test-utils";
import BaseIcon from "@/components/BaseIcon.vue";

describe("BaseIcon component", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(BaseIcon);
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe("BaseIcon component props", () => {
  it("passes name prop and is required", () => {
    const prop = "name";
    const wrapper = shallowMount(BaseIcon, {
      props: {
        name: prop,
      },
    });
    expect(wrapper.props("name")).toBe(prop);
    expect(wrapper.vm.$options.props.name.required).toBeTruthy();
  });
});
