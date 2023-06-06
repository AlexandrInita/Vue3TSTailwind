<script>
import { h, ref } from 'vue'

export default {
  name:'UIRenderItem',
  props: {
    list: Array
  },

  render() {
    return this.list
  },
}
</script>