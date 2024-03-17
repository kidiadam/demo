import { defineComponent, computed } from 'vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';
import type { PropType } from 'vue';
import { isString } from 'lodash-es';

let scriptUrls = [`${import.meta.env.BASE_URL}iconfont.js`];

let MyIconFont = createFromIconfontCN({
  // scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  // scriptUrl: '//at.alicdn.com/t/font_2184398_zflo1kjcemp.js',
  // iconfont：/public/iconfont.js
  scriptUrl: scriptUrls,
});

export default defineComponent({
  name: 'IconFont',
  props: {
    type: {
      type: String as PropType<string>,
      default: '',
    },
    prefix: {
      type: String,
      default: 'icon-',
    },
    color: {
      type: String as PropType<string>,
      default: 'unset',
    },
    size: {
      type: [Number, String] as PropType<number | string>,
      default: 14,
    },
    scriptUrl: {
      type: String as PropType<string | string[]>,
      default: '',
    },
  },
  setup(props, { attrs }) {
    if (props.scriptUrl) {
      scriptUrls = [...new Set(scriptUrls.concat(props.scriptUrl))];
      MyIconFont = createFromIconfontCN({
        scriptUrl: scriptUrls,
      });
    }

    const wrapStyleRef = computed(() => {
      const { color, size } = props;

      const fs = isString(size) ? parseFloat(size) : size;

      return {
        color,
        fontSize: `${fs}px`,
      };
    });

    return () => {
      // const { type, prefix } = props;

      // return type ? ( <MyIconFont type={type.startsWith(prefix) ? type : `${prefix}${type}`} {...attrs} style={unref(wrapStyleRef)} />) : null;
      return null
    };
  },
});
