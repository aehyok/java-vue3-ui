<script setup lang="ts">
import { watch } from "vue";
import { useImageVerify } from "./hooks";
import { verify } from "crypto";

defineOptions({
  name: "ReImageVerify"
});

interface Props {
  code?: string;
  verifyKey?: string;
}

interface Emits {
  (e: "update:code", code: string): void;
  (e: "update:verifyKey", key: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  code: ""
});

const emit = defineEmits<Emits>();

const { domRef, imgCode, captchaKey, setImgCode, getImgCode } =
  useImageVerify();

watch(
  () => props.code,
  newValue => {
    setImgCode(newValue);
    console.log(captchaKey, "verifyKey.value-------------");
  }
);
watch(imgCode, newValue => {
  emit("update:code", newValue);
  console.log(captchaKey, "verifyKey.value-------------");
  emit("update:verifyKey", captchaKey.value);
});

defineExpose({ getImgCode });
</script>

<template>
  <canvas
    ref="domRef"
    width="120"
    height="40"
    class="cursor-pointer"
    @click="getImgCode"
  />
</template>
