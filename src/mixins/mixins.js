export const calcBottom = {
  mounted() {
    this.handleBottom();
  },
  activated() {
    this.handleBottom();
  },
  methods: {
    handleBottom() {
      // eslint-disable-next-line no-console
      console.log(1);
    }
  }
}