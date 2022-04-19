import { shallowMount } from "@vue/test-utils";
import NftIcon from "@/components/NftIcon.vue";

describe("NftIcon component", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(NftIcon);
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe("NftIcon component props", () => {
  it("passes name prop and is required", () => {
    const prop = "name";
    const wrapper = shallowMount(NftIcon, {
      props: {
        name: prop,
      },
    });
    expect(wrapper.props("name")).toBe(prop);
    expect(wrapper.vm.$options.props.name.required).toBeTruthy();
  });

  it("passes size prop", () => {
    const prop = 50;
    const wrapper = shallowMount(NftIcon, {
      props: {
        size: prop,
      },
    });
    expect(wrapper.props("size")).toBe(prop);
  });

  it("passes size prop default prop", () => {
    const wrapper = shallowMount(NftIcon);
    expect(wrapper.props("size")).toBe(42);
  });
});
