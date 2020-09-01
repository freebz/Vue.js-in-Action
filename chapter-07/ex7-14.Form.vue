<!-- 코드 7-14 스크립트 태그 추가하기: chapter-07/petstore/src/components/Form.vue -->

<script>
import MyHeader from './Header.vue'
export default {
  name: 'Form',
  props: ['cartItemCount'],
  data() {
    return {
      states: {
        AL: '알라바마',
        AK: '알래스카',
        AR: '애리조나',
        CA: '캘리포니아',
        NV: '네바다'
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: '자택 주소',
        business: '직장 주소',
        home: '자택 주소',
        gift: '선물로 보내기',
        sendGift: '선물로 보내기',
        dontSendGift: '선물로 보내지 않기'
      }
    }
  },
  components: {MyHeader},
  methods: {
    submitForm() {
      alert('제출 완료');
    }
  }
}
</script>