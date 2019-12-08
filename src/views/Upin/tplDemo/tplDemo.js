import {} from '@api/Upin';
import meth from '@utils/methods';
export default {
  data() {
    return {
      pageName: 'TplDemo',
    };
  },
  watch: {},
  created() {
    meth.demo();
  },
  methods: {},
};
