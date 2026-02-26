<script lang="ts" setup>
import { computed, useCssModule } from "vue";
import { icons, type IconName } from "@assets/icons";

defineOptions({ name: "AppIcon" });

const props = withDefaults(
  defineProps<{
    icon: IconName;
    size?: number;
    spin?: boolean;
    color?: string;
    strokeWidth?: number;
  }>(),
  {
    spin: false,
    size: undefined,
    color: undefined,
  },
);

const $style = useCssModule();
const classes = computed(() => {
  const applied: string[] = [];
  if (props.spin) {
    applied.push("spin");
  }

  if (props.strokeWidth) {
    applied.push("strokeWidth");
  }

  return ["app-icon", ...applied.map((c) => $style[c])];
});

const sizesInPixels: Record<string, number> = {
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 20,
  xxlarge: 40,
};

const size = computed((): { height: string; width: string } => {
  let sizeToApply = "1em";
  if (props.size) {
    sizeToApply = `${typeof props.size === "number" ? props.size : sizesInPixels[props.size]}px`;
  }

  return {
    height: sizeToApply,
    width: sizeToApply,
  };
});

// @TODO Tech debt - property value should be updated to match token names (text-shade-2 instead of text-dark for example)
const colorMap: Record<string, string> = {
  primary: "--color--primary",
  secondary: "--color--secondary",
  "text-dark": "--color--text--shade-1",
  "text-base": "--color--text",
  "text-light": "--color--text-tint-1",
  "text-xlight": "--color--text-tint-2",
  danger: "--color--danger",
  success: "--color--success",
  warning: "--color--warning",
};

const styles = computed(() => {
  const stylesToApply: Record<string, string> = {};

  if (props.color) {
    stylesToApply.color = `var(${colorMap[props.color]})`;
  }

  if (props.strokeWidth) {
    stylesToApply["--icon--stroke-width"] = `${props.strokeWidth}px`;
  }

  return stylesToApply;
});
</script>

<template>
  <Component
    :is="icons[icon as keyof typeof icons]"
    v-if="icon"
    :class="classes"
    aria-hidden="true"
    focusable="false"
    role="img"
    :height="size.height"
    :width="size.width"
    :data-icon="props.icon"
    :style="styles"
  />
</template>

<style lang="scss" module>
.strokeWidth {
  rect,
  path {
    stroke-width: var(--icon--stroke-width);
  }
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
